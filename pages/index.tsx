import type { NextPage } from 'next'
import Head from 'next/head'
import Homepage from './homepage'

const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>Damicode | Portfolio</title>
        <link href="https://fonts.cdnfonts.com/css/sofia-pro" rel="stylesheet" />
      </Head>
        <Homepage name={''} />
    </div>
  )
}

export default Home
