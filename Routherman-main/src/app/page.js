import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import NewsSection from "@/components/home/NewsSection";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col bg-[#0A0A0A] text-white overflow-hidden selection:bg-purple-500/30">
      <Navbar />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-purple-600/40 opacity-50 blur-[120px] rounded-full pointer-events-none z-0" />
      <Hero />
      <Services />
      <NewsSection />
      <Footer />
    </main>
  );
}