import React from "react";
import Link from 'next/link'
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="fixed w-full flex top-0 overflow-hidden flex-wrap items-center justify-between px-2 py-3 mb-10 bg-black">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between md:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a
                className="text-xl txt-shadow font-extrabold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white"
              >
                DamiCode
              </a>
            </Link>
            <button
              className="text-white bg-white cursor-pointer text-xl tracking-tight leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <span className="sr-only">Main Menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
          </div>
          <div
            className={
              "md:flex flex-grow items-center justify-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col md:flex-row list-none md:ml-auto">
              <li className="nav-item">
                <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 text-grey-200 hover:text-white mr-4">
                  <a className={`text-base px-3 py-2 flex items-center hover:opacity-75 ${router.route === '/' && "underline"}`}>Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/projects" className="block mt-4 lg:inline-block lg:mt-0 text-grey-200 hover:text-white mr-4">
                  <a className={`text-base px-3 py-2 flex items-center hover:opacity-75 ${router.route === '/projects' && "underline"}`}>Projects</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className="block mt-4 lg:inline-block lg:mt-0 text-grey-200 hover:text-white mr-4">
                  <a className={`text-base px-3 py-2 flex items-center hover:opacity-75 ${router.route === '/about' && "underline"}`}>About Me</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-grey-200 hover:text-white mr-4">
                  <a className={`text-base px-3 py-2 flex items-center hover:opacity-75 ${router.route === '/contact' && "underline"}`}>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}