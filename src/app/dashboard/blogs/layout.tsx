
export const metadata = {
    title: 'Blog list',
    description: 'This is a blog management page',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
        </>
    )
}
