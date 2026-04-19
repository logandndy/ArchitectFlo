'use client'
import { useEffect, useRef, useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { projets } from '@/lib/projets'

type SlideState = 'visible' | 'enter' | 'out'

interface Slide {
  index: number
  state: SlideState
}

export default function Hero() {
  const counterRef = useRef<HTMLSpanElement>(null)
  const badgeRef   = useRef<HTMLAnchorElement>(null)

  const [slides, setSlides]     = useState<Slide[]>([{ index: 0, state: 'visible' }])
  const [badgeFading, setBadgeFading] = useState(false)
  const [currentIdx, setCurrentIdx]   = useState(0)
  const isAnimating = useRef(false)

  useEffect(() => {
    const start = 2026, target = 1991, dur = 1400, t0 = performance.now()
    const run = (now: number) => {
      const p = Math.min((now - t0) / dur, 1)
      const e = 1 - Math.pow(1 - p, 3)
      if (counterRef.current)
        counterRef.current.textContent = String(Math.round(start + (target - start) * e))
      if (p < 1) requestAnimationFrame(run)
    }
    requestAnimationFrame(run)
  }, [])

  const goTo = useCallback((nextIdx: number) => {
    if (isAnimating.current || nextIdx === currentIdx) return
    isAnimating.current = true

    // 1. Fade out du badge
    setBadgeFading(true)

    // 2. Préparer la nouvelle slide (hors écran à droite = enter)
    setSlides([
      { index: currentIdx, state: 'visible' },
      { index: nextIdx,    state: 'enter'   },
    ])

    // 3. Après un tick, déclencher la transition
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setSlides([
          { index: currentIdx, state: 'out'     },
          { index: nextIdx,    state: 'visible' },
        ])
      })
    })

    // 4. Nettoyer après la transition + fade in badge
    setTimeout(() => {
      setCurrentIdx(nextIdx)
      setSlides([{ index: nextIdx, state: 'visible' }])
      setBadgeFading(false)
      isAnimating.current = false
    }, 950)

  }, [currentIdx])

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      goTo((currentIdx + 1) % projets.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [currentIdx, goTo])

  const projet = projets[currentIdx]

  return (
    <section className="hero-v2">

      {/* Texte latéral — bord gauche absolu de la section */}
      <p className="hero-sideways">Matière · Lumière · Espace · Structure</p>

      {/* ══ COLONNE GAUCHE ══ */}
      <div className="hero-v2-left">

        <div className="hero-v2-topline anim-up d1" />

        <div className="hero-v2-eyebrow anim-up d1">
          <span className="sec-eyebrow-line" />
          <p className="t-label">Architecte DPLG</p>
        </div>

        <div className="anim-up d2">
          <h1 className="t-hero">Florence</h1>
        </div>
        <div className="anim-up d3">
          <h1 className="t-hero-outline">Jarlan-Munoz</h1>
        </div>

        <div className="hero-v2-sep anim-line d3" />

        <p className="hero-v2-tagline anim-up d4">
          <em>Réhabilitation, extension, construction, diagnostics, urbanisme</em>
        </p>

        <div className="hero-v2-cta anim-up d4">
          <Link href="/#projets" className="hero-btn-primary">
            Voir les projets
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link href="/#contact" className="hero-btn-secondary">
            Contact →
          </Link>
        </div>

        <div className="hero-v2-geo anim-up d5">
          <p className="t-label">43°12′N · 02°21′E</p>
          <div className="hero-v2-geo-sep" />
          <p className="t-label">Occitanie · France</p>
        </div>

        <div className="hero-v2-counter anim-up d1">
          <p className="t-label">Depuis</p>
          <p className="hero-v2-counter-year"><span ref={counterRef}>2026</span></p>
        </div>

<div className="hero-v2-scroll scroll-hint">
          <p className="t-label" style={{fontSize:'.5rem'}}>Scroll</p>
          <div className="hero-v2-scroll-line" />
        </div>
      </div>

      {/* ══ COLONNE DROITE ══ */}
      <div className="hero-v2-right anim-up d3">

        <div className="hero-v2-img-wrap">

          {/* Slides empilées */}
          {slides.map(slide => (
            <Image
              key={slide.index}
              src={projets[slide.index].image_principale}
              alt={projets[slide.index].titre}
              fill
              priority={slide.index === 0}
              sizes="(max-width:1023px) 100vw, 45vw"
              className={`hero-v2-img hero-v2-img-${slide.state}`}
            />
          ))}

          {/* Effets burn */}
          <div className="hero-v2-burn-left"  />
          <div className="hero-v2-burn-top"   />
          <div className="hero-v2-burn-bottom"/>
          <div className="hero-v2-grain" />

          {/* Dots */}
          <div className="hero-slideshow-dots">
            {projets.map((_, i) => (
              <button
                key={i}
                className={`hero-slideshow-dot${i === currentIdx ? ' active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Projet ${i + 1}`}
              />
            ))}
          </div>

          {/* Badge CTA — fade avec le slide */}
          <Link
            ref={badgeRef}
            href="/#projets"
            className={`hero-v2-badge${badgeFading ? ' is-fading' : ''}`}
          >
            <p className="hero-badge-eyebrow">Projet récent</p>
            <p className="hero-v2-badge-title">{projet.titre}</p>
            <p className="hero-badge-meta">{projet.lieu} · {projet.annee} · {projet.surface}</p>
            <span className="hero-badge-cta">
              Découvrir
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M1 5h8M6 2l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </span>
          </Link>
        </div>

        {/* Deux SVG plans côte à côte */}
        <div className="hero-v2-plans">

          {/* Plan masse RDC */}
          <svg viewBox="0 0 220 180" fill="none" className="hero-v2-plan-svg">
            <rect x="15" y="15" width="190" height="150" stroke="#1a1816" strokeWidth="1.1"/>
            <line x1="15"  y1="90"  x2="115" y2="90"  stroke="#1a1816" strokeWidth=".7"/>
            <line x1="115" y1="15"  x2="115" y2="165" stroke="#1a1816" strokeWidth=".7"/>
            <line x1="115" y1="110" x2="205" y2="110" stroke="#1a1816" strokeWidth=".7"/>
            <path d="M 15 58 A 22 22 0 0 1 37 36" stroke="#1a1816" strokeWidth=".55" fill="none"/>
            <line x1="15" y1="58" x2="15" y2="36" stroke="#1a1816" strokeWidth=".55"/>
            <path d="M 115 135 A 18 18 0 0 0 133 117" stroke="#1a1816" strokeWidth=".55" fill="none"/>
            <line x1="115" y1="135" x2="115" y2="117" stroke="#1a1816" strokeWidth=".55"/>
            <line x1="58"  y1="15"  x2="98"  y2="15"  stroke="#1a1816" strokeWidth="2"/>
            <line x1="130" y1="15"  x2="185" y2="15"  stroke="#1a1816" strokeWidth="2"/>
            <line x1="15"  y1="108" x2="15"  y2="145" stroke="#1a1816" strokeWidth="2"/>
            <text x="60"  y="57"  textAnchor="middle" fill="#1a1816" fontSize="6" fontFamily="Space Mono" opacity=".5">SÉJOUR</text>
            <text x="162" y="66"  textAnchor="middle" fill="#1a1816" fontSize="6" fontFamily="Space Mono" opacity=".5">CUISINE</text>
            <text x="60"  y="135" textAnchor="middle" fill="#1a1816" fontSize="6" fontFamily="Space Mono" opacity=".5">CH. 01</text>
            <text x="162" y="142" textAnchor="middle" fill="#1a1816" fontSize="6" fontFamily="Space Mono" opacity=".5">CH. 02</text>
            <line x1="15" y1="173" x2="205" y2="173" stroke="#1a1816" strokeWidth=".45"/>
            <line x1="15" y1="170" x2="15"  y2="176" stroke="#1a1816" strokeWidth=".45"/>
            <line x1="205" y1="170" x2="205" y2="176" stroke="#1a1816" strokeWidth=".45"/>
            <text x="110" y="179" textAnchor="middle" fill="#1a1816" fontSize="5.5" fontFamily="Space Mono" letterSpacing="1">18.50 m</text>
            <text x="110" y="10"  textAnchor="middle" fill="#1a1816" fontSize="5" fontFamily="Space Mono" opacity=".35">RDC · Éch. 1:100</text>
          </svg>

          {/* Coupe façade */}
          <svg viewBox="0 0 220 180" fill="none" className="hero-v2-plan-svg">
            <line x1="10" y1="165" x2="210" y2="165" stroke="#1a1816" strokeWidth="2"/>
            <rect x="30" y="110" width="160" height="55" stroke="#1a1816" strokeWidth="1.1"/>
            <rect x="45" y="60"  width="130" height="50" stroke="#1a1816" strokeWidth="1.1"/>
            <polygon points="110,18 35,60 185,60" stroke="#1a1816" strokeWidth="1.1" fill="none"/>
            <rect x="50"  y="125" width="28" height="40" stroke="#1a1816" strokeWidth=".8"/>
            <rect x="95"  y="125" width="35" height="28" stroke="#1a1816" strokeWidth=".8"/>
            <rect x="148" y="125" width="24" height="40" stroke="#1a1816" strokeWidth=".8"/>
            <rect x="70"  y="72"  width="80" height="28" stroke="#1a1816" strokeWidth=".8"/>
            <line x1="110" y1="72" x2="110" y2="100" stroke="#1a1816" strokeWidth=".5"/>
            <line x1="12" y1="110" x2="26" y2="110" stroke="#1a1816" strokeWidth=".5"/>
            <line x1="12" y1="60"  x2="26" y2="60"  stroke="#1a1816" strokeWidth=".5"/>
            <text x="8" y="114" fill="#1a1816" fontSize="5.5" fontFamily="Space Mono" opacity=".45">R+0</text>
            <text x="8" y="64"  fill="#1a1816" fontSize="5.5" fontFamily="Space Mono" opacity=".45">R+1</text>
            <line x1="198" y1="60"  x2="198" y2="165" stroke="#1a1816" strokeWidth=".45"/>
            <line x1="195" y1="60"  x2="201" y2="60"  stroke="#1a1816" strokeWidth=".45"/>
            <line x1="195" y1="165" x2="201" y2="165" stroke="#1a1816" strokeWidth=".45"/>
            <text x="209" y="116" textAnchor="middle" fill="#1a1816" fontSize="5" fontFamily="Space Mono" opacity=".4" transform="rotate(90,209,116)">6.80 m</text>
            <text x="110" y="10" textAnchor="middle" fill="#1a1816" fontSize="5" fontFamily="Space Mono" opacity=".35">Coupe AA · Façade Sud</text>
          </svg>

        </div>
      </div>
    </section>
  )
}