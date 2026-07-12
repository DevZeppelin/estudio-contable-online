import Container from "@/components/Container";
import { SITE } from "@/lib/seo";

export default function FinalCTA() {
  return (
    <section id="cta-final">
      <Container className="py-16 text-center sm:py-20">
        <h2 className="text-2xl font-extrabold text-azul sm:text-3xl">
          Ordená tu situación contable hoy
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-lg text-muted">
          Si estás buscando un contador en Mendoza que te brinde asesoramiento
          profesional, claro y confiable, estás en el lugar correcto.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="#reservar" className="btn px-8 py-4 text-base">
            🟢 Reservar turno ahora
          </a>
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-green px-8 py-4 text-base"
          >
            💬 Escribir por WhatsApp
          </a>
        </div>
      </Container>
    </section>
  );
}
