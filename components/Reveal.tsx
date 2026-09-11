import React, { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  /** ms to wait before the transition starts — use to stagger siblings */
  delay?: number;
  className?: string;
};

/**
 * Fades and lifts its children into view the first time they scroll into the
 * viewport. The hidden state only applies when JS is running (see the `.js`
 * class set in _document.js), so content is never lost without it.
 */
const Reveal = ({ children, delay = 0, className = "" }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
};

export default Reveal;
