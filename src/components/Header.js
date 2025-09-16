import Link from "next/link";

export default function Header() {
  return (
    <header className="nav">
      <div className="brand">
        <Link href="/">
          <span className="brand-avatar">&lt;/&gt;</span>
          <span className="brand-name ml-1">Routherman</span>
        </Link>
      </div>
      <nav className="nav-links">
        <Link href="/about">Nosotros</Link>
        <Link href="/services">Servicios</Link>
        <Link href="/projects">Proyectos</Link>
        <Link href="/solutions">Soluciones</Link>
      </nav>
      <Link href="/contact" className="btn btn-solid">
        Contactanos
      </Link>
    </header>
  );
}
