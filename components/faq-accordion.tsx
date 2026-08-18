"use client";

import { useState } from "react";
import { faq } from "@/lib/content";

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-cream-muted/70 rounded-card border border-cream-muted/70 bg-white shadow-card">
      {faq.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex min-h-11 w-full items-start justify-between gap-4 px-5 py-4 text-left sm:px-7 sm:py-5"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : index)}
            >
              <span className="font-ui text-sm font-semibold tracking-wide text-ink sm:text-base">
                {item.question}
              </span>
              <span
                className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-cream-muted text-accent transition ${
                  isOpen ? "rotate-45 bg-cream-soft" : ""
                }`}
                aria-hidden
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 font-sans text-sm leading-relaxed text-ink-muted sm:px-7">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
