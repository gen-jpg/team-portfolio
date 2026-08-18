import Link from "next/link";
import { CheckLine } from "@/components/icons";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card-surface card-hover flex h-full flex-col p-6 sm:p-8">
      <div className="flex items-center justify-between gap-3">
        <span className="font-ui text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
          {project.clientType}
        </span>
        {project.status === "coming-soon" && (
          <span className="rounded-full border border-cream-muted bg-cream px-3 py-1 font-ui text-[10px] font-medium uppercase tracking-[0.12em] text-ink-muted">
            Coming soon
          </span>
        )}
      </div>
      <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
        {project.title}
      </h3>
      <p className="mt-2 flex-1 font-sans text-sm leading-relaxed text-ink-muted">
        {project.summary}
      </p>
      <ul className="mt-5 space-y-2">
        {project.outcomes.map((o) => (
          <li key={o} className="flex items-start gap-2 font-sans text-sm text-ink-soft">
            <span className="mt-0.5 text-accent">
              <CheckLine className="h-4 w-4" />
            </span>
            {o}
          </li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-cream-muted/80 bg-cream px-3 py-1 font-ui text-[11px] tracking-wide text-ink-soft"
          >
            {tag}
          </span>
        ))}
      </div>
      <Link
        href={`/work/${project.slug}`}
        className="mt-6 font-ui text-[12px] font-semibold uppercase tracking-[0.16em] text-accent hover:text-forest"
      >
        View details →
      </Link>
    </article>
  );
}
