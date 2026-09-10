import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  Heart,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#11455A] text-white">
      {/* MAIN FOOTER */}
      <div className="mx-auto max-w-6xl px-5 py-12 lg:px-8 lg:py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.45fr_0.8fr_1fr] lg:gap-14">

          {/* BRAND */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center"
            >
              <Image
                src="/images/brand/bhf-logo.webp"
                alt="Blessings Heart Foundation"
                width={1049}
                height={634}
                priority
                className="h-auto w-[145px] rounded-md bg-white object-contain"
              />
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
              Blessings Heart Foundation empowers children, families, and
              communities through healthcare, education, food assistance, and
              compassionate community support.
            </p>

            <Link
              href="/donate"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#E84272] px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#d93665]"
            >
              <Heart
                size={16}
                fill="currentColor"
              />
              Make a Difference
            </Link>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-base font-bold text-white">
              Quick Links
            </h3>

            <nav className="mt-5 flex flex-col gap-3 text-sm text-white/65">
              <Link
                href="/"
                className="transition hover:text-[#2FBBC9]"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="transition hover:text-[#2FBBC9]"
              >
                Who We Are
              </Link>

              <Link
                href="/what-we-do"
                className="transition hover:text-[#2FBBC9]"
              >
                What We Do
              </Link>

              <Link
                href="/take-action"
                className="transition hover:text-[#2FBBC9]"
              >
                Take Action
              </Link>

              <Link
                href="/contact"
                className="transition hover:text-[#2FBBC9]"
              >
                Contact Us
              </Link>

              <Link
                href="/donate"
                className="transition hover:text-[#2FBBC9]"
              >
                Donate
              </Link>
            </nav>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-base font-bold text-white">
              Contact Us
            </h3>

            <div className="mt-5 space-y-4 text-sm text-white/70">

              {/* PHONE */}
              <a
                href="tel:+16788951185"
                className="flex items-start gap-3 transition hover:text-white"
              >
                <Phone
                  size={17}
                  className="mt-0.5 shrink-0 text-[#2FBBC9]"
                />

                <span>
                  +1 678 895 1185
                </span>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:Blessingsheartfoundation@gmail.com"
                className="flex items-start gap-3 transition hover:text-white"
              >
                <Mail
                  size={17}
                  className="mt-0.5 shrink-0 text-[#77C56D]"
                />

                <span className="break-all">
                  Blessingsheartfoundation@gmail.com
                </span>
              </a>

              {/* ADDRESS */}
              <div className="flex items-start gap-3">
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-[#E84272]"
                />

                <span className="leading-6">
                  955 River Centre Place
                  <br />
                  Lawrenceville, GA 30043
                </span>
              </div>
            </div>

            {/* SOCIAL LINKS */}
            <div className="mt-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-white/45">
                Follow Us
              </p>

              <div className="flex gap-3">

                {/* INSTAGRAM */}
                <a
                  href="https://www.instagram.com/blessingsheartfoundation?igsh=eDN0bGZuaXl2bGN2&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Blessings Heart Foundation on Instagram"
                  className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white/75 transition hover:border-[#E84272] hover:bg-[#E84272] hover:text-white"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    />

                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />

                    <line
                      x1="17.5"
                      x2="17.51"
                      y1="6.5"
                      y2="6.5"
                    />
                  </svg>

                  Instagram
                </a>

                {/* FACEBOOK */}
                <a
                  href="https://www.facebook.com/share/1CNFwPV69W/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Blessings Heart Foundation on Facebook"
                  className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white/75 transition hover:border-[#2FBBC9] hover:bg-[#2FBBC9] hover:text-white"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9c0-.67.33-1 1-1z" />
                  </svg>

                  Facebook
                </a>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-center text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:text-left lg:px-8">
          <p>
            © {new Date().getFullYear()} Blessings Heart Foundation. All
            rights reserved.
          </p>

          <p>
            Serving communities with compassion.
          </p>
        </div>
      </div>
    </footer>
  );
}