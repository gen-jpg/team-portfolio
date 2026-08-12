import Link from "next/link";
import { finalCta } from "@/lib/content";

type CtaProps = {
  variant?: "banner" | "compact";
  title?: string;
  body?: string;
};

export function Cta({
  variant = "banner",
  title = finalCta.title,
  body,
}: CtaProps) {
  if (variant === "compact") {
    return (
      <div className="card-surface flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <h3 className="font-display text-xl font-bold text-ink">{title}</h3>
          {body && <p className="mt-2 text-sm text-ink-muted">{body}</p>}
        </div>
        <Link href="/contact" className="btn-primary shrink-0">
          {finalCta.primary}
        </Link>
      </div>
    );
  }

  return (
    <section className="section-pad relative overflow-hidden bg-cream-soft">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-[radial-gradient(circle_at_20%_50%,rgba(112,76,56,0.08),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-[radial-gradient(circle_at_80%_50%,rgba(112,76,56,0.06),transparent_60%)]"
      />
      <div className="container-page relative text-center">
        <h2 className="heading-section mx-auto max-w-3xl">{title}</h2>
        <div className="mx-auto mt-6 max-w-xl space-y-2 body-muted">
          {(body
            ? [body]
            : finalCta.lines
          ).map((line) => (
            <p key={line}>{line}</p>
          ))}
          {!body && (
            <>
              <p className="pt-2 font-medium text-ink">{finalCta.emphasis}</p>
              <p>{finalCta.closing}</p>
            </>
          )}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/contact" className="btn-primary">
            {finalCta.primary}
          </Link>
          <Link href="/contact#inquiry" className="btn-secondary">
            {finalCta.secondary}
          </Link>
        </div>
      </div>
    </section>
  );
}
