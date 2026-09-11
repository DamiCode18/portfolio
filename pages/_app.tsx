import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Seo from '../components/Seo'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Seo />
      <a href="#hero" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
