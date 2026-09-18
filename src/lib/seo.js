export const SITE = {
    name: "Estudio Contable en Mendoza – Dr. Darío Vallinas",
    title: "Estudio Contable en Mendoza | Dr. Darío Vallinas — Mat. 9156",
    domain: "https://www.estudio-contable-mendoza.com.ar",
    phoneE164: "+542615740182",
    phoneDisplay: "261-574-0182",
    whatsappUrl: "https://wa.me/542615740182",
    email: "cpnvallinas@gmail.com",
    streetAddress: "Av. Bandera de los Andes 3170",
    addressLocality: "Guaymallén",
    addressRegion: "Mendoza",
    postalCode: "5521",
    addressCountry: "AR",
    openingHours: "Lunes a Viernes, 9:00–18:00 hs",
    brandPerson: "Dr. Darío Vallinas",
    matricula: "Mat. 9156 C.P.C.E.M.D.Z.",
    rating: "5.0",
    ratingCount: "66",
    reviewsUrl: "https://share.google/7I8WHYBVwJUwINk0h",
    mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Contador+P%C3%BAblico+Matriculado+en+Mendoza+Dario+Vallinas",
    calendlyUrl: "https://calendly.com/contador-publico-matriculado-mendoza",
    description:
        "Estudio Contable en Mendoza. Contador Público Mat. 9156. Monotributistas, PyMEs y asesoramiento ARCA en Mendoza. Reunión orientativa sin cargo — Guaymallén.",
    ogDescription:
        "Estudio Contable en Mendoza. Contador Público Mat. 9156. Monotributistas, PyMEs y asesoramiento ARCA. Reunión sin cargo — Guaymallén.",
    ogImage: "/og.jpg",
    geo: {
        region: "AR-M",
        placename: "Guaymallén, Mendoza, Argentina",
        lat: -32.8897,
        lng: -68.8271,
    },
};

export function buildJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "AccountingService",
        name: SITE.name,
        alternateName: [
            "Contador Público Darío Vallinas",
            "Contador en Mendoza Vallinas",
        ],
        url: SITE.domain,
        telephone: SITE.phoneE164,
        email: SITE.email,
        description:
            "Estudio contable en Mendoza especializado en monotributistas, autónomos, responsables inscriptos y PyMEs. Asesoramiento ante ARCA. Contador Público Matriculado Mat. 9156 C.P.C.E.M.D.Z.",
        address: {
            "@type": "PostalAddress",
            streetAddress: SITE.streetAddress,
            addressLocality: SITE.addressLocality,
            addressRegion: SITE.addressRegion,
            postalCode: SITE.postalCode,
            addressCountry: SITE.addressCountry,
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: SITE.geo.lat,
            longitude: SITE.geo.lng,
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
        hasMap: SITE.mapsUrl,
        sameAs: [
            "https://www.contador-en-mendoza.com.ar",
            "https://www.contadoresya.ar",
        ],
        keywords:
            "contador público Mendoza, estudio contable Mendoza, contador matriculado Mendoza, asesoramiento ARCA Mendoza, monotributo Mendoza, contador PyME Mendoza",
    };
}

// Preguntas frecuentes: misma fuente para la sección FAQ y el schema FAQPage,
// así el texto visible y el JSON-LD nunca se desincronizan.
export const FAQS = [
    {
        q: "¿Cuándo necesito un contador público en Mendoza?",
        a: "Necesitás un contador público en Mendoza cuando empezás una actividad económica, te inscribís en monotributo o responsable inscripto, tenés empleados, recibís intimaciones de ARCA o querés ordenar tus impuestos y evitar multas.",
    },
    {
        q: "¿Qué pasa si recibo una intimación de ARCA en Mendoza?",
        a: "Analizamos tu situación, calculamos el monto real con intereses y te presentamos las opciones: plan de pago ARCA, moratoria vigente o regularización voluntaria. El objetivo es resolver tu deuda de la forma más conveniente y evitar que escale a ejecución fiscal.",
    },
    {
        q: "¿Atienden monotributistas y autónomos?",
        a: "Sí. Trabajamos con monotributistas, autónomos y profesionales independientes en Mendoza. Inscripción, recategorización, liquidación mensual y asesoramiento permanente ante ARCA.",
    },
    {
        q: "¿También trabajan con empresas y PYMES?",
        a: "Sí. Nuestro estudio contable en Mendoza asesora a PYMES y sociedades en liquidación de impuestos, sueldos, balances y planificación fiscal. Atención directa del Dr. Vallinas.",
    },
    {
        q: "¿Puedo hacer una consulta antes de contratar?",
        a: "Sí. Podés agendar una reunión orientativa sin cargo para analizar tu caso puntual antes de tomar una decisión. Sin compromiso de contratación.",
    },
    {
        q: "¿Atienden de forma presencial o online?",
        a: "Brindamos atención online y presencial en Mendoza. Muchos clientes eligen WhatsApp o videollamada por practicidad. También atendemos presencialmente en Guaymallén, Mendoza.",
    },
    {
        q: "¿Cómo empiezo a trabajar con el estudio contable?",
        a: "Envianos un mensaje por WhatsApp o agendá una reunión orientativa sin cargo. Analizamos tu situación y te damos una propuesta clara con el honorario exacto. Nos ocupamos de todo el proceso.",
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
