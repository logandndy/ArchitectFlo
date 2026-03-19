export default function Marquee() {
  const items = [
    'Réhabilitation',
    '✦',
    'Extension',
    '✦',
    'Aménagement Intérieur',
    '✦',
    'Permis de Construire',
    '✦',
    'Maîtrise d\'Œuvre',
    '✦',
    'Design d\'Espace',
    '✦',
  ]

  const doubled = [...items, ...items]

  return (
    <div className="relative overflow-hidden border-y border-[rgba(242,239,233,0.08)] py-4 bg-[#0D0D0D]">
      <div className="animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`mx-6 ${
              item === '✦'
                ? 'text-[#D4521A] text-xs'
                : 'text-[#6B6B6B] text-[10px] tracking-[0.3em] uppercase'
            }`}
            style={{ fontFamily: 'IBM Plex Mono, monospace' }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
