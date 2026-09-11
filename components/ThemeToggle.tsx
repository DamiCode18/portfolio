import React from "react";
import { originOf, useTheme } from "../utils/useTheme";

/**
 * The dark/light switch that doubles as the "O" in the hero headline.
 * Everything is sized in `em` so it scales with the surrounding type.
 */
const ThemeToggle = () => {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={(event) => toggle(originOf(event.currentTarget))}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="relative inline-block h-[0.72em] w-[1.15em] mx-[0.06em] align-middle rounded-full bg-orange-700 shadow-[inset_0_2px_6px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/50"
    >
      <span
        className={`absolute left-[0.07em] top-1/2 flex h-[0.58em] w-[0.58em] -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 ease-out ${
          isDark ? "translate-x-[0.43em]" : "translate-x-0"
        }`}
      >
        {isDark ? (
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="h-[0.36em] w-[0.36em] text-[#1f2937]"
          >
            <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 1 0 10.5 10.5z" />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            aria-hidden="true"
            className="h-[0.36em] w-[0.36em] text-[#E8A400]"
          >
            <circle cx="12" cy="12" r="4.5" fill="currentColor" stroke="none" />
            <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4" />
          </svg>
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;
