'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Hero() {
  const counterRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    // Animate year counter
    const target = 2024
    const start = 2010
    const duration = 1500
    const startTime = performance.now()

    const update = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(start + (target - start) * eased)

      if (counterRef.current) {
        counterRef.current.textContent = current.toString()
      }

      if (progress < 1) requestAnimationFrame(update)
    }
    requestAnimationFrame(update)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-grid">
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-[40vw] h-[40vw] opacity-[0.07]"
        style={{
          background: 'radial-gradient(circle, #D4521A 0%, transparent 70%)',
        }}
      />

      {/* Vertical side text */}
      <div
        className="absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 text-[#6B6B6B] text-[9px] tracking-[0.4em] uppercase whitespace-nowrap hidden lg:block"
        style={{ fontFamily: 'IBM Plex Mono, monospace' }}
      >
        Matière · Lumière · Espace
      </div>

      {/* Stats top-right */}
      <div className="absolute top-28 right-6 md:right-12 flex flex-col items-end gap-1">
        <div
          className="text-[#D4521A] text-[10px] tracking-[0.3em] uppercase"
          style={{ fontFamily: 'IBM Plex Mono, monospace' }}
        >
          Depuis
        </div>
        <div
          className="text-[#F2EFE9] text-4xl"
          style={{ fontFamily: 'Bebas Neue, serif', letterSpacing: '0.05em' }}
        >
          <span ref={counterRef}>2010</span>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 px-6 md:px-16 pb-16 md:pb-24">
        {/* Eyebrow */}
        <div
          className="flex items-center gap-4 mb-8 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="w-8 h-px bg-[#D4521A]" />
          <span
            className="text-[#D4521A] text-[10px] tracking-[0.4em] uppercase"
            style={{ fontFamily: 'IBM Plex Mono, monospace' }}
          >
            Architecte DPLG
          </span>
        </div>

        {/* Name block */}
        <div
          className="overflow-hidden mb-2 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.35s' }}
        >
          <h1
            className="text-[#F2EFE9] leading-none"
            style={{
              fontFamily: 'Bebas Neue, serif',
              fontSize: 'clamp(4.5rem, 13vw, 14rem)',
              letterSpacing: '-0.02em',
            }}
          >
            Florence
          </h1>
        </div>
        <div
          className="overflow-hidden mb-10 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.45s' }}
        >
          <h1
            className="leading-none"
            style={{
              fontFamily: 'Bebas Neue, serif',
              fontSize: 'clamp(4.5rem, 13vw, 14rem)',
              letterSpacing: '-0.02em',
              WebkitTextStroke: '1px rgba(242,239,233,0.4)',
              color: 'transparent',
            }}
          >
            Jarlan-Munoz
          </h1>
        </div>

        {/* Separator line */}
        <div
          className="w-0 h-px bg-[rgba(242,239,233,0.15)] mb-10 reveal-line"
          style={{ animationDelay: '0.6s', width: '100%' }}
        />

        {/* Bottom row */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.7s' }}
        >
          <p
            className="text-[#C8C4BC] max-w-sm leading-relaxed"
            style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem' }}
          >
            Concevoir des espaces qui résistent au temps.{' '}
            <em>Réhabilitation, extension, aménagement intérieur</em> — chaque projet porte une intention.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/#projets"
              className="group flex items-center gap-3 border border-[rgba(242,239,233,0.2)] hover:border-[#D4521A] px-6 py-3 transition-colors duration-300"
            >
              <span
                className="text-[#F2EFE9] text-[11px] tracking-[0.3em] uppercase group-hover:text-[#D4521A] transition-colors"
                style={{ fontFamily: 'IBM Plex Mono, monospace' }}
              >
                Voir les projets
              </span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#D4521A]">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </Link>

            <Link
              href="/#contact"
              className="text-[#6B6B6B] hover:text-[#F2EFE9] text-[11px] tracking-[0.3em] uppercase transition-colors"
              style={{ fontFamily: 'IBM Plex Mono, monospace' }}
            >
              Contact →
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div
          className="text-[#F2EFE9] text-[8px] tracking-[0.4em] uppercase"
          style={{ fontFamily: 'IBM Plex Mono, monospace' }}
        >
          Scroll
        </div>
        <div className="w-px h-12 bg-gradient-to-b from-[#F2EFE9] to-transparent animate-pulse" />
      </div>
    </section>
  )
}
