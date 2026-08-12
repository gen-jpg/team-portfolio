type ServiceCardProps = {
  title: string;
  body: string;
  icon?: "analyze" | "build" | "validate" | "document";
};

function Icon({ type }: { type: NonNullable<ServiceCardProps["icon"]> }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (type) {
    case "analyze":
      return (
        <svg {...common} aria-hidden>
          <path d="M4 19V5M4 19h16" />
          <path d="M8 15l3-4 3 2 4-6" />
        </svg>
      );
    case "build":
      return (
        <svg {...common} aria-hidden>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M8 9h8M8 12h5M8 15h6" />
        </svg>
      );
    case "validate":
      return (
        <svg {...common} aria-hidden>
          <circle cx="12" cy="12" r="8" />
          <path d="M8.5 12.5l2.2 2.2 4.8-5" />
        </svg>
      );
    case "document":
      return (
        <svg {...common} aria-hidden>
          <path d="M7 3h7l4 4v14H7V3z" />
          <path d="M14 3v4h4M9 12h6M9 16h6" />
        </svg>
      );
  }
}

export function ServiceCard({ title, body, icon = "build" }: ServiceCardProps) {
  return (
    <article className="card-surface flex h-full flex-col p-6 sm:p-7">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
        <Icon type={icon} />
      </div>
      <h3 className="mt-5 font-display text-lg font-bold text-ink">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{body}</p>
    </article>
  );
}
