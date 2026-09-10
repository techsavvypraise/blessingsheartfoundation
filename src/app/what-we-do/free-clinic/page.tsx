import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Activity,
  HeartPulse,
  FlaskConical,
  Pill,
  ShieldCheck,
  Users,
  Eye,
  Stethoscope,
} from "lucide-react";

export const metadata = {
  title: "Free Clinic",
  description:
    "Learn about the Blessings Heart Foundation Free Medical Clinic in Abak, Akwa Ibom State, Nigeria.",
};

const services = [
  {
    title: "Patient Care",
    description:
      "Providing continued care and support for people reached through our medical mission work.",
    icon: Stethoscope,
    accent: "#E84272",
  },
  {
    title: "Laboratory Testing",
    description:
      "Basic investigations including blood glucose, hemoglobin, urine analysis, and other essential testing.",
    icon: FlaskConical,
    accent: "#2FBBC9",
  },
  {
    title: "Medicines",
    description:
      "Helping provide appropriate medicines and health resources to support ongoing treatment and care.",
    icon: Pill,
    accent: "#77C56D",
  },
  {
    title: "Health Education",
    description:
      "Sharing practical health education materials that encourage prevention and informed health decisions.",
    icon: ShieldCheck,
    accent: "#D18051",
  },
];

const gallery = [
  {
    image: "/images/medical-mission/nurse-screening.webp",
    title: "Patient Screening",
  },
  {
    image: "/images/medical-mission/lab.webp",
    title: "Laboratory Services",
  },
  {
    image: "/images/medical-mission/pharmacy.webp",
    title: "Pharmacy Support",
  },
  {
    image: "/images/medical-mission/eye-clinic.webp",
    title: "Eye Clinic",
  },
  {
    image: "/images/medical-mission/theatre.webp",
    title: "Medical Supplies",
  },
  {
    image: "/images/medical-mission/post-surgery-recovery-area.webp",
    title: "Recovery Care",
  },
];

export default function FreeClinicPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#11455A]">
        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#2FBBC9]/10" />

        <div className="absolute -bottom-48 -left-40 h-[500px] w-[500px] rounded-full bg-[#E84272]/10" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            {/* HERO CONTENT */}
            <div>
              <div className="flex items-center gap-3">
                <Image
                  src="/images/flags/nigeria.webp"
                  alt="Nigeria"
                  width={30}
                  height={20}
                  className="h-5 w-8 rounded-sm object-cover"
                />

                <span className="h-[2px] w-10 bg-[#2FBBC9]" />

                <p className="text-sm font-bold uppercase tracking-[0.22em] text-white">
                  Nigeria
                </p>
              </div>

              <h1 className="mt-6 text-5xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Free
                <br />
                <span className="text-[#2FBBC9]">Clinic.</span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-white/75">
                Continuing care for individuals and families through the
                Blessings Heart Foundation Free Medical Clinic in Abak, Akwa
                Ibom State, Nigeria.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/donate"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E84272] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#d93765]"
                >
                  Support the Clinic
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/what-we-do/medical-missions"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-7 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-[#11455A]"
                >
                  Medical Missions
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* HERO IMAGE */}
            <div className="relative">
              <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full bg-[#2FBBC9]/30 blur-sm" />

              <div className="absolute -bottom-5 -left-5 h-20 w-20 rounded-full bg-[#E84272]/30 blur-sm" />

              <div className="relative overflow-hidden rounded-[32px] border-4 border-white/15 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
                <Image
                  src="/images/medical-mission/consultation-dr-etuk.webp"
                  alt="Medical consultation during a Blessings Heart Foundation mission"
                  width={1600}
                  height={1067}
                  priority
                  className="h-[420px] w-full object-cover lg:h-[500px]"
                />

                <div className="absolute bottom-0 left-0 h-2 w-full bg-[#2FBBC9]" />
              </div>

              <div className="absolute -bottom-6 right-6 rounded-2xl bg-white px-5 py-4 shadow-[0_15px_40px_rgba(0,0,0,0.18)]">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2FBBC9]/10">
                    <HeartPulse
                      size={22}
                      className="text-[#2FBBC9]"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#2FBBC9]">
                      Community Care
                    </p>

                    <p className="font-black text-[#11455A]">
                      Abak, Akwa Ibom
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center lg:px-8 lg:py-28">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 bg-[#2FBBC9]" />

            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#2FBBC9]">
              Ongoing Care
            </p>

            <span className="h-[2px] w-10 bg-[#2FBBC9]" />
          </div>

          <h2 className="mt-5 text-4xl font-black leading-tight text-[#11455A] sm:text-5xl">
            Care that continues{" "}
            <span className="text-[#E84272]">
              beyond the mission trip.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600">
            The Blessings Heart Foundation Free Medical Clinic provides
            follow-up care for communities served by our medical mission
            teams. The clinic helps extend healthcare support beyond the days
            of a mission trip and responds to ongoing health needs within the
            community.
          </p>
        </div>
      </section>

      {/* CLINIC FEATURE */}
      <section className="bg-[#f6fafb]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr]">
            {/* IMAGE */}
            <div className="relative">
              <div className="absolute -left-5 -top-5 h-28 w-28 rounded-3xl bg-[#E84272]/10" />

              <div className="relative overflow-hidden rounded-[32px] shadow-[0_20px_50px_rgba(17,69,90,0.1)]">
                <Image
                  src="/images/medical-mission/nurse-screening.webp"
                  alt="Nurse screening a patient"
                  width={1600}
                  height={1067}
                  className="h-[430px] w-full object-cover"
                />

                <div className="absolute bottom-0 left-0 h-2 w-full bg-[#E84272]" />
              </div>

              <div className="absolute -bottom-6 right-6 rounded-2xl bg-white px-6 py-4 shadow-[0_15px_40px_rgba(17,69,90,0.15)]">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2FBBC9]">
                  Location
                </p>

                <p className="mt-1 font-black text-[#11455A]">
                  Abak, Akwa Ibom State
                </p>
              </div>
            </div>

            {/* CONTENT */}
            <div>
              <div className="flex items-center gap-3">
                <Image
                  src="/images/flags/nigeria.webp"
                  alt="Nigeria"
                  width={30}
                  height={20}
                  className="h-5 w-8 rounded-sm object-cover"
                />

                <span className="h-[2px] w-10 bg-[#E84272]" />

                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#E84272]">
                  BHF Free Medical Clinic
                </p>
              </div>

              <h2 className="mt-5 text-4xl font-black leading-tight text-[#11455A] sm:text-5xl">
                Bringing healthcare closer to the community.
              </h2>

              <p className="mt-7 leading-8 text-slate-600">
                Located in Abak, Akwa Ibom State, Nigeria, the Blessings Heart
                Foundation Free Medical Clinic provides a follow-up connection
                for people reached through the foundation&apos;s medical
                missions.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                The clinic supports ongoing healthcare needs, including
                follow-up for individuals living with chronic conditions such
                as diabetes, hypertension, and asthma.
              </p>

              <div className="mt-8 flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#2FBBC9]/10">
                  <Users
                    size={23}
                    className="text-[#2FBBC9]"
                  />
                </div>

                <div>
                  <p className="font-black text-[#11455A]">
                    Community-centered care
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Supporting people beyond a single mission visit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-[2px] w-10 bg-[#2FBBC9]" />

              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#2FBBC9]">
                What We Provide
              </p>

              <span className="h-[2px] w-10 bg-[#2FBBC9]" />
            </div>

            <h2 className="mt-5 text-4xl font-black text-[#11455A] sm:text-5xl">
              Practical healthcare support.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              The clinic focuses on essential follow-up care, testing,
              education, medicines, and support for members of the communities
              we serve.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group rounded-[28px] border border-slate-100 bg-[#f8fbfc] p-7 transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-[0_20px_50px_rgba(17,69,90,0.1)]"
                >
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: `${service.accent}15`,
                    }}
                  >
                    <Icon
                      size={25}
                      style={{
                        color: service.accent,
                      }}
                    />
                  </div>

                  <h3 className="mt-6 text-xl font-black text-[#11455A]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CARE IN ACTION */}
      <section className="bg-[#f6fafb]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-[2px] w-10 bg-[#E84272]" />

              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#E84272]">
                Care In Action
              </p>

              <span className="h-[2px] w-10 bg-[#E84272]" />
            </div>

            <h2 className="mt-5 text-4xl font-black text-[#11455A] sm:text-5xl">
              Healthcare in action.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              From screening and laboratory services to pharmacy support and
              patient care, our medical work is focused on meeting practical
              needs within the community.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item) => (
              <article
                key={item.image}
                className="group overflow-hidden rounded-[28px] bg-white shadow-[0_10px_35px_rgba(17,69,90,0.07)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#11455A]/80 to-transparent p-6 pt-16">
                    <p className="text-base font-black text-white">
                      {item.title}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HEALTH EDUCATION */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#77C56D]" />

                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#77C56D]">
                  Prevention &amp; Education
                </p>
              </div>

              <h2 className="mt-5 text-4xl font-black leading-tight text-[#11455A] sm:text-5xl">
                Health knowledge is part of{" "}
                <span className="text-[#77C56D]">
                  healthcare.
                </span>
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Alongside clinical support, the foundation distributes health
                education materials to help individuals and families better
                understand their health and make informed choices.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                This approach connects treatment with prevention and encourages
                people to take an active role in their health and wellbeing.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[32px] shadow-[0_20px_50px_rgba(17,69,90,0.1)]">
              <Image
                src="/images/medical-mission/day-one-health-education-session.webp"
                alt="Health education session"
                width={1600}
                height={1067}
                className="h-[420px] w-full object-cover"
              />

              <div className="absolute bottom-5 left-5 rounded-2xl bg-white/95 px-5 py-4 shadow-lg">
                <p className="text-sm font-black text-[#11455A]">
                  Education. Prevention. Care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#11455A]">
        <div className="absolute -left-32 bottom-[-160px] h-[400px] w-[400px] rounded-full bg-[#E84272]/10" />

        <div className="absolute -right-32 top-[-160px] h-[400px] w-[400px] rounded-full bg-[#2FBBC9]/10" />

        <div className="relative mx-auto max-w-5xl px-5 py-20 text-center lg:px-8 lg:py-24">
          <div className="flex items-center justify-center gap-3">
            <Image
              src="/images/flags/nigeria.webp"
              alt="Nigeria"
              width={30}
              height={20}
              className="h-5 w-8 rounded-sm object-cover"
            />

            <p className="text-xs font-bold uppercase tracking-[0.24em] text-white">
              Nigeria
            </p>
          </div>

          <Activity
            size={42}
            className="mx-auto mt-5 text-[#2FBBC9]"
          />

          <h2 className="mt-6 text-4xl font-black text-white sm:text-5xl">
            Help us keep care{" "}
            <span className="text-[#2FBBC9]">
              going.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
            Your support can help Blessings Heart Foundation continue
            providing healthcare, medicines, testing, education, and
            follow-up care to communities in Nigeria.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff6a00] px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#e85f00]"
            >
              Support the Clinic
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/what-we-do/medical-missions"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 font-bold text-white transition hover:bg-white hover:text-[#11455A]"
            >
              Medical Missions
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}