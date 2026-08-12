import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { brand } from "@/lib/content";
import "./globals.css";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://studio.example"),
  title: {
    default: `${brand.name} — Custom Business Software`,
    template: `%s | ${brand.name}`,
  },
  description:
    "A small software studio that turns ideas and manual processes into reliable custom systems—business analysis, development, QA, and documentation.",
  openGraph: {
    title: `${brand.name} — Custom Business Software`,
    description:
      "From requirements and MVP planning to development, QA, and launch.",
    type: "website",
    siteName: brand.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen bg-cream font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
