export default function Contact() {
  return (
     <section id="contact" className="section">
        <h3 className="h2 text-center">¿Listo para construir algo épico?</h3>
        <form className="glass form mt-24 w-1/2 mx-auto">
          <input className="input" placeholder="Nombre" />
          <input className="input" placeholder="Email" type="email" />
          <input className="input" placeholder="Empresa / Marca" />
          <textarea className="input textarea" placeholder="Contanos tu idea..." />
          <button className="btn btn-solid mt-8" type="submit">
            Enviar consulta
          </button>
        </form>
  
      </section>
  );
}
