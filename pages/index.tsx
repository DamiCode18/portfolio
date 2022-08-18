import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Homepage from './homepage'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Damicode | Portfolio</title>
        <link href="https://fonts.cdnfonts.com/css/sofia-pro" rel="stylesheet" />
      </Head>
        <Homepage name={''} />
    </div>
  )
}

export default Home
