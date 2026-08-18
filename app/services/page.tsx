import type { Metadata } from "next";
import Link from "next/link";
import { Cta } from "@/components/cta";
import { PageHeader } from "@/components/page-header";
import { Process } from "@/components/process";
import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";
import { ServiceCard } from "@/components/service-card";
import {
  coreAdvantage,
  duringDevelopment,
  postDevelopment,
  preDevelopment,
  services,
  servicesIntro,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Business analysis, software development, quality assurance, and documentation—from requirements to release.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader eyebrow="Services" title={servicesIntro.title} body={servicesIntro.body} />

      <section className="pb-16 sm:pb-20">
        <Reveal stagger className="container-page grid gap-5 md:grid-cols-3">
          {services.map((s) => (
            <ServiceCard
              key={s.id}
              title={s.title}
              body={s.short}
              icon={s.icon}
            />
          ))}
        </Reveal>
      </section>

      <Reveal as="section" className="section-pad bg-cream-soft/60">
        <div className="container-page">
          <SectionIntro title={coreAdvantage.title} body={coreAdvantage.body} />
          <Reveal stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {coreAdvantage.pillars.map((p) => (
              <article key={p.label} className="card-surface p-6">
                <p className="font-ui text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                  {p.label}
                </p>
                <h3 className="heading-ui mt-3 text-base">{p.title}</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-ink-muted">
                  {p.body}
                </p>
              </article>
            ))}
          </Reveal>
        </div>
      </Reveal>

      <Reveal as="section" className="section-pad">
        <div className="container-page">
          <SectionIntro
            title="We're with you every step of the way"
            body="Pre-development through post-launch—kept visible and accountable."
          />
          <div className="mt-12">
            <Process variant="phases" />
          </div>
        </div>
      </Reveal>

      <DetailBlock
        title={preDevelopment.title}
        intro={preDevelopment.intro}
        items={preDevelopment.items}
      />
      <DetailBlock
        title={duringDevelopment.title}
        items={duringDevelopment.items}
        alt
      />
      <DetailBlock
        title={postDevelopment.title}
        intro={postDevelopment.intro}
        items={postDevelopment.items}
      />

      <section className="pb-8">
        <div className="container-page">
          <Cta
            variant="compact"
            title="Ready to start with a consultation?"
            body="You don't need a full technical brief—just tell us what you want to improve."
          />
          <p className="mt-6 text-center font-sans text-sm text-ink-muted">
            Prefer to browse systems first?{" "}
            <Link href="/solutions" className="font-ui font-semibold text-accent hover:text-forest">
              View solutions
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

function DetailBlock({
  title,
  intro,
  items,
  alt,
}: {
  title: string;
  intro?: string;
  items: readonly { title: string; body: string }[];
  alt?: boolean;
}) {
  return (
    <Reveal as="section" className={`section-pad ${alt ? "bg-cream-soft/60" : ""}`}>
      <div className="container-page max-w-4xl">
        <h2 className="heading-section">{title}</h2>
        {intro && <p className="body-muted mt-4">{intro}</p>}
        <Reveal stagger className="mt-10 grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <article key={item.title} className="card-surface p-6">
              <h3 className="heading-ui text-base">{item.title}</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-ink-muted">
                {item.body}
              </p>
            </article>
          ))}
        </Reveal>
      </div>
    </Reveal>
  );
}
