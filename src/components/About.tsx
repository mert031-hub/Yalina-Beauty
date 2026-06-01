import Image from "next/image";
import { Sparkles, Heart, Star } from "lucide-react";

const highlights = [
  { icon: Sparkles, label: "Make-Up" },
  { icon: Heart, label: "Bridal Beauty" },
  { icon: Star, label: "Lashes & Brows" },
];

export default function About() {
  return (
    <section
      id="ueber-uns"
      className="py-20 md:py-32"
      style={{ background: "#FDF9F5" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image Side */}
          <div className="relative">
            <div
              className="absolute -top-4 -left-4 w-full h-full rounded-2xl"
              style={{ background: "#F2C4CE", opacity: 0.35 }}
            />
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4]">
              <Image
                src="/kiz2.jpg"
                alt="Yalina Beauty – Inna, Make-up-Artistin in Senden"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 60%, rgba(61,43,31,0.2) 100%)",
                }}
              />
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-6 -right-4 sm:-right-6 px-6 py-4 rounded-2xl shadow-lg"
              style={{ background: "#F7E7CE", border: "1px solid #E8D5C4" }}
            >
              <p
                className="text-xs tracking-widest uppercase mb-1"
                style={{ color: "#8B6F6F", fontFamily: "var(--font-raleway), sans-serif" }}
              >
                Spezialisiert auf
              </p>
              <p
                className="text-lg font-semibold italic"
                style={{ color: "#B76E79", fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Korean Beauty
              </p>
            </div>
          </div>

          {/* Text Side */}
          <div className="pt-8 lg:pt-0">
            {/* Section label */}
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: "#B76E79", fontFamily: "var(--font-raleway), sans-serif" }}
            >
              Über Yalina Beauty
            </p>

            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-semibold italic mb-6 leading-tight"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#3D2B1F" }}
            >
              Dein Beauty-Studio
              <br />
              <span style={{ color: "#B76E79" }}>in Senden, Bayern</span>
            </h2>

            <p
              className="text-base leading-relaxed mb-5"
              style={{ color: "#5C4033", fontFamily: "var(--font-raleway), sans-serif" }}
            >
              Willkommen bei Yalina Beauty – deinem Beauty-Studio in Senden, Bayern.
              Ich bin Inna, deine leidenschaftliche Make-up-Artistin und Spezialistin
              für Wimpern und Brauen.
            </p>

            <p
              className="text-base leading-relaxed mb-5"
              style={{ color: "#5C4033", fontFamily: "var(--font-raleway), sans-serif" }}
            >
              Mit einem feinen Gespür für Ästhetik und höchsten Qualitätsstandards
              bringe ich deine natürliche Schönheit zum Strahlen – ob für den Alltag,
              deinen großen Tag oder einen besonderen Abend.
            </p>

            <p
              className="text-base leading-relaxed mb-10"
              style={{ color: "#5C4033", fontFamily: "var(--font-raleway), sans-serif" }}
            >
              Mein Fokus liegt auf modernen Korean-Beauty-Techniken, die für
              natürliche und langanhaltende Ergebnisse bekannt sind. Jede Behandlung
              wird individuell auf dich und deine Wünsche abgestimmt.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3 mb-10">
              {highlights.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{ background: "#F7E7CE", border: "1px solid #E8D5C4" }}
                >
                  <Icon size={15} style={{ color: "#B76E79" }} />
                  <span
                    className="text-sm font-medium"
                    style={{ color: "#5C4033", fontFamily: "var(--font-raleway), sans-serif" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://ig.me/m/yalinabeauty"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #B76E79 0%, #9E4F5C 100%)",
                color: "#FDF9F5",
                fontFamily: "var(--font-raleway), sans-serif",
                letterSpacing: "0.1em",
              }}
            >
              Termin anfragen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
