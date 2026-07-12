import Container from "@/components/Container";
import { FAQS } from "@/lib/seo";

export default function FAQ() {
  return (
    <section id="faq" className="bg-light">
      <Container className="py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">Preguntas frecuentes</span>
          <h2 className="mt-2 text-2xl font-extrabold text-azul sm:text-3xl">
            Dudas sobre nuestro estudio contable en Mendoza
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-2.5">
          {FAQS.map((f) => (
            <details
              key={f.q}
              className="group overflow-hidden rounded-lg border border-border bg-white transition hover:border-celeste/40 open:shadow-[0_6px_20px_rgba(10,31,60,0.08)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-[15px] font-semibold text-text transition group-open:bg-light [&::-webkit-details-marker]:hidden">
                {f.q}
                <span
                  className="shrink-0 text-celeste transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                >
                  ▾
                </span>
              </summary>
              <p className="bg-light px-5 pb-5 text-[15px] leading-relaxed text-muted">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
