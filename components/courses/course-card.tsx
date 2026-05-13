import Link from "next/link";
import { ArrowRight, BookOpenCheck, BriefcaseBusiness, Clock3, Headphones, Laptop, MessageSquareText, NotebookText, Sparkles } from "lucide-react";
import type { ComponentType } from "react";

import { FadeIn } from "@/components/fade-in";
import type { Locale } from "@/lib/site-content";

type CourseLevel = "Beginner" | "Intermediate" | "Upper-Intermediate" | "Fast-Track / SSW Focused";

export type Course = {
  title: string;
  level: CourseLevel;
  description: string;
  duration: string;
  hours: string;
  classes: string;
  focus: string[];
  curriculum: string[];
  outcomes: string[];
  cultureAndManners?: string;
  interviewPrep?: string;
};

const levelStyles: Record<CourseLevel, string> = {
  Beginner: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Intermediate: "bg-sky-50 text-sky-700 border-sky-200",
  "Upper-Intermediate": "bg-violet-50 text-violet-700 border-violet-200",
  "Fast-Track / SSW Focused": "bg-amber-50 text-amber-700 border-amber-200",
};

const focusIcons: Record<string, ComponentType<{ className?: string }>> = {
  Speaking: MessageSquareText,
  "Daily Speaking": MessageSquareText,
  Listening: Headphones,
  "Work Listening": Headphones,
  Grammar: NotebookText,
  Kanji: BookOpenCheck,
  "Business Manner": BriefcaseBusiness,
  "CBT Exam Practice": Laptop,
};

export function CourseCard({
  course,
  locale,
  index,
}: {
  course: Course;
  locale: Locale;
  index: number;
}) {
  return (
    <FadeIn delay={index * 0.06}>
      <article className="group rounded-3xl border border-[#0B2D5C]/10 bg-white p-6 shadow-sm transition hover:shadow-xl md:p-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
          
          {/* Left Side: Core Info */}
          <div className="flex-1">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-3xl font-extrabold text-[#0B2D5C]">{course.title}</h3>
              <span className={`rounded-full border px-4 py-1.5 text-xs font-bold ${levelStyles[course.level]}`}>{course.level}</span>
            </div>
            <p className="mt-4 text-base leading-relaxed text-[#0B2D5C]/80">{course.description}</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-[#F5F9FF] p-4">
                <p className="text-xs text-[#0B2D5C]/65">Duration</p>
                <p className="mt-1 font-bold text-[#0B2D5C]">{course.duration}</p>
              </div>
              <div className="rounded-xl bg-[#F5F9FF] p-4">
                <p className="text-xs text-[#0B2D5C]/65">Hours</p>
                <p className="mt-1 font-bold text-[#0B2D5C]">{course.hours}</p>
              </div>
              <div className="rounded-xl bg-[#F5F9FF] p-4">
                <p className="text-xs text-[#0B2D5C]/65">Classes</p>
                <p className="mt-1 font-bold text-[#0B2D5C]">{course.classes}</p>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#0B2D5C]/60">Focus Areas</p>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {course.focus.map((item) => {
                  const Icon = focusIcons[item] ?? Sparkles;
                  return (
                    <span key={item} className="inline-flex items-center gap-1.5 rounded-full border border-[#0B2D5C]/15 px-3 py-1.5 text-xs font-bold text-[#0B2D5C]">
                      <Icon className="h-4 w-4 text-[#C8102E]" />
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/${locale}/branches#quick-contact`}
                className="inline-flex items-center gap-2 rounded-full bg-[#C8102E] px-6 py-3 font-semibold text-white transition hover:scale-[1.02] hover:bg-[#AB0E27]"
              >
                Enroll Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right Side: Details Box */}
          <div className="shrink-0 rounded-2xl border border-[#0B2D5C]/10 bg-[#F5F9FF] p-6 sm:p-8 lg:w-[500px] xl:w-[600px]">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#0B2D5C]/60">Curriculum Breakdown</p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#0B2D5C]/80">
                  {course.curriculum.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-0.5 text-[#C8102E]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {course.cultureAndManners && (
                  <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#0B2D5C]/60">Japanese Culture & Manners</p>
                    <p className="mt-2 text-sm leading-relaxed text-[#0B2D5C]/80">{course.cultureAndManners}</p>
                  </div>
                )}
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#0B2D5C]/60">Learning Outcome</p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#0B2D5C]/80">
                  {course.outcomes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-0.5 text-emerald-500">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {course.interviewPrep && (
                  <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#0B2D5C]/60">Interview Prep</p>
                    <p className="mt-2 text-sm leading-relaxed text-[#0B2D5C]/80">{course.interviewPrep}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </article>
    </FadeIn>
  );
}
