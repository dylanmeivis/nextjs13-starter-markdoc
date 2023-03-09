export default function TableOfContents({ tableOfContents }: any) {
    const items: any[] = tableOfContents.filter(
        (item: any) => item.level === 1 || item.level === 2 || item.level === 3
    );

    return (
        <div className="p-8 space-y-4">
            <div className="text-2xl font-semibold">Inhoudsopgave</div>
            <ul className="pl-2 space-y-2 list-disc list-inside text-blue-500">
                {items.map((item) => {
                    const href = `#${item.title}`;
                    const active =
                        typeof window !== 'undefined' && window.location.hash === href;
                    return (
                        <li
                            key={item.title}
                            className={[
                                active ? 'text-red-500' : undefined,
                                item.level === 2 ? 'pl-4' : item.level === 3 ? 'pl-10' : undefined,
                            ]
                                .join('')}
                        >
                            <a href={href}>
                                {item.title}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}