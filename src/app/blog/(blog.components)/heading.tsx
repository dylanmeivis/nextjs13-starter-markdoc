type HeadingProps = {
    children: any,
    level: number
}

export default function Heading({ children, level }: HeadingProps) {
    switch (level) {
        case 1:
            return <h1 id={children} className="text-3xl font-semibold">{children}</h1>
        case 2:
            return <h2 id={children} className="text-2xl font-semibold">{children}</h2>
        case 3:
            return <h3 id={children} className="text-xl font-semibold">{children}</h3>
        case 4:
            return <h4 id={children} className="text-lg font-semibold">{children}</h4>
        case 5:
            return <h5 id={children} className="text-base font-semibold">{children}</h5>
        case 6:
            return <h6 id={children} className="text-sm font-semibold">{children}</h6>
        default:
            <div id={children} className="text-base font-semibold">{children}</div>
    }
}