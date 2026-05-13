type Tool = {
  num: string;
  name: string;
  blurb: string;
  href: string;
};

const tools: Tool[] = [
  {
    num: '01',
    name: 'Claude',
    blurb: 'The second brain. Every project starts here.',
    href: '#',
  },
  {
    num: '02',
    name: 'Cursor',
    blurb: 'Where the code actually happens.',
    href: '#',
  },
  {
    num: '03',
    name: 'Vercel',
    blurb: 'From localhost to a real URL in seconds.',
    href: '#',
  },
  {
    num: '04',
    name: 'Linear',
    blurb: 'What I’d track if I tracked things.',
    href: '#',
  },
  {
    num: '05',
    name: 'Loom',
    blurb: 'The build is the content. This is how I capture it.',
    href: '#',
  },
  {
    num: '06',
    name: 'Beehiiv',
    blurb: 'How the wolf letter lands in your inbox.',
    href: '#',
  },
];

export function Stack() {
  return (
    <section
      id="stack"
      className="max-w-[1360px] mx-auto px-5 sm:px-10 py-20 sm:py-32"
    >
      <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 mb-14">
        <div data-reveal>
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-ink/40 inline-block" />
            <span className="eyebrow">The toolbox</span>
          </div>
          <h2 className="font-display text-[clamp(40px,5.2vw,76px)] leading-[0.96] tracking-[-0.03em] font-medium">
            The <em className="italic text-ember font-semibold">stack</em>
            <br /> I build with.
          </h2>
        </div>
        <p
          className="text-[clamp(17px,1.4vw,21px)] text-ink/80 leading-[1.55] max-w-[56ch] lg:self-end"
          data-reveal
        >
          Every tool below is one I actually open every day. No bundles, no
          sponsors I don&rsquo;t use. Pick one to follow the link. If you sign
          up through it, the wolf gets a small bowl of kibble.
        </p>
      </div>

      <ol className="border-t border-ink/15" data-reveal>
        {tools.map((t) => (
          <li
            key={t.num}
            className="border-b border-ink/15 group hover:bg-ink/[0.025] transition-colors"
          >
            <a
              href={t.href}
              className="grid grid-cols-[64px_1fr_auto] sm:grid-cols-[88px_220px_1fr_auto] items-center gap-4 sm:gap-8 py-6 sm:py-7 px-2"
            >
              <span className="font-mono text-[13px] text-ink/50 tracking-wider">
                &#8470; {t.num}
              </span>
              <span className="font-display text-[clamp(24px,2.4vw,36px)] font-medium tracking-tight col-span-1">
                {t.name}
              </span>
              <span className="hidden sm:block text-[15px] text-ink/75 leading-snug max-w-[46ch]">
                {t.blurb}
              </span>
              <span className="text-ember text-2xl transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <p className="sm:hidden text-[14px] text-ink/75 leading-snug pb-5 pl-[68px] pr-2">
              {t.blurb}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
