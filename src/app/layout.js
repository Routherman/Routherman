import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  metadataBase: new URL("https://routherman.onrender.com"), // <-- cámbialo
  title: {
    default: "Desarrollo Futurista | Routherman",
    template: "%s | Routherman",
  },
  description:
    "Agencia de desarrollo: sitios web, diseño web, aplicaciones móviles y de escritorio, bases de datos, VPNs y seguridad informática. Soluciones a medida y paquetes low-cost.",
  keywords: [
    "desarrollo web", "diseño web", "sitios web", "páginas",
    "aplicaciones móviles", "apps", "aplicaciones de escritorio",
    "bases de datos", "redes privadas", "VPNs", "seguridad informática",
    "low cost", "agencia de desarrollo", "Next.js", "Argentina",
  ],
  openGraph: {
    type: "website",
    url: "https://routherman.onrender.com",
    siteName: "Routherman",
    title: "Desarrollo Web, Apps, VPNs y Seguridad | Routherman",
    description:
      "Sitios y apps de alto desempeño. Móviles, escritorio, bases de datos, redes privadas/VPNs y seguridad.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Routherman" }],
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    site: "@tuusuario", // opcional
    creator: "@tuusuario", // opcional
    title: "Desarrollo Web & Apps — Routherman",
    description:
      "Soluciones en web, mobile, desktop, DB, VPNs y seguridad informática.",
    images: ["/og.jpg"],
  },
  alternates: {
    canonical: "https://routherman.onrender.com",
    languages: { "es-AR": "https://routherman.onrender.com" },
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="site-body">
        {/* Fondo animado global (z-0) */}
        <div className="bg-canvas" aria-hidden>
          <span className="bg-blob bg-blob--1" />
          <span className="bg-blob bg-blob--2" />
          <span className="bg-blob bg-blob--3" />
          <span className="bg-blob bg-blob--4" />
          <span className="bg-fog" />
        </div>
        {/* Header global */}
        <Header />
        {/* Contenido principal */}
        <div className="site-content">
          {children}
        </div>
        {/* Footer global */}
        <Footer />
      </body>
    </html>
  );
}
