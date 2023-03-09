import Heading from "./(blog.components)/heading";

const config = {
    nodes: {
        paragraph: {
            render: 'Paragraph'
        },
        heading: {
            render: 'Heading',
            attributes: {
                level: { type: String }
            }
        },
    },
};

const components = {
    Paragraph: ({ children }: any) => {
        return <div className="text-base pb-2">{children}</div>
    },
    Heading: Heading,
};

export { config, components }