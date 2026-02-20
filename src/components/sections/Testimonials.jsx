import Container from "@/components/Container";
import CalendlyPopupButton from "@/components/CalendlyPopupButton";

const googleReviewsUrl = "https://share.google/7I8WHYBVwJUwINk0h"; // <-- reemplazar por link real de tu ficha

const whatsappUrl = "https://wa.me/542615740182"; // <-- reemplazar si corresponde

const testimonials = [
  {
    quote:
      "“Tenía una deuda con AFIP y estaba bastante preocupado.” En la reunión me explicaron todo claro, vimos el monto real y armamos un plan de pago concreto. Hoy estoy al día y mucho más tranquilo.",
    author: "Martín G. – Comercio minorista | Mendoza",
  },
  {
    quote:
      "“No entendía nada de mis impuestos y tenía miedo de estar pagando mal.” Ahora sé exactamente cuánto pago, cuándo y por qué. Me siento mucho más seguro con mi actividad.",
    author: "Laura S. – Monotributista (servicios profesionales) | Mendoza",
  },
  {
    quote:
      "“La atención online nos ahorró muchísimo tiempo.” Responden rápido, explican claro y se ocupan de todo. Hoy podemos enfocarnos en hacer crecer la empresa.",
    author: "Carlos R. – PYME industrial | Mendoza",
  },
];

function Stars({ count = 5 }) {
  return (
    <div
      className="flex items-center gap-1"
      aria-label={`${count} de 5 estrellas`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-[rgb(var(--cian))]">
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="opiniones">
      <Container className="py-16">
        {/* Intro + estadística */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-[rgb(var(--azul))]">
            ⭐ La confianza se construye con resultados reales
          </p>

          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[rgb(var(--azul))]">
            Experiencias de clientes en Mendoza
          </h2>

          <p className="mt-3 text-base leading-relaxed text-[rgb(var(--muted))]">
            Más emprendedores, monotributistas y PYMES en Mendoza ya ordenaron
            sus impuestos y evitaron problemas con AFIP.
          </p>

          <div className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-white/70 px-5 py-3 backdrop-blur-md shadow-[0_10px_25px_rgba(15,23,42,0.10)]">
            <span className="text-sm font-semibold text-[rgb(var(--azul))]">
              ⭐ 4.9 de calificación en Google
            </span>
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[rgb(var(--celeste))] hover:underline"
            >
              Ver todas las reseñas
            </a>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="rounded-3xl bg-white/70 p-6 backdrop-blur-md shadow-[0_12px_35px_rgba(15,23,42,0.10)]"
            >
              <Stars />
              <blockquote className="mt-4 text-base leading-relaxed text-[rgb(var(--text))]">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 text-sm font-semibold text-[rgb(var(--azul))]">
                {t.author}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* CTA inmediato debajo */}
        <div className="mt-10 rounded-3xl bg-white/70 p-6 backdrop-blur-md shadow-[0_14px_40px_rgba(15,23,42,0.12)] sm:p-8">
          <div className="text-center">
            <h3 className="text-2xl font-extrabold tracking-tight text-[rgb(var(--azul))]">
              ¿Querés la misma tranquilidad para tu actividad?
            </h3>
            <p className="mt-2 text-base text-[rgb(var(--muted))]">
              Podés escribirnos ahora por WhatsApp o agendar una reunión para
              analizar tu situación sin compromiso.
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full sm:w-auto"
            >
              🟢 Escribir por WhatsApp
            </a>

            <CalendlyPopupButton
              url="https://calendly.com/contador-publico-matriculado-mendoza"
              text="Agendar reunión"
              className="btn btn-outline w-full sm:w-auto"
            />
          </div>

          <p className="mt-4 text-center text-sm text-[rgb(var(--muted))]">
            20 minutos – Online o Presencial – Confidencial – Sin compromiso
          </p>
        </div>
      </Container>
    </section>
  );
}
