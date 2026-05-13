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
    description: "Start your Japanese journey from zero! Build a strong foundation with practical speaking, easy grammar, and structured exam preparation.",
    duration: "4 Months",
    hours: "160 Hours",
    classes: "6 Days/Week",
    focus: ["Speaking", "Listening", "Grammar", "Kanji"],
    curriculum: [
      "Mastery of Hiragana and Katakana alphabets",
      "Core grammar rules and everyday greetings",
      "Basic Kanji and essential vocabulary building",
      "Over 90+ mock tests to ensure you are 100% exam-ready!",
    ],
    cultureAndManners: "Learn the essential daily rules and etiquette of Japan.",
    interviewPrep: "Regular interview practice for Japanese language school admissions and future jobs in Japan.",
    outcomes: [
      "Pass the JLPT N5 exam with confidence!",
      "Easily introduce yourself and handle basic daily communication.",
      "Build a super strong base to start the N4 level.",
    ],
  },
  {
    title: "JLPT N4",
    level: "Intermediate",
    description: "Take your Japanese to the next level! Develop stronger communication and understanding for study and early career environments in Japan.",
    duration: "4 Months",
    hours: "160 Hours",
    classes: "6 Days/Week",
    focus: ["Speaking", "Listening", "Grammar", "Kanji"],
    curriculum: [
      "Intermediate grammar and advanced sentence control",
      "Scenario-based speaking activities (shopping, travel, work)",
      "Expanded Kanji and reading practice for real life",
      "90+ intensive mock tests with personalized feedback.",
    ],
    cultureAndManners: "Deep dive into social rules and part-time job etiquette.",
    interviewPrep: "Advanced interview classes for Japanese school selections and job hunting in Japan.",
    outcomes: [
      "Speak much more smoothly in daily situations.",
      "Read and understand common Japanese texts and notices.",
      "Feel completely prepared for the N3 level and part-time jobs.",
    ],
  },
  {
    title: "JLPT N3",
    level: "Upper-Intermediate",
    description: "Get ready for professional life in Japan! Learn to understand natural Japanese conversations and read real-world materials with ease.",
    duration: "6 Months",
    hours: "240 Hours",
    classes: "5 Days/Week",
    focus: ["Speaking", "Listening", "Grammar", "Kanji", "Business Manner"],
    curriculum: [
      "Advanced grammar and complex sentence structures",
      "Introduction to polite professional Japanese (Keigo)",
      "Reading practice with news articles and essays",
      "90+ comprehensive mock exams for extensive problem-solving practice.",
    ],
    cultureAndManners: "Intensive training on Japanese corporate culture and business rules.",
    interviewPrep: "Expert coaching for corporate job interviews and higher education in Japan.",
    outcomes: [
      "Communicate effectively in Japanese workplaces.",
      "Understand natural-speed conversations with native speakers.",
      "Strongly boost your resume for corporate jobs in Japan.",
    ],
  },
  {
    title: "JFT-Basic A2",
    level: "Fast-Track / SSW Focused",
    description: "Your fast track to working in Japan! Specially designed to help you pass the JFT-Basic exam, which is required for the SSW (Specified Skilled Worker) visa.",
    duration: "3 Months",
    hours: "120 Hours",
    classes: "6 Days/Week",
    focus: ["Daily Speaking", "Work Listening", "CBT Exam Practice"],
    curriculum: [
      "Practical conversations for daily life and working in Japan",
      "Listening practice for real-life workplace situations",
      "Essential Kanji and vocabulary needed for SSW jobs",
      "90+ Computer-Based Test (CBT) mock exams to build your confidence.",
    ],
    cultureAndManners: "Essential workplace rules, safety guidelines, and employee manners in Japan.",
    interviewPrep: "Specific, targeted interview preparation to help you confidently face Japanese employers for direct job matching.",
    outcomes: [
      "Pass the JFT-Basic A2 exam comfortably.",
      "Be completely ready to talk with your new Japanese employer.",
      "Confidently handle everyday tasks like shopping, hospital visits, and traveling in Japan.",
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
            <h1 className="text-4xl font-extrabold leading-tight text-[#0B2D5C] md:text-5xl">Our Japanese Language Programs</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#0B2D5C]/80">
              Start your Japanese journey with confidence! We offer friendly, high-quality, step-by-step guidance for JLPT N5, N4, N3, and JFT-Basic A2, plus 90+ mock tests to make sure you are fully prepared.
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
                src="/images/courses/courses-hero.jpg"
                alt="Students studying in Mehul classroom"
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
            <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">Learning Paths</h2>
            <p className="mt-3 text-lg text-[#0B2D5C]/80">
              Choose the academic track for higher education, or the fast-track SSW visa program for immediate employment.
            </p>
          </FadeIn>
          <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:gap-12">

            {/* Academic Track */}
            <div className="flex-1">
              <FadeIn>
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0B2D5C]/10 text-sm font-bold text-[#0B2D5C]">1</span>
                  <h3 className="text-xl font-bold text-[#0B2D5C]">Academic Track (JLPT)</h3>
                </div>
              </FadeIn>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { icon: BookOpenCheck, title: "N5", desc: "Beginner foundation and practical basics." },
                  { icon: Languages, title: "N4", desc: "Intermediate communication and confidence." },
                  { icon: GraduationCap, title: "N3", desc: "Upper-Intermediate language for professional life." },
                ].map((step, index) => (
                  <FadeIn key={step.title} delay={index * 0.06}>
                    <div className="relative h-full rounded-2xl border border-[#0B2D5C]/10 bg-white p-5 shadow-sm">
                      <step.icon className="h-7 w-7 text-[#C8102E]" />
                      <p className="mt-3 text-lg font-bold text-[#0B2D5C]">{step.title}</p>
                      <p className="mt-1 text-sm text-[#0B2D5C]/75">{step.desc}</p>
                      {index < 2 && <ArrowRight className="absolute -right-4 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 text-[#0B2D5C]/30 sm:block" />}
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="hidden w-px bg-[#0B2D5C]/10 lg:block" />

            {/* SSW Career Track */}
            <div className="lg:w-[320px]">
              <FadeIn delay={0.2}>
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C8102E]/10 text-sm font-bold text-[#C8102E]">2</span>
                  <h3 className="text-xl font-bold text-[#C8102E]">SSW Career Track</h3>
                </div>
              </FadeIn>
              <FadeIn delay={0.26}>
                <div className="h-full rounded-2xl border-2 border-[#C8102E]/20 bg-[#FFF5F6] p-5 shadow-sm">
                  <BriefcaseBusiness className="h-7 w-7 text-[#C8102E]" />
                  <p className="mt-3 text-lg font-bold text-[#0B2D5C]">JFT-Basic A2</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#0B2D5C]/80">
                    A separate fast-track course specifically designed for the SSW job visa. This is a direct employment path - you cannot switch to other visas once enrolled in this track.
                  </p>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <FadeIn>
            <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">Course Tracks</h2>
            <p className="mt-3 max-w-2xl text-[#0B2D5C]/80">Pick your level and move forward with a clear, structured learning system.</p>
          </FadeIn>
          <div className="mt-10 flex flex-col gap-8">
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
              { emoji: "🎓", title: "Higher Education Pathways", text: "Comprehensive academic training designed to ensure linguistic fluency, university readiness, and seamless school admissions." },
              { emoji: "💼", title: "Corporate Career Placement", text: "Advanced business communication training coupled with expert interview coaching to secure corporate employment." },
              { emoji: "✈️", title: "Seamless Visa Processing", text: "End-to-end expert guidance, ensuring flawless documentation and a stress-free, fully compliant visa submission journey." },
            ].map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.06} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-[#0B2D5C]/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <p className="text-3xl">{item.emoji}</p>
                  <p className="mt-4 text-xl font-bold text-[#0B2D5C]">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#0B2D5C]/80">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F5F9FF]">
        <div className="container-main">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <FadeIn>
              <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">Seamless Learning, Unmatched Support</h2>
              <p className="mt-5 text-lg leading-relaxed text-[#0B2D5C]/80">
                We believe learning Japanese should fit seamlessly into your life. That is why we offer immersive physical classes, engaging live online sessions, and flexible pre-recorded courses. No matter how you choose to learn, you will receive the exact same high-quality education and dedicated attention from our expert instructors.
              </p>
              <p className="mt-4 leading-relaxed text-[#0B2D5C]/80">
                Beyond the classroom, our comprehensive digital platform provides everything you need to succeed. With over 90+ mock tests to build your confidence, instant digital resources, and dedicated group mentoring for visa and career guidance, we are fully committed to supporting you every step of the way to Japan.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="https://learn.mehul.com.bd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#C8102E] px-6 py-3 font-semibold text-white transition hover:scale-[1.02] hover:bg-[#AB0E27]"
                >
                  Visit Learning Platform
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="overflow-hidden rounded-[28px] shadow-xl border border-[#0B2D5C]/10">
                <Image
                  src="/images/courses/learning-platform.jpg"
                  alt="Students attending an online session in the classroom"
                  width={1200}
                  height={800}
                  className="h-[400px] w-full object-cover lg:h-[480px]"
                  unoptimized
                />
              </div>
            </FadeIn>
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
              "/images/courses/visual-1.jpg",
              "/images/courses/visual-2.jpg",
              "/images/courses/visual-3.jpg",
              "/images/courses/visual-4.jpg",
              "/images/courses/visual-5.jpg",
              "/images/courses/visual-6.jpeg",
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
