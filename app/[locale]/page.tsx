import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  Handshake,
  Languages,
  MapPinned,
  MessageSquareQuote,
  Phone,
  Sparkles,
  Star,
  Users,
  FileBadge2,
} from "lucide-react";

import { FadeIn } from "@/components/fade-in";
import { branches, labels, Locale, trustStats } from "@/lib/site-content";

export default async function LocalizedHome({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = labels[locale];
  const heroImage =
    "https://images.unsplash.com/photo-1526481280695-3c4699d5d2f1?auto=format&fit=crop&w=1200&q=80";
  const classroomImage =
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80";
  const opportunityImages = [
    {
      city: "Tokyo",
      image:
        "https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=1000&q=80",
    },
    {
      city: "Osaka",
      image:
        "https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=1000&q=80",
    },
    {
      city: "Nagoya",
      image:
        "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?auto=format&fit=crop&w=1000&q=80",
    },
    {
      city: "Saitama & Chiba",
      image:
        "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1000&q=80",
    },
  ];
  const whyChooseUs = [
    {
      icon: BadgeCheck,
      title: "Native Japanese Mentorship",
      desc: "Live sessions with native mentors to sharpen speaking, etiquette, and workplace fluency.",
    },
    {
      icon: GraduationCap,
      title: "Exam-Focused Training",
      desc: "Structured pathway for JLPT and JFT with mock drills, correction loops, and progress tracking.",
    },
    {
      icon: FileBadge2,
      title: "Visa & Compliance Support",
      desc: "Transparent documentation guidance for student, job, and specified skilled worker routes.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Career Readiness",
      desc: "Interview practice, communication coaching, and onboarding readiness for Japan-based roles.",
    },
  ];
  const courseCards = [
    {
      title: "JLPT N5 Foundation",
      duration: "4 Months",
      benefit: "Grammar, speaking confidence, and test strategy for first-time learners.",
      icon: BookOpenCheck,
    },
    {
      title: "JLPT N4 Accelerator",
      duration: "4 Months",
      benefit: "Fast-paced learning with mock assessments and workplace communication drills.",
      icon: Languages,
    },
    {
      title: "JLPT N3 Professional",
      duration: "4.5 Months",
      benefit: "Higher-level fluency and comprehension for academic and office environments.",
      icon: GraduationCap,
    },
    {
      title: "JFT A2 (SSW Track)",
      duration: "4 Months",
      benefit: "Targeted language training for specified skilled worker pathways.",
      icon: BriefcaseBusiness,
    },
  ];
  const services = [
    {
      title: "Student Visa Support",
      desc: "University and language school application workflow, document readiness, and interview prep.",
      icon: FileBadge2,
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Corporate Job Visa",
      desc: "Profile optimization, Japanese CV support, and employer matching for corporate opportunities.",
      icon: Building2,
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "SSW Pathway Programs",
      desc: "Sector-specific readiness for caregiver, agriculture, construction, and technical pathways.",
      icon: Handshake,
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Career Transition Coaching",
      desc: "From language to employment: interview confidence, culture, and settlement support.",
      icon: Users,
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1000&q=80",
    },
  ];
  const testimonials = [
    {
      name: "Nusrat Jahan",
      role: "JLPT N4 Student",
      quote:
        "The classes felt premium and focused. I improved speaking confidence and got visa guidance in one place.",
      avatar:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Sadman Rahman",
      role: "SSW Candidate",
      quote:
        "The mock sessions and interview drills were practical. I always knew what to do next in my Japan plan.",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Tanjina Akter",
      role: "Career Transition Student",
      quote:
        "It never felt like a generic coaching center. The mentorship and structure made it feel truly international.",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#061731] via-[#0B2D5C] to-[#123f7a] py-20 text-white md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(200,16,46,0.2),transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.12),transparent_35%)]" />
        <div className="container-main relative grid items-center gap-10 lg:grid-cols-2">
          <FadeIn>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white">
              <Sparkles className="h-4 w-4 text-[#F4B400]" />
              Premium Japanese Education & Career Pathway
            </p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-6xl">
              Transform Your Future with Japan-Ready Skills
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/85 md:text-lg">
              From language mastery to visa and career success, Mehul prepares ambitious Bangladeshi students for a
              confident global future in Japan.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/${locale}/branches#quick-contact`}
                className="inline-flex items-center gap-2 rounded-full bg-[#C8102E] px-6 py-3 font-semibold text-white transition hover:scale-[1.02] hover:bg-[#AB0E27]"
              >
                {t.enrollNow}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={`/${locale}/branches#quick-contact`}
                className="rounded-full border border-white/70 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20"
              >
                {t.consultation}
              </Link>
            </div>
            <div className="mt-8 grid max-w-lg grid-cols-3 gap-3">
              {trustStats.map((item) => (
                <div key={item.label} className="rounded-xl border border-white/15 bg-white/10 p-3 backdrop-blur">
                  <p className="text-xl font-bold">{item.value}</p>
                  <p className="mt-1 text-xs text-white/80">{item.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -left-6 -top-8 z-10 rounded-2xl border border-white/30 bg-white/10 p-4 backdrop-blur">
                <p className="text-sm font-semibold text-white">Japan Career Success Rate</p>
                <p className="mt-1 text-2xl font-bold">95%</p>
              </div>
              <div className="absolute -bottom-8 -right-4 z-10 rounded-2xl border border-white/20 bg-[#C8102E]/85 p-4 shadow-xl">
                <p className="text-sm">Trusted by families</p>
                <p className="text-2xl font-bold">5,000+</p>
              </div>
              <div className="relative overflow-hidden rounded-[28px] border border-white/20 shadow-2xl">
                <img src={heroImage} alt="Students prepared for Japan opportunities" className="h-[540px] w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061731]/85 via-[#0B2D5C]/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <Image src="/logo.png" alt="Mehul logo" width={44} height={44} className="rounded-md bg-white p-1" />
                    <div>
                      <p className="text-sm text-white/80">Mehul Japanese Language Education Center</p>
                      <p className="text-lg font-bold">Language - Visa - Job - Japan Life</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <FadeIn>
            <div className="mb-10 flex items-end justify-between gap-4">
              <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">Built on Trust and Outcomes</h2>
              <p className="max-w-lg text-sm text-[#0B2D5C]/80">
                A premium student journey with transparent support, measurable progress, and global standards.
              </p>
            </div>
          </FadeIn>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { icon: GraduationCap, ...trustStats[0] },
              { icon: Building2, ...trustStats[1] },
              { icon: Languages, ...trustStats[2] },
            ].map((item, index) => (
              <FadeIn key={item.label} delay={index * 0.08}>
                <div className="rounded-2xl border border-[#0B2D5C]/10 bg-[#F5F9FF] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <item.icon className="h-8 w-8 text-[#C8102E]" />
                  <p className="mt-5 text-4xl font-extrabold text-[#0B2D5C]">{item.value}</p>
                  <p className="mt-2 text-sm font-semibold text-[#0B2D5C]/75">{item.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F5F9FF]">
        <div className="container-main grid items-center gap-10 lg:grid-cols-2">
          <FadeIn>
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img src={classroomImage} alt="Japanese classroom with engaged students" className="h-full min-h-[450px] w-full object-cover" />
            </div>
          </FadeIn>
          <div>
            <FadeIn>
              <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">Why Students Choose Mehul</h2>
              <p className="mt-3 max-w-lg text-[#0B2D5C]/80">
                We combine language rigor, international professionalism, and a real pathway to education and careers
                in Japan.
              </p>
            </FadeIn>
            <div className="mt-8 space-y-4">
              {whyChooseUs.map((item, index) => (
                <FadeIn key={item.title} delay={index * 0.08}>
                  <div className="rounded-2xl border border-[#0B2D5C]/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                    <div className="flex items-start gap-4">
                      <div className="rounded-xl bg-[#F5F9FF] p-3">
                        <item.icon className="h-5 w-5 text-[#C8102E]" />
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-[#0B2D5C]">{item.title}</p>
                        <p className="mt-1 text-sm text-[#0B2D5C]/75">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <FadeIn>
            <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">Courses Designed for Outcomes</h2>
            <p className="mt-3 max-w-2xl text-[#0B2D5C]/80">
              Every course includes speaking training, exam strategies, and career-focused preparation.
            </p>
          </FadeIn>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {courseCards.map((course, index) => (
              <FadeIn key={course.title} delay={index * 0.08}>
                <div className="group h-full rounded-2xl border border-[#0B2D5C]/10 bg-[#F5F9FF] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex items-center justify-between">
                    <course.icon className="h-7 w-7 text-[#C8102E]" />
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#0B2D5C]">
                      {course.duration}
                    </span>
                  </div>
                  <p className="mt-4 text-lg font-bold text-[#0B2D5C]">{course.title}</p>
                  <p className="mt-2 text-sm text-[#0B2D5C]/75">{course.benefit}</p>
                  <Link
                    href={`/${locale}/courses`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#C8102E] transition group-hover:gap-3"
                  >
                    View details
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-[#F5F9FF] to-white">
        <div className="container-main">
          <FadeIn>
            <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">Premium Services for a Complete Journey</h2>
            <p className="mt-3 max-w-2xl text-[#0B2D5C]/80">
              Beyond classes, we deliver end-to-end support to help students confidently transition from Bangladesh to
              Japan.
            </p>
          </FadeIn>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <FadeIn key={service.title} delay={index * 0.08}>
                <div className="group relative overflow-hidden rounded-2xl shadow-lg">
                  <img src={service.image} alt={service.title} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#061731]/85 via-[#0B2D5C]/65 to-[#C8102E]/45" />
                  <div className="absolute inset-0 p-6 text-white">
                    <service.icon className="h-8 w-8 text-[#F4B400]" />
                    <h3 className="mt-4 text-xl font-bold">{service.title}</h3>
                    <p className="mt-2 text-sm text-white/85">{service.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <FadeIn>
            <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">Japan Opportunities Network</h2>
            <p className="mt-3 max-w-2xl text-[#0B2D5C]/80">
              Explore career and study pathways across major Japanese cities with structured support from Mehul.
            </p>
          </FadeIn>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {opportunityImages.map((city, index) => (
              <FadeIn key={city.city} delay={index * 0.08}>
                <div className="group relative overflow-hidden rounded-2xl shadow-md">
                  <img src={city.image} alt={city.city} className="h-60 w-full object-cover transition duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2D5C]/85 via-[#0B2D5C]/30 to-transparent" />
                  <p className="absolute bottom-4 left-4 text-lg font-bold text-white">{city.city}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F5F9FF]">
        <div className="container-main">
          <FadeIn>
            <div className="rounded-3xl bg-white p-8 shadow-lg md:p-10">
              <div className="grid items-center gap-8 md:grid-cols-[160px_1fr]">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
                  alt="Managing Director portrait"
                  className="h-40 w-40 rounded-2xl object-cover"
                />
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#F5F9FF] px-4 py-1 text-xs font-semibold text-[#0B2D5C]">
                    <MessageSquareQuote className="h-4 w-4 text-[#C8102E]" />
                    Director&apos;s Message
                  </div>
                  <p className="text-lg leading-relaxed text-[#0B2D5C]/85">
                    “Our commitment is simple: deliver world-class training, transparent counseling, and a disciplined
                    roadmap so every student can thrive in Japan with confidence and dignity.”
                  </p>
                  <p className="mt-4 font-semibold text-[#0B2D5C]">Monirul Islam, Managing Director</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <FadeIn>
            <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">Branch Network Across Bangladesh</h2>
          </FadeIn>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {branches.map((branch, index) => (
              <FadeIn key={branch.name} delay={index * 0.08}>
                <div className="rounded-2xl border border-[#0B2D5C]/10 bg-[#F5F9FF] p-6 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="rounded-xl bg-white p-3">
                      <MapPinned className="h-5 w-5 text-[#C8102E]" />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-[#0B2D5C]">{branch.name}</p>
                      <p className="mt-2 text-sm text-[#0B2D5C]/80">{branch.address}</p>
                      <p className="mt-2 text-sm font-medium text-[#0B2D5C]/80">{branch.message}</p>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href={`tel:${branch.phone}`}
                      className="inline-flex items-center gap-2 rounded-full bg-[#0B2D5C] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#133e78]"
                    >
                      <Phone className="h-4 w-4" />
                      {branch.phone}
                    </a>
                    <a
                      href={branch.map}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[#0B2D5C]/20 px-4 py-2 text-sm font-semibold text-[#0B2D5C] transition hover:bg-white"
                    >
                      <MapPinned className="h-4 w-4" />
                      View Map
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F5F9FF]">
        <div className="container-main">
          <FadeIn>
            <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">Student Success Stories</h2>
            <p className="mt-3 max-w-2xl text-[#0B2D5C]/80">
              Real voices from learners who transformed language skills into real opportunities.
            </p>
          </FadeIn>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <FadeIn key={item.name} delay={index * 0.08}>
                <div className="rounded-2xl border border-[#0B2D5C]/10 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <img src={item.avatar} alt={item.name} className="h-12 w-12 rounded-full object-cover" />
                    <div>
                      <p className="font-semibold text-[#0B2D5C]">{item.name}</p>
                      <p className="text-xs text-[#0B2D5C]/70">{item.role}</p>
                    </div>
                  </div>
                  <div className="mb-3 flex gap-1 text-[#F4B400]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={`${item.name}-${i}`} className="h-4 w-4 fill-[#F4B400]" />
                    ))}
                  </div>
                  <p className="text-sm text-[#0B2D5C]/80">{item.quote}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "Mehul Japanese Language Education Center",
            description: "Premium Japanese language, visa, and career support platform in Bangladesh.",
            areaServed: ["Bangladesh", "Japan"],
          }),
        }}
      />
    </>
  );
}
