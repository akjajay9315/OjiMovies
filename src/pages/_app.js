import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>OjiMovies</title>
                <link rel="icon" type="image/png" href="public/logo.png"/>
            </Head>
            <Component {...pageProps} />
        </>
    )
}
