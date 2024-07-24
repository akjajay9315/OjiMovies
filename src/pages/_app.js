import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Movies Now</title>
                <link rel="icon" type="image/png" href="public/logo.png"/>
            </Head>
            <Component {...pageProps} />
        </>
    )
}
