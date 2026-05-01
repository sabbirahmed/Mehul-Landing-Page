import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  BriefcaseBusiness,
  Building2,
  Clock3,
  Globe2,
  GraduationCap,
  Handshake,
  Languages,
  ScrollText,
  Users,
} from "lucide-react";

import { FadeIn } from "@/components/fade-in";
import { Locale } from "@/lib/site-content";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  const heroImage =
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85";
  const whoWeAreImage =
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=85";
  const globalVisuals = [
    "https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1000&q=80",
  ];
  const storyImages = [
    "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1498982261566-1c28c9cf4c02?auto=format&fit=crop&w=1200&q=80",
  ];

  return (
    <div className="bg-[#F5F9FF]">
      <section className="section-padding">
        <div className="container-main grid items-center gap-10 lg:grid-cols-2">
          <FadeIn>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#0B2D5C]/15 bg-white px-4 py-2 text-xs font-semibold text-[#0B2D5C]">
              <Globe2 className="h-4 w-4 text-[#C8102E]" />
              About Mehul
            </p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-[#0B2D5C] md:text-5xl">
              Building Your Future Between Bangladesh and Japan
            </h1>
            <p className="mt-5 max-w-xl text-lg text-[#0B2D5C]/80">
              We are more than a language center - we are your complete pathway to study and work in Japan.
            </p>
            <Link
              href={`/${locale}/branches#quick-contact`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#C8102E] px-6 py-3 font-semibold text-white transition hover:scale-[1.02] hover:bg-[#AB0E27]"
            >
              Get Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="relative overflow-hidden rounded-[28px] shadow-2xl">
              <Image
                src={heroImage}
                alt="Students in a modern learning environment"
                width={1200}
                height={900}
                className="h-[420px] w-full object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2D5C]/70 via-transparent to-transparent" />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main grid items-center gap-10 lg:grid-cols-2">
          <FadeIn>
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <Image
                src={whoWeAreImage}
                alt="Classroom training at Mehul"
                width={1200}
                height={900}
                className="h-[420px] w-full object-cover"
                unoptimized
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">Who We Are</h2>
            <p className="mt-4 text-[#0B2D5C]/80">
              Mehul Japanese Language Education Center is one of Bangladesh&apos;s most trusted institutions for Japanese
              education and career preparation. We combine language, visa, and job guidance into one premium student
              journey backed by strong partnerships in Japan.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <FadeIn>
            <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">Our Mission & Vision</h2>
          </FadeIn>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <FadeIn>
              <div className="h-full rounded-3xl border border-[#0B2D5C]/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <BadgeCheck className="h-9 w-9 text-[#C8102E]" />
                <h3 className="mt-4 text-2xl font-bold text-[#0B2D5C]">Mission</h3>
                <p className="mt-3 text-[#0B2D5C]/80">Help students succeed in Japan through complete, practical guidance.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="h-full rounded-3xl border border-[#0B2D5C]/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <ScrollText className="h-9 w-9 text-[#C8102E]" />
                <h3 className="mt-4 text-2xl font-bold text-[#0B2D5C]">Vision</h3>
                <p className="mt-3 text-[#0B2D5C]/80">
                  Become the most trusted Japan pathway platform in Bangladesh.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main grid gap-10 lg:grid-cols-2">
          <FadeIn>
            <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">Our Global Connection</h2>
            <p className="mt-4 text-[#0B2D5C]/80">We work closely with Japan-focused institutions to create real pathways:</p>
            <ul className="mt-6 space-y-3">
              {[
                { icon: Languages, text: "Partnership with Japanese language schools" },
                { icon: GraduationCap, text: "Academic linkage with universities" },
                { icon: Handshake, text: "Corporate connections for direct opportunities" },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-3 rounded-xl border border-[#0B2D5C]/10 bg-[#F5F9FF] p-3">
                  <item.icon className="h-5 w-5 text-[#C8102E]" />
                  <span className="text-[#0B2D5C]/85">{item.text}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-2">
            {globalVisuals.map((src, index) => (
              <FadeIn key={src} delay={index * 0.06}>
                <div className={`overflow-hidden rounded-2xl ${index === 0 ? "sm:col-span-2" : ""}`}>
                  <Image
                    src={src}
                    alt="Japan network visual"
                    width={1000}
                    height={700}
                    className={`w-full object-cover transition duration-500 hover:scale-105 ${index === 0 ? "h-52" : "h-40"}`}
                    unoptimized
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <FadeIn>
            <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">Why Mehul Is Different</h2>
          </FadeIn>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Users, title: "Native Japanese Instructors" },
              { icon: BookOpenCheck, title: "10+ Years Experienced Faculty" },
              { icon: Clock3, title: "Flexible Class Formats" },
              { icon: BriefcaseBusiness, title: "Visa & Job Support" },
            ].map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.06}>
                <div className="h-full rounded-2xl border border-[#0B2D5C]/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <item.icon className="h-8 w-8 text-[#C8102E]" />
                  <p className="mt-4 font-bold text-[#0B2D5C]">{item.title}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-[#0B2D5C] to-[#123f7a] text-white">
        <div className="container-main">
          <FadeIn>
            <h2 className="text-3xl font-bold md:text-4xl">Manners Before Knowledge</h2>
            <p className="mt-4 max-w-3xl text-white/90">
              We train students in discipline, respect, and Japanese culture so they succeed not only academically, but
              also socially and professionally in Japan.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <FadeIn>
            <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">Academic System</h2>
          </FadeIn>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Clock3, value: "4 Months", label: "Course Duration" },
              { icon: BookOpenCheck, value: "160 Hours", label: "Structured Learning" },
              { icon: Users, value: "6 Days/Week", label: "Disciplined Routine" },
              { icon: BadgeCheck, value: "50+ Mock Tests", label: "Exam Preparation" },
            ].map((item, index) => (
              <FadeIn key={item.value} delay={index * 0.05}>
                <div className="rounded-2xl border border-[#0B2D5C]/10 bg-[#F5F9FF] p-6 text-center shadow-sm">
                  <item.icon className="mx-auto h-8 w-8 text-[#C8102E]" />
                  <p className="mt-4 text-2xl font-extrabold text-[#0B2D5C]">{item.value}</p>
                  <p className="mt-1 text-sm text-[#0B2D5C]/75">{item.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <FadeIn>
            <div className="rounded-3xl border border-[#0B2D5C]/10 bg-white p-8 shadow-lg md:p-10">
              <div className="grid items-center gap-8 md:grid-cols-[160px_1fr]">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
                  alt="Managing Director"
                  width={160}
                  height={160}
                  className="rounded-2xl object-cover"
                  unoptimized
                />
                <div>
                  <p className="text-sm font-semibold tracking-[0.16em] text-[#C8102E]">MESSAGE FROM MANAGING DIRECTOR</p>
                  <p className="mt-4 text-lg leading-relaxed text-[#0B2D5C]/85">
                    &ldquo;Our promise is transparent guidance, disciplined training, and practical support so every
                    student can build a confident future in Japan.&rdquo;
                  </p>
                  <p className="mt-4 font-semibold text-[#0B2D5C]">Monirul Islam</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <FadeIn>
            <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">Visual Story</h2>
          </FadeIn>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {storyImages.map((src, index) => (
              <FadeIn key={src} delay={index * 0.06}>
                <div className="group overflow-hidden rounded-2xl">
                  <Image
                    src={src}
                    alt="Mehul visual story"
                    width={1200}
                    height={900}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
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
