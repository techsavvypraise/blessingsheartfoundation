import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Heart,
  Newspaper,
} from "lucide-react";

export const metadata = {
  title: "News & Updates",
  description:
    "Stay connected with Blessings Heart Foundation news, stories, program updates, and opportunities to get involved.",
};

const updates = [
  {
    category: "Foundation Updates",
    title: "Stories of compassion, service, and community impact",
    text: "Follow Blessings Heart Foundation as we continue serving communities through healthcare, food assistance, and community-focused initiatives.",
    date: "Latest Updates",
  },
  {
    category: "Medical Missions",
    title: "Bringing healthcare closer to communities in need",
    text: "Our medical mission work brings volunteers and healthcare professionals together to provide direct patient care, health education, medicines, and lifesaving support.",
    date: "Program Updates",
  },
  {
    category: "Community Support",
    title: "Creating opportunities to make a difference",
    text: "There are many ways to support the work of Blessings Heart Foundation, from volunteering and partnering to giving resources that help our programs continue.",
    date: "Get Involved",
  },
];

export default function NewsPage() {
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
                News & Updates
              </p>

              <span className="h-[2px] w-10 bg-[#E84272]" />
            </div>

            <h1 className="mt-6 text-5xl font-black leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Stay connected to
              <br />
              <span className="text-[#2FBBC9]">the work.</span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/75">
              Follow the work of Blessings Heart Foundation and stay connected
              to the people, programs, and opportunities that make our mission
              possible.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#2FBBC9]/10">
                <Newspaper
                  size={30}
                  className="text-[#2FBBC9]"
                />
              </div>

              <h2 className="mt-7 text-4xl font-black leading-tight text-[#11455A] sm:text-5xl">
                What&apos;s happening at BHF?
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-slate-600">
                This is where we share updates about Blessings Heart
                Foundation, our programs, community activities, and
                opportunities to get involved.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Check back regularly for new stories and updates from the
                foundation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UPDATES */}
      <section className="bg-[#f6fafb]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#E84272]">
              From The Foundation
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#11455A] sm:text-5xl">
              Stories worth following.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {updates.map((update) => (
              <article
                key={update.title}
                className="group rounded-[28px] bg-white p-8 shadow-[0_15px_45px_rgba(17,69,90,0.06)] transition hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(17,69,90,0.10)]"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#E84272]/10 px-3 py-1.5 text-xs font-bold text-[#E84272]">
                    {update.category}
                  </span>

                  <CalendarDays
                    size={19}
                    className="text-[#2FBBC9]"
                  />
                </div>

                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                  {update.date}
                </p>

                <h3 className="mt-3 text-2xl font-black leading-tight text-[#11455A]">
                  {update.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {update.text}
                </p>

                <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#11455A]">
                  Learn More
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SUBSCRIBE */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center lg:px-8 lg:py-28">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#77C56D]/15">
            <Heart
              size={29}
              className="text-[#77C56D]"
              fill="currentColor"
            />
          </div>

          <p className="mt-7 text-sm font-bold uppercase tracking-[0.22em] text-[#77C56D]">
            Stay Connected
          </p>

          <h2 className="mt-4 text-4xl font-black text-[#11455A] sm:text-5xl">
            Don&apos;t miss an update.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
            Subscribe to our email list to receive updates about Blessings
            Heart Foundation, our programs, and opportunities to get involved.
          </p>

          <Link
            href="/take-action/subscribe"
            className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-[#E84272] px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#d93665]"
          >
            Subscribe to Our Email List
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}