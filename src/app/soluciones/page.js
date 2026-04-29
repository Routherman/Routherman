import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Bot, BarChart3, Globe } from "lucide-react";
import Link from "next/link";

export default function SolucionesPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-purple-500/30">
      <Navbar />
      
      <section className="pt-40 pb-12 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Nuestras Soluciones</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Productos SaaS listos para usar diseñados para potenciar tu presencia digital y ventas.
        </p>
      </section>

      {/* GRID DE PRODUCTOS */}
      <section className="max-w-7xl mx-auto px-6 py-12 pb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* PRODUCTO 1: AutoMark (Ejemplo) */}
          <ProductCard 
            badge="Popular"
            title="AutoMark"
            desc="Gestión centralizada de redes sociales con IA. Crea, programa y publica contenido automáticamente."
            icon={<Bot className="w-8 h-8 text-purple-400"/>}
          />

          {/* PRODUCTO 2: ADT (Ejemplo) */}
          <ProductCard 
            badge="Nuevo"
            title="ADT Microservice"
            desc="Herramienta de data scraping para marketing. Encuentra leads públicos por territorio y rol."
            icon={<BarChart3 className="w-8 h-8 text-blue-400"/>}
          />

          {/* PRODUCTO 3: Genérico */}
          <ProductCard 
            title="Finance Template"
            desc="Plantilla web optimizada para asesores financieros y blogs de economía."
            icon={<Globe className="w-8 h-8 text-green-400"/>}
          />

        </div>
      </section>

      <Footer />
    </main>
  );
}

function ProductCard({ title, desc, icon, badge }) {
  return (
    <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:-translate-y-1">
      {badge && (
        <span className="absolute top-4 right-4 bg-purple-500/20 text-purple-300 text-xs px-2 py-1 rounded-full border border-purple-500/30">
          {badge}
        </span>
      )}
      <div className="mb-4 bg-black/40 w-fit p-3 rounded-xl border border-white/5">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-6 h-20">{desc}</p>
      <Link href="/contacto" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-purple-400 transition-colors">
        Solicitar Demo <ArrowRight size={16} />
      </Link>
    </div>
  )
}
