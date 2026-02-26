import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Crawfish Shack | Fresh Cajun Crawfish in Pensacola, FL",
  description:
    "Fresh cajun-style boiled crawfish and seafood in Pensacola, FL. Family-owned, open daily. Pickup and delivery available. Humble Shack, Huge Flavor.",
  keywords: [
    "crawfish",
    "crawfish pensacola",
    "cajun crawfish",
    "boiled crawfish",
    "crawfish shack",
    "pensacola seafood",
    "cajun food pensacola",
    "live crawfish",
    "crawfish delivery pensacola",
    "seafood pensacola fl",
  ],
  openGraph: {
    title: "Crawfish Shack | Fresh Cajun Crawfish in Pensacola, FL",
    description:
      "Fresh cajun-style boiled crawfish and seafood in Pensacola, FL. Family-owned, open daily.",
    url: "https://shack.cameronwblair.com",
    siteName: "Crawfish Shack",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/logo.svg",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
