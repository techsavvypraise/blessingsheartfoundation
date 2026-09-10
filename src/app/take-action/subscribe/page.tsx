import Link from "next/link";
import { ArrowRight, Mail, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Subscribe",
  description:
    "Subscribe to the Blessings Heart Foundation email list for updates, news, and opportunities to get involved.",
};

export default function SubscribePage() {
  return (
    <main>
      <section className="min-h-[calc(100vh-108px)] bg-[#f6fafb] px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto flex max-w-3xl items-center justify-center">
          <div className="w-full">
            {/* HEADER */}
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#2FBBC9]/10">
                <Mail
                  size={30}
                  className="text-[#2FBBC9]"
                />
              </div>

              <div className="mt-7 flex items-center justify-center gap-3">
                <span className="h-[2px] w-10 bg-[#E84272]" />

                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#E84272]">
                  Stay Connected
                </p>

                <span className="h-[2px] w-10 bg-[#E84272]" />
              </div>

              <h1 className="mt-5 text-4xl font-black leading-tight text-[#11455A] sm:text-5xl">
                Subscribe to Our{" "}
                <span className="text-[#2FBBC9]">
                  Email List
                </span>
              </h1>

              <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-600">
                Stay updated with Blessings Heart Foundation news, programs,
                events, and opportunities to make a difference.
              </p>
            </div>

            {/* FORM CARD */}
            <div className="mt-10 rounded-[28px] bg-white p-7 shadow-[0_20px_60px_rgba(17,69,90,0.10)] sm:p-10">
              <form
                action="#"
                method="post"
                className="space-y-5"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-bold text-[#11455A]"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    required
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

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#E84272] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#d93765]"
                >
                  Subscribe
                  <ArrowRight size={18} />
                </button>
              </form>

              <div className="mt-6 flex items-start gap-3 border-t border-slate-100 pt-5">
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-[#77C56D]"
                />

                <p className="text-xs leading-5 text-slate-500">
                  By subscribing, you agree to receive email updates from
                  Blessings Heart Foundation. You can unsubscribe at any time.
                </p>
              </div>
            </div>

            {/* BACK LINK */}
            <div className="mt-7 text-center">
              <Link
                href="/"
                className="text-sm font-semibold text-[#11455A] transition hover:text-[#E84272]"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}