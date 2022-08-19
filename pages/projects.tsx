import React,{ Fragment} from 'react'
import Head from 'next/head'
type Props = {}

const About = (props: Props) => {
  return (
    <Fragment>
    <Head>
      <title>Damicode | Projects</title>
    </Head>
    <div className="projects mx-[10%] justify-center mt-5">
        <h1 className="head-shadow">My Projects</h1>
    </div>
    </Fragment>
  )
}

export default About;