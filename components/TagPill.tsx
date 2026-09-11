import React from "react";

type Props = {
  label: string;
  color?: "yellow" | "blue" | "green" | "pink" | "orange";
  tilt?: number;
  className?: string;
  animate?: boolean;
};

const colorClasses: Record<NonNullable<Props["color"]>, string> = {
  yellow: "bg-pastel-yellow text-black",
  blue: "bg-pastel-blue text-black",
  green: "bg-pastel-green text-black",
  pink: "bg-pastel-pink text-black",
  orange: "bg-accent text-black",
};

const TagPill = ({
  label,
  color = "yellow",
  tilt = -3,
  className = "",
  animate = false,
}: Props) => {
  return (
    <span
      className={`inline-block whitespace-nowrap rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide shadow-md ${colorClasses[color]} ${
        animate ? "animate-drift" : ""
      } ${className}`}
      style={{ "--tilt": `${tilt}deg`, transform: `rotate(${tilt}deg)` } as React.CSSProperties}
    >
      {label}
    </span>
  );
};

export default TagPill;
