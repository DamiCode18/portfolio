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
  // `current` is the row the pointer is on; `shown` is whether the card is
  // visible. They differ after a scroll hides the card without a mouseleave.
  const current = useRef<string | null>(null);
  const shown = useRef(false);

  useEffect(() => setMounted(true), []);

  const reveal = () => {
    if (!box.current) return;
    shown.current = true;
    gsap.to(box.current, { opacity: 1, scale: 1, duration: 0.3, ease: "power3.out" });
  };
  const conceal = () => {
    if (!box.current || !shown.current) return;
    shown.current = false;
    gsap.to(box.current, { opacity: 0, scale: 0.85, duration: 0.25, ease: "power3.in" });
  };

  useEffect(() => {
    if (!mounted || !box.current || !finePointer() || reducedMotion()) return;
    registerMotion();
    setters.current = {
      x: gsap.quickTo(box.current, "x", { duration: 0.5, ease: "power3" }),
      y: gsap.quickTo(box.current, "y", { duration: 0.5, ease: "power3" }),
      rotate: gsap.quickTo(box.current, "rotation", { duration: 0.5, ease: "power3" }),
    };
    // Scrolling slides the list out from under a still pointer without any
    // mouseleave, so treat scroll as "not over a row any more".
    const onScroll = () => conceal();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mounted]);

  useImperativeHandle(ref, () => ({
    show(src, alt) {
      if (!setters.current) return;
      current.current = src;
      if (img.current) {
        img.current.src = src;
        img.current.alt = alt;
      }
      reveal();
    },
    move(x, y) {
      if (!setters.current) return;
      // pointer moved while still over a row after a scroll hid the card
      if (!shown.current && current.current) reveal();
      const now = performance.now();
      const dx = x - last.current.x;
      const dt = now - last.current.time || 16;
      last.current = { x, time: now };
      setters.current.x(x + 28);
      setters.current.y(y - 110);
      setters.current.rotate(gsap.utils.clamp(-14, 14, (dx / dt) * 14));
    },
    hide() {
      current.current = null;
      conceal();
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
