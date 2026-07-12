import Container from "@/components/Container";
import { SITE } from "@/lib/seo";

const items = [
  "ARCA o ATM te reclaman deudas, multas o presentaciones pendientes",
  "No sabés si estás pagando bien tus impuestos o pagando de más",
  "Sos monotributista y tenés miedo de pasarte de categoría",
  "Sos responsable inscripto y no entendés IVA o Ganancias",
  "Tenés un emprendimiento y todo lo contable está desordenado",
  "Querés iniciar un negocio y no sabés cómo arrancar fiscalmente",
];

export default function Problems() {
  return (
    <section id="problemas">
      <Container className="py-16 sm:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <span className="section-label">¿Te identificás?</span>
            <h2 className="mt-2 text-2xl font-extrabold text-azul sm:text-3xl">
              ¿Te pasa alguna de estas situaciones?
            </h2>

            <ul className="mt-7 space-y-2.5">
              {items.map((t) => (
                <li
                  key={t}
                  className="reveal-item flex items-start gap-3 rounded-lg border-l-[3px] border-celeste bg-light px-4 py-3.5 text-[15px] text-text transition duration-200 hover:translate-x-1 hover:shadow-[0_6px_18px_rgba(10,31,60,0.08)]"
                >
                  <span aria-hidden="true">👉</span>
                  {t}
                </li>
              ))}
            </ul>

            <p className="mt-5 rounded-lg border border-[#fde047] bg-[#fefce8] px-4 py-3.5 text-center text-sm font-semibold text-[#854d0e]">
              👉 Todo esto se puede analizar y resolver en una sola reunión con
              el contador
            </p>

            <a href="#reservar" className="btn mt-6">
              Reservar reunión y resolverlo
            </a>
          </div>

          {/* Aside oscuro */}
          <div className="reveal-item rounded-xl bg-azul p-8 text-white shadow-[0_8px_40px_rgba(0,0,0,0.14)]">
            <h3 className="text-xl font-bold">Nuestro proceso es simple</h3>
            <p className="mt-2 text-sm text-white/75">
              Sin trámites complicados, sin demoras innecesarias.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/90">
              {[
                "Monotributistas",
                "Responsables inscriptos",
                "Profesionales y autónomos",
                "Emprendedores",
                "Empresas y PYMES",
              ].map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <span className="font-bold text-verde" aria-hidden="true">
                    ·
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-green mt-7 w-full"
            >
              💬 Consultar por WhatsApp
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
