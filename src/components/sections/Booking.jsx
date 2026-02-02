import Container from "@/components/Container";
import ContactCTAs from "../ContactCTAs";

export default function Booking() {
  return (
    <section id="reservar" className=" ">
      <Container className="py-14">
        <div className="rounded-3xl border border-celeste  p-6 shadow-soft sm:p-10">
          <div className="mt-8 grid gap-2">
            <h2 className="text-2xl font-extrabold text-azul">
              Reservá tu turno de atención online
            </h2>
            <div className="rounded-2xl  p-5">
              <section className="">
                <p className="mt-3 text-[rgb(var(--muted))]">
                  Elegí el día y horario que mejor te quede. ¡Click en Consulta!
                </p>

                <div className="mt-8 overflow-hidden rounded-2xl bg-white/70 backdrop-blur shadow-[0_12px_35px_rgba(15,23,42,0.10)]">
                  <iframe
                    title="Calendly - Reserva"
                    src="https://calendly.com/contador-publico-matriculado-mendoza"
                    className="h-[720px] w-full"
                    frameBorder="0"
                    loading="lazy"
                  />
                  <div className="rounded-2xl border-2 border-celeste m-5 p-4">
                    <p className="text-sm font-semibold text-azul text-center uppercase">
                      Qué vas a obtener en 15 minutos
                    </p>
                    <ul className="mt-3 grid gap-2 text-sm text-text text-center">
                      <li>• Diagnóstico simple de tu situación</li>
                      <li>• Qué pasos seguir (y qué evitar)</li>
                      <li>• Opciones para regularizar / ordenar</li>
                      <li>• Claridad para decidir sin miedo</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
