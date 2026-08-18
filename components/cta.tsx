import Link from "next/link";
import { PrimaryButton } from "@/components/primary-button";
import { Reveal } from "@/components/reveal";
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
      <Reveal className="card-surface flex flex-col items-start gap-5 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
        <div>
          <h3 className="font-display text-2xl font-semibold text-ink">{title}</h3>
          {body && <p className="mt-2 font-sans text-sm leading-relaxed text-ink-muted">{body}</p>}
        </div>
        <PrimaryButton href="/contact" className="shrink-0">
          {finalCta.primary}
        </PrimaryButton>
      </Reveal>
    );
  }

  return (
    <Reveal as="section" className="section-pad">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-banner bg-ink px-6 py-14 text-center sm:px-12 sm:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-10 -top-16 h-56 w-56 rounded-full bg-accent/20 blur-2xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -right-8 h-64 w-64 rounded-full bg-forest/40 blur-2xl"
          />
          <p className="relative font-ui text-[11px] font-semibold uppercase tracking-label text-accent">
            Start a conversation
          </p>
          <h2 className="heading-section relative mx-auto mt-4 max-w-3xl text-cream">
            {title}
          </h2>
          <div className="relative mx-auto mt-6 max-w-xl space-y-2 font-sans text-base leading-relaxed text-cream/65">
            {(body ? [body] : finalCta.lines).map((line) => (
              <p key={line}>{line}</p>
            ))}
            {!body && (
              <>
                <p className="pt-3 font-medium text-cream">{finalCta.emphasis}</p>
                <p>{finalCta.closing}</p>
              </>
            )}
          </div>
          <div className="relative mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PrimaryButton href="/contact" tone="inverse" className="w-full sm:w-auto">
              {finalCta.primary}
            </PrimaryButton>
            <Link
              href="/contact#inquiry"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-cream/25 px-6 py-2.5 font-ui text-[12px] font-semibold uppercase tracking-[0.16em] text-cream transition hover:border-cream/60 hover:bg-cream/5"
            >
              {finalCta.secondary}
            </Link>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
