export const brand = {
  name: "HABI³",
  placeholder: "by ASG",
  fullName: "HABI³ by ASG",
  initials: "H",
  siteUrl: "https://habibyasg.com",
  tagline: "From idea to working software.",
  competencies: [
    "Business Analysis",
    "Software Development",
    "Quality Assurance",
  ] as const,
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
] as const;

export const hero = {
  eyebrow: "Ideas · Planning · Development · Launch",
  headline: "Your Idea. Our Expertise. A System Built Around Your Business.",
  supporting:
    "We help businesses, organizations, and startups transform ideas and manual processes into reliable, custom-built software.",
  supportingExtra:
    "From requirements and MVP planning to development, QA, launch, and documentation—we work with you throughout the entire development journey.",
  primaryCta: "Discuss Your Project",
  secondaryCta: "Explore Our Services",
};

export const servicesIntro = {
  title: "More Than Just Development",
  body: "You don't need to come to us with complete technical requirements. Tell us about your business, your current process, or the problem you're trying to solve. We'll help you determine what should be built, what should be prioritized, and what can wait for a future version.",
};

export const services = [
  {
    id: "business-analysis",
    title: "Business Analysis",
    short:
      "We understand your requirements, analyze your processes, define your MVP, and translate your ideas into clear system requirements.",
    icon: "analyze" as const,
  },
  {
    id: "software-development",
    title: "Software Development",
    short:
      "We transform approved requirements into functional, maintainable, and scalable web-based systems.",
    icon: "build" as const,
  },
  {
    id: "quality-assurance",
    title: "Quality Assurance",
    short:
      "We independently test functionality, workflows, business rules, and real-world scenarios before your system reaches your users.",
    icon: "validate" as const,
  },
] as const;

export const documentationSupport = {
  title: "Documentation & Support",
  body: "We provide user documentation so your team knows how to operate the finished system—and stay available for walkthroughs, bug support, and future roadmap planning after launch.",
};

export const coreAdvantage = {
  title: "One Team. From Requirements to Release.",
  body: "Building software involves more than writing code. Our team combines three important disciplines—plus documentation—so delivery stays clear from start to finish.",
  pillars: [
    {
      label: "ANALYZE",
      title: "Business Analysis",
      body: "Before development, we make sure we understand what the business actually needs.",
    },
    {
      label: "BUILD",
      title: "Software Development",
      body: "Requirements are transformed into a working system using an appropriate technical approach.",
    },
    {
      label: "VALIDATE",
      title: "Quality Assurance",
      body: "The system is independently tested against the agreed requirements before release.",
    },
    {
      label: "DOCUMENT",
      title: "Documentation",
      body: "We provide user documentation so your team knows how to operate the finished system.",
    },
  ],
};

export type SolutionSlug =
  | "booking-systems"
  | "ecommerce"
  | "inventory-management"
  | "admin-portals"
  | "qr-barcode"
  | "payment-integration"
  | "custom-systems";

export const solutions = [
  {
    slug: "booking-systems" as const,
    title: "Booking & Reservation Systems",
    short:
      "For facilities, appointments, services, classes, events, rentals, and other schedule-based businesses.",
    features: [
      "Availability and timeslots",
      "Online reservations",
      "Payments",
      "Rescheduling and cancellation",
      "QR confirmation",
      "Admin booking management",
      "Customer booking history",
    ],
    featured: true,
    mockup: "booking" as const,
  },
  {
    slug: "ecommerce" as const,
    title: "E-Commerce Systems",
    short:
      "Custom online selling platforms built around your products, services, and business processes.",
    features: [
      "Product catalog",
      "Shopping cart",
      "Checkout",
      "Online payment",
      "Order management",
      "Inventory integration",
      "Discounts and vouchers",
      "Sales reports",
    ],
    featured: true,
    mockup: "ecommerce" as const,
  },
  {
    slug: "inventory-management" as const,
    title: "Inventory Management Systems",
    short:
      "Track products, supplies, stock movements, and inventory levels from one centralized system.",
    features: [
      "Stock-in / Stock-out",
      "SKU management",
      "Barcode scanning",
      "Inventory adjustments",
      "Low-stock monitoring",
      "Transaction history",
      "Inventory reports",
    ],
    featured: true,
    mockup: "inventory" as const,
  },
  {
    slug: "admin-portals" as const,
    title: "Admin & Management Portals",
    short: "Centralized dashboards for managing your day-to-day operations.",
    features: [
      "User management",
      "Role-based access",
      "Transactions",
      "Approvals",
      "Content management",
      "Reports",
      "System configurations",
      "Audit logs",
    ],
    featured: true,
    mockup: "admin" as const,
  },
  {
    slug: "qr-barcode" as const,
    title: "QR & Barcode Solutions",
    short:
      "Integrate QR codes and barcode scanning into your business workflow.",
    features: [
      "Admission",
      "Check-in",
      "Booking verification",
      "Product identification",
      "Inventory",
      "Attendance",
      "Membership verification",
    ],
    featured: false,
    mockup: "qr" as const,
  },
  {
    slug: "payment-integration" as const,
    title: "Online Payment Integration",
    short:
      "Integrate supported online payment solutions such as PayMongo into your system.",
    features: [
      "GCash",
      "QR Ph",
      "Card payments",
      "Booking payments",
      "E-commerce checkout",
      "Payment verification",
      "Transaction tracking",
    ],
    featured: false,
    mockup: "payments" as const,
  },
  {
    slug: "custom-systems" as const,
    title: "Custom Business Systems",
    short:
      "Have something different in mind? We can analyze your existing process and determine whether a custom software solution can simplify or automate it.",
    features: [
      "Process analysis",
      "MVP scoping",
      "Custom workflows",
      "Integrations",
      "Phased delivery",
    ],
    featured: false,
    mockup: "custom" as const,
  },
];

export const processPhases = [
  {
    title: "Pre-Development",
    body: "Consultation, requirements, MVP scope, and a clear proposal before coding begins.",
  },
  {
    title: "Development",
    body: "Milestone-based builds with progress updates and continuous requirements review.",
  },
  {
    title: "Quality Assurance",
    body: "Independent functional, workflow, and end-to-end testing before release.",
  },
  {
    title: "Documentation",
    body: "User manuals and walkthroughs so your team can operate the system confidently.",
  },
  {
    title: "Post-Launch Support",
    body: "Bug support within agreed terms, plus planning for future phases.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    summary: "Tell us your idea.",
    body: "We learn about your business, current process, problems, and goals.",
  },
  {
    number: "02",
    title: "Analyze",
    summary: "We turn it into requirements.",
    body: "We define users, workflows, business rules, and priorities.",
  },
  {
    number: "03",
    title: "Propose",
    summary: "We define your MVP.",
    body: "You receive the recommended scope, approach, timeline, and quotation.",
  },
  {
    number: "04",
    title: "Build",
    summary: "We develop your system.",
    body: "Development happens according to the approved requirements and milestones.",
  },
  {
    number: "05",
    title: "Test",
    summary: "We make sure it works.",
    body: "QA validates features, workflows, permissions, validations, and business rules.",
  },
  {
    number: "06",
    title: "Review",
    summary: "You test it too.",
    body: "The client performs User Acceptance Testing before final release.",
  },
  {
    number: "07",
    title: "Launch",
    summary: "Your system goes live.",
    body: "The approved MVP is deployed and prepared for actual use.",
  },
  {
    number: "08",
    title: "Support",
    summary: "We don't disappear after launch.",
    body: "Documentation, turnover, bug support, and future development planning can be provided.",
  },
];

export const preDevelopment = {
  title: "Before We Build",
  intro: "Every successful project starts with understanding the problem.",
  items: [
    {
      title: "Initial Consultation",
      body: "Tell us about your idea, current process, challenges, goals, and expected users.",
    },
    {
      title: "Software Consultation",
      body: "We provide recommendations from both business and development perspectives.",
    },
    {
      title: "Requirements Gathering",
      body: "We identify the users, workflows, business rules, and features needed by the system.",
    },
    {
      title: "MVP Scope Definition",
      body: "We help separate essential features from features that can wait for future phases.",
    },
    {
      title: "MVP Documentation",
      body: "Your proposed system can be documented before development begins—overview, objectives, roles, modules, features, rules, workflows, MVP scope, and future enhancements.",
    },
    {
      title: "System / User Flow",
      body: "We map important workflows so both sides understand how the system should operate.",
    },
    {
      title: "Proposal & Quotation",
      body: "Once the scope is clear, we provide the project scope, deliverables, estimated timeline, and pricing.",
    },
  ],
};

export const duringDevelopment = {
  title: "While We Build",
  items: [
    {
      title: "Milestone-Based Development",
      body: "Development can be divided into manageable milestones so progress is visible throughout the project.",
    },
    {
      title: "Progress Updates",
      body: "Clients receive updates on completed work, current development, and upcoming milestones.",
    },
    {
      title: "Requirements Review",
      body: "Features are continuously checked against the agreed business requirements.",
    },
    {
      title: "Dedicated QA Testing",
      body: "The system undergoes functional, workflow, validation, negative, regression, and end-to-end testing.",
    },
    {
      title: "Bug Tracking & Retesting",
      body: "Issues found during testing are documented, resolved, and verified before release.",
    },
    {
      title: "User Acceptance Testing",
      body: "The client reviews the system before final deployment.",
    },
  ],
};

export const postDevelopment = {
  title: "After We Build",
  intro: "Development doesn't simply end when the system goes live.",
  items: [
    {
      title: "User Manual",
      body: "Documentation explaining how administrators and users operate the system.",
    },
    {
      title: "System Walkthrough",
      body: "We can walk designated users or administrators through important functionality.",
    },
    {
      title: "MVP Bug Support",
      body: "A defined post-launch bug-fixing period can be included for functionality covered by the approved MVP scope.",
    },
    {
      title: "Future Roadmap",
      body: "Additional features can be planned as Phase 2 or future system improvements instead of forcing everything into the initial MVP.",
    },
  ],
};

export const whyUs = {
  title: "Small Team. Complete Development Process.",
  items: [
    {
      title: "Direct Communication",
      body: "You communicate directly with the people analyzing, developing, and testing your project.",
    },
    {
      title: "Business-First Approach",
      body: "We don't immediately start coding. We first understand what your business actually needs.",
    },
    {
      title: "Dedicated QA",
      body: "Development and testing are treated as separate responsibilities.",
    },
    {
      title: "Clear MVP Scope",
      body: "Know what you're paying for before development begins.",
    },
    {
      title: "Documentation Included",
      body: "Your team receives proper documentation for using the system.",
    },
    {
      title: "Budget-Conscious Development",
      body: "We help prioritize essential functionality instead of pushing unnecessary features into Version 1.",
    },
    {
      title: "Built for Growth",
      body: "Your MVP can serve as the foundation for future phases as your needs evolve.",
    },
  ],
};

export const audiences = {
  title: "Built for Growing Ideas",
  intro: "Our services can be suitable for:",
  items: [
    {
      title: "Small Businesses",
      body: "Digitize manual operations and manage processes more efficiently.",
    },
    {
      title: "Startups",
      body: "Turn a product idea into a practical MVP.",
    },
    {
      title: "Schools & Organizations",
      body: "Create internal management, tracking, registration, or administrative systems.",
    },
    {
      title: "Service-Based Businesses",
      body: "Manage bookings, schedules, customers, payments, and operations.",
    },
    {
      title: "Retail & E-Commerce Businesses",
      body: "Manage products, orders, inventory, payments, and customers.",
    },
    {
      title: "Entrepreneurs",
      body: "Have an idea but don't know where to start? We'll help you turn it into a structured software plan.",
    },
  ],
};

export const team = {
  title: "Meet the People Behind the Build",
  intro:
    "We are a small software development team focused on delivering practical, well-planned, and properly tested business systems.",
  cycle: "Business → Requirements → Development → Testing → Launch",
  members: [
    {
      name: "Arth",
      role: "Full-Stack Developer & Deployment Engineer",
      bio: "Specializes in full-stack development and deployment—building interfaces and application logic, implementing UI/UX designs, and shipping systems to production.",
      initials: "A",
      photo: "/images/team/arth.jpg",
      mbti: "INTP-T",
    },
    {
      name: "Shey",
      role: "Business Analyst & QA Engineer",
      bio: "Handles client requirements, business process analysis, MVP planning, functional documentation, QA testing, UAT support, and user documentation.",
      initials: "S",
      photo: "/images/team/sherl.jpg",
      mbti: "INFJ-T",
    },
    {
      name: "Gen",
      role: "Backend Systems & Integration Engineer",
      bio: "Handles technical planning, system architecture, backend development, database implementation, integrations, and technical support.",
      initials: "G",
      photo: "/images/team/gen.png",
      mbti: "INTJ-A",
    },
  ],
};

export const faq = [
  {
    question:
      "I have an idea but don't know the technical requirements. Can I still contact you?",
    answer:
      "Absolutely. Understanding the idea and translating it into requirements is part of our process.",
  },
  {
    question: "Can you improve an existing manual business process?",
    answer:
      "Yes. Show us how your current process works and what problems you're experiencing. We can recommend what could potentially be digitized or automated.",
  },
  {
    question: "Do you only accept complete system projects?",
    answer:
      "Not necessarily. Project feasibility and scope can be discussed during consultation.",
  },
  {
    question: "How much does a system cost?",
    answer:
      "Pricing depends on complexity, number of modules, integrations, timeline, and project requirements. We provide a quotation after understanding the required scope.",
  },
  {
    question: "Can we add more features later?",
    answer:
      "Yes. We encourage separating non-essential features into future phases instead of unnecessarily increasing the initial MVP.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Post-development bug support can be included according to the agreed project terms.",
  },
  {
    question: "Are hosting, domain, and third-party services included?",
    answer:
      "These are evaluated separately because costs depend on the project's infrastructure and third-party providers.",
  },
];

export const finalCta = {
  title: "Have an Idea? Let's See What We Can Build.",
  lines: [
    "You don't need a technical specification.",
    "You don't need to know what framework to use.",
    "You don't even need to know exactly what the final system should look like.",
  ],
  emphasis: "Start by telling us what you want to solve.",
  closing: "We'll help you figure out the rest.",
  primary: "Discuss Your Project",
  secondary: "Request a Consultation",
};

export function getSolutionBySlug(slug: string) {
  return solutions.find((s) => s.slug === slug);
}
