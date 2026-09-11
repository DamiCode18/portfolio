// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="theme-color" content="#000000" />
          {/* Applies the saved/system theme before first paint, so the page
              never flashes the wrong colours on load. */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
(function () {
  var root = document.documentElement;
  root.classList.add('js');
  var dark = true;
  try {
    var stored = localStorage.getItem('theme');
    dark = stored
      ? stored === 'dark'
      : !window.matchMedia('(prefers-color-scheme: light)').matches;
  } catch (e) {}
  if (dark) root.classList.add('dark');
  var meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', dark ? '#000000' : '#f5f5f5');
})();
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument