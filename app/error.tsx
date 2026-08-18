"use client";

import Link from "next/link";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="section-pad">
      <div className="container-page max-w-xl text-center">
        <p className="eyebrow">Something went wrong</p>
        <h1 className="heading-display mt-4">We couldn&apos;t load this page.</h1>
        <p className="body-muted mt-5">
          Please try again. If it keeps happening, send us a short note and
          we&apos;ll look into it.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button type="button" className="btn-primary" onClick={reset}>
            <span className="btn-primary-mark">
              <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="btn-primary-rule" />
            <span>Try again</span>
          </button>
          <Link href="/contact" className="btn-secondary">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
