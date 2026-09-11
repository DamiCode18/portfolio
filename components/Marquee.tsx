import React from "react";

type Props = {
  text: string;
  className?: string;
};

const Marquee = ({ text, className = "" }: Props) => {
  const item = (key: number) => (
    <span key={key} className="mx-4 text-sm font-bold uppercase tracking-widest">
      {text}
    </span>
  );

  return (
    <div className={`group w-full overflow-hidden whitespace-nowrap border-y border-line-strong py-3 ${className}`}>
      <div className="inline-flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {Array.from({ length: 8 }).map((_, i) => item(i))}
        {Array.from({ length: 8 }).map((_, i) => item(i + 8))}
      </div>
    </div>
  );
};

export default Marquee;
