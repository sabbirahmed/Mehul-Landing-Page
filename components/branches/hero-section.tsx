import Image from "next/image";
import { GraduationCap, MapPin, Phone } from "lucide-react";

import { FadeIn } from "@/components/fade-in";

import { consultationWhatsAppLink, telHref } from "./utils";

const heroImage =
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=85";

export function BranchHeroSection({
  phone,
  whatsAppE164,
}: {
  phone: string;
  whatsAppE164: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Students in a classroom learning together"
          fill
          className="object-cover"
          sizes="100vw"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061731]/95 via-[#0B2D5C]/88 to-[#C8102E]/35" />
      </div>
      <div className="container-main relative py-20 text-white md:py-28">
        <FadeIn>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur">
            <MapPin className="h-4 w-4 text-[#F4B400]" />
            Our Branch Network
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
            Our Branch Network Across Bangladesh
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/90 md:text-xl">
            Visit your nearest Mehul center and start your journey to Japan.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={telHref(phone)}
              className="inline-flex items-center gap-2 rounded-full bg-[#C8102E] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:bg-[#AB0E27]"
            >
              <Phone className="h-4 w-4" />
              Contact Now
            </a>
            <a
              href={consultationWhatsAppLink(whatsAppE164)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              <GraduationCap className="h-4 w-4" />
              Free Consultation
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
