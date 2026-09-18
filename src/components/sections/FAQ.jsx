import Container from "@/components/Container";
import { FAQS } from "@/lib/seo";

export default function FAQ() {
  return (
    <section id="faq" className="bg-light">
      <Container className="py-12 sm:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label mb-2.5 text-[11px]">
            Preguntas frecuentes
          </span>
          <h2 className="text-[clamp(20px,4vw,34px)] font-extrabold leading-tight text-azul">
            Preguntas sobre el estudio contable en Mendoza
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-[740px] space-y-2">
          {FAQS.map((f, i) => (
            <details
              key={f.q}
              open={i === 0}
              className="group overflow-hidden rounded-lg border border-border bg-white transition hover:border-celeste/40 open:shadow-[0_6px_20px_rgba(10,31,60,0.08)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-[18px] py-[15px] text-sm font-semibold text-text transition group-open:bg-light [&::-webkit-details-marker]:hidden">
                {f.q}
                <span
                  className="shrink-0 text-celeste transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                >
                  ▾
                </span>
              </summary>
              <p className="bg-light px-[18px] pb-[18px] text-sm leading-[1.75] text-muted">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
