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

type Props = {
  name: string;
};

const Homepage = (props: Props) => {
  return (
    <Fragment>
      <Seo />
      <div className="flex mx-[10%] justify-center pt-10 mt-10">
        <div className="text-center lg:text-left my-5 max-w-[630px] md:mr-14">
          <h1 className="text-2xl md:text-5xl bolder-text font-extrabold">
            Hi<span className="inline-block mx-1 animate-wave">👋</span>,{" "}
            <span className="ml-1">I'm Damilare</span>
          </h1>
          <p className="max-w-[450px] xl:max-w-[100%] text-justify leading-loose text-sm md:text-lg font-bold my-10">
            I'm a software engineer with 7+ years of experience, I am a skilled
            and innovative professional dedicated to creating exceptional user
            experiences. Passionate about blending creativity with technical
            expertise, I have a deep understanding of frontend technologies and
            a proven track record of delivering visually stunning and highly
            functional web applications.
            <br />
            As a front-end developer, I am passionate about staying at the
            forefront of emerging trends and best practices in the industry. I
            constantly seek opportunities to expand my skill set, experiment
            with new technologies, and integrate cutting-edge tools into my
            workflow, for best results.
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
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(700, 475)
            )}`}
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
