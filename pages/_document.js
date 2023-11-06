import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <link rel="stylesheet" href="node_modules/smartbanner.js/dist/smartbanner.min.css" /> 
          <Script src="node_modules/smartbanner.js/dist/smartbanner.min.js"></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
