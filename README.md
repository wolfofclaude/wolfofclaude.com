<div align="center">

<img src="public/spark-ember.svg" alt="Wolf of Claude spark mark" width="120" />

# Wolf *of* Claude

**Build loud. Ship faster than they can copy.**

*Apps, Web3, founder life. Building with AI in public, with Claude as the second brain.*

[![Live site](https://img.shields.io/badge/live-wolfofclaude.com-B8400A?style=for-the-badge&labelColor=171513)](https://wolfofclaude.com)
[![TikTok](https://img.shields.io/badge/TikTok-%40wolfofclaude-171513?style=for-the-badge&logo=tiktok&logoColor=F2ECE0)](https://tiktok.com/@wolfofclaude)
[![X](https://img.shields.io/badge/X-%40wolfofclaude-171513?style=for-the-badge&logo=x&logoColor=F2ECE0)](https://x.com/wolfofclaude)

</div>

---

## The brand

Wolf of Claude is what happens when you stop asking permission and start shipping in front of everyone. It is the live channel of building with AI: apps, Web3 plays, lifestyle, and the kind of velocity that gets you flagged for cheating.

The site is the home base. Everything else (TikToks, reels, threads, essays, the letter) feeds back into it.

## Palette

<div align="center">

![Ink](https://img.shields.io/badge/Ink-%23171513-171513?style=for-the-badge)
![Ember](https://img.shields.io/badge/Ember-%23B8400A-B8400A?style=for-the-badge)
![Rust](https://img.shields.io/badge/Rust-%238C2F08-8C2F08?style=for-the-badge)
![Flame](https://img.shields.io/badge/Flame-%23D9551A-D9551A?style=for-the-badge)
![Stone](https://img.shields.io/badge/Stone-%237A6F5E-7A6F5E?style=for-the-badge)
![Bone](https://img.shields.io/badge/Bone-%23E5DCC9-E5DCC9?style=for-the-badge&labelColor=171513)
![Cream](https://img.shields.io/badge/Cream-%23F2ECE0-F2ECE0?style=for-the-badge&labelColor=171513)

</div>

## Typography

| Role     | Family            | Weight   | Notes                                  |
|----------|-------------------|----------|----------------------------------------|
| Display  | **Fraunces**      | 500, 600 | Italic for emphasis. Headlines only.   |
| UI / Body | **Inter**         | 400, 500 | All paragraph & navigation copy.       |
| Utility  | **JetBrains Mono**| 500      | Numerics, hex, technical labels.       |

## Tech stack

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.1-171513?style=for-the-badge&logo=nextdotjs&logoColor=F2ECE0)
![React](https://img.shields.io/badge/React-19-B8400A?style=for-the-badge&logo=react&logoColor=F2ECE0)
![TypeScript](https://img.shields.io/badge/TypeScript-5-171513?style=for-the-badge&logo=typescript&logoColor=F2ECE0)
![Tailwind](https://img.shields.io/badge/Tailwind-4-B8400A?style=for-the-badge&logo=tailwindcss&logoColor=F2ECE0)
![Vercel](https://img.shields.io/badge/Vercel-deploy-171513?style=for-the-badge&logo=vercel&logoColor=F2ECE0)

</div>

## Run it

```powershell
git clone https://github.com/wolfofclaude/wolfofclaude.com.git
cd wolfofclaude.com
npm install
npm run dev
```

Then open http://localhost:3000.

## What is inside

```
app/
  layout.tsx     Root layout, fonts, metadata
  page.tsx       The single page composition
  globals.css    Tailwind theme, animations, utilities
components/
  Nav            Sticky nav with the spark mark
  Hero           Build loud. Ship faster than they can copy.
  Marquee        The brand voice on rotation
  Manifesto      The thesis
  Numbers        The wolf in numbers
  Work           Selected transmissions
  Beats          The four beats: AI, Web3, Apps, Life
  Stack          The toolbox (affiliate ready)
  Coach          Work with me, three tiers
  Letter         The Sunday letter signup
  Social         Where the noise lives
  SiteFooter     Brand mark and links
  ScrollProgress Thin ember line at the top
  ScrollReveal   Fade up on enter
  Spark          The mark as a React component
public/
  spark, favicon, app-icon, brand glyphs
```

## Edit the words

All copy lives inline in the component files. Open the file, change the JSX text. No CMS, no headless, no nonsense.

- Hero headline & sub: `components/Hero.tsx`
- Manifesto: `components/Manifesto.tsx`
- The numbers: `components/Numbers.tsx`
- Work cards: `components/Work.tsx`
- The four beats: `components/Beats.tsx`
- The toolbox & affiliate links: `components/Stack.tsx`
- Coach tiers & pricing: `components/Coach.tsx`
- Newsletter copy: `components/Letter.tsx`
- Social handles: `components/Social.tsx`

## Deploy

Push to `main`, Vercel rebuilds. The whole site is statically prerendered (`○ Static`), so cold starts are near zero and CDN response times are sub-100ms globally.

Set one env var on Vercel:

```
NEXT_PUBLIC_SITE_URL=https://wolfofclaude.com
```

This makes OG image URLs resolve absolutely, which matters for link previews on TikTok, Instagram, and X. That is the virality fuel.

## License

Brand and mark are owned by Wolf of Claude. Code is yours to read and learn from, but please do not copy the brand identity. Build your own loud.

---

<div align="center">

<img src="public/spark.svg" alt="" width="32" style="opacity: 0.4" />

*Build loud. Ship faster than they can copy.*

**[wolfofclaude.com](https://wolfofclaude.com)** &middot; **[TikTok](https://tiktok.com/@wolfofclaude)** &middot; **[Instagram](https://instagram.com/wolfofclaude)** &middot; **[X](https://x.com/wolfofclaude)** &middot; **[YouTube](https://youtube.com/@wolfofclaude)**

<br/>

`MMXXVI`

</div>
