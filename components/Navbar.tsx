import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Socials from "../utils/socials";
import { originOf, useTheme } from "../utils/useTheme";
import Magnetic from "./motion/Magnetic";
import {
  Flip,
  reducedMotion,
  registerMotion,
  ScrollSmoother,
} from "../utils/motion";

const sectionIds = ["hero", "work", "about", "contact"];

const links = [
  { id: "hero", label: "Home" },
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
];

/** Compact sun/moon switch for the nav — the hero's toggle stays the hero piece. */
const ThemeButton = ({ className = "" }: { className?: string }) => {
  const { theme, toggle } = useTheme();
  const dark = theme === "dark";
  return (
    <button
      type="button"
      onClick={(event) => toggle(originOf(event.currentTarget))}
      aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
      aria-pressed={dark}
      title={`Switch to ${dark ? "light" : "dark"} mode`}
      className={`flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-fg transition duration-300 hover:border-accent hover:text-accent ${className}`}
    >
      {dark ? (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
          <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 1 0 10.5 10.5z" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          aria-hidden="true"
          className="h-4 w-4"
        >
          <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
          <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4" />
        </svg>
      )}
    </button>
  );
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");
  // The observer reports only the entries that changed, so we track the
  // visibility of every section across callbacks.
  const visible = useRef<Record<string, boolean>>({});

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    // Watch a narrow strip just below the fixed navbar, so the section
    // currently sitting under it is the one highlighted. Two sections can
    // straddle that strip at once, in which case the lower one has just
    // scrolled into place and should win.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visible.current[entry.target.id] = entry.isIntersecting;
        });
        const lowest = [...sectionIds]
          .reverse()
          .find((id) => visible.current[id]);
        if (lowest) setActive(lowest);
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // The active-link highlight is a single element that glides between links
  // (GSAP Flip). It's created outside React so moving it in the DOM is safe.
  const navList = useRef<HTMLUListElement>(null);
  const highlight = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    const list = navList.current;
    if (!list) return;
    const target = list.querySelector<HTMLLIElement>(`li[data-nav="${active}"]`);
    if (!target) return;

    if (!highlight.current) {
      const span = document.createElement("span");
      span.setAttribute("aria-hidden", "true");
      span.className = "absolute inset-0 rounded-full bg-fg/10";
      highlight.current = span;
      target.appendChild(span);
      return;
    }
    const el = highlight.current;
    if (target.contains(el)) return;
    if (reducedMotion()) {
      target.appendChild(el);
      return;
    }
    registerMotion();
    const state = Flip.getState(el);
    target.appendChild(el);
    Flip.from(state, { duration: 0.45, ease: "power3.out" });
  }, [active]);

  // Thin reading-progress bar along the bottom edge of the nav. Updated
  // directly on the element (no re-render) and throttled to one frame.
  const progress = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      if (progress.current) {
        progress.current.style.transform = `scaleX(${ratio})`;
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // While the mobile menu is open: lock page scroll and close on Escape.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    ScrollSmoother.get()?.paused(true);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      ScrollSmoother.get()?.paused(false);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const desktopLink =
    "relative z-10 block rounded-full px-3 py-2 text-[13px] font-semibold transition hover:bg-fg/10";

  const mobileLinks = [...links, { id: "contact", label: "Contact" }];

  return (
    <>
      <nav className="fixed top-0 z-40 w-full bg-bg/80 backdrop-blur-md">
        <div className="mx-[6%] flex items-center justify-between py-4">
          <Link href="/#hero">
            <a
              onClick={() => setOpen(false)}
              className="txt-shadow text-xl font-extrabold leading-relaxed"
            >
              DamiCode
            </a>
          </Link>

          <div className="hidden items-center gap-3 md:flex">
            <ul
              ref={navList}
              className="flex items-center rounded-full border border-line bg-surface px-2 py-1"
            >
              {links.map((link) => (
                <li key={link.id} data-nav={link.id} className="relative">
                  <Link href={`/#${link.id}`}>
                    <a className={desktopLink}>{link.label}</a>
                  </Link>
                </li>
              ))}
              <li className="relative">
                <a
                  href="https://kokua.wiki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={desktopLink}
                >
                  Resources
                </a>
              </li>
            </ul>
            <Magnetic>
              <Link href="/#contact">
                <a className="block rounded-full bg-fg px-4 py-2 text-[13px] font-bold text-bg transition duration-300 hover:opacity-85">
                  Get in Touch
                </a>
              </Link>
            </Magnetic>
            <ThemeButton />
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative flex h-10 w-10 items-center justify-center md:hidden"
          >
            <span
              className={`absolute h-[2px] w-6 rounded bg-fg transition duration-300 ${
                open ? "rotate-45" : "-translate-y-[4px]"
              }`}
            />
            <span
              className={`absolute h-[2px] w-6 rounded bg-fg transition duration-300 ${
                open ? "-rotate-45" : "translate-y-[4px]"
              }`}
            />
          </button>
        </div>

        <div
          ref={progress}
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-accent"
          style={{ transform: "scaleX(0)" }}
        />
      </nav>

      {/* Full-screen mobile menu. Sits beneath the nav so the brand and the
          close button stay put; opaque so nothing bleeds through. */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-30 flex flex-col bg-bg px-[6%] pb-10 pt-28 transition-[opacity,visibility] duration-300 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ul>
          {mobileLinks.map((link, i) => (
            <li
              key={link.id}
              className={`transition duration-500 ease-out ${
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: open ? `${80 + i * 60}ms` : "0ms" }}
            >
              <Link href={`/#${link.id}`}>
                <a
                  onClick={() => setOpen(false)}
                  className={`flex items-baseline gap-4 border-b border-line py-4 font-display text-4xl font-black uppercase tracking-tight transition-colors ${
                    active === link.id ? "text-accent" : "text-fg"
                  }`}
                >
                  <span className="text-xs font-bold tracking-widest text-subtle">
                    0{i + 1}
                  </span>
                  {link.label}
                </a>
              </Link>
            </li>
          ))}
          <li
            className={`transition duration-500 ease-out ${
              open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{
              transitionDelay: open ? `${80 + mobileLinks.length * 60}ms` : "0ms",
            }}
          >
            <a
              href="https://kokua.wiki"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-baseline gap-4 py-4 font-display text-4xl font-black uppercase tracking-tight text-fg"
            >
              <span className="text-xs font-bold tracking-widest text-subtle">
                0{mobileLinks.length + 1}
              </span>
              Resources
              <span aria-hidden="true" className="text-2xl text-subtle">
                ↗
              </span>
            </a>
          </li>
        </ul>

        <div
          className={`mt-auto flex items-center justify-between transition duration-500 ease-out ${
            open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{ transitionDelay: open ? "420ms" : "0ms" }}
        >
          <div className="flex items-center">
            <Socials />
            <ThemeButton className="ml-2" />
          </div>
          <Link href="/#contact">
            <a
              onClick={() => setOpen(false)}
              className="whitespace-nowrap rounded-full bg-fg px-5 py-3 text-sm font-bold text-bg"
            >
              Get in Touch
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
