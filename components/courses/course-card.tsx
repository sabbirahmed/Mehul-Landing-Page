import Link from "next/link";
import { ArrowRight, BookOpenCheck, Clock3, Headphones, MessageSquareText, NotebookText, Sparkles } from "lucide-react";
import type { ComponentType } from "react";

import { FadeIn } from "@/components/fade-in";
import type { Locale } from "@/lib/site-content";

type CourseLevel = "Beginner" | "Intermediate" | "Advanced" | "Career Track";

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
};

const levelStyles: Record<CourseLevel, string> = {
  Beginner: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Intermediate: "bg-sky-50 text-sky-700 border-sky-200",
  Advanced: "bg-violet-50 text-violet-700 border-violet-200",
  "Career Track": "bg-amber-50 text-amber-700 border-amber-200",
};

const focusIcons: Record<string, ComponentType<{ className?: string }>> = {
  Speaking: MessageSquareText,
  Listening: Headphones,
  Grammar: NotebookText,
  Kanji: BookOpenCheck,
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
      <article className="group rounded-3xl border border-[#0B2D5C]/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl md:p-7">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-bold text-[#0B2D5C]">{course.title}</h3>
          <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${levelStyles[course.level]}`}>{course.level}</span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-[#0B2D5C]/80">{course.description}</p>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl bg-[#F5F9FF] p-3">
            <p className="text-xs text-[#0B2D5C]/65">Duration</p>
            <p className="mt-1 text-sm font-semibold text-[#0B2D5C]">{course.duration}</p>
          </div>
          <div className="rounded-xl bg-[#F5F9FF] p-3">
            <p className="text-xs text-[#0B2D5C]/65">Hours</p>
            <p className="mt-1 text-sm font-semibold text-[#0B2D5C]">{course.hours}</p>
          </div>
          <div className="rounded-xl bg-[#F5F9FF] p-3">
            <p className="text-xs text-[#0B2D5C]/65">Classes</p>
            <p className="mt-1 text-sm font-semibold text-[#0B2D5C]">{course.classes}</p>
          </div>
        </div>

        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#0B2D5C]/60">Focus Areas</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {course.focus.map((item) => {
              const Icon = focusIcons[item] ?? Sparkles;
              return (
                <span key={item} className="inline-flex items-center gap-1.5 rounded-full border border-[#0B2D5C]/15 px-3 py-1 text-xs font-medium text-[#0B2D5C]">
                  <Icon className="h-3.5 w-3.5 text-[#C8102E]" />
                  {item}
                </span>
              );
            })}
          </div>
        </div>

        <details className="mt-5 rounded-2xl border border-[#0B2D5C]/10 bg-[#F5F9FF] p-4">
          <summary className="cursor-pointer list-none text-sm font-semibold text-[#0B2D5C]">View Details</summary>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#0B2D5C]/60">Curriculum Breakdown</p>
              <ul className="mt-2 space-y-1.5 text-sm text-[#0B2D5C]/80">
                {course.curriculum.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#0B2D5C]/60">Learning Outcome</p>
              <ul className="mt-2 space-y-1.5 text-sm text-[#0B2D5C]/80">
                {course.outcomes.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </details>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`/${locale}/branches#quick-contact`}
            className="inline-flex items-center gap-2 rounded-full border border-[#0B2D5C]/20 px-5 py-2.5 text-sm font-semibold text-[#0B2D5C] transition hover:bg-[#F5F9FF]"
          >
            View Details
          </Link>
          <Link
            href={`/${locale}/branches#quick-contact`}
            className="inline-flex items-center gap-2 rounded-full bg-[#C8102E] px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-[#AB0E27]"
          >
            Enroll Now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </article>
    </FadeIn>
  );
}
