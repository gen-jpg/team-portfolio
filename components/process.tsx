import { processPhases, processSteps } from "@/lib/content";

type ProcessProps = {
  variant?: "phases" | "steps";
};

export function Process({ variant = "steps" }: ProcessProps) {
  if (variant === "phases") {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {processPhases.map((phase, i) => (
          <article
            key={phase.title}
            className="card-surface relative p-5 text-center sm:text-left"
          >
            <span className="font-display text-xs font-bold text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2 font-display text-base font-bold text-ink">
              {phase.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              {phase.body}
            </p>
          </article>
        ))}
      </div>
    );
  }

  return (
    <ol className="space-y-0">
      {processSteps.map((step, index) => (
        <li key={step.number} className="relative flex gap-5 pb-8 last:pb-0 sm:gap-8">
          {index < processSteps.length - 1 && (
            <span
              aria-hidden
              className="absolute left-[1.15rem] top-10 h-[calc(100%-1.5rem)] w-px bg-cream-muted sm:left-[1.35rem]"
            />
          )}
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent font-display text-xs font-bold text-white sm:h-11 sm:w-11 sm:text-sm">
            {step.number}
          </div>
          <div className="pt-0.5 sm:pt-1.5">
            <h3 className="font-display text-lg font-bold text-ink">
              {step.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-accent">{step.summary}</p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
              {step.body}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
