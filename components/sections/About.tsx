/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import avatar from "../../pages/assets/avatar.jpeg";
import TagPill from "../TagPill";
import Reveal from "../Reveal";
import { customLoader } from "../../utils/imageLoader";
import Skills from "../../utils/skills";
import { shimmer, toBase64 } from "../../utils/Shimer";

const traits: {
  label: string;
  color: "yellow" | "blue" | "green" | "pink";
  tilt: number;
}[] = [
  { label: "Problem Solver", color: "yellow", tilt: -4 },
  { label: "Detail Obsessed", color: "blue", tilt: 3 },
  { label: "Pixel Perfect", color: "green", tilt: -2 },
  { label: "Team Player", color: "pink", tilt: 4 },
];

const facts = [
  { label: "Experience", value: "7+ years" },
  { label: "Focus", value: "Full-stack product engineering" },
  { label: "Stack", value: "React · Next.js · Node · Nest.js · Postgres" },
];

const About = () => {
  return (
    <section id="about" className="mx-[6%] py-32">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-subtle">
          Who I Am
        </p>
        <h2 className="font-display bolder-text mt-4 uppercase font-extrabold leading-[0.95] tracking-tight text-[clamp(3rem,11vw,6rem)]">
          About Me
        </h2>
      </Reveal>

      <div className="mx-auto mt-20 grid max-w-6xl grid-cols-1 items-start gap-16 lg:grid-cols-[minmax(0,320px)_1fr]">
        {/* stays a direct grid child so `sticky` has the full column to work with */}
        <div className="mx-auto w-full max-w-[320px] lg:sticky lg:top-28">
          <Reveal>
            <div className="-rotate-2 overflow-hidden rounded-3xl border border-line bg-surface shadow-lg transition duration-500 ease-out hover:rotate-0 hover:shadow-2xl">
              <Image
                className="block object-cover"
                src={avatar}
                alt="Damilare Adebayo"
                width={320}
                height={400}
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(320, 400)
                )}`}
                loader={customLoader}
              />
            </div>
          </Reveal>

          <dl className="mt-10 space-y-5">
            {facts.map((fact, i) => (
              <Reveal key={fact.label} delay={150 + i * 80}>
                <div className="grid grid-cols-[6rem_1fr] gap-4 border-b border-line pb-4">
                  <dt className="text-xs font-bold uppercase tracking-widest text-subtle">
                    {fact.label}
                  </dt>
                  <dd className="text-sm font-semibold">{fact.value}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>

        <div>
          <Reveal delay={100}>
            <p className="text-2xl font-extrabold leading-tight md:text-4xl">
              Software engineer with{" "}
              <span className="text-accent">7+ years</span> of experience,
              turning ideas into fast, polished web applications.
            </p>
          </Reveal>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted md:text-lg">
            <Reveal delay={200}>
              <p>
                I'm passionate about blending creativity with technical
                expertise. With a deep understanding of frontend technologies,
                I have a proven track record of delivering visually stunning
                and highly functional web applications — cross-platform,
                responsive, and pixel-perfect.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <p>
                Beyond the code, I'm a proactive communicator and collaborative
                team player. I thrive in agile environments where ideas are
                shared openly, contribute actively to code reviews, and take
                pride in tackling complex problems and shipping on time.
              </p>
            </Reveal>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {traits.map((trait, i) => (
              <Reveal key={trait.label} delay={i * 80}>
                <TagPill
                  label={trait.label}
                  color={trait.color}
                  tilt={trait.tilt}
                />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14">
            <div className="rounded-3xl border border-line bg-surface p-8">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-subtle">
                Tools I Use
              </p>
              <div className="mt-6 flex justify-center">
                <Skills />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
