import "./globals.css";
import type { Metadata } from "next";
import { Archivo, Source_Sans_3 } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import SiteNav from "./ui/site-nav";
import SiteFooter from "./ui/site-footer";

/**
 * SUBSTITUTION NOTE — no font binaries were supplied with the brand material.
 * The booklet specifies Arial for submitted copy and sets its headings in a
 * plain grotesque. Archivo is the nearest open substitute for the display
 * voice (the summit logotype); Source Sans 3 carries body copy at the density
 * the booklet uses. Swap both here if the Ministry supplies licensed files.
 */
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-archivo",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-source-sans",
  display: "swap",
});

const DESCRIPTION =
  "The 9th National ICT Summit runs 12–16 October 2026 at the Ongwediva Trade Centre, Oshana Region, under the theme “Harnessing ICT for Inclusive Growth: Digital Pathways to Reduce Unemployment and Eradicate Poverty.”";

export const metadata: Metadata = {
  metadataBase: new URL("https://ictsummit.gov.na"),
  title: {
    default: "National ICT Summit Namibia",
    template: "%s · National ICT Summit Namibia",
  },
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    url: "https://ictsummit.gov.na",
    title: "National ICT Summit Namibia",
    description: DESCRIPTION,
    siteName: "National ICT Summit Namibia",
  },
  twitter: {
    card: "summary",
    title: "National ICT Summit Namibia",
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${sourceSans.variable}`}>
      <GoogleTagManager gtmId="G-Z5TFLQX8GP" />

      <body className="antialiased">
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
