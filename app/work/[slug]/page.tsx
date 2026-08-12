import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Cta } from "@/components/cta";
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
        <div className="container-page max-w-3xl">
          <p className="eyebrow">
            <Link href="/work" className="hover:text-accent-hover">
              Work
            </Link>
          </p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
            {project.clientType}
          </p>
          <h1 className="heading-display mt-2">{project.title}</h1>
          <p className="body-muted mt-5">{project.summary}</p>

          <div className="mt-8 rounded-2xl border border-dashed border-cream-muted bg-cream-soft/60 p-6">
            <p className="text-sm font-medium text-ink">
              Case study coming soon
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              This route is ready for a full writeup—challenge, approach,
              modules, and outcomes—for marketing and SEO. Outcomes we typically
              target for this pattern:
            </p>
            <ul className="mt-4 space-y-2">
              {project.outcomes.map((o) => (
                <li key={o} className="flex gap-2 text-sm text-ink-soft">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {o}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-white px-2.5 py-1 text-xs font-medium text-ink-soft shadow-card"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
