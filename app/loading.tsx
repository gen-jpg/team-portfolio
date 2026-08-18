export default function Loading() {
  return (
    <section className="section-pad">
      <div className="container-page max-w-3xl">
        <div className="h-3 w-24 animate-pulse rounded-full bg-cream-muted/80" />
        <div className="mt-5 h-12 w-4/5 animate-pulse rounded-2xl bg-cream-soft" />
        <div className="mt-6 space-y-3">
          <div className="h-3 w-full animate-pulse rounded-full bg-cream-muted/70" />
          <div className="h-3 w-5/6 animate-pulse rounded-full bg-cream-muted/50" />
          <div className="h-3 w-2/3 animate-pulse rounded-full bg-cream-muted/40" />
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <div className="card-surface h-40 animate-pulse" />
          <div className="card-surface h-40 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
