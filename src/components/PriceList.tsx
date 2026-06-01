const categories = [
  {
    id: "lash-brow-lift",
    title: "Lash & Brow Lift",
    subtitle: "Korean Beauty Techniken",
    items: [
      {
        name: "Korean Lashlift",
        description: "+ Pflegeöl nach Behandlung",
        price: "58 €",
        highlight: true,
      },
      {
        name: "Korean Browlift",
        description: "+ Färbung nach Wunsch + Pflegeöl zur Nachbehandlung",
        price: "65 €",
        highlight: true,
      },
      {
        name: "Korean Kombilift",
        description: "Lashes & Brows · inkl. Farbe, Zupfen",
        price: "115 €",
        highlight: true,
        badge: "Beliebt",
      },
      {
        name: "Normales Lashlift",
        description: "",
        price: "48 €",
      },
      {
        name: "Normales Browlift",
        description: "",
        price: "55 €",
      },
      {
        name: "Touch-Up (3–4 Wochen)",
        description: "Zupfen",
        price: "10 €",
      },
      {
        name: "Touch-Up (3–4 Wochen)",
        description: "Färben",
        price: "15 €",
      },
    ],
  },
  {
    id: "lash-extensions",
    title: "1:1 Lashextensions",
    subtitle: "Wimpernverlängerung",
    items: [
      {
        name: "Neuset Classic 1:1",
        description: "Vollständiges Neuset",
        price: "48 €",
        highlight: true,
      },
      {
        name: "Auffüllen nach 2 Wochen",
        description: "",
        price: "30 €",
      },
      {
        name: "Auffüllen nach 3 Wochen",
        description: "",
        price: "38 €",
      },
      {
        name: "Auffüllen nach 4 Wochen",
        description: "",
        price: "45 €",
      },
      {
        name: "Ab der 5. Woche",
        description: "Gilt als Neuset",
        price: "48 €",
      },
    ],
  },
  {
    id: "makeup",
    title: "Make-Up",
    subtitle: "Professionelles Make-Up",
    items: [
      {
        name: "Soft Glam Make-Up",
        description: "Abend Make-Up mit dezentem Augenlook · ohne Fake Lashes",
        price: "58 €",
        highlight: true,
      },
      {
        name: "Glam Make-Up",
        description: "Full Face Make-Up · mit Fake-Lashes",
        price: "68 €",
        highlight: true,
      },
      {
        name: "Braut Make-Up",
        description:
          "Hochzeit · Trauung · Verlobung · Henna · Full Face mit Fake Lashes + Dekolleté",
        price: "98 €",
        highlight: true,
        badge: "Bridal",
      },
      {
        name: "Probe Make-Up",
        description: "",
        price: "48 €",
      },
      {
        name: "Anfahrtskosten (Hausbesuch)",
        description: "pro Kilometer",
        price: "0,50 €/km",
      },
    ],
  },
];

export default function PriceList() {
  return (
    <section
      id="preise"
      className="py-20 md:py-32"
      style={{ background: "#FDF9F5" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: "#B76E79", fontFamily: "var(--font-raleway), sans-serif" }}
          >
            Transparente Preise
          </p>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-semibold italic mb-5"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#3D2B1F" }}
          >
            Meine <span style={{ color: "#B76E79" }}>Preisliste</span>
          </h2>
          <p
            className="text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: "#5C4033", fontFamily: "var(--font-raleway), sans-serif" }}
          >
            Alle Preise auf einen Blick – klar, ehrlich und fair.
            Termin nach Absprache über Instagram oder E-Mail.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid #E8D5C4" }}
            >
              {/* Category header */}
              <div
                className="px-6 py-5"
                style={{
                  background: "linear-gradient(135deg, #B76E79 0%, #9E4F5C 100%)",
                }}
              >
                <p
                  className="text-xs tracking-[0.25em] uppercase mb-1"
                  style={{ color: "rgba(253,249,245,0.7)", fontFamily: "var(--font-raleway), sans-serif" }}
                >
                  {cat.subtitle}
                </p>
                <h3
                  className="text-2xl sm:text-3xl font-semibold italic"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#FDF9F5" }}
                >
                  {cat.title}
                </h3>
              </div>

              {/* Items */}
              <div style={{ background: "#FEFAF7" }}>
                {cat.items.map((item, idx) => (
                  <div
                    key={`${item.name}-${idx}`}
                    className="flex items-start justify-between px-6 py-4"
                    style={{
                      borderBottom: idx < cat.items.length - 1 ? "1px solid #EFE0D3" : "none",
                      background: item.highlight ? "rgba(242,196,206,0.12)" : "transparent",
                    }}
                  >
                    <div className="flex-1 pr-4">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span
                          className="text-sm font-semibold"
                          style={{ color: "#3D2B1F", fontFamily: "var(--font-raleway), sans-serif" }}
                        >
                          {item.name}
                        </span>
                        {item.badge && (
                          <span
                            className="px-2 py-0.5 rounded-full text-xs font-semibold"
                            style={{
                              background: "#B76E79",
                              color: "#FDF9F5",
                              fontFamily: "var(--font-raleway), sans-serif",
                              fontSize: "10px",
                            }}
                          >
                            {item.badge}
                          </span>
                        )}
                      </div>
                      {item.description && (
                        <p
                          className="text-xs mt-0.5 leading-relaxed"
                          style={{ color: "#8B6F6F", fontFamily: "var(--font-raleway), sans-serif" }}
                        >
                          {item.description}
                        </p>
                      )}
                    </div>
                    <span
                      className="text-base font-bold whitespace-nowrap"
                      style={{ color: "#B76E79", fontFamily: "var(--font-raleway), sans-serif" }}
                    >
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-12 text-center">
          <p
            className="text-sm"
            style={{ color: "#8B6F6F", fontFamily: "var(--font-raleway), sans-serif" }}
          >
            Alle Preise inkl. MwSt. · Termin buchbar via{" "}
            <a
              href="https://ig.me/m/yalinabeauty"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#B76E79] transition-colors"
              style={{ color: "#B76E79" }}
            >
              Instagram DM
            </a>{" "}
            oder{" "}
            <a
              href="mailto:yalina.beauty@web.de"
              className="underline hover:text-[#B76E79] transition-colors"
              style={{ color: "#B76E79" }}
            >
              E-Mail
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
