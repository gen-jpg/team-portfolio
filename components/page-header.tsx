import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

type PageHeaderProps = {
  eyebrow: ReactNode;
  title: string;
  body?: ReactNode;
};

export function PageHeader({ eyebrow, title, body }: PageHeaderProps) {
  return (
    <Reveal as="section" className="section-pad !pb-10 !pt-12 sm:!pt-16">
      <div className="container-page max-w-3xl">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="heading-display mt-4">{title}</h1>
        {body && <div className="body-muted mt-5">{body}</div>}
      </div>
    </Reveal>
  );
}
