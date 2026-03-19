'use client'

import { useState } from 'react'
import Image from 'next/image'
import { projets } from '@/lib/projets'

export default function Projets() {
  const [activeProjet, setActiveProjet] = useState<string | null>(null)

  return (
    <section id="projets" className="py-24 md:py-36 px-6 md:px-16">
      {/* Section header */}
      <div className="flex items-end justify-between mb-16 md:mb-24">
        <div>
          <div
            className="text-[#D4521A] text-[10px] tracking-[0.4em] uppercase mb-4 flex items-center gap-3"
            style={{ fontFamily: 'IBM Plex Mono, monospace' }}
          >
            <span className="w-6 h-px bg-[#D4521A]" />
            Travaux sélectionnés
          </div>
          <h2
            className="text-[#F2EFE9] leading-none"
            style={{
              fontFamily: 'Bebas Neue, serif',
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              letterSpacing: '-0.02em',
            }}
          >
            Projets
          </h2>
        </div>
        <div
          className="hidden md:block text-[#6B6B6B] text-[10px] tracking-[0.3em] uppercase"
          style={{ fontFamily: 'IBM Plex Mono, monospace' }}
        >
          {projets.length} réalisations
        </div>
      </div>

      {/* Projects list */}
      <div className="space-y-0">
        {projets.map((projet, index) => (
          <div
            key={projet.id}
            className="group cursor-pointer"
            onClick={() => setActiveProjet(activeProjet === projet.id ? null : projet.id)}
          >
            {/* Project row */}
            <div className="border-t border-[rgba(242,239,233,0.08)] group-hover:border-[rgba(242,239,233,0.2)] transition-colors py-8 md:py-10">
              <div className="grid grid-cols-12 items-center gap-4">
                {/* Number */}
                <div className="col-span-2 md:col-span-1">
                  <span
                    className="text-[#D4521A] text-sm"
                    style={{ fontFamily: 'IBM Plex Mono, monospace' }}
                  >
                    {projet.numero}
                  </span>
                </div>

                {/* Title */}
                <div className="col-span-8 md:col-span-5">
                  <h3
                    className="text-[#F2EFE9] group-hover:text-[#D4521A] transition-colors leading-none"
                    style={{
                      fontFamily: 'Bebas Neue, serif',
                      fontSize: 'clamp(1.8rem, 4vw, 3.5rem)',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {projet.titre}
                  </h3>
                  <p
                    className="text-[#6B6B6B] text-[11px] tracking-[0.2em] uppercase mt-1"
                    style={{ fontFamily: 'IBM Plex Mono, monospace' }}
                  >
                    {projet.sous_titre}
                  </p>
                </div>

                {/* Meta — hidden on mobile */}
                <div className="hidden md:flex col-span-4 items-center justify-end gap-8">
                  <span
                    className="text-[#6B6B6B] text-[10px] tracking-[0.3em] uppercase"
                    style={{ fontFamily: 'IBM Plex Mono, monospace' }}
                  >
                    {projet.lieu}
                  </span>
                  <span
                    className="text-[#6B6B6B] text-[10px] tracking-[0.3em] uppercase"
                    style={{ fontFamily: 'IBM Plex Mono, monospace' }}
                  >
                    {projet.annee}
                  </span>
                  <span
                    className="text-[#6B6B6B] text-[10px] tracking-[0.3em] uppercase border border-[rgba(242,239,233,0.12)] px-2 py-1"
                    style={{ fontFamily: 'IBM Plex Mono, monospace' }}
                  >
                    {projet.categorie}
                  </span>
                </div>

                {/* Arrow */}
                <div className="col-span-2 md:col-span-2 flex justify-end">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className={`text-[#D4521A] transition-transform duration-300 ${
                      activeProjet === projet.id ? 'rotate-90' : 'group-hover:translate-x-1'
                    }`}
                  >
                    <path
                      d="M4 10h12M12 5l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Expandable detail */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeProjet === projet.id ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="pb-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#1A1A1A]">
                  <Image
                    src={projet.image_principale}
                    alt={projet.titre}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent" />
                  {/* Surface tag */}
                  <div className="absolute bottom-4 right-4">
                    <span
                      className="bg-[#D4521A] text-[#F2EFE9] text-[10px] tracking-[0.2em] uppercase px-3 py-1"
                      style={{ fontFamily: 'IBM Plex Mono, monospace' }}
                    >
                      {projet.surface}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between">
                  <div>
                    <p
                      className="text-[#C8C4BC] leading-relaxed mb-6"
                      style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem' }}
                    >
                      {projet.description_longue}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {projet.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-[rgba(242,239,233,0.15)] text-[#6B6B6B] text-[9px] tracking-[0.3em] uppercase px-3 py-1"
                          style={{ fontFamily: 'IBM Plex Mono, monospace' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Meta bottom */}
                  <div className="mt-8 pt-6 border-t border-[rgba(242,239,233,0.08)] grid grid-cols-3 gap-4">
                    {[
                      { label: 'Lieu', value: projet.lieu },
                      { label: 'Année', value: projet.annee },
                      { label: 'Surface', value: projet.surface },
                    ].map(({ label, value }) => (
                      <div key={label}>
                        <div
                          className="text-[#6B6B6B] text-[9px] tracking-[0.3em] uppercase mb-1"
                          style={{ fontFamily: 'IBM Plex Mono, monospace' }}
                        >
                          {label}
                        </div>
                        <div
                          className="text-[#F2EFE9] text-sm"
                          style={{ fontFamily: 'Playfair Display, serif' }}
                        >
                          {value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* Final border */}
        <div className="border-t border-[rgba(242,239,233,0.08)]" />
      </div>
    </section>
  )
}
