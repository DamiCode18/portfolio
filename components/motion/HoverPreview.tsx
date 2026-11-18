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
  move: (x: number, y: number, src: string, alt: string) => void;
  hide: () => void;
};

/**
 * A floating image that trails the pointer over a list of links. Rendered
 * into <body> so it stays `fixed` even inside the smooth-scroll wrapper.
 * Driven imperatively (no re-render per mousemove).
 *
 * It only appears on real pointer movement over a row. ScrollSmoother keeps
 * gliding the content for a moment after the last scroll event, so rows slide
 * under a still pointer and fire mouseenter with no mousemove: revealing on
 * that showed the card at a stale spot (or the top-left corner) with nothing
 * left to hide it.
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
  // Whether the card is visible; mirrored to data-state for styling and tests.
  const shown = useRef(false);

  useEffect(() => setMounted(true), []);

  const setImage = (src: string, alt: string) => {
    if (!img.current || img.current.getAttribute("src") === src) return;
    img.current.src = src;
    img.current.alt = alt;
  };
  const reveal = (x: number, y: number) => {
    if (!box.current) return;
    shown.current = true;
    box.current.dataset.state = "shown";
    // Start at the pointer rather than trailing in from wherever it last was.
    gsap.set(box.current, { x: x + 28, y: y - 110, rotation: 0 });
    gsap.to(box.current, { opacity: 1, scale: 1, duration: 0.3, ease: "power3.out", overwrite: "auto" });
  };
  const conceal = () => {
    if (!box.current || !shown.current) return;
    shown.current = false;
    box.current.dataset.state = "hidden";
    gsap.to(box.current, { opacity: 0, scale: 0.85, duration: 0.25, ease: "power3.in", overwrite: "auto" });
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
    // mouseleave, so treat scroll as "not over a row any more"; the next real
    // pointer move over a row brings the card back.
    const onScroll = () => conceal();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mounted]);

  useImperativeHandle(ref, () => ({
    show(src, alt) {
      // Preload only; mouseenter also fires when a row glides under a still
      // pointer, so the card waits for real movement (see move).
      if (!setters.current) return;
      setImage(src, alt);
    },
    move(x, y, src, alt) {
      if (!setters.current) return;
      // The row under the pointer can change mid-scroll without a mouseenter.
      setImage(src, alt);
      if (!shown.current) {
        reveal(x, y);
        last.current = { x, time: performance.now() };
        return;
      }
      const now = performance.now();
      const dx = x - last.current.x;
      const dt = now - last.current.time || 16;
      last.current = { x, time: now };
      setters.current.x(x + 28);
      setters.current.y(y - 110);
      setters.current.rotate(gsap.utils.clamp(-14, 14, (dx / dt) * 14));
    },
    hide() {
      conceal();
    },
  }));

  if (!mounted) return null;

  return createPortal(
    <div
      ref={box}
      aria-hidden="true"
      data-state="hidden"
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
