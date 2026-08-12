import Link from "next/link";
import { brand, hero } from "@/lib/content";
import { HeroMockup } from "@/components/ui-mockups/hero-mockup";

export function Hero() {
  return (
    <section className="section-pad !pb-12 !pt-14 sm:!pt-20">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="animate-fade-up">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 className="heading-display mt-4 max-w-xl">{hero.headline}</h1>
          <p className="body-muted mt-5 max-w-lg">{hero.supporting}</p>
          <p className="mt-3 max-w-lg text-base leading-relaxed text-ink-soft">
            {hero.supportingExtra}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              {hero.primaryCta}
            </Link>
            <Link href="/services" className="btn-secondary">
              {hero.secondaryCta}
            </Link>
          </div>
        </div>

        <div className="animate-fade-up animate-delay-2 relative">
          <HeroMockup />
        </div>
      </div>

      <div className="container-page mt-14">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-xl border border-cream-muted bg-white/70 px-5 py-4 text-sm font-medium text-ink-soft shadow-card">
          {brand.competencies.map((item, i) => (
            <span key={item} className="flex items-center gap-6">
              {i > 0 && (
                <span aria-hidden className="hidden text-cream-muted sm:inline">
                  ·
                </span>
              )}
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
