import React from "react";
import Reveal from "./Reveal";
import Scramble from "./motion/Scramble";
import SplitHeading from "./motion/SplitHeading";

type Props = {
  eyebrow: string;
  title: string;
  intro?: React.ReactNode;
  className?: string;
};

/** Eyebrow that decodes in, a heading that cascades in, an intro that fades in. */
const SectionHeading = ({ eyebrow, title, intro, className = "" }: Props) => {
  return (
    <div className={`mx-auto max-w-3xl text-center ${className}`}>
      <Scramble
        text={eyebrow}
        className="text-xs font-bold uppercase tracking-[0.3em] text-subtle"
      />
      <SplitHeading className="font-display bolder-text mt-4 uppercase font-extrabold leading-[0.95] tracking-tight text-[clamp(3rem,11vw,6rem)]">
        {title}
      </SplitHeading>
      {intro && (
        <Reveal delay={150}>
          <p className="mx-auto mt-6 max-w-xl text-sm text-muted md:text-base">
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
};

export default SectionHeading;
