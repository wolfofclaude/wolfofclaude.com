# Wolf of Claude

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind 4

## Run it

```powershell
cd C:\Users\bilal\Desktop\assets\wolfofclaude
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

```
app/
  layout.tsx     # root layout, fonts, metadata
  page.tsx       # the single-page composition
  globals.css    # Tailwind + theme + animations
components/
  Nav, Hero, Marquee, Manifesto, Work, Beats,
  Coach, Letter, Social, SiteFooter, ScrollReveal, Spark
public/
  spark, favicon, app-icon assets
```

## Edit the words

All copy lives inline in the component files — open the file, change the JSX text.
- Hero headline & stats: `components/Hero.tsx`
- Work cards (titles/descriptions): `components/Work.tsx`
- Coaching pitch & steps: `components/Coach.tsx`
- Social handles: `components/Social.tsx`

## Replace placeholders before launch

- Social hrefs in `components/Social.tsx` (`href: '#'` → real URLs)
- Coach apply link in `components/Coach.tsx`
- Wire the newsletter form in `components/Letter.tsx` to ConvertKit / Beehiiv
- Card visuals: each `<Card visual={...}>` block in `components/Work.tsx` is a CSS scene — swap for real thumbnails when you have them
- Email address in `components/SiteFooter.tsx`

## Deploy

Push to GitHub, import on Vercel — zero config.
