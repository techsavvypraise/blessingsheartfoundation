// src/app/what-we-do/food-pantry/page.tsx

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Users,
  Utensils,
} from "lucide-react";

const gallery = [
  {
    src: "/images/food-pantry/01-community-food-distribution.webp",
    alt: "Community food distribution event",
  },
  {
    src: "/images/food-pantry/02-registration-and-volunteers.webp",
    alt: "Food pantry registration and volunteers",
  },
  {
    src: "/images/food-pantry/03-community-partners.webp",
    alt: "Blessings Heart Foundation community partners",
  },
  {
    src: "/images/food-pantry/04-food-pantry-table.webp",
    alt: "Food pantry supplies prepared for families",
  },
  {
    src: "/images/food-pantry/05-volunteers-serving-families.webp",
    alt: "Volunteers serving families at the food pantry",
  },
  {
    src: "/images/food-pantry/06-food-supplies-and-volunteers.webp",
    alt: "Food supplies and volunteers",
  },
  {
    src: "/images/food-pantry/07-food-pantry-team.webp",
    alt: "Blessings Heart Foundation food pantry team",
  },
  {
    src: "/images/food-pantry/08-food-supplies-ready-for-distribution.webp",
    alt: "Food supplies ready for distribution",
  },
  {
    src: "/images/food-pantry/09-volunteers-with-food-supplies.webp",
    alt: "Volunteers with food pantry supplies",
  },
  {
    src: "/images/food-pantry/10-food-pantry-volunteers.webp",
    alt: "Food pantry volunteers",
  },
];

export default function FoodPantryPage() {
  return (
    <>
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#11455A]">
        <div className="absolute inset-0">
          <Image
            src="/images/food-pantry/03-community-partners.webp"
            alt="Blessings Heart Foundation food pantry event"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-[#062D3D]/65" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#062D3D]/95 via-[#11455A]/65 to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[500px] max-w-7xl items-center px-5 py-24 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#D18051]" />

              <p className="text-sm font-bold uppercase tracking-[0.22em] text-white">
                What We Do
              </p>
            </div>

            <h1 className="mt-6 text-5xl font-black leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
              No family should
              <br />
              <span className="text-[#D18051]">
                face hunger alone.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80">
              Supporting families through food assistance, compassion, and
              community.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-28">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#D18051]" />

              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#D18051]">
                USA Food Pantry
              </p>
            </div>

            <h2 className="mt-5 text-4xl font-black leading-tight text-[#11455A] sm:text-5xl">
              Nourishing families. Strengthening communities.
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
              <p>
                The Blessing Heart Foundation hosts its annual Food Pantry
                Event across various locations in the United States, a
                heartfelt initiative aimed at combating food insecurity and
                spreading hope to communities in need.
              </p>

              <p>
                This event brings together volunteers, donors, and local
                partners to distribute essential food supplies to families
                facing economic hardship.
              </p>

              <p>
                With a mission rooted in compassion and community support, the
                Blessing Heart Foundation transforms surplus food into
                meaningful aid, ensuring no one goes hungry.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <div className="flex items-center gap-3 rounded-2xl bg-[#f6fafb] px-5 py-4">
                <Utensils
                  size={21}
                  className="text-[#D18051]"
                />

                <span className="text-sm font-bold text-[#11455A]">
                  Food Distribution
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-[#f6fafb] px-5 py-4">
                <Users
                  size={21}
                  className="text-[#2FBBC9]"
                />

                <span className="text-sm font-bold text-[#11455A]">
                  Community Support
                </span>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[30px]">
            <Image
              src="/images/food-pantry/04-food-pantry-table.webp"
              alt="Food pantry supplies"
              width={1536}
              height={2048}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          COMMUNITY GALLERY
      ========================================================= */}
      <section className="bg-[#f6fafb]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-[2px] w-10 bg-[#D18051]" />

              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#D18051]">
                Our Community
              </p>

              <span className="h-[2px] w-10 bg-[#D18051]" />
            </div>

            <h2 className="mt-5 text-4xl font-black tracking-tight text-[#11455A] sm:text-5xl">
              Food, fellowship, and community.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Every food pantry event is made possible through the generosity
              of donors, volunteers, partners, and community members.
            </p>
          </div>

          {/* MASONRY GALLERY */}
          <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {gallery.map((image) => (
              <div
                key={image.src}
                className="mb-5 overflow-hidden rounded-[18px] bg-white shadow-sm"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1600}
                  height={1200}
                  className="h-auto w-full object-cover transition duration-500 hover:scale-[1.02]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          HISTORICAL 2025 FOOD PANTRY
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-[1fr_0.7fr] lg:items-center">
            {/* CONTENT */}
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#D18051]" />

                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#D18051]">
                  Food Pantry Events
                </p>
              </div>

              <h2 className="mt-5 text-4xl font-black leading-tight text-[#11455A] sm:text-5xl">
                Serving families across Georgia.
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600">
                Our food pantry operates in multiple locations across the
                State of Georgia. In 2025, we focused on the Loganville area.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600">
                The 2025 event information is preserved here as part of the
                foundation&apos;s history and as a record of the food pantry
                initiative.
              </p>

              {/* HISTORICAL DATES */}
              <div className="mt-8 rounded-2xl border border-[#D18051]/20 bg-[#fff9f5] p-6">
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#D18051]">
                  2025 Food Pantry Dates
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <div className="rounded-xl bg-white p-4 text-center shadow-sm">
                    <p className="text-xs font-bold uppercase text-slate-500">
                      January
                    </p>

                    <p className="mt-1 text-2xl font-black text-[#11455A]">
                      25
                    </p>
                  </div>

                  <div className="rounded-xl bg-white p-4 text-center shadow-sm">
                    <p className="text-xs font-bold uppercase text-slate-500">
                      April
                    </p>

                    <p className="mt-1 text-2xl font-black text-[#11455A]">
                      12
                    </p>
                  </div>

                  <div className="rounded-xl bg-white p-4 text-center shadow-sm">
                    <p className="text-xs font-bold uppercase text-slate-500">
                      August
                    </p>

                    <p className="mt-1 text-2xl font-black text-[#11455A]">
                      23
                    </p>
                  </div>

                  <div className="rounded-xl bg-white p-4 text-center shadow-sm">
                    <p className="text-xs font-bold uppercase text-slate-500">
                      November
                    </p>

                    <p className="mt-1 text-2xl font-black text-[#11455A]">
                      22
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2025 FLYER */}
            <div className="flex justify-center">
              <div className="w-full max-w-[430px] overflow-hidden rounded-[24px] bg-white shadow-[0_15px_50px_rgba(17,69,90,0.12)]">
                <Image
                  src="/images/food-pantry/Food-pantry-2025.jpg"
                  alt="Blessings Heart Foundation Free Food Pantry dates for 2025"
                  width={1263}
                  height={1600}
                  className="h-auto w-full object-contain"
                />

                <div className="border-t border-slate-100 px-5 py-4 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                    2025 Event Record
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          GET INVOLVED
      ========================================================= */}
      <section className="bg-[#11455A]">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center lg:py-24">
          <Heart
            size={38}
            className="mx-auto text-[#E84272]"
            fill="currentColor"
          />

          <h2 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Help us nourish families.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
            Your support can help us continue providing food assistance and
            practical support to families facing hardship.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E84272] px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#d93665]"
            >
              <Heart
                size={18}
                fill="currentColor"
              />
              Donate Today
            </Link>

            <Link
              href="/take-action/volunteer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/60 px-8 py-4 font-bold text-white transition hover:bg-white hover:text-[#11455A]"
            >
              Volunteer
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}