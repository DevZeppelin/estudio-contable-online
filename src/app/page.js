import { buildJsonLd, buildFaqJsonLd, SITE } from "@/lib/seo";

import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";
import Arca from "@/components/sections/Arca";
import Differentials from "@/components/sections/Differentials";
import Testimonials from "@/components/sections/Testimonials";
import Ubicacion from "@/components/sections/Ubicacion";
import FAQ from "@/components/sections/FAQ";
import Booking from "@/components/sections/Booking";
import Locations from "@/components/sections/Locations";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata = {
  title: SITE.title,
  alternates: { canonical: "/" },
};

export default function Page() {
  const jsonLd = buildJsonLd();
  const faqJsonLd = buildFaqJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <Process />
      <Services />
      <Arca />
      <Differentials />
      <Testimonials />
      <Ubicacion />
      <FAQ />
      <Booking />
      <Locations />
      <FinalCTA />
    </>
  );
}
