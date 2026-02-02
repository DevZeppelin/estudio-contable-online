import Container from "@/components/Container";

const places = [
  "Mendoza Capital",
  "Godoy Cruz",
  "Guaymallén",
  "Las Heras",
  "Luján de Cuyo",
  "Maipú",
  "San Rafael",
  "Valle de Uco",
  "y toda la provincia",
];

export default function Locations() {
  return (
    <section className="">
      <Container className="py-14">
        <h2 className="text-2xl font-extrabold text-azul">
          Estudio Contable en Mendoza – Atención Online
        </h2>
        <p className="mt-3 text-muted">Atendemos clientes en:</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {places.map((p) => (
            <span
              key={p}
              className="rounded-full border border-celeste  px-3 py-1 text-sm text-azul"
            >
              {p}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
