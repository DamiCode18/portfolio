/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useState } from "react";
import { projectData } from "../../utils/projects";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import Scramble from "../motion/Scramble";
import HoverPreview, { HoverPreviewHandle } from "../motion/HoverPreview";

const FEATURED_COUNT = 4;
const LIST_PREVIEW_COUNT = 5;

const featured = projectData.slice(0, FEATURED_COUNT);
const others = projectData.slice(FEATURED_COUNT);

const Work = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleOthers = showAll ? others : others.slice(0, LIST_PREVIEW_COUNT);
  const preview = useRef<HoverPreviewHandle>(null);

  return (
    <section id="work" className="mx-[6%] py-32">
      <SectionHeading
        eyebrow="Selected Works"
        title="Projects"
        intro="A few things I've built and shipped — from fintech and developer tools to consumer web apps."
      />

      <div className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
        {featured.map((project, i) => (
          <Reveal key={project.id} delay={(i % 2) * 120} className="h-full">
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl"
            >
              {/* Oversized inner block drifts at a different speed to the page
                  (ScrollSmoother `data-speed`), giving a subtle parallax. */}
              <div className="h-64 overflow-hidden md:h-72">
                <div data-speed="0.92" className="-mt-[12%] h-[124%]">
                  <img
                    className="h-full w-full object-cover object-top transition duration-700 ease-out group-hover:scale-[1.04]"
                    src={project.imgUrl}
                    alt={project.title}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-extrabold">{project.title}</h3>
                  <span
                    aria-hidden="true"
                    className="mt-1 text-xl text-subtle transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  >
                    ↗
                  </span>
                </div>
                <p className="clamp-2 mt-3 text-sm leading-relaxed text-muted md:text-base">
                  {project.description}
                </p>
                <p className="mt-auto pt-6 text-xs font-semibold uppercase tracking-wider text-subtle">
                  {project.skills?.join(" · ")}
                </p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      {others.length > 0 && (
        <div className="mx-auto mt-24 max-w-4xl">
          <Scramble
            text="More Projects"
            className="text-xs font-bold uppercase tracking-[0.3em] text-subtle"
          />
          <HoverPreview ref={preview} />
          <ul
            className="mt-6 border-t border-line"
            onMouseLeave={() => preview.current?.hide()}
          >
            {visibleOthers.map((project, i) => (
              <li key={project.id} className="border-b border-line">
                <Reveal delay={Math.min(i, LIST_PREVIEW_COUNT - 1) * 60}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => preview.current?.show(project.imgUrl, project.title)}
                    onMouseMove={(event) => preview.current?.move(event.clientX, event.clientY)}
                    onMouseLeave={() => preview.current?.hide()}
                    className="group grid grid-cols-[1fr_auto] items-center gap-6 py-6 transition duration-300 hover:pl-3 md:grid-cols-[minmax(0,14rem)_1fr_auto]"
                  >
                    <h3 className="text-lg font-extrabold transition group-hover:text-accent">
                      {project.title}
                    </h3>
                    <div className="col-span-2 min-w-0 md:col-span-1">
                      <p className="clamp-1 text-sm text-muted">
                        {project.description}
                      </p>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-subtle">
                        {project.skills?.slice(0, 4).join(" · ")}
                      </p>
                    </div>
                    <span
                      aria-hidden="true"
                      className="col-start-2 row-start-1 text-xl text-subtle transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent md:col-start-3"
                    >
                      ↗
                    </span>
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>

          {others.length > LIST_PREVIEW_COUNT && (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAll((value) => !value)}
                aria-expanded={showAll}
                className="rounded-full border border-line-strong px-6 py-3 text-xs font-bold uppercase tracking-widest transition duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent active:translate-y-0"
              >
                {showAll
                  ? "Show fewer"
                  : `Show all ${projectData.length} projects`}
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Work;
