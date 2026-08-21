import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Cta } from "@/components/cta";
import { CheckLine } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { getProjectBySlug, projects } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <section className="section-pad">
        <Reveal className="container-page max-w-3xl">
          <p className="eyebrow">
            <Link href="/work" className="hover:text-forest">
              Work
            </Link>
          </p>
          <p className="mt-4 font-ui text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            {project.clientType}
          </p>
          <h1 className="heading-display mt-3">{project.title}</h1>
          <p className="body-muted mt-5">{project.summary}</p>

          <div className="banner-band mt-8 text-left">
            <p className="font-ui text-sm font-semibold tracking-wide text-ink">
              Case study coming soon
            </p>
            <p className="mt-2 font-sans text-sm leading-relaxed text-ink-muted">
              This route is ready for a full writeup—challenge, approach,
              modules, and outcomes—for marketing and SEO. Outcomes we typically
              target for this pattern:
            </p>
            <ul className="mt-4 space-y-2.5">
              {project.outcomes.map((o) => (
                <li key={o} className="flex gap-2 font-sans text-sm text-ink-soft">
                  <span className="mt-0.5 text-accent">
                    <CheckLine className="h-4 w-4" />
                  </span>
                  {o}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-cream-muted/80 bg-white px-3 py-1.5 font-ui text-[11px] tracking-wide text-ink-soft"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </section>
      <Cta />
    </>
  );
}
