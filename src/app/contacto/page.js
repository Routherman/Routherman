import ContactForm from "@/components/Contacto";

export const metadata = {
  title: "Contacto — routherman",
  description: "Contactanos para cotizar proyectos de desarrollo web, mobile o desktop.",
};

export default function ContactoPage() {
  return (
    <section className="section section-alt">
      <div className="container-narrow">
        <h1 className="text-3xl md:text-5xl font-bold">Contacto</h1>
        <p className="mt-4 text-white/70 max-w-2xl">
          Contanos sobre tu proyecto y te responderemos con una propuesta a medida.
        </p>

        <div className="mt-8 card">
          <ContactForm />
          <p className="mt-4 text-xs text-white/50">
            Al enviar aceptás ser contactado por nuestros canales informados.
          </p>
        </div>
      </div>
    </section>
  );
}
