export type Testimonial = { name: string; role: string; flag: string; photo: string; video?: string; };

export const testimonials: Testimonial[] = [
  { name: "أحمد. ع", role: "عامل صناعي", flag: "/flags/ma.svg", photo: "/images/testimonial-1.jpg" },
  { name: "سارة. م", role: "مساعدة تمريض", flag: "/flags/dz.svg", photo: "/images/testimonial-2.jpg" },
  { name: "محمد. ك", role: "كهربائي", flag: "/flags/iq.svg", photo: "/images/testimonial-3.jpg" },
  { name: "ياسين. م", role: "لحام", flag: "/flags/ma.svg", photo: "/images/testimonial-4.jpg" },
  { name: "فاطمة. ر", role: "مساعدة منزلية", flag: "/flags/dz.svg", photo: "/images/testimonial-5.jpg" },
  { name: "علي. ج", role: "ميكانيكي", flag: "/flags/iq.svg", photo: "/images/testimonial-6.jpg" },
];

export type Step = { index: string; title: string; description: string; };

export const steps: Step[] = [
  { index: "01", title: "تقييم الملف", description: "نقوم بدراسة ملفك وتحديد أفضل الفرص المناسبة لك." },
  { index: "02", title: "طلب التأشيرة", description: "نقدم طلب التأشيرة مع جميع الوثائق حتى موافقة السفارة." },
  { index: "03", title: "توفيق العقد", description: "نساعدك في التفاوض وتوقيع العقد مع الشركة الألمانية المناسبة." },
  { index: "04", title: "مقابلة المشغل", description: "نرتب لك مقابلة مباشرة مع الشركة الألمانية المعنية." },
  { index: "05", title: "جمع الوثائق", description: "نجهزك بملف كامل من جميع الوثائق المطلوبة." },
  { index: "06", title: "السفر إلى ألمانيا", description: "نرافقك حتى وصولك ونساعدك في بداية حياتك الجديدة." },
];

export type FaqItem = { question: string; answer: string };

export const faqs: FaqItem[] = [
  { question: "هل اللغة الألمانية ضرورية؟", answer: "ليست شرطًا في البداية لكل المهن، لكننا نوجهك لدورات مكثفة إذا احتجت لها قبل السفر." },
  { question: "هل توفرون عقد العمل؟", answer: "نعم، نرافقك حتى توقيع عقد عمل رسمي مع شركة ألمانية معتمدة قبل السفر." },
  { question: "ما هي تكلفة الخدمات؟", answer: "التكلفة تختلف حسب المهنة والملف، ونقدم لك تقييمًا مجانيًا أولًا قبل أي التزام." },
  { question: "هل يمكنني اصطحاب عائلتي؟", answer: "في أغلب تأشيرات العمل يمكن لاحقًا تقديم طلب لم شمل الأسرة، ونشرح لك الشروط بالتفصيل." },
  { question: "كم تستغرق إجراءات الحصول على التأشيرة؟", answer: "تختلف المدة حسب السفارة والمهنة، وعادة ما تتراوح بين شهرين وأربعة أشهر." },
  { question: "هل تساعدون في السكن بعد الوصول؟", answer: "نعم، نوفر لك الدعم اللازم لإيجاد سكن مناسب خلال الأسابيع الأولى." },
];
