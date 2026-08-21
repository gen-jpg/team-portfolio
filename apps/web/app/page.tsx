import type { ReactNode } from "react";
import Link from "next/link";
import { Cta } from "@/components/cta";
import { FaqAccordion } from "@/components/faq-accordion";
import { Hero } from "@/components/hero";
import { CheckLine } from "@/components/icons";
import { PrimaryButton } from "@/components/primary-button";
import { Process } from "@/components/process";
import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";
import { ServiceCard } from "@/components/service-card";
import { SolutionCard } from "@/components/solution-card";
import { TeamMember } from "@/components/team-member";
import {
  brand,
  coreAdvantage,
  documentationSupport,
  services,
  servicesIntro,
  solutions,
  team,
  whyUs,
} from "@/lib/content";

const pillIcons: Record<string, ReactNode> = {
  "booking-systems": <CalIcon />,
  ecommerce: <BagIcon />,
  "inventory-management": <BoxIcon />,
  "admin-portals": <GridIcon />,
  "qr-barcode": <ScanIcon />,
  "payment-integration": <CardIcon />,
  "custom-systems": <SparkIcon />,
};

export default function HomePage() {
  const featured = solutions.filter((s) => s.featured);

  return (
    <>
      <Hero />

      <section className="section-pad !pt-6">
        <div className="container-page space-y-16 lg:space-y-20">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow">What we can build</p>
              <h2 className="heading-section mt-4">Systems around your operations</h2>
              <p className="body-muted mt-4">
                Practical web systems for bookings, commerce, inventory, admin
                operations, and more—scoped as MVPs that can grow with you.
              </p>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {solutions.map((s) => (
                <Link
                  key={s.slug}
                  href={`/solutions/${s.slug}`}
                  className="tag-pill w-full justify-start"
                >
                  <span className="text-accent">{pillIcons[s.slug]}</span>
                  <span>
                    {s.title.replace(" Systems", "").replace(" Solutions", "")}
                  </span>
                </Link>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow">Why work with us</p>
              <h2 className="heading-section mt-4">{whyUs.title}</h2>
            </div>
            <ul className="mt-8 grid gap-x-10 gap-y-7 sm:grid-cols-2">
              {whyUs.items.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span className="mt-0.5 shrink-0 text-accent">
                    <CheckLine />
                  </span>
                  <div>
                    <p className="font-ui text-sm font-semibold tracking-wide text-ink">
                      {item.title}
                    </p>
                    <p className="mt-1 font-sans text-sm leading-relaxed text-ink-muted">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <Reveal as="section" className="pb-4 sm:pb-8">
        <div className="container-page">
          <div className="banner-band text-center">
            <p className="eyebrow">How we work</p>
            <h2 className="heading-section mt-3">{coreAdvantage.title}</h2>
            <p className="body-muted mx-auto mt-4 max-w-2xl">{coreAdvantage.body}</p>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section-pad">
        <div className="container-page">
          <SectionIntro
            eyebrow="What we do"
            title={servicesIntro.title}
            body={servicesIntro.body}
          />
          <Reveal stagger className="mt-12 grid gap-5 md:grid-cols-3">
            {services.map((s) => (
              <ServiceCard
                key={s.id}
                title={s.title}
                body={s.short}
                icon={s.icon}
              />
            ))}
          </Reveal>
          <Reveal className="card-surface mt-6 grid items-center overflow-hidden md:grid-cols-2">
            <div className="p-7 sm:p-9">
              <h3 className="font-display text-2xl font-semibold text-ink">
                {documentationSupport.title}
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-ink-muted">
                {documentationSupport.body}
              </p>
              <Link href="/services" className="btn-secondary mt-6">
                Explore Our Services
              </Link>
            </div>
            <div aria-hidden className="relative min-h-[180px] bg-cream-soft md:min-h-full">
              <div className="absolute inset-6 rounded-card border border-cream-muted/80 bg-white/80 p-5 shadow-card">
                <div className="h-2 w-24 rounded-full bg-accent/30" />
                <div className="mt-4 space-y-2">
                  <div className="h-2 w-full rounded-full bg-cream-muted" />
                  <div className="h-2 w-5/6 rounded-full bg-cream-muted" />
                  <div className="h-2 w-4/6 rounded-full bg-cream-soft" />
                </div>
                <div className="mt-6 h-16 rounded-2xl bg-cream-soft" />
              </div>
            </div>
          </Reveal>
        </div>
      </Reveal>

      <Reveal as="section" className="section-pad bg-cream-soft/60">
        <div className="container-page">
          <SectionIntro
            eyebrow="Solutions"
            title="Systems Designed Around Your Operations"
            body="Practical web systems for bookings, commerce, inventory, admin operations, and more—scoped as MVPs that can grow with you."
          />
          <Reveal stagger className="mt-12 grid gap-5 sm:grid-cols-2">
            {featured.map((s) => (
              <SolutionCard
                key={s.slug}
                slug={s.slug}
                title={s.title}
                short={s.short}
                mockup={s.mockup}
              />
            ))}
          </Reveal>
          <div className="mt-10 text-center">
            <Link href="/solutions" className="btn-secondary">
              Explore All Solutions
            </Link>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section-pad">
        <div className="container-page">
          <SectionIntro
            eyebrow="How it works"
            title="From Idea to Launch"
            body="A clear path from discovery to support—so you always know what happens next."
          />
          <div className="mx-auto mt-12 max-w-3xl">
            <Process variant="steps" />
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section-pad bg-cream-soft/60">
        <div className="container-page">
          <SectionIntro eyebrow="The Team" title={team.title} body={team.intro} />
          <div className="mt-12">
            <p className="eyebrow mb-3 text-center">
              {brand.name} by
            </p>
            <div className="mb-4 grid grid-cols-3" aria-hidden>
              {team.members.map((m) => (
                <p
                  key={m.name}
                  className="text-center font-display text-6xl font-semibold leading-none tracking-tight text-accent lg:text-7xl"
                >
                  {m.name.slice(0, 1)}
                </p>
              ))}
            </div>
            <Reveal stagger className="grid gap-5 md:grid-cols-3">
              {team.members.map((m) => (
                <TeamMember key={m.name} variant="card" {...m} />
              ))}
            </Reveal>
          </div>
          <p className="mt-8 text-center font-sans text-sm font-medium text-ink-soft">
            Together: <span className="text-accent">{team.cycle}</span>
          </p>
          <div className="mt-6 text-center">
            <Link href="/about" className="btn-secondary">
              About Us
            </Link>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="heading-section mt-4">Frequently asked questions</h2>
            <p className="body-muted mt-4">
              Straight answers about scope, pricing, and how we work.
            </p>
            <PrimaryButton href="/contact" className="mt-7">
              Still have questions? Let&apos;s talk
            </PrimaryButton>
          </div>
          <FaqAccordion />
        </div>
      </Reveal>

      <Cta />
    </>
  );
}

function CalIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 3v4M16 3v4M4 10h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function BagIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6 8h12l-1 12H7L6 8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 8V7a3 3 0 016 0v1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function BoxIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 8l8-4 8 4v8l-8 4-8-4V8z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 12v8M4 8l8 4 8-4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function GridIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="4" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="13" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="4" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="13" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function ScanIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M7 4H5a1 1 0 00-1 1v2M17 4h2a1 1 0 011 1v2M7 20H5a1 1 0 01-1-1v-2M17 20h2a1 1 0 001-1v-2M4 12h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function CardIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 10h18" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function SparkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 4l1.5 6.5L20 12l-6.5 1.5L12 20l-1.5-6.5L4 12l6.5-1.5L12 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
