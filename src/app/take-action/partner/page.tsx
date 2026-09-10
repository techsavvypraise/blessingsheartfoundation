import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Handshake,
  Heart,
  Globe2,
  Users,
  Stethoscope,
  Utensils,
} from "lucide-react";

export const metadata = {
  title: "Partner With Us",
  description:
    "Partner with Blessings Heart Foundation to support programs that serve children, families, and communities.",
};

const partnershipOptions = [
  {
    icon: Building2,
    title: "Corporate Partnerships",
    text: "Businesses and organizations can support our programs through strategic partnerships, sponsorships, and corporate giving.",
    color: "#2FBBC9",
  },
  {
    icon: Handshake,
    title: "Community Partnerships",
    text: "Work with us to strengthen local initiatives and connect resources with communities where they are needed most.",
    color: "#77C56D",
  },
  {
    icon: Heart,
    title: "Program Support",
    text: "Support specific initiatives such as food assistance, medical missions, healthcare, and community outreach.",
    color: "#E84272",
  },
  {
    icon: Users,
    title: "In-Kind Support",
    text: "Contribute products, professional services, equipment, expertise, or other resources that can strengthen our work.",
    color: "#D18051",
  },
];

export default function PartnerPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#11455A]">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#2FBBC9]/10" />
        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#E84272]/10" />

        <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#E84272]" />

                <p className="text-sm font-bold uppercase tracking-[0.22em] text-white">
                  Take Action
                </p>
              </div>

              <h1 className="mt-6 text-5xl font-black leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Partner with us
                <br />
                <span className="text-[#2FBBC9]">to create impact.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">
                When we work together, we can reach more people, strengthen
                communities, and create lasting opportunities for those we
                serve.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#partner-form"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E84272] px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#d93665]"
                >
                  Start a Partnership
                  <ArrowRight size={18} />
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white/40 px-8 py-4 font-bold text-white transition hover:bg-white hover:text-[#11455A]"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-3 rounded-[34px] bg-[#2FBBC9]/20 blur-xl" />

              <div className="relative overflow-hidden rounded-[30px] border border-white/10">
                <Image
                  src="/images/team/group-photo-board.webp"
                  alt="Blessings Heart Foundation board and team"
                  width={1600}
                  height={1067}
                  className="h-[420px] w-full object-cover"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#11455A]/60 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-5 backdrop-blur-sm">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E84272]">
                    Together
                  </p>

                  <p className="mt-2 text-lg font-black text-[#11455A]">
                    Compassion becomes stronger when we work together.
                  </p>
                </div>
              </div>
            </div>
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
                  Partnership
                </p>
              </div>

              <h2 className="mt-5 text-4xl font-black leading-tight text-[#11455A] sm:text-5xl">
                Your support can help us do more.
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-slate-600">
                Blessings Heart Foundation works to support children, families,
                and communities through practical programs and compassionate
                service.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Partnerships allow us to combine resources, expertise,
                relationships, and opportunities to extend the reach of our
                work and respond to community needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP OPTIONS */}
      <section className="bg-[#f6fafb]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#E84272]">
              Ways To Partner
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#11455A] sm:text-5xl">
              Find the right way to work with us.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Partnerships can take many forms. We welcome organizations,
              businesses, professionals, and individuals who want to contribute
              to meaningful work.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {partnershipOptions.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[26px] border border-slate-100 bg-white p-8 shadow-[0_12px_35px_rgba(17,69,90,0.06)]"
                >
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: `${item.color}18` }}
                  >
                    <Icon
                      size={27}
                      style={{ color: item.color }}
                    />
                  </div>

                  <h3 className="mt-7 text-xl font-black text-[#11455A]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* USA / NIGERIA */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#77C56D]">
              Our Reach
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#11455A] sm:text-5xl">
              Supporting communities across borders.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Our work connects people and resources across the United States
              and Nigeria.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <div className="rounded-[30px] border border-slate-100 bg-[#f6fafb] p-8 sm:p-10">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-20 items-center justify-center overflow-hidden rounded-xl bg-white p-2 shadow-sm">
                  <Image
                    src="/images/flags/usa.webp"
                    alt="United States flag"
                    width={120}
                    height={80}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#E84272]">
                    United States
                  </p>

                  <h3 className="mt-1 text-2xl font-black text-[#11455A]">
                    Support our community work
                  </h3>
                </div>
              </div>

              <p className="mt-7 leading-7 text-slate-600">
                Partner with initiatives that support families and communities
                through programs such as our Free Food Pantry and other
                community-focused activities.
              </p>

              <Link
                href="/what-we-do/food-pantry"
                className="mt-7 inline-flex items-center gap-2 font-bold text-[#11455A] transition hover:text-[#E84272]"
              >
                Explore Food Pantry
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="rounded-[30px] border border-slate-100 bg-[#f6fafb] p-8 sm:p-10">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-20 items-center justify-center overflow-hidden rounded-xl bg-white p-2 shadow-sm">
                  <Image
                    src="/images/flags/nigeria.webp"
                    alt="Nigeria flag"
                    width={120}
                    height={80}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#2FBBC9]">
                    Nigeria
                  </p>

                  <h3 className="mt-1 text-2xl font-black text-[#11455A]">
                    Support healthcare initiatives
                  </h3>
                </div>
              </div>

              <p className="mt-7 leading-7 text-slate-600">
                Support medical mission trips, the BHF Free Medical Clinic, and
                healthcare initiatives serving communities in Nigeria.
              </p>

              <Link
                href="/what-we-do/medical-missions"
                className="mt-7 inline-flex items-center gap-2 font-bold text-[#11455A] transition hover:text-[#2FBBC9]"
              >
                Explore Medical Missions
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY PARTNER */}
      <section className="bg-[#f6fafb]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#D18051]" />

                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#D18051]">
                  Why Partner
                </p>
              </div>

              <h2 className="mt-5 text-4xl font-black leading-tight text-[#11455A] sm:text-5xl">
                Turn shared values into meaningful action.
              </h2>

              <p className="mt-7 leading-8 text-slate-600">
                A strong partnership brings together people, resources, and
                ideas around a shared commitment to serving others.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E84272]/10">
                    <Heart
                      size={19}
                      className="text-[#E84272]"
                      fill="currentColor"
                    />
                  </div>

                  <div>
                    <h3 className="font-black text-[#11455A]">
                      Create meaningful impact
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Help direct resources toward practical community needs.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2FBBC9]/10">
                    <Users
                      size={19}
                      className="text-[#2FBBC9]"
                    />
                  </div>

                  <div>
                    <h3 className="font-black text-[#11455A]">
                      Strengthen communities
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Support programs designed around people and communities.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#77C56D]/10">
                    <Globe2
                      size={19}
                      className="text-[#77C56D]"
                    />
                  </div>

                  <div>
                    <h3 className="font-black text-[#11455A]">
                      Extend your reach
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Join a wider network committed to positive change.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-[26px] bg-[#11455A] p-8 text-white">
                <Stethoscope
                  size={28}
                  className="text-[#2FBBC9]"
                />

                <h3 className="mt-5 text-xl font-black">
                  Healthcare
                </h3>

                <p className="mt-2 text-sm leading-7 text-white/65">
                  Help strengthen access to healthcare and health education.
                </p>
              </div>

              <div className="rounded-[26px] bg-[#11455A] p-8 text-white">
                <Utensils
                  size={28}
                  className="text-[#77C56D]"
                />

                <h3 className="mt-5 text-xl font-black">
                  Food Assistance
                </h3>

                <p className="mt-2 text-sm leading-7 text-white/65">
                  Help families access food and community support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER FORM */}
      <section
        id="partner-form"
        className="bg-white"
      >
        <div className="mx-auto max-w-4xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#2FBBC9]/10">
              <Handshake
                size={30}
                className="text-[#2FBBC9]"
              />
            </div>

            <h2 className="mt-7 text-4xl font-black text-[#11455A] sm:text-5xl">
              Let&apos;s work together.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
              Tell us about your organization or idea and how you would like to
              partner with Blessings Heart Foundation.
            </p>
          </div>

          <div className="mt-10 rounded-[28px] bg-[#f6fafb] p-7 shadow-[0_20px_60px_rgba(17,69,90,0.08)] sm:p-10">
            <form
              action="#"
              method="post"
              className="space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-2 block text-sm font-bold text-[#11455A]"
                  >
                    First Name
                  </label>

                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="First name"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm text-[#11455A] outline-none transition placeholder:text-slate-400 focus:border-[#2FBBC9] focus:ring-4 focus:ring-[#2FBBC9]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-2 block text-sm font-bold text-[#11455A]"
                  >
                    Last Name
                  </label>

                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Last name"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm text-[#11455A] outline-none transition placeholder:text-slate-400 focus:border-[#2FBBC9] focus:ring-4 focus:ring-[#2FBBC9]/10"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="organization"
                  className="mb-2 block text-sm font-bold text-[#11455A]"
                >
                  Organization
                </label>

                <input
                  id="organization"
                  name="organization"
                  type="text"
                  placeholder="Organization name"
                  className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm text-[#11455A] outline-none transition placeholder:text-slate-400 focus:border-[#2FBBC9] focus:ring-4 focus:ring-[#2FBBC9]/10"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-bold text-[#11455A]"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm text-[#11455A] outline-none transition placeholder:text-slate-400 focus:border-[#2FBBC9] focus:ring-4 focus:ring-[#2FBBC9]/10"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-bold text-[#11455A]"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm text-[#11455A] outline-none transition placeholder:text-slate-400 focus:border-[#2FBBC9] focus:ring-4 focus:ring-[#2FBBC9]/10"
                />
              </div>

              <div>
                <label
                  htmlFor="partnership"
                  className="mb-2 block text-sm font-bold text-[#11455A]"
                >
                  Partnership Interest
                </label>

                <select
                  id="partnership"
                  name="partnership"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm text-[#11455A] outline-none transition focus:border-[#2FBBC9] focus:ring-4 focus:ring-[#2FBBC9]/10"
                >
                  <option value="" disabled>
                    Select an area
                  </option>
                  <option value="corporate">
                    Corporate Partnership
                  </option>
                  <option value="community">
                    Community Partnership
                  </option>
                  <option value="program">
                    Program Support
                  </option>
                  <option value="inkind">
                    In-Kind Support
                  </option>
                  <option value="other">
                    Other
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-bold text-[#11455A]"
                >
                  Tell us about your idea
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us how you would like to partner with us."
                  required
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm text-[#11455A] outline-none transition placeholder:text-slate-400 focus:border-[#2FBBC9] focus:ring-4 focus:ring-[#2FBBC9]/10"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#E84272] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#d93765]"
              >
                Send Partnership Request
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#11455A]">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center lg:px-8 lg:py-24">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#2FBBC9]">
            <Handshake
              size={30}
              className="text-white"
            />
          </div>

          <h2 className="mt-7 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Let&apos;s make an impact together.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
            Your partnership can help us strengthen programs and reach more
            people with practical support and compassionate service.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#partner-form"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E84272] px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#d93665]"
            >
              Start a Partnership
              <ArrowRight size={18} />
            </a>

            <Link
              href="/take-action/volunteer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-8 py-4 font-bold text-white transition hover:bg-white hover:text-[#11455A]"
            >
              Volunteer With Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}