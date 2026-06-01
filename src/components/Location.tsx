import { MapPin, Navigation } from "lucide-react";

export default function Location() {
  return (
    <section
      id="standort"
      className="py-20 md:py-28"
      style={{ background: "#FDF9F5" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Text */}
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: "#B76E79", fontFamily: "var(--font-raleway), sans-serif" }}
            >
              Wo du mich findest
            </p>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-semibold italic mb-6 leading-tight"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#3D2B1F" }}
            >
              Yalina Beauty
              <br />
              <span style={{ color: "#B76E79" }}>in Senden</span>
            </h2>

            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "#5C4033", fontFamily: "var(--font-raleway), sans-serif" }}
            >
              Mein Beauty-Studio befindet sich in Senden, Bayern. Den genauen
              Standort teile ich nach Terminvereinbarung persönlich mit dir –
              für Privatsphäre und ein exklusives Studio-Erlebnis.
            </p>

            {/* Location Card */}
            <div
              className="flex items-start gap-4 p-6 rounded-2xl mb-6"
              style={{ background: "#F7E7CE", border: "1px solid #E8D5C4" }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: "linear-gradient(135deg, #F2C4CE 0%, #E8D5C4 100%)" }}
              >
                <MapPin size={18} style={{ color: "#B76E79" }} />
              </div>
              <div>
                <p
                  className="font-semibold text-base mb-1"
                  style={{ color: "#3D2B1F", fontFamily: "var(--font-raleway), sans-serif" }}
                >
                  Senden, Bayern
                </p>
                <p
                  className="text-sm"
                  style={{ color: "#8B6F6F", fontFamily: "var(--font-raleway), sans-serif" }}
                >
                  Deutschland · Genaue Adresse nach Terminbuchung
                </p>
              </div>
            </div>

            {/* Hausbesuch note */}
            <div
              className="flex items-start gap-4 p-6 rounded-2xl"
              style={{ background: "#F7E7CE", border: "1px solid #E8D5C4" }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: "linear-gradient(135deg, #F2C4CE 0%, #E8D5C4 100%)" }}
              >
                <Navigation size={18} style={{ color: "#B76E79" }} />
              </div>
              <div>
                <p
                  className="font-semibold text-base mb-1"
                  style={{ color: "#3D2B1F", fontFamily: "var(--font-raleway), sans-serif" }}
                >
                  Hausbesuche möglich
                </p>
                <p
                  className="text-sm"
                  style={{ color: "#8B6F6F", fontFamily: "var(--font-raleway), sans-serif" }}
                >
                  Anfahrtskosten: 0,50 € pro Kilometer · nach Absprache
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-md" style={{ border: "1px solid #E8D5C4" }}>
            <iframe
              title="Senden, Bayern – Yalina Beauty Standort"
              src="https://www.openstreetmap.org/export/embed.html?bbox=10.01%2C48.30%2C10.10%2C48.35&amp;layer=mapnik&amp;marker=48.325%2C10.055"
              width="100%"
              height="380"
              loading="lazy"
              className="block"
              style={{ border: "none" }}
              sandbox="allow-scripts allow-same-origin"
            />
            <div
              className="px-4 py-3 flex items-center justify-between"
              style={{ background: "#F7E7CE", borderTop: "1px solid #E8D5C4" }}
            >
              <span
                className="text-xs"
                style={{ color: "#8B6F6F", fontFamily: "var(--font-raleway), sans-serif" }}
              >
                Senden, Bayern, Deutschland
              </span>
              <a
                href="https://www.openstreetmap.org/?mlat=48.325&mlon=10.055#map=14/48.325/10.055"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium hover:underline transition-colors"
                style={{ color: "#B76E79", fontFamily: "var(--font-raleway), sans-serif" }}
              >
                Größere Karte
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
