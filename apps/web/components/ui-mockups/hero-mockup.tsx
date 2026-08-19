export function HeroMockup() {
  return (
    <div className="relative mx-auto max-w-lg">
      <div
        aria-hidden
        className="absolute -left-6 bottom-10 h-24 w-24 rounded-full bg-accent/15 blur-md"
      />
      <div
        aria-hidden
        className="absolute -right-4 top-6 h-16 w-16 rounded-full bg-forest/15 blur-sm"
      />

      <div className="relative origin-center rotate-[-4deg]">
        <div className="rounded-[1.75rem] bg-ink p-3 shadow-soft">
          <div className="overflow-hidden rounded-[1.3rem] bg-cream">
            <div className="flex items-center gap-2 border-b border-cream-muted/80 bg-white px-3 py-2.5">
              <span className="h-2 w-2 rounded-full bg-cream-muted" />
              <span className="h-2 w-2 rounded-full bg-cream-muted" />
              <span className="h-2 w-2 rounded-full bg-accent/50" />
              <span className="ml-2 h-2 flex-1 rounded-full bg-cream-soft" />
            </div>
            <div className="grid gap-3 p-4 sm:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-2">
                <div className="h-3 w-20 rounded-full bg-accent/25" />
                <div className="rounded-2xl bg-white p-3 shadow-card">
                  <div className="h-16 rounded-xl bg-gradient-to-t from-accent/20 to-cream-soft" />
                  <div className="mt-2 flex gap-1">
                    <span className="h-1.5 flex-1 rounded-full bg-accent/40" />
                    <span className="h-1.5 flex-1 rounded-full bg-accent/15" />
                    <span className="h-1.5 flex-1 rounded-full bg-forest/30" />
                  </div>
                </div>
                <div className="rounded-2xl bg-white p-3 shadow-card">
                  <div className="h-2 w-16 rounded-full bg-cream-muted" />
                  <div className="mt-2 h-8 rounded-xl bg-cream-soft" />
                </div>
              </div>
              <div className="rounded-2xl bg-white p-3 shadow-card">
                <div className="mb-3 flex items-center justify-between">
                  <div className="h-2.5 w-24 rounded-full bg-ink/15" />
                  <div className="h-6 w-16 rounded-full bg-forest" />
                </div>
                <div className="space-y-2">
                  {[1, 2, 3, 4, 5].map((row) => (
                    <div key={row} className="flex gap-2">
                      <div className="h-2.5 flex-[1.4] rounded-full bg-cream-muted" />
                      <div className="h-2.5 flex-1 rounded-full bg-cream-soft" />
                      <div className="h-2.5 w-10 rounded-full bg-accent/25" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-4 left-[12%] right-[8%] h-3 rounded-b-[1.2rem] bg-ink/80" />
        <div className="absolute -bottom-7 left-[6%] right-[4%] h-3 rounded-full bg-cream-muted/80" />
      </div>

      <div className="absolute -right-2 bottom-8 w-[7.5rem] rotate-[8deg] rounded-[1.6rem] border border-cream-muted/70 bg-white p-2 shadow-lift sm:-right-4 sm:w-36">
        <div className="rounded-[1.2rem] bg-cream p-3">
          <div className="mx-auto h-1 w-8 rounded-full bg-cream-muted" />
          <div className="mt-3 rounded-xl bg-white p-2 shadow-card">
            <div className="h-2 w-10 rounded-full bg-ink/15" />
            <div className="mt-2 h-8 rounded-lg bg-gradient-to-br from-accent/25 to-forest/20" />
            <div className="mt-2 h-5 rounded-full bg-forest" />
          </div>
          <div className="mt-2 flex gap-1">
            <span className="h-4 flex-1 rounded-md bg-cream-muted/80" />
            <span className="h-4 flex-1 rounded-md bg-cream-muted/80" />
            <span className="h-4 flex-1 rounded-md bg-accent/30" />
          </div>
        </div>
      </div>
    </div>
  );
}
