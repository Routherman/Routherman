"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';

import { mockNews } from '@/data/mockNews';

export default function NewsSection() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Use mock data
        const published = mockNews.filter(n => n.published).slice(0, 3);
        setNews(published);
        setLoading(false);
    }, []);

    if (!loading && news.length === 0) return null; // Don't show if no news

    return (
        <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Últimas <span className="text-purple-500">Novedades</span>
                        </h2>
                        <p className="text-gray-400 max-w-xl">
                            Mantente al día con las últimas tendencias en tecnología, desarrollo y noticias de Routherman.
                        </p>
                    </div>
                    <Link href="/novedades" className="hidden md:flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors group">
                        Ver todas
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {news.map((item) => (
                        <Link
                            href={`/novedades/${item.slug}`}
                            key={item.id}
                            className="group block bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all hover:bg-white/10"
                        >
                            <div className="relative h-48 w-full overflow-hidden">
                                <img
                                    src={item.image_url || "/og-image.jpg"}
                                    alt={item.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white border border-white/10">
                                    {item.category}
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                                    <Calendar className="w-3 h-3" />
                                    {new Date(item.created_at).toLocaleDateString()}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-purple-400 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm line-clamp-3 mb-4">
                                    {item.summary}
                                </p>
                                <span className="inline-flex items-center text-sm text-purple-400 font-medium">
                                    Leer artículo
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link href="/novedades" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                        Ver todas las novedades
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
