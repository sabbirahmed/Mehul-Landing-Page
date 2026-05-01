import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, BookOpenCheck, BriefcaseBusiness, Clock3, GraduationCap, Languages, Mic2 } from "lucide-react";

import { FadeIn } from "@/components/fade-in";
import { CourseCard, type Course } from "@/components/courses/course-card";
import { Locale } from "@/lib/site-content";

const courses: Course[] = [
  {
    title: "JLPT N5",
    level: "Beginner",
    description: "Start your Japanese foundation with practical speaking and structured exam preparation.",
    duration: "4 Months",
    hours: "160 Hours",
    classes: "6 Days/Week",
    focus: ["Speaking", "Listening", "Grammar", "Kanji"],
    curriculum: [
      "Hiragana and Katakana mastery",
      "Core grammar and daily conversation",
      "Basic Kanji and vocabulary building",
      "Mock-test routine with speaking drills",
    ],
    outcomes: [
      "Pass N5 with confidence",
      "Handle daily communication in Japanese",
      "Build base for N4 progression",
    ],
  },
  {
    title: "JLPT N4",
    level: "Intermediate",
    description: "Develop stronger communication and comprehension for study and early career environments.",
    duration: "4 Months",
    hours: "160 Hours",
    classes: "6 Days/Week",
    focus: ["Speaking", "Listening", "Grammar", "Kanji"],
    curriculum: [
      "Intermediate grammar and sentence control",
      "Scenario-based speaking activities",
      "Expanded Kanji and reading practice",
      "Weekly mock tests with feedback",
    ],
    outcomes: [
      "Higher communication fluency",
      "Read and understand practical texts",
      "Prepare smoothly for N3 level",
    ],
  },
  {
    title: "JLPT N3",
    level: "Advanced",
    description: "Advanced language and business-ready communication for university and corporate goals.",
    duration: "4 Months",
    hours: "160 Hours",
    classes: "6 Days/Week",
    focus: ["Speaking", "Listening", "Grammar", "Kanji"],
    curriculum: [
      "Advanced grammar and long-form reading",
      "Fast listening comprehension training",
      "Professional communication and etiquette",
      "High-intensity mock exam system",
    ],
    outcomes: [
      "N3-level confidence for serious pathways",
      "Professional speaking readiness",
      "Stronger university/career eligibility",
    ],
  },
  {
    title: "JFT-Basic A2 (SSW Track)",
    level: "Career Track",
    description: "Career-focused Japanese for SSW candidates with workplace communication and readiness support.",
    duration: "4 Months",
    hours: "160 Hours",
    classes: "6 Days/Week",
    focus: ["Speaking", "Listening", "Grammar", "Kanji"],
    curriculum: [
      "Irodori-based practical communication",
      "Job scenario speaking and listening drills",
      "Industry-context vocabulary training",
      "Structured test and interview preparation",
    ],
    outcomes: [
      "A2 communication confidence",
      "SSW pathway readiness",
      "Clear bridge to visa/job process",
    ],
  },
];

export default async function CoursesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return (
    <div className="bg-[#F5F9FF]">
      <section className="section-padding bg-white">
        <div className="container-main grid items-center gap-10 lg:grid-cols-2">
          <FadeIn>
            <h1 className="text-4xl font-extrabold leading-tight text-[#0B2D5C] md:text-5xl">Choose Your Path to Japan</h1>
            <p className="mt-5 max-w-xl text-lg text-[#0B2D5C]/80">
              From beginner to professional - our structured courses guide you step-by-step toward success in Japan.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/${locale}/branches#quick-contact`}
                className="inline-flex items-center gap-2 rounded-full bg-[#C8102E] px-6 py-3 font-semibold text-white transition hover:scale-[1.02] hover:bg-[#AB0E27]"
              >
                Enroll Now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={`/${locale}/branches#quick-contact`}
                className="rounded-full border border-[#0B2D5C]/20 px-6 py-3 font-semibold text-[#0B2D5C] transition hover:bg-[#F5F9FF]"
              >
                Get Free Consultation
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="overflow-hidden rounded-[28px] shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1300&q=85"
                alt="Students studying in classroom"
                width={1300}
                height={900}
                className="h-[420px] w-full object-cover"
                unoptimized
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <FadeIn>
            <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">Learning Path</h2>
          </FadeIn>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              { icon: BookOpenCheck, title: "N5", desc: "Beginner foundation and practical basics." },
              { icon: Languages, title: "N4", desc: "Intermediate communication and confidence." },
              { icon: GraduationCap, title: "N3", desc: "Advanced language for study and work." },
              { icon: BriefcaseBusiness, title: "Career", desc: "Job / University / Visa outcomes." },
            ].map((step, index) => (
              <FadeIn key={step.title} delay={index * 0.06}>
                <div className="relative rounded-2xl border border-[#0B2D5C]/10 bg-white p-5 shadow-sm">
                  <step.icon className="h-7 w-7 text-[#C8102E]" />
                  <p className="mt-3 text-lg font-bold text-[#0B2D5C]">{step.title}</p>
                  <p className="mt-1 text-sm text-[#0B2D5C]/75">{step.desc}</p>
                  {index < 3 && <ArrowRight className="absolute -right-2 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-[#0B2D5C]/30 md:block" />}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <FadeIn>
            <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">Course Tracks</h2>
            <p className="mt-3 max-w-2xl text-[#0B2D5C]/80">Pick your level and move forward with a clear, structured learning system.</p>
          </FadeIn>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {courses.map((course, index) => (
              <CourseCard key={course.title} course={course} locale={locale} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <FadeIn>
            <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">Academic System</h2>
          </FadeIn>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Clock3, value: "4 Months", label: "Duration" },
              { icon: BookOpenCheck, value: "160 Hours", label: "Training" },
              { icon: Mic2, value: "6 Days/Week", label: "Classes" },
              { icon: BadgeCheck, value: "50+ Mock Tests", label: "Assessment" },
            ].map((item, index) => (
              <FadeIn key={item.value} delay={index * 0.05}>
                <div className="rounded-2xl border border-[#0B2D5C]/10 bg-white p-6 text-center shadow-sm">
                  <item.icon className="mx-auto h-8 w-8 text-[#C8102E]" />
                  <p className="mt-4 text-2xl font-extrabold text-[#0B2D5C]">{item.value}</p>
                  <p className="mt-1 text-sm text-[#0B2D5C]/75">{item.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <FadeIn>
            <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">Why Our Courses Work</h2>
          </FadeIn>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Native Japanese Sessions", icon: Languages },
              { title: "Real-Life Communication Focus", icon: Mic2 },
              { title: "Structured Mock Test System", icon: BadgeCheck },
              { title: "Cultural & Etiquette Training", icon: GraduationCap },
            ].map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.05}>
                <div className="rounded-2xl border border-[#0B2D5C]/10 bg-[#F5F9FF] p-5 transition hover:-translate-y-1 hover:shadow-lg">
                  <item.icon className="h-7 w-7 text-[#C8102E]" />
                  <p className="mt-3 font-semibold text-[#0B2D5C]">{item.title}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <FadeIn>
            <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">Career Outcomes</h2>
          </FadeIn>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              { emoji: "🎓", title: "Study in Japan", text: "Academic pathways with language readiness and guidance." },
              { emoji: "💼", title: "Get Job in Japan", text: "Professional communication and interview preparation support." },
              { emoji: "✈️", title: "Visa Processing Support", text: "Clear process support from preparation to submission." },
            ].map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.06}>
                <div className="rounded-2xl border border-[#0B2D5C]/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <p className="text-3xl">{item.emoji}</p>
                  <p className="mt-3 text-xl font-bold text-[#0B2D5C]">{item.title}</p>
                  <p className="mt-2 text-sm text-[#0B2D5C]/75">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <FadeIn>
            <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">Visual Learning Environment</h2>
          </FadeIn>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
              "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
              "https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=1200&q=80",
              "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
            ].map((src, index) => (
              <FadeIn key={src} delay={index * 0.05}>
                <div className="group overflow-hidden rounded-2xl">
                  <Image
                    src={src}
                    alt="Course and classroom visual"
                    width={1200}
                    height={900}
                    className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
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
