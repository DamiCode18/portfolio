/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from "react";
import { projectData } from "../utils/projects";
import Seo from "../components/Seo";

const Projects = () => {
  return (
    <Fragment>
      <Seo
        title="Projects"
        description={`Some of my projects`}
      />
      <div className="projects mx-[10%] justify-center mt-20 text-center">
        <h1 className="head-shadow mb-10 text-center">My Projects</h1>
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4 justify-items-center">
          {projectData &&
            projectData?.map((project: any) => (
              <div
                key={project.id}
                className="transition ease-in-out duration-300 hover:scale-80 hover:-translate-y-1 delay-150 max-w-sm rounded overflow-hidden shadow-lg border-solid border-2 border-[#353131]"
              >
                <img
                  className="w-full h-48 object-cover block"
                  src={project.imgUrl}
                  alt={project.title}
                  loading="lazy"
                />
                <div className="px-6 py-2 pt-4">
                  <div className="font-bold text-xl mb-2">
                    <a
                      href={project.url}
                      rel="noreferrer"
                      target="_blank"
                      className="underline"
                    >
                      {project.title}
                    </a>
                  </div>
                  <p className="text-sm text-white">{project.description}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  {project.skills &&
                    project?.skills?.map((skill: any) => (
                      <span
                        key={skill}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                      >
                        {skill}
                      </span>
                    ))}
                </div>
              </div>
            ))}
          {!projectData && <p>No projects has been added yet</p>}
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;
