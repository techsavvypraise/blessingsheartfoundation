import Link from "next/link";
import {
  ArrowRight,
  Heart,
  HandHeart,
  Users,
  Stethoscope,
  Utensils,
  GraduationCap,
  Globe2,
} from "lucide-react";

export const metadata = {
  title: "Volunteer",
  description:
    "Volunteer with Blessings Heart Foundation and help make a meaningful difference in the lives of children, families, and communities.",
};

const opportunities = [
  {
    icon: Heart,
    title: "Serve with Compassion",
    text: "Give your time and energy to support people and communities through the work of Blessings Heart Foundation.",
    color: "#E84272",
  },
  {
    icon: Stethoscope,
    title: "Support Medical Missions",
    text: "Join our healthcare initiatives and help provide care, health education, and support to communities in need.",
    color: "#2FBBC9",
  },
  {
    icon: Utensils,
    title: "Support Food Assistance",
    text: "Help us serve families through our food pantry initiatives and community support programs.",
    color: "#77C56D",
  },
  {
    icon: GraduationCap,
    title: "Share Your Skills",
    text: "Use your professional skills, experience, and talents to strengthen our programs and community initiatives.",
    color: "#D18051",
  },
];

export default function VolunteerPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#11455A]">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#2FBBC9]/10" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#E84272]/10" />

        <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#E84272]" />

              <p className="text-sm font-bold uppercase tracking-[0.22em] text-white">
                Take Action
              </p>
            </div>

            <h1 className="mt-6 text-5xl font-black leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Give your time.
              <br />
              <span className="text-[#2FBBC9]">Make a difference.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">
              Your time, skills, compassion, and willingness to serve can help
              Blessings Heart Foundation reach more people and create
              meaningful change in communities.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#volunteer-form"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E84272] px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#d93665]"
              >
                Become a Volunteer
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
                  Volunteer With Us
                </p>
              </div>

              <h2 className="mt-5 text-4xl font-black leading-tight text-[#11455A] sm:text-5xl">
                There is a place for you in the work.
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-slate-600">
                Blessings Heart Foundation believes that lasting impact grows
                through people who are willing to serve. Volunteers are an
                important part of the work we do across our communities.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Whether you want to serve during a specific program, contribute
                your professional skills, support an event, or simply help
                spread the word, your contribution matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OPPORTUNITIES */}
      <section className="bg-[#f6fafb]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#E84272]">
              Ways To Serve
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#11455A] sm:text-5xl">
              Find a way to make an impact.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Bring your passion, experience, and time to an area where you can
              make a meaningful contribution.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {opportunities.map((item) => {
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

      {/* WHY VOLUNTEER */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#77C56D]" />

                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#77C56D]">
                  Why Volunteer
                </p>
              </div>

              <h2 className="mt-5 text-4xl font-black leading-tight text-[#11455A] sm:text-5xl">
                Your contribution can go further than you think.
              </h2>

              <p className="mt-7 leading-8 text-slate-600">
                Volunteering is an opportunity to work alongside others who
                share a commitment to helping children, families, and
                communities.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                Every hour, skill, connection, and act of service helps us
                strengthen the work we are doing and reach people who need
                support.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] bg-[#f6fafb] p-7">
                <Heart
                  size={25}
                  className="text-[#E84272]"
                  fill="currentColor"
                />

                <h3 className="mt-5 font-black text-[#11455A]">
                  Meaningful Service
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Turn your willingness to help into practical action.
                </p>
              </div>

              <div className="rounded-[24px] bg-[#f6fafb] p-7">
                <Users
                  size={25}
                  className="text-[#2FBBC9]"
                />

                <h3 className="mt-5 font-black text-[#11455A]">
                  Community
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Work alongside people who believe in serving others.
                </p>
              </div>

              <div className="rounded-[24px] bg-[#f6fafb] p-7">
                <HandHeart
                  size={25}
                  className="text-[#77C56D]"
                />

                <h3 className="mt-5 font-black text-[#11455A]">
                  Give Back
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Help create positive change through hands-on service.
                </p>
              </div>

              <div className="rounded-[24px] bg-[#f6fafb] p-7">
                <Globe2
                  size={25}
                  className="text-[#D18051]"
                />

                <h3 className="mt-5 font-black text-[#11455A]">
                  Global Impact
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Support initiatives serving communities across locations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VOLUNTEER FORM */}
      <section
        id="volunteer-form"
        className="bg-[#f6fafb]"
      >
        <div className="mx-auto max-w-4xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E84272]/10">
              <HandHeart
                size={30}
                className="text-[#E84272]"
              />
            </div>

            <h2 className="mt-7 text-4xl font-black text-[#11455A] sm:text-5xl">
              Become a Volunteer
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
              Tell us a little about yourself and how you would like to
              contribute to Blessings Heart Foundation.
            </p>
          </div>

          <div className="mt-10 rounded-[28px] bg-white p-7 shadow-[0_20px_60px_rgba(17,69,90,0.10)] sm:p-10">
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
                  htmlFor="interest"
                  className="mb-2 block text-sm font-bold text-[#11455A]"
                >
                  How would you like to help?
                </label>

                <select
                  id="interest"
                  name="interest"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm text-[#11455A] outline-none transition focus:border-[#2FBBC9] focus:ring-4 focus:ring-[#2FBBC9]/10"
                >
                  <option value="" disabled>
                    Select an area
                  </option>
                  <option value="general">General Volunteering</option>
                  <option value="medical">Medical Missions</option>
                  <option value="food-pantry">Food Pantry</option>
                  <option value="skills">Professional Skills</option>
                  <option value="events">Events & Community Activities</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-bold text-[#11455A]"
                >
                  Tell us more
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your interests, skills, or how you would like to volunteer."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm text-[#11455A] outline-none transition placeholder:text-slate-400 focus:border-[#2FBBC9] focus:ring-4 focus:ring-[#2FBBC9]/10"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#E84272] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#d93765]"
              >
                Submit Volunteer Interest
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#11455A]">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center lg:px-8 lg:py-24">
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            Ready to make a difference?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
            Join us in serving children, families, and communities through
            compassionate action.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#volunteer-form"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E84272] px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#d93665]"
            >
              Volunteer With Us
              <ArrowRight size={18} />
            </a>

            <Link
              href="/take-action/partner"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-8 py-4 font-bold text-white transition hover:bg-white hover:text-[#11455A]"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}