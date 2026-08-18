import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { PrimaryButton } from "@/components/primary-button";
import { brand, navLinks, solutions } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative z-[1] bg-ink text-cream">
      <div className="container-page section-pad !py-16 lg:!py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-5">
            <Link href="/">
              <BrandMark inverted />
            </Link>
            <p className="max-w-xs font-sans text-sm leading-relaxed text-cream/70">
              A small software studio building practical business systems—from
              requirements and MVP planning through development, QA, and
              documentation.
            </p>
            <p className="font-ui text-[10px] font-medium uppercase tracking-[0.18em] text-cream/45">
              {brand.competencies.join(" · ")}
            </p>
          </div>

          <div>
            <h3 className="font-ui text-[11px] font-semibold uppercase tracking-[0.2em] text-cream">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-cream/70 transition hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="font-sans text-sm text-cream/70 transition hover:text-cream"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-ui text-[11px] font-semibold uppercase tracking-[0.2em] text-cream">
              Solutions
            </h3>
            <ul className="mt-5 space-y-3">
              {solutions.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/solutions/${s.slug}`}
                    className="font-sans text-sm text-cream/70 transition hover:text-cream"
                  >
                    {s.title.replace(" Systems", "").replace(" Solutions", "")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-ui text-[11px] font-semibold uppercase tracking-[0.2em] text-cream">
              Let&apos;s Connect
            </h3>
            <p className="mt-5 font-sans text-sm leading-relaxed text-cream/70">
              Ready to discuss a project or explore what&apos;s possible?
            </p>
            <a
              href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@studio.example"}`}
              className="mt-3 inline-block font-ui text-sm text-cream/90 underline-offset-4 hover:underline"
            >
              {process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@studio.example"}
            </a>
            <div className="mt-6">
              <PrimaryButton href="/contact" tone="inverse">
                Discuss Your Project
              </PrimaryButton>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/10 pt-8 font-ui text-[11px] uppercase tracking-[0.14em] text-cream/40 sm:flex-row sm:items-center sm:justify-between">
          <p className="normal-case tracking-normal font-sans">
            © {new Date().getFullYear()} {brand.fullName}. {brand.tagline}
          </p>
          <p>Custom Business Systems · MVP · Booking · Commerce · Inventory</p>
        </div>
      </div>
    </footer>
  );
}
