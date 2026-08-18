import { Reveal } from "@/components/reveal";
import { processPhases, processSteps } from "@/lib/content";

type ProcessProps = {
  variant?: "phases" | "steps";
};

export function Process({ variant = "steps" }: ProcessProps) {
  if (variant === "phases") {
    return (
      <Reveal stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {processPhases.map((phase, i) => (
          <article
            key={phase.title}
            className="card-surface relative p-6 text-left"
          >
            <span className="font-display text-2xl font-semibold text-accent/80">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="heading-ui mt-3 text-base">{phase.title}</h3>
            <p className="mt-2 font-sans text-sm leading-relaxed text-ink-muted">
              {phase.body}
            </p>
          </article>
        ))}
      </Reveal>
    );
  }

  return (
    <Reveal as="ol" stagger className="space-y-0">
      {processSteps.map((step, index) => (
        <li key={step.number} className="relative flex gap-5 pb-9 last:pb-0 sm:gap-8">
          {index < processSteps.length - 1 && (
            <span
              aria-hidden
              className="absolute left-[1.15rem] top-11 h-[calc(100%-1.5rem)] w-px bg-cream-muted sm:left-[1.35rem]"
            />
          )}
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-white font-ui text-[11px] font-semibold text-forest sm:h-11 sm:w-11 sm:text-xs">
            {step.number}
          </div>
          <div className="pt-0.5 sm:pt-1.5">
            <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
              {step.title}
            </h3>
            <p className="mt-1 font-ui text-[12px] font-medium uppercase tracking-[0.14em] text-accent">
              {step.summary}
            </p>
            <p className="mt-2 max-w-2xl font-sans text-sm leading-relaxed text-ink-muted">
              {step.body}
            </p>
          </div>
        </li>
      ))}
    </Reveal>
  );
}
