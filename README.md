This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), [`Markdoc`](https://markdoc.dev/) and [`Tailwind CSS`](https://tailwindcss.com/).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000/blog/firstpost](http://localhost:3000/blog/firstpost) with your browser to see the result.

### Folder structure

The `app/blog/(articles)` directory is mapped to `/blog/*`. Markdown files in this directory are treated as pages.

So simply add a markdown file in `app/blog/(articles)` and start writing your content.

### Different folder for markdown content
You can change the folder you want your markdown content to be in by also changing the **ARTICLES_PATH** variable in `app/blog/[slug]/page.tsx`.

### Changing rendering of markdown types
You can change the way an markdown element renders by creating an component and linking it to the type in the `config.markdoc.tsx`. Markdown elements are seen as nodes. See [Markdoc Nodes](https://markdoc.dev/docs/nodes) for more information. In this example an custom rendering is created for the heading element with some Tailwind styling, and custom rendering of the paragraph element inside the `config.markdoc.tsx` file.

### Creating custom elements to use inside the markdown file
You can also create custom tags seen als components to use in your markdown file. See [Markdoc Tags](https://markdoc.dev/docs/tags) for more information. This example has en callout component with a title attribute that is passed to the component and used.

### frontmatter variables
On the top of your markdown file you can define frontmatter variables.
```md
---
title: TitleVariable
---
```
These can be used inside your content by referencing them like `{% $frontmatter.title %}.
In this example these variables are used to dynamically set the metadata of the page. By using the [`generateMetaData` method](https://beta.nextjs.org/docs/api-reference/metadata#generatemetadata:~:text=and%20layouts.-,generateMetadata,-You%20can%20use) and gray-matter to retrieve the variables from the markdown file.

### Static generation
The method [generateStaticParams](https://beta.nextjs.org/docs/api-reference/generate-static-params) is used to statically generate the routes at build time. Using [Glob](https://www.npmjs.com/package/glob) to search for all the possible routes by scanning the markdown files in the folder specified in the `ARTICLES_PATH`. Exporting the variable `dynamicParams` inside the `[slug]/page.tsx` determines if the page tries to dynamically tries to render a page when it was not statically created at build time if the value is **TRUE**, and redirects the user to the 404 page when the value is **FALSE**.

## Learn More

To learn more about Markdoc, take a look at the following resources:

- [Markdoc Documentation](https://markdoc.dev/docs/overview) - learn about Next.js features and API.
