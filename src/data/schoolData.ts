import { Program, WhyChooseItem, GalleryItem, Testimonial, FAQItem } from '../types';
import { kjsGraduateImg, kjsSwimmingImg, kjsFieldtripImg } from './images';

export const SCHOOL_INFO = {
  name: "Keithvin Junior School",
  shortName: "KJS",
  tagline: "Nurturing Little Champions",
  phone: "+263 77 425 9733",
  phoneRaw: "+263774259733",
  whatsappNumber: "+263774259733",
  whatsappDefaultMsg: "Hello Keithvin Junior School, I would like to enquire about student registration for my child.",
  email: "admissions@keithvinjuniorschool.ac.zw",
  altEmail: "info@keithvinjuniorschool.ac.zw",
  address: "Keithvin Junior School Campus, Harare, Zimbabwe",
  officeHours: "Monday - Friday: 7:00 AM - 4:30 PM | Saturday: 8:00 AM - 12:00 PM",
  colors: {
    blue: "#0864B8",
    deepBlue: "#00549F",
    lightBlue: "#DCEAFF",
    orange: "#FFA500",
    red: "#FF0000",
    teal: "#078A9A",
  }
};

export const TRUST_BAR_ITEMS = [
  {
    id: "academic",
    title: "Strong Academic Foundation",
    description: "Holistic, rigorous curriculum preparing learners for secondary school excellence",
    icon: "GraduationCap",
    color: "bg-blue-500/10 text-[#0864B8]"
  },
  {
    id: "educators",
    title: "Passionate & Caring Educators",
    description: "Qualified, nurturing mentors dedicated to discovering each child's talent",
    icon: "HeartHandshake",
    color: "bg-amber-500/10 text-[#FFA500]"
  },
  {
    id: "safety",
    title: "Safe Learning Environment",
    description: "Secure, modern, child-friendly facilities with 24/7 care and surveillance",
    icon: "ShieldCheck",
    color: "bg-teal-500/10 text-[#078A9A]"
  },
  {
    id: "development",
    title: "Holistic Child Development",
    description: "Sports, swimming, music, leadership, excursions and creative arts",
    icon: "Trophy",
    color: "bg-red-500/10 text-[#FF0000]"
  }
];

export const PROGRAMS_DATA: Program[] = [
  {
    id: "ecd",
    name: "Early Childhood Development (ECD)",
    badgeText: "ECD",
    badgeColor: "#FF0000",
    tagline: "Where Curious Little Champions Begin Their Journey",
    ageRange: "Ages 3 - 5 Years (ECD A & ECD B)",
    description: "A nurturing early childhood environment where young learners develop confidence, curiosity, phonics, fine motor skills and essential social foundations.",
    longDescription: "Our Early Childhood Development program is specifically designed around joyful play-based discovery and foundational literacy. In our colorful, safe classrooms, children build early math intuition, communication skills, motor coordination, and moral etiquette in a loving environment.",
    highlights: [
      "Phonics & Early Reading Mastery",
      "Play-Based Sensory & STEM Discovery",
      "Fine & Gross Motor Skills Development",
      "Social-Emotional & Etiquette Training",
      "Splash Pool & Water Confidence Play",
      "Healthy Snack Time & Guided Rest Areas"
    ],
    keySubjects: [
      "Early Literacy & Phonics",
      "Numeracy & Shape Concepts",
      "Creative Arts & Music Play",
      "Physical Movement & Coordination",
      "Environmental & Discovery Studies",
      "Social Etiquette & Storytelling"
    ],
    schedule: "7:45 AM - 12:30 PM (Aftercare available until 4:30 PM)",
    iconName: "Baby",
    image: kjsGraduateImg
  },
  {
    id: "primary",
    name: "Primary Classes (Grade 1 - Grade 7)",
    badgeText: "PRIMARY CLASSES",
    badgeColor: "#078A9A",
    tagline: "Empowering Confident, High-Achieving Young Leaders",
    ageRange: "Ages 6 - 13 Years (Grade 1 to Grade 7)",
    description: "A balanced primary education combining rigorous academics, practical science, digital literacy, competitive sports, swimming, leadership and personal development.",
    longDescription: "Our primary school curriculum delivers academic excellence while nurturing strong moral character. We maintain ideal teacher-student ratios ensuring every learner receives individualized mentorship, prepares thoroughly for Grade 7 national examinations, and thrives in co-curricular clubs.",
    highlights: [
      "High Academic Standards & Exam Excellence",
      "Weekly Swimming Lessons & Aquatics",
      "ICT & Computer Literacy Lab",
      "Educational Excursions & Heritage Trips",
      "Debate, Public Speaking & Leadership",
      "Athletics, Soccer, Netball & Volleyball"
    ],
    keySubjects: [
      "Mathematics & Quantitative Reasoning",
      "English Language & Creative Composition",
      "Science, Agriculture & Tech",
      "Social Sciences & Heritage Studies",
      "Indigenous Languages (Shona / Ndebele)",
      "Information & Communication Tech (ICT)",
      "Visual & Performing Arts",
      "Physical Education & Swimming"
    ],
    schedule: "7:30 AM - 3:30 PM (Extracurriculars until 4:30 PM)",
    iconName: "BookOpenCheck",
    image: kjsFieldtripImg
  }
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    id: "foundation",
    title: "Strong Academic Foundation",
    description: "We help learners build deep conceptual understanding, critical thinking, and exam confidence needed for secondary school success and lifelong learning.",
    detailedPoints: [
      "Structured literacy and numeracy mastery programs",
      "Individualized learning support for every child",
      "Continuous assessment and parent progress reports",
      "Interactive modern teaching methodologies"
    ],
    icon: "GraduationCap",
    badge: "Academic Excellence"
  },
  {
    id: "educators",
    title: "Passionate & Caring Educators",
    description: "Our teachers are more than instructors; they are dedicated mentors who foster a warm atmosphere where children feel encouraged, loved, and motivated.",
    detailedPoints: [
      "Certified, experienced and background-checked educators",
      "Low teacher-to-student ratios for personal attention",
      "Regular pedagogical training and child psychology workshops",
      "Approachable and proactive communication with parents"
    ],
    icon: "Heart",
    badge: "Dedicated Mentors"
  },
  {
    id: "safety",
    title: "Safe & Supportive Environment",
    description: "Children learn best when they feel secure, respected, and physically protected. Our campus is designed with child safety as the top priority.",
    detailedPoints: [
      "Gated, access-controlled campus with 24/7 security",
      "Trained first-aid staff and clean hygienic facilities",
      "Positive behavior reinforcement and anti-bullying ethos",
      "Spacious, child-safe playgrounds and sports grounds"
    ],
    icon: "Shield",
    badge: "100% Safe Campus"
  },
  {
    id: "holistic",
    title: "Holistic Development (Sports, Arts & Leadership)",
    description: "We develop the whole child through competitive sports, swimming, visual arts, music, educational field excursions, and youth leadership.",
    detailedPoints: [
      "Regular swimming coaching and aquatic confidence",
      "Field trips to educational and cultural heritage sites",
      "Inter-house sports competitions, athletics, and ball games",
      "Public speaking, drama, choir, and leadership roles"
    ],
    icon: "Trophy",
    badge: "All-Round Growth"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Educational Heritage Excursion",
    category: "Educational Trips",
    image: kjsFieldtripImg,
    caption: "KJS pupils exploring landmarks during our educational excursion in their signature sky-blue school blazers and ties.",
    featured: true
  },
  {
    id: "g2",
    title: "Swimming Pool Fun & Lessons",
    category: "Swimming & Sports",
    image: kjsSwimmingImg,
    caption: "Teachers and swimming instructors guiding learners through aquatic confidence and thrilling water slide activities.",
    featured: true
  },
  {
    id: "g3",
    title: "Keithvin Graduate Excellence",
    category: "Graduation & Milestones",
    image: kjsGraduateImg,
    caption: "Proud Keithvin Junior School graduate champion holding diploma certificate in royal blue graduation gown and cap.",
    featured: true
  },
  {
    id: "g4",
    title: "Heritage Tour & Field Exploration",
    category: "Educational Trips",
    image: kjsFieldtripImg,
    caption: "Learners developing team camaraderie, cultural appreciation, and curiosity on outdoor school expeditions.",
    featured: false
  },
  {
    id: "g5",
    title: "Aquatic Confidence & Water Slide",
    category: "Swimming & Sports",
    image: kjsSwimmingImg,
    caption: "Developing motor skills, physical stamina, and water safety under full professional supervision.",
    featured: false
  },
  {
    id: "g6",
    title: "Academic Achievement & Graduation",
    category: "Graduation & Milestones",
    image: kjsGraduateImg,
    caption: "Celebrating early foundational milestones as little champions progress with flying colors into primary grades.",
    featured: true
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    parentName: "Mrs. T. Moyo",
    childInfo: "Parent to Grade 3 & ECD B Champions",
    quote: "Sending my children to Keithvin Junior School is the best decision we made. The teachers are genuinely loving and patient. My son's reading confidence skyrocketed within one term!",
    rating: 5,
    avatar: ""
  },
  {
    id: "t2",
    parentName: "Mr. B. Sibanda",
    childInfo: "Parent to Grade 6 Learner",
    quote: "The balance between strict academics and extracurriculars like swimming and educational trips is remarkable. The school uniform, discipline, and leadership values stand out.",
    rating: 5,
    avatar: ""
  },
  {
    id: "t3",
    parentName: "Dr. & Mrs. Chidzero",
    childInfo: "Parents to Grade 1 Champion",
    quote: "Keithvin provides a truly safe and stimulating space. Our daughter looks forward to waking up for school every morning. We appreciate the open communication with teachers.",
    rating: 5,
    avatar: ""
  }
];

export const FAQS: FAQItem[] = [
  {
    category: "Admissions",
    question: "When is registration open and what is the admission process?",
    answer: "Registration is currently open for ECD A, ECD B, and Grade 1 through Grade 7. You can apply online via our form, call +263 77 425 9733, or visit the school campus. The process involves submitting an application, brief learner assessment/interview, and submitting required documentation (Birth Certificate, Health Record, Previous Reports)."
  },
  {
    category: "Admissions",
    question: "What age does my child need to be for ECD admission?",
    answer: "For ECD A, children should turn 3 to 4 years old within the admission year. For ECD B, children should turn 4 to 5 years old. For Grade 1, learners should be turning 6 years old."
  },
  {
    category: "School Life",
    question: "What extracurricular activities and sports are offered?",
    answer: "We offer comprehensive sports and co-curricular programs including weekly swimming lessons with trained coaches, athletics, soccer, netball, chess club, drama, music/choir, and regular educational field trips across Zimbabwe."
  },
  {
    category: "Transport & Meals",
    question: "Do you offer school transport and hot meals?",
    answer: "Yes, we provide safe, monitored door-to-door and central route school bus transport. Nutritious, balanced hot lunches and mid-morning snacks are also prepared fresh daily by certified caterers."
  },
  {
    category: "Academics",
    question: "What is the teacher-to-pupil ratio at Keithvin Junior School?",
    answer: "We maintain low student-to-teacher ratios (averaging 15-20 pupils per class in Primary and even lower in ECD with dedicated assistant teachers) to ensure every child gets individualized academic attention."
  },
  {
    category: "School Life",
    question: "What are the school uniform requirements?",
    answer: "Our signature uniform includes the stylish sky-blue blazer with the embroidered KJS crest, white shirts, school ties, navy shorts/skirts, and straw hats for outdoor activities. Complete uniform packs and sports kits are available at the school uniform shop."
  }
];
