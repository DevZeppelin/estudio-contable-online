import Container from "@/components/Container";
import { SITE } from "@/lib/seo";

const bullets = [
  {
    title: "Atención directa — siempre el Dr. Vallinas",
    desc: "Nunca te derivamos a un empleado. En cada consulta hablás con el contador titular.",
  },
  {
    title: "Matrícula vigente verificable",
    desc: "Mat. 9156 en el Consejo Profesional de Ciencias Económicas de Mendoza (C.P.C.E.M.D.Z.).",
  },
  {
    title: "Honorario claro desde el primer momento",
    desc: "Sin sorpresas. El precio se acuerda antes de empezar, no aparece después en la factura.",
  },
  {
    title: "Respuesta el mismo día",
    desc: "WhatsApp directo con el contador. No hay que esperar turnos para preguntar algo urgente.",
  },
  {
    title: "Más de 20 años de experiencia",
    desc: "Conocemos ARCA, ATM, DPJ y todos los organismos provinciales en detalle.",
  },
];

const miniCards = [
  { t: "+20 años", d: "de experiencia contable." },
  { t: "Online 100%", d: "Sin ir a la oficina. WhatsApp o videollamada." },
  { t: "Presencial", d: "Guaymallén, Mendoza. L–V 9–18 hs." },
];

export default function Differentials() {
  return (
    <section id="diferencial">
      <Container className="py-12 sm:py-16">
        <div className="grid items-start gap-7 md:grid-cols-2 md:gap-12">
          <div>
            <span className="section-label text-[11px]">
              ¿Por qué elegirnos?
            </span>
            <h2 className="mb-7 mt-2.5 text-[clamp(20px,4vw,34px)] font-extrabold leading-tight text-azul">
              El contador en Mendoza que trabaja con vos, no para vos
            </h2>

            <ul className="flex flex-col gap-4">
              {bullets.map((b) => (
                <li key={b.title} className="reveal-item flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-[#dcfce7] text-xs font-extrabold text-[#16a34a]"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <div>
                    <strong className="mb-0.5 block text-sm">{b.title}</strong>
                    <span className="text-[13px] text-muted">{b.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-[18px] grid gap-3 min-[641px]:grid-cols-2">
              {miniCards.map((c) => (
                <div
                  key={c.t}
                  className="reveal-item rounded-xl border border-border bg-light p-4"
                >
                  <h4 className="mb-1 text-[13px] font-bold text-azul">
                    {c.t}
                  </h4>
                  <p className="text-xs text-muted">{c.d}</p>
                </div>
              ))}
            </div>

            <div className="reveal-item flex items-center gap-3.5 rounded-xl border border-border bg-light p-[18px]">
              <div className="text-4xl font-black leading-none text-azul">
                {SITE.rating}
              </div>
              <div>
                <div className="text-base text-gold" aria-hidden="true">
                  ⭐⭐⭐⭐⭐
                </div>
                <a
                  href={SITE.reviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] font-bold hover:underline"
                >
                  {SITE.ratingCount} reseñas en Google
                </a>
                <small className="block text-[11px] text-muted">
                  Todos los clientes recomiendan al Dr. Vallinas
                </small>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
