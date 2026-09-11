import React, { useEffect, useRef } from "react";
import { finePointer, gsap, reducedMotion } from "../../utils/motion";

type Props = {
  children: React.ReactNode;
  /** How far the child follows the pointer, as a fraction of the offset. */
  strength?: number;
  /** Render as a block (e.g. around a full-width button) instead of inline. */
  block?: boolean;
  className?: string;
};

/**
 * Pulls its child toward the pointer while hovered and springs it back on
 * leave. The inline wrapper is padded so the pull starts a little before
 * the edge.
 */
const Magnetic = ({ children, strength = 0.35, block = false, className = "" }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !finePointer() || reducedMotion()) return;

    const moveX = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3" });
    const moveY = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3" });

    const move = (event: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      moveX((event.clientX - (rect.left + rect.width / 2)) * strength);
      moveY((event.clientY - (rect.top + rect.height / 2)) * strength);
    };
    const leave = () =>
      gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.45)" });

    el.addEventListener("mousemove", move, { passive: true });
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
    };
  }, [strength]);

  return (
    <div
      ref={ref}
      className={`${block ? "block" : "inline-block p-3 -m-3"} ${className}`}
    >
      {children}
    </div>
  );
};

export default Magnetic;
