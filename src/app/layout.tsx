import type { Metadata } from "next";
import { Cormorant_Garamond, Raleway } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yalina Beauty – Make-up, Lashes & Brows in Senden, Bayern",
  description:
    "Professionelles Beauty-Studio in Senden, Bayern. Spezialisiert auf Korean Lashlift, Browlift, 1:1 Lashextensions, Bridal Make-Up & Soft Glam. Jetzt Termin anfragen!",
  keywords:
    "Lashlift Senden, Browlift Senden, Wimpernlifting Bayern, Braut Make-up Bayern, Make-up Artist Senden, Beauty Studio Senden, Korean Lashlift, Wimpernverlängerung Senden, Bridal Beauty Bayern",
  authors: [{ name: "Yalina Beauty" }],
  openGraph: {
    title: "Yalina Beauty – Make-up, Lashes & Brows in Senden, Bayern",
    description:
      "Professionelles Beauty-Studio in Senden, Bayern. Korean Lashlift, Browlift, Lashextensions & Bridal Make-Up.",
    url: "https://yalinabeauty.de",
    siteName: "Yalina Beauty",
    locale: "de_DE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://yalinabeauty.de",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Yalina Beauty",
  description:
    "Professionelles Beauty-Studio in Senden, Bayern. Spezialisiert auf Korean Lashlift, Browlift, Lashextensions und Bridal Make-Up.",
  url: "https://yalinabeauty.de",
  email: "yalina.beauty@web.de",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Senden",
    addressRegion: "Bayern",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.325,
    longitude: 10.055,
  },
  sameAs: ["https://www.instagram.com/yalinabeauty/"],
  priceRange: "€€",
  openingHoursSpecification: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Beauty-Leistungen",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Korean Lashlift" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Korean Browlift" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "1:1 Lashextensions" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bridal Make-Up" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Soft Glam Make-Up" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${cormorant.variable} ${raleway.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
