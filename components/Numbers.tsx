type Stat = { figure: string; caption: string };

const stats: Stat[] = [
  { figure: '100K', caption: 'across TikTok, Instagram & X' },
  { figure: '47', caption: 'builds shipped, all in public' },
  { figure: '4.2K', caption: 'readers in the wolf letter' },
  { figure: '’24', caption: 'the year the loud era began' },
];

export function Numbers() {
  return (
    <section
      id="numbers"
      className="bg-ink text-cream py-24 sm:py-36 relative overflow-hidden"
    >
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_top,rgba(184,64,10,0.22),transparent_70%)] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-5 sm:px-10 relative">
        <div className="flex items-center gap-3 mb-14" data-reveal>
          <span className="w-10 h-px bg-cream/40 inline-block" />
          <span className="eyebrow" style={{ color: '#F2ECE0', opacity: 0.8 }}>
            The wolf, in numbers
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((s, i) => (
            <div key={i} data-reveal className="flex flex-col">
              <div className="font-display italic font-medium text-ember text-[clamp(72px,9vw,140px)] leading-[0.85] tracking-[-0.04em] mb-5">
                {s.figure}
              </div>
              <div className="h-px bg-cream/20 w-12 mb-5" />
              <p className="text-cream/80 text-[15px] leading-snug max-w-[24ch]">
                {s.caption}
              </p>
            </div>
          ))}
        </div>

        <p
          className="mt-20 font-display text-[clamp(20px,1.8vw,28px)] leading-[1.4] text-cream/85 max-w-[58ch]"
          data-reveal
        >
          Most of these were under a hundred a year ago. The compounding rule
          works on attention too,{' '}
          <em className="italic text-flame font-medium">
            if you build loud enough
          </em>
          .
        </p>
      </div>
    </section>
  );
}
