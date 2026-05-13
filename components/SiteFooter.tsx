import { Spark } from './Spark';

export function SiteFooter() {
  return (
    <footer className="max-w-[1360px] mx-auto px-5 sm:px-10 pt-16 sm:pt-24 pb-12 border-t border-ink/15">
      <div className="grid lg:grid-cols-[1fr_auto] gap-12 mb-14 items-start">
        <div className="flex items-center gap-4">
          <Spark className="w-12 h-12 text-ink" />
          <div>
            <p className="font-display italic text-3xl font-medium tracking-tight leading-none">
              Wolf
              <em className="not-italic font-semibold text-ember">of</em>
              Claude
            </p>
            <p className="text-ink/70 text-[14px] mt-2.5">
              Build loud &middot; ship faster than they can copy
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-2">
          <div>
            <p className="eyebrow mb-3">Read</p>
            <a href="#work" className="block py-1 text-[15px] text-ink hover:text-ember transition-colors">
              Work
            </a>
            <a href="#letter" className="block py-1 text-[15px] text-ink hover:text-ember transition-colors">
              Letter
            </a>
            <a href="#stack" className="block py-1 text-[15px] text-ink hover:text-ember transition-colors">
              Stack
            </a>
          </div>
          <div>
            <p className="eyebrow mb-3">Build</p>
            <a href="#coach" className="block py-1 text-[15px] text-ink hover:text-ember transition-colors">
              The Method
            </a>
            <a href="#coach" className="block py-1 text-[15px] text-ink hover:text-ember transition-colors">
              Partnership
            </a>
            <a href="mailto:hello@wolfofclaude.com" className="block py-1 text-[15px] text-ink hover:text-ember transition-colors">
              Email
            </a>
          </div>
          <div>
            <p className="eyebrow mb-3">Follow</p>
            <a href="#" className="block py-1 text-[15px] text-ink hover:text-ember transition-colors">
              TikTok
            </a>
            <a href="#" className="block py-1 text-[15px] text-ink hover:text-ember transition-colors">
              Instagram
            </a>
            <a href="#" className="block py-1 text-[15px] text-ink hover:text-ember transition-colors">
              X
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-2 pt-8 border-t border-ink/10 text-ink/65 text-[13px]">
        <span>© 2026 Wolf of Claude</span>
        <span>All builds welcome.</span>
      </div>
    </footer>
  );
}
