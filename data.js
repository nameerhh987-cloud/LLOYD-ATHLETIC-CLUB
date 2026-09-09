// ============================================================
//  GYM X — Data Layer
//  All dynamic content: pricing, stats, schedule, facilities, gallery
// ============================================================

const gymInfo = {
  name: "GYM X",
  tagline: "THE NEXT EVOLUTION OF FITNESS.",
  phone: "03121057858",
  whatsapp: "https://wa.me/923121057858",
  facebook: "https://www.facebook.com/GYMXBYHB",
  address: {
    building: "Elite Residency & Shopping Mall",
    road: "Sahba Akhtar Rd",
    block: "Block 13D-2",
    area: "Gulshan-e-Iqbal",
    city: "Karachi",
    postal: "75300",
    country: "Pakistan",
  },
  fullAddress:
    "Elite Residency & Shopping Mall, Sahba Akhtar Rd, Block 13D-2, Gulshan-e-Iqbal, Karachi, 75300, Pakistan",
};

// ── Hero Quick Stats (Clean SVG Vectors) ───────────────────────
const heroStats = [
  {
    label: "24/7 Energy",
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
  },
  {
    label: "Pro HB Trainers",
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 5v14M18 5v14M3 8v8M21 8v8M6 12h12"/></svg>`,
  },
  {
    label: "Elite Machines",
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
  },
  {
    label: "Diet Tracking",
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
  },
];

// ── Hero 4-Card Image Gallery ─────────────────────────────────
const heroGallery = [
  {
    id: "gallery-1",
    title: "Hypertrophy Arena",
    category: "Strength & Power",
    badge: "FREE WEIGHTS",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    desc: "Heavy Olympic barbells, dumbell racks up to 50kg, and dedicated deadlift platforms.",
  },
  {
    id: "gallery-2",
    title: "Functional Rig & Turf",
    category: "Cross-Fit Zone",
    badge: "FUNCTIONAL",
    img: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80",
    desc: "Battle ropes, plyo boxes, sled tracks, and gymnastics rings for explosive conditioning.",
  },
  {
    id: "gallery-3",
    title: "Matrix Smart Cardio",
    category: "High-Intensity Endurance",
    badge: "CARDIO SUITE",
    img: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800&q=80",
    desc: "Biometric treadmills, assault air bikes, and concept rowers with live metrics.",
  },
  {
    id: "gallery-4",
    title: "HB Pro Coaching",
    category: "Athletic Conditioning",
    badge: "PRO TRAINERS",
    img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    desc: "1-on-1 personalized form correction, progressive overload coaching, and diet planning.",
  },
];

// ── Animated Counter Figures ──────────────────────────────────
const counterStats = [
  { value: 500,  suffix: "+", label: "Active Members"   },
  { value: 12,   suffix: "+", label: "Expert Trainers"  },
  { value: 150,  suffix: "+", label: "Equipment Pieces" },
  { value: 5,    suffix: ".0 / 5", label: "Google Rating" },
];

// ── Facilities (Clean SVG Vector Icons) ───────────────────────
const facilitiesData = [
  {
    id: "hypertrophy",
    title: "Hypertrophy Area",
    description:
      "Engineered for maximum muscle growth. Premium free weights, Olympic platforms, cable stations, and resistance machines — all calibrated for progressive overload.",
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 5v14M18 5v14M3 8v8M21 8v8M6 12h12"/></svg>`,
    tag: "STRENGTH",
    size: "large",
  },
  {
    id: "crossfit",
    title: "Functional Cross-Fit Zone",
    description:
      "High-performance functional training space with rigs, kettlebells, battle ropes, and plyometric platforms. Push your limits.",
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
    tag: "FUNCTIONAL",
    size: "medium",
  },
  {
    id: "cardio",
    title: "High-Intensity Cardio",
    description:
      "Next-gen cardio suite — smart treadmills, assault bikes, rowing machines, and stair climbers with real-time performance metrics.",
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l1.5-3 2 6.5 1.5-3.5h4.28"/></svg>`,
    tag: "CARDIO",
    size: "medium",
  },
  {
    id: "diet",
    title: "Customized Diet Tracking",
    description:
      "Personalized nutrition plans and macro tracking designed by certified dietitians. Fuel performance, accelerate recovery.",
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><path d="M8.5 8.5v.01"/><path d="M11.5 11.5v.01"/><path d="M6 14v.01"/><path d="M14 16v.01"/></svg>`,
    tag: "NUTRITION",
    size: "small",
  },
  {
    id: "recovery",
    title: "Recovery & Mobility",
    description:
      "Dedicated stretch zones, foam rolling stations, and mobility equipment to keep you training harder, longer.",
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`,
    tag: "RECOVERY",
    size: "small",
  },
];

// ── Pricing Plans ─────────────────────────────────────────────
const pricingData = [
  {
    id: "x-basic",
    title: "X-BASIC",
    subtitle: "Start Your Journey",
    monthlyPKR: 3500,
    quarterlyPKR: 9000,
    popular: false,
    badge: null,
    features: [
      { text: "Full Gym Floor Access",         included: true  },
      { text: "Cardio Zone Access",            included: true  },
      { text: "Locker Room Access",            included: true  },
      { text: "1 Free Orientation Session",   included: true  },
      { text: "Personal Training Sessions",   included: false },
      { text: "Diet Plan Consultation",       included: false },
      { text: "Priority Machine Booking",     included: false },
      { text: "Guest Passes",                 included: false },
    ],
    ctaText: "START BASIC",
    accent: "#00E5FF",
  },
  {
    id: "x-pro",
    title: "X-PRO ATHLETE",
    subtitle: "The Performance Tier",
    monthlyPKR: 6500,
    quarterlyPKR: 17500,
    popular: true,
    badge: "GYM X SIGNATURE",
    features: [
      { text: "Full Gym Floor Access",         included: true  },
      { text: "Cardio Zone Access",            included: true  },
      { text: "Locker Room Access",            included: true  },
      { text: "2 Personal Training Sessions", included: true  },
      { text: "Diet Plan Consultation",       included: true  },
      { text: "Priority Machine Booking",     included: true  },
      { text: "1 Guest Pass / Month",         included: true  },
      { text: "Progress Tracking App Access", included: false },
    ],
    ctaText: "GO PRO",
    accent: "#CCFF00",
  },
  {
    id: "x-elite",
    title: "X-ELITE HB",
    subtitle: "Unrestricted Dominance",
    monthlyPKR: 10000,
    quarterlyPKR: 26000,
    popular: false,
    badge: "ELITE",
    features: [
      { text: "Full Gym Floor Access",              included: true },
      { text: "Cardio Zone Access",                 included: true },
      { text: "Locker Room Access",                 included: true },
      { text: "Unlimited Personal Training",        included: true },
      { text: "Custom Diet Plan by Dietitian",      included: true },
      { text: "Priority Machine Booking",           included: true },
      { text: "3 Guest Passes / Month",             included: true },
      { text: "Progress Tracking App Access",       included: true },
    ],
    ctaText: "GO ELITE",
    accent: "#CCFF00",
  },
];

// ── Weekly Schedule ───────────────────────────────────────────
const scheduleData = [
  { day: "Mon – Fri", hours: "5:00 AM – 12:00 AM", label: "Weekdays" },
  { day: "Saturday",  hours: "6:00 AM – 11:00 PM", label: "Saturday" },
  { day: "Sunday",    hours: "8:00 AM – 9:00 PM",  label: "Sunday"   },
];
