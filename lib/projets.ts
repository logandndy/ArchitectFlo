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
    id: 'maison-l',
    numero: '01',
    titre: 'Maison L',
    sous_titre: 'Réhabilitation totale d\'une maison de village',
    lieu: 'Ariège, Occitanie',
    annee: '2023',
    surface: '180 m²',
    categorie: 'Réhabilitation',
    description: 'Transformer sans effacer. Une bâtisse du XVIIIe remise en vie par la matière brute et la lumière dirigée.',
    description_longue: `Une maison de village en pierre de l'Ariège, abandonnée depuis vingt ans. L'enjeu : révéler ce que le temps avait voilé sans trahir ce que la pierre avait mémorisé.

Chaque intervention a été pensée comme un dialogue entre l'existant et le contemporain. Les enduits à la chaux laissent respirer les murs, le béton ciré au sol crée un contraste assumé avec les poutres apparentes. La lumière, guidée par des ouvertures percées chirurgicalement, traverse les espaces comme elle ne l'avait jamais fait.

Le résultat : un espace habitable qui porte ses cicatrices avec dignité.`,
    image_principale: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80',
    ],
    tags: ['Pierre', 'Réhabilitation', 'Chaux', 'Lumière naturelle'],
  },
  {
    id: 'extension-r',
    numero: '02',
    titre: 'Extension R',
    sous_titre: 'Extension contemporaine sur maison ancienne',
    lieu: 'Toulouse, Haute-Garonne',
    annee: '2022',
    surface: '65 m²',
    categorie: 'Extension',
    description: 'Greffer le neuf sur l\'ancien. Une extension en acier cor-ten et verre qui dialogue avec la brique toulousaine.',
    description_longue: `Un pavillon des années 50 en brique rouge. Propriétaires souhaitant agrandir sans dénaturer. La réponse : une extension affirmée, qui ne cherche pas à se fondre mais à converser.

Structure en acier cor-ten, dont la rouille assumée répond à la chaleur de la brique ancienne. Façade vitrée qui prolonge le jardin vers l'intérieur. Le joint entre les deux époques est volontairement marqué, lisible, honnête.

L'extension fait 65m² mais elle transforme la perception de toute la maison.`,
    image_principale: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=800&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80',
    ],
    tags: ['Acier cor-ten', 'Extension', 'Verre', 'Brique'],
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
