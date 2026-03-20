'use client'
import { useRef, useState, useEffect } from 'react'

const avis = [
  {
    nom: 'Marie & Julien Fabre',
    projet: 'Réhabilitation — Maison de village, Ariège',
    annee: '2023',
    note: 5,
    texte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    nom: 'Atelier Tessier',
    projet: 'Aménagement intérieur — Loft industriel, Bordeaux',
    annee: '2024',
    note: 5,
    texte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    nom: 'Sophie Lardent',
    projet: 'Extension contemporaine, Toulouse',
    annee: '2022',
    note: 5,
    texte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    nom: 'Domaine de la Rivière',
    projet: 'Restructuration & permis — Corps de ferme, Hérault',
    annee: '2023',
    note: 5,
    texte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    nom: 'Pierre-Antoine Moreau',
    projet: 'Conception — Maison neuve passive, Lot',
    annee: '2024',
    note: 5,
    texte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
]

export default function Temoignages() {
  const trackRef  = useRef<HTMLDivElement>(null)
  const [paused, setPaused]     = useState(false)
  const [active, setActive]     = useState<number | null>(null)
  const animRef   = useRef<number>(0)
  const posRef    = useRef<number>(0)
  const speedRef  = useRef<number>(0.45) // px/frame

  // Duplication pour loop infini
  const doubled = [...avis, ...avis]

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const step = () => {
      if (!paused) {
        posRef.current += speedRef.current
        const half = track.scrollWidth / 2
        if (posRef.current >= half) posRef.current -= half
        track.style.transform = `translateX(-${posRef.current}px)`
      }
      animRef.current = requestAnimationFrame(step)
    }
    animRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animRef.current)
  }, [paused])

  return (
    <section className="temo-section sec-black arch-grid-dark">

      {/* Header */}
      <div className="temo-header sec-pad" style={{paddingBottom: 0}}>
        <div>
          <div className="sec-eyebrow">
            <span className="sec-eyebrow-line-lt" />
            <p className="t-label-dark">Ce qu&apos;ils disent</p>
          </div>
          <h2 className="t-section-light">Témoignages</h2>
        </div>
        <p className="t-body-dark hidden md:block" style={{maxWidth:'32ch'}}>
          Chaque projet commence par une confiance. Voici comment nos clients décrivent leur expérience.
        </p>
      </div>

      {/* Piste défilante */}
      <div className="temo-viewport">
        <div
          ref={trackRef}
          className="temo-track"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => { setPaused(false); setActive(null) }}
        >
          {doubled.map((item, i) => {
            const realIdx = i % avis.length
            const isActive = active === i
            return (
              <div
                key={i}
                className={`temo-card${isActive ? ' temo-card--active' : ''}`}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onTouchStart={() => setActive(active === i ? null : i)}
              >
                {/* Étoiles */}
                <div className="temo-stars">
                  {Array.from({length: item.note}).map((_, s) => (
                    <svg key={s} width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M5 1l1.12 2.27 2.5.36-1.81 1.76.43 2.5L5 6.77 2.76 7.89l.43-2.5L1.38 3.63l2.5-.36L5 1z"
                        fill="var(--hover)" />
                    </svg>
                  ))}
                </div>

                {/* Guillemet */}
                <div className="temo-quote-mark"></div>

                {/* Texte */}
                <p className="temo-text">{item.texte}</p>

                {/* Auteur */}
                <div className="temo-author">
                  <div className="temo-author-avatar">
                    {item.nom.charAt(0)}
                  </div>
                  <div>
                    <p className="temo-author-name">{item.nom}</p>
                    <p className="temo-author-projet">{item.projet}</p>
                  </div>
                  <p className="temo-author-year">{item.annee}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Dégradés bords */}
        <div className="temo-fade-left"  />
        <div className="temo-fade-right" />
      </div>

      {/* Bas de section */}
      <div className="temo-footer sec-pad" style={{paddingTop: '2rem'}}>
        <p className="t-label-dark">5 / 5 — Satisfaction client · {avis.length} projets livrés récemment</p>
      </div>

    </section>
  )
}