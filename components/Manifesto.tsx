export function Manifesto() {
  return (
    <section
      className="max-w-[1360px] mx-auto px-5 sm:px-10 py-24 sm:py-40"
      data-reveal
    >
      <div className="flex items-center gap-3 mb-10">
        <span className="w-10 h-px bg-ink/40 inline-block" />
        <span className="eyebrow">A brief manifesto</span>
      </div>
      <h2 className="font-display text-[clamp(34px,5vw,80px)] leading-[1.06] tracking-[-0.025em] font-normal max-w-[26ch]">
        The old rules were written for people who needed permission.{' '}
        <em className="italic text-ember font-semibold">
          AI is the permission slip.
        </em>{' '}
        So I build &mdash; loud, daily, in front of everyone &mdash; and I show
        you how.
      </h2>
    </section>
  );
}
