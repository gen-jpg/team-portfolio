import type { Metadata } from "next";
import Link from "next/link";
import { Cta } from "@/components/cta";
import { SolutionCard } from "@/components/solution-card";
import { solutions } from "@/lib/content";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Booking, e-commerce, inventory, admin portals, QR/barcode, payments, and custom business systems.",
};

export default function SolutionsPage() {
  return (
    <>
      <section className="section-pad !pb-10">
        <div className="container-page max-w-3xl">
          <p className="eyebrow">Solutions</p>
          <h1 className="heading-display mt-3">
            Systems Designed Around Your Operations
          </h1>
          <p className="body-muted mt-5">
            We build practical web systems tailored to how your business
            actually works—starting with a clear MVP and room to grow.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-page grid gap-5 md:grid-cols-2">
          {solutions.map((s) => (
            <SolutionCard
              key={s.slug}
              slug={s.slug}
              title={s.title}
              short={s.short}
              features={s.features}
              mockup={s.mockup}
              showFeatures
            />
          ))}
        </div>
      </section>

      <section className="section-pad bg-cream-soft">
        <div className="container-page max-w-3xl text-center">
          <h2 className="heading-section">Have something different in mind?</h2>
          <p className="body-muted mt-4">
            Tell us what you want to improve—we&apos;ll help determine whether a
            custom software solution can simplify or automate it.
          </p>
          <Link href="/contact" className="btn-primary mt-8">
            Tell Us What You Want to Improve →
          </Link>
        </div>
      </section>

      <Cta />
    </>
  );
}
