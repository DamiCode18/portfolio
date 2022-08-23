/* eslint-disable react/no-unescaped-entities */
import React, { Fragment } from 'react'
import Image from 'next/image'
import avatar from './assets/avatar.jpeg'
import Head from 'next/head';
import Button from './components/Button'
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
          <div className="flex justify-center xl:justify-start">
          <a href="https://www.facebook.com/OfficialDammires" target="_blank" rel="noopener noreferrer">
              <svg className="socials mr-4" width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M16 0.75C7.16344 0.75 0 7.91344 0 16.75C0 25.5866 7.16344 32.75 16 32.75C24.8366 32.75 32 25.5866 32 16.75C32 7.91344 24.8366 0.75 16 0.75ZM17.6677 17.4528V26.1577H14.066V17.4531H12.2667V14.4534H14.066V12.6524C14.066 10.2052 15.0821 8.75 17.9688 8.75H20.372V11.7501H18.8698C17.7461 11.7501 17.6718 12.1693 17.6718 12.9517L17.6677 14.4531H20.3891L20.0706 17.4528H17.6677Z" fill="white" />
              </svg>
            </a>
            <a href="https://www.twitter.com/dami_code" target="_blank" rel="noopener noreferrer">
              <svg className="socials mr-4" width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M16 0.75C7.16344 0.75 0 7.91344 0 16.75C0 25.5866 7.16344 32.75 16 32.75C24.8366 32.75 32 25.5866 32 16.75C32 7.91344 24.8366 0.75 16 0.75ZM15.5544 14.3086L15.5208 13.755C15.4201 12.3201 16.3042 11.0094 17.7032 10.501C18.218 10.3202 19.0909 10.2976 19.6617 10.4558C19.8856 10.5236 20.3108 10.7495 20.613 10.9529L21.1614 11.3258L21.7658 11.1337C22.1015 11.032 22.5492 10.8625 22.7506 10.7495C22.9409 10.6479 23.1088 10.5914 23.1088 10.6253C23.1088 10.8173 22.6947 11.4727 22.3477 11.8342C21.8777 12.3427 22.012 12.3879 22.9633 12.0489C23.534 11.8568 23.5452 11.8568 23.4333 12.0715C23.3662 12.1845 23.0192 12.5799 22.6499 12.9415C22.0232 13.5629 21.9896 13.6307 21.9896 14.1505C21.9896 14.9527 21.6091 16.6249 21.2285 17.5401C20.5235 19.2575 19.0126 21.0314 17.5017 21.924C15.3753 23.1781 12.5438 23.4945 10.16 22.7601C9.36538 22.5115 8 21.8788 8 21.7658C8 21.7319 8.41409 21.6867 8.91772 21.6754C9.96973 21.6528 11.0218 21.359 11.9171 20.8393L12.5214 20.4777L11.8275 20.2405C10.8427 19.9015 9.95854 19.1219 9.73471 18.3875C9.66756 18.1502 9.68994 18.1389 10.3167 18.1389L10.9658 18.1276L10.4174 17.8677C9.76828 17.5401 9.17513 16.9864 8.88414 16.4215C8.6715 16.0147 8.4029 14.9866 8.48124 14.9075C8.50362 14.8736 8.73865 14.9414 9.00725 15.0318C9.77948 15.3142 9.8802 15.2464 9.43253 14.7719C8.59316 13.9132 8.33575 12.6364 8.73865 11.4275L8.92891 10.8851L9.66756 11.6195C11.1784 13.0997 12.9579 13.981 14.9948 14.2408L15.5544 14.3086Z" fill="white" />
              </svg>
            </a>
            <a href="https://www.instagram.com/damicode_" target="_blank" rel="noopener noreferrer">
              <svg className="socials mr-4" width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M16 0.75C7.16344 0.75 0 7.91344 0 16.75C0 25.5866 7.16344 32.75 16 32.75C24.8366 32.75 32 25.5866 32 16.75C32 7.91344 24.8366 0.75 16 0.75ZM12.4822 8.26822C13.3924 8.2268 13.6833 8.21667 16.0008 8.21667H15.9981C18.3164 8.21667 18.6062 8.2268 19.5164 8.26822C20.4248 8.30982 21.0453 8.45365 21.5893 8.66467C22.1511 8.88245 22.6258 9.17401 23.1004 9.64868C23.5751 10.123 23.8667 10.5991 24.0853 11.1603C24.2951 11.7029 24.4391 12.323 24.4818 13.2315C24.5227 14.1417 24.5333 14.4326 24.5333 16.7501C24.5333 19.0676 24.5227 19.3578 24.4818 20.268C24.4391 21.1761 24.2951 21.7964 24.0853 22.3391C23.8667 22.9002 23.5751 23.3763 23.1004 23.8506C22.6263 24.3253 22.1509 24.6175 21.5898 24.8355C21.0469 25.0465 20.4261 25.1903 19.5176 25.232C18.6074 25.2734 18.3174 25.2835 15.9997 25.2835C13.6824 25.2835 13.3917 25.2734 12.4815 25.232C11.5732 25.1903 10.9529 25.0465 10.41 24.8355C9.84909 24.6175 9.373 24.3253 8.89886 23.8506C8.42437 23.3763 8.13281 22.9002 7.91467 22.3389C7.70382 21.7964 7.56 21.1763 7.51822 20.2678C7.47698 19.3576 7.46667 19.0676 7.46667 16.7501C7.46667 14.4326 7.47733 14.1415 7.51804 13.2313C7.55893 12.3232 7.70294 11.7029 7.91449 11.1602C8.13316 10.5991 8.42472 10.123 8.89939 9.64868C9.37371 9.17419 9.8498 8.88263 10.4111 8.66467C10.9536 8.45365 11.5737 8.30982 12.4822 8.26822Z" fill="white" />
                <path fillRule="evenodd" clipRule="evenodd" d="M15.2353 9.75445C15.3839 9.75422 15.5438 9.75429 15.7164 9.75437L16.0008 9.75445C18.2792 9.75445 18.5493 9.76263 19.449 9.80352C20.281 9.84156 20.7326 9.98059 21.0334 10.0974C21.4316 10.2521 21.7155 10.4369 22.014 10.7356C22.3127 11.0343 22.4976 11.3187 22.6526 11.717C22.7694 12.0174 22.9086 12.469 22.9465 13.301C22.9873 14.2005 22.9962 14.4708 22.9962 16.7481C22.9962 19.0255 22.9873 19.2957 22.9465 20.1953C22.9084 21.0273 22.7694 21.4788 22.6526 21.7793C22.4979 22.1775 22.3127 22.4611 22.014 22.7596C21.7153 23.0582 21.4318 23.2431 21.0334 23.3978C20.7329 23.5151 20.281 23.6538 19.449 23.6918C18.5494 23.7327 18.2792 23.7416 16.0008 23.7416C13.7222 23.7416 13.4521 23.7327 12.5526 23.6918C11.7206 23.6534 11.269 23.5144 10.968 23.3976C10.5698 23.2429 10.2853 23.0581 9.98668 22.7594C9.68801 22.4607 9.50312 22.177 9.34809 21.7786C9.23129 21.4781 9.09209 21.0266 9.05422 20.1946C9.01334 19.295 9.00516 19.0248 9.00516 16.746C9.00516 14.4672 9.01334 14.1984 9.05422 13.2988C9.09227 12.4668 9.23129 12.0153 9.34809 11.7145C9.50276 11.3162 9.68801 11.0318 9.98668 10.7331C10.2853 10.4345 10.5698 10.2496 10.968 10.0945C11.2688 9.97721 11.7206 9.83854 12.5526 9.80032C13.3398 9.76476 13.6448 9.7541 15.2353 9.75232V9.75445ZM20.5559 11.1714C19.9905 11.1714 19.5318 11.6295 19.5318 12.195C19.5318 12.7604 19.9905 13.219 20.5559 13.219C21.1212 13.219 21.5799 12.7604 21.5799 12.195C21.5799 11.6297 21.1212 11.171 20.5559 11.171V11.1714ZM11.6185 16.7501C11.6185 14.33 13.5806 12.3679 16.0006 12.3678C18.4207 12.3678 20.3823 14.33 20.3823 16.7501C20.3823 19.1702 18.4209 21.1315 16.0008 21.1315C13.5807 21.1315 11.6185 19.1702 11.6185 16.7501Z" fill="white" />
                <path d="M16.0008 13.9056C17.5716 13.9056 18.8453 15.179 18.8453 16.7501C18.8453 18.3209 17.5716 19.5946 16.0008 19.5946C14.4297 19.5946 13.1563 18.3209 13.1563 16.7501C13.1563 15.179 14.4297 13.9056 16.0008 13.9056Z" fill="white" />
              </svg>
            </a>
            <a href="https://www.gitlab.com/damidhrey" target="_blank" rel="noopener noreferrer">
              <svg className="socials" width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" fill="white" />
              </svg>
            </a>
            <a href="https://www.github.com/damicode18" target="_blank" rel="noopener noreferrer">
              <svg className="socials" width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" fill="white" />
              </svg>
            </a>

          </div>
        </div>
        <div className="rounded p-4 hidden xl:block">
          <Image
            className="rounded-3xl object-cover"
            src={avatar}
            alt="Landscape picture"
            width={336}
            height={492}
          />
        </div>
      </div>
    </Fragment>
  )
}

export default About;