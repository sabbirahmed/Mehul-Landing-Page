import Image from "next/image";
import { Building2, Globe2, GraduationCap, MapPin, Quote, ShieldCheck } from "lucide-react";

import { FadeIn } from "@/components/fade-in";
import type { Branch } from "@/lib/site-content";

import { BranchCard } from "./branch-card";

const directorPlaceholders: Record<string, string> = {
  rajshahi:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
  mymensingh:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
  jamalpur:
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
};

const galleryImages = [
  "/images/branches/gallery-1.jpg",
  "/images/branches/gallery-2.jpg",
  "/images/branches/gallery-3.jpg",
  "/images/branches/gallery-4.jpg",
  "/images/branches/gallery-5.jpg",
  "/images/branches/gallery-6.jpg",
  "/images/branches/gallery-7.jpg",
  "/images/branches/gallery-8.jpg",
  "/images/branches/gallery-9.jpg",
  "/images/branches/gallery-10.jpg",
];

export function BranchGridSection({ branches }: { branches: Branch[] }) {
  return (
    <section id="our-branches" className="section-padding bg-[#F5F9FF]">
      <div className="container-main">
        <FadeIn>
          <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">Our Branches</h2>
          <p className="mt-4 max-w-3xl text-[#0B2D5C]/80">
            We are available across multiple cities to support your journey to Japan. Choose your nearest branch and
            connect with us today.
          </p>
        </FadeIn>
        <div className="mt-12 grid gap-8">
          {branches.map((branch, index) => (
            <FadeIn key={branch.id} delay={index * 0.06}>
              <BranchCard branch={branch} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DirectorMessagesSection({ branches }: { branches: Branch[] }) {
  const branchesWithQuotes = branches.filter((b) => b.directorQuote);
  return (
    <section id="director-messages" className="section-padding bg-white">
      <div className="container-main">
        <FadeIn>
          <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">Branch Director Messages</h2>
        </FadeIn>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {branchesWithQuotes.map((branch, index) => (
            <FadeIn key={branch.id} delay={index * 0.08}>
              <blockquote className="flex h-full flex-col rounded-3xl border border-[#0B2D5C]/10 bg-[#F5F9FF] p-8 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
                <Quote className="h-8 w-8 text-[#C8102E]/40" />
                <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#0B2D5C]">
                  <MapPin className="h-4 w-4 text-[#C8102E]" />
                  {branch.name.replace(" Branch", "")}
                </p>
                <p className="mt-4 flex-1 text-[#0B2D5C]/85 leading-relaxed">&ldquo;{branch.directorQuote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3 border-t border-[#0B2D5C]/10 pt-6">
                  <Image
                    src={directorPlaceholders[branch.id] ?? directorPlaceholders.rajshahi}
                    alt={`Branch director — ${branch.name}`}
                    width={56}
                    height={56}
                    className="rounded-full object-cover"
                    unoptimized
                  />
                  <div>
                    <p className="text-sm font-semibold text-[#0B2D5C]">Branch Director</p>
                    <p className="text-xs text-[#0B2D5C]/65">{branch.name}</p>
                  </div>
                </div>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BranchMapSection({ branches }: { branches: Branch[] }) {
  return (
    <section id="find-us-map" className="section-padding bg-[#F5F9FF]">
      <div className="container-main">
        <FadeIn>
          <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">Find Us on Map</h2>
          <p className="mt-3 max-w-2xl text-[#0B2D5C]/80">Locate all branches quickly with live map previews.</p>
        </FadeIn>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {branches.map((branch, index) => (
            <FadeIn key={branch.id} delay={index * 0.05}>
              <div className="overflow-hidden rounded-2xl border border-[#0B2D5C]/10 bg-white shadow-md">
                <div className="flex items-center justify-between border-b border-[#0B2D5C]/10 px-4 py-3">
                  <span className="text-sm font-bold text-[#0B2D5C]">{branch.name}</span>
                  <a
                    href={branch.map}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#C8102E] hover:underline"
                  >
                    Open in Maps
                  </a>
                </div>
                <div className="aspect-[4/3] w-full bg-[#e8eef5]">
                  <iframe
                    title={`Map — ${branch.name}`}
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(branch.mapEmbedQuery)}&output=embed`}
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VisualGallerySection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <FadeIn>
          <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">Campus & Japan Journey Visuals</h2>
        </FadeIn>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {galleryImages.map((src, index) => (
            <FadeIn key={src} delay={index * 0.06}>
              <div className="group relative overflow-hidden rounded-2xl">
                <Image
                  src={src}
                  alt="Students and Japan related visual"
                  width={1200}
                  height={800}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105 md:h-72"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2D5C]/45 via-transparent to-transparent" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BranchTrustSection() {
  const items = [
    {
      icon: Building2,
      title: "Multiple Branches",
      text: "Physical presence across Bangladesh builds confidence and accessibility.",
    },
    {
      icon: ShieldCheck,
      title: "Trusted by Students",
      text: "Families choose Mehul for transparent guidance and premium standards.",
    },
    {
      icon: GraduationCap,
      title: "Local Support Teams",
      text: "Direct in-person support for language, visa, and career preparation.",
    },
    {
      icon: Globe2,
      title: "Japan Connected",
      text: "Every branch is linked to real study and career opportunities in Japan.",
    },
  ];
  return (
    <section id="why-network" className="section-padding bg-[#F5F9FF]">
      <div className="container-main">
        <FadeIn>
          <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">Why Our Branch Network Matters</h2>
        </FadeIn>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.06}>
              <div className="h-full rounded-2xl border border-[#0B2D5C]/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
                <item.icon className="h-8 w-8 text-[#C8102E]" />
                <p className="mt-4 font-bold text-[#0B2D5C]">{item.title}</p>
                <p className="mt-2 text-sm text-[#0B2D5C]/75">{item.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
