const platforms = [
  { name: 'TikTok', handle: '@wolfofclaude', note: 'Daily builds, raw clips', href: '#' },
  { name: 'Instagram', handle: '@wolfofclaude', note: 'Reels, lifestyle, BTS', href: '#' },
  { name: 'X', handle: '@wolfofclaude', note: 'Threads, hot takes, builds', href: '#' },
  { name: 'YouTube', handle: '/wolfofclaude', note: 'Long-form, deep cuts', href: '#' },
];

export function Social() {
  return (
    <section className="max-w-[1360px] mx-auto px-5 sm:px-10 pb-20 sm:pb-32">
      <div className="mb-14" data-reveal>
        <div className="flex items-center gap-3 mb-5">
          <span className="w-10 h-px bg-ink/40 inline-block" />
          <span className="eyebrow">Find me out there</span>
        </div>
        <h2 className="font-display text-[clamp(36px,5.2vw,76px)] leading-[1] tracking-[-0.03em] font-medium max-w-[22ch]">
          Where the{' '}
          <em className="italic text-ember font-semibold">noise</em> lives.
        </h2>
      </div>

      <div
        className="grid sm:grid-cols-2 gap-px bg-ink/15 border border-ink/15"
        data-reveal
      >
        {platforms.map((p) => (
          <a
            key={p.name}
            href={p.href}
            className="group bg-cream p-9 sm:p-12 flex flex-col gap-3 hover:bg-ember hover:text-cream transition-colors duration-500 min-h-[240px] relative"
          >
            <span className="absolute top-8 right-8 text-ember text-2xl group-hover:text-cream transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
            <p className="text-[12px] font-medium tracking-widest uppercase text-ink/70 group-hover:text-cream/80 transition-colors">
              On {p.name}
            </p>
            <p className="font-display italic font-medium text-[clamp(34px,3.2vw,48px)] leading-[1] tracking-[-0.02em] mt-auto">
              {p.handle}
            </p>
            <p className="text-ink/75 group-hover:text-cream/85 text-[15px] transition-colors">
              {p.note}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
