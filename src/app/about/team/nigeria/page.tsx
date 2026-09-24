import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Users,
  HandHeart,
} from "lucide-react";

export const metadata = {
  title: "Nigeria's Team",
  description:
    "Meet the Nigeria team supporting Blessings Heart Foundation's healthcare and community work.",
};

const nigeriaTeam = [
  {
    name: "Daniel Udo",
    image: "/images/team/daniel-udo.webp",
  },
  {
    name: "Destiny Agu",
    image: "/images/team/destiny-agu.webp",
  },
  {
    name: "Dr. Dan",
    image: "/images/team/dr-dan.webp",
  },
  {
    name: "Dr. Onifade",
    image: "/images/team/dr-onifade.webp",
  },
  {
    name: "Dr. Owen",
    image: "/images/team/dr-owen.webp",
  },
  {
    name: "Ifiok Mosses",
    image: "/images/team/ifiok-mosses.webp",
  },
  {
    name: "Rev. Uyobong",
    image: "/images/team/uyobong-rev.webp",
  },
];

export default function NigeriaTeamPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#11455A]">
        <div className="absolute inset-0">
          <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#2FBBC9]/10" />
          <div className="absolute -bottom-48 -left-40 h-[520px] w-[520px] rounded-full bg-[#E84272]/10" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#77C56D]" />

              <p className="text-sm font-bold uppercase tracking-[0.22em] text-white">
                Who We Are
              </p>
            </div>

            <h1 className="mt-6 text-5xl font-black leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Nigeria&apos;s
              <br />
              <span className="text-[#2FBBC9]">Team.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">
              The people working alongside communities and helping bring
              Blessings Heart Foundation&apos;s mission to life in Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* GROUP PHOTO + INTRO */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="relative">
              <div className="absolute -left-5 -top-5 h-24 w-24 rounded-3xl bg-[#2FBBC9]/15" />

              <div className="relative overflow-hidden rounded-[30px]">
                <Image
                  src="/images/team/group-photo-board.webp"
                  alt="Blessings Heart Foundation Nigeria team"
                  width={1600}
                  height={1067}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#2FBBC9]" />

                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#2FBBC9]">
                  Nigeria&apos;s Team
                </p>
              </div>

              <h2 className="mt-5 text-4xl font-black leading-tight text-[#11455A] sm:text-5xl">
                Serving communities together.
              </h2>

              <p className="mt-7 text-base leading-8 text-slate-600">
                Our Nigeria team works alongside healthcare professionals,
                volunteers, community members, and partners to support the
                foundation&apos;s programs and initiatives.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-[#f6fafb] p-5">
                  <Users size={22} className="text-[#2FBBC9]" />

                  <p className="mt-3 font-black text-[#11455A]">
                    Community
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Working alongside the communities we serve.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f6fafb] p-5">
                  <HandHeart size={22} className="text-[#E84272]" />

                  <p className="mt-3 font-black text-[#11455A]">
                    Service
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Turning compassion into practical action.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-[#f6fafb]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-[2px] w-10 bg-[#E84272]" />

              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#E84272]">
                Meet The Team
              </p>

              <span className="h-[2px] w-10 bg-[#E84272]" />
            </div>

            <h2 className="mt-5 text-4xl font-black text-[#11455A] sm:text-5xl">
              The people behind the work.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Our team brings together experience, skills, compassion, and a
              shared commitment to serving others.
            </p>
          </div>

          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {nigeriaTeam.map((member, index) => (
              <article
                key={member.image}
                className="group overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-[0_10px_35px_rgba(17,69,90,0.06)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(17,69,90,0.13)]"
              >
                <div className="relative aspect-[4/4.6] overflow-hidden bg-[#eef5f6]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div
                    className={`absolute bottom-0 left-0 h-1.5 w-full ${
                      index % 3 === 0
                        ? "bg-[#2FBBC9]"
                        : index % 3 === 1
                          ? "bg-[#E84272]"
                          : "bg-[#77C56D]"
                    }`}
                  />
                </div>

                <div className="p-6">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#2FBBC9]">
                    Nigeria&apos;s Team
                  </p>

                  <h3 className="mt-3 text-xl font-black text-[#11455A]">
                    {member.name}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Team Member
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#11455A]">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center lg:px-8 lg:py-24">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#2FBBC9]">
            <Heart size={30} className="text-white" fill="currentColor" />
          </div>

          <h2 className="mt-7 text-4xl font-black text-white sm:text-5xl">
            Working together to make a difference.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
            Our work in Nigeria is made possible through the dedication of our
            team, volunteers, healthcare professionals, donors, and community
            partners.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/what-we-do/medical-missions"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E84272] px-8 py-4 font-bold text-white transition hover:-translate-y-1"
            >
              Explore Medical Missions
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/take-action/volunteer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-8 py-4 font-bold text-white transition hover:bg-white hover:text-[#11455A]"
            >
              Volunteer
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}