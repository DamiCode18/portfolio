import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { finePointer, gsap, reducedMotion, registerMotion } from "../../utils/motion";

export type HoverPreviewHandle = {
  show: (src: string, alt: string) => void;
  move: (x: number, y: number) => void;
  hide: () => void;
};

/**
 * A floating image that trails the pointer over a list of links. Rendered
 * into <body> so it stays `fixed` even inside the smooth-scroll wrapper.
 * Driven imperatively (no re-render per mousemove).
 */
const HoverPreview = forwardRef<HoverPreviewHandle>((_, ref) => {
  const box = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLImageElement>(null);
  const [mounted, setMounted] = useState(false);
  const setters = useRef<{
    x: (v: number) => void;
    y: (v: number) => void;
    rotate: (v: number) => void;
  } | null>(null);
  const last = useRef({ x: 0, time: 0 });

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted || !box.current || !finePointer() || reducedMotion()) return;
    registerMotion();
    setters.current = {
      x: gsap.quickTo(box.current, "x", { duration: 0.5, ease: "power3" }),
      y: gsap.quickTo(box.current, "y", { duration: 0.5, ease: "power3" }),
      rotate: gsap.quickTo(box.current, "rotation", { duration: 0.5, ease: "power3" }),
    };
  }, [mounted]);

  useImperativeHandle(ref, () => ({
    show(src, alt) {
      if (!setters.current || !box.current) return;
      if (img.current) {
        img.current.src = src;
        img.current.alt = alt;
      }
      gsap.to(box.current, { opacity: 1, scale: 1, duration: 0.3, ease: "power3.out" });
    },
    move(x, y) {
      if (!setters.current) return;
      const now = performance.now();
      const dx = x - last.current.x;
      const dt = now - last.current.time || 16;
      last.current = { x, time: now };
      setters.current.x(x + 28);
      setters.current.y(y - 110);
      setters.current.rotate(gsap.utils.clamp(-14, 14, (dx / dt) * 14));
    },
    hide() {
      if (!setters.current || !box.current) return;
      gsap.to(box.current, { opacity: 0, scale: 0.85, duration: 0.25, ease: "power3.in" });
    },
  }));

  if (!mounted) return null;

  return createPortal(
    <div
      ref={box}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[90] w-64 overflow-hidden rounded-2xl border border-line bg-surface opacity-0 shadow-2xl"
      style={{ transform: "scale(0.85)" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img ref={img} alt="" className="h-40 w-full object-cover object-top" />
    </div>,
    document.body
  );
});

HoverPreview.displayName = "HoverPreview";

export default HoverPreview;
