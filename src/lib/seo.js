export const SITE = {
    name: "Estudio Contable en Mendoza | Contador Matriculado",
    domain: "https://www.estudio-contable-mendoza.com.ar",
    phoneE164: "+542615740182",
    phoneDisplay: "2615 74-0182",
    email: "cpnvalinas@gmail.com", // reemplazar
    addressLocality: "Mendoza",
    addressRegion: "Mendoza",
    addressCountry: "AR",
    brandPerson: "Cr. Dario Vallinas – C.P.C.E.M.D.Z",
    description:
        "Estudio Contable en Mendoza. Atención directa con Contador Público Matriculado en el C.P.C.E.M.D.Z. Consultá por WhatsApp o reservá una reunión sin cargo.",
    ogImage: "/og.jpg", // agregá una imagen 1200x630
};

export function buildJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: SITE.name,
        url: SITE.domain,
        areaServed: {
            "@type": "AdministrativeArea",
            name: "Provincia de Mendoza",
        },
        description: SITE.description,
        telephone: SITE.phoneE164,
        email: SITE.email,
        address: {
            "@type": "PostalAddress",
            addressLocality: SITE.addressLocality,
            addressRegion: SITE.addressRegion,
            addressCountry: SITE.addressCountry,
        },
        sameAs: [],
    };
}
