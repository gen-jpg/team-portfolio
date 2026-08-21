export type Project = {
  slug: string;
  title: string;
  clientType: string;
  summary: string;
  outcomes: string[];
  status: "published" | "coming-soon";
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: "facility-booking-mvp",
    title: "Facility Booking MVP",
    clientType: "Service business",
    summary:
      "A schedule-based booking flow with admin management, confirmation, and operational reporting—scoped as a practical first release.",
    outcomes: [
      "Clear timeslot availability",
      "Admin booking oversight",
      "MVP-ready launch path",
    ],
    status: "coming-soon",
    tags: ["Booking", "Admin portal"],
  },
  {
    slug: "retail-inventory-ops",
    title: "Retail Inventory Operations",
    clientType: "Retail",
    summary:
      "Centralized stock movement tracking with low-stock visibility and transaction history for day-to-day operations.",
    outcomes: [
      "Stock-in / stock-out workflows",
      "Low-stock monitoring",
      "Operational reports",
    ],
    status: "coming-soon",
    tags: ["Inventory", "Reporting"],
  },
  {
    slug: "custom-commerce-checkout",
    title: "Custom Commerce Checkout",
    clientType: "E-commerce",
    summary:
      "A product catalog and checkout experience tailored to the client's selling process, with room for payment integrations.",
    outcomes: [
      "Catalog and cart",
      "Order management foundation",
      "Payment-ready architecture",
    ],
    status: "coming-soon",
    tags: ["E-commerce", "Payments"],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
