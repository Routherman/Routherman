// components/ServiceSection.jsx
import Image from "next/image";
import Link from "next/link";

export default function ServiceSection({ title, description, image, odd = false }) {
  return (
    <section className={`section ${odd ? "section-alt" : ""}`}>
      <div className="container-narrow grid md:grid-cols-2 gap-10 items-center">
        {/* Texto */}
        <div className="order-2 md:order-1">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-3 text-white/70">{description}</p>
          <div className="mt-6">
            <Link href="/contacto" className="btn">
              Solicitar cotización
            </Link>
          </div>
        </div>

        {/* Imagen */}
        <div className="order-1 md:order-2">
          <div className="card">
            <Image
              src={image}
              alt={title}
              width={800}
              height={600}
              className="rounded-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
