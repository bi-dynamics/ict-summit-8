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
  /**
   * The final 120-page summit booklet and programme (MICT, 7 October 2026),
   * as a web version: images reduced to screen resolution (32 MB → 13 MB),
   * text and layout unchanged. The earlier 11-page sponsorship booklet stays at
   * /9th-ICT-Summit-Booklet-2026.pdf for any links already shared.
   */
  bookletUrl: "/9th-ICT-Summit-Booklet-and-Programme-2026.pdf",
  bookletMeta: "PDF · 120 pages · 13 MB",
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
  { label: "Speakers", href: "/#speakers" },
  { label: "Presentations", href: "/#presentations" },
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
    date: "13 October 2026",
    name: "Networking dinner",
    town: "Bennies Entertainment Park & Lodge — Ongwediva",
    dressCode:
      "“Gala & Kicks” — Dress to impress, a suit, gown, or tux. Break the rules with your favorite sneakers.",
  },
  {
    date: "14–15 October 2026",
    name: "Namibian film screenings",
    town: "Ongwediva Trade Fair Centre",
    detail: "Free screenings of Namibian films each evening from 18h00. The schedule is under Posters below.",
  },
  {
    date: "16 October 2026",
    name: "Hackathon Day",
    town: "Ongwediva Trade Fair Centre",
    detail: "08h00–17h00",
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

export type Speaker = {
  /** Also the image filename: /public/speakers-2026/<slug>.jpg */
  slug: string;
  name: string;
  /** As billed on the card: "Speaker", "Host", or the session they host. */
  role: string;
  /** The description line under the name, when the card has one. */
  organisation?: string;
  topicLabel?: string;
  topic?: string;
};

/**
 * 2026 speaker announcement cards, supplied by MICT and shown exactly as
 * designed — the cards are the content, so they are never cropped or rebuilt.
 *
 * Order is hierarchical: seniority of office, as a protocol office would rank
 * it. Heads of international organisations, then heads of national
 * institutions, then senior executives and company heads (public sector, then
 * private sector — multinational and established firms before founders and
 * smaller firms — then civil society), then academia, then managers and
 * specialists, then independent experts, with the Master of Ceremonies last.
 * Reorder here.
 *
 * The wording below is used only for alt text, which is what screen readers and
 * search engines read, because the visible text is inside each image. It
 * follows the cards, with missing spaces and stray punctuation tidied.
 *
 * Images: MICT's 4500 px originals (the 7 October set, with the corrected
 * sponsor strip), resized to 2048 px for the web.
 */
export const SPEAKERS: Speaker[] = [
  {
    slug: "amanda-serumaga",
    name: "Ms. Amanda K. Serumaga",
    role: "Speaker",
    organisation: "Resident Representative, UNDP",
    topicLabel: "Topic",
    topic: "E-ID as a Catalyst for Inclusive Growth: Unlocking Digital Pathways to Job Creation and Poverty Reduction",
  },
  {
    slug: "halima-letamo",
    name: "Dr. Halima Letamo",
    role: "Speaker",
    organisation: "Representative of ITU Area Office for Southern Africa",
    topicLabel: "Topic",
    topic: "AI and Automation: Policy frameworks to protect low-income workers from job displacement caused by Artificial Intelligence and Automation",
  },
  {
    slug: "anicia-peters",
    name: "Prof. Dr. Anicia Peters",
    role: "Host, Panel Discussion",
    organisation: "Chief Executive Officer, National Commission on Research, Science and Technology (NCRST)",
    topicLabel: "Panel discussion topic",
    topic: "National AI Policies and the Institute",
  },
  {
    slug: "anna-anghuwo",
    name: "Ms. Anna Anghuwo",
    role: "Speaker",
    organisation: "Chairperson of Electronic Information System Management Advisory Council (EISMAC)",
    topicLabel: "Topic",
    topic: "Driving Innovation, Trust and Inclusive Growth",
  },
  {
    slug: "leonard-hango",
    name: "Mr. Leonard Hango",
    role: "Speaker",
    organisation: "Head: Business Unit North-West, Namibia Water Corporation Ltd (NamWater)",
    topicLabel: "Topic",
    topic: "Digital Water: Leveraging ICT for Reliability, Inclusion and Growth",
  },
  {
    slug: "rodney-shivangulula",
    name: "Mr. Rodney Shivangulula",
    role: "Speaker",
    organisation: "Head of Payment Solutions, Namibia Post Limited (NamPost)",
    topicLabel: "Topic",
    topic: "Extending Digital Access: Leveraging Postal Infrastructure to Bridge Namibia’s Digital Divide for Economic Growth",
  },
  {
    slug: "cornelia-shipindo",
    name: "Ms. Cornelia Shipindo",
    role: "Speaker",
    organisation: "Executive, Cybersecurity Incident Response Team; Communications Regulatory Authority of Namibia",
    topicLabel: "Topic",
    topic: "Cybersecurity Awareness Game/Drill – NAM-CSIRT",
  },
  {
    slug: "grant-chivandire",
    name: "Mr. Grant Chivandire",
    role: "Speaker",
    organisation: "CTO & Head of Technology for Mobile Infrastructure, Sub-Saharan Africa, Nokia",
    topicLabel: "Topic",
    topic: "AI Radio Access Network",
  },
  {
    slug: "schaun-young",
    name: "Mr. Schaun Young",
    role: "Speaker",
    organisation: "Head of Africa, P3 Communications",
    topicLabel: "Topic",
    topic: "AI and Autonomous Networks are transforming the telecommunications industry",
  },
  {
    slug: "claudia-nikanor",
    name: "Ms. Claudia Nikanor",
    role: "Speaker",
    organisation: "Head: Operations, Instant Payments Namibia",
    topicLabel: "Topic",
    topic: "Empowering Citizens Through Digital Financial Literacy and Digital Payments: Making it Practical",
  },
  {
    slug: "simeon-shilongo",
    name: "Mr. Simeon H. Shilongo",
    role: "Speaker",
    organisation: "Managing Director of Mango Ride Investment (Pty) Ltd",
    topicLabel: "Topic",
    topic: "Digital services platform connecting customers and businesses to transport, logistics, e-commerce",
  },
  {
    slug: "leonard-akathingo",
    name: "Mr. Leonard Nangolo Akathingo",
    role: "Speaker",
    organisation: "Founder, iTransfer Namibia; Founder, Edu-Pull",
    topicLabel: "Topic",
    topic: "Connecting Public Servants Through Technology: Solving Namibia’s Cross-Transfer Challenge with iTransfer",
  },
  {
    slug: "anton-august",
    name: "Mr. Anton Felisberto August",
    role: "Speaker",
    organisation: "Royal Mane Investment CC",
    topicLabel: "Topic",
    topic: "SolveNam – practical solutions, connecting opportunities and building partnerships that contribute to entrepreneurship and economic development",
  },
  {
    slug: "michael-shuufeni",
    name: "Mr. Michael Shuufeni",
    role: "Speaker",
    organisation: "Vice President of ISOC",
    topicLabel: "Topic",
    topic: "One Digital Agenda; From Policy to Platform",
  },
  {
    slug: "attlee-gamundani",
    name: "Prof Attlee M. Gamundani",
    role: "Host",
    organisation: "Associate Professor, Cybersecurity, Faculty of Computing and Informatics, Namibia University of Science and Technology (NUST)",
    topicLabel: "Topic",
    topic: "ICT applications in agriculture, food security, and rural economic empowerment",
  },
  {
    slug: "linda-shitenga",
    name: "Ms. Linda Shitenga",
    role: "Speaker",
    organisation: "Manager: Welfare and Labour Statistics, Namibia Statistics Agency (NSA)",
    topicLabel: "Topic",
    topic: "Mapping how ICT adoption is transforming employment in Namibia: Trends and Statistics, 2016–2025",
  },
  {
    slug: "loise-katanga",
    name: "Ms. Loise Katanga",
    role: "Speaker",
    organisation: "Senior Economist: Financial Sector Development, Bank of Namibia",
    topicLabel: "Topic",
    topic: "Empowering Citizens Through Digital Financial Literacy: Building Trust and Participation in Namibia’s Digital Economy",
  },
  {
    slug: "sam-agbaluwa",
    name: "Mr. Sam Aghogho Samuel Agbaluwa",
    role: "Speaker",
    organisation: "Microsoft Certified Trainer, Digital Transformation & Data Analytics Specialist, ICT Skills & Cybersecurity Professional, Harold Pupkewitz Graduate School of Business, Namibia University of Science and Technology",
    topicLabel: "Topic",
    topic: "Turning Data into Job Creation Using Power BI, Power Apps and Copilot to Identify and Create Digital Opportunities",
  },
  {
    slug: "ernst-khachab",
    name: "Ernst Khachab",
    role: "Speaker",
    organisation: "Junior Empowerment Specialist & Cybersecurity Enthusiast, Salt Essential IT",
    topicLabel: "Topic",
    topic: "Cybersecurity awareness month: “Don’t Make It Easy for Them”",
  },
  {
    slug: "mbangula-amugongo",
    name: "Dr. Mbangula Lameck Amugongo",
    role: "Host, High Level Fireside Chat",
    organisation: "Namibian Technologist, Researcher, and Artificial Intelligence (AI) Expert",
    topicLabel: "High Level Fireside Chat topic",
    topic: "Harnessing ICT: Practical Models for Job Creation and Growth",
  },
  {
    slug: "tuwilika-nafuka",
    name: "Dr. Tuwilika Nafuka",
    role: "Speaker",
    organisation: "Namibian Medical Doctor and Chevening Scholar (2025/2026)",
    topicLabel: "Topic",
    topic: "Leveraging ICT for Telemedicine, Early Warning Systems and Emergency Response: Governance, Data Sovereignty and Trust in Namibia’s Digital Health Ecosystem",
  },
  {
    slug: "delila-katanga",
    name: "Ms. Delila Katanga",
    role: "Master of Ceremonies",
  },
];

/**
 * Speakers from the summit's platinum sponsors (MICT's 9 October cards, each
 * billed "Speaker – Platinum Sponsor"), shown in their own carousel after the
 * speakers and hosts. Ordered by seniority of office, as above.
 *
 * Audrey Chanakira's card reads "Chanakir"; the booklet has the full surname,
 * which the alt text uses.
 */
export const PLATINUM_SPONSOR_SPEAKERS: Speaker[] = [
  {
    slug: "kayembe-ilunga",
    name: "Mr. Kayembe Ilunga",
    role: "Speaker, Platinum Sponsor",
    organisation: "General Manager, Fintech & Maris Executive Director, Mobile Telecommunications Limited (MTC)",
    topicLabel: "Topic",
    topic: "Introduction to MTC Maris",
  },
  {
    slug: "mufaro-nesongano",
    name: "Mr. Mufaro Nesongano",
    role: "Speaker, Platinum Sponsor",
    organisation: "Executive: Communication & Consumer Relations, CRAN",
    topicLabel: "Topic",
    topic: "“Who Regulates the Disruptors? Technology’s Challenge to Traditional Governance Models”",
  },
  {
    slug: "helvy-shaanika",
    name: "Ms. Helvy Shaanika",
    role: "Speaker, Platinum Sponsor",
    organisation: "Managing Editor, New Era Publication Corporation",
    topicLabel: "Topic",
    topic: "The Media as a development partner: Harnessing Digital Transformation for economic empowerment in Namibia",
  },
  {
    slug: "vivian-mieze",
    name: "Ms. Vivian Bernice Mieze",
    role: "Speaker, Platinum Sponsor",
    organisation: "Senior Manager: FMC Core & Wireless Access, Telecom Namibia",
    topicLabel: "Topic",
    topic: "Building Namibia’s Digital Foundation: How Broadband Infrastructure Drives Inclusive Growth, Jobs, and Economic Opportunity",
  },
  {
    slug: "lovisa-shilongo",
    name: "Ms. Lovisa Shilongo",
    role: "Speaker, Platinum Sponsor",
    organisation: "Manager: Business Strategy and Transformation, CRAN",
    topicLabel: "Topic",
    topic: "The Role of Telco in Enabling Digital Transformation and Artificial Intelligence",
  },
  {
    slug: "conroy-feris",
    name: "Mr. Conroy Feris",
    role: "Speaker, Platinum Sponsor",
    organisation: "Manager: IT & Circulation, New Era Publication Corporation",
    topicLabel: "Topic",
    topic: "Harnessing ICT for Inclusive Growth",
  },
  {
    slug: "audrey-chanakira",
    name: "Ms. Audrey Chanakira",
    role: "Speaker, Platinum Sponsor",
    organisation: "Team Lead: Artificial Intelligence Division, Windhoek-Green Enterprise Solution",
    topicLabel: "Topic",
    topic: "Just Because We Can Use AI, Should We? Rethinking AI Adoption, Human Capability and Inclusive Growth in the Digital Economy",
  },
  {
    slug: "melkisedek-hamakali",
    name: "Mr. Melkisedek Hamakali",
    role: "Speaker, Platinum Sponsor",
    organisation: "Team Lead: Artificial Intelligence Division, Windhoek Green Enterprise Solution (Pty) Ltd",
    topicLabel: "Topic",
    topic: "The Role of Telco in Enabling Digital Transformation and Artificial Intelligence",
  },
  {
    slug: "immanuel-tuyapeni",
    name: "Mr. Immanuel Tuyapeni",
    role: "Speaker, Platinum Sponsor",
    organisation: "IT Engineer: Security, Telecom Namibia",
    topicLabel: "Topic",
    topic: "Connecting Communities: ICT Infrastructure as a Driver of Inclusive Development",
  },
];

/**
 * The speaker carousels on the home page, in order. Further sponsor tiers
 * (Gold, Diamond, Silver) go here as extra groups, after Platinum.
 */
export const SPEAKER_GROUPS: { id: string; title: string; speakers: Speaker[] }[] = [
  { id: "speakers-and-hosts", title: "Speakers and hosts", speakers: SPEAKERS },
  { id: "platinum-sponsor-speakers", title: "Platinum sponsor speakers", speakers: PLATINUM_SPONSOR_SPEAKERS },
];

export const speakerImage = (s: Speaker) => `/speakers-2026/${s.slug}.jpg`;

export const speakerAlt = (s: Speaker) =>
  [
    `${s.name}, ${s.role}.`,
    s.organisation ? `${s.organisation}.` : "",
    s.topic ? `${s.topicLabel ?? "Topic"}: ${s.topic}` : "",
  ]
    .filter(Boolean)
    .join(" ");

export type Poster = {
  /** Also the image filename: /public/posters-2026/<slug>.jpg */
  slug: string;
  title: string;
  /** One line under the title: dates, times, what it's for. */
  caption: string;
  /** The poster's text, for screen readers and search engines. */
  alt: string;
  width: number;
  height: number;
  link?: { href: string; label: string };
};

/**
 * Posters supplied by MICT, shown whole (never cropped). The film screening
 * schedule was supplied as an A3 PDF and converted to an image.
 */
export const POSTERS: Poster[] = [
  {
    slug: "summit-poster",
    title: "9th National ICT Summit",
    caption: "12–16 October 2026 · Ongwediva Trade Fair Centre",
    alt: "Poster for the 9th National ICT Summit, 12 to 16 October 2026, Ongwediva Trade Fair Centre, Oshana Region. Theme: Harnessing ICT for Inclusive Growth: Digital Pathways to Reduce Unemployment and Eradicate Poverty. The summit includes a Youth Day for young people to showcase their innovations. Register at passcard.com.na.",
    width: 864,
    height: 1080,
  },
  {
    slug: "register-qr",
    title: "Register to attend",
    caption: "Scan the QR code. Registration is required for attendance.",
    alt: "Poster: scan the QR code to register for the 9th National ICT Summit. Registration is required for attendance.",
    width: 2048,
    height: 2048,
    link: { href: SUMMIT.registrationUrl, label: "Register online" },
  },
  {
    slug: "hackathon-day",
    title: "Hackathon Day",
    caption: "16 October 2026 · 08h00–17h00",
    alt: "Poster for Hackathon Day at the 9th National ICT Summit 2026: 16 October 2026, 08h00 to 17h00, Ongwediva Trade Fair Centre.",
    width: 763,
    height: 1080,
  },
  {
    slug: "film-screenings",
    title: "Namibian film screenings",
    caption: "14 & 15 October 2026 · from 18h00 · free",
    alt: "Screening schedule for the Namibian film screenings at the ICT Summit 2026, Ongwediva Trade Centre. Wednesday 14 October: 18h00 welcoming; 18h30 Connection (Family, 12 min); 19h00 Okuruwo (PG, 27 min); 19h30 Echoes of Omusati (Family, 110 min). Thursday 15 October: 18h00 welcoming; 18h30 One More Win (PG, 27 min); 19h00 Emanya (PG, 29 min); 19h30 Die Rooftog (PG13, 44 min). Free screenings.",
    width: 1800,
    height: 2545,
  },
];

export const posterImage = (p: Poster) => `/posters-2026/${p.slug}.jpg`;

export type FacebookVideoInfo = {
  title: string;
  /** One line under the video. */
  caption?: string;
  facebookUrl: string;
  embedUrl: string;
  /** Landscape 16:9 or portrait 9:16, as the video was recorded. */
  orientation: "landscape" | "portrait";
};

/** Facebook's embedded-player address for a public video or reel. */
const facebookEmbed = (reelId: string) =>
  `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
    `https://www.facebook.com/reel/${reelId}/`
  )}&show_text=false&width=560&t=0`;

/**
 * The Governor of the Oshana Region's invitation to the summit: MICT's
 * announcement text and its Facebook video, shown together on the home page
 * straight after the hero, followed by MICT's other summit videos. Videos play
 * in Facebook's own embedded player; the "Watch on Facebook" links are the
 * fallback for browsers that block Facebook embeds.
 */
export const INVITATION = {
  overline: "Join the National ICT Summit",
  title: "An invitation from the Governor of the Oshana Region",
  text: "The Governor of the Oshana Region, Hon. Hofni Alugodhi Iipinge, is inviting residents of Oshana to join the 9th National ICT Summit, taking place from 12–16 October 2026 at the Ongwediva Trade Fair Centre.",
  theme:
    "The summit will be held under the theme: “Harnessing ICT for Inclusive Growth: Digital Pathways to Reduce Unemployment and Eradicate Poverty.”",
  video: {
    title: "Invitation to the 9th National ICT Summit from the Governor of the Oshana Region",
    facebookUrl: "https://www.facebook.com/reel/2304730913404312",
    embedUrl: facebookEmbed("2304730913404312"),
    orientation: "landscape",
  } satisfies FacebookVideoInfo,
  moreTitle: "More from MICT",
  more: [
    {
      title: "Invitation to the 9th National ICT Summit from the Mayor of Ongwediva",
      caption:
        "Her Worship Cllr. Naemi Amuthenu, Mayor of Ongwediva, invites residents of Ongwediva and surrounding communities to be part of the summit.",
      facebookUrl: "https://www.facebook.com/reel/984215394163197",
      embedUrl: facebookEmbed("984215394163197"),
      orientation: "landscape",
    },
    {
      title: "MICT takes the 9th ICT Summit to Oshana: school information session",
      caption:
        "MICT takes the summit to Oshana: an information session with learners at Philipus Aupa Nangolo Senior Secondary School on 7 October 2026.",
      facebookUrl: "https://www.facebook.com/reel/1090917947057571",
      embedUrl: facebookEmbed("1090917947057571"),
      orientation: "portrait",
    },
  ] satisfies FacebookVideoInfo[],
};

export type Presentation = {
  /** Path under /public/presentations-2026/ */
  file: string;
  title: string;
  /** Left out when neither the slides nor the programme name the presenter. */
  presenter?: string;
  /** Role and organisation, as on the title slide or in the programme. */
  role?: string;
  /** Programme time, when the session was in the printed programme. */
  time?: string;
  pages: number;
  /** A written document rather than slides, so its length shows in pages. */
  document?: boolean;
  /** Download size, e.g. "1.2 MB" or "480 KB". */
  size: string;
};

export type PresentationDay = {
  id: string;
  label: string;
  /** Shown on the tab from tablet width up. */
  date: string;
  /** Shown on the tab on phones, so all the day tabs fit on one row. */
  shortDate: string;
  presentations: Presentation[];
};

/**
 * Presentations from the summit, one tab per day, in programme order. MICT
 * supplied PowerPoint files (and the odd PDF); they were converted to PDF and
 * compressed for the web (slides unchanged). Add later days as further entries.
 */
export const PRESENTATION_DAYS: PresentationDay[] = [
  {
    id: "day-1",
    label: "Day 1",
    date: "Monday, 12 October",
    shortDate: "12 Oct",
    presentations: [
      {
        file: "day-1/nikanor-digital-literacy-payments.pdf",
        title: "Empowering Citizens Through Digital Literacy and Digital Payments",
        presenter: "Ms. Claudia Itembu-Nikanor",
        role: "Head: Operations, Instant Payments Namibia",
        time: "09:20",
        pages: 16,
        size: "1.1 MB",
      },
      {
        file: "day-1/one-digital-agenda.pdf",
        title: "One Digital Agenda: From Policy to Platform",
        presenter: "Ms. Anna Amoomo-David",
        role: "Internet Society, Namibia Chapter",
        time: "11:15",
        pages: 12,
        size: "170 KB",
      },
      {
        file: "day-1/amugongo-keynote.pdf",
        title: "Harnessing ICT for Inclusive Growth: AI, Youth Opportunity and Namibia’s Digital Future",
        presenter: "Dr. Mbangula Lameck Amugongo",
        role: "Technologist, Researcher and AI Expert",
        time: "11:40",
        pages: 22,
        size: "1.2 MB",
      },
      {
        file: "day-1/nampost-digital-access.pdf",
        title: "Extending Digital Access: Leveraging Postal Infrastructure to Bridge Namibia’s Digital Divide",
        presenter: "Mr. Rodney Shivangulula",
        role: "Head: Payment Solutions, NamPost",
        time: "12:30",
        pages: 11,
        size: "4.6 MB",
      },
      {
        file: "day-1/cran-pki-diginam.pdf",
        title: "Namibia’s Public Key Infrastructure and DigiNam",
        presenter: "Mr. Mufaro Nesongano",
        role: "Executive: Communication and Consumer Relations, CRAN",
        time: "14:40",
        pages: 15,
        size: "1.1 MB",
      },
      {
        file: "day-1/huawei-5g-a-mobile-ai.pdf",
        title: "Growing 5G, Building AI: Namibia’s Stride into the Mobile AI Era",
        presenter: "Ms. Kate Fan",
        role: "Chief Technical Officer, Huawei Technologies Namibia",
        time: "15:20",
        pages: 22,
        size: "4.1 MB",
      },
      {
        file: "day-1/mtc-mobile-financial-services.pdf",
        title: "Mobile Financial Services",
        presenter: "Mr. Kayembe Ilunga",
        role: "GM Fintech & MTC Maris Executive Director, MTC",
        time: "15:50",
        pages: 15,
        size: "1.6 MB",
      },
      {
        file: "day-1/telecom-digital-foundation.pdf",
        title: "Building Namibia’s Digital Foundation: How Broadband Infrastructure Drives Inclusive Growth, Jobs, and Economic Opportunity",
        presenter: "Ms. Vivian Bernice Mieze",
        role: "Senior Manager: FMC Core & Wireless Access, Telecom Namibia",
        time: "16:20",
        pages: 10,
        size: "480 KB",
      },
      {
        file: "day-1/ixp-namibia.pdf",
        title: "Internet Exchange Point Association of Namibia",
        presenter: "Mr. Marius Greeff",
        role: "Chairperson, Internet Exchange Point Association of Namibia",
        pages: 11,
        size: "570 KB",
      },
    ],
  },
  {
    id: "day-2",
    label: "Day 2",
    date: "Tuesday, 13 October",
    shortDate: "13 Oct",
    presentations: [
      {
        file: "day-1/amugongo-keynote.pdf",
        title: "Guest Speaker Address: Harnessing ICT for Inclusive Growth",
        presenter: "Dr. Mbangula Lameck Amugongo",
        role: "Technologist, Researcher and AI Expert",
        time: "09:30",
        pages: 22,
        size: "1.2 MB",
      },
      {
        file: "day-2/nam-csirt-social-engineering.pdf",
        title: "NAM-CSIRT Social Engineering Awareness",
        presenter: "Ms. Cornelia Shipindo",
        role: "Executive, NAM-CSIRT",
        time: "09:50",
        pages: 20,
        size: "1.7 MB",
      },
      {
        file: "day-2/minister-keynote.pdf",
        title: "Keynote Address: Yes, Technology Can Fight Poverty",
        presenter: "Hon. Emma Inamutila Theofelus",
        role: "Minister of Information and Communication Technology",
        time: "10:40",
        pages: 16,
        size: "3.0 MB",
      },
      {
        file: "day-2/undp-digital-identity.pdf",
        title: "Namibia’s Digital Identity System: Global Lessons and Principles",
        presenter: "Ms. Amanda K. Serumaga",
        role: "Resident Representative, UNDP Namibia",
        time: "15:30",
        pages: 10,
        size: "200 KB",
      },
      {
        file: "day-2/nsa-ict-and-employment.pdf",
        title: "Mapping How ICT Adoption Is Transforming Employment in Namibia: Trends and Statistics, 2016–2025",
        presenter: "Ms. Linda Shitenga",
        role: "Manager: Welfare and Labour Statistics, Namibia Statistics Agency",
        time: "16:20",
        pages: 14,
        size: "260 KB",
      },
    ],
  },
  {
    id: "day-3",
    label: "Day 3",
    date: "Wednesday, 14 October",
    shortDate: "14 Oct",
    presentations: [
      {
        file: "day-3/itu-ai-automation.pdf",
        title: "AI and Automation: Protecting Low-Income Workers",
        presenter: "Dr. Halima Letamo",
        role: "ITU Area Representative for Southern Africa",
        time: "09:00",
        pages: 23,
        size: "200 KB",
      },
      {
        file: "day-3/nbc-conventional-broadcasting.pdf",
        title: "Sustaining Conventional Broadcasting in the Digital Era",
        presenter: "Ms. Nsinde Limbo",
        role: "Manager: Radio Services Administration, NBC",
        time: "10:20",
        pages: 17,
        size: "4.0 MB",
      },
      {
        file: "day-3/namwater-digital-water.pdf",
        title: "Digital Water: Leveraging ICT for Reliability, Inclusion and Growth",
        presenter: "Mr. Hosea Hashili",
        role: "Manager: Maintenance, Business Unit North-West, NamWater",
        time: "10:50",
        pages: 14,
        size: "1.7 MB",
      },
      {
        file: "day-3/nafuka-digital-health.pdf",
        title: "Who Answers When the System Fails a Patient? ICT for Telemedicine, Early Warning and Emergency Response",
        presenter: "Dr. Tuwilika Nafuka",
        role: "Namibian Medical Doctor and Chevening Scholar",
        time: "11:40",
        pages: 14,
        size: "190 KB",
      },
      {
        file: "day-3/eismac-electronic-transactions.pdf",
        title: "Driving Innovation, Trust and Inclusive Growth: The Role of the Electronic Transactions Act",
        presenter: "Dr. Anna Auguste Anghuwo-Iita",
        role: "Chairperson, Electronic Information Systems Management Advisory Council (EISMAC)",
        time: "12:40",
        pages: 15,
        size: "230 KB",
      },
      {
        file: "day-3/khachab-cybersecurity.pdf",
        title: "Cybersecurity Awareness Month: Don’t Make It Easy for Them",
        presenter: "Mr. Ernst Khachab",
        role: "Junior Empowerment Specialist, Salt Essential IT",
        time: "14:40",
        pages: 12,
        size: "280 KB",
      },
      {
        file: "day-3/multichoice-piracy-panel.pdf",
        title: "Introduction Remarks on a Panel Discussion: Content Piracy Is a Threat to Namibia’s Broadcasting and Content Ecosystem",
        presenter: "Mr. Roger Gertze",
        role: "Country CEO and Executive Board Member, MultiChoice",
        time: "15:40",
        pages: 19,
        size: "1.4 MB",
      },
    ],
  },
  {
    // Youth Day: the youth innovators' pitches, in the booklet's order.
    id: "day-4",
    label: "Day 4",
    date: "Thursday, 15 October",
    shortDate: "15 Oct",
    presentations: [
      {
        file: "day-4/hydrolink-water-monitor-pro.pdf",
        title: "Hydro-Link Water Monitor Pro: Water Readings, Clearer Decisions",
        presenter: "Tito Barnabas Pashukeni",
        role: "Chief Engineer and Director, Engenete Investment CC",
        time: "14:40–15:30",
        pages: 8,
        size: "240 KB",
      },
      {
        file: "day-4/medvault-one.pdf",
        title: "MedVault One: Patient Records That Travel with the Patient",
        presenter:
          "Douglas Mashonganyika, Farai Mashonganyika, Abisai Shiimi, Elizabeth Nuugonya and Johannes Martins",
        time: "14:40–15:30",
        pages: 7,
        size: "1.1 MB",
      },
      {
        file: "day-4/quotewise.pdf",
        title: "QuoteWise: Connecting Clients with Service Providers in Namibia",
        presenter: "Lasarus Shiyelekeni",
        time: "14:40–15:30",
        pages: 7,
        size: "150 KB",
      },
      {
        file: "day-4/sids-schools-information-system.pdf",
        title: "Schools Information & Data System (SIDS): Education Deserves a Connected Future",
        presenter: "Laurentius Haindaka",
        time: "14:40–15:30",
        pages: 7,
        size: "240 KB",
      },
      {
        file: "day-4/coree-business-system.pdf",
        title: "Coree: One Simple System to Run Your Whole Business",
        presenter: "David David",
        role: "Intellectual Technology",
        time: "14:40–15:30",
        pages: 9,
        size: "280 KB",
      },
      {
        file: "day-4/onenam.pdf",
        title: "OneNam: A National Offline-Capable Digital Gateway and Knowledge Network",
        presenter: "Erwin Ngulonda",
        time: "14:40–15:30",
        pages: 10,
        document: true,
        size: "700 KB",
      },
      {
        file: "day-4/facial-ai-verification.pdf",
        title: "Facial AI Verification Platform: Consent-Based, One-to-One Identity Verification",
        time: "14:40–15:30",
        pages: 12,
        size: "100 KB",
      },
      {
        file: "day-4/investa-investment-marketplace.pdf",
        title: "Investa: Namibia’s Digital Investment and Enterprise Marketplace",
        time: "14:40–15:30",
        pages: 6,
        size: "510 KB",
      },
    ],
  },
];

export const presentationUrl = (p: Presentation) => `/presentations-2026/${p.file}`;

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
