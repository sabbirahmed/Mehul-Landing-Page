"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { Locale, locales } from "@/lib/site-content";

const names: Record<Locale, string> = {
  en: "EN",
  bn: "বাং",
  ja: "日",
};

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  const pathWithoutLocale = pathname.replace(/^\/(en|bn|ja)/, "") || "/";

  return (
    <div className="flex items-center gap-1 rounded-full border border-[#0B2D5C]/20 bg-white px-2 py-1">
      {locales.map((lang) => (
        <Link
          key={lang}
          href={`/${lang}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`}
          className={`rounded-full px-2 py-1 text-xs font-semibold transition ${
            locale === lang
              ? "bg-[#0B2D5C] text-white"
              : "text-[#0B2D5C] hover:bg-[#F5F9FF]"
          }`}
        >
          {names[lang]}
        </Link>
      ))}
    </div>
  );
}
