import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Marquee } from '@/components/Marquee';
import { Manifesto } from '@/components/Manifesto';
import { Numbers } from '@/components/Numbers';
import { Work } from '@/components/Work';
import { Beats } from '@/components/Beats';
import { Stack } from '@/components/Stack';
import { Coach } from '@/components/Coach';
import { Letter } from '@/components/Letter';
import { Social } from '@/components/Social';
import { SiteFooter } from '@/components/SiteFooter';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ScrollProgress } from '@/components/ScrollProgress';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Manifesto />
        <Numbers />
        <Work />
        <Beats />
        <Stack />
        <Coach />
        <Letter />
        <Social />
      </main>
      <SiteFooter />
      <ScrollReveal />
    </>
  );
}
