type Tier = {
  name: string;
  price: string;
  cadence: string;
  desc: string;
  cta: string;
  href: string;
  highlight?: boolean;
};

const tiers: Tier[] = [
  {
    name: 'The Letter',
    price: 'Free',
    cadence: 'Weekly',
    desc: 'The Sunday read. One build, one lesson, one thing about to be obvious. Free forever.',
    cta: 'Subscribe',
    href: '#letter',
  },
  {
    name: 'The Method',
    price: '$2,400',
    cadence: 'Cohort · June 2026',
    desc: 'Twelve builders. Four weeks. We pick an idea, build it with Claude, and ship it to real users. You leave with a product and a content engine.',
    cta: 'Apply to the pack',
    href: '#',
    highlight: true,
  },
  {
    name: 'Partnership',
    price: 'By inquiry',
    cadence: 'Brand & tool deals',
    desc: 'If your tool is part of how I build, I will tell that story on camera, in the letter, in essays. Founders & seed-stage only.',
    cta: 'Email me',
    href: 'mailto:hello@wolfofclaude.com',
  },
];

const steps = [
  { num: 'I.', title: 'Idea audit', desc: 'We kill the bad ideas in week one. Save you months.' },
  { num: 'II.', title: 'Build sprint', desc: 'Two weekends. With Claude. Real product, real users.' },
  { num: 'III.', title: 'Content engine', desc: 'Turn every build into 30 days of viral content.' },
  { num: 'IV.', title: 'Launch & learn', desc: 'We ship. You don’t. (Unless you ship harder.)' },
];

export function Coach() {
  return (
    <section
      id="coach"
      className="bg-ink text-cream relative overflow-hidden"
    >
      <div className="absolute -top-40 -right-40 w-[560px] h-[560px] bg-[radial-gradient(circle,rgba(184,64,10,0.4),transparent_70%)] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[480px] h-[480px] bg-[radial-gradient(circle,rgba(217,85,26,0.18),transparent_70%)] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-5 sm:px-10 py-24 sm:py-40 relative">
        <div className="mb-16" data-reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-cream/40 inline-block" />
            <span
              className="eyebrow"
              style={{ color: '#F2ECE0', opacity: 0.8 }}
            >
              Work with me
            </span>
          </div>
          <h2 className="font-display text-[clamp(40px,5.6vw,84px)] leading-[1.02] tracking-[-0.03em] font-medium max-w-[18ch]">
            Three ways to{' '}
            <em className="italic text-flame font-semibold">build</em> with the
            wolf.
          </h2>
        </div>

        {/* Tiers */}
        <div className="grid md:grid-cols-3 gap-px bg-cream/15 border border-cream/15 mb-24" data-reveal>
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative p-8 sm:p-10 flex flex-col ${
                t.highlight ? 'bg-ember/10' : 'bg-ink'
              }`}
            >
              {t.highlight && (
                <div className="absolute -top-3 left-8 text-[11px] font-medium tracking-wider uppercase bg-flame text-ink px-3 py-1">
                  Most chosen
                </div>
              )}
              <div className="mb-6">
                <p className="font-display text-[26px] font-medium tracking-tight mb-1">
                  {t.name}
                </p>
                <p className="text-cream/60 text-[13px] tracking-wider uppercase font-medium">
                  {t.cadence}
                </p>
              </div>
              <p className="font-display italic font-medium text-flame text-[44px] leading-none mb-6">
                {t.price}
              </p>
              <p className="text-cream/80 text-[15px] leading-relaxed mb-8 flex-1">
                {t.desc}
              </p>
              <a
                href={t.href}
                className={`inline-flex items-center justify-between gap-2 px-4 py-3 text-[13px] font-medium tracking-wide group transition-colors ${
                  t.highlight
                    ? 'bg-flame text-ink hover:bg-cream'
                    : 'border border-cream/30 hover:bg-cream hover:text-ink'
                }`}
              >
                {t.cta}
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            </div>
          ))}
        </div>

        {/* Method detail */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-14 lg:gap-20 items-start" data-reveal>
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-cream/40 inline-block" />
              <span
                className="eyebrow"
                style={{ color: '#F2ECE0', opacity: 0.8 }}
              >
                Inside The Method
              </span>
            </div>
            <h3 className="font-display text-[clamp(28px,3.2vw,46px)] leading-[1.1] tracking-tight font-medium mb-6">
              Ship what people actually want &mdash; in under{' '}
              <em className="italic text-flame">thirty days.</em>
            </h3>
            <p className="text-cream/80 text-[16px] sm:text-[17px] leading-relaxed max-w-[52ch] mb-8">
              Private cohort. Twelve builders. You bring the idea (or steal one
              of mine). You leave with a shipped product, a content engine, and
              the exact system I use to do this on repeat.
            </p>
            <p className="text-cream/60 text-[14px] leading-relaxed max-w-[48ch]">
              Best for solo founders & indie builders who are tired of half-finished
              prototypes. Not for &ldquo;learn to code&rdquo; tourists.
            </p>
          </div>

          <div className="border-l border-cream/15 pl-8 sm:pl-10">
            {steps.map((s, i) => (
              <div
                key={i}
                className={`py-6 ${
                  i < steps.length - 1 ? 'border-b border-cream/10' : ''
                } grid grid-cols-[64px_1fr] gap-5 items-baseline`}
              >
                <span className="font-display italic font-medium text-flame text-[32px] leading-none">
                  {s.num}
                </span>
                <div>
                  <p className="font-display text-[22px] mb-1.5 tracking-tight">
                    {s.title}
                  </p>
                  <p className="text-cream/75 text-[15px] leading-snug max-w-[34ch]">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
