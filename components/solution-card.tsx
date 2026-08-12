import Link from "next/link";
import { SolutionMockup } from "@/components/ui-mockups/solution-mockup";

type SolutionCardProps = {
  slug: string;
  title: string;
  short: string;
  features?: readonly string[];
  mockup?: "booking" | "ecommerce" | "inventory" | "admin" | "qr" | "payments" | "custom";
  showFeatures?: boolean;
  href?: string;
};

export function SolutionCard({
  slug,
  title,
  short,
  features = [],
  mockup = "admin",
  showFeatures = false,
  href,
}: SolutionCardProps) {
  const link = href ?? `/solutions/${slug}`;

  return (
    <article className="card-surface group flex h-full flex-col overflow-hidden">
      <div className="border-b border-cream-muted bg-cream-soft/60 p-5">
        <SolutionMockup variant={mockup} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">{short}</p>
        {showFeatures && features.length > 0 && (
          <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
            {features.slice(0, 6).map((f) => (
              <li
                key={f}
                className="flex items-start gap-2 text-xs text-ink-soft"
              >
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {f}
              </li>
            ))}
          </ul>
        )}
        <Link
          href={link}
          className="mt-5 inline-flex text-sm font-semibold text-accent transition group-hover:text-accent-hover"
        >
          Learn more →
        </Link>
      </div>
    </article>
  );
}
