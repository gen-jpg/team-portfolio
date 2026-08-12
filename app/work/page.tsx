import type { Metadata } from "next";
import { Cta } from "@/components/cta";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected project patterns and case studies from our software studio—booking, inventory, commerce, and custom systems.",
};

export default function WorkPage() {
  return (
    <>
      <section className="section-pad !pb-10">
        <div className="container-page max-w-3xl">
          <p className="eyebrow">Work</p>
          <h1 className="heading-display mt-3">Selected work & patterns</h1>
          <p className="body-muted mt-5">
            We&apos;re building out public case studies. Until then, these
            placeholders show the kinds of systems we design and deliver—ready
            for real project writeups and SEO landing pages.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-page grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <Cta
        title="Have a similar project in mind?"
        body="Tell us about your operations—we'll recommend a practical MVP path."
      />
    </>
  );
}
