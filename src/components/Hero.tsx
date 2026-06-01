import Image from "next/image";
import { ChevronDown } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/kiz3.jpg"
          alt="Yalina Beauty – Premium Beauty Studio Senden"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(61,43,31,0.55) 0%, rgba(61,43,31,0.35) 40%, rgba(61,43,31,0.65) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pt-20">
        {/* Badge */}
        <div
          className="inline-block mb-6 px-5 py-1.5 rounded-full text-xs font-semibold tracking-[0.25em] uppercase"
          style={{
            background: "rgba(247,231,206,0.18)",
            border: "1px solid rgba(247,231,206,0.45)",
            color: "#F7E7CE",
            fontFamily: "var(--font-raleway), sans-serif",
            backdropFilter: "blur(4px)",
          }}
        >
          Beauty Studio · Senden, Bayern
        </div>

        {/* H1 */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold italic mb-4 leading-tight"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            color: "#FDF9F5",
            textShadow: "0 2px 20px rgba(0,0,0,0.25)",
          }}
        >
          Deine Beauty-
          <br />
          <span style={{ color: "#F2C4CE" }}>Expertin</span>
        </h1>

        {/* Tagline */}
        <p
          className="text-base sm:text-lg md:text-xl tracking-[0.2em] uppercase mb-8 font-light"
          style={{
            color: "#E8D5C4",
            fontFamily: "var(--font-raleway), sans-serif",
          }}
        >
          Make-Up &nbsp;·&nbsp; Lashes &nbsp;·&nbsp; Brows &nbsp;·&nbsp; Bridal Beauty
        </p>

        {/* Subheadline */}
        <p
          className="text-sm sm:text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed font-light"
          style={{
            color: "rgba(253,249,245,0.85)",
            fontFamily: "var(--font-raleway), sans-serif",
          }}
        >
          Professionelle Beauty-Behandlungen für deinen besonderen Moment –
          mit Liebe zum Detail und höchsten Qualitätsstandards.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href="https://ig.me/m/yalinabeauty"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{
              background: "linear-gradient(135deg, #B76E79 0%, #9E4F5C 100%)",
              color: "#FDF9F5",
              fontFamily: "var(--font-raleway), sans-serif",
              letterSpacing: "0.12em",
            }}
          >
            Termin anfragen
          </a>

          <a
            href="https://www.instagram.com/yalinabeauty/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            style={{
              background: "rgba(253,249,245,0.12)",
              border: "1px solid rgba(253,249,245,0.5)",
              color: "#FDF9F5",
              fontFamily: "var(--font-raleway), sans-serif",
              letterSpacing: "0.12em",
              backdropFilter: "blur(4px)",
            }}
          >
            <InstagramIcon size={16} />
            Instagram öffnen
          </a>

          <a
            href="#preise"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-105"
            style={{
              background: "rgba(253,249,245,0.08)",
              border: "1px solid rgba(253,249,245,0.35)",
              color: "#E8D5C4",
              fontFamily: "var(--font-raleway), sans-serif",
              letterSpacing: "0.12em",
              backdropFilter: "blur(4px)",
            }}
          >
            Preisliste ansehen
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 animate-bounce" aria-hidden="true">
        <span
          className="text-xs tracking-[0.2em] uppercase"
          style={{ color: "rgba(253,249,245,0.6)", fontFamily: "var(--font-raleway), sans-serif" }}
        >
          Entdecken
        </span>
        <ChevronDown size={18} style={{ color: "rgba(253,249,245,0.6)" }} />
      </div>
    </section>
  );
}
