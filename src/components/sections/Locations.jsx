import Container from "@/components/Container";

const places = [
  "Contador en Godoy Cruz",
  "Contador en Las Heras",
  "Contador en Luján de Cuyo",
  "Contador en Maipú",
  "Contador en Guaymallén",
  "Contador en San Martín",
  "Contador en San Rafael",
  "Asesoramiento ARCA Mendoza",
  "Monotributistas Mendoza",
  "Contador para PyMEs Mendoza",
  "Contador online Mendoza",
  "Estudio contable Guaymallén",
];

export default function Locations() {
  return (
    <section id="cobertura" className="bg-light">
      <Container className="py-12 text-center sm:py-16">
        <span className="section-label mb-2.5 text-[11px]">Cobertura</span>
        <h2 className="mb-10 text-[clamp(20px,4vw,34px)] font-extrabold leading-tight text-azul">
          Contador Público en Mendoza — Atención online para toda la provincia
        </h2>

        <div className="mx-auto flex max-w-[820px] flex-wrap justify-center gap-2">
          {places.map((p) => (
            <span
              key={p}
              className="rounded-full border border-border bg-white px-3 py-1 text-xs text-muted transition duration-200 hover:-translate-y-0.5 hover:border-celeste hover:text-celeste"
            >
              {p}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
