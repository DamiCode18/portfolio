import React, { useEffect, useRef } from "react";
import {
  gsap,
  reducedMotion,
  registerMotion,
  SplitText,
} from "../../utils/motion";

type Props = {
  children: string;
  className?: string;
};

/**
 * A section heading whose characters cascade in when it scrolls into view.
 * Hidden via `.js .split-heading` until the split is ready, so it never
 * flashes unsplit; without JS or with reduced motion it just shows.
 */
const SplitHeading = ({ children, className = "" }: Props) => {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion()) return;
    registerMotion();

    let split: SplitText | undefined;
    let tween: gsap.core.Tween | undefined;
    let cancelled = false;

    // Split after fonts load so line breaks are final.
    document.fonts.ready.then(() => {
      if (cancelled || !ref.current) return;
      split = new SplitText(ref.current, { type: "chars,words", charsClass: "split-char" });
      gsap.set(ref.current, { perspective: 600 });
      tween = gsap.from(split.chars, {
        yPercent: 70,
        opacity: 0,
        rotateX: -45,
        duration: 0.8,
        ease: "back.out(1.4)",
        stagger: 0.03,
        scrollTrigger: { trigger: ref.current, start: "top 88%", once: true },
      });
      gsap.set(ref.current, { opacity: 1 });
    });

    return () => {
      cancelled = true;
      tween?.scrollTrigger?.kill();
      tween?.kill();
      split?.revert();
    };
  }, [children]);

  return (
    <h2 ref={ref} className={`split-heading ${className}`}>
      {children}
    </h2>
  );
};

export default SplitHeading;
