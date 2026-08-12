export function HeroMockup() {
  return (
    <div className="relative mx-auto max-w-lg">
      <div
        aria-hidden
        className="absolute -left-4 bottom-8 h-16 w-16 rounded-full bg-[#7d9b76]/25 blur-[1px] sm:-left-8"
      />
      <div
        aria-hidden
        className="absolute -left-2 bottom-10 flex h-14 w-14 items-end justify-center sm:-left-6"
      >
        <div className="h-8 w-8 rounded-full bg-[#6b8f63]" />
        <div className="absolute bottom-6 h-3 w-1 rounded-full bg-[#4a6b44]" />
      </div>

      <div className="rounded-2xl border border-cream-muted bg-ink p-2.5 shadow-soft">
        <div className="overflow-hidden rounded-xl bg-cream">
          <div className="flex items-center gap-2 border-b border-cream-muted bg-white px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-cream-muted" />
            <span className="h-2 w-2 rounded-full bg-cream-muted" />
            <span className="h-2 w-2 rounded-full bg-cream-muted" />
            <span className="ml-2 h-2 flex-1 rounded-full bg-cream-soft" />
          </div>
          <div className="grid gap-3 p-4 sm:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-2">
              <div className="h-3 w-20 rounded bg-accent/20" />
              <div className="rounded-lg bg-white p-3 shadow-card">
                <div className="h-16 rounded-md bg-gradient-to-t from-accent/15 to-transparent" />
                <div className="mt-2 flex gap-1">
                  <span className="h-1.5 flex-1 rounded bg-accent/30" />
                  <span className="h-1.5 flex-1 rounded bg-accent/15" />
                  <span className="h-1.5 flex-1 rounded bg-accent/40" />
                </div>
              </div>
              <div className="rounded-lg bg-white p-3 shadow-card">
                <div className="h-2 w-16 rounded bg-cream-muted" />
                <div className="mt-2 h-8 rounded bg-cream-soft" />
              </div>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-card">
              <div className="mb-3 flex items-center justify-between">
                <div className="h-2.5 w-24 rounded bg-ink/20" />
                <div className="h-6 w-16 rounded-md bg-accent/90" />
              </div>
              <div className="space-y-2">
                {[1, 2, 3, 4, 5].map((row) => (
                  <div key={row} className="flex gap-2">
                    <div className="h-2.5 flex-[1.4] rounded bg-cream-muted" />
                    <div className="h-2.5 flex-1 rounded bg-cream-soft" />
                    <div className="h-2.5 w-10 rounded bg-accent/20" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
