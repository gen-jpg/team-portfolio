import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { finalCta } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a consultation or project quotation. Tell us what you want to solve—we'll help with the rest.",
};

export default function ContactPage() {
  return (
    <section className="section-pad">
      <div className="container-page grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="heading-display mt-3">{finalCta.title}</h1>
          <div className="mt-5 space-y-2 body-muted">
            {finalCta.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <p className="mt-5 text-base font-medium text-ink">
            {finalCta.emphasis}
          </p>
          <p className="mt-2 text-ink-muted">{finalCta.closing}</p>
          <div className="mt-8 rounded-2xl border border-cream-muted bg-cream-soft/70 p-5 text-sm text-ink-soft">
            <p className="font-medium text-ink">What happens next</p>
            <ol className="mt-3 list-decimal space-y-1.5 pl-4">
              <li>We review your brief</li>
              <li>We schedule a consultation if it&apos;s a fit</li>
              <li>We outline scope, approach, and a quotation path</li>
            </ol>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
