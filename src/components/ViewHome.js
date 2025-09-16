export default function ViewHome() {
  return (
    <>
      {/* HERO */}
      <section className="section hero">
        <h1 className="hero-title">
          Diseño & Desarrollo
          <span className="grad-text"> Con vibra futurista</span>
        </h1>
        <p className="hero-sub">
          Llevamos tus ideas a orbitar en el cosmos digital
        </p>
        <div className="hero-cta">
          <a href="#contact" className="btn btn-solid">
            Nuestros Proyectos
          </a>
          <a href="#process" className="btn btn-outline">
            Nuestros Servicios
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="grid two">
          <div className="about-media">
            <div className="glow-ring" aria-hidden />
            <div className="glass card-pad">
              <div className="neon-sheen" />
            </div>
          </div>
          <div>
            <h2 className="h2">Sobre nosotros</h2>
            <p className="muted mt-16">
              Estudio full-stack: estrategia, UX/UI, front-end Next.js y
              back-end Node. Entregas por sprints, CI/CD y SEO técnico.
            </p>
            <ul className="chips mt-16">
              <li className="chip glass">Estrategia & UX</li>
              <li className="chip glass">Branding & UI</li>
              <li className="chip glass">Next.js / React</li>
              <li className="chip glass">APIs & DB</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <h3 className="h2 center">Servicios</h3>
        <div className="grid four mt-24">
          {[
            ["Websites premium", "Velocidad, accesibilidad y SEO impecable."],
            ["E-commerce / SaaS", "Arquitectura robusta y pagos."],
            ["Design systems", "Componentes y escalabilidad."],
            ["Consultoría técnica", "Auditorías de performance y DX."],
          ].map(([title, copy]) => (
            <article key={title} className="glass card card-hover">
              <h4 className="card-title">{title}</h4>
              <p className="card-copy">{copy}</p>
              <div className="grad-bar" />
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
