"use client";
import { useState } from "react";

const SERVICES = ["Desarrollo Web", "App Mobile", "Software Desktop", "Consultoría"];

export default function ContactForm() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json?.ok) throw new Error(json?.error || "Error");

      setStatus("✅ ¡Enviado! Te contactaremos pronto.");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("❌ No se pudo enviar. Intentá nuevamente más tarde.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* fila 1 */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">Tipo de servicio</label>
          <select
            name="servicio"
            className="w-full bg-transparent border border-white/20 rounded-xl px-3 py-2"
            defaultValue={SERVICES[0]}
          >
            {SERVICES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm mb-1">Nombre</label>
          <input
            name="nombre"
            required
            className="w-full bg-transparent border border-white/20 rounded-xl px-3 py-2"
            placeholder="Tu nombre"
          />
        </div>
      </div>

      {/* fila 2 */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">Mail o Teléfono</label>
          <input
            name="contacto"
            required
            className="w-full bg-transparent border border-white/20 rounded-xl px-3 py-2"
            placeholder="tucorreo@ejemplo.com / +54 ..."
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Empresa (opcional)</label>
          <input
            name="empresa"
            className="w-full bg-transparent border border-white/20 rounded-xl px-3 py-2"
            placeholder="Nombre de empresa"
          />
        </div>
      </div>

      {/* mensaje */}
      <div>
        <label className="block text-sm mb-1">Mensaje</label>
        <textarea
          name="mensaje"
          rows={4}
          className="w-full bg-transparent border border-white/20 rounded-xl px-3 py-2"
          placeholder="Contanos brevemente tu proyecto"
        />
      </div>

      <button type="submit" className="btn" disabled={loading}>
        {loading ? "Enviando..." : "Enviar consulta"}
      </button>

      {status && <p className="text-sm text-white/70">{status}</p>}
    </form>
  );
}
