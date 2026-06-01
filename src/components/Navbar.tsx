"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#preise", label: "Preise" },
  { href: "#galerie", label: "Galerie" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FDF9F5]/95 backdrop-blur-md shadow-sm border-b border-[#E8D5C4]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link
            href="/"
            className="flex flex-col leading-none"
            onClick={closeMenu}
          >
            <span
              className="text-2xl md:text-3xl font-semibold italic tracking-wide"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                color: "#B76E79",
              }}
            >
              Yalina Beauty
            </span>
            <span
              className="text-[10px] md:text-xs tracking-[0.2em] uppercase transition-colors duration-300"
              style={{
                color: scrolled ? "#8B6F6F" : "rgba(253,249,245,0.6)",
                fontFamily: "var(--font-raleway), sans-serif",
              }}
            >
              Senden · Bayern
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Hauptnavigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wider uppercase transition-colors duration-200 hover:text-[#B76E79]"
                style={{
                  color: scrolled ? "#5C4033" : "#FDF9F5",
                  fontFamily: "var(--font-raleway), sans-serif",
                  letterSpacing: "0.1em",
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://ig.me/m/yalinabeauty"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-sm font-semibold text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #B76E79 0%, #9E4F5C 100%)",
                fontFamily: "var(--font-raleway), sans-serif",
                letterSpacing: "0.05em",
              }}
            >
              Termin anfragen
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full transition-colors duration-200"
            style={{ color: scrolled ? "#B76E79" : "#FDF9F5" }}
            onClick={() => setOpen(!open)}
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ background: "#FDF9F5", borderTop: open ? "1px solid #E8D5C4" : "none" }}
        aria-hidden={!open}
      >
        <nav
          className="flex flex-col px-4 py-6 gap-1"
          aria-label="Mobile Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-base py-3 px-2 border-b transition-colors duration-200 hover:text-[#B76E79] active:text-[#B76E79]"
              style={{
                color: "#3D2B1F",
                borderColor: "#E8D5C4",
                fontFamily: "var(--font-raleway), sans-serif",
                fontWeight: 500,
                letterSpacing: "0.08em",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://ig.me/m/yalinabeauty"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mt-4 py-3.5 text-center text-sm font-semibold text-white rounded-full transition-all duration-200 active:opacity-80"
            style={{
              background: "linear-gradient(135deg, #B76E79 0%, #9E4F5C 100%)",
              fontFamily: "var(--font-raleway), sans-serif",
              letterSpacing: "0.05em",
            }}
          >
            Termin anfragen
          </a>
        </nav>
      </div>
    </header>
  );
}
