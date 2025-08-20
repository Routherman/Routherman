// app/servicios/page.js
import ServiceSection from "@/components/Servicios";

export const metadata = {
  title: "Servicios — routherman",
  description:
    "Desarrollo web, apps mobile, software desktop y consultoría técnica.",
};

const SERVICES = [
  {
    title: "Desarrollo Web",
    description:
      "Sitios y apps web con Next.js, enfocadas en rendimiento, SEO y accesibilidad. Integraciones con APIs, auth y paneles de administración.",
    // Usá tu propia imagen en /public o deja el placeholder externo:
    image: "https://picsum.photos/800/600?random=1",
  },
  {
    title: "Apps Mobile",
    description:
      "Aplicaciones híbridas con Ionic/React, experiencias fluidas, offline-first y despliegue en App Store y Google Play.",
    image: "https://picsum.photos/800/600?random=2",
  },
  {
    title: "Software Desktop",
    description:
      "Aplicaciones de escritorio multiplataforma con Electron. Integración con sistemas internos, sincronización y auto-update.",
    image: "https://picsum.photos/800/600?random=3",
  },
  {
    title: "Consultoría & Team Augmentation",
    description:
      "Auditorías de código, arquitectura, performance y seguridad. Acompañamos a tu equipo para acelerar el roadmap.",
    image: "https://picsum.photos/800/600?random=4",
  },
];

export default function ServiciosPage() {
  return (
    <>
      {/* Encabezado de página */}
      <section className="section">
        <div className="container-narrow">
          <h1 className="text-3xl md:text-5xl font-bold">Servicios</h1>
          <p className="mt-4 text-white/70 max-w-2xl">
            Soluciones de punta a punta: diseño, desarrollo, despliegue y
            mantenimiento. Construimos software confiable que impulsa tu negocio.
          </p>
        </div>
      </section>

      {/* Secciones alternadas */}
      {SERVICES.map((s, i) => (
        <ServiceSection key={s.title} {...s} odd={i % 2 === 1} />
      ))}
    </>
  );
}
