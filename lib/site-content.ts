export const locales = ["en", "bn", "ja"] as const;
export type Locale = (typeof locales)[number];

export type Branch = {
  id: string;
  name: string;
  address: string;
  phone: string;
  map: string;
  /** Query string for Google Maps embed (no API key) */
  mapEmbedQuery: string;
  message: string;
  highlights: string[];
  /** Quote from branch director (optional) */
  directorQuote?: string;
};

export const labels = {
  en: {
    brand: "Mehul Japanese Language Education Center",
    nav: {
      home: "Home",
      about: "About",
      courses: "Courses",
      visa: "Visa & Services",
      branches: "Branches",
      contact: "Contact",
      studentPortal: "Student Portal",
    },
    heroTitle: "Your Dream of Going to Japan is Now a Reality",
    heroSub:
      "Language, visa, job, and life-in-Japan preparation in one trusted platform.",
    enrollNow: "Enroll Now",
    consultation: "Free Consultation",
    finalCtaEyebrow: "Your Japan Journey Starts Here",
    finalCta: "Start Your Journey to Japan Today",
    finalCtaSub:
      "Build language confidence, secure your pathway, and move forward with trusted experts by your side.",
    footerIntro:
      "One trusted partner for language, visas, and careers in Japan — structured programs and clear guidance from enrollment to placement.",
    footerServices: [
      "JLPT N5–N3 & JFT Basic A2 programs",
      "Student, work & SSW visa support",
      "Admission, documentation & interview prep",
      "4 branches across Bangladesh — visit or call anytime",
    ],
  },
  bn: {
    brand: "মেহুল জাপানিজ ল্যাঙ্গুয়েজ এডুকেশন সেন্টার",
    nav: {
      home: "হোম",
      about: "আমাদের সম্পর্কে",
      courses: "কোর্সসমূহ",
      visa: "ভিসা ও সার্ভিস",
      branches: "শাখাসমূহ",
      contact: "যোগাযোগ",
      studentPortal: "স্টুডেন্ট পোর্টাল",
    },
    heroTitle: "জাপানে যাওয়ার স্বপ্ন এখন বাস্তব",
    heroSub:
      "এক প্ল্যাটফর্মে ভাষা শেখা, ভিসা সহায়তা, চাকরি ও জাপান জীবন প্রস্তুতি।",
    enrollNow: "এনরোল করুন",
    consultation: "ফ্রি কনসালটেশন",
    finalCtaEyebrow: "আপনার জাপান যাত্রা শুরু হোক এখান থেকে",
    finalCta: "আজই জাপান যাত্রা শুরু করুন",
    finalCtaSub:
      "ভাষায় আত্মবিশ্বাস গড়ুন, আপনার পথ নিরাপদ করুন, এবং বিশ্বস্ত বিশেষজ্ঞদের সঙ্গে এগিয়ে যান।",
    footerIntro:
      "জাপানে ভাষা, ভিসা ও ক্যারিয়ার — একই নির্ভরযোগ্য সহায়তায় সুশৃঙ্খল কোর্স ও স্বচ্ছ গাইডলাইন।",
    footerServices: [
      "JLPT N5–N3 ও JFT Basic A2 কোর্স",
      "স্টুডেন্ট, জব ও SSW ভিসা সহায়তা",
      "ভর্তি, কাগজপত্র ও ইন্টারভিউ প্রস্তুতি",
      "বাংলাদেশে ৪টি শাখা — যেকোনো সময় যোগাযোগ",
    ],
  },
  ja: {
    brand: "メフル日本語教育センター",
    nav: {
      home: "ホーム",
      about: "私たちについて",
      courses: "コース",
      visa: "ビザ・サービス",
      branches: "支店",
      contact: "お問い合わせ",
      studentPortal: "学生ポータル",
    },
    heroTitle: "日本へ行く夢を、現実に。",
    heroSub:
      "語学学習からビザ、就職、そして日本での生活準備までを一気通貫でサポート。",
    enrollNow: "今すぐ申し込む",
    consultation: "無料相談",
    finalCtaEyebrow: "日本への一歩は、ここから",
    finalCta: "日本への挑戦を今すぐ始めましょう",
    finalCtaSub:
      "語学力を高め、進路を固め、信頼できる専門家とともに次のステップへ進みましょう。",
    footerIntro:
      "語学からビザ、就職まで一貫サポート。手続きと学習を分かりやすく、安心して日本への一歩を踏み出せます。",
    footerServices: [
      "JLPT N5～N3・JFT基礎A2など体系的カリキュラム",
      "留学・就労・特定技能などビザサポート",
      "出願書類・面接などの準備支援",
      "バングラデシュ国内4拠点で相談可能",
    ],
  },
} as const;

/** Primary line for CTAs (Dhaka head office) */
export const primaryBranchPhone = "01804-667050";
export const primaryWhatsAppE164 = "8801804667050";

export const branches: Branch[] = [
  {
    id: "dhaka",
    name: "Dhaka (Head Office)",
    address:
      "Edifice Centre (4th Floor), 1281 Begum Rokeya Sarani, East Monipur, Mirpur-10, Dhaka-1216 (Above Union Bank, Metro Pillar 267).",
    phone: "01804-667050",
    map: "https://maps.google.com/?q=Mirpur+10+Dhaka",
    mapEmbedQuery: "Edifice Centre Mirpur 10 Dhaka Begum Rokeya Sarani",
    message:
      "Our head office runs premium classes, transparent counseling, and direct Japan pathway guidance.",
    highlights: [
      "Main headquarters",
      "Direct coordination with Japan partners",
      "Advanced training facilities",
    ],
  },
  {
    id: "rajshahi",
    name: "Rajshahi Branch",
    address: "94/1 (2nd Floor), Talaimari, Rajshahi-6204.",
    phone: "01879-062324",
    map: "https://maps.google.com/?q=Talaimari+Rajshahi",
    mapEmbedQuery: "94/1 Talaimari Rajshahi Bangladesh",
    message:
      "Students get the same premium standards as Dhaka with native-instructor sessions and disciplined training.",
    highlights: [
      "Premium training environment",
      "Same standards as Dhaka HQ",
      "Ideal for Rajshahi region students",
    ],
    directorQuote:
      "We bring Dhaka-level premium Japanese education directly to Rajshahi. You don’t need to relocate — your journey to Japan starts right here.",
  },
  {
    id: "mymensingh",
    name: "Mymensingh Branch",
    address:
      "Tahmina Amin Vaban, 24 Shamcharan Roy Road, Baylen Sadar, Mymensingh, Bangladesh.",
    phone: "01617-149625",
    map: "https://maps.google.com/?q=Shamcharan+Roy+Road+Mymensingh",
    mapEmbedQuery: "24 Shamcharan Roy Road Mymensingh Bangladesh",
    message:
      "Focused on transparent guidance and local access to world-class Japanese language education.",
    highlights: [
      "Local access to international-level training",
      "Strong student support system",
    ],
    directorQuote:
      "Your dream of studying and working in Japan is now within reach. We provide complete support from language learning to final placement.",
  },
  {
    id: "jamalpur",
    name: "Jamalpur Branch",
    address:
      "South Kacharipara, New College Road, Jamalpur Sadar Upazila, Jamalpur-2000, Bangladesh.",
    phone: "01616-677289",
    map: "https://maps.google.com/?q=New+College+Road+Jamalpur",
    mapEmbedQuery: "New College Road Jamalpur Bangladesh",
    message:
      "Built for ambitious youth who need elite training without relocating to the capital.",
    highlights: [
      "Bringing global opportunity to local students",
      "Full academic + visa guidance",
    ],
    directorQuote:
      "Location should never limit your future. We are here to unlock your potential and guide you toward a successful career in Japan.",
  },
];

export const trustStats = [
  { label: "Students Served", value: "5,000+" },
  { label: "Branches", value: "4" },
  { label: "Native Instructor Sessions", value: "Every 3 Months" },
];
