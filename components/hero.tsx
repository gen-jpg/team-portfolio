import Link from "next/link";
import { brand, hero } from "@/lib/content";
import { PrimaryButton } from "@/components/primary-button";
import { Reveal } from "@/components/reveal";
import { HeroMockup } from "@/components/ui-mockups/hero-mockup";

export function Hero() {
  return (
    <section className="section-pad !pb-8 !pt-10 sm:!pt-16 lg:!pt-20">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="animate-fade-up">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-forest sm:text-base">
            {brand.tagline}
          </p>
          <h1 className="heading-display mt-4 max-w-xl">{hero.headline}</h1>
          <p className="body-muted mt-5 max-w-lg">{hero.supporting}</p>
          <p className="mt-3 max-w-lg font-sans text-base leading-relaxed text-ink-soft">
            {hero.supportingExtra}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <PrimaryButton href="/contact" className="w-full justify-center sm:w-auto">
              {hero.primaryCta}
            </PrimaryButton>
            <Link href="/services" className="btn-secondary w-full sm:w-auto">
              {hero.secondaryCta}
            </Link>
          </div>
          <p className="mt-6 font-ui text-[11px] uppercase tracking-[0.16em] text-ink-muted">
            {hero.eyebrow}
          </p>
        </div>

        <div className="animate-fade-up animate-delay-2 relative pb-10">
          <HeroMockup />
        </div>
      </div>

      <Reveal className="container-page mt-10 lg:mt-14">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-full border border-cream-muted/70 bg-white/80 px-6 py-3.5 shadow-card">
          {brand.competencies.map((item, i) => (
            <span
              key={item}
              className="flex items-center gap-8 font-ui text-[11px] font-medium uppercase tracking-[0.16em] text-ink-soft"
            >
              {i > 0 && (
                <span aria-hidden className="hidden h-1 w-1 rounded-full bg-accent sm:inline-block" />
              )}
              {item}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
