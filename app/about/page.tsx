import type { Metadata } from "next";
import { Cta } from "@/components/cta";
import { PageHeader } from "@/components/page-header";
import { PrimaryButton } from "@/components/primary-button";
import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";
import { TeamMember } from "@/components/team-member";
import { audiences, brand, team } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the small software team behind practical business systems—business analysis, development, and QA.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={team.title}
        body={
          <>
            <p>{team.intro}</p>
            <p className="mt-4 font-sans text-base font-medium text-ink-soft">
              We&apos;re a small team with a complete development cycle:{" "}
              <span className="text-accent">{team.cycle}</span>
            </p>
          </>
        }
      />

      <section className="pb-16 sm:pb-20">
        <div className="container-page mx-auto max-w-4xl">
          <p className="eyebrow mb-3 text-center">
            {brand.name} by
          </p>
          <p
            className="mb-8 flex justify-center gap-10 sm:gap-14"
            aria-label="ASG"
          >
            {team.members.map((m) => (
              <span
                key={m.name}
                className="font-display text-5xl font-semibold leading-none text-accent sm:text-6xl"
              >
                {m.name.slice(0, 1)}
              </span>
            ))}
          </p>
          <Reveal stagger className="grid gap-5">
            {team.members.map((m) => (
              <TeamMember key={m.name} {...m} />
            ))}
          </Reveal>
        </div>
      </section>

      <Reveal as="section" className="section-pad bg-cream-soft/60">
        <div className="container-page">
          <SectionIntro
            eyebrow="Who we work with"
            title={audiences.title}
            body={audiences.intro}
          />
          <Reveal stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.items.map((item) => (
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

      <Reveal as="section" className="section-pad">
        <div className="container-page max-w-3xl text-center">
          <h2 className="heading-section">
            Small team. Big commitment to clarity.
          </h2>
          <p className="body-muted mt-4">
            Direct communication, business-first scoping, dedicated QA, and
            documentation included—so your system is usable long after launch.
          </p>
          <div className="mt-8 flex justify-center">
            <PrimaryButton href="/contact">Discuss Your Project</PrimaryButton>
          </div>
        </div>
      </Reveal>

      <Cta />
    </>
  );
}
