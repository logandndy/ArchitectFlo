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
      <div className="section-bridge hidden md:flex">
        <span className="section-bridge-line" />
        <span className="section-bridge-mark" />
        <span className="section-bridge-line" />
      </div>
      <Tarifs />
      <Temoignages />
      <Contact />
    </>
  )
}