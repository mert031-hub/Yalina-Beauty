"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const images = [
  { src: "/Kirpik1.jpg", alt: "Korean Lashlift Ergebnis – Yalina Beauty Senden" },
  { src: "/Kirpik2.jpg", alt: "Wimpernlifting Nahaufnahme – Yalina Beauty" },
  { src: "/Kirpik3.jpg", alt: "Lashlift Behandlung – Yalina Beauty Bayern" },
  { src: "/Kirpik4.jpg", alt: "Korean Browlift – Yalina Beauty Senden" },
  { src: "/Kirpk5.jpg", alt: "Wimpernverlängerung Classic 1:1 – Yalina Beauty" },
  { src: "/Kirpik6.jpg", alt: "Lashextensions Detailaufnahme – Yalina Beauty" },
  { src: "/Kirpik7.jpg", alt: "Wimpern Behandlung Ergebnis – Yalina Beauty" },
  { src: "/kas1.jpg", alt: "Browlift Ergebnis – Yalina Beauty Senden" },
  { src: "/Kiz1.jpg", alt: "Bridal Make-Up Ergebnis – Yalina Beauty Bayern" },
  { src: "/kiz2.jpg", alt: "Soft Glam Make-Up Look – Yalina Beauty" },
  { src: "/kiz3.jpg", alt: "Glam Make-Up Look – Yalina Beauty Senden" },
  { src: "/bakim1.jpg", alt: "Beauty Behandlung – Yalina Beauty Senden" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (idx: number) => setLightbox(idx);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  const prev = useCallback(() => {
    setLightbox((cur) => (cur === null ? null : (cur - 1 + images.length) % images.length));
  }, []);

  const next = useCallback(() => {
    setLightbox((cur) => (cur === null ? null : (cur + 1) % images.length));
  }, []);

  // Keyboard navigation + scroll lock
  useEffect(() => {
    if (lightbox === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightbox, closeLightbox, prev, next]);

  return (
    <section
      id="galerie"
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
            Meine Arbeiten
          </p>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-semibold italic mb-5"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#3D2B1F" }}
          >
            Galerie &amp;{" "}
            <span style={{ color: "#B76E79" }}>Ergebnisse</span>
          </h2>
          <p
            className="text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: "#5C4033", fontFamily: "var(--font-raleway), sans-serif" }}
          >
            Echte Ergebnisse aus meinem Studio – jedes Bild erzählt von
            Sorgfalt, Qualität und dem Strahlen meiner Kundinnen.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3">
          {images.map((img, idx) => (
            <div
              key={img.src}
              className="break-inside-avoid mb-3 cursor-pointer group relative overflow-hidden rounded-xl"
              onClick={() => openLightbox(idx)}
              role="button"
              tabIndex={0}
              aria-label={`Bild vergrößern: ${img.alt}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openLightbox(idx);
                }
              }}
            >
              <div
                className="relative w-full"
                style={{
                  paddingBottom:
                    idx % 3 === 0 ? "130%" : idx % 3 === 1 ? "100%" : "80%",
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  loading={idx < 4 ? "eager" : "lazy"}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{ background: "rgba(183,110,121,0.3)" }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(253,249,245,0.9)" }}
                  >
                    <ZoomIn size={16} style={{ color: "#B76E79" }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/yalinabeauty/"
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
            Mehr auf Instagram ansehen
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(61,43,31,0.96)" }}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Bildvorschau"
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 w-11 h-11 rounded-full flex items-center justify-center z-10 transition-opacity hover:opacity-70"
            style={{ background: "rgba(253,249,245,0.15)", color: "#FDF9F5" }}
            onClick={closeLightbox}
            aria-label="Schließen"
          >
            <X size={20} />
          </button>

          {/* Prev */}
          <button
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center z-10 transition-opacity hover:opacity-70"
            style={{ background: "rgba(253,249,245,0.15)", color: "#FDF9F5" }}
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Vorheriges Bild"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Next */}
          <button
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center z-10 transition-opacity hover:opacity-70"
            style={{ background: "rgba(253,249,245,0.15)", color: "#FDF9F5" }}
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Nächstes Bild"
          >
            <ChevronRight size={22} />
          </button>

          {/* Image */}
          <div
            className="relative w-full max-w-3xl rounded-2xl overflow-hidden"
            style={{ maxHeight: "80vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full" style={{ paddingBottom: "75%" }}>
              <Image
                src={images[lightbox].src}
                alt={images[lightbox].alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 80vw"
                priority
              />
            </div>
          </div>

          {/* Counter */}
          <p
            className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs tracking-widest"
            style={{ color: "rgba(253,249,245,0.45)", fontFamily: "var(--font-raleway), sans-serif" }}
            aria-live="polite"
          >
            {lightbox + 1} / {images.length}
          </p>
        </div>
      )}
    </section>
  );
}
