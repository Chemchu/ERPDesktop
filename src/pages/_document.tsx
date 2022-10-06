import Document, { Html, Head, Main, NextScript } from 'next/document';
import Titlebar from '../components/titlebar';

class MyDocument extends Document {
    render() {
        return (
            <Html lang='es'>
                <Head>
                    <link rel="manifest" href="/manifest.json" />
                    <meta name="theme-color" content="#fff" />
                    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Public+Sans&display=swap" rel="stylesheet" />
                </Head>
                <body
                // className='overflow-hidden rounded-lg'
                >
                    {/* <Titlebar /> */}
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument