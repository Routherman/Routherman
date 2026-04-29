"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, Code2 } from "lucide-react";
import { useState } from "react";

export default function WebDevPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-purple-500/30">
      <Navbar />

      {/* HEADER: Título y descripción */}
      <section className="relative pt-40 pb-20 px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/20 opacity-40 blur-[100px] rounded-full pointer-events-none" />
        <h1 className="relative z-10 text-4xl md:text-6xl font-bold mb-6">Desarrollo Web</h1>
        <p className="relative z-10 text-gray-400 max-w-2xl mx-auto text-lg">
          Creamos experiencias digitales rápidas, escalables y visualmente impactantes.
        </p>
      </section>

      {/* INFO + STACK */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-purple-400">¿Cómo trabajamos?</h2>
          <div className="space-y-6 text-gray-300">
            <p>
              En Routherman no usamos plantillas genéricas. Analizamos tu negocio y diseñamos una arquitectura a medida.
            </p>
            <ul className="space-y-3">
              <ListItem text="Diseño UI/UX centrado en la conversión." />
              <ListItem text="Optimización SEO desde la primera línea de código." />
              <ListItem text="Integración con pasarelas de pago y APIs." />
              <ListItem text="Hosting y dominio incluido en la gestión." />
            </ul>
          </div>
        </div>

        {/* STACK TECNOLÓGICO CARD */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Code2 className="text-blue-400" /> Nuestro Stack
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <StackItem name="Next.js / React" desc="Frontend Moderno" />
            <StackItem name="Tailwind CSS" desc="Estilos Ágiles" />
            <StackItem name="Node.js" desc="Backend Robusto" />
            <StackItem name="PostgreSQL" desc="Base de Datos" />
          </div>
        </div>
      </section>

      {/* FORMULARIO DE CONSULTA WEB */}
      {/* FORMULARIO DE CONSULTA WEB */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <WebForm />
      </section>

      <Footer />
    </main>
  );
}

function WebForm() {
  const [formData, setFormData] = useState({ nombre: "", email: "", tipo_web: "", detalles: "" });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    // Conexión real al backend local
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/consultas`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tipo: "Web",
          nombre: formData.nombre,
          email: formData.email,
          extra_info: formData.tipo_web,
          mensaje: formData.detalles
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ nombre: "", email: "", tipo_web: "", detalles: "" });
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
      <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-12 text-center">
        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje Enviado!</h3>
        <p className="text-gray-400">Te responderemos a la brevedad con tu presupuesto.</p>
        <button onClick={() => setStatus("idle")} className="mt-6 text-green-400 hover:text-green-300 underline">Enviar otra consulta</button>
      </div>
    );
  }

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
      <h2 className="text-3xl font-bold text-center mb-2">Consulta por tu Web</h2>
      <p className="text-center text-gray-400 mb-8">Cuéntanos tu idea y te enviamos un presupuesto Low Cost.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <input
            required
            type="text"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
            className="w-full bg-black/50 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-purple-500 transition-colors"
          />
          <input
            required
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-black/50 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-purple-500 transition-colors"
          />
        </div>
        <select
          required
          value={formData.tipo_web}
          onChange={(e) => setFormData({ ...formData, tipo_web: e.target.value })}
          className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-gray-400 focus:outline-none focus:border-purple-500"
        >
          <option value="">Tipo de web...</option>
          <option value="Landing Page">Landing Page</option>
          <option value="E-commerce">E-commerce</option>
          <option value="Web Corporativa">Web Corporativa</option>
          <option value="Otro">Otro</option>
        </select>
        <textarea
          required
          rows="4"
          placeholder="Detalles del proyecto..."
          value={formData.detalles}
          onChange={(e) => setFormData({ ...formData, detalles: e.target.value })}
          className="w-full bg-black/50 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-purple-500 transition-colors"
        ></textarea>
        <button
          disabled={status === 'loading'}
          className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Enviando...' : 'Enviar Consulta'}
        </button>
        {status === "error" && <p className="text-red-400 text-center text-sm">Hubo un error al enviar. Intenta nuevamente.</p>}
      </form>
    </div>
  );
}



// Pequeños componentes internos para limpieza
function ListItem({ text }) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1" />
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
