import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Users } from "lucide-react";

export const metadata = {
  title: "USA Board",
  description:
    "Meet the USA Board members supporting the work of Blessings Heart Foundation.",
};

const usaBoard = [
  {
    name: "Blessing",
    image: "/images/team/blessing-1.webp",
  },
  {
    name: "Blessing",
    image: "/images/team/blessing-2.webp",
  },
  {
    name: "Whitney Cam",
    image: "/images/team/whitney-cam.webp",
  },
  {
    name: "Anna Bailey",
    image: "/images/team/anna-bailey.webp",
  },
];

export default function USABoardPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#11455A]">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#2FBBC9]/10" />
        <div className="absolute -bottom-48 -left-40 h-[500px] w-[500px] rounded-full bg-[#E84272]/10" />

        <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#E84272]" />

              <p className="text-sm font-bold uppercase tracking-[0.22em] text-white">
                Who We Are
              </p>
            </div>

            <h1 className="mt-6 text-5xl font-black leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
              USA
              <br />
              <span className="text-[#2FBBC9]">Board.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">
              Meet the people helping provide leadership, stewardship, and
              support for Blessings Heart Foundation in the United States.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-[2px] w-10 bg-[#2FBBC9]" />

              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#2FBBC9]">
                USA Board
              </p>

              <span className="h-[2px] w-10 bg-[#2FBBC9]" />
            </div>

            <h2 className="mt-5 text-4xl font-black text-[#11455A] sm:text-5xl">
              Leadership rooted in service.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              The USA Board helps provide direction and support as Blessings
              Heart Foundation serves children, families, and communities.
            </p>
          </div>

          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {usaBoard.map((member, index) => (
              <article
                key={`${member.image}-${index}`}
                className="group overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-[0_10px_35px_rgba(17,69,90,0.07)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(17,69,90,0.14)]"
              >
                <div className="relative aspect-[4/4.7] overflow-hidden bg-[#f3f8f9]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute bottom-0 left-0 h-1.5 w-full bg-[#E84272]" />
                </div>

                <div className="p-6">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#2FBBC9]">
                    USA Board
                  </p>

                  <h3 className="mt-3 text-xl font-black text-[#11455A]">
                    {member.name}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Board Member
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6fafb]">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center lg:px-8 lg:py-24">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E84272]">
            <Heart size={30} className="text-white" fill="currentColor" />
          </div>

          <h2 className="mt-7 text-4xl font-black text-[#11455A] sm:text-5xl">
            Strong leadership. Greater impact.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
            Together with our teams, volunteers, partners, and supporters, our
            board helps advance the mission of Blessings Heart Foundation.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/about/team/nigeria"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#11455A] px-8 py-4 font-bold text-white transition hover:-translate-y-1"
            >
              Meet Nigeria&apos;s Team
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#11455A]/20 px-8 py-4 font-bold text-[#11455A] transition hover:bg-[#11455A] hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}