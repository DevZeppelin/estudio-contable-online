import Container from "@/components/Container";
import { SITE } from "@/lib/seo";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[linear-gradient(140deg,#0a1f3c_0%,#1a3a6b_100%)] text-white"
    >
      {/* Detalles decorativos sutiles */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute -top-32 right-[-10%] h-96 w-96 rounded-full bg-celeste/20 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-8%] h-80 w-80 rounded-full bg-cian/10 blur-3xl" />
      </div>

      <Container className="relative z-10 py-20 sm:py-24">
        <div className="mx-auto max-w-2xl">
          {/* Pill de autoridad — rating unificado con la ficha de GBP */}
          <a
            href={SITE.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-anim mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[13px] font-semibold backdrop-blur-sm transition hover:bg-white/15"
          >
            <span className="text-gold" aria-hidden="true">
              ★★★★★
            </span>
            <span>
              {SITE.rating} · {SITE.ratingCount} reseñas en Google · Matrícula
              9156 C.P.C.E.M.D.Z.
            </span>
          </a>

          {/* H1 */}
          <h1 className="hero-anim hero-anim-1 text-[clamp(28px,4.5vw,48px)] font-extrabold leading-[1.12] tracking-tight">
            Estudio Contable en Mendoza
            <br />
            Contador Público Matriculado
          </h1>

          <p className="hero-anim hero-anim-2 mt-4 text-lg font-medium text-white/90">
            Cr. Darío Vallinas — Contador en Mendoza con atención directa, sin
            intermediarios
          </p>

          <p className="hero-anim hero-anim-2 mt-3 max-w-xl text-[15px] leading-relaxed text-white/75">
            Asesoramiento contable e impositivo para profesionales,
            monotributistas, emprendedores y PYMES de Mendoza. Entendés tu
            situación fiscal y tomás decisiones con tranquilidad.
          </p>

          {/* Checks */}
          <ul className="hero-anim hero-anim-3 mt-7 space-y-2.5">
            {[
              "Contador matriculado en el C.P.C.E.M.D.Z.",
              "Atención ONLINE y PRESENCIAL en Mendoza",
              "Soluciones para AFIP/ARCA, impuestos, PYMES y monotributistas",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-[15px] text-white/90"
              >
                <span
                  className="shrink-0 font-extrabold text-verde"
                  aria-hidden="true"
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          {/* CTA doble */}
          <div className="hero-anim hero-anim-4 mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-green"
            >
              ✔️ Hablar por WhatsApp ahora
            </a>
            <a href="#reservar" className="btn btn-ghost">
              🟢 Agendar reunión sin cargo
            </a>
          </div>

          {/* Meta */}
          <div className="hero-anim hero-anim-4 mt-8 flex flex-wrap gap-x-4 gap-y-1 border-t border-white/15 pt-5 text-[13px] text-white/70">
            <span>20 minutos</span>
            <span>· Online o Presencial</span>
            <span>· Confidencial</span>
            <span>· Sin compromiso</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
