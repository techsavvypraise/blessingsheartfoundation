import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  GraduationCap,
  HandHeart,
  Stethoscope,
  Utensils,
} from "lucide-react";

import HeroSlider from "@/components/sections/HeroSlider";

const programs = [
  {
    title: "Healthcare",
    description:
      "We connect underserved families and communities with essential healthcare, medicines, health education, and compassionate support.",
    icon: Stethoscope,
    href: "/what-we-do/healthcare",
    accent: "#2FBBC9",
  },
  {
    title: "Education",
    description:
      "We support children with the basic resources they need to stay in school and build a stronger future through education.",
    icon: GraduationCap,
    href: "/what-we-do/education",
    accent: "#77C56D",
  },
  {
    title: "Food Assistance",
    description:
      "We help families experiencing food insecurity by providing nutritious food and practical community support.",
    icon: Utensils,
    href: "/what-we-do/food-assistance",
    accent: "#D18051",
  },
];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <HeroSlider />

      {/* IMPACT STRIP */}
      <section className="relative z-20 -mt-1 bg-[#11455A]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/15 px-5 py-7 sm:grid-cols-4 lg:px-8">
          <div className="px-4 text-center sm:px-6">
            <p className="text-3xl font-black text-white sm:text-4xl">
              5,000+
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
              Patients Reached
            </p>
          </div>

          <div className="px-4 text-center sm:px-6">
            <p className="text-3xl font-black text-white sm:text-4xl">
              20+
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
              Life-Saving Surgeries
            </p>
          </div>

          <div className="mt-6 border-t border-white/15 px-4 text-center sm:mt-0 sm:border-t-0 sm:px-6">
            <p className="text-3xl font-black text-white sm:text-4xl">
              2022
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
              Nonprofit Established
            </p>
          </div>

          <div className="mt-6 border-t border-white/15 px-4 text-center sm:mt-0 sm:border-t-0 sm:px-6">
            <p className="text-3xl font-black text-white sm:text-4xl">
              3
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
              Areas of Focus
            </p>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="overflow-hidden bg-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8 lg:py-28">
          {/* Image */}
          <div className="relative">
            <div className="absolute -left-5 -top-5 h-28 w-28 rounded-full bg-[#2FBBC9]/10" />
            <div className="absolute -bottom-5 -right-5 h-32 w-32 rounded-full bg-[#E84272]/10" />

            <div className="relative overflow-hidden rounded-[28px]">
              <Image
                src="/images/medical-mission/Blessing-1.webp"
                alt="Blessings Heart Foundation"
                width={4002}
                height={6000}
                priority
                className="block h-auto w-full object-contain"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#E84272]" />
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#E84272]">
                Who We Are
              </p>
            </div>

            <h2 className="mt-5 max-w-2xl text-4xl font-black leading-tight tracking-tight text-[#11455A] sm:text-5xl">
              Serving communities with compassion, dignity and hope.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Blessings Heart Foundation is committed to improving the lives
              of children and their families by addressing some of the
              challenges that can keep communities trapped in generational
              poverty.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Our work focuses on healthcare, education, and food assistance.
              Through practical support and community-centered initiatives,
              we seek to give children and families the opportunity to live
              healthier and more secure lives.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 font-bold text-[#11455A] transition hover:text-[#E84272]"
            >
              Discover Our Story
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-[#f6fafb]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-[2px] w-10 bg-[#2FBBC9]" />
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#2FBBC9]">
                What We Do
              </p>
              <span className="h-[2px] w-10 bg-[#2FBBC9]" />
            </div>

            <h2 className="mt-5 text-4xl font-black tracking-tight text-[#11455A] sm:text-5xl">
              Creating meaningful change where it matters most.
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              We focus our efforts on practical needs that affect children,
              families, and underserved communities.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {programs.map((program) => {
              const Icon = program.icon;

              return (
                <Link
                  key={program.title}
                  href={program.href}
                  className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-[0_10px_35px_rgba(17,69,90,0.07)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(17,69,90,0.12)]"
                >
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{
                      backgroundColor: `${program.accent}18`,
                      color: program.accent,
                    }}
                  >
                    <Icon size={28} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-7 text-2xl font-black text-[#11455A]">
                    {program.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {program.description}
                  </p>

                  <div className="mt-7 flex items-center gap-2 text-sm font-bold text-[#11455A] transition group-hover:text-[#E84272]">
                    Learn More
                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>

                  <div
                    className="absolute bottom-0 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: program.accent }}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* MEDICAL MISSIONS */}
      <section className="overflow-hidden bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#2FBBC9]" />
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#2FBBC9]">
                Nigeria Medical Missions
              </p>
            </div>

            <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight text-[#11455A] sm:text-5xl">
              Bringing essential healthcare closer to communities.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Since the first medical mission in July 2022, Blessings Heart
              Foundation has worked with communities and healthcare
              professionals to provide care to people who may otherwise have
              limited access to essential medical services.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="rounded-2xl bg-[#f6fafb] p-5">
                <p className="text-3xl font-black text-[#2FBBC9]">
                  5,000+
                </p>
                <p className="mt-1 text-sm font-semibold text-[#11455A]">
                  Patients seen
                </p>
              </div>

              <div className="rounded-2xl bg-[#fff6f8] p-5">
                <p className="text-3xl font-black text-[#E84272]">
                  20+
                </p>
                <p className="mt-1 text-sm font-semibold text-[#11455A]">
                  Surgeries performed
                </p>
              </div>
            </div>

            <Link
              href="/what-we-do/medical-missions"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#11455A] px-7 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#0d3747]"
            >
              Explore Our Medical Missions
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-3xl">
              <Image
                src="/images/medical-mission/Nurse-screening.webp"
                alt="Medical mission patient screening"
                width={640}
                height={480}
                className="h-full min-h-[260px] w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <div className="mt-10 overflow-hidden rounded-3xl">
              <Image
                src="/images/medical-mission/Theatre.webp"
                alt="Medical mission operating theatre"
                width={640}
                height={480}
                className="h-full min-h-[260px] w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <div className="overflow-hidden rounded-3xl">
              <Image
                src="/images/medical-mission/Pharmacy.webp"
                alt="Medical mission pharmacy"
                width={640}
                height={480}
                className="h-full min-h-[260px] w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <div className="mt-10 overflow-hidden rounded-3xl">
              <Image
                src="/images/medical-mission/Eye-Clinic.webp"
                alt="Medical mission eye clinic"
                width={640}
                height={480}
                className="h-full min-h-[260px] w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOD ASSISTANCE */}
      <section className="bg-[#11455A]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-24">
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-3xl">
              <Image
                src="/images/food-pantry/473800565_581606211296084_1380424235356927064_n.webp"
                alt="Blessings Heart Foundation food pantry"
                width={1200}
                height={1600}
                className="h-[240px] w-full object-cover sm:h-[300px]"
              />
            </div>

            <div className="mt-10 overflow-hidden rounded-3xl">
              <Image
                src="/images/food-pantry/476237173_594288673361171_5209289745194682945_n.webp"
                alt="Food pantry volunteers"
                width={1200}
                height={1600}
                className="h-[240px] w-full object-cover sm:h-[300px]"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#E84272]" />
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#E84272]">
                USA Food Pantry
              </p>
            </div>

            <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">
              No family should have to face hunger alone.
            </h2>

            <p className="mt-6 leading-8 text-white/75">
              Our annual Food Pantry events bring together volunteers, donors,
              and local partners to distribute essential food supplies to
              families experiencing economic hardship.
            </p>

            <p className="mt-5 leading-8 text-white/75">
              With a mission rooted in compassion and community support, we
              work to turn available resources into meaningful assistance for
              families in need.
            </p>

            <Link
              href="/what-we-do/food-assistance"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#E84272] px-7 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#d93665]"
            >
              Learn About Our Food Pantry
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* TAKE ACTION CTA */}
      <section className="relative overflow-hidden bg-[#f6fafb]">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#2FBBC9]/10" />
        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#E84272]/10" />

        <div className="relative mx-auto max-w-5xl px-5 py-20 text-center lg:py-24">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E84272]/10 text-[#E84272]">
            <HandHeart size={32} />
          </div>

          <h2 className="mt-7 text-4xl font-black tracking-tight text-[#11455A] sm:text-5xl">
            You can help create lasting change.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
            Whether you donate, volunteer, partner with us, or simply help
            spread the word, your support can help us reach more children and
            families.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E84272] px-8 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#d93665]"
            >
              <Heart size={18} fill="currentColor" />
              Donate Today
            </Link>

            <Link
              href="/take-action/volunteer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#11455A] px-8 py-4 font-bold text-[#11455A] transition hover:bg-[#11455A] hover:text-white"
            >
              Become a Volunteer
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}