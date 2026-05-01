import { Building2, MapPin, Phone, Quote } from "lucide-react";

import type { Branch } from "@/lib/site-content";

import { telHref } from "./utils";

export function BranchCard({ branch }: { branch: Branch }) {
  return (
    <article
      id={`branch-${branch.id}`}
      className="group relative overflow-hidden rounded-[28px] border border-[#0B2D5C]/10 bg-white p-6 shadow-[0_10px_30px_rgba(11,45,92,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(11,45,92,0.14)] md:p-8"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0B2D5C] via-[#1f4b86] to-[#C8102E]" />
      <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:gap-8">
        <div>
          <div className="flex items-start gap-4">
            <div className="rounded-2xl bg-[#F5F9FF] p-3 transition group-hover:bg-[#e8f1ff]">
              <Building2 className="h-7 w-7 text-[#C8102E]" />
            </div>
            <div>
              <h3 className="flex items-center gap-2 text-[26px] font-extrabold leading-tight text-[#0B2D5C]">
                <MapPin className="h-5 w-5 shrink-0 text-[#C8102E]" />
                {branch.name}
              </h3>
              <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-[#0B2D5C]/75">{branch.address}</p>
              <a
                href={telHref(branch.phone)}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#fff1f4] px-3 py-1.5 text-sm font-bold text-[#C8102E]"
              >
                <Phone className="h-4 w-4" />
                {branch.phone}
              </a>
            </div>
          </div>
          <ul className="mt-6 space-y-2 border-t border-[#0B2D5C]/10 pt-6">
            {branch.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm text-[#0B2D5C]/85">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#C8102E]" />
                {h}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={telHref(branch.phone)}
              className="inline-flex items-center gap-2 rounded-full bg-[#0B2D5C] px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-[#133e78]"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <a
              href={branch.map}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#0B2D5C]/20 bg-white px-5 py-2.5 text-sm font-semibold text-[#0B2D5C] transition hover:bg-[#F5F9FF]"
            >
              <MapPin className="h-4 w-4" />
              View on Map
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#0B2D5C]/10 bg-[#e8eef5] shadow-inner">
          <div className="flex items-center justify-between border-b border-[#0B2D5C]/10 bg-white/90 px-3 py-2 text-xs font-semibold">
            <span className="text-[#0B2D5C]/80">Branch Location</span>
            <a href={branch.map} target="_blank" rel="noopener noreferrer" className="text-[#C8102E] hover:underline">
              Open Map
            </a>
          </div>
          <iframe
            title={`Map — ${branch.name}`}
            src={`https://maps.google.com/maps?q=${encodeURIComponent(branch.mapEmbedQuery)}&output=embed`}
            className="h-64 w-full border-0 md:h-[calc(100%-33px)] md:min-h-[255px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <blockquote className="mt-6 rounded-2xl border border-[#0B2D5C]/10 bg-gradient-to-r from-[#F5F9FF] to-white p-5">
        <div className="flex items-start gap-3">
          <Quote className="mt-0.5 h-5 w-5 shrink-0 text-[#C8102E]/70" />
          <div>
            <p className="text-sm font-semibold tracking-wide text-[#0B2D5C]">DIRECTOR MESSAGE</p>
            <p className="mt-2 text-sm leading-relaxed text-[#0B2D5C]/80">
              &ldquo;{branch.directorQuote ?? branch.message}&rdquo;
            </p>
          </div>
        </div>
      </blockquote>
    </article>
  );
}
