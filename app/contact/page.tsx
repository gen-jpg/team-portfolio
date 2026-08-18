import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { finalCta } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a consultation or project quotation. Tell us what you want to solve—we'll help with the rest.",
};

export default function ContactPage() {
  return (
    <section className="section-pad !pt-12 sm:!pt-16">
      <div className="container-page grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h1 className="heading-display mt-4">{finalCta.title}</h1>
          <div className="mt-5 space-y-2 body-muted">
            {finalCta.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <p className="mt-5 font-sans text-base font-medium text-ink">
            {finalCta.emphasis}
          </p>
          <p className="mt-2 font-sans text-ink-muted">{finalCta.closing}</p>
          <div className="banner-band mt-8 text-left">
            <p className="font-ui text-sm font-semibold tracking-wide text-ink">
              What happens next
            </p>
            <ol className="mt-3 list-decimal space-y-1.5 pl-4 font-sans text-sm text-ink-soft">
              <li>We review your brief</li>
              <li>We schedule a consultation if it&apos;s a fit</li>
              <li>We outline scope, approach, and a quotation path</li>
            </ol>
          </div>
        </Reveal>
        <Reveal>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
