import type { Metadata } from "next";
import { Cta } from "@/components/cta";
import { PageHeader } from "@/components/page-header";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected project patterns and case studies from our software studio—booking, inventory, commerce, and custom systems.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Selected work & patterns"
        body="We're building out public case studies. Until then, these placeholders show the kinds of systems we design and deliver—ready for real project writeups and SEO landing pages."
      />

      <section className="pb-16 sm:pb-20">
        <Reveal stagger className="container-page grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </Reveal>
      </section>

      <Cta
        title="Have a similar project in mind?"
        body="Tell us about your operations—we'll recommend a practical MVP path."
      />
    </>
  );
}
