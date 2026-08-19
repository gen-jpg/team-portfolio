"use client";

import {
  createElement,
  useEffect,
  useRef,
  useState,
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
} from "react";

type RevealProps = {
  as?: ElementType;
  stagger?: boolean;
  className?: string;
  children: ReactNode;
} & HTMLAttributes<HTMLElement>;

export function Reveal({
  as = "div",
  stagger = false,
  className = "",
  children,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }

    const revealIfVisible = (entry?: IntersectionObserverEntry) => {
      if (entry?.isIntersecting) {
        setShown(true);
        return true;
      }
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < vh * 0.92 && rect.bottom > 0) {
        setShown(true);
        return true;
      }
      return false;
    };

    if (revealIfVisible()) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!revealIfVisible(entry)) return;
        io.disconnect();
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return createElement(
    as,
    {
      ...rest,
      ref,
      className: `${stagger ? "reveal-stagger" : "reveal"} ${shown ? "is-revealed" : ""} ${className}`.trim(),
    },
    children,
  );
}
