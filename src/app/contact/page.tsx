import Link from "next/link";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Blessings Heart Foundation. We would love to hear from you and explore how we can serve and work together.",
};

const contactDetails = [
  {
    icon: Phone,
    title: "Phone",
    value: "+1 678 895 1185",
    href: "tel:+16788951185",
    color: "#E84272",
  },
  {
    icon: Mail,
    title: "Email",
    value: "Blessingsheartfoundation@gmail.com",
    href: "mailto:Blessingsheartfoundation@gmail.com",
    color: "#2FBBC9",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "955 River Centre Place, Lawrenceville, GA 30043",
    href: "https://www.google.com/maps/search/?api=1&query=955+River+Centre+Place+Lawrenceville+GA+30043",
    color: "#77C56D",
  },
];

export default function ContactPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#11455A]">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#2FBBC9]/10" />
        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#E84272]/10" />

        <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#E84272]" />

              <p className="text-sm font-bold uppercase tracking-[0.22em] text-white">
                Contact Us
              </p>
            </div>

            <h1 className="mt-6 text-5xl font-black leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Let&apos;s start a
              <br />
              <span className="text-[#2FBBC9]">conversation.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">
              Have a question, want to get involved, or interested in working
              with Blessings Heart Foundation? We would love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-5 md:grid-cols-3">
            {contactDetails.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.title === "Address" ? "_blank" : undefined}
                  rel={item.title === "Address" ? "noreferrer" : undefined}
                  className="group rounded-[26px] border border-slate-100 bg-[#f6fafb] p-8 transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(17,69,90,0.09)]"
                >
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: `${item.color}18` }}
                  >
                    <Icon
                      size={26}
                      style={{ color: item.color }}
                    />
                  </div>

                  <p className="mt-7 text-sm font-bold uppercase tracking-[0.15em] text-slate-400">
                    {item.title}
                  </p>

                  <p className="mt-2 text-base font-bold leading-7 text-[#11455A] group-hover:text-[#E84272]">
                    {item.value}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="bg-[#f6fafb]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#2FBBC9]" />

                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#2FBBC9]">
                  Get In Touch
                </p>
              </div>

              <h2 className="mt-5 text-4xl font-black leading-tight text-[#11455A] sm:text-5xl">
                We&apos;re here to listen.
              </h2>

              <p className="mt-7 leading-8 text-slate-600">
                Whether you have a question about our programs, want to
                volunteer, would like to partner with us, or simply want to
                learn more about our work, send us a message.
              </p>

              <div className="mt-9 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E84272]/10">
                    <MessageCircle
                      size={21}
                      className="text-[#E84272]"
                    />
                  </div>

                  <div>
                    <h3 className="font-black text-[#11455A]">
                      Questions?
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Reach out and let us know how we can help.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#2FBBC9]/10">
                    <Clock
                      size={21}
                      className="text-[#2FBBC9]"
                    />
                  </div>

                  <div>
                    <h3 className="font-black text-[#11455A]">
                      Stay Connected
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Follow our work and stay connected with our community.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[30px] bg-white p-7 shadow-[0_20px_60px_rgba(17,69,90,0.08)] sm:p-10">
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
                    htmlFor="subject"
                    className="mb-2 block text-sm font-bold text-[#11455A]"
                  >
                    Subject
                  </label>

                  <select
                    id="subject"
                    name="subject"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm text-[#11455A] outline-none transition focus:border-[#2FBBC9] focus:ring-4 focus:ring-[#2FBBC9]/10"
                  >
                    <option value="" disabled>
                      What would you like to contact us about?
                    </option>
                    <option value="general">General Inquiry</option>
                    <option value="volunteer">Volunteering</option>
                    <option value="partnership">Partnership</option>
                    <option value="donation">Donation</option>
                    <option value="programs">Our Programs</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-bold text-[#11455A]"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="How can we help you?"
                    required
                    className="w-full resize-none rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm text-[#11455A] outline-none transition placeholder:text-slate-400 focus:border-[#2FBBC9] focus:ring-4 focus:ring-[#2FBBC9]/10"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#E84272] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#d93765]"
                >
                  Send Message
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ACTIONS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#77C56D]">
              Get Involved
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#11455A] sm:text-5xl">
              Looking for a way to help?
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Choose how you would like to be part of the work of Blessings
              Heart Foundation.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <Link
              href="/take-action/volunteer"
              className="group rounded-[26px] bg-[#f6fafb] p-8 transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(17,69,90,0.08)]"
            >
              <h3 className="text-xl font-black text-[#11455A]">
                Volunteer
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Give your time, skills, and energy to support our work.
              </p>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#E84272]">
                Volunteer With Us
                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                />
              </span>
            </Link>

            <Link
              href="/take-action/partner"
              className="group rounded-[26px] bg-[#f6fafb] p-8 transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(17,69,90,0.08)]"
            >
              <h3 className="text-xl font-black text-[#11455A]">
                Partner
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Work with us to strengthen programs and extend our reach.
              </p>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#2FBBC9]">
                Become a Partner
                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                />
              </span>
            </Link>

            <Link
              href="/donate"
              className="group rounded-[26px] bg-[#f6fafb] p-8 transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(17,69,90,0.08)]"
            >
              <h3 className="text-xl font-black text-[#11455A]">
                Donate
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Help provide resources and support for our programs.
              </p>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#77C56D]">
                Make a Donation
                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#11455A]">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center lg:px-8 lg:py-24">
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            We&apos;d love to hear from you.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
            Whether you want to volunteer, partner, donate, or simply learn
            more, there is a place for you in the work.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/take-action/volunteer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E84272] px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#d93665]"
            >
              Volunteer With Us
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/donate"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/40 px-8 py-4 font-bold text-white transition hover:bg-white hover:text-[#11455A]"
            >
              Support Our Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}