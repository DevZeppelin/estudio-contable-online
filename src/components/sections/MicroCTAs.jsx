import Container from "@/components/Container";

export default function MicroCTAs() {
  return (
    <section id="micro-ctas" className=" ">
      <Container className="py-14">
        <h2 className="text-2xl font-extrabold text-azul">
          ¿Preferís otra forma de contacto?
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <a
            href="https://wa.me/5492615740182"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl  px-6 py-5 text-center text-sm font-semibold text-bg shadow-soft hover:opacity-95"
          >
            🟢 Hablar por WhatsApp ahora
          </a>

          <a
            href="https://wa.me/5492615740182"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl px-6 py-5 text-center text-sm font-semibold text-bg shadow-soft hover:opacity-95"
          >
            🟡 Solicitar presupuesto rápido
          </a>

          <a
            href="https://calendly.com/contador-publico-matriculado-mendoza"
            target="_blank"
            className="rounded-2xl  px-6 py-5 text-center text-sm font-semibold text-bg shadow-soft hover:opacity-95"
          >
            🔵 Agendá una cita
          </a>
        </div>
      </Container>
    </section>
  );
}
