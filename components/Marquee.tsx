import React, { useEffect, useRef } from "react";
import {
  gsap,
  reducedMotion,
  registerMotion,
  ScrollTrigger,
} from "../utils/motion";

type Props = {
  text: string;
  /** Makes the whole band a link, e.g. "#contact". */
  href?: string;
  /** Accessible name for the link; the repeated text is hidden from screen readers. */
  label?: string;
  className?: string;
};

/**
 * Endless text band. With JS it's driven by GSAP so it can react to scroll:
 * faster scrolling speeds it up and skews the letters, then it settles.
 * Without JS the CSS `animate-marquee` keyframes take over.
 */
const Marquee = ({ text, href, label, className = "" }: Props) => {
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = track.current;
    if (!el || reducedMotion()) return;
    registerMotion();
    el.classList.remove("animate-marquee"); // GSAP owns the transform now

    const loop = gsap.to(el, { xPercent: -50, ease: "none", duration: 24, repeat: -1 });
    const skew = gsap.quickTo(el, "skewX", { duration: 0.4, ease: "power3" });

    const trigger = ScrollTrigger.create({
      onUpdate: (self) => {
        const velocity = self.getVelocity();
        skew(gsap.utils.clamp(-10, 10, velocity / 250));
        loop.timeScale(gsap.utils.clamp(1, 6, 1 + Math.abs(velocity) / 600));
      },
    });
    // ease back to cruising speed once scrolling stops
    const settle = () => {
      if (Math.abs(trigger.getVelocity()) < 20) {
        loop.timeScale(gsap.utils.interpolate(loop.timeScale(), 1, 0.08));
        skew(0);
      }
    };
    gsap.ticker.add(settle);

    const pause = () => loop.pause();
    const resume = () => loop.resume();
    const wrapper = el.parentElement;
    wrapper?.addEventListener("mouseenter", pause);
    wrapper?.addEventListener("mouseleave", resume);

    return () => {
      gsap.ticker.remove(settle);
      trigger.kill();
      loop.kill();
      wrapper?.removeEventListener("mouseenter", pause);
      wrapper?.removeEventListener("mouseleave", resume);
    };
  }, []);

  const item = (key: number) => (
    <span key={key} className="mx-4 text-sm font-bold uppercase tracking-widest">
      {text}
    </span>
  );

  const band = `block w-full overflow-hidden whitespace-nowrap border-y border-line-strong py-3 ${className}`;
  const content = (
    <div ref={track} aria-hidden={href ? true : undefined} className="inline-flex w-max animate-marquee">
      {Array.from({ length: 8 }).map((_, i) => item(i))}
      {Array.from({ length: 8 }).map((_, i) => item(i + 8))}
    </div>
  );

  // The band pauses on hover (see the effect), so it reads as a button to press.
  return href ? (
    <a
      href={href}
      aria-label={label ?? text}
      className={`${band} transition-colors duration-300 hover:border-accent hover:text-accent focus-visible:text-accent`}
    >
      {content}
    </a>
  ) : (
    <div className={band}>{content}</div>
  );
};

export default Marquee;
