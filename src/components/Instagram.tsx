import Image from "next/image";
import InstagramIcon from "@/components/InstagramIcon";

const previewImages = [
  "/Kirpik2.jpg",
  "/Kirpik7.jpg",
  "/kas1.jpg",
  "/Kiz1.jpg",
  "/kiz2.jpg",
  "/bakim1.jpg",
];

export default function InstagramSection() {
  return (
    <section
      style={{ background: "#3D2B1F" }}
      className="py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text Side */}
          <div>
            <div
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full"
              style={{ background: "rgba(183,110,121,0.2)", border: "1px solid rgba(183,110,121,0.35)" }}
            >
              <InstagramIcon size={16} color="#B76E79" />
              <span
                className="text-xs tracking-[0.25em] uppercase font-medium"
                style={{ color: "#B76E79", fontFamily: "var(--font-raleway), sans-serif" }}
              >
                @yalinabeauty
              </span>
            </div>

            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-semibold italic mb-6 leading-tight"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#FDF9F5" }}
            >
              Folge mir auf
              <br />
              <span style={{ color: "#B76E79" }}>Instagram</span>
            </h2>

            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "rgba(253,249,245,0.75)", fontFamily: "var(--font-raleway), sans-serif" }}
            >
              Entdecke aktuelle Looks, Behind-the-Scenes Einblicke und
              inspirierende Beauty-Transformationen auf meinem Instagram-Profil.
              Buche deinen Termin direkt per DM.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://www.instagram.com/yalinabeauty/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{
                  background: "linear-gradient(135deg, #B76E79 0%, #9E4F5C 100%)",
                  color: "#FDF9F5",
                  fontFamily: "var(--font-raleway), sans-serif",
                  letterSpacing: "0.1em",
                }}
              >
                <InstagramIcon size={16} color="#FDF9F5" />
                Profil öffnen
              </a>

              <a
                href="https://ig.me/m/yalinabeauty"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-105"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(183,110,121,0.5)",
                  color: "#F2C4CE",
                  fontFamily: "var(--font-raleway), sans-serif",
                  letterSpacing: "0.1em",
                }}
              >
                Termin per DM anfragen
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-10">
              <div>
                <p
                  className="text-3xl font-semibold italic"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#B76E79" }}
                >
                  373+
                </p>
                <p
                  className="text-xs tracking-wider uppercase"
                  style={{ color: "rgba(253,249,245,0.5)", fontFamily: "var(--font-raleway), sans-serif" }}
                >
                  Follower
                </p>
              </div>
              <div>
                <p
                  className="text-3xl font-semibold italic"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#B76E79" }}
                >
                  24+
                </p>
                <p
                  className="text-xs tracking-wider uppercase"
                  style={{ color: "rgba(253,249,245,0.5)", fontFamily: "var(--font-raleway), sans-serif" }}
                >
                  Beiträge
                </p>
              </div>
            </div>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-3 gap-2">
            {previewImages.map((src, idx) => (
              <a
                key={src}
                href="https://www.instagram.com/yalinabeauty/"
                target="_blank"
                rel="noopener noreferrer"
                className={`relative overflow-hidden rounded-xl group ${idx === 0 ? "col-span-2 row-span-2" : ""}`}
                style={{ paddingBottom: idx === 0 ? "100%" : "100%" }}
              >
                <div className="relative w-full h-0" style={{ paddingBottom: "100%" }}>
                  <Image
                    src={src}
                    alt={`Yalina Beauty Instagram Post ${idx + 1}`}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 33vw, 25vw"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    style={{ background: "rgba(183,110,121,0.4)" }}
                  >
                    <InstagramIcon size={20} color="#FDF9F5" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
