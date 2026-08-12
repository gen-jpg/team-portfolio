type TeamMemberProps = {
  name: string;
  role: string;
  bio: string;
  initials: string;
};

export function TeamMember({ name, role, bio, initials }: TeamMemberProps) {
  return (
    <article className="card-surface flex flex-col gap-5 p-6 sm:flex-row sm:items-start sm:p-8">
      <div
        aria-hidden
        className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-cream-muted font-display text-2xl font-bold text-accent"
      >
        {initials}
      </div>
      <div>
        <h3 className="font-display text-xl font-bold text-ink">{name}</h3>
        <p className="mt-1 text-sm font-semibold text-accent">{role}</p>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">{bio}</p>
      </div>
    </article>
  );
}
