import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Korean Lashlift",
    subtitle: "Lash & Brow Lift",
    description:
      "Natürlich geschwungene Wimpern für bis zu 8 Wochen – ohne Extensions, ohne Kleber. Inkl. Pflegeöl nach Behandlung.",
    image: "/Kirpik1.jpg",
    imageAlt: "Korean Lashlift Behandlung – Yalina Beauty Senden",
    price: "ab 58 €",
  },
  {
    title: "Korean Browlift",
    subtitle: "Lash & Brow Lift",
    description:
      "Perfekt geformte, vollere Brauen mit langanhaltend definiertem Schwung. Inkl. Färbung nach Wunsch & Pflegeöl.",
    image: "/kas1.jpg",
    imageAlt: "Korean Browlift Ergebnis – Yalina Beauty Bayern",
    price: "ab 65 €",
  },
  {
    title: "Korean Kombilift",
    subtitle: "Lash & Brow Lift",
    description:
      "Das Beste aus zwei Welten: Lashlift und Browlift in einer Behandlung. Inkl. Farbe und Zupfen.",
    image: "/Kirpik4.jpg",
    imageAlt: "Korean Kombilift Lash und Brow – Yalina Beauty",
    price: "115 €",
  },
  {
    title: "1:1 Lashextensions",
    subtitle: "Wimpernverlängerung",
    description:
      "Einzelne Wimpernverlängerungen für ein natürlich-glamouröses Ergebnis, das deinen Blick perfekt in Szene setzt.",
    image: "/Kirpik6.jpg",
    imageAlt: "1:1 Lashextensions Classic – Yalina Beauty Senden",
    price: "ab 48 €",
  },
  {
    title: "Bridal Make-Up",
    subtitle: "Braut & Special Occasion",
    description:
      "Strahle an deinem schönsten Tag – Full Face Make-Up mit Fake Lashes und Dekolleté. Perfekt für Hochzeit, Verlobung oder Henna.",
    image: "/bridal-makeup.jpg",
    imageAlt: "Bridal Make-Up Hochzeit – Yalina Beauty Bayern",
    price: "98 €",
  },
  {
    title: "Soft Glam Make-Up",
    subtitle: "Make-Up",
    description:
      "Dezentes Abend-Make-Up für einen eleganten, femininen Look. Ohne Fake Lashes – natürliche Schönheit im Fokus.",
    image: "/soft-glam.jpg",
    imageAlt: "Soft Glam Make-Up Abend-Look – Yalina Beauty",
    price: "58 €",
  },
  {
    title: "Glam Make-Up",
    subtitle: "Make-Up",
    description:
      "Full Face Make-Up mit Fake Lashes für einen unvergesslichen Auftritt. Perfekt für besondere Anlässe.",
    image: "/glam-makeup.avif",
    imageAlt: "Glam Make-Up Full Face – Yalina Beauty Senden",
    price: "68 €",
  },
];

export default function Services() {
  return (
    <section
      id="leistungen"
      className="py-20 md:py-32"
      style={{ background: "#F7E7CE" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: "#B76E79", fontFamily: "var(--font-raleway), sans-serif" }}
          >
            Was ich anbiete
          </p>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-semibold italic mb-5"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#3D2B1F" }}
          >
            Meine <span style={{ color: "#B76E79" }}>Leistungen</span>
          </h2>
          <p
            className="text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: "#5C4033", fontFamily: "var(--font-raleway), sans-serif" }}
          >
            Von Korean-Beauty-Techniken bis hin zu glamourösem Bridal Make-Up –
            jede Behandlung ist auf dich persönlich zugeschnitten.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{ minHeight: "380px" }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(61,43,31,0.15) 0%, rgba(61,43,31,0.65) 55%, rgba(61,43,31,0.9) 100%)",
                  }}
                />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-end h-full p-6">
                {/* Top badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase"
                    style={{
                      background: "rgba(183,110,121,0.85)",
                      color: "#FDF9F5",
                      fontFamily: "var(--font-raleway), sans-serif",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    {service.subtitle}
                  </span>
                </div>

                {/* Price top right */}
                <div className="absolute top-4 right-4">
                  <span
                    className="px-3 py-1 rounded-full text-sm font-semibold"
                    style={{
                      background: "rgba(247,231,206,0.9)",
                      color: "#B76E79",
                      fontFamily: "var(--font-raleway), sans-serif",
                    }}
                  >
                    {service.price}
                  </span>
                </div>

                {/* Bottom content */}
                <div>
                  <h3
                    className="text-2xl sm:text-3xl font-semibold italic mb-2"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#FDF9F5" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: "rgba(253,249,245,0.85)", fontFamily: "var(--font-raleway), sans-serif" }}
                  >
                    {service.description}
                  </p>
                  <a
                    href="https://ig.me/m/yalinabeauty"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase transition-all duration-200 hover:gap-3"
                    style={{ color: "#F2C4CE", fontFamily: "var(--font-raleway), sans-serif" }}
                  >
                    Termin anfragen
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Extra card: Touch-Up */}
          <div
            className="relative overflow-hidden rounded-2xl flex flex-col justify-center items-center p-8 text-center"
            style={{
              background: "linear-gradient(135deg, #B76E79 0%, #9E4F5C 100%)",
              minHeight: "380px",
            }}
          >
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'20\' cy=\'20\' r=\'2\'/%3E%3C/g%3E%3C/svg%3E")',
              }}
            />
            <div className="relative z-10">
              <span
                className="inline-block px-4 py-1 rounded-full text-xs font-medium tracking-wider uppercase mb-6"
                style={{
                  background: "rgba(253,249,245,0.2)",
                  color: "#FDF9F5",
                  fontFamily: "var(--font-raleway), sans-serif",
                  border: "1px solid rgba(253,249,245,0.3)",
                }}
              >
                Nachbehandlung
              </span>
              <h3
                className="text-3xl sm:text-4xl font-semibold italic mb-3"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#FDF9F5" }}
              >
                Touch-Up Services
              </h3>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "rgba(253,249,245,0.85)", fontFamily: "var(--font-raleway), sans-serif" }}
              >
                Auffüllen und Nachkorrekturen nach 3–4 Wochen. Zupfen ab 10 €,
                Färben ab 15 €.
              </p>
              <a
                href="#preise"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-200 hover:scale-105"
                style={{
                  background: "rgba(253,249,245,0.15)",
                  border: "1px solid rgba(253,249,245,0.4)",
                  color: "#FDF9F5",
                  fontFamily: "var(--font-raleway), sans-serif",
                }}
              >
                Alle Preise ansehen
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
