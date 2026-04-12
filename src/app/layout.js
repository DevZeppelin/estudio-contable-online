import "../styles/globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/seo";
import { Inter, Sora } from "next/font/google";
import Script from "next/script";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

import { GoogleTagManager } from "@next/third-parties/google"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

export const metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: "Estudio Contable en Mendoza 🌟 Contador Público Matriculado",
    template: "%s | Estudio Contable en Mendoza",
  },
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE.domain,
    title: "Estudio Contable en Mendoza 🌟 Contador Público Matriculado",
    description: SITE.description,
    siteName: SITE.name,
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: SITE.name }],
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Estudio Contable en Mendoza 🌟 Contador Público Matriculado",
    description: SITE.description,
    images: [SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-AR">
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WXQ3JNXK');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${sora.variable}`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WXQ3JNXK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>


        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus: focus:px-4 focus:py-2 focus:shadow-soft"
        >
          Saltar al contenido
        </a>

        <Header />

        <main id="contenido">{children}</main>
        <WhatsAppFloatingButton
          phone="542615740182"
          message="Hola! Quiero hacer una consulta."
        />
        <Footer />
      </body>
    </html>
  );
}
