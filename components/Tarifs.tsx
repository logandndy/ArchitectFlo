'use client'

import Link from 'next/link'

const prestations = [
  {
    id: '01',
    titre: 'Esquisse & Faisabilité',
    description: 'Analyse du site, étude des contraintes réglementaires, premières intentions spatiales. Le point de départ de tout projet.',
    inclus: [
      'Analyse du site et du programme',
      'Étude de faisabilité',
      'Esquisses et premières propositions',
      'Réunion de cadrage',
    ],
    tarif: 'À partir de 1 500 €',
    unite: 'forfait',
    highlight: false,
  },
  {
    id: '02',
    titre: 'Mission Complète',
    description: 'De l\'esquisse au suivi de chantier. La mission la plus complète pour un résultat maîtrisé, du crayon à la clef.',
    inclus: [
      'Esquisse + Avant-Projet',
      'Permis de construire ou déclaration',
      'Dossier de consultation des entreprises',
      'Suivi de chantier et réception',
    ],
    tarif: '8 – 12% du coût travaux',
    unite: 'honoraires',
    highlight: true,
  },
  {
    id: '03',
    titre: 'Conseil & Accompagnement',
    description: 'Pour les projets qui nécessitent un regard expert ponctuel. Analyse, orientations, aide à la décision.',
    inclus: [
      'Consultation sur rendez-vous',
      'Analyse de plans existants',
      'Conseil réglementaire',
      'Aide à la sélection d\'entreprises',
    ],
    tarif: '150 €',
    unite: '/ heure',
    highlight: false,
  },
]

export default function Tarifs() {
  return (
    <section id="tarifs" className="py-24 md:py-36 px-6 md:px-16 bg-[#0D0D0D] bg-grid">
      {/* Section header */}
      <div className="mb-16 md:mb-24">
        <div
          className="text-[#D4521A] text-[10px] tracking-[0.4em] uppercase mb-4 flex items-center gap-3"
          style={{ fontFamily: 'IBM Plex Mono, monospace' }}
        >
          <span className="w-6 h-px bg-[#D4521A]" />
          Prestations
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2
            className="text-[#F2EFE9] leading-none"
            style={{
              fontFamily: 'Bebas Neue, serif',
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              letterSpacing: '-0.02em',
            }}
          >
            Tarifs
          </h2>
          <p
            className="text-[#6B6B6B] max-w-xs leading-relaxed text-sm"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Chaque projet est unique. Ces grilles sont indicatives — un devis précis est toujours établi après première consultation.
          </p>
        </div>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[rgba(242,239,233,0.06)]">
        {prestations.map((prestation) => (
          <div
            key={prestation.id}
            className={`relative flex flex-col p-8 md:p-10 transition-colors duration-300 group ${
              prestation.highlight
                ? 'bg-[#D4521A]'
                : 'bg-[#0D0D0D] hover:bg-[#121212]'
            }`}
          >
            {/* Number */}
            <div
              className={`text-[10px] tracking-[0.4em] uppercase mb-8 ${
                prestation.highlight ? 'text-[rgba(242,239,233,0.6)]' : 'text-[#D4521A]'
              }`}
              style={{ fontFamily: 'IBM Plex Mono, monospace' }}
            >
              {prestation.id}
            </div>

            {/* Title */}
            <h3
              className={`leading-tight mb-4 ${
                prestation.highlight ? 'text-[#F2EFE9]' : 'text-[#F2EFE9]'
              }`}
              style={{
                fontFamily: 'Bebas Neue, serif',
                fontSize: '2rem',
                letterSpacing: '0.05em',
              }}
            >
              {prestation.titre}
            </h3>

            {/* Description */}
            <p
              className={`text-sm leading-relaxed mb-8 flex-1 ${
                prestation.highlight ? 'text-[rgba(242,239,233,0.75)]' : 'text-[#6B6B6B]'
              }`}
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {prestation.description}
            </p>

            {/* Inclus list */}
            <ul className="space-y-2 mb-10">
              {prestation.inclus.map((item) => (
                <li
                  key={item}
                  className={`flex items-start gap-3 text-[11px] ${
                    prestation.highlight ? 'text-[rgba(242,239,233,0.8)]' : 'text-[#C8C4BC]'
                  }`}
                  style={{ fontFamily: 'IBM Plex Mono, monospace' }}
                >
                  <span className={prestation.highlight ? 'text-[rgba(242,239,233,0.6)]' : 'text-[#D4521A]'}>
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Tarif */}
            <div
              className={`pt-6 border-t ${
                prestation.highlight
                  ? 'border-[rgba(242,239,233,0.2)]'
                  : 'border-[rgba(242,239,233,0.08)]'
              }`}
            >
              <div
                className={`text-[9px] tracking-[0.3em] uppercase mb-1 ${
                  prestation.highlight ? 'text-[rgba(242,239,233,0.5)]' : 'text-[#6B6B6B]'
                }`}
                style={{ fontFamily: 'IBM Plex Mono, monospace' }}
              >
                {prestation.unite}
              </div>
              <div
                className={`text-xl font-display ${
                  prestation.highlight ? 'text-[#F2EFE9]' : 'text-[#F2EFE9]'
                }`}
                style={{
                  fontFamily: 'Bebas Neue, serif',
                  fontSize: '1.6rem',
                  letterSpacing: '0.05em',
                }}
              >
                {prestation.tarif}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <p
          className="text-[#6B6B6B] text-sm mb-6"
          style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}
        >
          Toutes les missions peuvent être adaptées à votre projet spécifique.
        </p>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-3 border border-[rgba(242,239,233,0.2)] hover:border-[#D4521A] hover:text-[#D4521A] text-[#F2EFE9] px-8 py-4 transition-colors duration-300 group"
        >
          <span
            className="text-[11px] tracking-[0.3em] uppercase"
            style={{ fontFamily: 'IBM Plex Mono, monospace' }}
          >
            Demander un devis
          </span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
