/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { Fragment, useEffect, useState } from 'react'
import Head from 'next/head'
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Image from 'next/image'
import { customLoader } from '../utils/strapiImageLoader';

export interface ProjectModel {
  id: number,
  title: string,
  description: string,
  url: string,
  attributes: any,
}

export const getServerSideProps: GetServerSideProps = async ({
  res
}) => {
  try {
    const data = await fetch(`${process.env.NEXT_PUBLIC_DATA_URL}`)
      const projects = await data.json();
    return {
      props: { projects: projects.data }
    };
  } catch {
    res.statusCode = 404;
    return {
      props: {}
    };
  }
};

const Projects = ({ projects }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(projects);
  return (
    <Fragment>
      <Head>
        <title>Damicode | Projects</title>
      </Head>
      <div className="projects mx-[10%] justify-center mt-5">
        <h1 className="head-shadow">My Projects</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 text-center">
          {projects.map((project: ProjectModel) => (
            <div key={project.id} className="max-w-sm rounded overflow-hidden shadow-lg">
              <Image 
                className="w-full" 
                src={project.attributes.images.data.attributes.url} 
                alt="Sunset in the mountains" 
                width="300" 
                height="200"
                loader={customLoader} 
                />
              <div className="px-6 py-2">
                <div className="font-bold text-xl mb-2">{project.attributes.title}</div>
                <p className="text-gray-700 text-base">
                  {project.attributes.description}
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                {project.attributes.skills && project.attributes.skills.data.map((skill: any) => (
                  <span key={skill.id} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{skill.attributes.name}</span>
                ))}
              </div>

            </div>
          ))
          }
          {/* {projects} */}
        </div>
      </div>
    </Fragment>
  )
}

export default Projects;