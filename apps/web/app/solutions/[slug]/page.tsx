import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Cta } from "@/components/cta";
import { CheckLine } from "@/components/icons";
import { PrimaryButton } from "@/components/primary-button";
import { Reveal } from "@/components/reveal";
import { SolutionMockup } from "@/components/ui-mockups/solution-mockup";
import { getSolutionBySlug, solutions } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return { title: "Solution" };
  return {
    title: solution.title,
    description: solution.short,
  };
}

export default async function SolutionDetailPage({ params }: Props) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();

  return (
    <>
      <section className="section-pad">
        <div className="container-page grid items-start gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">
              <Link href="/solutions" className="hover:text-forest">
                Solutions
              </Link>
            </p>
            <h1 className="heading-display mt-4">{solution.title}</h1>
            <p className="body-muted mt-5">{solution.short}</p>
            <ul className="mt-8 space-y-3">
              {solution.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 font-sans text-sm text-ink-soft">
                  <span className="mt-0.5 text-accent">
                    <CheckLine className="h-4 w-4" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="/contact">Discuss Your Project</PrimaryButton>
              <Link href="/solutions" className="btn-secondary">
                All Solutions
              </Link>
            </div>
            <p className="mt-6 font-sans text-sm text-ink-muted">
              Full case studies and deeper product pages will expand here as we
              publish more detail for SEO and lead generation.
            </p>
          </Reveal>
          <Reveal className="card-surface p-6 sm:p-8">
            <SolutionMockup variant={solution.mockup} />
          </Reveal>
        </div>
      </section>
      <Cta
        title={`Interested in ${solution.title}?`}
        body="Share a short brief—we'll help shape scope, timeline, and a quotation."
      />
    </>
  );
}
