import type { Metadata } from "next";
import { Cta } from "@/components/cta";
import { PageHeader } from "@/components/page-header";
import { PrimaryButton } from "@/components/primary-button";
import { Reveal } from "@/components/reveal";
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
      <PageHeader
        eyebrow="Solutions"
        title="Systems Designed Around Your Operations"
        body="We build practical web systems tailored to how your business actually works—starting with a clear MVP and room to grow."
      />

      <section className="pb-16 sm:pb-20">
        <Reveal stagger className="container-page grid gap-5 md:grid-cols-2">
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
        </Reveal>
      </section>

      <Reveal as="section" className="pb-8">
        <div className="container-page">
          <div className="banner-band text-center">
            <h2 className="heading-section">Have something different in mind?</h2>
            <p className="body-muted mx-auto mt-4 max-w-2xl">
              Tell us what you want to improve—we&apos;ll help determine whether a
              custom software solution can simplify or automate it.
            </p>
            <div className="mt-8 flex justify-center">
              <PrimaryButton href="/contact">
                Tell Us What You Want to Improve
              </PrimaryButton>
            </div>
          </div>
        </div>
      </Reveal>

      <Cta />
    </>
  );
}
