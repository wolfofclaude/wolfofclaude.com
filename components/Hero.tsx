import { Spark } from './Spark';

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-svh flex flex-col px-5 sm:px-10 py-8 sm:py-12 overflow-hidden"
    >
      {/* Decorative spark watermark — desktop only */}
      <div className="hidden lg:block absolute right-[-40px] xl:right-0 top-1/2 -translate-y-1/2 pointer-events-none">
        <Spark className="w-[280px] xl:w-[360px] text-ember opacity-[0.10] -rotate-12" />
      </div>

      {/* Top: eyebrow byline */}
      <div className="max-w-[1360px] mx-auto w-full relative" data-reveal>
        <div className="flex items-center gap-3">
          <span className="w-8 sm:w-10 h-px bg-ink/40 inline-block" />
          <span className="eyebrow">Bilal &middot; building loud since &rsquo;24</span>
        </div>
      </div>

      {/* Middle: takes remaining space, content vertically centered */}
      <div
        className="max-w-[1360px] mx-auto w-full flex-1 flex flex-col justify-center py-8 sm:py-10 relative"
        data-reveal
      >
        <h1 className="font-display text-[clamp(40px,min(8vw,11vh),128px)] leading-[0.9] tracking-[-0.045em] font-medium mb-6 sm:mb-8 max-w-[14ch]">
          Build <em className="italic text-ember font-semibold">loud.</em>
          <br />
          Ship faster than
          <br className="hidden sm:inline" />{' '}
          they can <em className="italic text-ember font-semibold">copy.</em>
        </h1>

        <p className="text-[clamp(15px,min(1.3vw,2vh),20px)] text-ink/85 leading-[1.55] max-w-[54ch] mb-7 sm:mb-9">
          I build apps in public &mdash; with Claude as the second brain
          &mdash; at a speed that breaks the usual rules. Apps, Web3, founder
          life. Watch the build, read the system, or come build with me.
        </p>

        <div className="flex flex-wrap gap-2 sm:gap-2.5">
          <a
            href="#letter"
            className="inline-flex items-center gap-2 bg-ink text-cream hover:bg-ember transition-colors px-4 sm:px-5 py-3 text-[13px] sm:text-[13.5px] font-medium tracking-wide group"
          >
            Get the letter
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 border border-ink/25 hover:border-ink hover:bg-ink hover:text-cream transition-colors px-4 sm:px-5 py-3 text-[13px] sm:text-[13.5px] font-medium tracking-wide group"
          >
            See the builds
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#coach"
            className="inline-flex items-center gap-2 hover:bg-ink/5 transition-colors px-4 sm:px-5 py-3 text-[13px] sm:text-[13.5px] font-medium tracking-wide text-ink/80 hover:text-ink group"
          >
            Build with me
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </div>
      </div>

      {/* Bottom: editorial strip — scroll cue + year */}
      <div
        className="max-w-[1360px] mx-auto w-full relative flex items-end justify-between gap-4"
        data-reveal
      >
        <div className="flex items-center gap-3 text-ink/50">
          <span className="inline-block w-10 h-px bg-ink/30" />
          <span className="text-[11px] font-medium tracking-[0.22em] uppercase">
            Keep scrolling
          </span>
        </div>
        <span className="font-display italic font-medium text-ember/85 text-[28px] sm:text-[40px] lg:text-[56px] leading-none tracking-tight">
          MMXXVI
        </span>
      </div>
    </section>
  );
}
