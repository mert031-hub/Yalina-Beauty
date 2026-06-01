import { Mail, MessageCircle } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";

const contactMethods = [
  {
    id: "instagram-dm",
    type: "instagram",
    title: "Instagram DM",
    description:
      "Schreib mir direkt auf Instagram – die schnellste Möglichkeit, deinen Wunschtermin zu anfragen.",
    label: "DM senden",
    href: "https://ig.me/m/yalinabeauty",
    primary: true,
  },
  {
    id: "instagram-profile",
    type: "social",
    title: "Instagram öffnen",
    description:
      "Entdecke meine Arbeiten und kontaktiere mich über mein Instagram-Profil.",
    label: "@yalinabeauty",
    href: "https://www.instagram.com/yalinabeauty/",
    primary: false,
  },
  {
    id: "email",
    type: "email",
    title: "E-Mail",
    description:
      "Du erreichst mich auch per E-Mail. Ich melde mich schnellstmöglich bei dir zurück.",
    label: "yalina.beauty@web.de",
    href: "mailto:yalina.beauty@web.de",
    primary: false,
  },
];

function ContactIcon({
  type,
  color,
}: {
  type: string;
  color: string;
}) {
  if (type === "instagram" || type === "social") {
    return <InstagramIcon size={24} color={color} />;
  }
  if (type === "email") {
    return <Mail size={24} style={{ color }} />;
  }
  return <MessageCircle size={24} style={{ color }} />;
}

export default function Contact() {
  return (
    <section
      id="kontakt"
      className="py-20 md:py-32"
      style={{ background: "#F7E7CE" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: "#B76E79", fontFamily: "var(--font-raleway), sans-serif" }}
          >
            Lass uns sprechen
          </p>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-semibold italic mb-5"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              color: "#3D2B1F",
            }}
          >
            Termin <span style={{ color: "#B76E79" }}>anfragen</span>
          </h2>
          <p
            className="text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: "#5C4033", fontFamily: "var(--font-raleway), sans-serif" }}
          >
            Kontaktiere mich für deinen Wunschtermin. Ich freue mich darauf,
            dich kennenzulernen und deine natürliche Schönheit zu unterstreichen.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {contactMethods.map((method) => (
            <a
              key={method.id}
              href={method.href}
              target={method.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                method.href.startsWith("mailto:") ? undefined : "noopener noreferrer"
              }
              className="group relative flex flex-col items-center text-center p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{
                background: method.primary
                  ? "linear-gradient(135deg, #B76E79 0%, #9E4F5C 100%)"
                  : "#FEFAF7",
                border: method.primary ? "none" : "1px solid #E8D5C4",
              }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: method.primary
                    ? "rgba(253,249,245,0.2)"
                    : "linear-gradient(135deg, #F2C4CE 0%, #E8D5C4 100%)",
                }}
              >
                <ContactIcon
                  type={method.type}
                  color={method.primary ? "#FDF9F5" : "#B76E79"}
                />
              </div>

              <h3
                className="text-xl font-semibold italic mb-2"
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  color: method.primary ? "#FDF9F5" : "#3D2B1F",
                }}
              >
                {method.title}
              </h3>

              <p
                className="text-sm leading-relaxed mb-5"
                style={{
                  color: method.primary ? "rgba(253,249,245,0.8)" : "#5C4033",
                  fontFamily: "var(--font-raleway), sans-serif",
                }}
              >
                {method.description}
              </p>

              <span
                className="text-sm font-semibold tracking-wide"
                style={{
                  color: method.primary ? "#F2C4CE" : "#B76E79",
                  fontFamily: "var(--font-raleway), sans-serif",
                }}
              >
                {method.label}
              </span>
            </a>
          ))}
        </div>

        {/* Note */}
        <p
          className="text-center text-sm mt-10"
          style={{ color: "#8B6F6F", fontFamily: "var(--font-raleway), sans-serif" }}
        >
          Buchungen ausschließlich nach vorheriger Absprache.
          Ich melde mich in der Regel innerhalb von 24 Stunden zurück.
        </p>
      </div>
    </section>
  );
}
