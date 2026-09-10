import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  HandHeart,
  Heart,
  Megaphone,
  Stethoscope,
  Utensils,
} from "lucide-react";

export const metadata = {
  title: "Problem, Mission & Vision",
  description:
    "Learn about the problem Blessings Heart Foundation addresses, our mission, and our vision for healthier communities.",
};

export default function MissionVisionPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#11455A]">
        <div className="absolute inset-0">
          <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#2FBBC9]/10" />
          <div className="absolute -bottom-48 -left-40 h-[520px] w-[520px] rounded-full bg-[#E84272]/10" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#2FBBC9]" />

              <p className="text-sm font-bold uppercase tracking-[0.22em] text-white">
                Who We Are
              </p>
            </div>

            <h1 className="mt-6 text-5xl font-black leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Problem.
              <br />
              <span className="text-[#2FBBC9]">Mission. Vision.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">
              Understanding the challenges facing children and families is
              where meaningful change begins.
            </p>
          </div>
        </div>
      </section>

      {/* THE PROBLEM + MISSION */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            {/* IMAGE */}
            <div className="relative">
              <div className="absolute -left-5 -top-5 h-24 w-24 rounded-3xl bg-[#2FBBC9]/15" />

              <div className="relative overflow-hidden rounded-[28px]">
                <Image
                  src="/images/medical-mission/Group-Photo_Board.webp"
                  alt="Blessings Heart Foundation team and board"
                  width={1600}
                  height={1067}
                  className="h-auto w-full object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -right-5 hidden rounded-2xl bg-[#E84272] px-6 py-5 shadow-xl sm:block">
                <p className="text-sm font-bold text-white">
                  Serving with
                </p>

                <p className="text-lg font-black text-white">
                  compassion
                </p>
              </div>
            </div>

            {/* CONTENT */}
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#2FBBC9]" />

                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#11455A]">
                  About Us
                </p>
              </div>

              <h2 className="mt-5 text-4xl font-black leading-tight text-[#11455A] sm:text-5xl">
                The Problem
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600">
                Combating poverty and insecurity among children is
                multifaceted because it is often a generational problem that
                includes hunger, lack of shelter, and health disparity.
              </p>

              <div className="mt-8 rounded-[26px] bg-[#11455A] p-7 text-white sm:p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-white/20 bg-[#2FBBC9]">
                  <HandHeart
                    size={27}
                    className="text-white"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-black">
                  Our Mission
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/75">
                  To improve the lives of children and their families by
                  providing feeding, and primary healthcare services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION IN ACTION */}
      <section className="bg-[#f6fafb]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-[2px] w-10 bg-[#D18051]" />

              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#D18051]">
                Our Work
              </p>

              <span className="h-[2px] w-10 bg-[#D18051]" />
            </div>

            <h2 className="mt-5 text-4xl font-black text-[#11455A] sm:text-5xl">
              Turning our mission into action.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Our work responds to practical needs while creating
              opportunities for children, families, and communities to
              thrive.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            <div className="rounded-[26px] bg-white p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D18051]/15">
                <Utensils
                  size={27}
                  className="text-[#D18051]"
                />
              </div>

              <h3 className="mt-7 text-xl font-black text-[#11455A]">
                Feeding Families
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Providing food assistance to families experiencing food
                insecurity and economic hardship.
              </p>
            </div>

            <div className="rounded-[26px] bg-white p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2FBBC9]/15">
                <Stethoscope
                  size={27}
                  className="text-[#2FBBC9]"
                />
              </div>

              <h3 className="mt-7 text-xl font-black text-[#11455A]">
                Primary Healthcare
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Helping children and families access essential healthcare
                services and medical support.
              </p>
            </div>

            <div className="rounded-[26px] bg-white p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#77C56D]/15">
                <Heart
                  size={27}
                  className="text-[#77C56D]"
                  fill="currentColor"
                />
              </div>

              <h3 className="mt-7 text-xl font-black text-[#11455A]">
                Community Support
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Working alongside communities, volunteers, donors, and
                partners to create meaningful impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="bg-[#11455A]">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center lg:px-8 lg:py-28">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#2FBBC9]">
            <Heart
              size={30}
              fill="currentColor"
              className="text-white"
            />
          </div>

          <p className="mt-7 text-sm font-bold uppercase tracking-[0.22em] text-[#2FBBC9]">
            Our Vision
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Healthier communities.
          </h2>

          <p className="mx-auto mt-7 max-w-4xl text-xl font-medium leading-9 text-white/75 sm:text-2xl sm:leading-10">
            Promote healthy community by tackling family hunger, meeting
            healthcare needs of parents and children, and ensuring basic
            education as a stepping stone out of generational poverty.
          </p>
        </div>
      </section>

      {/* GET INVOLVED */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute right-[-100px] top-[-100px] h-72 w-72 rounded-full bg-[#D18051]/10" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            {/* CONTENT */}
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#2FBBC9]" />

                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#11455A]">
                  Get Involved
                </p>
              </div>

              <h2 className="mt-5 max-w-2xl text-4xl font-black leading-tight text-[#11455A] sm:text-5xl">
                Join Us In Making A Difference!
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
                In a world where small acts of kindness have the power to
                create big change, you are invited to join our community in
                making a meaningful impact on the lives of those in need.
              </p>

              <div className="mt-8">
                <Link
                  href="/take-action/volunteer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#11455A] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#0c394a]"
                >
                  Get Involved
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>

            {/* VIDEO */}
            <div className="relative overflow-hidden rounded-[30px] bg-[#11455A] p-2 shadow-[0_20px_60px_rgba(17,69,90,0.15)]">
              <div className="overflow-hidden rounded-[24px] bg-black">
                <video
                  controls
                  preload="metadata"
                  playsInline
                  className="block h-auto w-full"
                >
                  <source
                    src="/video/bhf-video.mp4"
                    type="video/mp4"
                  />

                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="flex items-center justify-between px-4 py-4 sm:px-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2FBBC9]">
                    Blessings Heart Foundation
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    Join us in making a difference.
                  </p>
                </div>

                <Heart
                  size={22}
                  className="shrink-0 text-[#E84272]"
                  fill="currentColor"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACTION CARDS */}
      <section className="bg-[#f6fafb]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-5 md:grid-cols-3">

            {/* DONATE */}
            <div className="rounded-[26px] border border-slate-200 bg-white p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2FBBC9]/10">
                  <HandHeart
                    size={25}
                    className="text-[#2FBBC9]"
                  />
                </div>

                <h3 className="text-2xl font-black text-[#11455A]">
                  Donate
                </h3>
              </div>

              <p className="mt-6 text-sm leading-7 text-slate-600">
                Imagine the smile on a child&apos;s face when they receive
                their first meal of the day. Picture the relief in a
                family&apos;s eyes when they finally have clean water to
                drink.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                These moments are made possible because of people like you.
                Every act of generosity helps create a better future.
              </p>

              <Link
                href="/donate"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#11455A] px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#0c394a]"
              >
                Donate Now
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* VOLUNTEER */}
            <div className="rounded-[26px] border border-slate-200 bg-white p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E84272]/10">
                  <Heart
                    size={25}
                    className="text-[#E84272]"
                    fill="currentColor"
                  />
                </div>

                <h3 className="text-2xl font-black text-[#11455A]">
                  Volunteer
                </h3>
              </div>

              <p className="mt-6 text-sm leading-7 text-slate-600">
                When you volunteer with us, you&apos;re not just donating
                your time—you&apos;re sharing your heart.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Whether it&apos;s teaching, building, listening, serving, or
                simply showing up, your presence can change lives.
              </p>

              <Link
                href="/take-action/volunteer"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#E84272] px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#d93665]"
              >
                Volunteer
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* SPREAD THE WORD */}
            <div className="rounded-[26px] border border-slate-200 bg-white p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#77C56D]/10">
                  <Megaphone
                    size={25}
                    className="text-[#77C56D]"
                  />
                </div>

                <h3 className="text-2xl font-black text-[#11455A]">
                  Spread the Word
                </h3>
              </div>

              <p className="mt-6 text-sm leading-7 text-slate-600">
                Change doesn&apos;t happen in silence—it starts with a voice.
                By spreading the word about our mission, you&apos;re
                amplifying hope and inspiring action.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Share our story with your friends, family, and community.
              </p>

              <Link
                href="/news"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#77C56D] px-6 py-3 text-sm font-bold text-[#11455A] transition hover:-translate-y-0.5 hover:bg-[#69b960]"
              >
                Learn More
                <ArrowRight size={16} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#11455A]">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center lg:px-8 lg:py-24">
          <Heart
            size={38}
            className="mx-auto text-[#E84272]"
            fill="currentColor"
          />

          <h2 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Together, we can make a difference.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
            Your support helps us continue providing food, healthcare,
            education, and hope to children and families in need.
          </p>

          <Link
            href="/donate"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#E84272] px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#d93665]"
          >
            Support Blessings Heart Foundation
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}