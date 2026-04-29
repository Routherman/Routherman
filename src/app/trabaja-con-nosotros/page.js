"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { UploadCloud } from "lucide-react";
import { useState } from "react";

export default function CareersPage() {
  const [formData, setFormData] = useState({ nombre: "", email: "", telefono: "", link: "" });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/consultas`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tipo: "Empleo",
          nombre: formData.nombre,
          email: formData.email,
          telefono: formData.telefono,
          extra_info: "Portfolio: " + formData.link
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ nombre: "", email: "", telefono: "", link: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-purple-500/30">
      <Navbar />

      <section className="pt-40 pb-20 px-6 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Únete al equipo</h1>
        <p className="text-gray-400 text-center mb-12">
          Buscamos talento que quiera romper moldes. Si te apasiona el código y la innovación, este es tu lugar.
        </p>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Nombre Completo</label>
              <input
                required
                type="text"
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                className="w-full bg-black/50 border border-white/10 rounded-lg p-3 focus:border-purple-500 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-black/50 border border-white/10 rounded-lg p-3 focus:border-purple-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Teléfono</label>
                <input
                  type="tel"
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  className="w-full bg-black/50 border border-white/10 rounded-lg p-3 focus:border-purple-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Link a LinkedIn / Portfolio</label>
              <input
                required
                type="url"
                placeholder="https://..."
                value={formData.link}
                onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                className="w-full bg-black/50 border border-white/10 rounded-lg p-3 focus:border-purple-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Adjuntar CV (PDF)</label>
              <div className="border-2 border-dashed border-white/10 rounded-lg p-8 text-center hover:border-purple-500/50 transition-colors cursor-pointer bg-black/30">
                <UploadCloud className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <span className="text-sm text-gray-500">Próximamente: Carga de archivos</span>
              </div>
            </div>

            <button
              disabled={status === 'loading'}
              className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-200 transition-all mt-4 disabled:opacity-50"
            >
              {status === 'loading' ? 'Enviando...' : 'Enviar Postulación'}
            </button>
            {status === "error" && <p className="text-red-400 text-center text-sm mt-2">Error al enviar.</p>}
            {status === "success" && <p className="text-green-400 text-center text-sm mt-2">¡Postulación enviada con éxito!</p>}
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
