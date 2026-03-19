'use client'

import { useState, useEffect } from 'react'

// Email obfuscation - split to avoid scraping
const EMAIL_PARTS = ['contact', '@', 'florence-jarlanmunoz', '.', 'fr']
const PHONE_DISPLAY = '+33 (0)6 00 00 00 00'
const PHONE_HREF = 'tel:+33600000000'

export default function Contact() {
  const [emailVisible, setEmailVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    // Reconstruct email only when needed (not in source code as plain text)
    if (emailVisible) {
      setEmail(EMAIL_PARTS.join(''))
    }
  }, [emailVisible])

  const handleReveal = () => {
    setEmailVisible(true)
  }

  const handleCopy = async () => {
    if (email) {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <section id="contact" className="py-24 md:py-36 px-6 md:px-16">
      {/* Section header */}
      <div className="mb-16 md:mb-24">
        <div
          className="text-[#D4521A] text-[10px] tracking-[0.4em] uppercase mb-4 flex items-center gap-3"
          style={{ fontFamily: 'IBM Plex Mono, monospace' }}
        >
          <span className="w-6 h-px bg-[#D4521A]" />
          Travaillons ensemble
        </div>
        <h2
          className="text-[#F2EFE9] leading-none"
          style={{
            fontFamily: 'Bebas Neue, serif',
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            letterSpacing: '-0.02em',
          }}
        >
          Contact
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        {/* Left — intro text */}
        <div>
          <p
            className="text-[#C8C4BC] text-lg leading-relaxed mb-8"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Vous avez un projet de réhabilitation, d'extension ou d'aménagement ? Je suis disponible pour une première consultation sans engagement.
          </p>
          <p
            className="text-[#6B6B6B] leading-relaxed"
            style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}
          >
            Je travaille principalement en Occitanie et dans le Sud-Ouest, mais reste ouverte à des projets sur l'ensemble du territoire français.
          </p>

          {/* Availability badge */}
          <div className="mt-10 inline-flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span
              className="text-[#C8C4BC] text-[11px] tracking-[0.3em] uppercase"
              style={{ fontFamily: 'IBM Plex Mono, monospace' }}
            >
              Disponible pour nouveaux projets
            </span>
          </div>
        </div>

        {/* Right — contact blocks */}
        <div className="flex flex-col gap-8">
          {/* Phone */}
          <div className="group border border-[rgba(242,239,233,0.08)] hover:border-[rgba(242,239,233,0.2)] p-8 transition-colors duration-300">
            <div
              className="text-[#D4521A] text-[9px] tracking-[0.4em] uppercase mb-4"
              style={{ fontFamily: 'IBM Plex Mono, monospace' }}
            >
              Téléphone
            </div>
            <a
              href={PHONE_HREF}
              className="text-[#F2EFE9] hover:text-[#D4521A] transition-colors flex items-center gap-3 group/link"
              style={{
                fontFamily: 'Bebas Neue, serif',
                fontSize: '1.8rem',
                letterSpacing: '0.1em',
              }}
            >
              {PHONE_DISPLAY}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="opacity-0 group-hover/link:opacity-100 transition-opacity text-[#D4521A]"
              >
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </a>
            <p
              className="text-[#6B6B6B] text-[10px] tracking-[0.2em] uppercase mt-2"
              style={{ fontFamily: 'IBM Plex Mono, monospace' }}
            >
              Lun – Ven, 9h – 18h
            </p>
          </div>

          {/* Email with reveal + copy */}
          <div className="group border border-[rgba(242,239,233,0.08)] hover:border-[rgba(242,239,233,0.2)] p-8 transition-colors duration-300">
            <div
              className="text-[#D4521A] text-[9px] tracking-[0.4em] uppercase mb-4"
              style={{ fontFamily: 'IBM Plex Mono, monospace' }}
            >
              Email
            </div>

            {!emailVisible ? (
              <button
                onClick={handleReveal}
                className="flex items-center gap-3 text-[#C8C4BC] hover:text-[#F2EFE9] transition-colors group/btn"
              >
                <span
                  className="tracking-[0.15em]"
                  style={{
                    fontFamily: 'IBM Plex Mono, monospace',
                    fontSize: '1rem',
                    letterSpacing: '0.2em',
                  }}
                >
                  ••••••••@••••••••••••.fr
                </span>
                <span
                  className="border border-[rgba(242,239,233,0.2)] text-[9px] tracking-[0.3em] uppercase px-3 py-1 group-hover/btn:border-[#D4521A] group-hover/btn:text-[#D4521A] transition-colors"
                  style={{ fontFamily: 'IBM Plex Mono, monospace' }}
                >
                  Afficher
                </span>
              </button>
            ) : (
              <div className="flex items-center gap-3 flex-wrap">
                <a
                  href={`mailto:${email}`}
                  className="text-[#F2EFE9] hover:text-[#D4521A] transition-colors"
                  style={{
                    fontFamily: 'IBM Plex Mono, monospace',
                    fontSize: '0.95rem',
                    letterSpacing: '0.1em',
                  }}
                >
                  {email}
                </a>
                <button
                  onClick={handleCopy}
                  className="border border-[rgba(242,239,233,0.2)] text-[9px] tracking-[0.3em] uppercase px-3 py-1 hover:border-[#D4521A] hover:text-[#D4521A] transition-colors text-[#6B6B6B]"
                  style={{ fontFamily: 'IBM Plex Mono, monospace' }}
                >
                  {copied ? '✓ Copié' : 'Copier'}
                </button>
              </div>
            )}

            <p
              className="text-[#6B6B6B] text-[10px] tracking-[0.2em] uppercase mt-3"
              style={{ fontFamily: 'IBM Plex Mono, monospace' }}
            >
              Réponse sous 48h
            </p>
          </div>

          {/* SIRET / Info légale */}
          <div
            className="text-[#6B6B6B] text-[9px] tracking-[0.25em] uppercase leading-relaxed"
            style={{ fontFamily: 'IBM Plex Mono, monospace' }}
          >
            Florence Jarlan-Munoz — Architecte DPLG<br />
            Membre de l'Ordre des Architectes d'Occitanie<br />
            SIRET : 000 000 000 00000
          </div>
        </div>
      </div>
    </section>
  )
}
