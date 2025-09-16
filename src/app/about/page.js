// import { Metadata } from "next"; // Removed TypeScript type import

export const metadata = {
  title: "Sobre nosotros",
  description:
    "Conocé la forma de trabajo de Routherman: diseño y desarrollo web, apps, seguridad y soluciones listas para crecer.",
  alternates: { canonical: "https://routherman.onrender.com/about" },
  openGraph: {
    title: "Routherman — Misión, Visión y Cómo Trabajamos",
    description:
      "Somos un estudio full-stack que diseña, construye y evoluciona productos digitales con foco en performance y negocio.",
    url: "https://routherman.onrender.com/about",
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Sobre Routherman",
    description:
      "Misión, visión, valores y metodología de trabajo de Routherman.",
    mainEntity: {
      "@type": "Organization",
      name: "Routherman",
      url: "https://tusitio.com",
      sameAs: [
        "https://www.linkedin.com/company/tuempresa",
        "https://www.instagram.com/tuusuario",
      ],
    },
  };

  return (
    <main className="page">
      {/* JSON-LD para Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="section hero">
        <h1 className="hero-title">
          Sobre <span className="grad-text">Routherman</span>
        </h1>
        <p className="hero-sub">
          Diseñamos, desarrollamos y escalamos experiencias digitales con una
          metodología clara, enfoque en valor de negocio y performance real.
        </p>
      </section>

      {/* MISIÓN & VISIÓN */}
      <section className="section">
        <div className="grid two">
          <article className="glass card-pad about-tile">
            <h2 className="h2">Misión</h2>
            <p className="muted mt-16">
              Transformar ideas en productos digitales robustos y hermosos que
              generen impacto medible. Desde landing pages de alto rendimiento
              hasta apps web, móviles y de escritorio, con bases de datos,
              redes privadas/VPNs y seguridad informática end-to-end.
            </p>
          </article>

          <article className="glass card-pad about-tile">
            <h2 className="h2">Visión</h2>
            <p className="muted mt-16">
              Ser el partner tecnológico de referencia para negocios que buscan
              velocidad, confiabilidad y diseño diferencial. Construimos hoy con
              la vista puesta en el roadmap de mañana.
            </p>
          </article>
        </div>
      </section>

      {/* CÓMO TRABAJAMOS */}
      <section className="section">
        <h2 className="h2 center">Cómo trabajamos</h2>
        <p className="hero-sub">
          Un proceso simple, transparente y repetible para llegar a tiempo con
          calidad.
        </p>

        <div className="grid two mt-24">
          {[
            [
              "1) Descubrimiento",
              [
                "Kickoff y entendimiento del negocio",
                "Mapa de stakeholders y métricas clave",
                "Backlog inicial priorizado",
              ],
            ],
            [
              "2) Diseño",
              [
                "Wireframes → UI con sistema de diseño",
                "Accesibilidad y responsive first",
                "Prototipo navegable",
              ],
            ],
            [
              "3) Desarrollo",
              [
                "Front-end (Next.js/React)",
                "Back-end (Node) + DB (SQL/NoSQL)",
                "Integraciones (pagos, auth, CMS)",
              ],
            ],
            [
              "4) Entrega",
              [
                "CI/CD y entorno productivo",
                "Monitoreo, logs y métricas",
                "Documentación breve y útil",
              ],
            ],
            [
              "5) Evolución",
              [
                "Roadmap por sprints",
                "Optimizaciones SEO/Performance",
                "Nuevas features orientadas a negocio",
              ],
            ],
          ].map(([title, items]) => (
            <article key={title} className="glass step">
              <div className="step-key">{title}</div>
              <ul className="list-check">
                {items.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* VALORES */}
      <section className="section">
        <h2 className="h2 center">Nuestros valores</h2>
        <div className="about-badges mt-24">
          {[
            ["Performance real", "Velocidad percibida, Core Web Vitals y SEO técnico."],
            ["Transparencia", "Presupuestos claros, entregas por sprint, demos frecuentes."],
            ["Diseño con propósito", "UI estética al servicio de la conversión y la usabilidad."],
            ["Seguridad", "Buenas prácticas, hardening y revisiones continuas."],
            ["Escalabilidad", "Arquitecturas que crecen con tu negocio."],
            ["Propiedad del producto", "El código y los datos son tuyos."],
          ].map(([k, v]) => (
            <div key={k} className="glass badge">
              <div className="badge-title">{k}</div>
              <div className="badge-copy">{v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="glass card-pad center">
          <h2 className="h2">¿Listos para despegar?</h2>
          <p className="hero-sub">
            Conversemos tu objetivo y armamos un plan de abordaje en 48 hs.
          </p>
          <a href="/#contact" className="btn btn-solid" style={{ marginTop: 16 }}>
            Agendar una llamada
          </a>
        </div>
      </section>
    </main>
  );
}
