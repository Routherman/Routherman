import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Auth removed


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Routherman | Desarrollo Web & Software Factory",
  description: "Agencia de desarrollo web y software a medida. Creamos sitios web, e-commerce, apps móviles y soluciones digitales para potenciar tu negocio.",
  keywords: [
    "Desarrollo Web",
    "Software Factory",
    "Diseño Web",
    "Programación a medida",
    "Aplicaciones Móviles",
    "E-commerce",
    "Agencia Digital",
    "Routherman"
  ],
  authors: [{ name: "Routherman Team" }],
  creator: "Routherman",
  publisher: "Routherman",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Routherman | Transformación Digital",
    description: "Llevamos tu negocio al siguiente nivel con soluciones de software innovadoras.",
    url: 'https://routherman.com',
    siteName: 'Routherman',
    images: [
      {
        url: 'https://routherman.com/og-image.jpg', // Reemplazar con imagen real cuando tengas
        width: 1200,
        height: 630,
        alt: 'Routherman - Software Factory',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "bBhBONJZB7ytEqDDZHVzR-Vh3q9tKCzrWLEyqkvp1hw"
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Routherman',
    image: 'https://routherman.com/og-image.jpg',
    description: 'Agencia de Desarrollo Web y Software Factory. Creamos sitios web, tiendas online y aplicaciones a medida.',
    url: 'https://routherman.com',
    telephone: '+5491100000000',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'AR',
      addressRegion: 'Buenos Aires'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-34.6037',
      longitude: '-58.3816'
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
      ],
      opens: "09:00",
      closes: "18:00"
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Desarrollo',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Desarrollo Web Profesional'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Desarrollo de Software a Medida'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Aplicaciones Móviles (iOS/Android)'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'E-commerce y Tiendas Online'
          }
        }
      ]
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      areaServed: 'AR',
      availableLanguage: 'Spanish'
    }
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
