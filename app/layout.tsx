import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Florence Jarlan-Munoz — Architecte',
  description: 'Architecte DPLG basée en France. Projets résidentiels, réhabilitation, design d\'intérieur. Matière, lumière, espace.',
  keywords: ['architecte', 'architecture', 'Florence Jarlan-Munoz', 'réhabilitation', 'design intérieur'],
  authors: [{ name: 'Florence Jarlan-Munoz' }],
  openGraph: {
    title: 'Florence Jarlan-Munoz — Architecte',
    description: 'Architecte DPLG. Projets résidentiels, réhabilitation, design d\'intérieur.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="noise">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
