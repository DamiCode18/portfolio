// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.2/dist/flowbite.min.css" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script src="../path/to/flowbite/dist/flowbite.js"></Script>
          {/* <Script src="https://unpkg.com/flowbite@1.5.2/dist/flowbite.js"></Script> */}
        </body>
      </Html>
    )
  }
}

export default MyDocument