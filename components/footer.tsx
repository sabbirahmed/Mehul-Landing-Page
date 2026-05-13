import Link from "next/link";
import { ArrowRight, BookOpen, Building2, FileText, Plane } from "lucide-react";

import { telHref } from "@/components/branches/utils";
import { branches, labels, Locale } from "@/lib/site-content";

const serviceIcons = [BookOpen, Plane, FileText, Building2] as const;

export function Footer({ locale }: { locale: Locale }) {
  const t = labels[locale];
  const year = new Date().getFullYear();

  const navItems = [
    { href: `/${locale}`, label: t.nav.home },
    { href: `/${locale}/about`, label: t.nav.about },
    { href: `/${locale}/courses`, label: t.nav.courses },
    { href: `/${locale}/visa-services`, label: t.nav.visa },
    { href: `/${locale}/branches`, label: t.nav.branches },
  ] as const;

  return (
    <footer className="border-t border-white/10 bg-[#0B2D5C] text-white">
      <div className="container-main py-14 md:py-16">
        <div className="mb-12 md:mb-14">
          <div className="rounded-3xl bg-gradient-to-r from-[#081c3d] via-[#0B2D5C] to-[#123f7a] p-10 text-center shadow-2xl md:p-14">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">{t.finalCtaEyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">{t.finalCta}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/85">{t.finalCtaSub}</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                href="https://learn.mehul.com.bd/#courses"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#C8102E] px-7 py-3 font-semibold text-white transition hover:scale-[1.02] hover:bg-[#AB0E27]"
              >
                {t.enrollNow}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href={`/${locale}/branches#quick-contact`}
                className="rounded-full border border-white/60 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                {t.consultation}
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="flex max-w-md flex-col gap-6 lg:max-w-lg">
            <p className="text-sm leading-relaxed text-white/65">{t.footerIntro}</p>

            <ul className="space-y-2.5 border-l border-white/15 pl-4">
              {t.footerServices.map((line, index) => {
                const Icon = serviceIcons[index] ?? BookOpen;
                return (
                  <li key={line} className="flex gap-3 text-sm leading-snug text-white/75">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[#C8102E]" aria-hidden />
                    <span>{line}</span>
                  </li>
                );
              })}
            </ul>

            <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-1 gap-y-2 text-[13px] text-white/65">
              {navItems.map((item, index) => (
                <span key={item.href} className="inline-flex items-center">
                  {index > 0 ? <span className="px-2 text-white/25 select-none" aria-hidden>·</span> : null}
                  <Link href={item.href} className="transition hover:text-white">
                    {item.label}
                  </Link>
                </span>
              ))}
            </nav>
          </div>

          <div className="lg:min-w-[220px] lg:text-right">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-white/40">Branches</p>
            <ul className="mt-4 space-y-4 text-sm">
              {branches.map((branch) => (
                <li key={branch.id}>
                  <p className="text-white/90">{branch.name}</p>
                  <a
                    href={telHref(branch.phone)}
                    className="mt-0.5 inline-block text-white/55 transition hover:text-white"
                  >
                    {branch.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6">
          <p className="text-center text-xs text-white/45">
            © {year} Mehul Japanese Language Education Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
