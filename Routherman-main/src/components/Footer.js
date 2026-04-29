// components/Footer.js
import Link from "next/link";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* COLUMNA 1: Info Empresa + LOGO */}
        <div className="space-y-6">
          {/* Logo en Footer */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 bg-white/5 border border-white/10 rounded-md transform rotate-45">
              <span className="text-purple-500 font-bold text-[10px] transform -rotate-85 font-mono">
                &lt;/&gt;
              </span>
            </div>
            <h3 className="text-white text-xl font-bold tracking-tight">Routherman Space</h3>
          </div>

          <p className="leading-relaxed">
            Innovación y diseño futurista al alcance de todos.
          </p>
          <div className="flex gap-4 pt-2">
            <SocialLink href="https://instagram.com/routherman.space" icon={<Instagram size={18} />} />
            <SocialLink href="https://facebook.com/routherman.space" icon={<Facebook size={18} />} />
            <SocialLink href="https://www.threads.net/@routherman.space" icon={<span className="text-sm font-semibold">@</span>} />
            <SocialLink href="https://x.com/RouthermanSpace" icon={<Twitter size={18} />} />
          </div>
        </div>

        {/* COLUMNA 2: Servicios */}
        <div>
          <h4 className="text-white font-semibold mb-6">Servicios</h4>
          <ul className="space-y-3">
            <li><Link href="/servicios/web" className="hover:text-purple-400 transition-colors">Desarrollo Web</Link></li>
            <li><Link href="/servicios/software" className="hover:text-purple-400 transition-colors">Software Factory</Link></li>
            <li><Link href="/soluciones" className="hover:text-purple-400 transition-colors">Soluciones SaaS</Link></li>
          </ul>
        </div>

        {/* COLUMNA 3: Contacto */}
        <div>
          <h4 className="text-white font-semibold mb-6">Contacto</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-purple-500" />
              <a href="mailto:routherman.contacto@gmail.com" className="hover:text-white">routherman.contacto@gmail.com</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-purple-500" />
              <a href="tel:+5491147474733" className="hover:text-white">+54 9 11 4747-4733</a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-purple-500" />
              <span>Buenos Aires, Argentina</span>
            </li>
          </ul>
        </div>

        {/* COLUMNA 4: Talento */}
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-colors">
          <h4 className="text-white font-semibold mb-2">Únete al equipo</h4>
          <p className="mb-4 text-xs leading-relaxed">
            Buscamos mentes creativas que quieran cambiar la industria.
          </p>
          <Link
            href="/trabaja-con-nosotros"
            className="block w-full text-center bg-white/10 text-white py-2 rounded-lg hover:bg-white hover:text-black transition-all font-medium border border-white/5"
          >
            Mandar CV
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 py-8 text-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} Routherman. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all hover:scale-110 border border-white/5"
    >
      {icon}
    </a>
  );
}

