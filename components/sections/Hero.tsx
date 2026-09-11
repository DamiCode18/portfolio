/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import avatar from "../../pages/assets/avatar.jpeg";
import Button from "../Button";
import TagPill from "../TagPill";
import ThemeToggle from "../ThemeToggle";
import Reveal from "../Reveal";
import Magnetic from "../motion/Magnetic";
import Scramble from "../motion/Scramble";
import { customLoader } from "../../utils/imageLoader";
import Socials from "../../utils/socials";
import {
  Draggable,
  finePointer,
  gsap,
  reducedMotion,
  registerMotion,
  SplitText,
} from "../../utils/motion";

const floatingTags: {
  label: string;
  color: "yellow" | "blue" | "green" | "pink";
  tilt: number;
}[] = [
  { label: "React", color: "blue", tilt: -6 },
  { label: "TypeScript", color: "yellow", tilt: 4 },
  { label: "Node.js", color: "green", tilt: -3 },
  { label: "Full-stack", color: "pink", tilt: 5 },
  { label: "Performance", color: "blue", tilt: -4 },
  { label: "Accessibility", color: "yellow", tilt: 3 },
];

const capabilities = [
  {
    title: "Full-stack Delivery",
    detail:
      "Products taken from idea to production, end to end — frontend, API and database.",
  },
  {
    title: "Frontend Engineering",
    detail:
      "React, Next.js, Vue and TypeScript interfaces built to scale and stay fast.",
  },
  {
    title: "Backend & APIs",
    detail:
      "Node and Nest.js services with Prisma and Postgres, plus headless CMS integrations.",
  },
  {
    title: "UI Engineering",
    detail:
      "Pixel-perfect, responsive, accessible components with Tailwind and Chakra.",
  },
  {
    title: "Performance",
    detail:
      "Lean bundles, fast loads and smooth runtime — measured, not guessed.",
  },
  {
    title: "Product Collaboration",
    detail:
      "Working closely with designers, founders and stakeholders to ship the right thing.",
  },
];

const Hero = () => {
  const scope = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);

  // Entrance: badge → headline characters → toggle pops in → subline decodes
  // → CTAs → tags slide in and become draggable.
  useEffect(() => {
    if (reducedMotion() || !scope.current) return; // reduced-motion CSS shows everything
    registerMotion();

    let split: SplitText | undefined;
    let cancelled = false;
    const ctx = gsap.context(() => {}, scope);

    // Split once fonts are in so the glyph boxes are final. `ctx.add` runs
    // the work inside the context so it's reverted on unmount.
    document.fonts.ready.then(() => {
      if (cancelled) return;
      ctx.add(() => {
        split = new SplitText(".hero-word", { type: "chars", charsClass: "hero-char" });
        gsap.set(".hero-line", { perspective: 600 });

        const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.7 } });
        tl.fromTo(".hero-badge", { y: 16, opacity: 0 }, { y: 0, opacity: 1 })
          .fromTo(
            ".hero-char",
            { yPercent: 80, opacity: 0, rotateX: -50 },
            { yPercent: 0, opacity: 1, rotateX: 0, duration: 0.9, ease: "back.out(1.6)", stagger: 0.045 },
            "-=0.3"
          )
          .set(".hero-line", { opacity: 1 }, "<")
          .fromTo(
            "h1 button",
            { scale: 0, rotate: -90 },
            { scale: 1, rotate: 0, duration: 0.9, ease: "elastic.out(1, 0.5)" },
            "-=0.6"
          )
          .set(".hero-sub", { opacity: 1 }, "-=0.5")
          .to(
            ".hero-sub-part",
            { duration: 1.2, scrambleText: { text: "{original}", chars: "upperCase", speed: 0.5 } },
            "<"
          )
          .fromTo(".hero-cta", { y: 16, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1 }, "-=0.8")
          .fromTo(
            ".hero-tag",
            { x: -48, opacity: 0 },
            { x: 0, opacity: 1, stagger: 0.08 },
            "-=0.7"
          )
          .add(() => {
            // Tags can be picked up and thrown once they've arrived.
            if (!finePointer() || !stage.current) return;
            Draggable.create(".hero-tag", {
              type: "x,y",
              bounds: stage.current,
              inertia: true,
              edgeResistance: 0.85,
              cursor: "grab",
              activeCursor: "grabbing",
            });
          });
      });
    });

    return () => {
      cancelled = true;
      split?.revert();
      ctx.revert();
    };
  }, []);

  return (
    <section id="hero" ref={scope}>
      <div ref={stage} className="relative mx-[6%] pt-24 mt-6 md:pt-16">
        <div className="hidden lg:block">
          {floatingTags.map((tag, i) => (
            <div
              key={tag.label}
              className="hero-tag hero-anim absolute left-0"
              style={{ top: `${i * 64 + 80}px` }}
            >
              <TagPill
                label={tag.label}
                color={tag.color}
                tilt={tag.tilt}
                animate
              />
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <div className="hero-badge hero-anim mb-6 flex items-center justify-center gap-2 text-sm font-semibold text-muted">
            <span>Hey, I'm</span>
            <span className="inline-block h-6 w-6 overflow-hidden rounded-full align-middle">
              <Image
                src={avatar}
                alt="Damilare"
                width={24}
                height={24}
                loader={customLoader}
                className="object-cover"
              />
            </span>
            <span>Damilare</span>
            <span className="animate-wave inline-block">👋</span>
          </div>

          <h1 className="font-display bolder-text uppercase font-extrabold leading-[0.95] tracking-tight text-[clamp(2.75rem,12.5vw,8.5rem)]">
            <span className="hero-line hero-anim block whitespace-nowrap">
              <span className="hero-word">S</span>
              <ThemeToggle />
              <span className="hero-word">ftware</span>
            </span>
            <span className="hero-line hero-anim block whitespace-nowrap">
              <span className="hero-word">Engineer</span>
            </span>
          </h1>

          <p className="hero-sub hero-anim mx-auto mt-8 max-w-xl text-sm font-bold text-muted md:text-lg">
            <span className="hero-sub-part">
              Building fast, accessible products end to end — from
            </span>{" "}
            <span className="hero-sub-part text-fg">React &amp; Next.js</span>{" "}
            <span className="hero-sub-part">frontends to</span>{" "}
            <span className="hero-sub-part text-fg">Node &amp; Postgres</span>{" "}
            <span className="hero-sub-part">backends.</span>
          </p>

          <div className="hero-cta hero-anim mt-10 mb-8 flex justify-center">
            <Magnetic>
              <a
                href={process.env.NEXT_PUBLIC_CV}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button name="RESUME" />
              </a>
            </Magnetic>
          </div>
          <div className="hero-cta hero-anim flex justify-center">
            <Socials />
          </div>
        </div>
      </div>

      <div className="mx-[6%] mt-24">
        <Scramble
          text="What I Do"
          className="text-center text-xs font-bold uppercase tracking-[0.3em] text-subtle"
        />
        <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 90} className="h-full">
              <div className="h-full rounded-2xl border border-line bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg">
                <p className="mb-3 text-xs font-bold tracking-widest text-subtle">
                  0{i + 1}
                </p>
                <h3 className="mb-2 text-base font-extrabold">{c.title}</h3>
                <p className="text-sm leading-relaxed text-subtle">{c.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
