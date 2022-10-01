/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { Fragment, useEffect, useState } from 'react'
import Head from 'next/head'
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Image from 'next/image'
import { customLoader } from '../utils/strapiImageLoader';
import { projectData } from '../utils/projects';
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
  return (
    <Fragment>
      <Head>
        <title>Damicode | Projects</title>
      </Head>
      <div className="projects mx-[10%] justify-center mt-5">
        <h1 className="head-shadow mb-10">My Projects</h1>
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4 text-center">
          {projectData && projectData.map((project: any) => (
            <div key={project.id} className="max-w-sm rounded overflow-hidden shadow-lg border-solid border-2 border-[#353131] py-2">
              <Image
                className="w-full"
                src={project.imgUrl}
                alt="Sunset in the mountains"
                width="300"
                height="150"
                loader={customLoader}
              />
              <div className="px-6 py-2">
                <div className="font-bold text-xl mb-2">
                  <a href={project.url} rel="noreferrer" target="_blank" className="underline">
                    {project.title}
                  </a>
                </div>
                <p className="text-sm text-white">
                  {project.description}
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                {project.skills && project.skills.map((skill: any) => (
                  <span key={skill} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{skill}</span>
                ))}
              </div>

            </div>
          ))
          }
          {!projectData && <p>No projects has been added yet</p>}
        </div>
      </div>
    </Fragment>
  )
}

export default Projects;