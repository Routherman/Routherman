import Link from "next/link";

export default function Footer() {
  return (
    <footer className="section-alt border-t border-white/10">
      <div className="container-narrow grid md:grid-cols-3 gap-8 items-start py-12">
        {/* Marca */}
        <div>
          <div className="text-xl font-semibold">Routherman</div>
          <p className="text-white/70 mt-2">
            Creamos software confiable y profesional para tu negocio.
          </p>
        </div>

        {/* Redes */}
        <div>
          <div className="font-medium mb-2">Redes</div>
          <ul className="space-y-2 text-white/80">
            <li>
              <Link href="#" className="hover:text-[var(--color-brand)]">
                LinkedIn
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[var(--color-brand)]">
                GitHub
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[var(--color-brand)]">
                Instagram
              </Link>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <div className="font-medium mb-2">Contacto</div>
          <ul className="space-y-2 text-white/80">
            <li>
              <a
                href="mailto:contacto@routherman.com"
                className="hover:text-[var(--color-brand)]"
              >
                routherman.contacto@gmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:+549000000000"
                className="hover:text-[var(--color-brand)]"
              >
                +54 11 2386-8235 
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-narrow border-t border-white/10 pt-6 pb-4 text-sm text-white/50 flex justify-between">
        <span>© {new Date().getFullYear()} routherman</span>
        <span>Hecho con Next.js ♥</span>
      </div>
    </footer>
  );
}
