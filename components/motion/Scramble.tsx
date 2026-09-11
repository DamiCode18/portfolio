import React, { useEffect, useRef } from "react";
import { gsap, reducedMotion, registerMotion } from "../../utils/motion";

type Props = {
  text: string;
  className?: string;
  as?: "p" | "span" | "h3";
};

/**
 * Renders `text` normally (so it's there for SEO and without JS), then
 * "decodes" it from random glyphs the first time it scrolls into view.
 */
const Scramble = ({ text, className = "", as = "p" }: Props) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion()) return;
    registerMotion();

    const tween = gsap.to(el, {
      duration: 1.1,
      scrambleText: {
        text: "{original}",
        chars: "upperCase",
        speed: 0.5,
        revealDelay: 0.15,
      },
      scrollTrigger: { trigger: el, start: "top 92%", once: true },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [text]);

  return React.createElement(as, { ref, className }, text);
};

export default Scramble;
