import Link from "next/link";
import { PrimaryButton } from "@/components/primary-button";

export default function NotFound() {
  return (
    <section className="section-pad">
      <div className="container-page max-w-xl text-center">
        <p className="font-display text-6xl font-semibold text-accent/50 sm:text-7xl">
          404
        </p>
        <h1 className="heading-display mt-4">This page isn&apos;t here.</h1>
        <p className="body-muted mt-5">
          The link may be outdated, or the page has moved. Head back home or
          tell us what you were looking for.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <PrimaryButton href="/">Back home</PrimaryButton>
          <Link href="/contact" className="btn-secondary">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
