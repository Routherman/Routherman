import { Layout, Code, Box } from "lucide-react";

export default function Services() {
    return (
        <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto w-full border-t border-white/10">
            <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                Nuestros Servicios
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
                <ServiceCard
                    icon={<Layout className="w-8 h-8 text-purple-400" />}
                    title="Desarrollo Web"
                    desc="Sitios modernos, rápidos y optimizados para destacar en cualquier dispositivo."
                />
                <ServiceCard
                    icon={<Code className="w-8 h-8 text-blue-400" />}
                    title="Software Factory"
                    desc="Aplicaciones a medida y sistemas complejos diseñados para escalar."
                />
                <ServiceCard
                    icon={<Box className="w-8 h-8 text-pink-400" />}
                    title="Soluciones Digitales"
                    desc="Productos listos para usar que aceleran la transformación de tu negocio."
                />
            </div>
        </section>
    );
}

function ServiceCard({ icon, title, desc }) {
    return (
        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10 hover:border-white/20">
            <div className="mb-4 inline-block rounded-lg bg-white/5 p-3 group-hover:bg-white/10 transition-colors">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className="text-gray-400 leading-relaxed">
                {desc}
            </p>
        </div>
    );
}
