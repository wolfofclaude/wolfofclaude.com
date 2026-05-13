'use client';

import { useState } from 'react';

export function Letter() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="letter"
      className="max-w-[860px] mx-auto px-5 sm:px-10 py-24 sm:py-40 text-center"
      data-reveal
    >
      <div className="flex items-center justify-center gap-3 mb-8">
        <span className="w-10 h-px bg-ink/40 inline-block" />
        <span className="eyebrow">The wolf letter</span>
        <span className="w-10 h-px bg-ink/40 inline-block" />
      </div>

      <h2 className="font-display text-[clamp(36px,5.2vw,76px)] leading-[1.05] tracking-[-0.025em] font-medium mb-6">
        Every Sunday. One build. One lesson. One thing about to be{' '}
        <em className="italic text-ember font-semibold">obvious.</em>
      </h2>

      <p className="text-ink/80 text-[17px] sm:text-[19px] leading-relaxed mb-12 max-w-[48ch] mx-auto">
        Free. Sunday mornings. Unsubscribe whenever. The only place I ship the
        long-form receipts.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
        className="flex flex-col sm:flex-row gap-3 max-w-[560px] mx-auto"
      >
        <input
          type="email"
          required
          placeholder="your@email.com"
          aria-label="Email address"
          disabled={submitted}
          className="flex-1 px-5 py-4 bg-transparent border border-ink/25 focus:border-ember outline-none text-[16px] text-ink placeholder:text-ink/45 transition-colors disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={submitted}
          className="px-7 py-4 bg-ink text-cream font-medium text-[14px] tracking-wide hover:bg-ember transition-colors flex items-center justify-center gap-2 group disabled:opacity-90"
        >
          {submitted ? (
            <>You&rsquo;re in <span className="text-flame">✶</span></>
          ) : (
            <>
              Join the pack
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </>
          )}
        </button>
      </form>

      <p className="mt-7 text-ink/55 text-[13px]">
        4,200+ builders read it weekly. No fluff, no funnels.
      </p>
    </section>
  );
}
