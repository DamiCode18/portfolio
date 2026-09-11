import { useCallback, useEffect, useState } from "react";
import { motionConfig } from "./motion";

export type Theme = "light" | "dark";

const THEME_COLOR: Record<Theme, string> = {
  dark: "#000000",
  light: "#f5f5f5",
};

type Origin = { x: number; y: number };

/**
 * The `dark` class on <html> is the single source of truth (set before first
 * paint by the script in _document.js). Every instance of this hook watches
 * that class, so multiple toggles on the page always agree.
 */
export function useTheme() {
  // Matches the server render; corrected from the DOM right after mount.
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const root = document.documentElement;
    const read = () =>
      setTheme(root.classList.contains("dark") ? "dark" : "light");
    read();
    const observer = new MutationObserver(read);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  /**
   * Flip the theme. Pass the click position and, where the View Transitions
   * API exists, the new theme sweeps out from that point in a circle;
   * otherwise it crossfades.
   */
  const toggle = useCallback((origin?: Origin) => {
    const root = document.documentElement;
    const next: Theme = root.classList.contains("dark") ? "light" : "dark";

    const apply = () => {
      root.classList.toggle("dark", next === "dark");
      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute("content", THEME_COLOR[next]);
      try {
        localStorage.setItem("theme", next);
      } catch (e) {
        // storage can be unavailable (private mode); the class still applied
      }
    };

    const startViewTransition = (
      document as Document & {
        startViewTransition?: (cb: () => void) => { finished: Promise<void> };
      }
    ).startViewTransition;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (motionConfig.themeWipe && startViewTransition && !reduced) {
      const x = origin?.x ?? window.innerWidth / 2;
      const y = origin?.y ?? window.innerHeight / 2;
      root.style.setProperty("--wipe-x", `${x}px`);
      root.style.setProperty("--wipe-y", `${y}px`);
      root.classList.add("theme-wipe");
      startViewTransition
        .call(document, apply)
        .finished.finally(() => root.classList.remove("theme-wipe"));
      return;
    }

    // Fallback: briefly enable colour transitions so the switch crossfades.
    root.classList.add("theme-switching");
    apply();
    window.setTimeout(() => root.classList.remove("theme-switching"), 400);
  }, []);

  return { theme, toggle };
}

/** Centre of the element that was activated — a sensible wipe origin for keyboard users too. */
export const originOf = (el: Element): Origin => {
  const rect = el.getBoundingClientRect();
  return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
};
