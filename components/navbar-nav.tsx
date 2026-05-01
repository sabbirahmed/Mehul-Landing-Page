"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { Locale } from "@/lib/site-content";

export type NavItem = { href: string; label: string };

function isActive(pathname: string, href: string, locale: string) {
  const p = pathname.replace(/\/$/, "") || "/";
  const home = `/${locale}`;
  if (href === home) return p === home;
  return p === href || p.startsWith(`${href}/`);
}

export function NavbarDesktopNav({ locale, items }: { locale: Locale; items: NavItem[] }) {
  const pathname = usePathname();
  return (
    <nav className="hidden items-center gap-2 lg:flex">
      {items.map((item) => {
        const on = isActive(pathname, item.href, locale);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`rounded-full px-3 py-2 text-sm font-medium transition ${
              on
                ? "bg-[#C8102E]/12 font-semibold text-[#C8102E]"
                : "text-[#0B2D5C] hover:bg-[#0B2D5C]/5 hover:text-[#C8102E]"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function NavbarMobileNav({ locale, items }: { locale: Locale; items: NavItem[] }) {
  const pathname = usePathname();
  return (
    <div className="container-main flex gap-2 overflow-x-auto pb-3 lg:hidden">
      {items.map((item) => {
        const on = isActive(pathname, item.href, locale);
        return (
          <Link
            key={`m-${item.href}`}
            href={item.href}
            className={`whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition ${
              on
                ? "bg-[#C8102E]/12 font-semibold text-[#C8102E]"
                : "text-[#0B2D5C] hover:bg-[#0B2D5C]/5"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
