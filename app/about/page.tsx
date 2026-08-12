import type { Metadata } from "next";
import Link from "next/link";
import { Cta } from "@/components/cta";
import { TeamMember } from "@/components/team-member";
import { audiences, team } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the small software team behind practical business systems—business analysis, development, and QA.",
};

export default function AboutPage() {
  return (
    <>
      <section className="section-pad !pb-10">
        <div className="container-page max-w-3xl">
          <p className="eyebrow">About</p>
          <h1 className="heading-display mt-3">{team.title}</h1>
          <p className="body-muted mt-5">{team.intro}</p>
          <p className="mt-4 text-base font-medium text-ink-soft">
            We&apos;re a small team with a complete development cycle:{" "}
            <span className="text-accent">{team.cycle}</span>
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-page mx-auto grid max-w-4xl gap-5">
          {team.members.map((m) => (
            <TeamMember key={m.name} {...m} />
          ))}
        </div>
      </section>

      <section className="section-pad bg-white/50">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Who we work with</p>
            <h2 className="heading-section mt-3">{audiences.title}</h2>
            <p className="body-muted mt-4">{audiences.intro}</p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.items.map((item) => (
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

      <section className="section-pad">
        <div className="container-page max-w-3xl text-center">
          <h2 className="heading-section">
            Small team. Big commitment to clarity.
          </h2>
          <p className="body-muted mt-4">
            Direct communication, business-first scoping, dedicated QA, and
            documentation included—so your system is usable long after launch.
          </p>
          <Link href="/contact" className="btn-primary mt-8">
            Discuss Your Project
          </Link>
        </div>
      </section>

      <Cta />
    </>
  );
}
