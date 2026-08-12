import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card-surface flex h-full flex-col p-6 sm:p-7">
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          {project.clientType}
        </span>
        {project.status === "coming-soon" && (
          <span className="rounded-full bg-cream-soft px-2.5 py-1 text-[11px] font-medium text-ink-muted">
            Case study coming soon
          </span>
        )}
      </div>
      <h3 className="mt-4 font-display text-xl font-bold text-ink">
        {project.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
        {project.summary}
      </p>
      <ul className="mt-4 space-y-1.5">
        {project.outcomes.map((o) => (
          <li key={o} className="flex items-start gap-2 text-sm text-ink-soft">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {o}
          </li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-cream-soft px-2.5 py-1 text-xs font-medium text-ink-soft"
          >
            {tag}
          </span>
        ))}
      </div>
      <Link
        href={`/work/${project.slug}`}
        className="mt-5 text-sm font-semibold text-accent hover:text-accent-hover"
      >
        View details →
      </Link>
    </article>
  );
}
