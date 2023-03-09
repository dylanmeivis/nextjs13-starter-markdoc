import { glob } from "glob";
import path from "path";
import fs from 'fs';
import Markdoc from '@markdoc/markdoc';
import React from "react";
import TableOfContents from "../(blog.components)/table.of.contents";
import matter from "gray-matter";
import { Metadata } from "next";
import { components, config } from "../config.markdoc";

const ARTICLES_PATH = "src/app/blog/(articles)";
const POSTS_DIR = path.join(process.cwd(), ARTICLES_PATH);

type Params = {
    slug: string
}

type PageProps = {
    params: Params
}

export const dynamicParams = false;

export async function generateStaticParams() {
    const POSTS_DIR = path.join(process.cwd(), ARTICLES_PATH);
    const postPaths = await glob(path.join(POSTS_DIR, '**/*.md'));
    return postPaths.map(postPath => {
        return { slug: path.basename(postPath, path.extname(postPath)) }
    });
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { title } = await getMarkdownContent(params.slug);
    return { title: title }
}

async function getMarkdownContent(slug: string | undefined) {
    const filePath = path.join(POSTS_DIR, slug + '.md');
    const source = fs.readFileSync(filePath, 'utf-8');
    const matterResult = matter(source);
    const { title, type } = matterResult.data;
    const ast = Markdoc.parse(source);
    const content = Markdoc.transform(ast, config);
    return { content, title };
}

function extractHeadings(node: any, sections: any[] = []) {
    if (node) {
        if (node.name === 'Heading') {
            const title = node.children[0];

            if (typeof title === 'string') {
                sections.push({
                    ...node.attributes,
                    title
                });
            }
        }

        if (node.children) {
            for (const child of node.children) {
                extractHeadings(child, sections);
            }
        }
    }

    return sections;
}

export default async function BlogPost({ params }: PageProps) {
    const { content } = await getMarkdownContent(params.slug);
    const tableOfContents = extractHeadings(content);

    return (
        <>
            <TableOfContents tableOfContents={tableOfContents} />
            {Markdoc.renderers.react(content, React, { components })}
        </>
    )
}