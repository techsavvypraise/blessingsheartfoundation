import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  HeartPulse,
  Utensils,
  Stethoscope,
  Users,
} from "lucide-react";

export const metadata = {
  title: "What We Do",
  description:
    "Explore Blessings Heart Foundation programs supporting communities through food assistance, medical missions, and free healthcare services.",
};

const programs = [
  {
    title: "USA – Food Pantry",
    eyebrow: "United States",
    description:
      "If you or your household is struggling to put food on the table, we're here to help. Our Free Food Pantry provides practical food assistance to families and households in need.",
    href: "/what-we-do/food-pantry",
    image: "/images/food-pantry/04-food-pantry-table.webp",
    icon: Utensils,
    accent: "#77C56D",
  },
  {
    title: "Medical Mission Trips",
    eyebrow: "Nigeria",
    description:
      "Our medical mission trips bring healthcare professionals and volunteers together to provide direct patient care, medicines, health education, and lifesaving support to communities in need.",
    href: "/what-we-do/medical-missions",
    image: "/images/team/group-photo-board.webp",
    icon: HeartPulse,
    accent: "#2FBBC9",
  },
  {
    title: "Free Medical Clinic",
    eyebrow: "Nigeria",
    description:
      "Our Free Medical Clinic in Abak, Akwa Ibom State provides continued healthcare support, chronic disease follow-up, laboratory testing, health education, and other essential services.",
    href: "/what-we-do/free-clinic",
    image: "/images/medical-mission/consultation-dr-etuk.webp",
    icon: Stethoscope,
    accent: "#E84272",
  },
];

export default function WhatWeDoPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#11455A]">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#2FBBC9]/10" />
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#E84272]/10" />

        <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-[2px] w-10 bg-[#E84272]" />

              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#E84272]">
                What We Do
              </p>

              <span className="h-[2px] w-10 bg-[#E84272]" />
            </div>

            <h1 className="mt-6 text-5xl font-black leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Compassion that
              <br />
              <span className="text-[#2FBBC9]">becomes action.</span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/75">
              From food assistance in the United States to healthcare
              initiatives in Nigeria, we work alongside communities to respond
              to practical needs and create meaningful impact.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#2FBBC9]" />

                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#2FBBC9]">
                  Our Programs
                </p>
              </div>

              <h2 className="mt-5 text-4xl font-black leading-tight text-[#11455A] sm:text-5xl">
                Meeting people where they are.
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-slate-600">
                Blessings Heart Foundation focuses on practical ways to support
                individuals, families, and communities. Our programs are
                shaped around the needs we encounter and the partnerships that
                help us respond effectively.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Whether it is putting food on a family's table, providing
                healthcare, or creating opportunities for continued support,
                our goal is to serve with compassion and purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="bg-[#f6fafb]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#E84272]">
              Our Work
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#11455A] sm:text-5xl">
              Programs that make a difference.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Explore the ways Blessings Heart Foundation serves communities
              across the United States and Nigeria.
            </p>
          </div>

          <div className="mt-14 grid gap-7 lg:grid-cols-3">
            {programs.map((program) => {
              const Icon = program.icon;

              return (
                <Link
                  key={program.title}
                  href={program.href}
                  className="group overflow-hidden rounded-[28px] bg-white shadow-[0_15px_45px_rgba(17,69,90,0.07)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(17,69,90,0.12)]"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#11455A]/70 via-transparent to-transparent" />

                    <div
                      className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-lg"
                      style={{
                        color: program.accent,
                      }}
                    >
                      <Icon size={24} />
                    </div>
                  </div>

                  <div className="p-7">
                    <p
                      className="text-xs font-bold uppercase tracking-[0.18em]"
                      style={{
                        color: program.accent,
                      }}
                    >
                      {program.eyebrow}
                    </p>

                    <h3 className="mt-3 text-2xl font-black text-[#11455A]">
                      {program.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {program.description}
                    </p>

                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#11455A]">
                      Explore Program
                      <ArrowRight
                        size={17}
                        className="transition group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#77C56D]" />

                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#77C56D]">
                  People First
                </p>
              </div>

              <h2 className="mt-5 text-4xl font-black leading-tight text-[#11455A] sm:text-5xl">
                We believe service should be personal.
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Our work is built around people. We listen to communities,
                understand their needs, and work with partners and volunteers
                to provide practical support.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                Every program is an opportunity to show compassion, restore
                dignity, and create a pathway toward greater wellbeing.
              </p>

              <Link
                href="/take-action/volunteer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#E84272] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#d93665]"
              >
                Get Involved
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="rounded-[30px] bg-[#11455A] p-8 sm:p-10">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-[22px] bg-white/10 p-6">
                  <HeartPulse
                    size={28}
                    className="text-[#2FBBC9]"
                  />

                  <h3 className="mt-5 text-xl font-black text-white">
                    Healthcare
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/65">
                    Medical care, education, medicines, and continued support.
                  </p>
                </div>

                <div className="rounded-[22px] bg-white/10 p-6">
                  <Utensils
                    size={28}
                    className="text-[#77C56D]"
                  />

                  <h3 className="mt-5 text-xl font-black text-white">
                    Food Support
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/65">
                    Practical food assistance for households facing hardship.
                  </p>
                </div>

                <div className="rounded-[22px] bg-white/10 p-6">
                  <Users
                    size={28}
                    className="text-[#E84272]"
                  />

                  <h3 className="mt-5 text-xl font-black text-white">
                    Community
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/65">
                    Partnerships that bring people together around shared
                    needs.
                  </p>
                </div>

                <div className="rounded-[22px] bg-white/10 p-6">
                  <HeartPulse
                    size={28}
                    className="text-[#D18051]"
                  />

                  <h3 className="mt-5 text-xl font-black text-white">
                    Compassion
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/65">
                    Serving people with dignity, care, and genuine concern.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f6fafb]">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center lg:px-8 lg:py-24">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#E84272]">
            Join the Work
          </p>

          <h2 className="mt-4 text-4xl font-black text-[#11455A] sm:text-5xl">
            There is a place for you in this mission.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
            Give your time, skills, resources, or financial support and help us
            continue serving communities with compassion.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/take-action/volunteer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E84272] px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#d93665]"
            >
              Volunteer With Us
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/donate"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#11455A] px-8 py-4 font-bold text-[#11455A] transition hover:-translate-y-1 hover:bg-[#11455A] hover:text-white"
            >
              Support Our Work
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}