import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Eye,
  Heart,
  Target,
  Users,
} from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="relative overflow-hidden bg-[#11455A]">
        <div className="absolute inset-0">
          <Image
            src="/images/medical-mission/Group-Photo_Board.webp"
            alt="Blessings Heart Foundation team"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-[#062D3D]/75" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#062D3D]/95 via-[#11455A]/70 to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[480px] max-w-7xl items-center px-5 py-24 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#E84272]" />

              <p className="text-sm font-bold uppercase tracking-[0.22em] text-white">
                Who We Are
              </p>
            </div>

            <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Serving with compassion.
              <br />
              <span className="text-[#2FBBC9]">
                Changing lives with purpose.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80">
              Learn about the story, people, and purpose behind Blessings Heart
              Foundation.
            </p>
          </div>
        </div>
      </section>

      {/* FOUNDER STORY */}
      <section className="overflow-hidden bg-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8 lg:py-28">
          <div className="relative">
            <div className="absolute -left-5 -top-5 h-28 w-28 rounded-full bg-[#2FBBC9]/10" />

            <div className="absolute -bottom-5 -right-5 h-32 w-32 rounded-full bg-[#E84272]/10" />

            <div className="relative overflow-hidden rounded-[30px]">
              <Image
                src="/images/medical-mission/Blessing-1.webp"
                alt="Founder of Blessings Heart Foundation"
                width={4002}
                height={6000}
                className="block h-auto w-full object-contain"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#E84272]" />

              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#E84272]">
                Our Founder's Story
              </p>
            </div>

            <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight text-[#11455A] sm:text-5xl">
              A heart for service became a movement for change.
            </h2>

            <div className="mt-7 space-y-5 text-[16px] leading-8 text-slate-600">
              <p>
                Before Blessings Heart Foundation was established, Dr. Blessing
                was already supporting low-income families in Georgia by
                providing assistance with rent and food.
              </p>

              <p>
                In 2019, she returned to her hometown in Nigeria for the first
                time in ten years. What she encountered was a community facing
                significant disparities in healthcare and education.
              </p>

              <p>
                Seeing the needs of children and families firsthand inspired
                her to take action. She adopted an elementary school with
                approximately 19 students and began providing weekly meals,
                school uniforms, shoes, school supplies, and assistance to
                teachers.
              </p>

              <p>
                As the work continued, the school grew from approximately 19
                students to about 80 children, while the number of teachers
                increased from six to approximately ten.
              </p>

              <p>
                What started as an act of personal service grew into a broader
                commitment to improving the lives of underserved communities.
              </p>

              <p>
                In 2022, Blessings Heart Foundation was officially registered
                as a nonprofit organization, expanding its work to provide
                healthcare and education support to communities in Nigeria,
                alongside food assistance for families in Georgia.
              </p>
            </div>

            <Link
              href="/about/founder"
              className="mt-8 inline-flex items-center gap-2 font-bold text-[#11455A] transition hover:text-[#E84272]"
            >
              Read Our Founder's Story
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="bg-[#f6fafb]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-[2px] w-10 bg-[#E84272]" />

              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#E84272]">
                The Problem
              </p>

              <span className="h-[2px] w-10 bg-[#E84272]" />
            </div>

            <h2 className="mt-5 text-4xl font-black tracking-tight text-[#11455A] sm:text-5xl">
              Breaking the cycle of generational poverty.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Poverty and insecurity among children is a multifaceted,
              often-generational problem involving hunger, lack of shelter,
              and health disparities.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Blessings Heart Foundation believes that meaningful change begins
              by addressing practical needs while creating opportunities for
              children and families to build healthier and more secure futures.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-8 shadow-[0_10px_35px_rgba(17,69,90,0.06)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E84272]/10 text-[#E84272]">
                <Heart size={27} />
              </div>

              <h3 className="mt-6 text-xl font-black text-[#11455A]">
                Hunger
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Helping families access food and basic nourishment when
                economic hardship makes it difficult to meet everyday needs.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-[0_10px_35px_rgba(17,69,90,0.06)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2FBBC9]/10 text-[#2FBBC9]">
                <Target size={27} />
              </div>

              <h3 className="mt-6 text-xl font-black text-[#11455A]">
                Healthcare
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Connecting underserved communities with essential healthcare,
                medicines, health education, and life-changing interventions.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-[0_10px_35px_rgba(17,69,90,0.06)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#77C56D]/10 text-[#77C56D]">
                <Users size={27} />
              </div>

              <h3 className="mt-6 text-xl font-black text-[#11455A]">
                Education
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Giving children access to basic educational resources that can
                help create a pathway out of generational poverty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-7 lg:grid-cols-2">
            {/* Mission */}
            <div className="relative overflow-hidden rounded-[30px] bg-[#11455A] p-9 sm:p-12">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#2FBBC9]/15" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#2FBBC9]">
                  <Target size={28} />
                </div>

                <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-[#2FBBC9]">
                  Our Mission
                </p>

                <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">
                  Improving lives through feeding and primary healthcare.
                </h2>

                <p className="mt-6 leading-8 text-white/70">
                  To improve the lives of children and their families by
                  providing feeding and primary healthcare services.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="relative overflow-hidden rounded-[30px] bg-[#f6fafb] p-9 sm:p-12">
              <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-[#E84272]/10" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E84272]/10 text-[#E84272]">
                  <Eye size={28} />
                </div>

                <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-[#E84272]">
                  Our Vision
                </p>

                <h2 className="mt-4 text-3xl font-black leading-tight text-[#11455A] sm:text-4xl">
                  Healthier communities and brighter futures.
                </h2>

                <p className="mt-6 leading-8 text-slate-600">
                  To promote a healthy community by tackling family hunger,
                  meeting the healthcare needs of parents and children, and
                  ensuring that kids receive basic education as a stepping
                  stone out of generational poverty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PEOPLE */}
      <section className="bg-[#f6fafb]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#77C56D]" />

              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#77C56D]">
                Our People
              </p>
            </div>

            <h2 className="mt-5 text-4xl font-black tracking-tight text-[#11455A] sm:text-5xl">
              People committed to making a difference.
            </h2>

            <p className="mt-6 max-w-2xl leading-8 text-slate-600">
              Behind every initiative is a community of people giving their
              time, expertise, resources, and compassion to help children and
              families.
            </p>

            <Link
              href="/about/team"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#11455A] px-7 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#0d3747]"
            >
              Meet Our Team
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="overflow-hidden rounded-[30px]">
            <Image
              src="/images/medical-mission/Group-Photo_Board.webp"
              alt="Blessings Heart Foundation team"
              width={4000}
              height={2248}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#11455A]">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center lg:py-24">
          <Heart
            size={38}
            className="mx-auto text-[#E84272]"
            fill="currentColor"
          />

          <h2 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Help us continue the work.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
            Your support helps Blessings Heart Foundation reach more children,
            families, and underserved communities with healthcare, education,
            and food assistance.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E84272] px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#d93665]"
            >
              <Heart size={18} fill="currentColor" />
              Donate Today
            </Link>

            <Link
              href="/take-action/volunteer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/60 px-8 py-4 font-bold text-white transition hover:bg-white hover:text-[#11455A]"
            >
              Get Involved
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}