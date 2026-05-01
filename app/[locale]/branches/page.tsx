import type { Metadata } from "next";

import { BranchHeroSection } from "@/components/branches/hero-section";
import { BranchQuickContactBar } from "@/components/branches/quick-contact-bar";
import {
  BranchGridSection,
  BranchTrustSection,
  VisualGallerySection,
} from "@/components/branches/sections";
import {
  branches,
  Locale,
  locales,
  primaryBranchPhone,
  primaryWhatsAppE164,
} from "@/lib/site-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) {
    return { title: "Our Branch Network" };
  }
  return {
    title: "Our Branch Network | Mehul Japanese Language Education Center",
    description:
      "Visit Mehul branches in Dhaka, Rajshahi, Mymensingh, and Jamalpur. Expert Japanese language training, visa guidance, and Japan career support across Bangladesh.",
    openGraph: {
      title: "Our Branch Network — Mehul Japanese Language Education Center",
      description:
        "Find your nearest Mehul branch for premium Japanese education and trusted Japan pathway support.",
    },
  };
}

export default async function BranchesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  await params;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Mehul Japanese Language Education Center",
    description:
      "Japanese language education with branches in Dhaka, Rajshahi, Mymensingh, and Jamalpur, Bangladesh.",
    areaServed: branches.map((b) => ({
      "@type": "Place",
      name: b.name,
      address: b.address,
    })),
    department: branches.map((b) => ({
      "@type": "LocalBusiness",
      name: `Mehul — ${b.name}`,
      telephone: b.phone.replace(/\D/g, ""),
      address: b.address,
      hasMap: b.map,
    })),
  };

  return (
    <div className="bg-white">
      <BranchHeroSection phone={primaryBranchPhone} whatsAppE164={primaryWhatsAppE164} />
      <BranchQuickContactBar phone={primaryBranchPhone} whatsAppE164={primaryWhatsAppE164} />
      <BranchGridSection branches={branches} />
      <VisualGallerySection />
      <BranchTrustSection />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
