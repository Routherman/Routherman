import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from 'next/link';
import { Calendar, ArrowRight, Rss } from 'lucide-react';

export const metadata = {
    title: "Novedades y Noticias | Routherman",
    description: "Últimas noticias sobre tecnología, desarrollo de software y novedades de Routherman.",
};



import { mockNews } from '@/data/mockNews';

async function getNews() {
    // Return mock data
    return mockNews.filter(n => n.published).sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
}

export default async function NewsPage() {
    const news = await getNews();

    return (
        <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-purple-500/30">
            <Navbar />

            <div className="relative pt-32 pb-20 px-6">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
                            Blog & Noticias
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Novedades <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Routherman</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Explora nuestros últimos artículos, guías técnicas y noticias sobre el mundo del desarrollo digital.
                        </p>
                    </div>

                    {news.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {news.map((item) => (
                                <Link
                                    href={`/novedades/${item.slug}`}
                                    key={item.id}
                                    className="group flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all hover:bg-white/10 hover:-translate-y-1 duration-300"
                                >
                                    <div className="relative h-56 w-full overflow-hidden">
                                        <img
                                            src={item.image_url || "/og-image.jpg"}
                                            alt={item.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white border border-white/10 shadow-lg">
                                            {item.category}
                                        </div>
                                    </div>
                                    <div className="p-8 flex-1 flex flex-col">
                                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                                            <Calendar className="w-3 h-3" />
                                            {new Date(item.created_at).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm line-clamp-3 mb-6 flex-1">
                                            {item.summary}
                                        </p>
                                        <div className="flex items-center text-purple-400 font-medium group/link">
                                            Leer artículo completo
                                            <ArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 border border-white/10 rounded-2xl bg-white/5">
                            <Rss className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Aún no hay publicaciones</h3>
                            <p className="text-gray-400">Estamos preparando contenido increíble para ti. Vuelve pronto.</p>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </main>
    );
}
