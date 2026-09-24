"use client";

import {
  ArrowRight,
  Heart,
  Copy,
  Check,
} from "lucide-react";
import { useState } from "react";

export default function DonatePage() {
  const [copied, setCopied] = useState("");

  const copyToClipboard = async (value: string, type: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(type);

      setTimeout(() => {
        setCopied("");
      }, 2000);
    } catch {
      setCopied("");
    }
  };

  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#11455A]">
        <div className="absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-[#2FBBC9]/10" />
        <div className="absolute -bottom-48 -left-32 h-[520px] w-[520px] rounded-full bg-[#E84272]/10" />

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
              Your support helps Blessings Heart Foundation continue serving
              children, families, and communities through compassionate action.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center lg:px-8 lg:py-24">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E84272]/10">
            <Heart
              size={30}
              className="text-[#E84272]"
              fill="currentColor"
            />
          </div>

          <p className="mt-7 text-sm font-bold uppercase tracking-[0.22em] text-[#E84272]">
            Give With Purpose
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight text-[#11455A] sm:text-5xl">
            Every gift helps us serve.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
            Thank you for supporting Blessings Heart Foundation. Choose one of
            the giving options below to make a direct contribution to our work.
          </p>
        </div>
      </section>

      {/* WAYS TO GIVE */}
      <section className="relative overflow-hidden bg-[#f6fafb]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          {/* SECTION HEADING */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-[2px] w-10 bg-[#2FBBC9]" />

              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#2FBBC9]">
                Ways To Give
              </p>

              <span className="h-[2px] w-10 bg-[#2FBBC9]" />
            </div>

            <h2 className="mt-5 text-4xl font-black text-[#11455A] sm:text-5xl">
              Give through Zelle or Cash App.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Choose the payment method that is most convenient for you.
            </p>
          </div>

          {/* PAYMENT CARDS */}
          <div className="mt-14 grid gap-7 lg:grid-cols-2">
            {/* ZELLE */}
            <article className="group overflow-hidden rounded-[32px] border border-slate-100 bg-white shadow-[0_15px_50px_rgba(17,69,90,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_65px_rgba(17,69,90,0.13)]">
              <div className="h-2 bg-[#6D1ED4]" />

              <div className="p-8 sm:p-10">
                {/* LOGO */}
                <div className="flex h-28 items-center justify-center">
                  <div className="overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5">
                    <img
                      src="/images/donate/zelle.webp"
                      alt="Zelle"
                      className="h-24 w-auto object-contain"
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6D1ED4]">
                    Give with Zelle
                  </p>

                  <h3 className="mt-3 text-3xl font-black text-[#11455A]">
                    Send your gift directly.
                  </h3>

                  <p className="mt-4 text-base leading-7 text-slate-600">
                    Use Zelle to send your donation directly to Blessings Heart
                    Foundation using the email address below.
                  </p>
                </div>

                {/* EMAIL */}
                <div className="mt-8 rounded-2xl border border-[#6D1ED4]/15 bg-[#6D1ED4]/5 p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                    Zelle Email
                  </p>

                  <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="break-all text-base font-black text-[#11455A]">
                      blessingsheartfoundation@gmail.com
                    </p>

                    <button
                      type="button"
                      onClick={() =>
                        copyToClipboard(
                          "blessingsheartfoundation@gmail.com",
                          "zelle"
                        )
                      }
                      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-[#11455A] shadow-sm ring-1 ring-slate-200 transition hover:text-[#6D1ED4]"
                    >
                      {copied === "zelle" ? (
                        <>
                          <Check size={15} />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy size={15} />
                          Copy Email
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-6 text-slate-500">
                  Please include your name or organization name in the payment
                  note where possible.
                </p>
              </div>
            </article>

            {/* CASH APP */}
            <article className="group overflow-hidden rounded-[32px] border border-slate-100 bg-white shadow-[0_15px_50px_rgba(17,69,90,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_65px_rgba(17,69,90,0.13)]">
              <div className="h-2 bg-[#00A83B]" />

              <div className="p-8 sm:p-10">
                {/* LOGO */}
                <div className="flex h-28 items-center justify-center">
                  <div className="overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5">
                    <img
                      src="/images/donate/cash-app.webp"
                      alt="Cash App"
                      className="h-24 w-auto object-contain"
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#00A83B]">
                    Give with Cash App
                  </p>

                  <h3 className="mt-3 text-3xl font-black text-[#11455A]">
                    Support us through Cash App.
                  </h3>

                  <p className="mt-4 text-base leading-7 text-slate-600">
                    Send your donation directly using our Cash App handle
                    below.
                  </p>
                </div>

                {/* CASH APP HANDLE */}
                <div className="mt-8 rounded-2xl border border-[#00A83B]/15 bg-[#00A83B]/5 p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                    Cash App
                  </p>

                  <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-3xl font-black text-[#11455A]">
                      $Blesheart
                    </p>

                    <button
                      type="button"
                      onClick={() =>
                        copyToClipboard("$Blesheart", "cashapp")
                      }
                      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-[#11455A] shadow-sm ring-1 ring-slate-200 transition hover:text-[#00A83B]"
                    >
                      {copied === "cashapp" ? (
                        <>
                          <Check size={15} />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy size={15} />
                          Copy Handle
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <a
                  href="https://cash.app/$Blesheart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#00A83B] px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#008F32]"
                >
                  Open Cash App
                  <ArrowRight size={18} />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* THANK YOU */}
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
            Thank you for making a difference.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
            Your generosity helps Blessings Heart Foundation continue its work
            and reach more people and communities in need.
          </p>
        </div>
      </section>
    </main>
  );
}