import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Users,
  Handshake,
  HeartHandshake,
} from "lucide-react";

export const metadata = {
  title: "Board & Staff",
  description:
    "Meet the USA Board and Nigeria's Team supporting the mission of Blessings Heart Foundation.",
};

const teams = [
  {
    title: "USA Board",
    country: "United States",
    flag: "/images/flags/usa.webp",
    description:
      "Meet the members providing leadership, stewardship, and support for Blessings Heart Foundation in the United States.",
    href: "/about/team/usa",
    button: "Meet the USA Board",
    accent: "#E84272",
    background: "#fff7fa",
  },
  {
    title: "Nigeria's Team",
    country: "Nigeria",
    flag: "/images/flags/nigeria.webp",
    description:
      "Meet the people working alongside communities, healthcare professionals, volunteers, and partners to advance the foundation's work in Nigeria.",
    href: "/about/team/nigeria",
    button: "Meet Nigeria's Team",
    accent: "#2FBBC9",
    background: "#f4fcfd",
  },
];

export default function BoardAndStaffPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[650px] overflow-hidden bg-[#11455A]">
        {/* Background image */}
        <Image
          src="/images/team/group-photo-board.webp"
          alt="Blessings Heart Foundation Board and Team"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#11455A]/35 via-[#11455A]/55 to-[#11455A]/95" />

        {/* Bottom color fade */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#11455A] to-transparent" />

        {/* Decorative circles */}
        <div className="absolute -left-32 bottom-[-160px] h-[420px] w-[420px] rounded-full bg-[#E84272]/15" />

        <div className="absolute -right-32 top-[-160px] h-[420px] w-[420px] rounded-full bg-[#2FBBC9]/15" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl items-center justify-center px-5 pb-28 pt-20 text-center lg:px-8">
          <div className="max-w-5xl">
            <div className="flex items-center justify-center gap-3">
              <span className="h-[2px] w-10 bg-[#E84272]" />

              <p className="text-sm font-bold uppercase tracking-[0.24em] text-white">
                Who We Are
              </p>

              <span className="h-[2px] w-10 bg-[#2FBBC9]" />
            </div>

            <h1 className="mt-6 text-5xl font-black leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-8xl">
              Board{" "}
              <span className="text-[#2FBBC9]">&amp; Staff.</span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
              Meet the people behind Blessings Heart Foundation — leaders,
              team members, and dedicated individuals working together to
              advance our mission of service and community impact.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/about/team/usa"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E84272] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#11455A]/20 transition hover:-translate-y-1 hover:bg-[#d93765]"
              >
                <span>🇺🇸</span>
                USA Board
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/about/team/nigeria"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/50 bg-[#11455A]/20 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white hover:text-[#11455A]"
              >
                <span>🇳🇬</span>
                Nigeria&apos;s Team
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM CARDS */}
      <section className="relative bg-[#f5fafb]">
        <div className="mx-auto max-w-7xl px-5 pb-20 lg:px-8 lg:pb-28">
          <div className="relative z-20 -mt-20 grid gap-6 lg:grid-cols-2">
            {teams.map((team) => (
              <article
                key={team.href}
                className="relative overflow-hidden rounded-[28px] border border-white bg-white p-8 shadow-[0_20px_60px_rgba(17,69,90,0.12)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(17,69,90,0.17)] lg:p-10"
              >
                {/* Decorative background circles */}
                <div
                  className="absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-60"
                  style={{
                    backgroundColor: `${team.accent}12`,
                  }}
                />

                <div
                  className="absolute -bottom-20 -left-16 h-44 w-44 rounded-full opacity-60"
                  style={{
                    backgroundColor: `${team.accent}10`,
                  }}
                />

                <div className="relative">
                  {/* Flag */}
                  <div className="flex justify-center">
                    <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-white p-1 shadow-[0_8px_25px_rgba(17,69,90,0.12)]">
                      <Image
                        src={team.flag}
                        alt={`${team.country} flag`}
                        width={88}
                        height={88}
                        className="h-full w-full rounded-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Country */}
                  <div className="mt-5 flex items-center justify-center gap-2">
                    <Image
                      src={team.flag}
                      alt=""
                      width={24}
                      height={16}
                      className="h-4 w-6 rounded-sm object-cover"
                    />

                    <p
                      className="text-xs font-bold uppercase tracking-[0.2em]"
                      style={{ color: team.accent }}
                    >
                      {team.country}
                    </p>
                  </div>

                  <h2 className="mt-5 text-center text-3xl font-black text-[#11455A] sm:text-4xl">
                    {team.title}
                  </h2>

                  <p className="mx-auto mt-5 max-w-xl text-center leading-8 text-slate-600">
                    {team.description}
                  </p>

                  <div className="mt-8 flex justify-center">
                    <Link
                      href={team.href}
                      className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1"
                      style={{
                        backgroundColor: team.accent,
                      }}
                    >
                      {team.button}
                      <ArrowRight size={17} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SHARED PURPOSE */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex items-center justify-center gap-4">
              <span className="h-[2px] w-14 bg-[#2FBBC9]" />

              <Heart
                size={25}
                className="text-[#E84272]"
                fill="currentColor"
              />

              <span className="h-[2px] w-14 bg-[#2FBBC9]" />
            </div>

            <h2 className="mt-6 text-4xl font-black text-[#11455A] sm:text-5xl">
              Two teams.{" "}
              <span className="text-[#E84272]">One mission.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-600">
              Blessings Heart Foundation is supported by people serving across
              the United States and Nigeria. Together, they help provide the
              leadership, coordination, and hands-on support needed to serve
              children, families, and communities.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center md:border-r md:border-slate-200 md:pr-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E84272]">
                <Users
                  size={28}
                  className="text-white"
                />
              </div>

              <h3 className="mt-5 text-xl font-black text-[#11455A]">
                People
              </h3>

              <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
                Compassionate individuals making a difference.
              </p>
            </div>

            <div className="flex flex-col items-center text-center md:border-r md:border-slate-200 md:pr-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#2FBBC9]">
                <Handshake
                  size={28}
                  className="text-white"
                />
              </div>

              <h3 className="mt-5 text-xl font-black text-[#11455A]">
                Partnership
              </h3>

              <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
                Stronger together for greater impact.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#77C56D]">
                <HeartHandshake
                  size={28}
                  className="text-white"
                />
              </div>

              <h3 className="mt-5 text-xl font-black text-[#11455A]">
                Purpose
              </h3>

              <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
                Serving communities and changing lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#11455A]">
        <div className="absolute -left-20 bottom-[-160px] h-[360px] w-[360px] rounded-full bg-white/5" />

        <div className="absolute right-[-100px] top-[-150px] h-[360px] w-[360px] rounded-full bg-[#2FBBC9]/10" />

        <div className="relative mx-auto max-w-5xl px-5 py-20 text-center lg:px-8 lg:py-24">
          <div className="flex items-center justify-center gap-4">
            <span className="h-[2px] w-12 bg-[#2FBBC9]" />

            <p className="text-xs font-bold uppercase tracking-[0.24em] text-white">
              Be Part of Our Mission
            </p>

            <span className="h-[2px] w-12 bg-[#2FBBC9]" />
          </div>

          <h2 className="mt-6 text-4xl font-black text-white sm:text-5xl lg:text-6xl">
            Get <span className="text-[#2FBBC9]">Involved.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
            Whether you volunteer, partner, or donate, you can help us make a
            lasting impact in the communities we serve.
          </p>

          <Link
            href="/take-action/volunteer"
            className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-[#ff6a00] px-8 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#e85f00]"
          >
            Take Action Today
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}