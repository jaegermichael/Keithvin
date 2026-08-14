export interface Program {
  id: string;
  name: string;
  badgeText: string;
  badgeColor: string; // e.g. #FF0000 or #078A9A
  tagline: string;
  ageRange: string;
  description: string;
  longDescription: string;
  highlights: string[];
  keySubjects: string[];
  schedule: string;
  iconName: string;
  image: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  detailedPoints: string[];
  icon: string;
  badge: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Sports' | 'Swimming' | 'Swimming & Sports' | 'Educational Trips' | 'Outdoor Activities' | 'Arts & Creativity' | 'Leadership' | 'Graduation & Milestones';
  image: string;
  caption: string;
  date?: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  parentName: string;
  childInfo: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Admissions' | 'Academics' | 'School Life' | 'Transport & Meals';
}

export interface AdmissionFormData {
  parentName: string;
  phoneNumber: string;
  email: string;
  childName: string;
  childDob: string;
  program: 'ECD A' | 'ECD B' | 'Grade 1' | 'Grade 2' | 'Grade 3' | 'Grade 4' | 'Grade 5' | 'Grade 6' | 'Grade 7';
  intakeTerm: 'Term 1 (January)' | 'Term 2 (May)' | 'Term 3 (September)' | 'Immediate Transfer';
  message: string;
}
