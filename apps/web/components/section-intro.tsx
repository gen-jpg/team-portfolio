import { DotGrid } from "@/components/icons";

type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "center" | "left";
};

export function SectionIntro({
  eyebrow,
  title,
  body,
  align = "center",
}: SectionIntroProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      {align === "center" ? (
        <div className="section-rule mb-5">
          <DotGrid />
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <DotGrid />
        </div>
      ) : (
        eyebrow && <p className="eyebrow">{eyebrow}</p>
      )}
      <h2 className={`heading-section ${align === "center" ? "" : "mt-4"}`}>{title}</h2>
      {body && <p className="body-muted mt-4">{body}</p>}
    </div>
  );
}
