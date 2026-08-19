"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/brand-mark";
import { PrimaryButton } from "@/components/primary-button";
import { navLinks } from "@/lib/content";

const leftLinks = navLinks.slice(0, 3);
const rightLinks = navLinks.slice(3);

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-50">
      <div
        className={`transition-all duration-300 ${
          open
            ? "border-b border-cream-muted/80 bg-cream"
            : scrolled
              ? "border-b border-cream-muted/80 bg-cream/90 backdrop-blur-md"
              : "border-b border-transparent bg-cream/70 backdrop-blur-sm"
        }`}
      >
        <div className="container-page grid h-[4.25rem] grid-cols-[1fr_auto] items-center lg:grid-cols-[1fr_auto_1fr]">
        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex" aria-label="Primary left">
          {leftLinks.map((link) => (
            <NavItem key={link.href} href={link.href} label={link.label} active={isActive(link.href)} />
          ))}
        </nav>

        <Link href="/" className="justify-self-start lg:justify-self-center">
          <BrandMark priority />
        </Link>

        <div className="hidden items-center justify-end gap-6 xl:gap-8 lg:flex">
          <nav className="flex items-center gap-6 xl:gap-8" aria-label="Primary right">
            {rightLinks.map((link) => (
              <NavItem key={link.href} href={link.href} label={link.label} active={isActive(link.href)} />
            ))}
          </nav>
          <PrimaryButton href="/contact" className="!py-1.5 !pr-5">
            Get Started
          </PrimaryButton>
        </div>

        <button
          type="button"
          className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream-muted bg-white text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M5 8h14M5 12h14M5 16h10"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="animate-drawer fixed inset-0 top-[4.25rem] z-50 bg-cream lg:hidden"
        >
          <nav
            className="container-page flex h-full flex-col justify-between py-10"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-2xl px-3 py-3.5 font-display text-3xl font-semibold ${
                    isActive(link.href) ? "text-forest" : "text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <PrimaryButton href="/contact" className="mb-8 w-full justify-center">
              Discuss Your Project
            </PrimaryButton>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavItem({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`relative font-ui text-[12px] font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${
        active ? "text-forest" : "text-ink-soft hover:text-ink"
      }`}
    >
      {label}
      <span
        className={`absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent transition-opacity duration-300 ${
          active ? "opacity-100" : "opacity-0"
        }`}
      />
    </Link>
  );
}
