import { Sparkles, Shield, Heart, Zap, Star, Users } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Professionelle Beratung",
    description:
      "Jede Behandlung beginnt mit einem persönlichen Gespräch. Ich nehme mir Zeit für dich und deine Wünsche, damit das Ergebnis perfekt zu dir passt.",
  },
  {
    icon: Sparkles,
    title: "Hochwertige Produkte",
    description:
      "Ich arbeite ausschließlich mit Premium-Produkten für langanhaltende, hautfreundliche und ästhetisch hochwertige Ergebnisse.",
  },
  {
    icon: Heart,
    title: "Individuelle Behandlung",
    description:
      "Keine Behandlung gleicht der anderen. Deine Wünsche, dein Typ und dein natürlicher Ausdruck stehen bei mir immer im Mittelpunkt.",
  },
  {
    icon: Zap,
    title: "Moderne Techniken",
    description:
      "Ich setze auf bewährte Korean-Beauty-Methoden – für sanfte, präzise Behandlungen mit natürlichen und langanhaltenden Resultaten.",
  },
  {
    icon: Shield,
    title: "Hygienische Standards",
    description:
      "Sauberkeit und Hygiene haben höchste Priorität. Alle Materialien werden nach den strengsten Standards gereinigt und sterilisiert.",
  },
  {
    icon: Star,
    title: "Persönlicher Service",
    description:
      "Bei mir bist du nicht eine unter vielen. Du wirst herzlich und individuell betreut – in einer angenehmen, entspannten Atmosphäre.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="warum-ich"
      className="py-20 md:py-32"
      style={{ background: "#FDF9F5" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: "#B76E79", fontFamily: "var(--font-raleway), sans-serif" }}
          >
            Warum Yalina Beauty
          </p>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-semibold italic mb-5"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#3D2B1F" }}
          >
            Deine Schönheit
            <br />
            <span style={{ color: "#B76E79" }}>liegt mir am Herzen</span>
          </h2>
          <p
            className="text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: "#5C4033", fontFamily: "var(--font-raleway), sans-serif" }}
          >
            Ich glaube, dass jede Frau es verdient, sich schön und wohl in
            ihrer Haut zu fühlen. Diese Überzeugung ist der Kern von allem,
            was ich tue.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group relative p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{
                background: "#FEFAF7",
                border: "1px solid #E8D5C4",
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{ background: "linear-gradient(135deg, #F2C4CE 0%, #E8D5C4 100%)" }}
              >
                <reason.icon size={22} style={{ color: "#B76E79" }} />
              </div>

              {/* Content */}
              <h3
                className="text-xl sm:text-2xl font-semibold italic mb-3"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#3D2B1F" }}
              >
                {reason.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#5C4033", fontFamily: "var(--font-raleway), sans-serif" }}
              >
                {reason.description}
              </p>

              {/* Hover accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(90deg, #B76E79, #F2C4CE)" }}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="https://ig.me/m/yalinabeauty"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{
              background: "linear-gradient(135deg, #B76E79 0%, #9E4F5C 100%)",
              color: "#FDF9F5",
              fontFamily: "var(--font-raleway), sans-serif",
              letterSpacing: "0.1em",
            }}
          >
            Jetzt Termin vereinbaren
          </a>
        </div>
      </div>
    </section>
  );
}
