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
 * Lets its child lean gently toward the pointer while hovered, then settle
 * back. Deliberately subtle: it only reacts while the pointer is actually
 * over the element, and moves a fraction of the distance.
 */
const Magnetic = ({ children, strength = 0.12, block = false, className = "" }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !finePointer() || reducedMotion()) return;

    const moveX = gsap.quickTo(el, "x", { duration: 0.5, ease: "power2.out" });
    const moveY = gsap.quickTo(el, "y", { duration: 0.5, ease: "power2.out" });

    const move = (event: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      moveX((event.clientX - (rect.left + rect.width / 2)) * strength);
      moveY((event.clientY - (rect.top + rect.height / 2)) * strength);
    };
    const leave = () => gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: "power3.out" });

    el.addEventListener("mousemove", move, { passive: true });
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
    };
  }, [strength]);

  return (
    <div ref={ref} className={`${block ? "block" : "inline-block"} ${className}`}>
      {children}
    </div>
  );
};

export default Magnetic;
