import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative z-10 flex flex-col items-center justify-center pt-40 pb-32 px-6 text-center max-w-5xl mx-auto">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white backdrop-blur-sm transition-colors hover:bg-white/10">
                <span className="flex h-2 w-2 rounded-full bg-purple-400"></span>
                <span className="font-medium">Desarrollo Web & Software Factory</span>
                <ChevronRight className="h-3 w-3 text-gray-400" />
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6">
                Innovación digital <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                    al alcance de todos.
                </span>
            </h1>

            <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                En Routherman democratizamos la tecnología. Desarrollo web y software de alta calidad con tarifas Low Cost, enfocado en tus necesidades reales.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link href="/contacto" className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                    Iniciar Proyecto
                    <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/soluciones" className="border border-white/20 bg-white/5 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all flex items-center justify-center">
                    Ver Soluciones
                </Link>
            </div>
        </section>
    );
}
