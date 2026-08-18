import Link from "next/link";
import { brand, navLinks, solutions } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-cream">
      <div className="container-page section-pad !py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent font-display text-sm font-bold text-white">
                {brand.initials}
              </span>
              <span className="font-display text-base font-bold">
                {brand.name}
                <span className="ml-1.5 text-xs font-medium text-cream/60">
                  {brand.placeholder}
                </span>
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-cream/70">
              A small software studio building practical business systems—from
              requirements and MVP planning through development, QA, and
              documentation.
            </p>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-cream/50">
              {brand.competencies.join(" · ")}
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-cream/70 transition hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-white">
              Solutions
            </h3>
            <ul className="mt-4 space-y-2.5">
              {solutions.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/solutions/${s.slug}`}
                    className="text-sm text-cream/70 transition hover:text-white"
                  >
                    {s.title.replace(" Systems", "").replace(" Solutions", "")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-white">
              Let&apos;s Connect
            </h3>
            <p className="mt-4 text-sm text-cream/70">
              Ready to discuss a project or explore what&apos;s possible?
            </p>
            <a
              href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@studio.example"}`}
              className="mt-3 inline-block text-sm text-cream/90 underline-offset-4 hover:underline"
            >
              {process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@studio.example"}
            </a>
            <div className="mt-5">
              <Link href="/contact" className="btn-primary">
                Discuss Your Project
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {brand.fullName}. {brand.tagline}
          </p>
          <p>Custom Business Systems · MVP Development · Booking · Commerce · Inventory</p>
        </div>
      </div>
    </footer>
  );
}
