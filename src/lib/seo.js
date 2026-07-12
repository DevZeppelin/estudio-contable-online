export const SITE = {
    name: "Estudio Contable en Mendoza | Contador Matriculado",
    title: "Estudio Contable en Mendoza | Contador Público Matriculado",
    domain: "https://www.estudio-contable-mendoza.com.ar",
    phoneE164: "+542615740182",
    phoneDisplay: "+54 9 261 574-0182",
    whatsappUrl: "https://wa.me/542615740182",
    email: "cpnvallinas@gmail.com",
    streetAddress: "Av. Bandera de los Andes 3170",
    addressLocality: "Guaymallén",
    addressRegion: "Mendoza",
    postalCode: "5521",
    addressCountry: "AR",
    openingHours: "Lunes a Viernes, 9:00 – 18:00",
    brandPerson: "Cr. Darío Vallinas",
    matricula: "Matrícula 9156 · C.P.C.E.M.D.Z.",
    // ⚠️ Verificar que rating y cantidad coincidan con la ficha real de
    // Google Business Profile antes de publicar.
    rating: "5.0",
    ratingCount: "56",
    reviewsUrl: "https://share.google/7I8WHYBVwJUwINk0h",
    calendlyUrl: "https://calendly.com/contador-publico-matriculado-mendoza",
    description:
        "Estudio Contable en Mendoza. Contador Público Matriculado en C.P.C.E.M.D.Z. Asesoramiento para monotributistas, autónomos y PyMEs. Reunión orientativa sin cargo. Consultá ya.",
    ogImage: "/og.jpg",
};

export function buildJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "AccountingService",
        name: "Estudio Contable en Mendoza – Dario Vallinas",
        alternateName: "Contador Público Darío Vallinas",
        url: SITE.domain,
        telephone: SITE.phoneE164,
        email: SITE.email,
        description:
            "Estudio contable en Mendoza especializado en monotributistas, autónomos, responsables inscriptos y PyMEs. Asesoramiento contable e impositivo directo con Contador Público Matriculado en el C.P.C.E.M.D.Z.",
        address: {
            "@type": "PostalAddress",
            streetAddress: SITE.streetAddress,
            addressLocality: SITE.addressLocality,
            addressRegion: SITE.addressRegion,
            postalCode: SITE.postalCode,
            addressCountry: SITE.addressCountry,
        },
        openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
        },
        priceRange: "$$",
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: SITE.rating,
            bestRating: "5",
            ratingCount: SITE.ratingCount,
        },
        areaServed: {
            "@type": "AdministrativeArea",
            name: "Mendoza, Argentina",
        },
    };
}

// Preguntas frecuentes: misma fuente para la sección FAQ y el schema FAQPage,
// así el texto visible y el JSON-LD nunca se desincronizan.
export const FAQS = [
    {
        q: "¿Cuándo necesito un contador en Mendoza?",
        a: "Necesitás un contador en Mendoza cuando empezás una actividad económica, te inscribís en monotributo o responsable inscripto, tenés empleados, recibís intimaciones de ARCA o querés ordenar tus impuestos. Un estudio contable te ayuda a evitar multas, pagar lo correcto y planificar mejor tu negocio.",
    },
    {
        q: "¿Atienden monotributistas y autónomos?",
        a: "Sí. Trabajamos con monotributistas, autónomos y profesionales independientes en Mendoza. Nos encargamos de inscripción, recategorización, presentación mensual y asesoramiento para que pagues lo justo y evités problemas con AFIP.",
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
        a: "Sí. Podés agendar una reunión orientativa sin cargo para analizar tu caso puntual. Evaluamos tu situación y te explicamos cómo podemos ayudarte antes de que tomes una decisión.",
    },
    {
        q: "¿Atienden de forma presencial o online?",
        a: "Brindamos atención online y también reuniones presenciales coordinadas en Mendoza. Muchos clientes eligen resolver todo por WhatsApp o videollamada porque ahorra tiempo y es más práctico.",
    },
    {
        q: "¿Cómo empiezo a trabajar con el estudio contable?",
        a: "Es muy simple. Podés enviarnos un mensaje por WhatsApp o agendar una reunión orientativa sin cargo. Analizamos tu situación y te indicamos los pasos para comenzar. Nos ocupamos de todo el proceso para que no tengas que preocuparte.",
    },
];

export function buildFaqJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map(({ q, a }) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
        })),
    };
}
