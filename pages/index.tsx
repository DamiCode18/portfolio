import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import About from './components/About'
import Projects from './components/Projects'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Damicode | Portfolio</title>
        <link href="http://fonts.cdnfonts.com/css/sofia-pro" rel="stylesheet" />
      </Head>
      <Navbar />
        <Homepage />
        <About />
      <Projects />
      <footer className={styles.footer}>
        <span className={styles.logo}>
          {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
          Damicode
        </span>
      </footer>
    </div>
  )
}

export default Home
