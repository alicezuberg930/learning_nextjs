
export const metadata = {
    title: 'Blog details',
    description: 'This is a blog details page',
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
