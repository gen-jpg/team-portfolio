import Image from "next/image";
import { brand } from "@/lib/content";

type BrandMarkProps = {
  inverted?: boolean;
  compact?: boolean;
  priority?: boolean;
};

export function BrandMark({
  inverted = false,
  compact = false,
  priority = false,
}: BrandMarkProps) {
  const size = compact ? 32 : 36;

  return (
    <span className="flex items-center gap-2.5">
      <Image
        src="/images/logo.png"
        alt=""
        width={size}
        height={size}
        priority={priority}
        className={`shrink-0 rounded-lg object-cover ${compact ? "h-8 w-8" : "h-9 w-9"}`}
      />
      <span
        className={`font-display text-[1.35rem] font-semibold leading-none tracking-tight ${
          inverted ? "text-cream" : "text-ink"
        }`}
      >
        {brand.name}
        <span
          className={`ml-1.5 font-ui text-[10px] font-medium uppercase tracking-[0.18em] ${
            inverted ? "text-cream/55" : "text-ink-muted"
          }`}
        >
          {brand.placeholder}
        </span>
      </span>
    </span>
  );
}
