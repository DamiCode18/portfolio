import { useCallback, useEffect, useState } from "react";

export type Theme = "light" | "dark";

const THEME_COLOR: Record<Theme, string> = {
  dark: "#000000",
  light: "#f5f5f5",
};

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

  const toggle = useCallback(() => {
    const root = document.documentElement;
    const next: Theme = root.classList.contains("dark") ? "light" : "dark";
    // briefly enable colour transitions so the switch crossfades
    root.classList.add("theme-switching");
    root.classList.toggle("dark", next === "dark");
    window.setTimeout(() => root.classList.remove("theme-switching"), 400);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", THEME_COLOR[next]);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {
      // storage can be unavailable (private mode); the class still applied
    }
  }, []);

  return { theme, toggle };
}
