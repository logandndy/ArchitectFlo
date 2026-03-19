'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navItems = [
  { href: '/#projets', label: 'Projets' },
  { href: '/#tarifs', label: 'Tarifs' },
  { href: '/#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-[rgba(242,239,233,0.08)]' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 py-5">
          {/* Logo */}
          <Link href="/" className="group flex flex-col leading-none">
            <span
              className="text-[#F2EFE9] tracking-[0.3em] text-[10px] uppercase font-mono transition-colors group-hover:text-[#D4521A]"
              style={{ fontFamily: 'IBM Plex Mono, monospace' }}
            >
              Florence
            </span>
            <span
              className="text-[#F2EFE9] text-lg font-display tracking-[0.15em] uppercase transition-colors group-hover:text-[#D4521A]"
              style={{ fontFamily: 'Bebas Neue, serif', fontSize: '1.4rem', letterSpacing: '0.2em' }}
            >
              Jarlan-Munoz
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-[#C8C4BC] hover:text-[#F2EFE9] text-[11px] tracking-[0.25em] uppercase transition-colors group"
                style={{ fontFamily: 'IBM Plex Mono, monospace' }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4521A] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-[5px] p-2 group"
            aria-label="Menu"
          >
            <span className={`w-6 h-px bg-[#F2EFE9] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <span className={`w-6 h-px bg-[#F2EFE9] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-px bg-[#F2EFE9] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col justify-center items-center transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-8 text-center">
          {navItems.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#F2EFE9] hover:text-[#D4521A] transition-colors"
              style={{
                fontFamily: 'Bebas Neue, serif',
                fontSize: 'clamp(3rem, 10vw, 5rem)',
                letterSpacing: '0.1em',
                animationDelay: `${i * 0.08}s`,
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div
          className="absolute bottom-12 text-[#6B6B6B] text-[10px] tracking-[0.3em] uppercase"
          style={{ fontFamily: 'IBM Plex Mono, monospace' }}
        >
          Architecte DPLG
        </div>
      </div>
    </>
  )
}
