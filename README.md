# Florence Jarlan-Munoz — Site Vitrine

Site vitrine professionnel pour Florence Jarlan-Munoz, architecte DPLG.
Construit avec **Next.js 14**, **TypeScript**, **Tailwind CSS**.

---

## Stack technique

| Outil | Usage |
|---|---|
| Next.js 14 (App Router) | Framework React SSR |
| TypeScript | Typage statique |
| Tailwind CSS | Styles utilitaires |
| Framer Motion | (prêt à l'emploi, non installé par défaut) |
| Google Fonts | Bebas Neue · Playfair Display · IBM Plex Mono |

---

## Installation en local

### 1. Cloner le repo

```bash
git clone https://github.com/TON_PSEUDO/florence-jarlan-munoz.git
cd florence-jarlan-munoz
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Lancer le serveur de développement

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

---

## Structure du projet

```
florence-jarlan-munoz/
├── app/
│   ├── globals.css         # Variables CSS, polices, animations globales
│   ├── layout.tsx          # Layout racine (Navbar + Footer)
│   └── page.tsx            # Page d'accueil (assemblage des sections)
├── components/
│   ├── Navbar.tsx          # Navigation fixe + menu mobile
│   ├── Hero.tsx            # Section hero typographique
│   ├── Marquee.tsx         # Bandeau défilant des prestations
│   ├── Projets.tsx         # Section portfolio (accordéon interactif)
│   ├── Tarifs.tsx          # Grille tarifaire 3 colonnes
│   ├── Contact.tsx         # Section contact (email obfusqué)
│   └── Footer.tsx          # Pied de page
├── lib/
│   └── projets.ts          # Données des projets (à modifier)
├── public/                 # Images statiques (logo, favicon...)
└── ...config files
```

---

## Personnalisation

### Modifier les projets (`lib/projets.ts`)

Chaque projet a la structure suivante :

```ts
{
  id: 'slug-unique',
  numero: '01',
  titre: 'Nom du projet',
  sous_titre: 'Courte description',
  lieu: 'Ville, Département',
  annee: '2024',
  surface: '150 m²',
  categorie: 'Réhabilitation',
  description: 'Une ligne d\'accroche.',
  description_longue: `Texte long multi-paragraphes...`,
  image_principale: 'https://...',   // URL Unsplash ou chemin /public
  images: ['https://...'],
  tags: ['Tag1', 'Tag2'],
}
```

> Pour utiliser vos propres photos, placez-les dans `/public/projets/` et référencez `/projets/nom-image.jpg`.
> Mettez à jour aussi `next.config.js` pour supprimer le domaine `images.unsplash.com` si vous n'en avez plus besoin.

### Modifier l'email de contact (`components/Contact.tsx`)

L'email est obfusqué pour éviter le scraping. Modifiez le tableau :

```ts
const EMAIL_PARTS = ['votre-email', '@', 'domaine', '.', 'fr']
```

L'adresse n'est jamais écrite en clair dans le code source.

### Modifier le téléphone (`components/Contact.tsx`)

```ts
const PHONE_DISPLAY = '+33 (0)6 XX XX XX XX'
const PHONE_HREF = 'tel:+336XXXXXXXX'
```

### Modifier les tarifs (`components/Tarifs.tsx`)

Éditez le tableau `prestations` directement dans le composant.

---

## Déploiement sur Vercel (recommandé)

```bash
# 1. Pousser sur GitHub
git add .
git commit -m "init: site florence jarlan-munoz"
git push origin main

# 2. Aller sur vercel.com
# 3. "Import project" → sélectionner le repo GitHub
# 4. Vercel détecte Next.js automatiquement → Deploy
```

Le site est en ligne en moins de 2 minutes. URL gratuite fournie.

### Variables d'environnement

Aucune variable d'environnement requise pour ce projet.

---

## Connecter le repo GitHub (première fois)

```bash
# Dans le dossier du projet
git init
git add .
git commit -m "feat: init site vitrine florence jarlan-munoz"

# Créer le repo sur github.com puis :
git remote add origin https://github.com/TON_PSEUDO/florence-jarlan-munoz.git
git branch -M main
git push -u origin main
```

---

## Checklist avant mise en ligne

- [ ] Remplacer les photos Unsplash par les vraies photos des projets
- [ ] Mettre le vrai email dans `EMAIL_PARTS`
- [ ] Mettre le vrai numéro de téléphone
- [ ] Mettre le vrai SIRET dans le composant Contact
- [ ] Vérifier les textes des projets
- [ ] Mettre à jour les tarifs réels
- [ ] Ajouter un `favicon.ico` dans `/public`
- [ ] Renseigner l'URL finale dans `metadata` (layout.tsx)

---

## Licence

Projet privé — Florence Jarlan-Munoz © 2024
