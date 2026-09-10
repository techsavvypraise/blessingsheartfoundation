"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
  flag?: string;
};

const whoWeAreLinks: NavItem[] = [
  {
    label: "Our Founder's Story",
    href: "/about/founder",
  },
  {
    label: "Problem, Mission & Vision",
    href: "/about/mission-vision",
  },
  {
    label: "Board & Staff",
    href: "/about/team",
    children: [
      {
        label: "USA Board",
        href: "/about/team/usa",
        flag: "/images/flags/usa.webp",
      },
      {
        label: "Nigeria's Team",
        href: "/about/team/nigeria",
        flag: "/images/flags/nigeria.webp",
      },
    ],
  },
];

const whatWeDoLinks: NavItem[] = [
  {
    label: "USA – Food Pantry",
    href: "/what-we-do/food-pantry",
    flag: "/images/flags/usa.webp",
  },
  {
    label: "Nigeria",
    href: "/what-we-do/medical-missions",
    flag: "/images/flags/nigeria.webp",
    children: [
      {
        label: "Medical Mission Trips",
        href: "/what-we-do/medical-missions",
      },
      {
        label: "Free Clinic",
        href: "/what-we-do/free-clinic",
      },
    ],
  },
];

const takeActionLinks: NavItem[] = [
  {
    label: "Volunteer",
    href: "/take-action/volunteer",
  },
  {
    label: "Partner",
    href: "/take-action/partner",
  },
  {
    label: "Subscribe to Our Email List",
    href: "/take-action/subscribe",
  },
];

function Flag({
  src,
}: {
  src?: string;
}) {
  if (!src) return null;

  return (
    <span className="relative flex h-5 w-7 shrink-0 overflow-hidden rounded-[3px]">
      <Image
        src={src}
        alt=""
        fill
        sizes="28px"
        className="object-cover"
      />
    </span>
  );
}

function DesktopMenuItem({
  item,
}: {
  item: NavItem;
}) {
  const hasChildren = Boolean(item.children?.length);

  if (!hasChildren) {
    return (
      <Link
        href={item.href}
        className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-[#11455A] transition hover:bg-[#f6fafb] hover:text-[#D18051]"
      >
        <Flag src={item.flag} />

        <span>{item.label}</span>
      </Link>
    );
  }

  return (
    <div className="group/nested relative">
      <Link
        href={item.href}
        className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-[#11455A] transition hover:bg-[#f6fafb] hover:text-[#D18051]"
      >
        <span className="flex items-center gap-3">
          <Flag src={item.flag} />

          <span>{item.label}</span>
        </span>

        <ChevronDown
          size={15}
          className="-rotate-90 transition-transform duration-200 group-hover/nested:rotate-0"
        />
      </Link>

      <div className="pointer-events-none absolute left-full top-0 z-50 ml-1 w-64 translate-x-2 rounded-2xl border border-slate-100 bg-white p-2 opacity-0 shadow-[0_20px_50px_rgba(17,69,90,0.15)] transition-all duration-200 group-hover/nested:pointer-events-auto group-hover/nested:translate-x-0 group-hover/nested:opacity-100">
        {item.children?.map((child) => (
          <DesktopMenuItem
            key={child.href}
            item={child}
          />
        ))}
      </div>
    </div>
  );
}

function DesktopDropdown({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children: NavItem[];
}) {
  return (
    <div className="group relative">
      <Link
        href={href}
        className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-[#11455A] transition hover:text-[#D18051]"
      >
        {label}

        <ChevronDown
          size={15}
          className="transition-transform duration-200 group-hover:rotate-180"
        />
      </Link>

      <div className="pointer-events-none absolute left-0 top-full z-50 w-72 translate-y-2 rounded-2xl border border-slate-100 bg-white p-2 opacity-0 shadow-[0_20px_50px_rgba(17,69,90,0.15)] transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
        {children.map((item) => (
          <DesktopMenuItem
            key={item.href}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}

function MobileMenuItem({
  item,
  openItems,
  toggleItem,
  closeMobileMenu,
  level = 0,
}: {
  item: NavItem;
  openItems: string[];
  toggleItem: (href: string) => void;
  closeMobileMenu: () => void;
  level?: number;
}) {
  const hasChildren = Boolean(item.children?.length);
  const isOpen = openItems.includes(item.href);

  if (!hasChildren) {
    return (
      <Link
        href={item.href}
        onClick={closeMobileMenu}
        className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-[#f6fafb] hover:text-[#D18051] ${
          level > 0 ? "ml-2" : ""
        }`}
      >
        <Flag src={item.flag} />

        <span>{item.label}</span>
      </Link>
    );
  }

  return (
    <div>
      <div
        className={`flex items-center justify-between rounded-xl ${
          level > 0 ? "ml-2" : ""
        }`}
      >
        <Link
          href={item.href}
          onClick={closeMobileMenu}
          className="flex flex-1 items-center gap-3 px-3 py-2.5 text-sm font-semibold text-[#11455A]"
        >
          <Flag src={item.flag} />

          <span>{item.label}</span>
        </Link>

        <button
          type="button"
          onClick={() => toggleItem(item.href)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[#11455A]"
          aria-label={`Open ${item.label} submenu`}
          aria-expanded={isOpen}
        >
          <ChevronDown
            size={17}
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {isOpen && (
        <div className="ml-4 space-y-1 border-l border-slate-200 pl-3">
          {item.children?.map((child) => (
            <MobileMenuItem
              key={child.href}
              item={child}
              openItems={openItems}
              toggleItem={toggleItem}
              closeMobileMenu={closeMobileMenu}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function MobileDropdown({
  label,
  href,
  children,
  open,
  onToggle,
  openItems,
  toggleItem,
  closeMobileMenu,
}: {
  label: string;
  href: string;
  children: NavItem[];
  open: boolean;
  onToggle: () => void;
  openItems: string[];
  toggleItem: (href: string) => void;
  closeMobileMenu: () => void;
}) {
  return (
    <div>
      <div className="flex items-center justify-between rounded-xl">
        <Link
          href={href}
          onClick={closeMobileMenu}
          className="flex-1 px-4 py-3 text-base font-semibold text-[#11455A]"
        >
          {label}
        </Link>

        <button
          type="button"
          onClick={onToggle}
          className="flex h-11 w-11 items-center justify-center rounded-xl text-[#11455A]"
          aria-label={`Open ${label} submenu`}
          aria-expanded={open}
        >
          <ChevronDown
            size={19}
            className={`transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="ml-4 space-y-1 border-l border-slate-200 pl-3">
          {children.map((item) => (
            <MobileMenuItem
              key={item.href}
              item={item}
              openItems={openItems}
              toggleItem={toggleItem}
              closeMobileMenu={closeMobileMenu}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const [openMobileItems, setOpenMobileItems] = useState<string[]>([]);

  const toggleMobileMenu = (menu: string) => {
    setOpenMobileMenu((current) =>
      current === menu ? null : menu
    );
  };

  const toggleMobileItem = (href: string) => {
    setOpenMobileItems((current) =>
      current.includes(href)
        ? current.filter((item) => item !== href)
        : [...current, href]
    );
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setOpenMobileMenu(null);
    setOpenMobileItems([]);
  };

  return (
    <header className="relative z-50 bg-[#f4faf7] shadow-[0_1px_0_rgba(17,69,90,0.04)]">
      <div className="mx-auto flex h-[108px] max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* LOGO */}
        <Link
          href="/"
          onClick={closeMobileMenu}
          className="shrink-0"
        >
          <Image
            src="/images/brand/bhf-logo.webp"
            alt="Blessings Heart Foundation"
            width={190}
            height={115}
            priority
            className="h-[88px] w-auto object-contain"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-1 lg:flex">
          <Link
            href="/"
            className="px-3 py-2 text-sm font-semibold text-[#11455A] transition hover:text-[#D18051]"
          >
            Home
          </Link>

          <DesktopDropdown
            label="Who We Are"
            href="/about/founder"
            children={whoWeAreLinks}
          />

          <DesktopDropdown
            label="What We Do"
            href="/what-we-do"
            children={whatWeDoLinks}
          />

          <DesktopDropdown
            label="Take Action"
            href="/take-action/volunteer"
            children={takeActionLinks}
          />

          {/* NEWS */}
          <Link
            href="/news"
            className="px-3 py-2 text-sm font-semibold text-[#11455A] transition hover:text-[#D18051]"
          >
            News
          </Link>

          {/* CONTACT */}
          <Link
            href="/contact"
            className="px-3 py-2 text-sm font-semibold text-[#11455A] transition hover:text-[#D18051]"
          >
            Contact Us
          </Link>

          {/* DONATE */}
          <Link
            href="/donate"
            className="px-3 py-2 text-sm font-semibold text-[#11455A] transition hover:text-[#D18051]"
          >
            Donate
          </Link>

          {/* DONATE NOW */}
          <Link
            href="/donate"
            className="ml-5 inline-flex items-center justify-center rounded-full bg-[#ff6a00] px-7 py-3.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#e85f00]"
          >
            Donate Now
          </Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#11455A] shadow-sm lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* MOBILE NAV */}
      {mobileOpen && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <nav className="mx-auto max-w-7xl space-y-1 px-5 py-5">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="block rounded-xl px-4 py-3 text-base font-semibold text-[#11455A]"
            >
              Home
            </Link>

            <MobileDropdown
              label="Who We Are"
              href="/about/founder"
              children={whoWeAreLinks}
              open={openMobileMenu === "who"}
              onToggle={() => toggleMobileMenu("who")}
              openItems={openMobileItems}
              toggleItem={toggleMobileItem}
              closeMobileMenu={closeMobileMenu}
            />

            <MobileDropdown
              label="What We Do"
              href="/what-we-do"
              children={whatWeDoLinks}
              open={openMobileMenu === "what"}
              onToggle={() => toggleMobileMenu("what")}
              openItems={openMobileItems}
              toggleItem={toggleMobileItem}
              closeMobileMenu={closeMobileMenu}
            />

            <MobileDropdown
              label="Take Action"
              href="/take-action/volunteer"
              children={takeActionLinks}
              open={openMobileMenu === "action"}
              onToggle={() => toggleMobileMenu("action")}
              openItems={openMobileItems}
              toggleItem={toggleMobileItem}
              closeMobileMenu={closeMobileMenu}
            />

            {/* NEWS */}
            <Link
              href="/news"
              onClick={closeMobileMenu}
              className="block rounded-xl px-4 py-3 text-base font-semibold text-[#11455A]"
            >
              News
            </Link>

            {/* CONTACT */}
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="block rounded-xl px-4 py-3 text-base font-semibold text-[#11455A]"
            >
              Contact Us
            </Link>

            {/* DONATE */}
            <Link
              href="/donate"
              onClick={closeMobileMenu}
              className="block rounded-xl px-4 py-3 text-base font-semibold text-[#11455A]"
            >
              Donate
            </Link>

            {/* DONATE NOW */}
            <Link
              href="/donate"
              onClick={closeMobileMenu}
              className="mt-3 flex items-center justify-center rounded-full bg-[#ff6a00] px-6 py-4 text-sm font-bold text-white"
            >
              Donate Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}