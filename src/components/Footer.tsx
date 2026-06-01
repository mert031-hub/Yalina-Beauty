import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#3D2B1F" }}>
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span
                className="text-3xl font-semibold italic"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#F2C4CE" }}
              >
                Yalina Beauty
              </span>
              <p
                className="text-xs tracking-[0.2em] uppercase mt-1"
                style={{ color: "rgba(253,249,245,0.45)", fontFamily: "var(--font-raleway), sans-serif" }}
              >
                Senden · Bayern · Deutschland
              </p>
            </div>
            <p
              className="text-sm leading-relaxed max-w-xs mb-6"
              style={{ color: "rgba(253,249,245,0.6)", fontFamily: "var(--font-raleway), sans-serif" }}
            >
              Professionelles Beauty-Studio in Senden, Bayern. Spezialisiert auf
              Korean Lashlift, Browlift, Lashextensions und Make-Up für jeden Anlass.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/yalinabeauty/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: "rgba(183,110,121,0.25)", border: "1px solid rgba(183,110,121,0.4)" }}
              >
                <InstagramIcon size={17} color="#F2C4CE" />
              </a>
              <a
                href="mailto:yalina.beauty@web.de"
                aria-label="E-Mail"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: "rgba(183,110,121,0.25)", border: "1px solid rgba(183,110,121,0.4)" }}
              >
                <Mail size={17} style={{ color: "#F2C4CE" }} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-sm tracking-[0.2em] uppercase font-semibold mb-5"
              style={{ color: "#F2C4CE", fontFamily: "var(--font-raleway), sans-serif" }}
            >
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { href: "#ueber-uns", label: "Über uns" },
                { href: "#leistungen", label: "Leistungen" },
                { href: "#preise", label: "Preisliste" },
                { href: "#galerie", label: "Galerie" },
                { href: "#kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-[#F2C4CE]"
                    style={{ color: "rgba(253,249,245,0.55)", fontFamily: "var(--font-raleway), sans-serif" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-sm tracking-[0.2em] uppercase font-semibold mb-5"
              style={{ color: "#F2C4CE", fontFamily: "var(--font-raleway), sans-serif" }}
            >
              Kontakt
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://ig.me/m/yalinabeauty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm transition-colors duration-200 hover:text-[#F2C4CE]"
                  style={{ color: "rgba(253,249,245,0.55)", fontFamily: "var(--font-raleway), sans-serif" }}
                >
                  <InstagramIcon size={14} color="currentColor" />
                  Termin per DM
                </a>
              </li>
              <li>
                <a
                  href="mailto:yalina.beauty@web.de"
                  className="flex items-center gap-2 text-sm transition-colors duration-200 hover:text-[#F2C4CE]"
                  style={{ color: "rgba(253,249,245,0.55)", fontFamily: "var(--font-raleway), sans-serif" }}
                >
                  <Mail size={14} />
                  yalina.beauty@web.de
                </a>
              </li>
              <li>
                <span
                  className="flex items-center gap-2 text-sm"
                  style={{ color: "rgba(253,249,245,0.55)", fontFamily: "var(--font-raleway), sans-serif" }}
                >
                  <MapPin size={14} />
                  Senden, Bayern
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p
            className="text-xs"
            style={{ color: "rgba(253,249,245,0.3)", fontFamily: "var(--font-raleway), sans-serif" }}
          >
            © {year} Yalina Beauty · Alle Rechte vorbehalten
          </p>
          <div className="flex gap-5">
            <Link
              href="/impressum"
              className="text-xs transition-colors hover:text-[#F2C4CE]"
              style={{ color: "rgba(253,249,245,0.35)", fontFamily: "var(--font-raleway), sans-serif" }}
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-xs transition-colors hover:text-[#F2C4CE]"
              style={{ color: "rgba(253,249,245,0.35)", fontFamily: "var(--font-raleway), sans-serif" }}
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
