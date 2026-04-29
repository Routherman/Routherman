"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Terminal, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function SoftwarePage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-purple-500/30">
      <Navbar />

      {/* HEADER */}
      <section className="relative pt-40 pb-20 px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/20 opacity-40 blur-[100px] rounded-full pointer-events-none" />
        <h1 className="relative z-10 text-4xl md:text-6xl font-bold mb-6">Software Factory</h1>
        <p className="relative z-10 text-gray-400 max-w-2xl mx-auto text-lg">
          Desarrollamos herramientas a medida para optimizar procesos y escalar tu empresa.
        </p>
      </section>

      {/* INFO + STACK */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-blue-400">Ingeniería de Software</h2>
          <div className="space-y-6 text-gray-300">
            <p>
              Desde la automatización de tareas repetitivas hasta sistemas de gestión complejos.
            </p>
            <ul className="space-y-3">
              <ListItem text="Arquitectura de microservicios escalables." />
              <ListItem text="Desarrollo de APIs REST y GraphQL." />
              <ListItem text="Automatización con IA y Scripts." />
              <ListItem text="Dashboards de control en tiempo real." />
            </ul>
          </div>
        </div>

        {/* STACK CARD */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Terminal className="text-purple-400" /> Tecnologías Core
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <StackItem name="Python / Node" desc="Backend Logic" />
            <StackItem name="Docker" desc="Contenedores" />
            <StackItem name="AWS / Vercel" desc="Infraestructura" />
            <StackItem name="AI Integration" desc="OpenAI / Gemini" />
          </div>
        </div>
      </section>

      {/* FORMULARIO DE CONSULTA SOFTWARE */}
      {/* FORMULARIO DE CONSULTA SOFTWARE */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <SoftwareForm />
      </section>

      <Footer />
    </main>
  );
}

function SoftwareForm() {
  const [formData, setFormData] = useState({ empresa: "", email: "", necesidades: "" });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    // Conexión real al backend local
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/consultas`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tipo: "Software",
          nombre: formData.empresa,
          empresa: formData.empresa,
          email: formData.email,
          mensaje: formData.necesidades
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ empresa: "", email: "", necesidades: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-12 text-center">
        <CheckCircle2 className="w-16 h-16 text-blue-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">¡Solicitud Recibida!</h3>
        <p className="text-gray-400">Analizaremos tu caso y te contactaremos para agendar la reunión.</p>
        <button onClick={() => setStatus("idle")} className="mt-6 text-blue-400 hover:text-blue-300 underline">Nueva Solicitud</button>
      </div>
    );
  }

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
      <h2 className="text-3xl font-bold text-center mb-2">Cotizar Desarrollo</h2>
      <p className="text-center text-gray-400 mb-8">Descríbenos el problema que necesitas solucionar.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <input
            required
            type="text"
            placeholder="Empresa / Nombre"
            value={formData.empresa}
            onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
            className="w-full bg-black/50 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-blue-500 transition-colors"
          />
          <input
            required
            type="email"
            placeholder="Email corporativo"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-black/50 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>
        <textarea
          required
          rows="5"
          placeholder="¿Qué necesitas que haga el software? (Ej: Sistema de stock, CRM, bot de automatización...)"
          value={formData.necesidades}
          onChange={(e) => setFormData({ ...formData, necesidades: e.target.value })}
          className="w-full bg-black/50 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-blue-500 transition-colors"
        ></textarea>
        <button
          disabled={status === 'loading'}
          className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Enviando...' : 'Solicitar Reunión Técnica'}
        </button>
        {status === "error" && <p className="text-red-400 text-center text-sm">Hubo un error al enviar. Intenta nuevamente.</p>}
      </form>
    </div>
  );
}



function ListItem({ text }) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-1" />
      <span>{text}</span>
    </li>
  );
}

function StackItem({ name, desc }) {
  return (
    <div className="p-3 bg-white/5 rounded-lg border border-white/5">
      <div className="font-semibold text-white">{name}</div>
      <div className="text-xs text-gray-500">{desc}</div>
    </div>
  );
}
