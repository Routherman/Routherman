// app/page.js
import Link from "next/link";
import { FaGlobe, FaMobileAlt, FaDesktop } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-[var(--color-darkA)] text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Software a medida para crecer con confianza
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            En <span className="font-semibold">routherman</span> diseñamos y
            construimos soluciones web, mobile y desktop con foco en calidad,
            rendimiento y negocio.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-2xl px-6 py-3 bg-[var(--color-brand)] hover:bg-[var(--color-brand-600)] font-medium transition"
            >
              Solicitar cotización
            </Link>
            <Link
              href="/portafolio"
              className="inline-flex items-center justify-center rounded-2xl px-6 py-3 border border-white/30 hover:border-white/60 font-medium transition"
            >
              Ver portafolio
            </Link>
          </div>
        </div>
      </section>

      {/* Breve explicación de servicios */}
      <section className="bg-[var(--color-darkB)] text-white py-16">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          {/* Servicio Web */}
          <div>
            <FaGlobe className="mx-auto text-[var(--color-brand)] text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-3">Desarrollo Web</h3>
            <p className="text-white/70">
              Sitios y apps web con Next.js, optimizados para SEO y performance.
            </p>
          </div>

          {/* Servicio Mobile */}
          <div>
            <FaMobileAlt className="mx-auto text-[var(--color-brand)] text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-3">Apps Mobile</h3>
            <p className="text-white/70">
              Aplicaciones híbridas con Ionic/React. Experiencias fluidas y
              publicación en stores.
            </p>
          </div>

          {/* Servicio Desktop */}
          <div>
            <FaDesktop className="mx-auto text-[var(--color-brand)] text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-3">Software Desktop</h3>
            <p className="text-white/70">
              Aplicaciones multiplataforma con Electron, integradas con tus
              sistemas internos.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
