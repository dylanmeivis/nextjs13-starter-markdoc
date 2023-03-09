
type CalloutProps = {
    children: any
    title: string
}

export default function Callout({ children, title }: CalloutProps) {
    return (
        <div className="my-4 space-y-4 flex flex-col bg-blue-300">
            <div className="text-3xl text-blue-500 font-semibold">{title}</div>
            <div>{children}</div>
        </div>
    )
}