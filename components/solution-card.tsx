import Link from "next/link";
import { CheckLine } from "@/components/icons";
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
    <article className="card-surface card-hover group flex h-full flex-col overflow-hidden">
      <div className="border-b border-cream-muted/60 bg-cream-soft/70 p-5">
        <SolutionMockup variant={mockup} />
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="heading-ui text-base sm:text-lg">{title}</h3>
        <p className="mt-2 font-sans text-sm leading-relaxed text-ink-muted">{short}</p>
        {showFeatures && features.length > 0 && (
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {features.slice(0, 6).map((f) => (
              <li
                key={f}
                className="flex items-start gap-2 font-sans text-xs text-ink-soft"
              >
                <span className="mt-0.5 text-accent">
                  <CheckLine className="h-3.5 w-3.5" />
                </span>
                {f}
              </li>
            ))}
          </ul>
        )}
        <Link
          href={link}
          className="mt-6 inline-flex font-ui text-[12px] font-semibold uppercase tracking-[0.16em] text-accent transition group-hover:text-forest"
        >
          Learn more →
        </Link>
      </div>
    </article>
  );
}
