import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – Yalina Beauty",
  description: "Datenschutzerklärung der Yalina Beauty – Beauty Studio in Senden, Bayern.",
  robots: { index: false, follow: false },
};

export default function Datenschutz() {
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
            Datenschutzerklärung
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
            className="text-sm leading-relaxed"
            style={{ color: "#5C4033", fontFamily: "var(--font-raleway), sans-serif" }}
          >
            Dies ist eine Muster-Datenschutzerklärung. Du bist als Website-Betreiberin
            nach DSGVO verpflichtet, eine vollständige und rechtlich geprüfte
            Datenschutzerklärung bereitzustellen. Bitte lass den finalen Text von
            einem Rechtsanwalt oder über einen DSGVO-Generator erstellen und ergänze
            deine vollständigen Kontaktdaten.
          </p>
        </div>

        <div style={{ fontFamily: "var(--font-raleway), sans-serif", color: "#3D2B1F" }}>

          <section className="mb-10">
            <h2
              className="text-2xl font-semibold italic mb-4"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#B76E79" }}
            >
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="font-semibold mb-2 text-base" style={{ color: "#3D2B1F" }}>Allgemeine Hinweise</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#5C4033" }}>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit
              deinen personenbezogenen Daten passiert, wenn du diese Website besuchst.
              Personenbezogene Daten sind alle Daten, mit denen du persönlich
              identifiziert werden kannst.
            </p>
          </section>

          <section className="mb-10">
            <h2
              className="text-2xl font-semibold italic mb-4"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#B76E79" }}
            >
              2. Verantwortliche Stelle
            </h2>
            <div
              className="p-6 rounded-xl"
              style={{ background: "#F7E7CE", border: "1px solid #E8D5C4" }}
            >
              <p className="text-sm mb-2" style={{ color: "#3D2B1F" }}>
                <strong>Yalina Beauty</strong>
              </p>
              <p className="text-sm mb-2" style={{ color: "#3D2B1F" }}>
                Inna [Nachname bitte ergänzen]
              </p>
              <p className="text-sm mb-2" style={{ color: "#3D2B1F" }}>
                [Adresse bitte ergänzen], Senden, Bayern
              </p>
              <p className="text-sm" style={{ color: "#3D2B1F" }}>
                E-Mail:{" "}
                <a href="mailto:yalina.beauty@web.de" style={{ color: "#B76E79" }}>
                  yalina.beauty@web.de
                </a>
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2
              className="text-2xl font-semibold italic mb-4"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#B76E79" }}
            >
              3. Datenerfassung auf dieser Website
            </h2>
            <h3 className="font-semibold mb-2 text-base" style={{ color: "#3D2B1F" }}>Server-Log-Dateien</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#5C4033" }}>
              Der Hoster dieser Website erhebt und speichert automatisch Informationen
              in sogenannten Server-Log-Dateien, die dein Browser automatisch übermittelt.
              Dies sind: Browsertyp und -version, verwendetes Betriebssystem, Referrer-URL,
              Hostname des zugreifenden Rechners sowie Uhrzeit der Serveranfrage.
            </p>
            <h3 className="font-semibold mb-2 text-base" style={{ color: "#3D2B1F" }}>Kontaktaufnahme</h3>
            <p className="text-sm leading-relaxed" style={{ color: "#5C4033" }}>
              Wenn du uns per E-Mail oder Instagram DM kontaktierst, werden deine
              Angaben zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen
              gespeichert. Diese Daten werden ohne deine Einwilligung nicht an Dritte
              weitergegeben.
            </p>
          </section>

          <section className="mb-10">
            <h2
              className="text-2xl font-semibold italic mb-4"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#B76E79" }}
            >
              4. Externe Links
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#5C4033" }}>
              Diese Website enthält Links zu externen Diensten wie Instagram. Beim
              Aufrufen dieser Links gelten die Datenschutzerklärungen der jeweiligen
              Anbieter. Für die Inhalte und Datenschutzpraktiken externer Seiten
              übernehme ich keine Haftung.
            </p>
          </section>

          <section className="mb-10">
            <h2
              className="text-2xl font-semibold italic mb-4"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#B76E79" }}
            >
              5. Deine Rechte
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#5C4033" }}>
              Du hast jederzeit das Recht auf Auskunft über deine gespeicherten
              personenbezogenen Daten, deren Herkunft und Empfänger sowie den Zweck
              der Datenverarbeitung. Außerdem hast du ein Recht auf Berichtigung,
              Sperrung oder Löschung dieser Daten.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#5C4033" }}>
              Hierzu sowie zu weiteren Fragen zum Thema Datenschutz kannst du dich
              jederzeit unter der im Impressum angegebenen Adresse an mich wenden.
            </p>
          </section>
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
