import Container from "@/components/Container";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import { SITE } from "@/lib/seo";

const testimonials = [
  {
    initials: "MD",
    color: "#2563eb",
    name: "Mariela Díaz",
    meta: "Monotributista · Mendoza",
    quote:
      "Super profesional, siempre resolviendo con rapidez y profesionalismo. Hace 6 años que me resuelve cada problema contable. Totalmente recomendable.",
    tag: "Monotributista · 6 años cliente",
  },
  {
    initials: "GL",
    color: "#059669",
    name: "Grecia López",
    meta: "Autónoma · Mendoza",
    quote:
      "Excelente profesional. Me solucionó mi problema con ARCA en horas. Muy recomendable. Rápido y claro en todo momento.",
    tag: "Asesoramiento ARCA",
  },
  {
    initials: "DH",
    color: "#7c3aed",
    name: "Delfina Hueter",
    meta: "Profesional independiente · Mendoza",
    quote:
      "Un genio. Asesoramiento rapidísimo y muy amable. Me explicó todo sobre el monotributo sin apuro. Muchas gracias Dr. Vallinas.",
    tag: "Monotributo",
  },
  {
    initials: "GG",
    color: "#d97706",
    name: "Gabriel Gil",
    meta: "Comerciante · Mendoza",
    quote:
      "Excelente calidad de servicios para mi PyME. Muy rápido, muy atento. Siempre disponible cuando lo necesito. 10 puntos.",
    tag: "PyME",
  },
  {
    initials: "AA",
    color: "#0891b2",
    name: "Ayelen Anze",
    meta: "Emprendedora · Mendoza",
    quote:
      "Recomiendo muchísimo. Me ayudó a inscribir a mi mamá en monotributo respondiendo cada duda sin ningún problema.",
    tag: "Monotributo familiar",
  },
  {
    initials: "PR",
    color: "#be185d",
    name: "Paulo R.",
    meta: "Profesional · Mendoza",
    quote:
      "Excelente asesoría profesional en todo momento. 100% recomendado para monotributistas y empresas en Mendoza.",
    tag: "100% recomendado",
  },
];

function GoogleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[18px] w-[18px]"
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
    <section id="opiniones" className="overflow-hidden bg-light">
      <Container className="py-12 sm:py-16">
        <div className="mx-auto mb-7 max-w-3xl text-center">
          <span className="section-label mb-2.5 text-[11px]">
            Reseñas verificadas
          </span>
          <h2 className="mb-6 text-[clamp(20px,4vw,34px)] font-extrabold leading-tight text-azul">
            Lo que dicen nuestros clientes en Mendoza
          </h2>

          <a
            href={SITE.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-[18px] py-[7px] text-[13px] font-semibold text-azul shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition hover:-translate-y-0.5"
          >
            ⭐ {SITE.rating} en Google · {SITE.ratingCount} reseñas verificadas ·
            Ver en Google Maps →
          </a>
        </div>

        <ReviewsCarousel>
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="card flex-[0_0_min(320px,85vw)] snap-start p-[22px] [scroll-snap-stop:always]"
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span
                    className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full text-[13px] font-extrabold text-white"
                    style={{ backgroundColor: t.color }}
                    aria-hidden="true"
                  >
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-[13px] font-bold text-azul">{t.name}</p>
                    <p className="text-[11px] text-muted">{t.meta}</p>
                  </div>
                </div>
                <span title="Reseña de Google">
                  <GoogleIcon />
                </span>
              </div>

              <div className="mb-2.5 text-sm">
                <Stars />
              </div>

              <blockquote className="mb-3 text-sm italic leading-[1.7] text-muted">
                “{t.quote}”
              </blockquote>

              <figcaption>
                <span className="inline-block rounded-full bg-[#eff6ff] px-2.5 py-0.5 text-[11px] font-bold text-celeste">
                  {t.tag}
                </span>
              </figcaption>
            </figure>
          ))}
        </ReviewsCarousel>

        <div className="mt-6 rounded-xl border border-border bg-white p-7 text-center">
          <h3 className="mb-2 text-lg font-bold text-azul">
            ¿Querés que el Dr. Vallinas sea tu contador en Mendoza?
          </h3>
          <p className="mb-[18px] text-sm text-muted">
            {SITE.ratingCount} clientes lo recomiendan en Google. Primera
            consulta sin cargo.
          </p>

          <div className="flex flex-col items-center justify-center gap-2.5 sm:flex-row">
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-green"
            >
              💬 WhatsApp ahora
            </a>
            <a
              href="#reservar"
              className="btn btn-light"
            >
              📅 Agendar reunión
            </a>
          </div>

          <p className="mt-3.5 text-[13px] text-muted">
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-celeste hover:underline"
            >
              🗺️ Ver todas las reseñas en Google Maps
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
