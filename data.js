// ============================================================
//  LLOYD ATHLETIC CLUB — Data Layer
//  Dynamic content: pricing, stats, schedule, facilities, gallery
// ============================================================

const gymInfo = {
  name: "LLOYD ATHLETIC CLUB",
  shortName: "LLOYD AC",
  tagline: "Portland's Premier Athletic & Fitness Destination.",
  phone: "(503) 287-4594",
  phoneRaw: "5032874594",
  address: {
    street: "815 NE Halsey St Suite B Studio 1",
    city: "Portland",
    state: "OR",
    zip: "97232",
    country: "USA",
  },
  fullAddress: "815 NE Halsey St Suite B Studio 1, Portland, OR 97232",
  locationTag: "PORTLAND, OR • ESTABLISHED COMMUNITY",
};

// ── Hero Quick Stats (Clean SVG Vectors) ───────────────────────
const heroStats = [
  {
    label: "Olympic Free Weights",
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 5v14M18 5v14M3 8v8M21 8v8M6 12h12"/></svg>`,
  },
  {
    label: "Squash & Racquetball",
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8M12 8v8"/></svg>`,
  },
  {
    label: "Cardio & Endurance Suite",
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
  },
  {
    label: "Cedar Sauna & Recovery",
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><circle cx="8.5" cy="8.5" r="1"/><circle cx="11.5" cy="11.5" r="1"/></svg>`,
  },
];

// ── Hero 4-Card Image Gallery ─────────────────────────────────
const heroGallery = [
  {
    id: "gallery-1",
    title: "Championship Free Weights",
    category: "Strength & Power",
    badge: "FREE WEIGHTS",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    desc: "Heavy Olympic barbells, calibrated iron plates, squat racks, and dumbbells up to 125 lbs.",
  },
  {
    id: "gallery-2",
    title: "Athletic Conditioning Turf",
    category: "Functional Movement",
    badge: "TURF ZONE",
    img: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80",
    desc: "Speed tracks, kettlebells, battle ropes, and sled runs for functional athletic conditioning.",
  },
  {
    id: "gallery-3",
    title: "Cardio & Endurance Deck",
    category: "Aerobic Performance",
    badge: "CARDIO SUITE",
    img: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800&q=80",
    desc: "Next-gen treadmills, StairMasters, concept rowers, and assault air bikes with heart-rate tracking.",
  },
  {
    id: "gallery-4",
    title: "Squash & Recovery Courts",
    category: "Athletic Sports",
    badge: "ALL-ACCESS",
    img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    desc: "Full regulation squash and racquetball courts, private cedar saunas, and mobility stretching lounge.",
  },
];

// ── Stats Cards Data (Per Specifications) ──────────────────────
const counterStats = [
  { value: "4.6★", label: "820+ REVIEWS" },
  { value: "FULL", label: "ATHLETIC AMENITIES" },
  { value: "LOCAL", label: "PORTLAND COMMUNITY" },
  { value: "FREE", label: "GUEST DAY PASS" },
];

// ── Facilities (Clean SVG Vector Icons) ───────────────────────
const facilitiesData = [
  {
    id: "strength",
    title: "Strength & Olympic Lifting",
    description:
      "Precision-engineered strength floor featuring competition Olympic platforms, bumper plates, power racks, and dumbbells from 5 to 125 lbs.",
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 5v14M18 5v14M3 8v8M21 8v8M6 12h12"/></svg>`,
    tag: "STRENGTH",
    size: "large",
  },
  {
    id: "squash",
    title: "Racquetball & Squash Courts",
    description:
      "Full regulation hardwood courts available for tournament ladder play, private bookings, and high-intensity cardiovascular conditioning.",
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M12 3v18M3 12h18"/></svg>`,
    tag: "COURTS",
    size: "medium",
  },
  {
    id: "cardio",
    title: "Cardio & Conditioning Theater",
    description:
      "Extensive cardiovascular lineup including Matrix smart treadmills, stepmills, assault bikes, Concept2 rowers, and interactive metric displays.",
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l1.5-3 2 6.5 1.5-3.5h4.28"/></svg>`,
    tag: "CARDIO",
    size: "medium",
  },
  {
    id: "sauna",
    title: "Cedar Wood Saunas & Lockers",
    description:
      "Deep heat therapy cedar saunas, clean spacious locker rooms, executive showers, and towel service to replenish muscles post-workout.",
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`,
    tag: "RECOVERY",
    size: "small",
  },
  {
    id: "coaching",
    title: "Coaching & Group Fitness",
    description:
      "Personalized 1-on-1 coaching, form biomechanics assessments, and community group sessions led by certified Portland fitness leaders.",
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
    tag: "COACHING",
    size: "small",
  },
];

// ── Pricing Plans ─────────────────────────────────────────────
const pricingData = [
  {
    id: "lac-guest",
    title: "DAY PASS",
    subtitle: "First-Time Guest Pass",
    monthlyPrice: 0,
    quarterlyPrice: 0,
    isFree: true,
    popular: false,
    badge: null,
    features: [
      { text: "Full Athletic Floor Access",      included: true  },
      { text: "Free Weight & Cardio Areas",       included: true  },
      { text: "Cedar Wood Sauna & Showers",      included: true  },
      { text: "Complimentary Towel Service",      included: true  },
      { text: "Squash & Racquetball Courts",     included: false },
      { text: "Personal Training Session",        included: false },
      { text: "Permanent Locker Storage",         included: false },
    ],
    ctaText: "CLAIM FREE PASS",
    accent: "#00E5FF",
  },
  {
    id: "lac-club",
    title: "CLUB MEMBER",
    subtitle: "Portland Athletic Standard",
    monthlyPrice: 75,
    quarterlyPrice: 210,
    isFree: false,
    popular: true,
    badge: "LLOYD AC SIGNATURE",
    features: [
      { text: "Full Athletic Floor Access",      included: true  },
      { text: "Free Weight & Cardio Areas",       included: true  },
      { text: "Cedar Wood Sauna & Showers",      included: true  },
      { text: "Squash & Racquetball Courts",     included: true  },
      { text: "Complimentary Towel Service",      included: true  },
      { text: "All Group Fitness Classes",       included: true  },
      { text: "1 Free Guest Pass / Month",       included: true  },
      { text: "Discounted Personal Training",     included: true  },
    ],
    ctaText: "JOIN THE CLUB",
    accent: "#CCFF00",
  },
  {
    id: "lac-elite",
    title: "ELITE ALL-ACCESS",
    subtitle: "Unrestricted Performance",
    monthlyPrice: 115,
    quarterlyPrice: 315,
    isFree: false,
    popular: false,
    badge: "ALL-ACCESS",
    features: [
      { text: "Full Athletic Floor Access",      included: true  },
      { text: "Free Weight & Cardio Areas",       included: true  },
      { text: "Cedar Wood Sauna & Showers",      included: true  },
      { text: "Priority Court Reservations",      included: true  },
      { text: "Complimentary Towel Service",      included: true  },
      { text: "All Group Fitness Classes",       included: true  },
      { text: "2 Personal Training Sessions / Mo",included: true  },
      { text: "Permanent Reserved Locker",       included: true  },
    ],
    ctaText: "GET ELITE ACCESS",
    accent: "#CCFF00",
  },
];

// ── Weekly Schedule ───────────────────────────────────────────
const scheduleData = [
  { day: "Monday – Friday", hours: "5:00 AM – 10:00 PM", label: "Weekdays" },
  { day: "Saturday",        hours: "7:00 AM – 8:00 PM",  label: "Saturday" },
  { day: "Sunday",          hours: "8:00 AM – 7:00 PM",  label: "Sunday"   },
];
