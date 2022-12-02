/* eslint-disable react/no-unescaped-entities */
import React, { Fragment } from "react";
import Image from "next/image";
import avatar from "./assets/avatar.jpeg";
import Button from "../components/Button";
import { customLoader } from "../utils/imageLoader";
import Socials from "../utils/socials";
import Skills from "../utils/skills";
import { shimmer, toBase64 } from "../utils/Shimer";
import Seo from "../components/Seo";

type Props = {};

const About = (props: Props) => {
  return (
    <Fragment>
      <Seo
        title="About"
        description="About me page"
      />
      <div className="mt-20 flex mx-[10%] justify-center mb-[3rem] sm:mb-[0px]">
        <div className="text-center xl:text-left max-w-[630px] xl:mr-14">
          <h1 className="head-shadow">About Me</h1>
          <p className="text-justify leading-loose text-sm md:text-lg">
            I am a frontend software engineer with about 4 years of professional
            experience, in the course of my professional career I have worked on
            great projects and that has made me extremely familiar with the
            tools and technologies involved in development. I have a good eye
            for design, am heavy on UX and performance, and am a fan of
            scalability. I know about backend development as I've written NodeJs
            and python Django in the past, so I understand the full software
            development cycle. This experience has made me not just a front-end
            engineer who gets his job done but one who does the job in a good,
            standard, and future-proof way.
          </p>
          <div className="mt-[4rem] mb-[2rem]">
            <a
              href={process.env.NEXT_PUBLIC_CV}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button name="RESUME" />
            </a>
          </div>
          <div className="flex justify-center xl:justify-start">
            <Socials />
          </div>
        </div>
        <div className="rounded p-4 hidden xl:block animate-giggle">
          <Image
            className="rounded-3xl object-cover"
            src={avatar}
            alt="Landscape picture"
            width={336}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
            height={492}
            loader={customLoader}
          />
        </div>
      </div>
      <div className="flex justify-center mt-5 sm:mt-20">
        <Skills />
      </div>
    </Fragment>
  );
};

export default About;
