import "@/src/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata = {
  title: "Cloudworks Global | Technical Solutions, APIs & Headless Engineering",
  description: "Ingeniería de integraciones críticas, orquestación de APIs en Python, microservicios de backend y storefronts en Next.js de alta conversión.",
  openGraph: {
    title: "Cloudworks Global | Technical Solutions & E-Commerce Engineering",
    description: "Ecosistemas autónomos, automatizaciones de CRM (HubSpot) e infraestructura escalable sin intermediarios de agencias.",
    url: "https://cloudworksglobal.tech",
    siteName: "Cloudworks Global",
    locale: "es_AR",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-[#020617] text-white antialiased selection:bg-[#49c5b6] selection:text-white" suppressHydrationWarning>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
