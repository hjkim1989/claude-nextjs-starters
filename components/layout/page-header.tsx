type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="relative isolate overflow-hidden rounded-[2.5rem] border border-white/50 bg-white/70 px-6 py-16 text-center shadow-[0_24px_80px_oklch(0.4_0.05_280_/_0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 blur-3xl"
        style={{
          backgroundImage: `
            radial-gradient(22rem 14rem at 25% 20%, oklch(0.88 0.1 290 / 0.65), transparent 65%),
            radial-gradient(20rem 14rem at 75% 25%, oklch(0.89 0.1 345 / 0.6), transparent 65%),
            radial-gradient(22rem 14rem at 60% 90%, oklch(0.89 0.09 205 / 0.55), transparent 65%)
          `,
        }}
      />

      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4">
        <span className="glass rounded-full px-4 py-1.5 text-xs font-medium tracking-wide uppercase">
          {eyebrow}
        </span>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
        <p className="text-balance text-muted-foreground sm:text-lg">{description}</p>
      </div>
    </header>
  );
}
