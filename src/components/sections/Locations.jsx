import Container from "@/components/Container";

const places = [
  "Mendoza Capital",
  "Godoy Cruz",
  "Guaymallén",
  "Las Heras",
  "Luján de Cuyo",
  "Maipú",
  "San Martín",
  "Junín",
  "Rivadavia",
  "La Paz",
  "Santa Rosa",
  "San Rafael",
  "General Alvear",
  "Malargüe",
  "Tunuyán",
  "Tupungato",
  "San Carlos",
  "Valle de Uco",
  "Chacras de Coria",
  "Palmira",
  "Agrelo",
  "Vistalba",
  "Cacheuta",
  "Potrerillos",
  "Uspallata",
  "Bowen",
  "Real del Padre",
  "y toda la provincia",
];

export default function Locations() {
  return (
    <section id="cobertura" className="bg-light">
      <Container className="py-16 text-center sm:py-20">
        <span className="section-label">Zona de atención</span>
        <h2 className="mt-2 text-2xl font-extrabold text-azul sm:text-3xl">
          Estudio Contable en Mendoza — Atención online para toda la provincia
        </h2>

        <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-2">
          {places.map((p) => (
            <span
              key={p}
              className="rounded-full border border-border bg-white px-3.5 py-1.5 text-[13px] text-muted transition duration-200 hover:-translate-y-0.5 hover:border-celeste hover:text-celeste"
            >
              {p}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
