import Container from "@/components/Container";
import { SITE } from "@/lib/seo";

// Reseñas reales de la ficha de Google Business Profile
const testimonials = [
  {
    initials: "MD",
    color: "#2563eb",
    name: "Mariela Diaz",
    meta: "Mendoza",
    quote:
      "Super profesional, siempre resolviendo con rapidez y profesionalismo, totalmente recomendable, hace 6 años que me resuelve cada problema contable.",
    tag: "✓ Capacidad de respuesta",
  },
  {
    initials: "GL",
    color: "#0d9488",
    name: "Grecia Lopez",
    meta: "Mendoza",
    quote:
      "Excelente profesional Darío. Me solucionó mi problema en horas. Muy recomendable.",
    tag: "✓ Resolución rápida",
  },
  {
    initials: "AH",
    color: "#d97706",
    name: "Alberto Herrera",
    meta: "Mendoza",
    quote:
      "El buen asesoramiento y disponibilidad, y que sea online y rápido, muy recomendable.",
    tag: "✓ 100% online · disponible",
  },
];

function GoogleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
        fill="#EA4335"
      />
    </svg>
  );
}

function Stars() {
  return (
    <span className="text-gold" aria-label="5 de 5 estrellas">
      ★★★★★
    </span>
  );
}

export default function Testimonials() {
  return (
    <section id="opiniones">
      <Container className="py-16 sm:py-20">
        {/* Intro + rating */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-label">Reseñas verificadas en Google</span>
          <h2 className="mt-2 text-2xl font-extrabold text-azul sm:text-3xl">
            Lo que dicen nuestros clientes
          </h2>

          <a
            href={SITE.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold text-azul shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
          >
            <Stars />
            <span>
              {SITE.rating} · {SITE.ratingCount} reseñas en Google
            </span>
          </a>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="reveal-item card p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-extrabold text-white"
                    style={{ backgroundColor: t.color }}
                    aria-hidden="true"
                  >
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-azul">{t.name}</p>
                    <p className="text-[11px] text-muted">{t.meta}</p>
                  </div>
                </div>
                <span title="Reseña verificada de Google">
                  <GoogleIcon />
                </span>
              </div>

              <div className="mt-3 text-[15px]">
                <Stars />
              </div>

              <blockquote className="mt-2.5 text-[15px] italic leading-relaxed text-muted">
                “{t.quote}”
              </blockquote>

              <figcaption className="mt-4">
                <span className="inline-block rounded-full bg-[#eff6ff] px-3 py-1 text-[11px] font-bold text-celeste">
                  {t.tag}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 rounded-xl border border-border bg-white p-8 text-center shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
          <h3 className="text-xl font-extrabold text-azul sm:text-2xl">
            ¿Querés la misma tranquilidad para tu actividad?
          </h3>
          <p className="mt-2 text-[15px] text-muted">
            Consultá por WhatsApp o agendá una reunión para analizar tu
            situación sin compromiso.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-green"
            >
              🟢 Escribir por WhatsApp
            </a>
            <a href="#reservar" className="btn">
              Agendar reunión
            </a>
          </div>

          <p className="mt-4 text-xs text-muted">
            20 minutos · Online o Presencial · Confidencial · Sin compromiso
          </p>
        </div>
      </Container>
    </section>
  );
}
