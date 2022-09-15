/* eslint-disable react/no-unescaped-entities */
import React, { Fragment } from 'react'
import Image from 'next/image'
import avatar from './assets/avatar.jpeg'
import Head from 'next/head';
import Button from './components/Button'
import { customLoader } from "../utils/strapiImageLoader"
import Socials from '../utils/socials';
type Props = {}

const About = (props: Props) => {
  return (
    <Fragment>
      <Head>
        <title>Damicode | About </title>
      </Head>
      <div className="about flex mx-[10%] justify-center mt-5">
        <div className="text-center xl:text-left max-w-[630px] xl:mr-14">
          <h1 className="head-shadow">About Me</h1>
          <p className="text-justify leading-loose text-sm md:text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
          </p>
          <div className="mt-[4rem] mb-[2rem]">
            <a href={process.env.NEXT_PUBLIC_CV} target="_blank" rel="noopener noreferrer">
              <Button name="RESUME" />
            </a>
          </div>
          <div className="flex justify-center xl:justify-start"><Socials /></div>
        </div>
        <div className="rounded p-4 hidden xl:block animate-giggle">
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
    </Fragment>
  )
}

export default About;