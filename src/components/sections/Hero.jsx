import Image from "next/image";
import Container from "@/components/Container";
import { SITE } from "@/lib/seo";

const chips = [
  "🏢 Estudio Contable Mendoza",
  "👤 Contador en Mendoza",
  "📋 Asesoramiento ARCA",
];

const checks = [
  "Contador Público Matriculado — Mat. 9156 C.P.C.E.M.D.Z.",
  "Monotributistas, autónomos, responsables inscriptos y PyMEs",
  "Asesoramiento ARCA: intimaciones, deudas y planes de pago",
  <>
    Reunión orientativa <strong>sin cargo</strong> — agendá hoy
  </>,
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[linear-gradient(140deg,#0a1f3c_0%,#1a3a6b_100%)] text-white"
    >
      <Container className="relative z-10 py-12 sm:py-14">
        <div className="grid items-start gap-5 min-[821px]:grid-cols-[1fr_300px] min-[821px]:gap-x-10 min-[821px]:gap-y-6">
          {/* Texto */}
          <div className="min-[821px]:col-start-1 min-[821px]:row-start-1">
            <div className="hero-anim mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold">
              <span className="text-gold" aria-hidden="true">
                ⭐⭐⭐⭐⭐
              </span>
              <a
                href={SITE.reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {SITE.rating} en Google · {SITE.ratingCount} opiniones
              </a>
            </div>

            <div className="hero-anim hero-anim-1 mb-3.5 flex flex-wrap gap-2">
              {chips.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1.5 rounded-md border border-[rgba(99,155,255,0.4)] bg-celeste/30 px-2.5 py-[3px] text-xs font-bold text-[#a5c8ff]"
                >
                  {c}
                </span>
              ))}
            </div>

            <h1 className="hero-anim hero-anim-1 mb-2.5 text-[clamp(24px,5vw,46px)] font-extrabold leading-[1.1] tracking-tight">
              Estudio Contable en Mendoza
            </h1>

            <p className="hero-anim hero-anim-2 mb-1.5 text-[clamp(14px,2.5vw,18px)] font-bold text-[#a5c8ff]">
              Contador Público en Mendoza — {SITE.brandPerson}, {SITE.matricula}
            </p>

            <p className="hero-anim hero-anim-2 mb-4 text-sm text-white/80">
              Atención directa y personalizada para monotributistas, autónomos,
              PyMEs y deudas ARCA.
            </p>

            <ul className="hero-anim hero-anim-3 flex flex-col gap-2">
              {checks.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-white/90"
                >
                  <span
                    className="mt-px shrink-0 font-extrabold text-verde"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Foto */}
          <div className="hero-anim hero-anim-2 flex justify-center min-[821px]:col-start-2 min-[821px]:row-span-2 min-[821px]:row-start-1 min-[821px]:self-center">
            <div className="relative mx-auto mb-5 w-full max-w-[200px] min-[821px]:max-w-[260px]">
              <Image
                src="/images/dr-vallinas.png"
                alt="Dr. Darío Vallinas — Contador Público Matriculado en Mendoza, Mat. 9156 C.P.C.E.M.D.Z."
                width={530}
                height={502}
                priority
                sizes="(max-width: 820px) 200px, 260px"
                className="aspect-[3/4] w-full rounded-[18px] object-cover shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
              />
              <div className="absolute -bottom-[18px] left-1/2 z-[2] min-w-[160px] -translate-x-1/2 rounded-[10px] bg-white px-3.5 py-2.5 text-center text-[10px] font-bold leading-[1.4] text-azul shadow-[0_4px_20px_rgba(0,0,0,0.2)] min-[821px]:whitespace-nowrap min-[821px]:text-[11px]">
                {SITE.brandPerson}
                <span className="block text-[10px] font-normal text-[#555]">
                  Contador Público Matriculado
                </span>
                <span className="block text-[10px] font-normal text-[#555]">
                  Mat. 9156 · C.P.C.E.M.D.Z.
                </span>
              </div>
            </div>
          </div>

          {/* CTAs + meta */}
          <div className="hero-anim hero-anim-4 text-center min-[821px]:col-start-1 min-[821px]:row-start-2 min-[821px]:text-left">
            <div className="mb-4 flex flex-col items-center gap-2.5 min-[481px]:flex-row min-[481px]:flex-wrap min-[481px]:justify-center min-[821px]:justify-start">
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-green w-full max-w-[300px] px-[18px] py-[11px] text-sm min-[481px]:w-auto min-[481px]:max-w-none"
              >
                💬 Hablá por WhatsApp
              </a>
              <a
                href="#reservar"
                className="btn btn-ghost w-full max-w-[300px] px-[18px] py-[11px] text-sm min-[481px]:w-auto min-[481px]:max-w-none"
              >
                📅 Reunión sin cargo
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-3.5 border-t border-white/15 pt-4 text-xs text-white/70 min-[821px]:justify-start">
              <span>📍 Guaymallén, Mendoza</span>
              <span>📞 {SITE.phoneDisplay}</span>
              <span>🕗 L–V 9:00–18:00 hs</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
