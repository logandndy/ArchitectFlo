export default function StatsBar() {
  const stats = [
    { num: '35',         label: 'Années\nd\'expérience'              },
    { num: '140',        label: 'Projets\nlivrés'                    },
    { num: '~14 000 m²', label: 'Surface\nconstruite'               },
    { num: '100%',       label: 'Missions complètes\net partielles'  },
  ]

  return (
    <div className="statsbar">

      {/* Ligne haute — chiffres clés */}
      <div className="statsbar-numbers">
        {stats.map(({ num, label }, i) => (
          <div key={i} className="statsbar-stat">
            <p className="statsbar-num">{num}</p>
            <p className="statsbar-label">{label}</p>
          </div>
        ))}
      </div>

    </div>
  )
}