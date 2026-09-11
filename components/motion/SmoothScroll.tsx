import React, { useEffect, useRef } from "react";
import {
  motionConfig,
  reducedMotion,
  registerMotion,
  ScrollSmoother,
} from "../../utils/motion";

/** Offset so anchored sections land just below the fixed navbar. */
const NAV_OFFSET = "top 88px";

/**
 * Wraps the scrolling content in GSAP's ScrollSmoother. Anything `fixed`
 * (nav, cursor, hover preview) must live outside this wrapper, because the
 * content inside is transformed.
 */
const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const wrapper = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!motionConfig.smoothScroll || reducedMotion()) return;
    if (!wrapper.current || !content.current) return;
    registerMotion();

    const smoother = ScrollSmoother.create({
      wrapper: wrapper.current,
      content: content.current,
      smooth: 1.1,
      effects: true,
      smoothTouch: false,
    });
    document.documentElement.classList.add("smooth");

    // Anchor links: native hash jumps and next/link both scroll the window
    // to where the element *would* be without the transform, so route them
    // through the smoother instead. Capture phase so this runs before
    // next/link's handler (which respects defaultPrevented).
    const onClick = (event: MouseEvent) => {
      if (event.metaKey || event.ctrlKey || event.button !== 0) return;
      const anchor = (event.target as Element).closest<HTMLAnchorElement>(
        'a[href^="#"], a[href^="/#"]'
      );
      if (!anchor) return;
      const id = anchor.getAttribute("href")!.replace(/^\/?#/, "");
      const target = document.getElementById(id);
      if (!target) return;
      event.preventDefault();
      history.pushState(null, "", `#${id}`);
      smoother.paused(false);
      smoother.scrollTo(target, true, NAV_OFFSET);
    };
    document.addEventListener("click", onClick, true);

    // Landing directly on /#section
    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1));
      if (target) {
        requestAnimationFrame(() => smoother.scrollTo(target, false, NAV_OFFSET));
      }
    }

    return () => {
      document.removeEventListener("click", onClick, true);
      smoother.kill();
      document.documentElement.classList.remove("smooth");
    };
  }, []);

  return (
    <div id="smooth-wrapper" ref={wrapper}>
      <div id="smooth-content" ref={content}>
        {children}
      </div>
    </div>
  );
};

export default SmoothScroll;
