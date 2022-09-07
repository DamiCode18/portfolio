/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";
type Props = {}

const Navbar = (props: Props) => {
  const router = useRouter();
  return (
    <nav className="flex items-center justify-between p-4 mx-[5%] md:p-6 md:mx-[10%]">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/"><a>
          <span className="text-xl tracking-tight textBox txt-shadow font-extrabold">DamiCode</span>
        </a>
        </Link>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 rounded-lg border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            <li>
              <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 text-grey-200 hover:text-white mr-4">
                <a className={`text-base ${router.route === '/' && "underline"}`}>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/projects" className="block mt-4 lg:inline-block lg:mt-0 text-grey-200 hover:text-white mr-4">
                <a
                  className={`text-base ${router.route === '/projects' && "underline"}`}
                >Projects</a>
              </Link>
            </li>
            <li>
              <Link href="/about" className="block mt-4 lg:inline-block lg:mt-0 text-grey-200 hover:text-white mr-4">
                <a className={`text-base ${router.route === '/about' && "underline"}`}>About Me</a>
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-grey-200 hover:text-white">
                <a className={`text-base ${router.route === '/contact' && "underline"}`}>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar