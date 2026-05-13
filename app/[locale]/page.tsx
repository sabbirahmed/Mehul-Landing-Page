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
  FileBadge2,
} from "lucide-react";

import { FadeIn } from "@/components/fade-in";
import { HeroImageSlider } from "@/components/hero-image-slider";
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
  const classroomImage = "/images/features/stand-out.jpg";
  const opportunityImages = [
    {
      city: "Tokyo",
      image: "/images/cities/tokyo.jpg",
    },
    {
      city: "Osaka",
      image: "/images/cities/osaka.jpg",
    },
    {
      city: "Nagoya",
      image: "/images/cities/nagoya.jpg",
    },
    {
      city: "Saitama & Chiba",
      image: "/images/cities/saitama-chiba.png",
    },
    {
      city: "Hiroshima",
      image: "/images/cities/hiroshima.jpg",
    },
    {
      city: "Sendai",
      image: "/images/cities/sendai.jpg",
    },
    {
      city: "Yokohama",
      image: "/images/cities/yokohama.jpg",
    },
  ];
  const whyChooseUs = [
    {
      icon: BadgeCheck,
      title: "Authentic Native Mentorship",
      desc: "Master conversational fluency, cultural etiquette, and professional communication through live sessions with native Japanese experts.",
    },
    {
      icon: GraduationCap,
      title: "Targeted Exam Mastery",
      desc: "Ace your JLPT and JFT exams with our proven pathway. Benefit from comprehensive mock drills, personalized feedback loops, and real-time progress tracking.",
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
      duration: "6 Months",
      benefit: "Higher-level fluency and comprehension for academic and office environments.",
      icon: GraduationCap,
    },
    {
      title: "JFT A2 (SSW Track)",
      duration: "3 Months",
      benefit: "Targeted language training for specified skilled worker pathways.",
      icon: BriefcaseBusiness,
    },
  ];
  const services = [
    {
      title: "Student Visa & Language Programs",
      desc: "Start your educational journey in Japan! We help students get admission into excellent Japanese language schools. We will happily guide you through the entire process, from organizing your documents to preparing for your visa interview.",
      icon: GraduationCap,
      image:
        "/images/services/StudentVisaSupport.jpeg",
    },
    {
      title: "SSW (Specified Skilled Worker) Pathway",
      desc: "Ready to work in Japan? We prepare you for the SSW visa in demand fields like caregiving, agriculture, manufacturing, and construction. We provide the right language and skill training you need to confidently work and live in Japan.",
      icon: Handshake,
      image:
        "/images/services/SSWPathwayPrograms.jpeg",
    },
    {
      title: "TITP (Technical Intern Training Program)",
      desc: "Learn valuable skills while working! Our TITP support helps you join respected Japanese companies as a technical intern. It’s a wonderful opportunity to gain hands-on practical experience, earn money, and learn Japanese work culture directly.",
      icon: Building2,
      image:
        "/images/services/TechnicalInternTrainingProgram.jpeg",
    },
    {
      title: "International Job Services",
      desc: "Connecting great talent with great opportunities! We help highly skilled professionals and graduates from Bangladesh find corporate jobs in Japan. We will support you with Japanese-style CV writing, interview practice, and matching you with the right employer.",
      icon: BriefcaseBusiness,
      image:
        "/images/services/InternationalJobServices.jpeg",
    },
  ];
  const testimonials = [
    {
      name: "AMINUL ISLAM",
      role: "Student Visa",
      quote:
        "My dream of going to Japan became a reality entirely because of Mehul. Their dedicated language classes and precise exam strategies made my preparation easy, while their team took full responsibility for my entire processing journey. Today, I am happily and comfortably settled in Japan, all thanks to their genuine guidance and support.",
      avatar: "/images/students/AminulIslam.jpeg",
    },
    {
      name: "KAFAYT ULLAH",
      role: "Student Visa",
      quote:
        "Losing my parents left me completely shattered, and my dream of going to Japan felt impossible. During those darkest days, Mehul became my biggest strength. From providing accurate guidelines and hassle-free file processing to giving me the mental support of a family, they took care of everything. By the infinite mercy of Allah and their unwavering dedication, I am now successfully studying in Hokkaido, Japan. I will forever be grateful to them for holding my hand when I needed it the most.",
      avatar: "/images/students/KafaytUllah.jpeg",
    },
    {
      name: "RABYA AKTER",
      role: "SSW VISA",
      quote:
        "Completing my JFT A2 felt like a huge challenge, but Mehul's incredible support made it possible. I was naturally very nervous about facing a Japanese company interview, but the Mehul team patiently guided me and built my courage step by step. Thanks to their excellent interview coaching and highly efficient processing, I successfully secured my SSW Caregiver visa. Today, I am proudly working as a Caregiver in Japan, and I owe this life-changing success completely to Mehul.",
      avatar: "/images/students/RabeyaAkter.jpeg",
    },
    {
      name: "MD. MASHUD PARVEZ",
      role: "SSW VISA",
      quote:
        "Achieving my dream of working in Japan as an SSW Caregiver wouldn't have been possible without Mehul. From the very beginning to the final step, they provided me with all-out support in absolutely every aspect of the process. Their unwavering guidance made a complex journey feel incredibly easy. Today, I am proudly living and working in Japan, and I owe this milestone entirely to the Mehul team.",
      avatar: "/images/students/MashudParvez.jpeg",
    },
    {
      name: "Al-SEAM ONOY",
      role: "Student Visa",
      quote:
        "Navigating the complex university application process in Japan felt completely overwhelming until I found Mehul. Their instructors didn't just teach me the language to pass the JLPT; they gave me the real-world confidence to speak it daily. The processing team handled every single document with absolute perfection, ensuring a completely stress-free visa approval. Thanks to their transparent and continuous support, I am now proudly pursuing my higher education in Niigata and living my dream.",
      avatar: "/images/students/Al-SeamOnoy.jpeg",
    },
    {
      name: "MD. ASLAM PARVEZ",
      role: "Student Visa",
      quote:
        "I always wanted to build a career in Japan, but passing the SSW skill test and finding a reliable employer seemed like an impossible hurdle. Mehul stepped in and completely transformed my journey. Their specialized skill test training and rigorous mock interview sessions prepared me for every possible question from the Japanese delegates, allowing me to secure my job matching on the very first try! Now, I am happily working in Tokyo, and I am forever thankful to the Mehul team for turning my ambitions into reality.",
      avatar: "/images/students/AslamParvez.jpeg",
    },
    {
      name: "SHIHAB UDDIN",
      role: "Student Visa",
      quote:
        "The fear of making a mistake in my visa documents kept me awake at night, but the expert team at Mehul took all that worry away. They scrutinized every detail of my file and guided me step-by-step with absolute transparency and care. Their language classes were highly interactive, which made adjusting to my new life here so much easier. By the grace of the Almighty and Mehul's relentless effort, I am now successfully studying in Tokyo. I will always be grateful for their exceptional guidance.",
      avatar: "/images/students/ShihabUddin.jpeg",
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
              Accelerate Your Career with Japan-Ready Skills
            </p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-6xl">
              Your Bridge to Limitless Opportunities in Japan
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/85 md:text-lg">
              At Mehul, we transform aspirations into reality. Providing end-to-end support from language mastery to
              career placement for your ultimate success in Japan.
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
                <HeroImageSlider />
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
              <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">Driven by Trust. Defined by Results.</h2>
              <p className="max-w-lg text-sm text-[#0B2D5C]/80">
                A premium pathway to Japan with transparent support, measurable progress, and global standards.
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
            <div className="grid gap-6">
              <img src={classroomImage} alt="Mehul team and delegates" className="aspect-video w-full rounded-3xl object-cover shadow-xl" />
              <img src="/images/features/stand-out-2.jpg" alt="Students in classroom" className="aspect-video w-full rounded-3xl object-cover shadow-xl" />
            </div>
          </FadeIn>
          <div>
            <FadeIn>
              <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">Why We Stand Out</h2>
              <p className="mt-3 max-w-lg text-[#0B2D5C]/80">
                Blending world-class language instruction with corporate professionalism, we build a concrete pathway
                for your global education and career in Japan.
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
            <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">Designed for Real-World Outcomes</h2>
            <p className="mt-3 max-w-2xl text-[#0B2D5C]/80">
              From conversational fluency to targeted exam strategies and career readiness, our programs are built to
              ensure your ultimate success in Japan.
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
            <p className="mt-3 text-[#0B2D5C]/80">
              Welcome to Mehul Japanese Language Education Center!
              <br />
              Your trusted partner for a successful journey from Bangladesh to Japan. We provide friendly, step-by-step support for students, interns, and professionals to achieve their dreams in Japan.
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
              <div className="grid gap-8 md:grid-cols-[320px_1fr]">
                <img
                  src="/images/director/monirul-islam.jpeg"
                  alt="Managing Director portrait"
                  className="h-72 w-full rounded-2xl object-cover md:h-full"
                />
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#F5F9FF] px-4 py-1 text-xs font-semibold text-[#0B2D5C]">
                    <MessageSquareQuote className="h-4 w-4 text-[#C8102E]" />
                    Director&apos;s Message
                  </div>
                  <h3 className="text-2xl font-bold text-[#0B2D5C]">Own Experienced In Japan</h3>
                  <p className="mt-3 text-base leading-relaxed text-[#0B2D5C]/85">
                    Having lived, studied, and worked in Japan, I know exactly what it takes to build a successful
                    future there. My personal commitment at Mehul is to provide you with authentic language training,
                    100% transparent guidance, and a practical roadmap. Whether you are aiming for higher education or
                    a professional career, we are here to ensure you step into Japan with complete confidence and
                    dignity.
                  </p>
                  <p className="mt-3 font-semibold text-[#0B2D5C]">- Monirul Islam, Managing Director</p>

                  <div className="mt-6 rounded-2xl border border-[#0B2D5C]/10 bg-[#F5F9FF] p-5">
                    <h4 className="text-lg font-bold text-[#0B2D5C]">Visionary Focused:</h4>
                    <p className="mt-2 text-sm leading-relaxed text-[#0B2D5C]/85 md:text-base">
                      At Mehul, my vision is simple: we don&apos;t just teach a language; we prepare you for a
                      life-changing journey. We are committed to delivering world-class training, transparent
                      counseling, and a clear path to your success. We are here to equip you with the right skills so
                      you can thrive in Japan&apos;s competitive landscape with absolute confidence.
                    </p>
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
            <h2 className="text-3xl font-bold text-[#0B2D5C] md:text-4xl">Success Stories</h2>
            <p className="mt-3 max-w-2xl text-[#0B2D5C]/80">
              Real voices from learners who transformed language skills into real opportunities.
            </p>
          </FadeIn>
          <div className="mt-8 flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
              {[...testimonials, ...testimonials].map((item, index) => (
                <div key={`${item.name}-${index}`} className="w-[380px] shrink-0 px-3">
                  <div className="h-full rounded-2xl border border-[#0B2D5C]/10 bg-white p-6 shadow-sm transition hover:shadow-md">
                    <div className="mb-4 flex items-center gap-3">
                      <img src={item.avatar} alt={item.name} className="h-12 w-12 rounded-full object-cover" />
                      <div>
                        <p className="font-semibold text-[#0B2D5C]">{item.name}</p>
                        <p className="text-xs text-[#0B2D5C]/70">{item.role}</p>
                      </div>
                    </div>
                    <div className="mb-3 flex gap-1 text-[#F4B400]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={`${item.name}-${index}-${i}`} className="h-4 w-4 fill-[#F4B400]" />
                      ))}
                    </div>
                    <p className="text-sm leading-relaxed text-[#0B2D5C]/80">{item.quote}</p>
                  </div>
                </div>
              ))}
            </div>
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
