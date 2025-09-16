export default function Header() {
  return (
      <header className="nav">
        <div className="brand">
          <a href="/">
            <span className="brand-avatar">&lt;/&gt;</span>
            <span className="brand-name ml-1">Routherman</span>
          </a>
        </div>
        <nav className="nav-links">
          <a href="/about">Nosotros</a>
          <a href="/services">Servicios</a>
          <a href="/projects">Proyectos</a>
          <a href="/solutions">Soluciones</a>
        </nav>
        <a href="/contact" className="btn btn-solid">
          Contactanos
        </a>
      </header>
  );
}
