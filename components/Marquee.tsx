const phrases = [
  'Build loud',
  'Ship louder',
  'Teach it all',
  'No moats, only motion',
  'Tomorrow’s normal, today’s edge',
  'Build with the wolf',
];

export function Marquee() {
  return (
    <section className="bg-ink text-cream border-y border-ink/30 overflow-hidden py-6">
      <div className="marquee-track inline-flex whitespace-nowrap items-center font-display italic text-[clamp(30px,3.6vw,46px)] font-medium tracking-[-0.015em]">
        {[...phrases, ...phrases].map((p, i) => (
          <span key={i} className="inline-flex items-center pl-10 gap-10">
            <span>{p}</span>
            <span className="text-ember not-italic font-normal">✶</span>
          </span>
        ))}
      </div>
    </section>
  );
}
