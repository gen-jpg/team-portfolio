import Link from "next/link";
import { ArrowMark } from "@/components/icons";

type PrimaryButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  tone?: "forest" | "inverse";
};

export function PrimaryButton({
  href,
  children,
  className = "",
  tone = "forest",
}: PrimaryButtonProps) {
  return (
    <Link
      href={href}
      className={`${tone === "inverse" ? "btn-inverse" : "btn-primary"} ${className}`}
    >
      <span className="btn-primary-mark">
        <ArrowMark />
      </span>
      <span className="btn-primary-rule" />
      <span>{children}</span>
    </Link>
  );
}
