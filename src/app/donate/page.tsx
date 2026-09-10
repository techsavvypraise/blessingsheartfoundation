"use client";

import Link from "next/link";
import {
  ArrowRight,
  Heart,
  HandHeart,
  Stethoscope,
  Utensils,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";

const impactAreas = [
  {
    icon: Stethoscope,
    title: "Healthcare",
    text: "Support medical missions, healthcare services, and health education for communities in need.",
    color: "#2FBBC9",
  },
  {
    icon: Utensils,
    title: "Food Assistance",
    text: "Help provide food and practical support to families and households facing difficult times.",
    color: "#77C56D",
  },
  {
    icon: GraduationCap,
    title: "Community Support",
    text: "Help strengthen initiatives that create opportunities and support the wellbeing of communities.",
    color: "#D18051",
  },
];

const presetAmounts = ["25", "50", "100", "250"];

export default function DonatePage() {
  const [amount, setAmount] = useState("");
  const [selectedAmount, setSelectedAmount] = useState("");

  const handlePresetAmount = (value: string) => {
    setAmount(value);
    setSelectedAmount(value);
  };

  const handleCustomAmount = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    setAmount(value);

    if (presetAmounts.includes(value)) {
      setSelectedAmount(value);
    } else {
      setSelectedAmount("");
    }
  };

  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#11455A]">
        <div className="absolute -right-28 -top-28 h-96 w-96 rounded-full bg-[#2FBBC9]/10" />
        <div className="absolute -bottom-40 -left-28 h-96 w-96 rounded-full bg-[#E84272]/10" />

        <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-[2px] w-10 bg-[#E84272]" />

              <p className="text-sm font-bold uppercase tracking-[0.22em] text-white">
                Support Our Work
              </p>

              <span className="h-[2px] w-10 bg-[#E84272]" />
            </div>

            <h1 className="mt-6 text-5xl font-black leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Your generosity can
              <br />
              <span className="text-[#2FBBC9]">change a life.</span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/75">
              Every contribution helps Blessings Heart Foundation continue
              serving children, families, and communities through compassionate
              action.
            </p>

            <a
              href="#donation-form"
              className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-[#E84272] px-9 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#d93665]"
            >
              Make a Donation
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#E84272]" />

                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#E84272]">
                  Give With Purpose
                </p>
              </div>

              <h2 className="mt-5 text-4xl font-black leading-tight text-[#11455A] sm:text-5xl">
                Help us continue the work.
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-slate-600">
                Blessings Heart Foundation is committed to supporting people
                and communities through practical programs, healthcare,
                assistance, and compassionate service.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Your donation provides resources that help us continue these
                efforts and respond to the needs of the communities we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT AREAS */}
      <section className="bg-[#f6fafb]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#2FBBC9]">
              Your Impact
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#11455A] sm:text-5xl">
              Where your support can make a difference.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Donations help provide the resources needed to support our
              programs and community initiatives.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {impactAreas.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[26px] border border-slate-100 bg-white p-8 shadow-[0_12px_35px_rgba(17,69,90,0.06)]"
                >
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{
                      backgroundColor: `${item.color}18`,
                    }}
                  >
                    <Icon
                      size={27}
                      style={{
                        color: item.color,
                      }}
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

      {/* DONATION FORM */}
      <section
        id="donation-form"
        className="bg-white"
      >
        <div className="mx-auto max-w-5xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            {/* LEFT */}
            <div>
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E84272]/10">
                <Heart
                  size={30}
                  className="text-[#E84272]"
                  fill="currentColor"
                />
              </div>

              <h2 className="mt-7 text-4xl font-black leading-tight text-[#11455A] sm:text-5xl">
                Make your gift today.
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Thank you for considering a donation to Blessings Heart
                Foundation. Your generosity helps us continue serving people
                and communities.
              </p>

              <div className="mt-8 rounded-[24px] bg-[#f6fafb] p-6">
                <div className="flex items-start gap-4">
                  <ShieldCheck
                    size={23}
                    className="mt-0.5 shrink-0 text-[#77C56D]"
                  />

                  <div>
                    <h3 className="font-black text-[#11455A]">
                      Thank you for your support
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Every gift contributes to the work and helps us continue
                      making a difference.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="rounded-[30px] bg-[#f6fafb] p-7 shadow-[0_20px_60px_rgba(17,69,90,0.08)] sm:p-10">
              <form
                action="#"
                method="post"
                className="space-y-6"
              >
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#E84272]">
                    Donation Details
                  </p>

                  <h3 className="mt-2 text-2xl font-black text-[#11455A]">
                    How much would you like to give?
                  </h3>
                </div>

                {/* AMOUNT */}
                <div>
                  <label
                    htmlFor="amount"
                    className="mb-2 block text-sm font-bold text-[#11455A]"
                  >
                    Donation Amount
                  </label>

                  <div className="relative">
                    <span className="absolute left-5 top-1/2 -translate-y-1/2 font-bold text-[#11455A]">
                      $
                    </span>

                    <input
                      id="amount"
                      name="amount"
                      type="number"
                      min="1"
                      step="1"
                      value={amount}
                      onChange={handleCustomAmount}
                      placeholder="Enter amount"
                      required
                      className="w-full rounded-xl border-2 border-slate-200 bg-white py-4 pl-10 pr-5 text-sm font-semibold text-[#11455A] outline-none transition placeholder:text-slate-400 focus:border-[#E84272] focus:ring-4 focus:ring-[#E84272]/10"
                    />
                  </div>

                  {/* PRESET AMOUNTS */}
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {presetAmounts.map((preset) => {
                      const isSelected = selectedAmount === preset;

                      return (
                        <button
                          key={preset}
                          type="button"
                          onClick={() => handlePresetAmount(preset)}
                          aria-pressed={isSelected}
                          className={`rounded-xl border-2 px-4 py-3.5 text-sm font-black transition ${
                            isSelected
                              ? "border-[#E84272] bg-[#E84272] text-white shadow-[0_8px_20px_rgba(232,66,114,0.22)]"
                              : "border-slate-200 bg-white text-[#11455A] hover:border-[#E84272] hover:bg-[#E84272]/5 hover:text-[#E84272]"
                          }`}
                        >
                          ${preset}
                        </button>
                      );
                    })}
                  </div>

                  {selectedAmount && (
                    <p className="mt-3 text-sm font-semibold text-[#E84272]">
                      Selected donation: ${selectedAmount}
                    </p>
                  )}
                </div>

                {/* NAME */}
                <div>
                  <label
                    htmlFor="donorName"
                    className="mb-2 block text-sm font-bold text-[#11455A]"
                  >
                    Full Name
                  </label>

                  <input
                    id="donorName"
                    name="donorName"
                    type="text"
                    placeholder="Enter your full name"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm text-[#11455A] outline-none transition placeholder:text-slate-400 focus:border-[#2FBBC9] focus:ring-4 focus:ring-[#2FBBC9]/10"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label
                    htmlFor="donorEmail"
                    className="mb-2 block text-sm font-bold text-[#11455A]"
                  >
                    Email Address
                  </label>

                  <input
                    id="donorEmail"
                    name="donorEmail"
                    type="email"
                    placeholder="Enter your email address"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm text-[#11455A] outline-none transition placeholder:text-slate-400 focus:border-[#2FBBC9] focus:ring-4 focus:ring-[#2FBBC9]/10"
                  />
                </div>

                {/* MESSAGE */}
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
                    rows={4}
                    placeholder="Optional message"
                    className="w-full resize-none rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm text-[#11455A] outline-none transition placeholder:text-slate-400 focus:border-[#2FBBC9] focus:ring-4 focus:ring-[#2FBBC9]/10"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#E84272] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#d93665]"
                >
                  Continue to Donation
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* OTHER WAYS */}
      <section className="bg-[#f6fafb]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#77C56D]">
              More Ways To Help
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#11455A] sm:text-5xl">
              Giving is more than a donation.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              You can also support Blessings Heart Foundation by giving your
              time, skills, or resources.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <Link
              href="/take-action/volunteer"
              className="group rounded-[26px] bg-white p-8 transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(17,69,90,0.08)]"
            >
              <HandHeart
                size={28}
                className="text-[#E84272]"
              />

              <h3 className="mt-5 text-xl font-black text-[#11455A]">
                Volunteer Your Time
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Give your time, skills, and energy to support our programs and
                community initiatives.
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
              className="group rounded-[26px] bg-white p-8 transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(17,69,90,0.08)]"
            >
              <HandHeart
                size={28}
                className="text-[#2FBBC9]"
              />

              <h3 className="mt-5 text-xl font-black text-[#11455A]">
                Partner With Us
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Bring your organization, resources, expertise, or network
                alongside our mission.
              </p>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#2FBBC9]">
                Become a Partner
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
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E84272]">
            <Heart
              size={30}
              className="text-white"
              fill="currentColor"
            />
          </div>

          <h2 className="mt-7 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Every act of generosity matters.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
            Thank you for believing in the work of Blessings Heart Foundation
            and helping us continue to serve.
          </p>

          <a
            href="#donation-form"
            className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-[#E84272] px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#d93665]"
          >
            Make a Donation
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}