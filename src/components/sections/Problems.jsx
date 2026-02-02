import Container from "@/components/Container";

const items = [
  "ARCA o ATM te reclaman deudas, multas o presentaciones",
  "No sabés si estás pagando bien tus impuestos o estás pagando de más",
  "Sos monotributista y tenés miedo de pasarte de categoría",
  "Sos responsable inscripto y no entendés IVA o Ganancias",
  "Tenés un emprendimiento y todo lo contable está desordenado",
  "Querés iniciar un negocio y no sabés cómo arrancar",
];

export default function Problems() {
  return (
    <section className="">
      <Container className="py-14">
        <h2 className="text-2xl font-extrabold text-azul">
          ¿Te pasa alguna de estas situaciones?
        </h2>
        <p className="mt-3 max-w-3xl text-muted">
          👉 Todo esto se puede analizar y ordenar en una sola reunión.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((t) => (
            <div
              key={t}
              className="rounded-2xl border border-celeste  p-5 shadow-soft"
            >
              <p className="text-sm text-text">{t}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <a
            href="#reservar"
            className="inline-flex btn items-center justify-center rounded-xl  px-5 py-3 text-sm font-semibold text-bg shadow-soft hover:opacity-95"
          >
            Reservar reunión y resolverlo
          </a>
        </div>
      </Container>
    </section>
  );
}
