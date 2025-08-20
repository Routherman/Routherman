// app/portafolio/page.js
import PortfolioSection from "@/components/Portafolio";

export const metadata = {
  title: "Portafolio — routherman",
  description:
    "Algunos trabajos y resultados que reflejan nuestra trayectoria.",
};

// Reemplazá las imágenes por archivos locales en /public/images
const PROJECTS = [
  {
    title: "E-commerce B2B",
    summary:
      "Plataforma mayorista con catálogo dinámico, pasarela de pagos y panel de gestión. +60% en conversión.",
    image: "/images/project-1.jpg",
    url: "#",
  },
  {
    title: "Dashboard de Operaciones",
    summary:
      "Control de stock y logística en tiempo real con reportes y alertas. -35% en tiempos de procesamiento.",
    image: "/images/project-2.jpg",
    url: "#",
  },
  {
    title: "App de Pedidos con QR",
    summary:
      "Pedidos y pagos desde el móvil, validación por QR y PIN en mostrador. +40% de rotación en barra.",
    image: "/images/project-3.jpg",
    url: "#",
  },
];

export default function PortafolioPage() {
  return (
    <>
      {/* Encabezado de página */}
      <section className="section">
        <div className="container-narrow">
          <h1 className="text-3xl md:text-5xl font-bold">Portafolio</h1>
          <p className="mt-4 text-white/70 max-w-2xl">
            Casos reales donde combinamos estrategia, diseño y tecnología para
            generar resultados medibles.
          </p>
        </div>
      </section>

      {/* Secciones alternadas */}
      {PROJECTS.map((p, i) => (
        <PortfolioSection key={p.title} {...p} odd={i % 2 === 1} />
      ))}
    </>
  );
}
