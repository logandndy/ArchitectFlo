'use client'
import { useRef, useState, useEffect } from 'react'

const avis = [
  {
    nom: 'Gabrielle et Christian',
    projet: 'Conception · Permis de construire · Maison neuve à Brassac, Ariège',
    annee: '2025',
    note: 5,
    texte: "Nous avons le plaisir de partager avec vous cette très bonne nouvelle tant attendue. Avec un travail si bien préparé, cela ne pouvait être que favorable. Merci encore pour la qualité de votre prestation et l'attention portée à ce projet.",
  },
  {
    nom: 'MPBA Menuiseries PVC, Bois, Alu',
    projet: 'Pool house et pergola bioclimatique',
    annee: '2025',
    note: 5,
    texte: "À la suite d'un projet mis à l'étude par l'architecte Florence Jarlan-Muñoz, cette pergola devient un véritable atout charme pour cette maison !",
  },
  {
    nom: 'Sophie Lardent',
    projet: 'Extension contemporaine, Toulouse',
    annee: '2022',
    note: 5,
    texte: "Un accompagnement rigoureux du premier croquis à la réception. Le résultat dépasse nos attentes en termes d'espace et de lumière.",
  },
  {
    nom: 'Domaine de la Rivière',
    projet: 'Restructuration & permis — Corps de ferme, Hérault',
    annee: '2023',
    note: 5,
    texte: "Florence a su comprendre l'âme du lieu. La restructuration respecte l'identité du bâti tout en apportant une vraie modernité d'usage.",
  },
  {
    nom: 'Pierre-Antoine Moreau',
    projet: 'Conception — Maison neuve passive, Lot',
    annee: '2024',
    note: 5,
    texte: "Expertise technique exemplaire sur la performance énergétique, sans jamais sacrifier le soin apporté aux détails architecturaux.",
  },
]

function StarIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M5 1l1.12 2.27 2.5.36-1.81 1.76.43 2.5L5 6.77 2.76 7.89l.43-2.5L1.38 3.63l2.5-.36L5 1z" fill="var(--hover)" />
    </svg>
  )
}

function CardContent({ item }: { item: typeof avis[0] }) {
  return (
    <>
      <div className="temo-stars">
        {Array.from({ length: item.note }).map((_, s) => <StarIcon key={s} />)}
      </div>
      <p className="temo-text">{item.texte}</p>
      <div className="temo-author">
        <div className="temo-author-avatar">{item.nom.charAt(0)}</div>
        <div>
          <p className="temo-author-name">{item.nom}</p>
          <p className="temo-author-projet">{item.projet}</p>
        </div>
        <p className="temo-author-year">{item.annee}</p>
      </div>
    </>
  )
}

export default function Temoignages() {
  // ── Desktop auto-scroll ──
  const viewportRef  = useRef<HTMLDivElement>(null)
  const trackRef     = useRef<HTMLDivElement>(null)
  const animRef      = useRef<number>(0)
  const posRef       = useRef<number>(0)
  const centeredRef  = useRef<number>(-1)

  // ── Mobile snap ──
  const snapRef      = useRef<HTMLDivElement>(null)
  const [activeSnap, setActiveSnap] = useState(0)

  const doubled = [...avis, ...avis]

  // Desktop : auto-scroll + détection centre
  useEffect(() => {
    const track    = trackRef.current
    const viewport = viewportRef.current
    if (!track || !viewport) return

    const step = () => {
      posRef.current += 0.45
      const half = track.scrollWidth / 2
      if (posRef.current >= half) posRef.current -= half
      track.style.transform = `translateX(-${posRef.current}px)`

      const vCenter = viewport.getBoundingClientRect().left + viewport.clientWidth / 2
      const cards   = track.children
      let closest = 0, minDist = Infinity
      for (let i = 0; i < cards.length; i++) {
        const r = cards[i].getBoundingClientRect()
        const d = Math.abs(r.left + r.width / 2 - vCenter)
        if (d < minDist) { minDist = d; closest = i }
      }
      if (closest !== centeredRef.current) {
        if (centeredRef.current >= 0) cards[centeredRef.current]?.classList.remove('temo-card--center')
        cards[closest]?.classList.add('temo-card--center')
        centeredRef.current = closest
      }

      animRef.current = requestAnimationFrame(step)
    }
    animRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animRef.current)
  }, [])

  // Mobile : dots via scroll
  useEffect(() => {
    const el = snapRef.current
    if (!el) return
    const onScroll = () => {
      const card = el.children[0] as HTMLElement
      const cardWidth = card ? card.offsetWidth + 16 : el.clientWidth
      const idx = Math.min(Math.round(el.scrollLeft / cardWidth), avis.length - 1)
      setActiveSnap(idx)
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="temoignages" className="temo-section sec-black arch-grid-dark">

      <div className="temo-header sec-pad" style={{ paddingBottom: 0 }}>
        <div>
          <div className="sec-eyebrow">
            <span className="sec-eyebrow-line-lt" />
            <p className="t-label-dark">Ce qu&apos;ils disent</p>
          </div>
          <h2 className="t-section-light">Témoignages</h2>
        </div>
        <p className="t-body-dark hidden md:block" style={{ maxWidth: '32ch', color: 'rgba(232,227,225,0.65)' }}>
          Chaque projet commence par une confiance. Voici comment nos clients décrivent leur expérience.
        </p>
      </div>

      {/* ── Desktop auto-scroll ── */}
      <div className="temo-viewport hidden md:block" ref={viewportRef}>
        <div ref={trackRef} className="temo-track">
          {doubled.map((item, i) => (
            <div key={i} className="temo-card">
              <CardContent item={item} />
            </div>
          ))}
        </div>
        <div className="temo-fade-left" />
        <div className="temo-fade-right" />
      </div>

      {/* ── Mobile snap scroll ── */}
      <div className="temo-snap md:hidden" ref={snapRef}>
        {avis.map((item, i) => (
          <div key={i} className={`temo-snap-card${activeSnap === i ? ' temo-card--center' : ''}`}>
            <CardContent item={item} />
          </div>
        ))}
      </div>
      <div className="temo-dots md:hidden">
        {avis.map((_, i) => (
          <span key={i} className={`temo-dot${activeSnap === i ? ' active' : ''}`} />
        ))}
      </div>

      <div className="temo-footer sec-pad" style={{ paddingTop: '2rem' }}>
        <p className="t-label-dark">5 / 5 — Satisfaction client · {avis.length} projets livrés récemment</p>
      </div>

    </section>
  )
}
