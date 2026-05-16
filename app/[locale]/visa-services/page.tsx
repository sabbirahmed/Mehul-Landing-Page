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

const heroImage = "/images/services/visa-services-hero.jpg";

const processSteps = [
  { icon: Phone, title: "Initial Consultation (free)", desc: "Define your career goals and select the perfect study or work pathway tailored for you." },
  { icon: GraduationCap, title: "Course Enrollment", desc: "Join Mehul’s expert-led Japanese language programs to build a strong foundation." },
  { icon: Sparkles, title: "Comprehensive Training", desc: "Master the language, understand Japanese culture, and get fully prepared for essential skill exams." },
  { icon: FileText, title: "Document Preparation", desc: "Receive dedicated support to accurately organize and verify all your required paperwork." },
  { icon: ShieldCheck, title: "End-to-End Visa Processing", desc: "Enjoy a hassle-free experience with our guided visa application and tracking support." },
  { icon: Plane, title: "Placement & Departure", desc: "Secure your placement in top language schools or professional sectors, ensuring a smooth transition to Japan." },
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
              Comprehensive Guide to Studying and Working in Japan.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-[#0B2D5C]/80">
              Mehul provides complete, step-by-step support. We manage your language training, visa processing, and final job placement.
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
            <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">Four Proven Pathways to Japan</h2>
            <p className="mt-3 text-[#0B2D5C]/80">
              Select the route that best aligns with your goals. Mehul offers expert guidance at every stage of your journey.
            </p>
          </FadeIn>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                emoji: "🎓",
                icon: GraduationCap,
                title: "Student Visa & Language Programs",
                desc: "Start your educational journey in Japan! We help students get admission into excellent Japanese language schools. We will happily guide you through the entire process, from organizing your documents to preparing for your visa interview.",
                image: "/images/services/StudentVisaSupport.jpeg",
              },
              {
                emoji: "🤝",
                icon: Handshake,
                title: "SSW (Specified Skilled Worker)",
                desc: "Ready to work in Japan? We prepare you for the SSW visa in demand fields like caregiving, agriculture, manufacturing, and construction. We provide the right language and skill training you need to confidently work and live in Japan.",
                image: "/images/services/SSWPathwayPrograms.jpeg",
              },
              {
                emoji: "🛠️",
                icon: Wrench,
                title: "TITP (Technical Intern Training)",
                desc: "Learn valuable skills while working! Our TITP support helps you join respected Japanese companies as a technical intern. It’s a wonderful opportunity to gain hands-on practical experience, earn money, and learn Japanese work culture directly.",
                image: "/images/services/TechnicalInternTrainingProgram.jpeg",
              },
              {
                emoji: "💼",
                icon: Briefcase,
                title: "International Job Services",
                desc: "Connecting great talent with great opportunities! We help highly skilled professionals and graduates from Bangladesh find corporate jobs in Japan. We will support you with Japanese-style CV writing, interview practice, and matching you with the right employer.",
                image: "/images/services/InternationalJobServices.jpeg",
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
            <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">Student Visa & Language School Placement</h2>
            <p className="mt-4 text-[#0B2D5C]/80">
              Step-by-step support for language school admissions and visa documentation. We ensure a smooth transition to studying and building your career in Japan.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Personalized admission strategy & profile building",
                "Placement in top-tier (A-rank) Japanese language schools",
                "Comprehensive support for applications & interview preparation",
                "End-to-end student visa processing & documentation",
                "Expert Japanese language training & exam guidance",
                "Career counseling & future planning in Japan",
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
                className="h-[500px] w-full object-cover"
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
                src="/images/services/professional-job-visa.jpg"
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
              <ul className="mt-6 space-y-3 text-sm text-[#0B2D5C]/85">
                {[
                  {
                    title: "Job Matching & Placement",
                    desc: "Connect with top Japanese companies in high-demand sectors.",
                  },
                  {
                    title: "Resume & Profile Building",
                    desc: "Expert help in creating Japanese-standard resumes (Rirekisho & Shokumukeirekisho).",
                  },
                  {
                    title: "Language & Interview Prep",
                    desc: "Specialized Japanese language training and mock interview guidance.",
                  },
                  {
                    title: "End-to-End Visa Support",
                    desc: "Complete management of your work visa processing and legal documentation.",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-0.5 font-bold text-[#C8102E]">→</span>
                    <span>
                      <strong className="font-semibold text-[#0B2D5C]">{item.title}:</strong> {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <FadeIn>
            <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">SSW (Specified Skilled Worker) Visa Program</h2>
            <p className="mt-4 text-lg text-[#0B2D5C]/80">
              Build a secure career in Japan’s high-demand industries. Mehul provides specialized skill training, language exam preparation, and direct job placement support.
            </p>
            <ul className="mt-6 flex flex-wrap items-center gap-4 md:gap-8">
              {[
                "Targeted Skill Test Preparation",
                "Japanese Language Training",
                "Direct Job Placement",
                "Complete Visa Processing",
              ].map((service) => (
                <li key={service} className="flex items-center gap-2 text-sm font-semibold text-[#0B2D5C]">
                  <BadgeCheck className="h-5 w-5 shrink-0 text-[#C8102E]" />
                  {service}
                </li>
              ))}
            </ul>
          </FadeIn>

          <div className="mt-16 space-y-16 lg:space-y-24">
            {[
              {
                icon: HeartHandshake,
                title: "Caregiver (Nursing Care)",
                desc: "Build a rewarding career in Japan's healthcare sector. We provide specialized language training, skill test preparation, and direct job placement.",
                image: "/images/services/caregiver_ssw.png",
                services: [
                  { title: "Specialized Language Training", desc: "Expert Japanese language coaching focused on medical and caregiving vocabulary (Kaigo)." },
                  { title: "Skill Exam Preparation", desc: "Comprehensive guidance to pass the required Care Worker evaluation tests." },
                  { title: "Direct Job Placement", desc: "Guaranteed matching with reputable Japanese nursing homes and healthcare facilities." },
                  { title: "End-to-End Visa Support", desc: "Complete handling of your specified skilled worker (SSW) visa processing and documentation." },
                ]
              },
              {
                icon: Sprout,
                title: "Agriculture (Farming & Livestock)",
                desc: "Build a stable career in Japan’s thriving agricultural sector. We offer specialized language training, skill exam preparation, and direct job placement.",
                image: "/images/services/agriculture_ssw.png",
                services: [
                  { title: "Industry-Specific Language Training", desc: "Learn essential Japanese vocabulary for farming, crop management, and livestock care." },
                  { title: "SSW Skill Test Preparation", desc: "Complete guidance to pass the Agriculture Skills Assessment Test." },
                  { title: "Direct Job Placement", desc: "Secure placements in reputed agricultural farms and cooperatives across Japan." },
                  { title: "End-to-End Visa Processing", desc: "Hassle-free documentation and complete support for your SSW visa application." },
                ]
              },
              {
                icon: Wrench,
                title: "Construction (SSW Visa)",
                desc: "Build a solid career in Japan’s booming construction industry. We provide specialized language training, skill test preparation, and reliable job placement.",
                image: "/images/services/construction_ssw.png",
                services: [
                  { title: "Industry-Specific Language & Safety", desc: "Learn essential workplace Japanese, focusing on on-site communication and strict safety protocols." },
                  { title: "Skill Exam Preparation", desc: "Comprehensive guidance to pass the Construction Industry Skill Assessment Test." },
                  { title: "Direct Job Placement", desc: "Guaranteed matching with top-tier Japanese construction firms and contractors." },
                  { title: "End-to-End Visa Support", desc: "Complete handling of your SSW visa processing and legal documentation." },
                ]
              },
              {
                icon: Plane,
                title: "Aviation & Airport Services",
                desc: "Launch a dynamic career in Japan’s aviation sector. We provide specialized training for ground handling, customer service, and full visa support.",
                image: "/images/services/aviation_ssw.png",
                services: [
                  { title: "Customer Service Japanese", desc: "Master the polite, service-focused Japanese (Keigo) essential for airport operations and passenger handling." },
                  { title: "Aviation Skill Exam Prep", desc: "Comprehensive guidance to successfully pass the Aviation Industry SSW evaluation test." },
                  { title: "Direct Job Placement", desc: "Secure professional roles in ground handling, cargo, and passenger services at major Japanese airports." },
                  { title: "End-to-End Visa Processing", desc: "Complete management of your SSW visa application and legal documentation." },
                ]
              }
            ].map((item, index) => (
              <div key={item.title} className="grid items-center gap-10 lg:grid-cols-2">
                <FadeIn delay={0.05} className={index % 2 === 1 ? "order-2 lg:order-1" : "order-2"}>
                  <div className="overflow-hidden rounded-3xl shadow-xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={1200}
                      height={900}
                      className="h-[400px] w-full object-cover transition duration-700 hover:scale-105"
                      unoptimized
                    />
                  </div>
                </FadeIn>
                <FadeIn delay={0.1} className={index % 2 === 1 ? "order-1 lg:order-2" : "order-1"}>
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#0B2D5C]/10 bg-[#F5F9FF]">
                      <item.icon className="h-7 w-7 text-[#C8102E]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0B2D5C]">{item.title}</h3>
                  </div>
                  <p className="mt-4 text-[#0B2D5C]/80">{item.desc}</p>
                  <ul className="mt-6 space-y-4 rounded-2xl border border-[#0B2D5C]/10 bg-[#F5F9FF] p-6 shadow-sm">
                    {item.services.map((service, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-[#0B2D5C]/85">
                        <span className="mt-0.5 font-bold text-[#C8102E]">→</span>
                        <span>
                          <strong className="font-semibold text-[#0B2D5C]">{service.title}:</strong> {service.desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main grid items-center gap-10 lg:grid-cols-2">
          <FadeIn>
            <div className="order-2 overflow-hidden rounded-3xl shadow-lg lg:order-1">
              <Image
                src="/images/services/TechnicalInternTrainingProgram.jpeg"
                alt="Technical Intern Training Program"
                width={1200}
                height={900}
                className="h-[380px] w-full object-cover"
                unoptimized
              />
            </div>
          </FadeIn>
          <div className="order-1 lg:order-2">
            <FadeIn delay={0.08}>
              <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">TITP (Technical Intern Training Program)</h2>
              <p className="mt-4 text-[#0B2D5C]/80">
                Learn valuable skills while working! Our TITP support helps you join respected Japanese companies as a technical intern. It’s a wonderful opportunity to gain hands-on practical experience, earn money, and learn Japanese work culture directly.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Manufacturing", "Construction", "Agriculture", "Food Processing"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#0B2D5C]/15 bg-white px-3 py-1 text-xs font-semibold text-[#0B2D5C]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <ul className="mt-6 space-y-3 text-sm text-[#0B2D5C]/85">
                {[
                  {
                    title: "Practical Experience",
                    desc: "Gain hands-on experience in Japanese companies and learn advanced techniques.",
                  },
                  {
                    title: "Earn While You Learn",
                    desc: "Receive competitive compensation while participating in the technical intern training.",
                  },
                  {
                    title: "Cultural Exchange",
                    desc: "Immerse yourself in Japanese work culture, language, and daily life.",
                  },
                  {
                    title: "Future Opportunities",
                    desc: "Return home with valuable skills or transition to the SSW visa program for a longer stay.",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-0.5 font-bold text-[#C8102E]">→</span>
                    <span>
                      <strong className="font-semibold text-[#0B2D5C]">{item.title}:</strong> {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <FadeIn>
            <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">Your Journey to Japan: Our 6-Step Process</h2>
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

      <section className="section-padding">
        <div className="container-main">
          <FadeIn>
            <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">The Mehul Advantage: Why Choose Us</h2>
            <p className="mt-4 text-lg text-[#0B2D5C]/80">
              Discover how our expert language training, dedicated guidance, and proven success make your journey to Japan seamless.
            </p>
          </FadeIn>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: ShieldCheck, title: "Transparent Process", text: "Clear procedures, no hidden steps, and realistic timelines you can trust." },
              { icon: Globe2, title: "Extensive Japan Network", text: "Direct partnerships with top-tier language schools and verified employers across Japan." },
              { icon: TrendingUp, title: "Proven Success Rate", text: "Expert language training and documentation guidance designed to maximize your visa approval chances." },
              { icon: Handshake, title: "End-to-End Support", text: "Comprehensive assistance from your very first language class to your final placement in Japan." },
              { icon: GraduationCap, title: "Expert Instructors", text: "Learn from experienced professionals dedicated to building your linguistic fluency and career readiness." },
            ].map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.06}>
                <div className="h-full rounded-2xl border border-[#0B2D5C]/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md">
                  <item.icon className="h-8 w-8 text-[#C8102E]" />
                  <h3 className="mt-4 font-bold text-[#0B2D5C]">{item.title}</h3>
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
            <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">Trusted Results</h2>
          </FadeIn>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <FadeIn>
              <div className="rounded-2xl border border-[#0B2D5C]/10 bg-[#F5F9FF] p-8 text-center shadow-sm">
                <p className="text-4xl font-extrabold text-[#C8102E]">700+</p>
                <p className="mt-2 text-sm font-semibold text-[#0B2D5C]">Students served</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.06}>
              <div className="rounded-2xl border border-[#0B2D5C]/10 bg-[#F5F9FF] p-8 text-center shadow-sm">
                <p className="text-4xl font-extrabold text-[#0B2D5C]">4</p>
                <p className="mt-2 text-sm font-semibold text-[#0B2D5C]">Branches across Bangladesh</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.12}>
              <div className="rounded-2xl border border-[#0B2D5C]/10 bg-[#F5F9FF] p-8 text-center shadow-sm">
                <p className="text-4xl font-extrabold text-[#0B2D5C]">Premium</p>
                <p className="mt-2 text-sm font-semibold text-[#0B2D5C]">Japan pathway standards</p>
              </div>
            </FadeIn>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              {
                quote: "The visa and documentation guidance felt clear from day one, I always knew the next step.",
                who: "Student, Dhaka",
              },
              {
                quote: "Mehul connected language training with real Japan opportunities, not just classroom theory.",
                who: "Professional candidate",
              },
            ].map((t, i) => (
              <FadeIn key={t.who} delay={i * 0.08}>
                <blockquote className="rounded-2xl border border-[#0B2D5C]/10 bg-[#F5F9FF] p-6 shadow-sm">
                  <p className="text-sm leading-relaxed text-[#0B2D5C]/85">&ldquo;{t.quote}&rdquo;</p>
                  <p className="mt-3 text-xs font-semibold text-[#C8102E]">{t.who}</p>
                </blockquote>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <FadeIn>
            <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">Japan in Motion</h2>
          </FadeIn>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "/images/motion/japan_motion_1.jpeg",
              "/images/motion/japan_motion_2.png",
              "/images/motion/japan_motion_3.png",
              "/images/motion/japan_motion_4.png",
              "/images/motion/japan_motion_5.png",
              "/images/motion/japan_motion_6.png",
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
