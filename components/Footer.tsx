import React from "react";
import Link from "next/link";
import Marquee from "./Marquee";
import Reveal from "./Reveal";
import Magnetic from "./motion/Magnetic";
import Scramble from "./motion/Scramble";

const navigate = [
  { label: "Home", href: "/#hero" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const elsewhere = [
  { label: "GitHub", href: "https://www.github.com/damicode18" },
  { label: "GitLab", href: "https://www.gitlab.com/damidhrey" },
  { label: "X / Twitter", href: "https://www.twitter.com/dami_code" },
  { label: "Instagram", href: "https://www.instagram.com/damicode_" },
  { label: "Resources", href: "https://kokua.wiki" },
];

const linkClass =
  "inline-flex items-center gap-1 text-sm text-muted transition duration-300 hover:text-accent hover:translate-x-0.5";

const eyebrowClass = "text-xs font-bold uppercase tracking-[0.3em] text-subtle";

const Footer = () => {
  return (
    <footer className="mt-24">
      <Marquee text="Get in touch •" />

      <Reveal>
        <div className="mx-[6%] grid grid-cols-1 gap-12 py-16 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <Link href="/#hero">
              <a className="txt-shadow text-2xl font-extrabold">DamiCode</a>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Software engineer building fast, accessible products end to end
              — from the interface to the API.
            </p>
            <div className="mt-6">
              <Magnetic>
                <Link href="/#contact">
                  <a className="block rounded-full bg-fg px-5 py-3 text-sm font-bold text-bg transition duration-300 hover:opacity-85">
                    Start a project
                  </a>
                </Link>
              </Magnetic>
            </div>
          </div>

          <div>
            <Scramble text="Navigate" className={eyebrowClass} />
            <ul className="mt-5 space-y-3">
              {navigate.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a className={linkClass}>{link.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Scramble text="Elsewhere" className={eyebrowClass} />
            <ul className="mt-5 space-y-3">
              {elsewhere.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {link.label}
                    <span aria-hidden="true" className="text-xs">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      <div className="mx-[6%] flex flex-wrap items-center justify-between gap-4 border-t border-line py-6 text-xs text-subtle">
        <p>&copy; {new Date().getFullYear()} Damilare Adebayo. All rights reserved.</p>
        <Link href="/#hero">
          <a className="inline-flex items-center gap-1 transition duration-300 hover:text-accent">
            Back to top
            <span aria-hidden="true">↑</span>
          </a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
