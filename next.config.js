/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // <-- Ça dit à Next.js de créer un dossier avec des fichiers statiques
  images: {
    unoptimized: true, // <-- OBLIGATOIRE avec "output: 'export'" quand on utilise <Image>
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
