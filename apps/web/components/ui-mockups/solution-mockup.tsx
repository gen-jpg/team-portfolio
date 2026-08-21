type Variant =
  | "booking"
  | "ecommerce"
  | "inventory"
  | "admin"
  | "qr"
  | "payments"
  | "custom";

export function SolutionMockup({ variant }: { variant: Variant }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-cream-muted/70 bg-white shadow-card">
      <div className="flex items-center gap-1.5 border-b border-cream-muted/70 bg-cream px-3 py-2">
        <span className="h-1.5 w-1.5 rounded-full bg-cream-muted" />
        <span className="h-1.5 w-1.5 rounded-full bg-cream-muted" />
        <span className="h-1.5 flex-1 rounded-full bg-white" />
      </div>
      <div className="p-3">
        {variant === "booking" && <Booking />}
        {variant === "ecommerce" && <Commerce />}
        {variant === "inventory" && <Inventory />}
        {variant === "admin" && <Admin />}
        {variant === "qr" && <Qr />}
        {variant === "payments" && <Payments />}
        {variant === "custom" && <Custom />}
      </div>
    </div>
  );
}

function Booking() {
  return (
    <div className="space-y-2">
      <div className="h-2 w-20 rounded-full bg-accent/25" />
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: 14 }).map((_, i) => (
          <div
            key={i}
            className={`aspect-square rounded-md ${
              i === 3 || i === 9 ? "bg-accent" : "bg-cream-soft"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function Commerce() {
  return (
    <div className="grid grid-cols-3 gap-2">
      {[1, 2, 3].map((i) => (
        <div key={i} className="rounded-xl bg-cream-soft p-2">
          <div className="aspect-square rounded-lg bg-cream-muted/80" />
          <div className="mt-1.5 h-1.5 w-full rounded-full bg-ink/10" />
          <div className="mt-1 h-1.5 w-1/2 rounded-full bg-accent/30" />
        </div>
      ))}
    </div>
  );
}

function Inventory() {
  return (
    <div className="space-y-1.5">
      {["In stock", "Low stock", "Reorder"].map((label, i) => (
        <div
          key={label}
          className="flex items-center justify-between rounded-xl bg-cream-soft px-2 py-1.5"
        >
          <span className="font-ui text-[10px] text-ink-muted">{label}</span>
          <span
            className={`h-1.5 w-12 rounded-full ${
              i === 1 ? "bg-accent/50" : "bg-accent/20"
            }`}
          />
        </div>
      ))}
    </div>
  );
}

function Admin() {
  return (
    <div className="grid grid-cols-[48px_1fr] gap-2">
      <div className="space-y-1 rounded-xl bg-ink p-1.5">
        <div className="h-1 rounded-full bg-white/30" />
        <div className="h-1 rounded-full bg-white/20" />
        <div className="h-1 rounded-full bg-white/20" />
      </div>
      <div className="space-y-1.5">
        <div className="h-8 rounded-xl bg-cream-soft" />
        <div className="grid grid-cols-2 gap-1.5">
          <div className="h-10 rounded-xl bg-accent/15" />
          <div className="h-10 rounded-xl bg-cream-muted/60" />
        </div>
      </div>
    </div>
  );
}

function Qr() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-14 w-14 grid-cols-4 gap-0.5 rounded-xl bg-cream p-1">
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={i}
            className={`rounded-[1px] ${
              [0, 1, 2, 4, 8, 10, 12, 13, 14, 15].includes(i)
                ? "bg-ink"
                : "bg-transparent"
            }`}
          />
        ))}
      </div>
      <div className="flex-1 space-y-1.5">
        <div className="h-2 w-full rounded-full bg-cream-muted" />
        <div className="h-2 w-2/3 rounded-full bg-accent/25" />
        <div className="h-6 w-20 rounded-full bg-forest" />
      </div>
    </div>
  );
}

function Payments() {
  return (
    <div className="space-y-2">
      <div className="rounded-xl bg-cream-soft p-2">
        <div className="h-2 w-16 rounded-full bg-ink/15" />
        <div className="mt-2 h-6 rounded-full bg-forest" />
      </div>
      <div className="flex gap-1.5">
        <div className="h-5 flex-1 rounded-lg bg-cream-muted" />
        <div className="h-5 flex-1 rounded-lg bg-cream-muted" />
        <div className="h-5 flex-1 rounded-lg bg-cream-muted" />
      </div>
    </div>
  );
}

function Custom() {
  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <div className="h-10 flex-1 rounded-xl bg-accent/15" />
        <div className="h-10 flex-1 rounded-xl bg-cream-soft" />
      </div>
      <div className="h-12 rounded-xl border border-dashed border-accent/30 bg-cream/50" />
    </div>
  );
}
