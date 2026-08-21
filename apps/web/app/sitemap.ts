import type { MetadataRoute } from "next";
import { brand, solutions } from "@/lib/content";
import { projects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = brand.siteUrl;
  const now = new Date();

  const staticRoutes = ["", "/services", "/solutions", "/work", "/about", "/contact"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    }),
  );

  const solutionRoutes = solutions.map((s) => ({
    url: `${base}/solutions/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const workRoutes = projects.map((p) => ({
    url: `${base}/work/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...solutionRoutes, ...workRoutes];
}
