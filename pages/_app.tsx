import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Seo from '../components/Seo'
import SmoothScroll from '../components/motion/SmoothScroll'
import Cursor from '../components/motion/Cursor'

// Anything `fixed` (nav, menu, cursor) stays outside SmoothScroll: the
// content inside it is transformed, which would break fixed positioning.
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Seo />
      <a href="#hero" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <Cursor />
      <SmoothScroll>
        <Component {...pageProps} />
        <Footer />
      </SmoothScroll>
    </>
  )
}

export default MyApp
