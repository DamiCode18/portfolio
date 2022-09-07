import React,{ Fragment, useEffect} from 'react'
import Head from 'next/head'
import axios from 'axios'
type Props = {}

const Projects = (props: Props) => {
  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_DATA_URL}`)
    .then(response=>
      console.log(response.data.data)
    )
    .catch(err=>console.log(err))
  }, [])
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

export default Projects;