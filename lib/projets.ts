export interface Projet {
  id: string
  numero: string
  titre: string
  sous_titre: string
  lieu: string
  annee: string
  surface: string
  categorie: string
  description: string
  description_longue: string
  image_principale: string
  images: string[]
  tags: string[]
}

export const projets: Projet[] = [
  {
    id: 'maison-f',
    numero: '01',
    titre: 'Maison F',
    sous_titre: 'Réhabilitation totale d\'une maison de ville et projet d\'extension',
    lieu: 'Foix, Ariège',
    annee: '2021',
    surface: '106 m²',
    categorie: 'Réhabilitation · Extension < 20 m²',
    description: 'Transformer sans effacer. Une ancienne maison longtemps inoccupée, remise en vie par la lumière dirigée et le prolongement de l\'espace de vie sur le jardin.',
    description_longue: `Une maison de ville très ancienne, inoccupée depuis très longtemps. L'enjeu : redistribuer les pièces de vie du rez-de-chaussée en privilégiant l'accès au jardin et la lumière.

Chaque intervention a été pensée comme un dialogue entre l'existant et le contemporain. Le zinc de la couverture de l'extension ajoute noblesse et pérennité à l'édifice. La lumière, guidée par de larges ouvertures, traverse les nouveaux espaces comme elle ne l'avait jamais fait.

Le résultat : un espace habitable qui porte ses cicatrices avec dignité.`,
    image_principale: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80',
    ],
    tags: ['Ancien', 'Réhabilitation', 'Zinc', 'Lumière naturelle'],
  },
  {
    id: 'immeuble-f',
    numero: '02',
    titre: 'Immeuble F',
    sous_titre: 'Réhabilitation d\'un immeuble de 3 logements',
    lieu: 'Foix, Ariège',
    annee: '2020',
    surface: '211 m²',
    categorie: 'Réhabilitation',
    description: 'Conception de 3 logements locatifs T3. Restructuration du dernier étage très dégradé, dans le respect du site patrimonial remarquable de Foix.',
    description_longue: `Un projet architectural sensible, situé dans le périmètre du site patrimonial remarquable (SPR) de la ville de Foix. La restauration a exigé un soin particulier : préserver l'identité de l'immeuble tout en répondant aux exigences d'un habitat contemporain.

Trois logements locatifs T3, restructurés pièce par pièce. Le dernier étage, très dégradé, a fait l'objet d'une rénovation complète. Chaque décision — matériaux, ouvertures, gabarit — a été pensée en dialogue avec les prescriptions du SPR.

Le résultat : une rénovation urbaine ambitieuse, qui intègre les fonctionnalités modernes sans trahir le contexte historique.`,
    image_principale: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=800&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80',
    ],
    tags: ['Enduit à la chaux', 'Bois', 'Corniche'],
  },
  {
    id: 'loft-m',
    numero: '03',
    titre: 'Loft M',
    sous_titre: 'Aménagement d\'un loft industriel',
    lieu: 'Bordeaux, Gironde',
    annee: '2024',
    surface: '220 m²',
    categorie: 'Aménagement intérieur',
    description: 'Un ancien entrepôt textile transformé en espace de vie. L\'industrie comme poésie.',
    description_longue: `2000m² d'entrepôt textile des années 30. Une opportunité rare de créer un espace de vie qui porte l'histoire industrielle comme une fierté.

Les fermes métalliques ont été conservées, sablées, exposées. Le sol en béton poncé reflète la lumière zénithale des sheds. Les volumes sont définis non par des murs mais par des changements de matière et de niveau.

Cuisine en acier inoxydable brossé, bibliothèque en structure métallique sur 6 mètres de hauteur, chambre en mezzanine suspendue. Un espace qui impressionne sans jamais intimider.`,
    image_principale: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
      'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=800&q=80',
    ],
    tags: ['Industriel', 'Béton', 'Métal', 'Loft'],
  },
]
