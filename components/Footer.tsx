import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[rgba(242,239,233,0.08)] bg-[#0D0D0D]">
      <div className="px-6 md:px-16 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Left */}
        <div>
          <div
            className="text-[#F2EFE9] mb-1"
            style={{
              fontFamily: 'Bebas Neue, serif',
              fontSize: '1.5rem',
              letterSpacing: '0.2em',
            }}
          >
            Florence Jarlan-Munoz
          </div>
          <div
            className="text-[#6B6B6B] text-[9px] tracking-[0.35em] uppercase"
            style={{ fontFamily: 'IBM Plex Mono, monospace' }}
          >
            Architecte DPLG — Occitanie, France
          </div>
        </div>

        {/* Center links */}
        <nav className="flex items-center gap-8">
          {[
            { href: '/#projets', label: 'Projets' },
            { href: '/#tarifs', label: 'Tarifs' },
            { href: '/#contact', label: 'Contact' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[#6B6B6B] hover:text-[#F2EFE9] text-[10px] tracking-[0.3em] uppercase transition-colors"
              style={{ fontFamily: 'IBM Plex Mono, monospace' }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right */}
        <div
          className="text-[#6B6B6B] text-[9px] tracking-[0.25em] uppercase"
          style={{ fontFamily: 'IBM Plex Mono, monospace' }}
        >
          © {year} — Tous droits réservés
        </div>
      </div>
    </footer>
  )
}
