/* eslint-disable react/no-unescaped-entities */
import React, { Fragment } from "react";
import Image from "next/image";
import avatar from "./assets/avatar.jpeg";
import Head from "next/head";
import Button from "./components/Button";
import { customLoader } from "../utils/imageLoader";
import Socials from "../utils/socials";
import Skills from "../utils/skills";

type Props = {
  name: string;
};

const Homepage = (props: Props) => {
  return (
    <Fragment>
      <Head>
        <title>Damicode | Home</title>
      </Head>
      <div className="flex mx-[10%] justify-center pt-20 mt-10">
        <div className="text-center lg:text-left my-20 max-w-[630px] md:mr-14">
          <h1 className="text-2xl md:text-5xl bolder-text font-extrabold">
            Hi<span className="inline-block ml-1 animate-wave">👋</span>, I'm Damilare
          </h1>
          <p className="max-w-[450px] xl:max-w-[100%] text-justify leading-loose text-sm md:text-lg font-bold my-10">
            I am a Software Engineer based in Lagos, Nigeria with 4 years of
            software development experience. I am available for Remote or Full
            Time jobs.
          </p>
          <div className="text-center lg:text-left">
            <div className="mt-[4rem] mb-[2rem]">
              <a
                href={process.env.NEXT_PUBLIC_CV}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button name="RESUME" />
              </a>
            </div>
            <div className="flex justify-center lg:justify-start">
              <Socials />
            </div>
          </div>
        </div>
        <div className="rounded p-4 hidden lg:block animate-giggle">
          <Image
            className="rounded-3xl object-cover"
            src={avatar}
            alt="Landscape picture"
            width={336}
            height={492}
            loader={customLoader}
          />
        </div>
      </div>
      <div className="flex justify-center text-center mx-auto mt-5 sm:mt-20">
        <Skills />
      </div>
    </Fragment>
  );
};

export default Homepage;
