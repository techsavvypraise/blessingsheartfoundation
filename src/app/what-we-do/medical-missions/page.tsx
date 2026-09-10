import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Stethoscope,
  Users,
  Activity,
  Pill,
  GraduationCap,
  HandHeart,
  MapPin,
  CalendarDays,
} from "lucide-react";

export const metadata = {
  title: "Nigeria Medical Mission Trips",
  description:
    "Join Blessings Heart Foundation on medical mission trips to Nigeria and help provide healthcare, health education, medicines, and lifesaving surgeries to communities in need.",
};

const missionGallery = [
  {
    src: "/images/medical-mission/the-team-day-one-prayers-and-addressing-the-early-crowd.webp",
    alt: "Blessings Heart Foundation medical mission team addressing community members",
  },
  {
    src: "/images/medical-mission/day-one-health-education-session.webp",
    alt: "Health education session during a Blessings Heart Foundation medical mission",
  },
  {
    src: "/images/medical-mission/consultation-dr-etuk.webp",
    alt: "Doctor consulting with a patient during a medical mission",
  },
  {
    src: "/images/medical-mission/lab.webp",
    alt: "Medical laboratory services during the mission",
  },
  {
    src: "/images/medical-mission/pharmacy.webp",
    alt: "Medical supplies and pharmacy services",
  },
  {
    src: "/images/medical-mission/nurse-screening.webp",
    alt: "Nurse screening a patient",
  },
  {
    src: "/images/medical-mission/eye-clinic.webp",
    alt: "Eye clinic services during a medical mission",
  },
  {
    src: "/images/medical-mission/theatre.webp",
    alt: "Medical theatre during a lifesaving surgery mission",
  },
];

const missionActivities = [
  {
    icon: Stethoscope,
    title: "Direct Patient Care",
    description:
      "Provide direct patient care and medicine for common diseases in communities with limited access to healthcare.",
    color: "#2FBBC9",
    bg: "#2FBBC9",
  },
  {
    icon: Pill,
    title: "Vitamins & Medicines",
    description:
      "Support children and pregnant or breastfeeding women with essential vitamins and healthcare supplies.",
    color: "#77C56D",
    bg: "#77C56D",
  },
  {
    icon: GraduationCap,
    title: "Health Education",
    description:
      "Participate in health education workshops that equip individuals and families with practical knowledge.",
    color: "#D18051",
    bg: "#D18051",
  },
  {
    icon: Activity,
    title: "Lifesaving Surgeries",
    description:
      "Help make lifesaving surgical procedures possible for people who may otherwise have limited access to care.",
    color: "#E84272",
    bg: "#E84272",
  },
];

export default function MedicalMissionsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#11455A]">
        <div className="absolute inset-0">
          <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#2FBBC9]/10" />
          <div className="absolute -bottom-56 -left-40 h-[560px] w-[560px] rounded-full bg-[#E84272]/10" />
          <div className="absolute right-[25%] top-[30%] h-40 w-40 rounded-full bg-[#77C56D]/10" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#E84272]" />

                <p className="text-sm font-bold uppercase tracking-[0.22em] text-white">
                  What We Do
                </p>
              </div>

              <h1 className="mt-6 text-5xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Medical care that
                <br />
                <span className="text-[#2FBBC9]">reaches people.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">
                A medical mission trip allows you to give of yourself, serve
                others, and make a meaningful contribution to people who need
                it most.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/take-action/volunteer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E84272] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#d93665]"
                >
                  Join a Mission
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="/donate"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-7 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-[#11455A]"
                >
                  Support the Mission
                  <Heart size={17} fill="currentColor" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-5 -top-5 h-24 w-24 rounded-3xl bg-[#D18051]/30" />

              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-2 shadow-2xl">
                <Image
                  src="/images/medical-mission/day-one-health-education-session.webp"
                  alt="Blessings Heart Foundation medical mission health education session"
                  width={1600}
                  height={1067}
                  className="h-[420px] w-full rounded-[25px] object-cover"
                  priority
                />
              </div>

              <div className="absolute -bottom-6 -left-5 rounded-2xl bg-white px-6 py-5 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2FBBC9]">
                    <Stethoscope size={24} className="text-white" />
                  </div>

                  <div>
                    <p className="text-2xl font-black text-[#11455A]">
                      5,000+
                    </p>

                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                      Patients served
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-[2px] w-10 bg-[#2FBBC9]" />

              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#2FBBC9]">
                Medical Mission Trips
              </p>

              <span className="h-[2px] w-10 bg-[#2FBBC9]" />
            </div>

            <h2 className="mt-5 text-4xl font-black leading-tight text-[#11455A] sm:text-5xl">
              Serving communities, together.
            </h2>

            <p className="mt-7 text-base leading-8 text-slate-600">
              We believe the greatest transformations happen when we work hand
              in hand with the communities we serve. That&apos;s why our
              medical mission is different from others.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              We collaborate with healthcare providers in the communities we
              serve to help ensure continuity of care after our mission teams
              leave. We listen to the needs of each community, plan together,
              and come alongside them to achieve their goals and improve their
              lives both now and in the future.
            </p>
          </div>

          {/* IMPACT STATS */}
          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            <div className="rounded-[26px] bg-[#f6fafb] p-7 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#2FBBC9]">
                <Users size={27} className="text-white" />
              </div>

              <p className="mt-5 text-4xl font-black text-[#11455A]">
                5,000+
              </p>

              <p className="mt-2 text-sm font-semibold text-slate-500">
                Patients served
              </p>
            </div>

            <div className="rounded-[26px] bg-[#f6fafb] p-7 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E84272]">
                <Heart
                  size={27}
                  className="text-white"
                  fill="currentColor"
                />
              </div>

              <p className="mt-5 text-4xl font-black text-[#11455A]">
                20+
              </p>

              <p className="mt-2 text-sm font-semibold text-slate-500">
                Lifesaving surgeries
              </p>
            </div>

            <div className="rounded-[26px] bg-[#f6fafb] p-7 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#77C56D]">
                <Stethoscope size={27} className="text-white" />
              </div>

              <p className="mt-5 text-4xl font-black text-[#11455A]">
                Since 2022
              </p>

              <p className="mt-2 text-sm font-semibold text-slate-500">
                Medical missions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-[#f6fafb]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#D18051]" />

              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#D18051]">
                During Our Missions
              </p>
            </div>

            <h2 className="mt-5 text-4xl font-black leading-tight text-[#11455A] sm:text-5xl">
              Practical healthcare.
              <br />
              Meaningful impact.
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-slate-600">
              During our medical mission trips, team members contribute their
              skills and compassion in several important ways.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {missionActivities.map((activity) => {
              const Icon = activity.icon;

              return (
                <div
                  key={activity.title}
                  className="group rounded-[26px] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{
                      backgroundColor: `${activity.bg}18`,
                    }}
                  >
                    <Icon
                      size={27}
                      style={{
                        color: activity.color,
                      }}
                    />
                  </div>

                  <h3 className="mt-7 text-xl font-black text-[#11455A]">
                    {activity.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {activity.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MISSION GALLERY */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-[2px] w-10 bg-[#E84272]" />

              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#E84272]">
                Our Work In Action
              </p>

              <span className="h-[2px] w-10 bg-[#E84272]" />
            </div>

            <h2 className="mt-5 text-4xl font-black text-[#11455A] sm:text-5xl">
              Bringing care closer to communities.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              From health education and consultations to laboratory services,
              medication, and surgery, our teams work alongside local
              communities to provide care where it is needed.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {missionGallery.map((image, index) => (
              <div
                key={image.src}
                className={`group relative overflow-hidden rounded-[24px] ${
                  index === 0 || index === 5
                    ? "sm:col-span-2 sm:row-span-2"
                    : ""
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1600}
                  height={1067}
                  className={`w-full object-cover transition duration-700 group-hover:scale-105 ${
                    index === 0 || index === 5
                      ? "h-[520px] sm:h-full"
                      : "h-[250px]"
                  }`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#11455A]/70 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FREE MEDICAL CLINIC */}
      <section className="overflow-hidden bg-[#11455A]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative">
              <div className="absolute -left-5 -top-5 h-24 w-24 rounded-3xl bg-[#2FBBC9]/20" />

              <div className="relative overflow-hidden rounded-[30px]">
                <Image
                  src="/images/team/group-photo-board.webp"
                  alt="Blessings Heart Foundation medical mission team"
                  width={1600}
                  height={1067}
                  className="h-[480px] w-full object-cover"
                />
              </div>

              <div className="absolute -bottom-5 -right-5 rounded-2xl bg-[#E84272] px-6 py-5 shadow-xl">
                <p className="text-xs font-bold uppercase tracking-wide text-white/70">
                  Location
                </p>

                <p className="mt-1 font-black text-white">
                  Abak, Akwa Ibom
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#2FBBC9]" />

                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#2FBBC9]">
                  Continuing Care
                </p>
              </div>

              <h2 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl">
                BHF Free Medical Clinic
              </h2>

              <p className="mt-6 text-base leading-8 text-white/70">
                We are in the process of opening a free medical clinic in
                Abak-Akwa Ibom State, Nigeria, where local healthcare staff
                will be able to provide care to community members who need it
                most.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2FBBC9]">
                    <Heart
                      size={20}
                      className="text-white"
                      fill="currentColor"
                    />
                  </div>

                  <div>
                    <h3 className="font-black text-white">
                      Follow-up care
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-white/60">
                      Follow up with people seen by our medical and nursing
                      teams during mission trips.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#77C56D]">
                    <Activity size={20} className="text-white" />
                  </div>

                  <div>
                    <h3 className="font-black text-white">
                      Chronic disease management
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-white/60">
                      Follow-up for chronic diseases including diabetes,
                      hypertension, and asthma.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D18051]">
                    <Stethoscope size={20} className="text-white" />
                  </div>

                  <div>
                    <h3 className="font-black text-white">
                      Laboratory testing
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-white/60">
                      Services such as blood glucose, hemoglobin testing,
                      urine analysis, and other basic testing.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E84272]">
                    <GraduationCap size={20} className="text-white" />
                  </div>

                  <div>
                    <h3 className="font-black text-white">
                      Health education
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-white/60">
                      Distribute health education materials and promote
                      practical knowledge within the community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY JOIN US */}
      <section className="bg-[#f6fafb]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#D18051]" />

                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#D18051]">
                  Why Join Us?
                </p>
              </div>

              <h2 className="mt-5 text-4xl font-black leading-tight text-[#11455A] sm:text-5xl">
                A trip you&apos;ll never forget.
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600">
                There is nothing like standing in a small village and seeing
                firsthand how your contribution can bring hope and joy to
                people who desperately need it.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600">
                While we go to give by serving, what we get back is
                immeasurable.
              </p>

              <div className="mt-8 flex items-center gap-4 rounded-[22px] bg-white p-5 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E84272]">
                  <HandHeart size={23} className="text-white" />
                </div>

                <p className="text-sm font-bold leading-6 text-[#11455A]">
                  Give your time. Share your skills. Change a life.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-[26px]">
                <Image
                  src="/images/team/whitney-cam.webp"
                  alt="Medical mission activity"
                  width={1000}
                  height={1000}
                  className="h-64 w-full object-cover"
                />
              </div>

              <div className="mt-10 overflow-hidden rounded-[26px]">
                <Image
                  src="/images/medical-mission/pharmacy.webp"
                  alt="Medical mission pharmacy services"
                  width={1000}
                  height={1000}
                  className="h-64 w-full object-cover"
                />
              </div>

              <div className="-mt-10 overflow-hidden rounded-[26px]">
                <Image
                  src="/images/medical-mission/eye-clinic.webp"
                  alt="Medical mission eye clinic"
                  width={1000}
                  height={1000}
                  className="h-64 w-full object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-[26px]">
                <Image
                  src="/images/medical-mission/post-surgery-recovery-area.webp"
                  alt="Post-surgery recovery area"
                  width={1000}
                  height={1000}
                  className="h-64 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING TRIPS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#2FBBC9]" />

                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#2FBBC9]">
                  Upcoming Trips
                </p>
              </div>

              <h2 className="mt-5 text-4xl font-black text-[#11455A] sm:text-5xl">
                Come serve with us.
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-slate-600">
                Join a team of compassionate volunteers and healthcare
                professionals working alongside communities in Nigeria.
              </p>
            </div>

            <div className="rounded-[28px] bg-[#f6fafb] p-7">
              <div className="flex gap-4 border-b border-slate-200 pb-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#2FBBC9]">
                  <CalendarDays size={22} className="text-white" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                    Previous scheduled trip
                  </p>

                  <p className="mt-1 text-lg font-black text-[#11455A]">
                    July 17th–19th, 2024
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E84272]">
                    <MapPin size={22} className="text-white" />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                      Next trip
                    </p>

                    <p className="mt-1 text-lg font-black text-[#11455A]">
                      Details to be announced
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Contact Blessings Heart Foundation to express your
                      interest in participating.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#11455A]">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#2FBBC9]/10" />
        <div className="absolute -bottom-48 -left-40 h-[500px] w-[500px] rounded-full bg-[#E84272]/10" />

        <div className="relative mx-auto max-w-5xl px-5 py-20 text-center lg:px-8 lg:py-24">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E84272]">
            <Heart
              size={30}
              className="text-white"
              fill="currentColor"
            />
          </div>

          <h2 className="mt-7 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Your hands can help change a life.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
            Whether you are a healthcare professional, volunteer, donor, or
            someone simply looking for a meaningful way to serve, there is a
            place for you in this mission.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/take-action/volunteer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E84272] px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#d93665]"
            >
              Join Us
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/donate"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-8 py-4 font-bold text-white transition hover:bg-white hover:text-[#11455A]"
            >
              Donate to the Mission
              <Heart size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}