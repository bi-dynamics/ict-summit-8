import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://ictsummit.gov.na"),
  title: "ICT Summit Namibia",
  description:
    "Join us for the 8th National ICT Summit, scheduled for 9 - 11 September, 2024. Located at Mercure Hotel Windhoek, Namibia.",
  openGraph: {
    type: "website",
    url: "https://ictsummit.gov.na",
    title: "ICT Summit Namibia",
    description:
      "Join us for the 8th National ICT Summit, scheduled for 9 - 11 September, 2024. Located at Mercure Hotel Windhoek, Namibia.",
    siteName: "ICT Summit Namibia",
  },
  twitter: {
    card: "summary",
    title: "ICT Summit Namibia",

    description:
      "Join us for the 8th National ICT Summit, scheduled for 9 - 11 September, 2024. Located at Mercure Hotel Windhoek, Namibia.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
