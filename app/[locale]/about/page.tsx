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
  MessageSquareQuote,
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

  const heroImage = "/images/about/hero.jpg";

  return (
    <div className="bg-[#F5F9FF]">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-main grid items-center gap-10 lg:grid-cols-2">
          <FadeIn>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#0B2D5C]/15 bg-white px-4 py-2 text-xs font-semibold text-[#0B2D5C]">
              <Globe2 className="h-4 w-4 text-[#C8102E]" />
              About Us
            </p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-[#0B2D5C] md:text-5xl">
              Building Your Future Between Bangladesh and Japan
            </h1>
            <p className="mt-5 max-w-xl text-lg text-[#0B2D5C]/80">
              Welcome to Mehul Japanese Language Education Center! If you are dreaming of studying or building a career in Japan, you have come to the right place.
            </p>
            <p className="mt-4 max-w-xl text-lg text-[#0B2D5C]/80">
              We are more than just a language center we are your complete pathway to success in Japan from Bangladesh. Mehul is one of Bangladesh&apos;s most trusted institutions, combining premium Japanese language education, visa processing, and career guidance under one roof.
            </p>
            <Link
              href={`/${locale}/branches#quick-contact`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#C8102E] px-6 py-3 font-semibold text-white transition hover:scale-[1.02] hover:bg-[#AB0E27]"
            >
              Book Free Consultation
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
                className="h-[600px] w-full object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2D5C]/70 via-transparent to-transparent" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-[#F5F9FF]">
        <div className="container-main">
          <FadeIn>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">🎯 Our Mission & Vision</h2>
            </div>
          </FadeIn>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <FadeIn>
              <div className="h-full rounded-3xl border border-[#0B2D5C]/10 bg-[#F5F9FF] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <BadgeCheck className="h-10 w-10 text-[#C8102E]" />
                <h3 className="mt-5 text-2xl font-bold text-[#0B2D5C]">Our Mission</h3>
                <ul className="mt-5 space-y-4 text-lg text-[#0B2D5C]/80">
                  <li className="flex gap-3">
                    <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-[#C8102E]" />
                    <span>To make the journey to Japan smooth and accessible through practical, step-by-step guidance.</span>
                  </li>
                  <li className="flex gap-3">
                    <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-[#C8102E]" />
                    <span>To fully equip every student with not only language proficiency but also proper Japanese etiquette and discipline.</span>
                  </li>
                  <li className="flex gap-3">
                    <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-[#C8102E]" />
                    <span>To ensure ultimate success by providing 100% support at every stage of education and career preparation.</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="h-full rounded-3xl border border-[#0B2D5C]/10 bg-[#F5F9FF] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <ScrollText className="h-10 w-10 text-[#C8102E]" />
                <h3 className="mt-5 text-2xl font-bold text-[#0B2D5C]">Our Vision</h3>
                <ul className="mt-5 space-y-4 text-lg text-[#0B2D5C]/80">
                  <li className="flex gap-3">
                    <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-[#C8102E]" />
                    <span>To establish ourselves as the most trusted and reliable Japan pathway platform for education and employment in Bangladesh.</span>
                  </li>
                  <li className="flex gap-3">
                    <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-[#C8102E]" />
                    <span>To create a safe, dependable medium where students aiming for Japan can place their full trust.</span>
                  </li>
                  <li className="flex gap-3">
                    <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-[#C8102E]" />
                    <span>To empower the youth of Bangladesh to build a bright future and successful career in Japan hand-in-hand with Mehul.</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Leadership Messages */}
      <section className="section-padding">
        <div className="container-main">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">🗣️ Messages from Our Leadership</h2>
              <p className="mt-4 text-lg text-[#0B2D5C]/80">
                Here is the vision and philosophy that drives Mehul forward:
              </p>
            </div>
          </FadeIn>

          <div className="mt-12 space-y-8">
            {/* 1. Director's Message */}
            <FadeIn>
              <div className="rounded-[32px] border border-[#0B2D5C]/10 bg-white p-6 shadow-sm md:p-8">
                <div className="grid gap-8 md:grid-cols-[320px_1fr] items-stretch">
                  <div className="relative h-[400px] w-full overflow-hidden rounded-2xl bg-[#F5F9FF] md:h-auto">
                    <Image
                      src="/images/director/monirul-islam.jpeg"
                      alt="Monirul Islam"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="flex flex-col justify-center py-2">
                    <div className="mb-5 w-fit inline-flex items-center gap-2 rounded-full bg-[#F5F9FF] px-4 py-2 text-sm font-semibold text-[#0B2D5C]">
                      <MessageSquareQuote className="h-4 w-4 text-[#C8102E]" />
                      Director&apos;s Message
                    </div>
                    <h3 className="mb-4 text-2xl font-bold text-[#0B2D5C]">Own Experienced In Japan</h3>
                    <div className="mb-4 leading-relaxed text-[#0B2D5C]/80">
                      <p>Having lived, studied, and worked in Japan, I know exactly what it takes to build a successful future there. My personal commitment at Mehul is to provide you with authentic language training, 100% transparent guidance, and a practical roadmap. Whether you are aiming for higher education or a professional career, we are here to ensure you step into Japan with complete confidence and dignity.</p>
                    </div>
                    <p className="mb-8 font-bold text-[#0B2D5C]">- Monirul Islam, Managing Director</p>

                    <div className="rounded-2xl border border-[#0B2D5C]/10 bg-[#F5F9FF] p-6">
                      <h4 className="mb-2 font-bold text-[#0B2D5C]">Visionary Focused:</h4>
                      <p className="text-sm leading-relaxed text-[#0B2D5C]/80">
                        At Mehul, my vision is simple: we don&apos;t just teach a language; we prepare you for a life-changing journey. We are committed to delivering world-class training, transparent counseling, and a clear path to your success. We are here to equip you with the right skills so you can thrive in Japan&apos;s competitive landscape with absolute confidence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* 2. General Manager's Message */}
            <FadeIn delay={0.05}>
              <div className="rounded-[32px] border border-[#0B2D5C]/10 bg-white p-6 shadow-sm md:p-8">
                <div className="grid gap-8 md:grid-cols-[320px_1fr] items-stretch">
                  <div className="relative h-[400px] w-full overflow-hidden rounded-2xl bg-[#F5F9FF] md:h-auto">
                    <Image
                      src="/images/about/atiqul-islam.jpeg"
                      alt="Atiqul Islam"
                      fill
                      className="object-cover object-top"
                      unoptimized
                    />
                  </div>
                  <div className="flex flex-col justify-center py-2">
                    <div className="mb-5 w-fit inline-flex items-center gap-2 rounded-full bg-[#F5F9FF] px-4 py-2 text-sm font-semibold text-[#0B2D5C]">
                      <MessageSquareQuote className="h-4 w-4 text-[#C8102E]" />
                      General Manager&apos;s Message
                    </div>
                    <h3 className="mb-4 text-2xl font-bold text-[#0B2D5C]">Building a &quot;Family,&quot; Not a School</h3>
                    <div className="mb-4 space-y-4 leading-relaxed text-[#0B2D5C]/80">
                      <p>Assalamualaikum Everyone,</p>
                      <p>We aren&apos;t looking to build a typical &quot;school&quot; where information only flows one way and people are often compared by their grades or performance. Instead, we want to create a place that feels like a real family a community where we help each other through hard times.</p>
                    </div>
                    <p className="mb-8 font-bold text-[#0B2D5C]">- Atiqul Islam, General Manager Marketing</p>

                    <div className="rounded-2xl border border-[#0B2D5C]/10 bg-[#F5F9FF] p-6">
                      <h4 className="mb-2 font-bold text-[#0B2D5C]">Our Community Vision:</h4>
                      <p className="text-sm leading-relaxed text-[#0B2D5C]/80">
                        What we truly need isn&apos;t just a score; it&apos;s peace of mind. When you&apos;re stuck and don&apos;t know what to do, we don&apos;t want a &quot;teacher and student&quot; relationship. We want to sit down as equals and figure it out together. Life is full of difficult problems that are hard to solve alone. In those moments, this community becomes your &quot;family.&quot; Your struggles are our struggles. We aim to be a place where we can say, &quot;It&apos;s okay to fail&quot; and &quot;Let&apos;s try this next,&quot; moving forward together through warm, genuine connections.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* 3. Leadership Message */}
            <FadeIn delay={0.1}>
              <div className="rounded-[32px] border border-[#0B2D5C]/10 bg-white p-6 shadow-sm md:p-8">
                <div className="grid gap-8 md:grid-cols-[320px_1fr] items-stretch">
                  <div className="relative h-[400px] w-full overflow-hidden rounded-2xl bg-[#F5F9FF] md:h-auto">
                    <Image
                      src="/images/about/naimur-rahman.jpeg"
                      alt="Rahman Md Naimur"
                      fill
                      className="object-cover object-top"
                      unoptimized
                    />
                  </div>
                  <div className="flex flex-col justify-center py-2">
                    <div className="mb-5 w-fit inline-flex items-center gap-2 rounded-full bg-[#F5F9FF] px-4 py-2 text-sm font-semibold text-[#0B2D5C]">
                      <MessageSquareQuote className="h-4 w-4 text-[#C8102E]" />
                      Leadership Message
                    </div>
                    <h3 className="mb-4 text-2xl font-bold text-[#0B2D5C]">Student-Focused Vision</h3>
                    <div className="mb-4 leading-relaxed text-[#0B2D5C]/80">
                      <p>Having lived and worked in Japan for over 3 years, I understand the real challenges and opportunities students face while building their future abroad. My journey has allowed me to experience Japanese education, work culture, and daily life closely, helping me guide students with practical knowledge and honest support.</p>
                    </div>
                    <p className="mb-8 font-bold text-[#0B2D5C]">- Rahman Md Naimur</p>

                    <div className="rounded-2xl border border-[#0B2D5C]/10 bg-[#F5F9FF] p-6">
                      <h4 className="mb-2 font-bold text-[#0B2D5C]">Global Perspective:</h4>
                      <p className="text-sm leading-relaxed text-[#0B2D5C]/80">
                        I have also worked with and supported students from countries like China and Kyrgyzstan, which helped me develop a broader understanding of different cultures and student needs. My goal is not only to help students reach Japan, but also to help them adapt, grow, and succeed with confidence. From language learning to career guidance, I believe in providing transparent and genuine support every step of the way.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* 4. President's Message */}
            <FadeIn delay={0.15}>
              <div className="rounded-[32px] border border-[#0B2D5C]/10 bg-white p-6 shadow-sm md:p-8">
                <div className="grid gap-8 md:grid-cols-[320px_1fr] items-stretch">
                  <div className="relative h-[400px] w-full overflow-hidden rounded-2xl bg-[#F5F9FF] md:h-auto">
                    <Image
                      src="/images/about/yanezawa-habiburu.jpeg"
                      alt="Yonezawa Habibur"
                      fill
                      className="object-cover object-top"
                      unoptimized
                    />
                  </div>
                  <div className="flex flex-col justify-center py-2">
                    <div className="mb-5 w-fit inline-flex items-center gap-2 rounded-full bg-[#F5F9FF] px-4 py-2 text-sm font-semibold text-[#0B2D5C]">
                      <MessageSquareQuote className="h-4 w-4 text-[#C8102E]" />
                      President&apos;s Message
                    </div>
                    <h3 className="mb-4 text-2xl font-bold text-[#0B2D5C]">The Bridge Between Hearts</h3>
                    <div className="mb-4 space-y-4 leading-relaxed text-[#0B2D5C]/80">
                      <p>Good Day Everybody,</p>
                      <p>When we started this school, we had one simple belief: language is the bridge between hearts. Japanese is not just hiragana, katakana, and kanji. It is the spirit of omotenashi (hospitality), the discipline of kaizen (improvement), and the beauty of wabi-sabi. At Mehul, we don&apos;t just teach students to pass the JLPT. We prepare them to live, work, and dream in Japan.</p>
                    </div>
                    <p className="mb-8 font-bold text-[#0B2D5C]">- Yonezawa Habibur, President and Director</p>

                    <div className="rounded-2xl border border-[#0B2D5C]/10 bg-[#F5F9FF] p-6">
                      <h4 className="mb-3 font-bold text-[#0B2D5C]">3 Things to Remember:</h4>
                      <ul className="mb-4 space-y-2 text-sm leading-relaxed text-[#0B2D5C]/80 pl-4 list-disc marker:text-[#C8102E]">
                        <li><span className="font-bold text-[#C8102E]">Shoshin (初心):</span> Keep a beginner&apos;s mind. Stay curious.</li>
                        <li><span className="font-bold text-[#C8102E]">Gaman (我慢):</span> Be patient and persevere when life in Japan gets tough.</li>
                        <li><span className="font-bold text-[#C8102E]">Kansha (感謝):</span> Never forget gratitude to your parents, teachers, and to yourself for not giving up.</li>
                      </ul>
                      <p className="text-sm leading-relaxed text-[#0B2D5C]/80">
                        You are not just learning a language; you are preparing to become a global citizen. From Bangladesh to Japan, Mehul is the bridge. Let&apos;s achieve dreams together (一緒に夢を叶えましょう)!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Mehul Is Different */}
      <section className="section-padding bg-[#0B2D5C] text-white">
        <div className="container-main">
          <FadeIn>
            <div className="text-center">
              <h2 className="text-3xl font-bold md:text-4xl">✨ Why Mehul Is Different</h2>
              <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
                We are deeply committed to ensuring our students&apos; success through:
              </p>
            </div>
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <FadeIn>
              <div className="h-full rounded-2xl bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition">
                <Users className="h-10 w-10 text-[#C8102E] mb-6" />
                <h3 className="text-xl font-bold mb-3">Native & Experienced Instructors</h3>
                <p className="text-white/80 leading-relaxed">
                  Learn correct pronunciation and grammar from native Japanese instructors and a faculty with 10+ years of experience.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.05}>
              <div className="h-full rounded-2xl bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition">
                <BriefcaseBusiness className="h-10 w-10 text-[#C8102E] mb-6" />
                <h3 className="text-xl font-bold mb-3">Visa & Job Support</h3>
                <p className="text-white/80 leading-relaxed">
                  We don&apos;t just stop at teaching. We provide complete support from visa processing to job placement in Japan.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="h-full rounded-2xl bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition">
                <Building2 className="h-10 w-10 text-[#C8102E] mb-6" />
                <h3 className="text-xl font-bold mb-3">Manners Before Knowledge</h3>
                <p className="text-white/80 leading-relaxed">
                  We believe that to succeed in Japan, cultural understanding is as important as language. We train students in discipline, respect, and Japanese culture so they succeed academically, socially, and professionally.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Academic System */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">📚 Our Academic System</h2>
              <p className="mt-4 text-lg text-[#0B2D5C]/80 max-w-2xl mx-auto">
                Our structured JLPT N5 and N4 courses are designed to help even complete beginners master the language efficiently:
              </p>
            </div>
          </FadeIn>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Clock3, value: "4 Months", label: "Course Duration" },
              { icon: BookOpenCheck, value: "160 Hours", label: "Structured Learning" },
              { icon: Users, value: "6 Days/Week", label: "Disciplined Routine" },
              { icon: BadgeCheck, value: "50+ Mock Tests", label: "Exam Preparation" },
            ].map((item, index) => (
              <FadeIn key={item.value} delay={index * 0.05}>
                <div className="h-full rounded-2xl border border-[#0B2D5C]/10 bg-[#F5F9FF] p-8 text-center shadow-sm hover:shadow-md transition hover:-translate-y-1">
                  <item.icon className="mx-auto h-10 w-10 text-[#C8102E]" />
                  <p className="mt-6 text-2xl font-extrabold text-[#0B2D5C]">{item.value}</p>
                  <p className="mt-2 font-medium text-[#0B2D5C]/75">{item.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <div className="mt-20 text-center rounded-3xl bg-[#F5F9FF] p-10 border border-[#0B2D5C]/10 shadow-sm">
              <h3 className="text-3xl font-bold text-[#0B2D5C] mb-4">Choose Your Path to Japan!</h3>
              <p className="text-lg text-[#0B2D5C]/80 mb-8 max-w-2xl mx-auto">
                From beginner to professional our structured courses guide you step-by-step toward success in Japan. Contact us today and book your Free Consultation to start your journey!
              </p>
              <Link
                href={`/${locale}/branches#quick-contact`}
                className="inline-flex items-center gap-2 rounded-full bg-[#C8102E] px-8 py-4 text-lg font-semibold text-white transition hover:scale-[1.02] hover:bg-[#AB0E27] shadow-lg"
              >
                Book Free Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
