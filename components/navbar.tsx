import Link from "next/link";

import { labels, Locale } from "@/lib/site-content";
import { LanguageSwitcher } from "./language-switcher";
import { NavbarDesktopNav, NavbarMobileNav } from "./navbar-nav";

export function Navbar({ locale }: { locale: Locale }) {
  const t = labels[locale];
  const menu = [
    { href: `/${locale}`, label: t.nav.home },
    { href: `/${locale}/about`, label: t.nav.about },
    { href: `/${locale}/courses`, label: t.nav.courses },
    { href: `/${locale}/visa-services`, label: t.nav.visa },
    { href: `/${locale}/branches`, label: t.nav.branches },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#0B2D5C]/10 bg-white/95 backdrop-blur">
      <div className="container-main flex min-h-20 items-center justify-between gap-4 py-2">
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Mehul logo"
            loading="lazy"
            width={52}
            height={53}
            decoding="async"
            className="h-[53px] w-[52px] bg-white object-contain"
            style={{
              color: "rgba(0, 0, 0, 0)",
              borderWidth: "0px",
              borderColor: "rgba(0, 0, 0, 0)",
              borderStyle: "none",
              borderImage: "none",
            }}
          />
          <div className="hidden md:block">
            <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-[#C8102E]">Mehul</p>
            <p className="text-xs text-[#0B2D5C]/70">Japanese Language Education Center</p>
          </div>
        </Link>
        <NavbarDesktopNav locale={locale} items={menu} />
        <div className="flex items-center gap-2">
          {/* <LanguageSwitcher locale={locale} /> */}
          <a
            href="https://learn.mehul.com.bd/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#C8102E] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#AB0E27] md:text-sm"
          >
            {t.nav.studentPortal}
          </a>
        </div>
      </div>
      <NavbarMobileNav locale={locale} items={menu} />
    </header>
  );
}
