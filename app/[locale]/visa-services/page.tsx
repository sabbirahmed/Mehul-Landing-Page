import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Building2,
  FileText,
  Globe2,
  GraduationCap,
  Handshake,
  HeartHandshake,
  MapPin,
  Phone,
  Plane,
  ShieldCheck,
  Sparkles,
  Sprout,
  TrendingUp,
  Wrench,
} from "lucide-react";

import { consultationWhatsAppLink, telHref } from "@/components/branches/utils";
import { FadeIn } from "@/components/fade-in";
import { Locale, primaryBranchPhone, primaryWhatsAppE164 } from "@/lib/site-content";

const heroImage =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1300&q=85";

const processSteps = [
  { icon: Phone, title: "Consultation", desc: "Clear goals and the right pathway for you." },
  { icon: GraduationCap, title: "Course Enrollment", desc: "Join structured Japanese training at Mehul." },
  { icon: Sparkles, title: "Training", desc: "Language, culture, and exam readiness." },
  { icon: FileText, title: "Document Preparation", desc: "Organized paperwork and checklist support." },
  { icon: Plane, title: "Visa Processing", desc: "Guided submission and follow-through." },
  { icon: MapPin, title: "Placement in Japan", desc: "Study, work, or sector placement support." },
];

export default async function VisaServicesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const consultHref = `/${locale}/branches#quick-contact`;
  const waConsult = consultationWhatsAppLink(primaryWhatsAppE164);

  return (
    <div className="bg-[#F5F9FF]">
      <section className="section-padding bg-white">
        <div className="container-main grid items-center gap-10 lg:grid-cols-2">
          <FadeIn>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#0B2D5C]/15 bg-[#F5F9FF] px-4 py-2 text-xs font-semibold text-[#0B2D5C]">
              <Plane className="h-4 w-4 text-[#C8102E]" />
              Visa & Services
            </p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-[#0B2D5C] md:text-5xl">
              Your Complete Pathway to Study and Work in Japan
            </h1>
            <p className="mt-5 max-w-xl text-lg text-[#0B2D5C]/80">
              We provide end-to-end support — from language learning to visa processing and job placement.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={waConsult}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#C8102E] px-6 py-3 font-semibold text-white transition hover:scale-[1.02] hover:bg-[#AB0E27]"
              >
                Get Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={telHref(primaryBranchPhone)}
                className="rounded-full border border-[#0B2D5C]/20 px-6 py-3 font-semibold text-[#0B2D5C] transition hover:bg-[#F5F9FF]"
              >
                Talk to an Advisor
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="relative overflow-hidden rounded-[28px] shadow-xl">
              <Image
                src={heroImage}
                alt="Professional environment and Japan career pathway"
                width={1300}
                height={900}
                className="h-[420px] w-full object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2D5C]/55 via-transparent to-transparent" />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <FadeIn>
            <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">Three Pathways to Japan</h2>
            <p className="mt-3 max-w-2xl text-[#0B2D5C]/80">
              Choose the route that matches your goal — we guide you at every step.
            </p>
          </FadeIn>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                emoji: "🎓",
                icon: GraduationCap,
                title: "Student Visa",
                desc: "Language schools, university admission, and study-focused visa support.",
                image:
                  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80",
              },
              {
                emoji: "💼",
                icon: Briefcase,
                title: "Job Visa",
                desc: "Corporate and professional roles with documentation and career alignment.",
                image:
                  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
              },
              {
                emoji: "🏗️",
                icon: Building2,
                title: "SSW Visa",
                desc: "Specified Skilled Worker sectors with training and placement readiness.",
                image:
                  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
              },
            ].map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.07}>
                <article className="group h-full overflow-hidden rounded-3xl border border-[#0B2D5C]/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={item.image}
                      alt=""
                      width={900}
                      height={400}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B2D5C]/70 to-transparent" />
                    <span className="absolute bottom-3 left-4 text-2xl">{item.emoji}</span>
                  </div>
                  <div className="p-6">
                    <item.icon className="h-8 w-8 text-[#C8102E]" />
                    <h3 className="mt-3 text-xl font-bold text-[#0B2D5C]">{item.title}</h3>
                    <p className="mt-2 text-sm text-[#0B2D5C]/80">{item.desc}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main grid items-center gap-10 lg:grid-cols-2">
          <FadeIn>
            <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">Student Visa & University Placement</h2>
            <p className="mt-4 text-[#0B2D5C]/80">
              Structured guidance for admission, documentation, and a smooth transition to study in Japan.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Admission strategy and profile planning",
                "A-rank language school and university pathways",
                "Interview and application document support",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3 rounded-xl border border-[#0B2D5C]/10 bg-[#F5F9FF] px-4 py-3 text-sm text-[#0B2D5C]/85">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#C8102E]" />
                  {line}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm font-semibold text-[#0B2D5C]">Popular destinations</p>
            <p className="mt-1 text-sm text-[#0B2D5C]/75">
              Tokyo, Osaka, Nagoya, Kobe, Hiroshima, Okayama, Chiba, Saitama, Hokkaido, and more.
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="overflow-hidden rounded-3xl shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=85"
                alt="University and study in Japan"
                width={1200}
                height={900}
                className="h-[400px] w-full object-cover"
                unoptimized
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main grid items-center gap-10 lg:grid-cols-2">
          <FadeIn>
            <div className="order-2 overflow-hidden rounded-3xl shadow-lg lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=85"
                alt="Professional work environment in Japan"
                width={1200}
                height={900}
                className="h-[380px] w-full object-cover"
                unoptimized
              />
            </div>
          </FadeIn>
          <div className="order-1 lg:order-2">
            <FadeIn delay={0.08}>
              <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">Professional Job Visa</h2>
              <p className="mt-4 text-[#0B2D5C]/80">
                Career pathways aligned with Japanese hiring standards and long-term growth.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["IT & technology", "Engineering", "Corporate positions"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#0B2D5C]/15 bg-white px-3 py-1 text-xs font-semibold text-[#0B2D5C]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <ul className="mt-6 space-y-2 text-sm text-[#0B2D5C]/85">
                <li className="flex gap-2">
                  <TrendingUp className="h-4 w-4 shrink-0 text-[#C8102E]" />
                  High-demand sectors with structured language and interview prep
                </li>
                <li className="flex gap-2">
                  <Handshake className="h-4 w-4 shrink-0 text-[#C8102E]" />
                  Documentation and visa process guidance end-to-end
                </li>
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <FadeIn>
            <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">SSW Visa Program</h2>
            <p className="mt-3 max-w-2xl text-[#0B2D5C]/80">
              Sector-focused preparation with language, exams, and placement awareness.
            </p>
          </FadeIn>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: HeartHandshake, title: "Caregiver", desc: "Nursing care pathway with communication readiness." },
              { icon: Sprout, title: "Agriculture", desc: "Field communication and sector-specific vocabulary." },
              { icon: Wrench, title: "Construction", desc: "Safety, teamwork language, and technical basics." },
              { icon: Plane, title: "Airport Services", desc: "Ground handling and service-focused Japanese." },
            ].map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.06}>
                <div className="h-full rounded-2xl border border-[#0B2D5C]/10 bg-[#F5F9FF] p-6 transition hover:-translate-y-1 hover:shadow-lg">
                  <item.icon className="h-8 w-8 text-[#C8102E]" />
                  <h3 className="mt-4 font-bold text-[#0B2D5C]">{item.title}</h3>
                  <p className="mt-2 text-sm text-[#0B2D5C]/75">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <FadeIn>
            <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">How the Process Works</h2>
          </FadeIn>
          <div className="relative mx-auto mt-12 max-w-2xl">
            <div className="absolute left-[19px] top-6 bottom-6 w-px bg-gradient-to-b from-[#0B2D5C]/20 via-[#C8102E]/30 to-[#0B2D5C]/20" />
            <ol className="space-y-4">
              {processSteps.map((step, index) => (
                <FadeIn key={step.title} delay={index * 0.05}>
                  <li className="relative flex gap-5">
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#C8102E] bg-white text-sm font-bold text-[#C8102E]">
                      {index + 1}
                    </div>
                    <div className="flex-1 rounded-2xl border border-[#0B2D5C]/10 bg-white p-5 shadow-sm">
                      <step.icon className="h-6 w-6 text-[#C8102E]" />
                      <p className="mt-2 font-bold text-[#0B2D5C]">{step.title}</p>
                      <p className="mt-1 text-sm text-[#0B2D5C]/75">{step.desc}</p>
                    </div>
                  </li>
                </FadeIn>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <FadeIn>
            <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">Why Choose Our Services</h2>
          </FadeIn>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ShieldCheck, title: "Transparent Process", text: "Clear steps, checklists, and honest timelines." },
              { icon: Globe2, title: "Strong Japan Network", text: "Schools, partners, and real pathway connections." },
              { icon: TrendingUp, title: "High Success Focus", text: "Structured training aligned with visa outcomes." },
              { icon: Handshake, title: "End-to-End Support", text: "From language class to placement preparation." },
            ].map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.06}>
                <div className="h-full rounded-2xl border border-[#0B2D5C]/10 bg-[#F5F9FF] p-6 transition hover:-translate-y-1 hover:shadow-md">
                  <item.icon className="h-8 w-8 text-[#C8102E]" />
                  <p className="mt-4 font-bold text-[#0B2D5C]">{item.title}</p>
                  <p className="mt-2 text-sm text-[#0B2D5C]/75">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <FadeIn>
            <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">Trusted Results</h2>
          </FadeIn>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <FadeIn>
              <div className="rounded-2xl border border-[#0B2D5C]/10 bg-white p-8 text-center shadow-sm">
                <p className="text-4xl font-extrabold text-[#C8102E]">5,000+</p>
                <p className="mt-2 text-sm font-semibold text-[#0B2D5C]">Students served</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.06}>
              <div className="rounded-2xl border border-[#0B2D5C]/10 bg-white p-8 text-center shadow-sm">
                <p className="text-4xl font-extrabold text-[#0B2D5C]">4</p>
                <p className="mt-2 text-sm font-semibold text-[#0B2D5C]">Branches across Bangladesh</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.12}>
              <div className="rounded-2xl border border-[#0B2D5C]/10 bg-white p-8 text-center shadow-sm">
                <p className="text-4xl font-extrabold text-[#0B2D5C]">Premium</p>
                <p className="mt-2 text-sm font-semibold text-[#0B2D5C]">Japan pathway standards</p>
              </div>
            </FadeIn>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              {
                quote: "The visa and documentation guidance felt clear from day one — I always knew the next step.",
                who: "Student, Dhaka",
              },
              {
                quote: "Mehul connected language training with real Japan opportunities — not just classroom theory.",
                who: "Professional candidate",
              },
            ].map((t, i) => (
              <FadeIn key={t.who} delay={i * 0.08}>
                <blockquote className="rounded-2xl border border-[#0B2D5C]/10 bg-white p-6 shadow-sm">
                  <p className="text-sm leading-relaxed text-[#0B2D5C]/85">&ldquo;{t.quote}&rdquo;</p>
                  <p className="mt-3 text-xs font-semibold text-[#C8102E]">{t.who}</p>
                </blockquote>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <FadeIn>
            <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">Japan in Motion</h2>
          </FadeIn>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
              "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80",
              "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=80",
            ].map((src, index) => (
              <FadeIn key={src} delay={index * 0.06}>
                <div className="group overflow-hidden rounded-2xl">
                  <Image
                    src={src}
                    alt="Japan and training visual"
                    width={1000}
                    height={700}
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                    unoptimized
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
