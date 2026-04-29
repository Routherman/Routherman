"use client";
// app/contacto/page.js
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// 1. Agregamos MessageCircle a los imports
import { Mail, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-purple-500/30">
            <Navbar />

            {/* Contenedor principal centrado */}
            <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center justify-center">

                {/* Encabezado */}
                <div className="text-center mb-12 max-w-5xl">
                    <h1 className="text-5xl font-bold mb-6">Hablemos...</h1>

                    {/* BARRA DE CONTACTOS - Agregamos WhatsApp aquí */}
                    <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-left bg-white/5 p-6 rounded-2xl border border-white/10 mb-8 inline-flex">

                        {/* Teléfono */}
                        <a
                            href="tel:+5491147474733"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition-opacity"
                        >
                            <ContactMethod
                                icon={<Phone className="w-5 h-5" />}
                                title="Llámanos"
                                value="+54 9 11 4747 4733"
                            />
                        </a>
                        {/* Email */}
                        <a
                            href="mailto:routherman@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition-opacity"
                        >
                            <ContactMethod
                                icon={<Mail className="w-5 h-5" />}
                                title="Email"
                                value="routherman.contacto@gmail.com"
                            />
                        </a>
                        {/* --- NUEVO: WhatsApp (con enlace funcional) --- */}
                        <a
                            href="https://wa.me/5491147474733"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition-opacity"
                        >
                            <ContactMethod
                                icon={<MessageCircle className="w-5 h-5 text-green-400" />} // Color verde para diferenciar
                                title="WhatsApp"
                                value="Enviar Mensaje"
                            />
                        </a>

                    </div>
                </div>

                {/* --- EL FORMULARIO (Centrado y angosto) --- */}
                <div className="w-full max-w-lg">
                    <ContactForm />
                </div>

            </div>

            <Footer />
        </main>
    );
}

function ContactForm() {
    const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });
    // Importamos useState directamente de react si no está arriba, o usamos React.useState
    // Para asegurar limpieza, usaré import("react").useState o asumiré que puedo agregarlo.
    // Como no puedo modificar imports arriba facilmente sin ver todo el archivo, usaré sintaxis inline si React no está importado, pero React 19 usa hooks directo? Nextjs client components necesitan 'use client'.
    // El archivo dice 'use client' al principio? No lo vi en el `view_file`.
    // Si no tiene 'use client', no puedo usar hooks.
    // VERIFIQUEMOS SI TIENE 'use client'. El archivo mostrado en step 503 NO TIENE 'use client'.
    // ERROR POTENCIAL: ContactPage debe ser cliente.
    // Voy a asumir que necesito agregar "use client".

    // Espera, ContactPage no tiene 'use client'.
    // Entonces debo convertir ContactPage a cliente O extraer ContactForm a su propio componente cliente.
    // Para simplificar, agregaré "use client" al principio del archivo en un paso separado o aquí mismo si puedo.
    // Pero estoy editando el medio del archivo.
    // Mejor convierto ContactForm en un componente interno y asumo que agregaré "use client" al inicio.
    // O mejor aún, hago el replace del inicio del archivo también.

    // Voy a hacer el replace de ContactForm aquí, y luego OTRO replace para agregar 'use client' arriba.

    const [status, setStatus] = useState("idle");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/consultas`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    tipo: "Contacto",
                    nombre: formData.nombre,
                    email: formData.email,
                    mensaje: formData.mensaje
                }),
            });

            if (res.ok) {
                setStatus("success");
                setFormData({ nombre: "", email: "", mensaje: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl text-center">
                <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje Enviado!</h3>
                <p className="text-gray-400">Gracias por contactarnos.</p>
                <button onClick={() => setStatus("idle")} className="mt-4 text-purple-400 hover:text-purple-300 underline">Enviar otro</button>
            </div>
        );
    }

    return (
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 blur-[50px] rounded-full pointer-events-none"></div>

            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div>
                    <label className="text-sm font-medium text-gray-400 ml-1">Nombre</label>
                    <input
                        required
                        type="text"
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        className="w-full mt-2 bg-black/50 border border-white/10 rounded-xl p-3 text-white placeholder-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all outline-none"
                        placeholder="Tu nombre"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-400 ml-1">Email</label>
                    <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full mt-2 bg-black/50 border border-white/10 rounded-xl p-3 text-white placeholder-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all outline-none"
                        placeholder="tu@email.com"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-400 ml-1">Mensaje</label>
                    <textarea
                        required
                        rows="4"
                        value={formData.mensaje}
                        onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                        className="w-full mt-2 bg-black/50 border border-white/10 rounded-xl p-3 text-white placeholder-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all outline-none resize-none"
                        placeholder="Cuéntanos sobre tu proyecto..."
                    ></textarea>
                </div>

                <button
                    disabled={status === 'loading'}
                    className="w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-gray-200 hover:scale-[1.02] active:scale-95 transition-all text-base mt-2 disabled:opacity-50 disabled:scale-100"
                >
                    {status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
                {status === "error" && <p className="text-red-400 text-center text-sm">Error al enviar.</p>}
            </form>
        </div>
    );
}

// Componente auxiliar
function ContactMethod({ icon, title, value }) {
    return (
        <div className="flex items-center gap-3 cursor-pointer">
            <div className="p-2 bg-white/10 rounded-full text-purple-300 border border-white/5">{icon}</div>
            <div>
                <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wide font-semibold">{title}</p>
                <p className="text-white font-medium text-sm">{value}</p>
            </div>
        </div>
    )
}