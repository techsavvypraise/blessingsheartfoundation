import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  GraduationCap,
  Users,
  Globe2,
} from "lucide-react";

export const metadata = {
  title: "Our Founder's Story",
  description:
    "Learn the story behind Blessings Heart Foundation and the journey that inspired its mission to serve communities with compassion.",
};

export default function FounderPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#11455A]">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#2FBBC9]/10" />
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#E84272]/10" />

        <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#E84272]" />

              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#E84272]">
                Our Founder
              </p>
            </div>

            <h1 className="mt-6 text-5xl font-black leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
              One act of kindness can
              <br />
              <span className="text-[#2FBBC9]">
                become a movement.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">
              Discover the journey that inspired Blessings Heart Foundation
              and continues to shape its commitment to serving people and
              communities with compassion.
            </p>
          </div>
        </div>
      </section>

      {/* FOUNDER STORY */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            {/* FOUNDER IMAGE */}
            <div className="relative mx-auto w-full max-w-[540px]">
              <div className="absolute -left-4 -top-4 h-24 w-24 rounded-[24px] bg-[#77C56D]/20" />

              <div className="absolute -bottom-5 -right-5 h-20 w-20 rounded-[22px] bg-[#D18051]" />

              <div className="relative rounded-[32px] bg-[#f4faf7] p-5 shadow-[0_25px_70px_rgba(17,69,90,0.10)] sm:p-7">
                <div className="relative overflow-hidden rounded-[25px] bg-[#11455A]">
                  <Image
                    src="/images/team/blessing-1.webp"
                    alt="Dr. Blessing, Founder of Blessings Heart Foundation"
                    width={900}
                    height={1100}
                    priority
                    className="h-auto w-full object-cover"
                  />
                </div>

                <div className="absolute -bottom-2 right-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D18051] text-white shadow-[0_15px_35px_rgba(17,69,90,0.18)] sm:right-1">
                  <Heart
                    size={29}
                    fill="currentColor"
                  />
                </div>
              </div>
            </div>

            {/* STORY */}
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#E84272]" />

                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#E84272]">
                  The Beginning
                </p>
              </div>

              <h2 className="mt-5 text-4xl font-black leading-tight text-[#11455A] sm:text-5xl">
                One act of kindness can become a movement.
              </h2>

              <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  Dr. Blessing had already been supporting low-income families
                  in Georgia by providing assistance with rent, food supplies,
                  and other practical needs.
                </p>

                <p>
                  Her personal commitment to helping people in difficult
                  circumstances eventually led to a defining moment in 2019,
                  when she returned to her hometown in Nigeria for the first
                  time in ten years.
                </p>

                <p>
                  What she encountered during that visit brought the realities
                  of health and education disparities into sharper focus and
                  deepened her desire to make a difference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2019 TURNING POINT */}
      <section className="bg-[#f6fafb]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#2FBBC9]" />

                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#2FBBC9]">
                  A Defining Moment
                </p>
              </div>

              <h2 className="mt-5 text-4xl font-black leading-tight text-[#11455A] sm:text-5xl">
                2019 changed the direction of the vision.
              </h2>

              <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  Returning to her hometown after a decade away gave Dr.
                  Blessing a closer look at challenges that many families and
                  communities were facing.
                </p>

                <p>
                  The experience strengthened her conviction that meaningful
                  change requires more than temporary assistance. It requires
                  compassion, consistency, partnership, and a willingness to
                  meet people where they are.
                </p>

                <p>
                  That conviction became the foundation for a broader vision of
                  service—one focused on improving lives through practical
                  support, healthcare, education, and community engagement.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-[24px] bg-white p-7 shadow-[0_15px_40px_rgba(17,69,90,0.06)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2FBBC9]/10">
                  <Heart
                    size={24}
                    className="text-[#2FBBC9]"
                  />
                </div>

                <h3 className="mt-5 text-xl font-black text-[#11455A]">
                  Compassion
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Seeing people, understanding their needs, and responding
                  with care.
                </p>
              </div>

              <div className="rounded-[24px] bg-white p-7 shadow-[0_15px_40px_rgba(17,69,90,0.06)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E84272]/10">
                  <Users
                    size={24}
                    className="text-[#E84272]"
                  />
                </div>

                <h3 className="mt-5 text-xl font-black text-[#11455A]">
                  Community
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Working alongside communities rather than simply working for
                  them.
                </p>
              </div>

              <div className="rounded-[24px] bg-white p-7 shadow-[0_15px_40px_rgba(17,69,90,0.06)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#77C56D]/10">
                  <Globe2
                    size={24}
                    className="text-[#77C56D]"
                  />
                </div>

                <h3 className="mt-5 text-xl font-black text-[#11455A]">
                  Lasting Impact
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Building initiatives that can continue creating meaningful
                  change over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCHOOL IMPACT */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#E84272]">
              The Bigger Picture
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#11455A] sm:text-5xl">
              Turning concern into action.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              What began with a desire to help families grew into a vision for
              creating sustainable opportunities for children and communities.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            <div className="rounded-[26px] border border-slate-100 bg-[#f6fafb] p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2FBBC9]/10">
                <GraduationCap
                  size={28}
                  className="text-[#2FBBC9]"
                />
              </div>

              <p className="mt-6 text-4xl font-black text-[#11455A]">
                2019
              </p>

              <h3 className="mt-2 font-black text-[#11455A]">
                A New Perspective
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                A return to Nigeria brought health and education disparities
                into sharper focus.
              </p>
            </div>

            <div className="rounded-[26px] border border-slate-100 bg-[#f6fafb] p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E84272]/10">
                <Heart
                  size={28}
                  className="text-[#E84272]"
                />
              </div>

              <p className="mt-6 text-4xl font-black text-[#11455A]">
                2022
              </p>

              <h3 className="mt-2 font-black text-[#11455A]">
                Foundation Established
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                The vision developed into Blessings Heart Foundation and its
                growing work across communities.
              </p>
            </div>

            <div className="rounded-[26px] border border-slate-100 bg-[#f6fafb] p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#77C56D]/10">
                <Users
                  size={28}
                  className="text-[#77C56D]"
                />
              </div>

              <p className="mt-6 text-4xl font-black text-[#11455A]">
                Impact
              </p>

              <h3 className="mt-2 font-black text-[#11455A]">
                People at the Center
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                The work remains centered on people, dignity, opportunity, and
                practical support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDATION */}
      <section className="bg-[#11455A]">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E84272]">
                <Heart
                  size={30}
                  className="text-white"
                  fill="currentColor"
                />
              </div>

              <p className="mt-7 text-sm font-bold uppercase tracking-[0.22em] text-[#2FBBC9]">
                Blessings Heart Foundation
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl">
                From one act of kindness to a growing movement.
              </h2>
            </div>

            <div className="text-white/75">
              <p className="text-lg leading-8">
                Founded from a desire to make a meaningful difference, Blessings
                Heart Foundation continues to bring people together around a
                shared commitment to compassion and service.
              </p>

              <p className="mt-6 text-lg leading-8">
                Through healthcare, food assistance, education, and community
                initiatives, the foundation seeks to meet practical needs while
                creating opportunities for people to thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="bg-[#f6fafb]">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center lg:px-8 lg:py-28">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#77C56D]/15">
            <Heart
              size={29}
              className="text-[#77C56D]"
              fill="currentColor"
            />
          </div>

          <p className="mt-7 text-sm font-bold uppercase tracking-[0.22em] text-[#77C56D]">
            The Vision
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight text-[#11455A] sm:text-5xl">
            A world where compassion becomes action.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Dr. Blessing’s journey continues to inspire the foundation’s
            commitment to serve with compassion, build meaningful partnerships,
            and create lasting impact in the communities it reaches.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center lg:px-8 lg:py-24">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#E84272]">
            Be Part of the Story
          </p>

          <h2 className="mt-4 text-4xl font-black text-[#11455A] sm:text-5xl">
            Help us turn compassion into impact.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
            There are many ways to support the work of Blessings Heart
            Foundation and help bring meaningful change to more people.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/take-action/volunteer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E84272] px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#d93665]"
            >
              Become a Volunteer
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