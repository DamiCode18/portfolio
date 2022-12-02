import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import "@fontsource/league-spartan"
import Seo from '../components/Seo'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Seo />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
