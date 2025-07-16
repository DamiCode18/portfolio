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
      <Seo title="About" description="About me page" />
      <div className="mt-20 flex mx-[10%] justify-center mb-[3rem] sm:mb-[0px]">
        <div className="text-center xl:text-left max-w-[630px] xl:mr-14">
          <h1 className="head-shadow">About Me</h1>
          <p className="text-justify leading-loose text-sm md:text-lg">
            I'm a software engineer with 7+ years of experience, I am a skilled
            and innovative professional dedicated to creating exceptional user
            experiences. Passionate about blending creativity with technical
            expertise, I have a deep understanding of frontend technologies and
            a proven track record of delivering visually stunning and highly
            functional web applications.
            <br />
            My expertise lies in HTML, CSS, and JavaScript, and I am well-versed
            in modern frameworks such as React and Vue.js. Leveraging my
            proficiency in responsive design principles, I have developed
            cross-platform applications that seamlessly adapt to various screen
            sizes and devices. I have a keen eye for detail and a commitment to
            crafting pixel-perfect designs that not only meet client
            requirements but also exceed user expectations.
            <br />
            Beyond technical skills, I am a proactive communicator and
            collaborative team player. I thrive in an agile environment where
            ideas are shared openly, and I actively contribute to code reviews
            and provide constructive feedback to fellow developers. My strong
            problem-solving abilities enable me to tackle complex challenges and
            find innovative solutions, while my attention to detail and ability
            to meet deadlines ensure the timely delivery of high-quality work.
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
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(700, 475)
            )}`}
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
