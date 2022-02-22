import Head from 'next/head'

const Layout = ({ children, title, className }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <main className={className}>{children}</main>
        </>
    )
}

export default Layout
