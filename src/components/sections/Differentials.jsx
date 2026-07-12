import Container from "@/components/Container";
import { SITE } from "@/lib/seo";

const bullets = [
  {
    title: "Hablás directo con el contador público",
    desc: "Sin intermediarios, sin derivaciones. Tu caso lo maneja el Cr. Vallinas personalmente.",
  },
  {
    title: "No derivamos tu caso a terceros",
    desc: "Atención 100% personalizada de principio a fin.",
  },
  {
    title: "Te decimos la verdad, aunque no sea lo que esperás",
    desc: "Asesoramiento honesto. Sin promesas vacías ni demoras innecesarias.",
  },
  {
    title: "Enfoque práctico: soluciones, no discursos",
    desc: "Salís de cada reunión con pasos concretos a seguir.",
  },
  {
    title: "Especialistas en normativa nacional y provincial de Mendoza",
    desc: "AFIP, ARCA, ATM Mendoza, Ingresos Brutos. Todo cubierto.",
  },
  {
    title: "Matrícula 9156 — C.P.C.E.M.D.Z.",
    desc: "Responsabilidad profesional y cumplimiento normativo garantizados.",
  },
];

const miniCards = [
  {
    t: "🏅 Contador matriculado",
    d: "Respaldo profesional ante AFIP, ARCA y ATM Mendoza.",
  },
  {
    t: "⚡ Respuesta rápida",
    d: "Te avisamos antes de cada vencimiento importante.",
  },
  {
    t: "📱 Online y Presencial",
    d: "Atendemos donde más te convenga, sin complicaciones.",
  },
  {
    t: "🎯 Foco en Mendoza",
    d: "Especialización en ATM, IIBB provincial y Rentas Mendoza.",
  },
];

export default function Differentials() {
  return (
    <section id="diferencial">
      <Container className="py-16 sm:py-20">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <span className="section-label">Por qué elegirnos</span>
            <h2 className="mt-2 text-2xl font-extrabold text-azul sm:text-3xl">
              ¿Por qué elegir nuestro estudio contable en Mendoza?
            </h2>

            <ul className="mt-8 space-y-5">
              {bullets.map((b) => (
                <li
                  key={b.title}
                  className="reveal-item flex items-start gap-3.5"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#dcfce7] text-[13px] font-extrabold text-[#16a34a]">
                    ✓
                  </span>
                  <div>
                    <p className="text-[15px] font-bold text-text">
                      {b.title}
                    </p>
                    <p className="text-sm text-muted">{b.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="grid gap-3.5 sm:grid-cols-2">
              {miniCards.map((c) => (
                <div
                  key={c.t}
                  className="reveal-item rounded-xl border border-border bg-light p-4.5 transition duration-200 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(10,31,60,0.10)]"
                >
                  <p className="text-sm font-bold text-azul">{c.t}</p>
                  <p className="mt-1 text-[13px] text-muted">{c.d}</p>
                </div>
              ))}
            </div>

            {/* Rating — debe coincidir con la ficha de Google Business Profile */}
            <div className="reveal-item mt-5 flex items-center gap-5 rounded-xl border border-border bg-light p-5">
              <div>
                <p className="text-4xl font-black leading-none text-azul">
                  {SITE.rating}
                </p>
                <p className="mt-1 text-xl text-gold" aria-hidden="true">
                  ★★★★★
                </p>
                <p className="text-xs text-muted">calificación en Google</p>
              </div>
              <a
                href={SITE.reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-celeste underline transition hover:opacity-75"
              >
                Ver todas las reseñas →
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
