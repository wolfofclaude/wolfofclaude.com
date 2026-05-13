import type { ReactNode } from 'react';
import { Spark } from './Spark';

type CardProps = {
  title: ReactNode;
  desc: string;
  kind: string;
  duration: string;
  feature?: boolean;
  dark?: boolean;
  visual: ReactNode;
};

function Card({
  title,
  desc,
  kind,
  duration,
  feature,
  dark,
  visual,
}: CardProps) {
  return (
    <article
      data-reveal
      className={`${feature ? 'md:col-span-3' : 'md:col-span-2'} group cursor-pointer ${
        dark
          ? 'bg-ink text-cream p-6 sm:p-8 transition-transform duration-500 hover:-translate-y-1'
          : ''
      }`}
    >
      <div
        className={`${
          feature ? 'aspect-[16/9]' : 'aspect-[5/4]'
        } ${dark ? 'mb-7' : 'mb-6'} overflow-hidden relative ${
          dark ? '' : 'transition-transform duration-500 group-hover:-translate-y-1'
        }`}
      >
        {visual}
      </div>
      <div className="flex items-center gap-3 mb-3 text-[12px] font-medium tracking-wider">
        <span className={dark ? 'text-flame uppercase' : 'text-ember uppercase'}>
          {kind}
        </span>
        <span className={dark ? 'text-cream/50' : 'text-ink/30'}>·</span>
        <span className={dark ? 'text-cream/80' : 'text-ink/65'}>
          {duration}
        </span>
      </div>
      <h3
        className={`font-display ${
          feature
            ? 'text-[clamp(28px,2.6vw,42px)]'
            : 'text-[clamp(22px,1.9vw,30px)]'
        } leading-[1.12] tracking-[-0.02em] font-medium mb-3 ${
          dark ? 'text-cream' : 'text-ink'
        }`}
      >
        {title}
      </h3>
      <p
        className={`text-[15px] max-w-[44ch] leading-relaxed ${
          dark ? 'text-cream/85' : 'text-ink/75'
        }`}
      >
        {desc}
      </p>
    </article>
  );
}

export function Work() {
  return (
    <section
      id="work"
      className="max-w-[1360px] mx-auto px-5 sm:px-10 py-20 sm:py-32"
    >
      <div
        className="flex flex-wrap items-end justify-between gap-4 mb-16"
        data-reveal
      >
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-ink/40 inline-block" />
            <span className="eyebrow">Selected work</span>
          </div>
          <h2 className="font-display text-[clamp(40px,5.2vw,84px)] leading-[0.95] tracking-[-0.03em] font-medium">
            Recent{' '}
            <em className="italic text-ember font-semibold">transmissions.</em>
          </h2>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-2 text-[14px] font-medium hover:text-ember transition-colors group"
        >
          All work
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>

      <div className="grid md:grid-cols-6 gap-x-6 gap-y-16">
        <Card
          feature
          kind="Video"
          duration="4 min"
          title={
            <>
              I shipped an app in 47 minutes.{' '}
              <em className="italic text-ember">Live.</em>
            </>
          }
          desc="The build that broke my comments. Real prompts, real errors, real receipts. No tutorials, no cuts."
          visual={
            <div className="absolute inset-0 bg-gradient-to-br from-flame via-ember to-rust grid place-items-center">
              <div className="absolute -inset-12 bg-[radial-gradient(circle_at_30%_70%,rgba(242,236,224,0.18),transparent_55%)]" />
              <Spark className="w-36 text-cream/20 -rotate-6" />
            </div>
          }
        />

        <Card
          kind="Essay"
          duration="9 min read"
          title={
            <>
              Onchain, but make it <em className="italic text-ember">fast.</em>
            </>
          }
          desc="Why I'm building consumer Web3 with AI agents, and what most VCs missed about the timing."
          visual={
            <div className="absolute inset-0 bg-bone grid place-items-center">
              <span className="font-display italic font-medium text-[clamp(120px,12vw,180px)] leading-none text-ember/90 tracking-tight">
                Ξ
              </span>
            </div>
          }
        />

        <Card
          kind="Video"
          duration="2 min"
          title={
            <>
              Three prompts, one{' '}
              <em className="italic text-ember">side-revenue.</em>
            </>
          }
          desc="The exact system I use to validate an idea at 3 AM and ship it by lunch."
          visual={
            <div className="absolute inset-0 bg-ink grid place-items-center overflow-hidden">
              <div className="absolute -inset-12 bg-[radial-gradient(circle_at_70%_30%,rgba(242,236,224,0.12),transparent_50%)]" />
              <span className="font-mono font-medium text-[clamp(80px,9vw,120px)] leading-none text-flame">
                {`{ }`}
              </span>
            </div>
          }
        />

        <Card
          kind="Lifestyle"
          duration="5 min"
          title="A founder day that doesn't look like LinkedIn."
          desc="Espresso. Code. Sun. Ship. The schedule I actually keep. Not the one I post."
          visual={
            <div className="absolute inset-0 bg-gradient-to-br from-cream via-bone to-ember/40">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(184,64,10,0.35),transparent_55%)]" />
            </div>
          }
        />

        <Card
          kind="Essay"
          duration="6 min read"
          title={
            <>
              Stop vibe coding.{' '}
              <em className="italic text-ember">Start vibe shipping.</em>
            </>
          }
          desc="The mindset shift that took me from endless prototypes to actual revenue in 30 days."
          visual={
            <div className="absolute inset-0 bg-gradient-to-b from-cream to-bone grid place-items-center">
              <div className="w-2/3 h-px bg-ink/30" />
            </div>
          }
        />

        <Card
          feature
          dark
          kind="Series"
          duration="Coming soon"
          title={
            <>
              The Wolf Method.{' '}
              <em className="italic text-flame">Ten builds, ten weekends.</em>
            </>
          }
          desc="Behind every prompt, behind every product. For pack members only."
          visual={
            <div className="absolute inset-0 bg-ink grid place-items-center overflow-hidden">
              <div className="absolute -inset-24 bg-[radial-gradient(circle_at_center,rgba(217,85,26,0.35),transparent_60%)]" />
              <Spark className="w-56 text-ember relative z-10" />
            </div>
          }
        />
      </div>
    </section>
  );
}
