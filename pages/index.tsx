import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from './components/Navbar'
import Homepage from './Homepage'
// import Contact from './contact'
// import About from './components/About'
// import Projects from './components/Projects'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Damicode | Portfolio</title>
        <link href="http://fonts.cdnfonts.com/css/sofia-pro" rel="stylesheet" />
      </Head>
      <Navbar />
        <Homepage name={''} />
        {/* <About />
      <Projects /> */}
      {/* <Contact name="contact" formData={[]} required /> */}
      <footer className={styles.footer}>
        <p>
          Copyright {new Date().getFullYear()} &copy; Damicode
        </p>
       <p>Designed by Bolub</p>
      </footer>
    </div>
  )
}

export default Home
