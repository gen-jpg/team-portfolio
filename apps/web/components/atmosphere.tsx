const SPARKLE_PATH =
  "M278.5 15.6C275 6.2 266 0 256 0s-19 6.2-22.5 15.6L174.2 174.2 15.6 233.5C6.2 237 0 246 0 256s6.2 19 15.6 22.5l158.6 59.4 59.4 158.6C237 505.8 246 512 256 512s19-6.2 22.5-15.6l59.4-158.6 158.6-59.4C505.8 275 512 266 512 256s-6.2-19-15.6-22.5L337.8 174.2 278.5 15.6z";

function Sparkle({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 512 512"
      fill="currentColor"
      aria-hidden
    >
      <path d={SPARKLE_PATH} />
    </svg>
  );
}

export function Atmosphere() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <Sparkle className="sparkle-float-slow absolute -left-8 -top-6 h-56 w-56 text-accent opacity-[0.10] sm:h-72 sm:w-72" />
      <Sparkle className="sparkle-float-fast absolute left-[18%] top-[12%] h-10 w-10 text-forest opacity-[0.14]" />
      <Sparkle className="sparkle-float absolute right-[8%] top-[8%] h-24 w-24 text-accent opacity-[0.11]" />
      <Sparkle className="sparkle-float-slow absolute -right-10 top-[38%] h-64 w-64 text-forest opacity-[0.09] sm:h-80 sm:w-80 [animation-delay:1.4s]" />
      <Sparkle className="sparkle-float-fast absolute right-[22%] top-[58%] h-8 w-8 text-accent opacity-[0.16] [animation-delay:0.6s]" />
      <Sparkle className="sparkle-float absolute -bottom-16 left-[12%] h-48 w-48 text-accent opacity-[0.09] [animation-delay:2s]" />
      <Sparkle className="sparkle-float-fast absolute bottom-[18%] left-[42%] h-6 w-6 text-forest opacity-[0.12] [animation-delay:1s]" />
      <Sparkle className="sparkle-float absolute bottom-[8%] right-[14%] h-16 w-16 text-forest opacity-[0.10] [animation-delay:0.4s]" />
      <div className="page-grain" />
    </div>
  );
}
