import Container from "@/components/Container";
import { SITE } from "@/lib/seo";

export default function Booking() {
  return (
    <section id="reservar" className="bg-azul text-white">
      <Container className="py-12 sm:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label mb-2.5 text-[11px] text-[#93c5fd]">
            Reunión sin cargo
          </span>
          <h2 className="mb-3 text-[clamp(20px,4vw,34px)] font-extrabold leading-tight">
            Agendá tu reunión orientativa con el Contador Público en Mendoza
          </h2>
          <p className="text-white/70">
            Sin cargo ni compromiso. Analizamos tu situación y te damos una
            respuesta clara.
          </p>
        </div>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1fr_1.6fr]">
          <div className="reveal-item">
            <ul className="space-y-3 text-[15px] text-white/90">
              {[
                "Análisis de tu situación impositiva",
                "Respuesta clara sobre qué necesitás",
                "Propuesta de honorario sin sorpresas",
                "Online o presencial en Guaymallén, Mendoza",
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
              💬 Reservar por WhatsApp
            </a>

            <p className="mt-2.5 text-center text-[11px] text-white/50">
              Tu información es confidencial y no será compartida.
            </p>
          </div>

          <div className="reveal-item overflow-hidden rounded-xl bg-white">
            <iframe
              title="Agendar reunión con el Contador Público en Mendoza"
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
