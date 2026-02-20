import Container from "@/components/Container";

const faqs = [
  {
    q: "¿Cuándo necesito un contador en Mendoza?",
    a: "Necesitás un contador en Mendoza cuando empezás una actividad económica, te inscribís en monotributo o responsable inscripto, tenés empleados, recibís intimaciones de ARCA o querés ordenar tus impuestos. Un estudio contable te ayuda a evitar multas, pagar lo correcto y planificar mejor tu negocio.",
  },
  {
    q: "¿Atienden monotributistas y autónomos?",
    a: "Sí. Trabajamos con monotributistas, autónomos y profesionales independientes en Mendoza. Nos encargamos de inscripción, recategorización, presentación mensual y asesoramiento para que pagues lo justo y evites problemas con AFIP.",
  },
  {
    q: "¿También trabajan con empresas y PYMES?",
    a: "Sí. Nuestro estudio contable en Mendoza asesora a PYMES y sociedades en liquidación de impuestos, sueldos, balances, planificación fiscal y cumplimiento de obligaciones ante AFIP y Rentas Mendoza.",
  },
  {
    q: "¿Qué pasa si tengo una deuda con ARCA?",
    a: "Primero analizamos tu situación. Luego te explicamos claramente el monto real, intereses y opciones de plan de pago. Nuestro objetivo es regularizar tu situación y devolverte tranquilidad sin que pagues de más.",
  },
  {
    q: "¿Puedo hacer una consulta antes de contratar?",
    a: "Sí. Podés agendar una reunión para analizar tu caso puntual. Evaluamos tu situación y te explicamos cómo podemos ayudarte antes de que tomes una decisión.",
  },
  {
    q: "¿Atienden de forma presencial o online?",
    a: "Brindamos atención online y también reuniones coordinadas. Muchos clientes eligen resolver todo por WhatsApp o videollamada porque ahorra tiempo y es más práctico.",
  },
  {
    q: "¿Cómo empiezo a trabajar con ustedes?",
    a: "Es muy simple. Podés enviarnos un mensaje por WhatsApp o agendar una reunión. Analizamos tu situación y te indicamos los pasos para comenzar. Nos ocupamos de todo el proceso para que no tengas que preocuparte.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className=" ">
      <Container className="py-14">
        <h2 className="text-2xl font-extrabold text-azul">
          Preguntas frecuentes
        </h2>

        <div className="mt-8 grid gap-3 text-xl">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-celeste text-2xl p-5 shadow-soft"
            >
              <summary className="cursor-pointer list-none text-base font-semibold text-azul">
                {f.q}
                <span className="float-right text-muted group-open:rotate-180">
                  ▾
                </span>
              </summary>
              <p className="mt-3 text-base text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
