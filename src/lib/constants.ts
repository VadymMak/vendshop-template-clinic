import type { ServiceItem, MasterItem, StaticTestimonial, GalleryImageItem, HoursRow, Service, TeamMember, Testimonial, GalleryImage, Stat, WhyUsItem } from './types';

export const SUPPORTED_LOCALES = ['en', 'sk', 'de', 'cs'] as const;
export type SupportedLocale = typeof SUPPORTED_LOCALES[number];

export const LOCALE_LABELS: Record<SupportedLocale, string> = {
  en: 'English',
  sk: 'Slovenčina',
  de: 'Deutsch',
  cs: 'Čeština',
};

export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '421900123456';
export const WHATSAPP_LINKS = {
  booking:  `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment.`,
  location: `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20where%20exactly%20are%20you%20located%3F`,
  general:  `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20have%20a%20question.`,
};

// Static services (used when DB not seeded yet or in static mode)
export const STATIC_SERVICES: ServiceItem[] = [
  { id: 's1', slug: 'konzultacia',           nameKey: 'services.haircut',   name: 'Consultation',     description: 'Free initial consultation with a dentist.', price: 0,   duration: 15, image: '/services/consultation.webp', category: 'Prevention' },
  { id: 's2', slug: 'zubna-prehliadka',      nameKey: 'services.beard',     name: 'Dental Check-up',  description: 'Comprehensive dental exam including X-ray.', price: 30,  duration: 30, image: '/services/checkup.webp',      category: 'Prevention' },
  { id: 's3', slug: 'cistenie-zubov',        nameKey: 'services.hairBeard', name: 'Teeth Cleaning',   description: 'Professional cleaning and tartar removal.', price: 50,  duration: 45, image: '/services/cleaning.webp',     category: 'Hygiene'    },
  { id: 's4', slug: 'bielenie-zubov',        nameKey: 'services.styling',   name: 'Teeth Whitening',  description: 'Professional whitening by 4–8 shades.', price: 120, duration: 60, image: '/services/whitening.webp',    category: 'Aesthetics' },
];

// Static doctors (used in static mode)
export const STATIC_MASTERS: MasterItem[] = [
  { id: 'm1', name: 'Dr. Jana Nováková',  role: 'Dentist',         bio: 'Specialises in preventive and aesthetic dentistry. 12 years of experience.', photo: '/team/team-kate.webp'   },
  { id: 'm2', name: 'Dr. Marek Horváth',  role: 'Orthodontist',    bio: 'Expert in fixed and removable braces. Member of the Slovak Orthodontic Society.', photo: '/team/team-martin.webp' },
  { id: 'm3', name: 'Dr. Petra Kováčová', role: 'Paediatric Dentist', bio: 'Specialist in paedodontics. Creates a friendly environment for young patients.', photo: '/team/team-lucia.webp'  },
];

export const STATIC_TESTIMONIALS: StaticTestimonial[] = [
  { id: 't1', name: 'Martin K.', text: 'Great clinic! Dr. Nováková is very professional and patient. Highly recommended.', rating: 5 },
  { id: 't2', name: 'Eva S.',    text: 'Teeth whitening was quick and painless. The result is amazing, very happy!',        rating: 5 },
  { id: 't3', name: 'Peter H.',  text: 'My daughter\'s orthodontic treatment is going great. Dr. Horváth always explains everything clearly.', rating: 5 },
  { id: 't4', name: 'Jana M.',   text: 'Clean, modern clinic with a friendly team. Booking was easy and the appointment was on time.', rating: 5 },
];

export const GALLERY_IMAGES: GalleryImageItem[] = [
  { src: '/gallery/gallery-1-chair.webp',   alt: 'Dental chair — modern equipment' },
  { src: '/gallery/gallery-2-haircut.webp', alt: 'Treatment room' },
  { src: '/gallery/gallery-3-beard.webp',   alt: 'Reception area' },
  { src: '/gallery/gallery-4-result.webp',  alt: 'Patient consultation' },
  { src: '/gallery/gallery-5-studio.webp',  alt: 'DentCare Clinic interior' },
];

export const BUSINESS_HOURS: HoursRow[] = [
  { day: 'Monday – Friday', time: '08:00 – 18:00' },
  { day: 'Saturday',        time: '09:00 – 13:00' },
  { day: 'Sunday',          time: 'Closed'        },
];

export const CONTACT = {
  city:        'Bratislava',
  address:     'Obchodná 15\n811 06 Bratislava',
  phone:       '+421 900 123 456',
  phoneHref:   'tel:+421900123456',
  email:       'info@dentcare.sk',
  emailHref:   'mailto:info@dentcare.sk',
  instagram:   'https://instagram.com/dentcare',
  facebook:    'https://facebook.com/dentcare',
  mapSrc:      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2628.4!2d17.107!3d48.147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUzJzM4LjAiTiAxN8KwMDYnMzAuMCJF!5e0!3m2!1sen!2ssk!4v1234567890',
};

// Time slot generation helpers
export const BUSINESS_START = '09:00';
export const BUSINESS_END   = '19:00';
export const SLOT_INTERVAL  = 30; // minutes

// Alias for ContactSection
export const HOURS: HoursRow[] = BUSINESS_HOURS;

// DentCare Clinic display data (used in sections)
export const SERVICES: Service[] = [
  { name: 'Consultation',       description: 'Free initial consultation — no obligation',              price: '€0'   },
  { name: 'Dental Check-up',    description: 'Full examination including digital X-ray',               price: '€30'  },
  { name: 'Teeth Cleaning',     description: 'Professional cleaning and tartar removal',               price: '€50'  },
  { name: 'Teeth Whitening',    description: 'In-office whitening, up to 8 shades brighter',           price: '€120' },
  { name: 'Orthodontic Check',  description: 'Brace or retainer adjustment & review',                 price: '€40'  },
  { name: 'Tooth Extraction',   description: 'Extraction under local anaesthesia',                    price: '€80'  },
];

export const TEAM: TeamMember[] = [
  { name: 'Dr. Jana Nováková',  role: 'Dentist',           experience: '12 years of experience', photo: '/team/team-kate.webp'   },
  { name: 'Dr. Marek Horváth',  role: 'Orthodontist',      experience: '8 years of experience',  photo: '/team/team-martin.webp' },
  { name: 'Dr. Petra Kováčová', role: 'Paediatric Dentist',experience: '6 years of experience',  photo: '/team/team-lucia.webp'  },
];

export const STATS: Stat[] = [
  { number: '10+',  label: 'Years of experience'   },
  { number: '8K+',  label: 'Happy patients'         },
  { number: '3',    label: 'Specialist doctors'     },
  { number: '4.9',  label: 'Google rating'          },
];

export const TESTIMONIALS: Testimonial[] = [
  { stars: 5, text: '"Great clinic! Dr. Nováková is very professional and patient. I always leave feeling well looked after."',                author: 'Martin K.', date: 'Google review · May 2026'   },
  { stars: 5, text: '"Teeth whitening was painless and the result is stunning — I got compliments the very same day. Highly recommend!"',     author: 'Eva S.',    date: 'Google review · April 2026' },
  { stars: 5, text: '"My daughter\'s orthodontic treatment is going perfectly. Dr. Horváth explains everything clearly and patiently."',      author: 'Peter H.',  date: 'Google review · March 2026' },
];

export const BARBERS: string[] = STATIC_MASTERS.map(m => m.name);
export const SERVICE_OPTIONS: string[] = SERVICES.map(s => `${s.name} — ${s.price}`);

export const WHY_US_ITEMS: WhyUsItem[] = [
  { icon: 'star',     title: 'Experienced specialists',      description: 'Every doctor on our team has at least 6 years of clinical experience.'    },
  { icon: 'location', title: 'Central Bratislava',           description: 'Find us on Obchodná Street, right in the heart of the city.'             },
  { icon: 'trend',    title: 'Modern equipment',             description: 'Digital X-ray, laser treatment and the latest dental technologies.'       },
  { icon: 'scissors', title: 'Painless procedures',          description: 'Gentle techniques and effective anaesthesia for a stress-free visit.'    },
  { icon: 'click',    title: 'Book in 3 clicks',             description: 'WhatsApp or the booking form — appointment confirmed in seconds.'        },
  { icon: 'medal',    title: '4.9 on Google',                description: 'Hundreds of satisfied patients. Read our verified reviews.'              },
];
