import Container from "@/components/Container";
import { SITE } from "@/lib/seo";

export default function FinalCTA() {
  return (
    <section id="cta-final">
      <Container className="py-12 text-center sm:py-16">
        <h2 className="mb-3 text-[clamp(20px,4vw,34px)] font-extrabold leading-tight text-azul">
          ¿Buscás un contador público en Mendoza?
        </h2>
        <p className="mx-auto mb-6 max-w-[500px] text-base text-muted">
          {SITE.brandPerson} — {SITE.matricula} Primera consulta sin cargo.
          Empezamos hoy.
        </p>

        <div className="flex flex-col items-center justify-center gap-2.5 sm:flex-row">
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-green w-full max-w-[320px] px-7 py-3.5 text-base sm:w-auto sm:max-w-none"
          >
            💬 WhatsApp ahora
          </a>
          <a
            href="#reservar"
            className="btn w-full max-w-[320px] px-7 py-3.5 text-base sm:w-auto sm:max-w-none"
          >
            📅 Agendar reunión
          </a>
        </div>

        <p className="mt-4 text-xs text-muted">
          Atención: Lunes a Viernes 9–18 hs · Online toda la provincia de
          Mendoza
        </p>
      </Container>
    </section>
  );
}
