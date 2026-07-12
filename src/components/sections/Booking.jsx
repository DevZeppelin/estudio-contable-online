import Container from "@/components/Container";
import { SITE } from "@/lib/seo";

export default function Booking() {
  return (
    <section id="reservar" className="bg-azul text-white">
      <Container className="py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label !text-white/55">Reservar turno</span>
          <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
            Agendá tu reunión orientativa sin cargo
          </h2>
          <p className="mt-3 text-white/70">
            Elegí el día y horario que mejor te quede. Sin compromiso.
          </p>
        </div>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1fr_1.6fr]">
          <div className="reveal-item">
            <ul className="space-y-3 text-[15px] text-white/90">
              {[
                "Diagnóstico simple de tu situación fiscal",
                "Qué pasos seguir (y qué evitar)",
                "Opciones para regularizar o poner todo en orden",
                "Claridad para decidir sin miedo",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span
                    className="text-lg leading-6 text-verde"
                    aria-hidden="true"
                  >
                    •
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-green mt-7 w-full"
            >
              💬 O escribinos por WhatsApp
            </a>

            <p className="mt-3 text-xs text-white/55">
              🔒 Tu información se usa solo para coordinar la reunión.
            </p>
          </div>

          <div className="reveal-item overflow-hidden rounded-xl bg-white">
            <iframe
              title="Reservar reunión con Contador Público en Mendoza — Cr. Darío Vallinas"
              src={SITE.calendlyUrl}
              className="h-[680px] w-full"
              frameBorder="0"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
