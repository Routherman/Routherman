import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import { Calendar, Tag, ArrowLeft, Share2 } from 'lucide-react';
import Link from "next/link";

import { mockNews } from '@/data/mockNews';

async function getArticle(slug) {
    return mockNews.find(n => n.slug === slug) || null;
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const article = await getArticle(slug);
    if (!article) return { title: 'No encontrado' };

    return {
        title: `${article.title} | Routherman Blog`,
        description: article.summary,
        openGraph: {
            title: article.title,
            description: article.summary,
            images: [article.image_url || '/og-image.jpg'],
            type: 'article'
        }
    }
}

export default async function ArticlePage({ params }) {
    const { slug } = await params;
    const article = await getArticle(slug);

    if (!article) notFound();

    return (
        <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-purple-500/30">
            <Navbar />

            <article className="pt-32 pb-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <Link href="/novedades" className="inline-flex items-center text-sm text-gray-500 hover:text-purple-400 mb-12 transition-colors group">
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Volver a Novedades
                    </Link>

                    <div className="mb-12">
                        <div className="flex flex-wrap gap-4 items-center text-sm text-gray-400 mb-6 font-medium">
                            <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300">
                                <Tag className="w-3 h-3" />
                                {article.category}
                            </span>
                            <span className="flex items-center gap-2">
                                <Calendar className="w-3 h-3" />
                                {new Date(article.created_at).toLocaleDateString("es-ES", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight tracking-tight text-white/90">
                            {article.title}
                        </h1>

                        {article.summary && (
                            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light mb-10">
                                {article.summary}
                            </p>
                        )}
                    </div>
                </div>

                <div className="w-full max-w-5xl mx-auto h-[400px] md:h-[600px] rounded-3xl overflow-hidden mb-16 border border-white/5 shadow-2xl relative group">
                    <img
                        src={article.image_url || "/og-image.jpg"}
                        alt={article.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.5s]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60"></div>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="prose prose-invert prose-lg md:prose-xl max-w-none 
                        break-words overflow-hidden
                        prose-headings:font-bold prose-headings:text-white/90 
                        prose-p:text-gray-300 prose-p:leading-relaxed 
                        prose-a:text-purple-400 prose-a:no-underline hover:prose-a:underline
                        prose-strong:text-white prose-strong:font-semibold
                        prose-li:text-gray-300 prose-li:marker:text-purple-500
                        prose-img:rounded-2xl prose-img:shadow-lg prose-img:border prose-img:border-white/10
                        prose-blockquote:border-l-purple-500 prose-blockquote:bg-white/5 prose-blockquote:py-2 prose-blockquote:pl-6 prose-blockquote:rounded-r-lg">
                        <div dangerouslySetInnerHTML={{ __html: article.content }} />
                    </div>

                    <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-lg font-bold">R</div>
                            <div>
                                <div className="text-white font-medium">Equipo Routherman</div>
                                <div className="text-gray-500 text-sm">Redacción & Tecnología</div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <button className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-full transition-all border border-white/5 hover:border-white/20">
                                <Share2 className="w-4 h-4" />
                                Compartir artículo
                            </button>
                        </div>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
