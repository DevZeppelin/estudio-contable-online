export const SITE = {
    name: "100% Online – Estudio Contable en Mendoza",
    domain: "https://www.estudio-contable-mendoza.com.ar",
    phoneE164: "+542615740182",
    phoneDisplay: "2615 74-0182",
    email: "cpnvalinas@gmail.com", // reemplazar
    addressLocality: "Mendoza",
    addressRegion: "Mendoza",
    addressCountry: "AR",
    brandPerson: "Cr. Dario Vallinas – C.P.C.E.M.D.Z",
    description:
        "Estudio Contable en Mendoza 100% online. Resolvé AFIP/ARCA, ATM, impuestos y desorden contable en una reunión clara y práctica. Atención directa con contador público.",
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
