import Image from "next/image";

type TeamMemberProps = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  photo?: string;
  mbti?: string;
  variant?: "profile" | "card";
};

export function TeamMember({
  name,
  role,
  bio,
  initials,
  photo,
  mbti,
  variant = "profile",
}: TeamMemberProps) {
  const isCard = variant === "card";
  const sizeClass = isCard
    ? "h-[4.5rem] w-[4.5rem]"
    : "h-20 w-20 sm:h-24 sm:w-24";
  const px = isCard ? 72 : 96;

  return (
    <article
      className={`card-surface card-hover flex h-full ${
        isCard
          ? "flex-col gap-5 p-6"
          : "flex-col gap-5 p-6 sm:flex-row sm:items-start sm:p-8"
      }`}
    >
      {photo ? (
        <Image
          src={photo}
          alt={name}
          width={px}
          height={px}
          className={`shrink-0 rounded-[1.15rem] object-cover ${sizeClass}`}
        />
      ) : (
        <div
          aria-hidden
          className={`flex shrink-0 items-center justify-center rounded-[1.15rem] bg-cream-soft font-display font-semibold text-forest ${
            isCard ? "text-xl" : "text-2xl"
          } ${sizeClass}`}
        >
          {initials}
        </div>
      )}
      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
          <h3 className="font-ui text-base font-semibold tracking-wide text-ink sm:text-lg">
            <span className="text-accent">{name.slice(0, 1)}</span>
            {name.slice(1)}
          </h3>
          {mbti && (
            <span className="font-ui text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
              {mbti}
            </span>
          )}
        </div>
        <p className="mt-1 font-sans text-sm font-medium text-ink-muted">{role}</p>
        <p className="mt-3 font-sans text-sm leading-relaxed text-ink-muted">{bio}</p>
      </div>
    </article>
  );
}
