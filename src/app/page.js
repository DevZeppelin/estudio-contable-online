import Script from "next/script";
import { buildJsonLd } from "@/lib/seo";

import Hero from "@/components/sections/Hero";
import Problems from "@/components/sections/Problems";
import Services from "@/components/sections/Services";
import Differentials from "@/components/sections/Differentials";
import Authority from "@/components/sections/Authority";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Booking from "@/components/sections/Booking";
import MicroCTAs from "@/components/sections/MicroCTAs";
import Locations from "@/components/sections/Locations";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata = {
  title: "Estudio Contable en Mendoza",
  alternates: { canonical: "/" },
};

export default function Page() {
  const jsonLd = buildJsonLd();

  return (
    <>
      <Script
        id="jsonld-professionalservice"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Problems />
      <Services />
      <Differentials />
      <Authority />
      <Testimonials />
      <FAQ />
      <Booking />
      <Locations />
      <FinalCTA />
    </>
  );
}
