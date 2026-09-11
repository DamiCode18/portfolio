import React, { useEffect, useRef } from "react";
import {
  finePointer,
  gsap,
  motionConfig,
  reducedMotion,
  registerMotion,
} from "../../utils/motion";

/**
 * Dot-and-ring cursor. The dot snaps to the pointer, the ring trails it and
 * grows over anything interactive. Only activates on mouse/trackpad devices.
 */
const Cursor = () => {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!motionConfig.customCursor || !finePointer() || reducedMotion()) return;
    if (!dot.current || !ring.current) return;
    registerMotion();
    document.documentElement.classList.add("custom-cursor");

    const dotX = gsap.quickTo(dot.current, "x", { duration: 0.08, ease: "power3" });
    const dotY = gsap.quickTo(dot.current, "y", { duration: 0.08, ease: "power3" });
    const ringX = gsap.quickTo(ring.current, "x", { duration: 0.35, ease: "power3" });
    const ringY = gsap.quickTo(ring.current, "y", { duration: 0.35, ease: "power3" });

    const move = (event: MouseEvent) => {
      dotX(event.clientX);
      dotY(event.clientY);
      ringX(event.clientX);
      ringY(event.clientY);
      gsap.to([dot.current, ring.current], { opacity: 1, duration: 0.2 });
    };
    const over = (event: MouseEvent) => {
      const interactive = (event.target as Element).closest(
        "a, button, [role='button'], input, textarea, select, label"
      );
      gsap.to(ring.current, { scale: interactive ? 2.2 : 1, duration: 0.3, ease: "power3.out" });
      gsap.to(dot.current, { scale: interactive ? 0.4 : 1, duration: 0.3, ease: "power3.out" });
    };
    const leave = () => gsap.to([dot.current, ring.current], { opacity: 0, duration: 0.2 });

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover", over, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.documentElement.removeEventListener("mouseleave", leave);
      document.documentElement.classList.remove("custom-cursor");
    };
  }, []);

  return (
    <>
      <div ref={dot} aria-hidden="true" className="cursor-dot" />
      <div ref={ring} aria-hidden="true" className="cursor-ring" />
    </>
  );
};

export default Cursor;
