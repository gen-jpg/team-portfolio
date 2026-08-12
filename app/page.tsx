import Link from "next/link";
import { Cta } from "@/components/cta";
import { FaqAccordion } from "@/components/faq-accordion";
import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { ServiceCard } from "@/components/service-card";
import { SolutionCard } from "@/components/solution-card";
import { TeamMember } from "@/components/team-member";
import {
  documentationSupport,
  services,
  servicesIntro,
  solutions,
  team,
  whyUs,
} from "@/lib/content";

export default function HomePage() {
  const featured = solutions.filter((s) => s.featured);

  return (
    <>
      <Hero />

      <section className="section-pad bg-white/50">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">What we do</p>
            <h2 className="heading-section mt-3">{servicesIntro.title}</h2>
            <p className="body-muted mt-4">{servicesIntro.body}</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {services.map((s) => (
              <ServiceCard
                key={s.id}
                title={s.title}
                body={s.short}
                icon={s.icon}
              />
            ))}
          </div>
          <div className="card-surface mt-6 grid items-center gap-6 overflow-hidden md:grid-cols-2">
            <div className="p-6 sm:p-8">
              <h3 className="font-display text-xl font-bold text-ink">
                {documentationSupport.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {documentationSupport.body}
              </p>
              <Link href="/services" className="btn-secondary mt-5">
                Explore Our Services
              </Link>
            </div>
            <div
              aria-hidden
              className="relative min-h-[180px] bg-gradient-to-br from-cream-soft via-cream to-accent/10 md:min-h-full"
            >
              <div className="absolute inset-6 rounded-xl border border-cream-muted/80 bg-white/70 p-4 shadow-card">
                <div className="h-2 w-24 rounded bg-accent/25" />
                <div className="mt-3 space-y-2">
                  <div className="h-2 w-full rounded bg-cream-muted" />
                  <div className="h-2 w-5/6 rounded bg-cream-muted" />
                  <div className="h-2 w-4/6 rounded bg-cream-soft" />
                </div>
                <div className="mt-6 h-16 rounded-lg bg-cream-soft" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Solutions</p>
            <h2 className="heading-section mt-3">
              Systems Designed Around Your Operations
            </h2>
            <p className="body-muted mt-4">
              Practical web systems for bookings, commerce, inventory, admin
              operations, and more—scoped as MVPs that can grow with you.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {featured.map((s) => (
              <SolutionCard
                key={s.slug}
                slug={s.slug}
                title={s.title}
                short={s.short}
                mockup={s.mockup}
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/solutions" className="btn-secondary">
              Explore All Solutions
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white/50">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">How it works</p>
            <h2 className="heading-section mt-3">From Idea to Launch</h2>
            <p className="body-muted mt-4">
              A clear path from discovery to support—so you always know what
              happens next.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-3xl">
            <Process variant="steps" />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Why work with us</p>
            <h2 className="heading-section mt-3">{whyUs.title}</h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.items.slice(0, 6).map((item) => (
              <article key={item.title} className="card-surface p-5 sm:p-6">
                <h3 className="font-display text-base font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white/50">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">The team</p>
            <h2 className="heading-section mt-3">{team.title}</h2>
            <p className="body-muted mt-4">{team.intro}</p>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-5">
            {team.members.map((m) => (
              <TeamMember key={m.name} {...m} />
            ))}
          </div>
          <p className="mt-8 text-center text-sm font-medium text-ink-soft">
            Together: <span className="text-accent">{team.cycle}</span>
          </p>
          <div className="mt-6 text-center">
            <Link href="/about" className="btn-secondary">
              About Us
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="heading-section mt-3">
              Frequently asked questions
            </h2>
            <p className="body-muted mt-4">
              Straight answers about scope, pricing, and how we work.
            </p>
            <Link href="/contact" className="btn-secondary mt-6">
              Still have questions? Let&apos;s talk
            </Link>
          </div>
          <FaqAccordion />
        </div>
      </section>

      <Cta />
    </>
  );
}
