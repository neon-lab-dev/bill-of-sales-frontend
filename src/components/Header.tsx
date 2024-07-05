"use client";
import { ICONS } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NAV_LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Boat",
    href: "/search/boat",
  },
  {
    label: "Firearm",
    href: "/search/firearm",
  },
  {
    label: "General",
    href: "/search/general",
  },
  {
    label: "Vehicle",
    href: "/search/vehicle",
  },
];

const Header = () => {
  const path = usePathname();
  return (
    <header className="h-[72px] z-50 md:h-[80px] w-screen bg-primary fixed inset-0">
      <div className="wrapper flex items-center justify-between h-full max-width w-full">
        <Link href="/">
          <Image
            src={ICONS.logo}
            alt="bill of sales"
            height={41}
            width={287}
            placeholder="blur"
            quality={100}
            className="w-[200px] h-auto lg:h-[36px] lg:w-[251px] xl:h-[40px] xl:w-[287px]"
          />
        </Link>
        <nav className="gap-6 lg:gap-12 xl:gap-[75px] items-center text-white text-base leading-[125%] font-500 hidden md:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <div className="relative" key={href}>
              <Link key={label} href={href} className="px-2 py-1">
                {label}
              </Link>
              {path === href && (
                <div className="h-1 w-full bg-gray-100 rounded-sm absolute top-10" />
              )}
            </div>
          ))}
        </nav>
        <button className="md:hidden">
          <Image
            src={ICONS.menu}
            alt="menu"
            height={36}
            width={36}
            className="w-6 h-6 sm:h-9 sm:w-9 "
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
