import type { Metadata } from "next";
import { Cormorant_Garamond, Josefin_Sans, Montserrat } from "next/font/google";
import { Atmosphere } from "@/components/atmosphere";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { brand } from "@/lib/content";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const body = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const ui = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-ui",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(brand.siteUrl),
  title: {
    default: `${brand.fullName} — Custom Business Software`,
    template: `%s | ${brand.fullName}`,
  },
  description:
    "A small software team that turns ideas and manual processes into reliable custom systems—business analysis, development, QA, and documentation.",
  openGraph: {
    title: `${brand.fullName} — Custom Business Software`,
    description:
      "From requirements and MVP planning to development, QA, and launch.",
    type: "website",
    siteName: brand.fullName,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${ui.variable}`}
    >
      <body className="relative min-h-screen bg-cream font-sans text-ink antialiased">
        <Atmosphere />
        <Navbar />
        <main className="relative z-[1]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
