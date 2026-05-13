import type { ReactNode } from 'react';

type Beat = { num: string; title: ReactNode; desc: string };

const beats: Beat[] = [
  {
    num: 'I',
    title: (
      <>
        Building with <em className="italic text-ember">AI</em>
      </>
    ),
    desc: 'Prompts, agents, workflows. The actual systems behind the speed.',
  },
  {
    num: 'II',
    title: (
      <>
        <em className="italic text-ember">Web3</em> in the wild
      </>
    ),
    desc: 'Onchain experiments that aren’t whitepapers. Real users, real txs.',
  },
  {
    num: 'III',
    title: (
      <>
        Apps from <em className="italic text-ember">zero</em>
      </>
    ),
    desc: 'From idea to App Store. Public. Painful. Replayable.',
  },
  {
    num: 'IV',
    title: (
      <>
        Founder <em className="italic text-ember">life</em>
      </>
    ),
    desc: 'What it actually looks like. Without the LinkedIn filter.',
  },
];

export function Beats() {
  return (
    <section
      id="beats"
      className="max-w-[1360px] mx-auto px-5 sm:px-10 py-20 sm:py-32"
    >
      <div className="mb-14" data-reveal>
        <div className="flex items-center gap-3 mb-5">
          <span className="w-10 h-px bg-ink/40 inline-block" />
          <span className="eyebrow">The four beats</span>
        </div>
        <h2 className="font-display text-[clamp(40px,5.2vw,84px)] leading-[0.95] tracking-[-0.03em] font-medium max-w-[18ch]">
          What you&rsquo;ll see me{' '}
          <em className="italic text-ember font-semibold">cover.</em>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-ink/15">
        {beats.map((b, i) => (
          <a
            key={i}
            href="#"
            data-reveal
            className="group relative p-8 sm:p-10 border-b border-ink/15 sm:[&:nth-child(odd)]:border-r lg:border-r lg:[&:nth-child(odd)]:border-r last:lg:border-r-0 transition-colors duration-500 hover:bg-ink hover:text-cream min-h-[300px] flex flex-col"
          >
            <span className="font-display italic font-medium text-ember text-[72px] leading-none group-hover:text-flame transition-colors">
              {b.num}
            </span>
            <h3 className="font-display text-[clamp(24px,2.1vw,34px)] leading-[1.1] tracking-[-0.02em] font-medium mt-auto pt-12">
              {b.title}
            </h3>
            <p className="text-[15px] text-ink/75 group-hover:text-cream/75 mt-3 max-w-[34ch] transition-colors leading-relaxed">
              {b.desc}
            </p>
            <span className="absolute top-9 right-9 text-ember text-2xl transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
              →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
