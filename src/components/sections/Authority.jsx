import Container from "@/components/Container";

export default function Authority() {
  return (
    <section className="">
      <Container className="py-14">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-extrabold text-azul">
              Atención profesional, clara y responsable
            </h2>
            <p className="mt-3 text-muted">
              Somos un estudio contable especializado en atención online,
              enfocado en ayudar a personas, profesionales y empresas de Mendoza
              a resolver problemas contables e impositivos de forma rápida y
              ordenada.
            </p>
            <p className="mt-3 text-muted">
              Trabajamos con compromiso, confidencialidad y una forma de
              explicar pensada para personas reales, no para contadores.
            </p>
          </div>

          <aside className="rounded-3xl border border-celeste  p-6 shadow-soft">
            <p className="text-sm font-semibold text-azul">Confianza</p>
            <ul className="mt-4 grid gap-2 text-sm text-text">
              <li>• Reunión de 15 minutos</li>
              <li>• Plan de acción claro</li>
              <li>• Confidencialidad</li>
              <li>• Atención Mendoza (provincia)</li>
            </ul>
            <a
              href="#reservar"
              className="mt-6 btn inline-flex w-full items-center justify-center rounded-xl  px-5 py-3 text-sm font-semibold text-bg shadow-soft hover:opacity-95"
            >
              Reservar turno
            </a>
          </aside>
        </div>
      </Container>
    </section>
  );
}
