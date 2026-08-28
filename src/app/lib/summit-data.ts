/**
 * Summit content, transcribed from the 9th ICT Summit Sponsorship Package 2026
 * booklet & Form (22 May 2026). Amounts, dates, benefit wording and contact
 * details are verbatim — the booklet's house style is exact figures, and
 * sponsors are being asked to deliver against them, so nothing here is
 * rounded or softened.
 */

export type Tier = "platinum" | "gold" | "diamond" | "silver";

export const SUMMIT = {
  edition: "9th National ICT Summit",
  theme:
    "Harnessing ICT for Inclusive Growth: Digital Pathways to Reduce Unemployment and Eradicate Poverty.",
  dates: "12–16 October 2026",
  venue: "Ongwediva Trade Centre",
  region: "Oshana Region",
  opensAt: "2026-10-12T08:00:00+02:00",
  /**
   * Registration is handled by Passcard, an external provider. Every link to
   * it must be a plain <a> opening in a new tab, carrying
   * target="_blank" rel="noopener noreferrer" — never next/link, which is for
   * routes inside this application only.
   */
  registrationUrl: "https://passcard.com.na/Events/ict-summit-2026/Register",
  /** The full 11-page 2026 sponsorship package booklet & pledge form. */
  bookletUrl: "/9th-ICT-Summit-Booklet-2026.pdf",
  pledgeFormUrl: "/pledge-form.pdf",
  email: "ICT.Summit@mict.gov.na",
} as const;

export type NavItem = {
  label: string;
  href?: string;
  /** Rendered as a plain <a> — routes outside the Next.js app. */
  external?: boolean;
  cta?: boolean;
  children?: { label: string; href: string }[];
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Previous Summits",
    children: [
      { label: "8th Summit — 2024", href: "/ict-summit-2024" },
      { label: "7th Summit — 2023", href: "/ict-summit-2023" },
    ],
  },
  { label: "Sponsorship", href: "/sponsorship" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export type SummitEvent = {
  date: string;
  name: string;
  town: string;
  detail?: string;
  dressCode?: string;
  highlight?: boolean;
};

export const EVENTS: SummitEvent[] = [
  {
    date: "22 May 2026",
    name: "Minister’s Gala Dinner with potential sponsors",
    town: "Ongwediva",
    dressCode: "African Elegance: A Gala of Heritage and the Future of ICT.",
  },
  {
    date: "30 July 2026",
    name: "Last day for sponsors to submit their companies’ profiles, topics, and speakers",
    town: "—",
    detail: "Email: Johanna.Shihepo@mict.gov.na",
  },
  {
    date: "28 August 2026",
    name: "Sponsorship handover and Summit launch",
    town: "Government Information Centre — Windhoek",
  },
  {
    date: "12–16 October 2026",
    name: "9th National ICT Summit 2026",
    town: "Ongwediva Trade Fair Centre",
    highlight: true,
  },
  {
    date: "16 October 2026",
    name: "Networking dinner",
    town: "TBC",
    dressCode:
      "“Gala & Kicks” — Dress to impress, a suit, gown, or tux. Break the rules with your favorite sneakers.",
  },
];

export const OBJECTIVES: string[] = [
  "Provide a creative and unique opportunity, and develop interactions between all ICT experts, policymakers, corporations, industry players and innovators",
  "Develop a platform for ICT industries to discuss challenges and provide a unique path to stakeholders to show potential solutions",
  "Empower Namibians to become professionals of ICT, enabling them to unlock the potential of technology and human capital",
  "Deliver value to the citizens of Namibia, its visitors and investors, equipping the country to become a market leader in the development of ICT in Africa",
  "Promote and enhance development in the field of technology to push Namibia into becoming competitive across national and international borders",
  "Raise awareness regarding usage of ICT projects, and provide detailed guidance on how this helps sectors overcome challenges",
];

export type Package = {
  tier: Tier;
  name: string;
  amount: string;
  note?: string;
  featured?: boolean;
  benefits: string[];
};

export const PACKAGES: Package[] = [
  {
    tier: "platinum",
    name: "Platinum",
    amount: "N$110 000",
    note: "Main Sponsor",
    featured: true,
    benefits: [
      "Company logo and name included in advert materials (TV, print media and radio)",
      "Acknowledged as a Major Sponsor at the Launch, Opening and Closing Ceremonies",
      "Company CEO/MD will be a panelist on the Executive panel discussion",
      "One break-away session presentation on any agreed topic for 40 minutes",
      "Company banner displayed at the launch and prominent locations throughout the Summit",
      "Exhibition stand made available, with a 15-minute exhibition presentation",
    ],
  },
  {
    tier: "gold",
    name: "Gold",
    amount: "N$70 000",
    benefits: [
      "Company name included in advert materials (TV and print media adverts)",
      "Acknowledged as a Gold Sponsor at the Launch, Opening and Closing ceremonies",
      "One break-away session for 45 minutes",
      "Invite your customers and partners to attend or follow breakaway presentations virtually",
      "Exhibition stand made available, with a 15-minute exhibition presentation",
    ],
  },
  {
    tier: "diamond",
    name: "Diamond",
    amount: "N$50 000",
    benefits: [
      "Company name included in advert materials (TV and print media)",
      "Acknowledged as a Diamond Sponsor at the Launch, Opening and Closing ceremonies",
      "Exhibition stand made available",
      "Invite your customers and partners to visit your exhibition stand",
      "Allocated 15-minute exhibition presentation",
    ],
  },
  {
    tier: "silver",
    name: "Silver",
    amount: "N$30 000",
    benefits: [
      "Listing of the company logo on the ICT Summit website and booklet as a Silver Sponsor",
      "Exhibition stand made available",
      "Invite your customers and partners to visit your exhibition stand",
      "Link to company website in the programme guide",
    ],
  },
];

export const GENERAL_BENEFITS: string[] = [
  "Write and place your own ICT Summit articles in the media, in consultation with MICT",
  "Provide your own photographers at the launch, handover ceremony and Summit",
  "Company logo and/or name included on TV, print media and radio announcements",
  "National ICT Summit working group and ushers available to assist you",
  "Internet connectivity made available throughout the venue",
  "Attend the cocktail and gala dinner hosted by the Hon. Minister",
];

/**
 * What sponsors must submit for the website and programme guide. The booklet
 * states these as exact word counts, formats and resolutions.
 */
export const SUBMISSION_REQUIREMENTS: { title: string; detail: string }[] = [
  { title: "Company profile", detail: "500 words maximum, Arial size 11" },
  { title: "Company logo", detail: "PDF vector or PNG, high resolution 300" },
  {
    title: "Head of institution",
    detail: "Official photo (JPG, standard size) and full names",
  },
  {
    title: "Presenter details",
    detail: "Official photo (JPG), full names and biography, 250 words maximum",
  },
  { title: "Topic and synopsis", detail: "200 words maximum" },
  {
    title: "Adverts",
    detail: "Two A5 adverts for Platinum, one for Gold (PDF, standard size)",
  },
];

export type Contact = {
  name: string;
  role: string;
  email: string;
  phone: string;
};

export const CONTACTS: Contact[] = [
  {
    name: "Ms. Johanna Nashipili",
    role: "Chief Development Planner",
    email: "Johanna.Nashipili@mict.gov.na",
    phone: "+264 81 126 1631",
  },
  {
    name: "Ms. Johanna Shihepo",
    role: "Development Planner",
    email: "Johanna.Shihepo@mict.gov.na",
    phone: "+264 81 604 7233",
  },
];

/**
 * Brand assets.
 *
 * The four images under `/brand/` are the booklet's own imagery, extracted
 * straight from the embedded JPEG streams of
 * `9th-ICT-Summit-Booklet-2026.pdf` rather than re-encoded, so they are the
 * untouched originals at booklet resolution (~1120px wide).
 *
 * They are the only photography permitted behind white type, and only ever
 * under `--overlay-brand-wash` — see the imagery guideline. Raster
 * extractions: request vector originals before any print or large-format use.
 */
export const ASSETS = {
  logo: "/press-release/ict-summit-logo.png",
  crest: "/namibian-coat-of-arms.png",
  /** Cover composite — conference stage under the white network motif. */
  heroPhoto: "/brand/summit-network-overlay.jpg",
  /** Blue-cast delegate hall with network overlay. Page headers. */
  headerPhoto: "/brand/summit-delegates-blue.jpg",
  /** The horizontal photo bands used as section headers throughout the booklet. */
  bandA: "/brand/summit-band-a.jpg",
  bandB: "/brand/summit-band-b.jpg",
} as const;
