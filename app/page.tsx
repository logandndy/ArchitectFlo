import Hero from '@/components/Hero'
import StatsBar from '@/components/Marquee'
import Projets from '@/components/Projets'
import Tarifs from '@/components/Tarifs'
import Temoignages from '@/components/Temoignages'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Projets />
      <Tarifs />
      <Temoignages />
      <Contact />
    </>
  )
}