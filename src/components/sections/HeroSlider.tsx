"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Heart,
} from "lucide-react";

const slides = [
  {
    image:
      "/images/medical-mission/The-team-Day-one-Prayers-and-addressing-the-early-crowd.webp",
    eyebrow: "TOGETHER, WE EMPOWER FUTURES",
    title: "Creating healthier, stronger communities.",
    description:
      "Blessings Heart Foundation is committed to improving the lives of children and families through healthcare, education, food assistance, and compassionate community support.",
  },
  {
    image: "/images/medical-mission/Day-One-Health-Education-session.webp",
    eyebrow: "HEALTHCARE FOR EVERYONE",
    title: "Bringing quality healthcare closer to those who need it most.",
    description:
      "Through medical missions and community healthcare initiatives, we connect families with essential care, medicines, health education, and life-changing support.",
  },
  {
    image: "/images/medical-mission/Eye-Clinic.webp",
    eyebrow: "CARE THAT CHANGES LIVES",
    title: "Giving underserved communities access to essential care.",
    description:
      "Our medical missions bring healthcare professionals and vital services directly to communities where access to care can be limited.",
  },
  {
    image: "/images/food-pantry/473800565_581606211296084_1380424235356927064_n.webp",
    eyebrow: "NOURISHING FAMILIES",
    title: "No family should have to face hunger alone.",
    description:
      "We support families experiencing food insecurity with nutritious food and compassionate assistance that helps communities become stronger.",
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  const nextSlide = () => {
    setActive((current) => (current + 1) % slides.length);
  };

  const previousSlide = () => {
    setActive((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[680px] overflow-hidden bg-[#11455A] sm:h-[720px] lg:h-[760px]">
      {/* =========================================================
          SLIDES
      ========================================================= */}
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === active
              ? "z-10 opacity-100"
              : "pointer-events-none z-0 opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Main dark overlay */}
          <div className="absolute inset-0 bg-[#062D3D]/55" />

          {/* Stronger left-side overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#062D3D]/95 via-[#11455A]/75 to-[#11455A]/20" />

          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#11455A]/70 to-transparent" />
        </div>
      ))}

      {/* =========================================================
          CONTENT
      ========================================================= */}
      <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-5 lg:px-8">
        <div
          key={active}
          className="max-w-3xl animate-[fadeIn_0.8s_ease-out]"
        >
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#E84272]" />

            <p className="text-sm font-bold tracking-[0.25em] text-white">
              {slides[active].eyebrow}
            </p>
          </div>

          {/* Heading */}
          <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {slides[active].title}
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
            {slides[active].description}
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E84272] px-8 py-4 font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#d93665]"
            >
              <Heart size={18} fill="currentColor" />
              Donate Today
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/70 px-8 py-4 font-bold text-white transition hover:bg-white hover:text-[#11455A]"
            >
              Learn More
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* =========================================================
          DESKTOP PREVIOUS
      ========================================================= */}
      <button
        type="button"
        onClick={previousSlide}
        aria-label="Previous slide"
        className="absolute left-5 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#11455A] shadow-lg transition hover:scale-105 hover:bg-white lg:flex"
      >
        <ChevronLeft size={25} />
      </button>

      {/* =========================================================
          DESKTOP NEXT
      ========================================================= */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-5 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#11455A] shadow-lg transition hover:scale-105 hover:bg-white lg:flex"
      >
        <ChevronRight size={25} />
      </button>

      {/* =========================================================
          SLIDER INDICATORS
      ========================================================= */}
      <div className="absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === active
                ? "w-8 bg-[#E84272]"
                : "w-2 bg-white/70 hover:bg-white"
            }`}
          />
        ))}
      </div>

      {/* =========================================================
          MOBILE CONTROLS
      ========================================================= */}
      <div className="absolute bottom-7 right-5 z-30 flex gap-2 lg:hidden">
        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous slide"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[#11455A] shadow-lg"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[#11455A] shadow-lg"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </section>
  );
}