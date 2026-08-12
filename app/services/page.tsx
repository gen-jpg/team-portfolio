import type { Metadata } from "next";
import Link from "next/link";
import { Cta } from "@/components/cta";
import { Process } from "@/components/process";
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
      <section className="section-pad !pb-12">
        <div className="container-page max-w-3xl">
          <p className="eyebrow">Services</p>
          <h1 className="heading-display mt-3">{servicesIntro.title}</h1>
          <p className="body-muted mt-5">{servicesIntro.body}</p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-page grid gap-5 md:grid-cols-3">
          {services.map((s) => (
            <ServiceCard
              key={s.id}
              title={s.title}
              body={s.short}
              icon={s.icon}
            />
          ))}
        </div>
      </section>

      <section className="section-pad bg-white/50">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-section">{coreAdvantage.title}</h2>
            <p className="body-muted mt-4">{coreAdvantage.body}</p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {coreAdvantage.pillars.map((p) => (
              <article key={p.label} className="card-surface p-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                  {p.label}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold text-ink">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {p.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <h2 className="heading-section text-center">
            We&apos;re with you every step of the way
          </h2>
          <p className="body-muted mx-auto mt-4 max-w-2xl text-center">
            Pre-development through post-launch—kept visible and accountable.
          </p>
          <div className="mt-12">
            <Process variant="phases" />
          </div>
        </div>
      </section>

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
          <p className="mt-6 text-center text-sm text-ink-muted">
            Prefer to browse systems first?{" "}
            <Link href="/solutions" className="font-semibold text-accent">
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
    <section className={`section-pad ${alt ? "bg-white/50" : ""}`}>
      <div className="container-page max-w-4xl">
        <h2 className="heading-section">{title}</h2>
        {intro && <p className="body-muted mt-4">{intro}</p>}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <article key={item.title} className="card-surface p-5">
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
  );
}
