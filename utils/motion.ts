// gsap's `gsap/dist/*` module declarations are ambient, inside its root
// types entry — reference it so TypeScript sees them.
/// <reference types="gsap" />

// The `gsap/dist/*` builds are CommonJS. Next 12 requires node_modules
// as-is during server rendering, and the root `gsap/<Plugin>` entries are
// ESM, which Node can't `require()`.
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import { SplitText } from "gsap/dist/SplitText";
import { ScrambleTextPlugin } from "gsap/dist/ScrambleTextPlugin";
import { Flip } from "gsap/dist/Flip";
import { Draggable } from "gsap/dist/Draggable";
import { InertiaPlugin } from "gsap/dist/InertiaPlugin";

/**
 * Feature switches for the more opinionated effects. Flip one to `false`
 * to remove that effect site-wide; nothing else depends on them.
 */
export const motionConfig = {
  /** ScrollSmoother: inertia scrolling + parallax. false = native scrolling. */
  smoothScroll: true,
  /** Dot-and-ring cursor on mouse/trackpad devices (never on touch). */
  customCursor: true,
  /** Circular reveal when switching theme (View Transitions API; falls back to a crossfade). */
  themeWipe: true,
};

let registered = false;

/** Registers every plugin once, client-side only. Safe to call repeatedly. */
export function registerMotion() {
  if (typeof window === "undefined" || registered) return;
  gsap.registerPlugin(
    ScrollTrigger,
    ScrollSmoother,
    SplitText,
    ScrambleTextPlugin,
    Flip,
    Draggable,
    InertiaPlugin
  );
  registered = true;
}

export const reducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Mouse/trackpad present — hover effects and the custom cursor only make sense here. */
export const finePointer = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(hover: hover) and (pointer: fine)").matches;

export { gsap, ScrollTrigger, ScrollSmoother, SplitText, Flip, Draggable };
