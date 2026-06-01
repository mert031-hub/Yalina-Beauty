import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum – Yalina Beauty",
  description: "Impressum der Yalina Beauty – Beauty Studio in Senden, Bayern.",
  robots: { index: false, follow: false },
};

export default function Impressum() {
  return (
    <div style={{ background: "#FDF9F5", minHeight: "100vh" }}>
      {/* Header */}
      <div
        className="py-12 px-4"
        style={{
          background: "linear-gradient(135deg, #B76E79 0%, #9E4F5C 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm mb-6 transition-opacity hover:opacity-70"
            style={{ color: "rgba(253,249,245,0.7)", fontFamily: "var(--font-raleway), sans-serif" }}
          >
            ← Zurück zur Startseite
          </Link>
          <h1
            className="text-4xl sm:text-5xl font-semibold italic"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#FDF9F5" }}
          >
            Impressum
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div
          className="p-8 rounded-2xl mb-8"
          style={{
            background: "#FEFAF7",
            border: "1px solid #E8D5C4",
          }}
        >
          <div
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
            style={{
              background: "#F2C4CE",
              color: "#B76E79",
              fontFamily: "var(--font-raleway), sans-serif",
            }}
          >
            ⚠ Hinweis für die Inhaberin
          </div>
          <p
            className="text-sm leading-relaxed mb-4"
            style={{ color: "#5C4033", fontFamily: "var(--font-raleway), sans-serif" }}
          >
            Diese Seite ist ein Platzhalter. Als Betreiberin einer gewerblichen Website
            in Deutschland bist du nach § 5 TMG (Telemediengesetz) verpflichtet,
            ein vollständiges Impressum anzugeben.
          </p>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "#5C4033", fontFamily: "var(--font-raleway), sans-serif" }}
          >
            Bitte ergänze die folgenden Pflichtangaben durch die endgültigen Informationen:
          </p>
        </div>

        <div
          className="prose prose-sm max-w-none"
          style={{ fontFamily: "var(--font-raleway), sans-serif", color: "#3D2B1F" }}
        >
          <h2
            className="text-2xl font-semibold italic mb-4"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#B76E79" }}
          >
            Angaben gemäß § 5 TMG
          </h2>

          <div
            className="p-6 rounded-xl mb-6"
            style={{ background: "#F7E7CE", border: "1px solid #E8D5C4" }}
          >
            <p className="text-sm mb-2" style={{ color: "#3D2B1F" }}>
              <strong>Name:</strong> Inna [Nachname bitte ergänzen]
            </p>
            <p className="text-sm mb-2" style={{ color: "#3D2B1F" }}>
              <strong>Studio:</strong> Yalina Beauty
            </p>
            <p className="text-sm mb-2" style={{ color: "#3D2B1F" }}>
              <strong>Anschrift:</strong> [Vollständige Adresse bitte ergänzen], Senden, Bayern, Deutschland
            </p>
            <p className="text-sm mb-2" style={{ color: "#3D2B1F" }}>
              <strong>Telefon:</strong> [Telefonnummer bitte ergänzen]
            </p>
            <p className="text-sm mb-2" style={{ color: "#3D2B1F" }}>
              <strong>E-Mail:</strong>{" "}
              <a href="mailto:yalina.beauty@web.de" style={{ color: "#B76E79" }}>
                yalina.beauty@web.de
              </a>
            </p>
          </div>

          <h2
            className="text-2xl font-semibold italic mb-4"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#B76E79" }}
          >
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <p className="text-sm mb-6" style={{ color: "#5C4033" }}>
            Inna [Nachname bitte ergänzen], [Adresse wie oben]
          </p>

          <h2
            className="text-2xl font-semibold italic mb-4"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#B76E79" }}
          >
            Haftungsausschluss
          </h2>
          <p className="text-sm mb-6 leading-relaxed" style={{ color: "#5C4033" }}>
            Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt.
            Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehme
            ich jedoch keine Gewähr.
          </p>

          <h2
            className="text-2xl font-semibold italic mb-4"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#B76E79" }}
          >
            Urheberrecht
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "#5C4033" }}>
            Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen
            dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung
            und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts
            bedürfen der schriftlichen Zustimmung der Inhaberin.
          </p>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #B76E79 0%, #9E4F5C 100%)",
              color: "#FDF9F5",
              fontFamily: "var(--font-raleway), sans-serif",
              letterSpacing: "0.1em",
            }}
          >
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}
