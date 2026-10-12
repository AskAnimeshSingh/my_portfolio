export const profile = {
  name: "Animesh Singh",
  email: "askanimeshsingh@gmail.com",
  phone: "+91 87950 87016",
  location: "Delhi",
  resume: "/Animesh_Singh_2025..pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/AskAnimeshSingh" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/askanimeshsingh/" },
  ],
  education: {
    degree: "B.Tech, Computer Science & Engineering",
    school: "Babu Banarasi Das University, Lucknow",
    years: "2019 — 2023",
    courses: ["Data Structures", "Algorithms", "DBMS", "OOP", "Computer Networks", "Machine Learning"],
  },
}

export const stats = [
  { value: 2, suffix: "+", label: "Years shipping production code" },
  { value: 20, suffix: "+", label: "Client projects delivered" },
  { value: 5, suffix: "+", label: "Payment gateways integrated" },
  { value: 300, suffix: "+", label: "DB tables across shipped schemas" },
]

export const experience = [
  {
    company: "Xcrino Business Solutions Pvt. Ltd.",
    role: "React & Laravel Developer",
    period: "Oct 2024 — Present",
    location: "Delhi",
    type: "Full-time",
    summary:
      "Building and maintaining client products end-to-end — from database design and Laravel APIs to React and Blade interfaces — across ride-hailing, delivery, services marketplaces, charity and education.",
    points: [
      "Built booking & fare engines with automated driver assignment and payouts",
      "Integrated Stripe, PayPal, Razorpay, HitPay and Visa CyberSource payment flows",
      "Designed domain-driven, versioned APIs consumed by customer and rider apps",
      "Designed role-based auth with Laravel middleware and per-role dashboards",
      "Shipped transactional email & notification pipelines for bookings and approvals",
      "Built responsive, animated UIs in React, Tailwind CSS and Bootstrap",
      "Deployed and maintained Laravel apps on cPanel / Linux servers",
    ],
    stack: ["Laravel", "React", "MySQL", "Stripe", "PayPal", "Razorpay", "Tailwind CSS"],
  },
  {
    company: "Cosmo Info Solutions",
    role: "Software Development Engineer",
    period: "May 2024 — Oct 2024",
    location: "Lucknow",
    type: "Full-time",
    summary:
      "Focused on authentication architecture and internal dashboards — making sure every user lands exactly where their role allows.",
    points: [
      "Architected a multi-user login system with role-based middleware",
      "Implemented dashboard redirection per role (super-admin, admin, user)",
      "Built a Super-Admin approval workflow for admin permissions",
      "Designed email notifications for a car-rental approval pipeline",
      "Developed the company portal UI for internal dashboard management",
    ],
    stack: ["Laravel", "PHP", "React", "MySQL", "JavaScript"],
  },
]

export const stack = [
  {
    title: "Backend",
    blurb: "Where most of my hours go — data models, business rules, auth and the APIs that tie it together.",
    items: [
      { name: "Laravel", note: "Eloquent · queues · policies" },
      { name: "PHP 8", note: "OOP · Composer" },
      { name: "Node.js", note: "Express · REST" },
      { name: "REST APIs", note: "Sanctum · JWT" },
      { name: "Middleware & RBAC", note: "multi-role guards" },
      { name: "Cron & Queues", note: "scheduled jobs" },
    ],
  },
  {
    title: "Frontend",
    blurb: "Interfaces that feel considered: clear hierarchy, responsive by default, motion that explains state.",
    items: [
      { name: "React", note: "hooks · context" },
      { name: "Next.js", note: "App Router" },
      { name: "TypeScript", note: "strict types" },
      { name: "Tailwind CSS", note: "design tokens" },
      { name: "Framer Motion", note: "scroll & layout" },
      { name: "Blade · Bootstrap", note: "server-rendered UI" },
    ],
  },
  {
    title: "Data",
    blurb: "Schemas designed around how the business actually works — relations first, screens second.",
    items: [
      { name: "MySQL", note: "indexes · joins" },
      { name: "PostgreSQL", note: "relational" },
      { name: "MongoDB", note: "documents" },
      { name: "Migrations", note: "versioned schema" },
      { name: "Reporting", note: "aggregations · exports" },
      { name: "PDF & Excel", note: "DomPDF · exports" },
    ],
  },
  {
    title: "Integrations",
    blurb: "The third-party glue real products need — payments, messaging, mail and AI.",
    items: [
      { name: "Stripe", note: "payment intents" },
      { name: "PayPal", note: "Omnipay" },
      { name: "Razorpay · HitPay", note: "webhooks" },
      { name: "SMTP · Mailers", note: "transactional" },
      { name: "Pusher · SMS OTP", note: "realtime · verify" },
      { name: "OpenAI / LLMs", note: "AI features" },
    ],
  },
  {
    title: "Tooling",
    blurb: "The workflow around the code — versioning, testing endpoints, deploying and designing.",
    items: [
      { name: "Git & GitHub", note: "branching · PRs" },
      { name: "Postman", note: "API testing" },
      { name: "cPanel · Linux", note: "deployments" },
      { name: "Docker", note: "local envs" },
      { name: "Figma", note: "UI design" },
      { name: "XAMPP", note: "local PHP stack" },
    ],
  },
]

export type Project = {
  slug: string
  title: string
  client: string
  category: string
  year: string
  role: string
  url?: string
  accent: string
  summary: string
  stack: string[]
  metrics?: { label: string; value: string }[]
  backend: {
    flow: string[]
    modules: string[]
    tables: string[]
    highlights: { title: string; detail: string }[]
  }
  design: string[]
}

const situcka: Project = {
  slug: "situcka",
  title: "SituckaGO",
  client: "Delivery super-app, Equatorial Guinea",
  category: "Super-app · Web + 2 Mobile APIs",
  year: "2026",
  role: "Lead backend developer",
  url: "https://situcka.xcrinogroup.com",
  accent: "#ff4fd8",
  summary:
    "One platform for food, groceries, parcels, errands and bill payments — a customer web app plus versioned APIs for the customer and rider apps, priced in XAF and built domain-by-domain.",
  stack: ["Laravel 12", "Sanctum", "Spatie Permission", "CyberSource", "CinetPay", "MySQL", "AWS S3", "OpenAPI"],
  metrics: [
    { label: "Domains", value: "20" },
    { label: "Models", value: "63" },
    { label: "Controllers", value: "93" },
    { label: "Migrations", value: "129" },
  ],
  backend: {
    flow: ["Order / task", "Pricing (XAF)", "Rider assignment", "Status + SLA timers", "OTP handover"],
    modules: [
      "Food & grocery ordering",
      "Parcel & errands",
      "Bill payments",
      "Dynamic service catalogue",
      "Rider & driver task APIs",
      "CyberSource Unified Checkout",
      "Vendor panel",
      "Promotions & reviews",
      "Support tickets & chat",
      "Push broadcasts",
      "Translatable CMS",
      "Reporting",
    ],
    tables: ["orders", "parcels", "bill_payment_requests", "vendors", "products", "carts", "drivers", "payments", "promotions", "reviews", "support_tickets", "push_broadcasts"],
    highlights: [
      {
        title: "Domain-driven layout",
        detail:
          "Code is split into 20 bounded domains — Ordering, Parcel, Fulfilment, Payments, Identity, Vendors… — each owning its models, services and controllers.",
      },
      {
        title: "Parcel & errands engine",
        detail:
          "Admin-defined service types decide which fields are required; the system prices the job, assigns a rider, runs SLA timers and closes it only on recipient OTP.",
      },
      {
        title: "PCI-light payments",
        detail:
          "Integrated Visa CyberSource Unified Checkout via BGFI Bank as pilot merchant — hosted card entry with 3-D Secure, Apple Pay and Google Pay, no card data stored.",
      },
      {
        title: "API contract first",
        detail:
          "A single response envelope and money object ({ minor, amount, currency }) across endpoints, documented in OpenAPI with Postman collections for the mobile teams.",
      },
    ],
  },
  design: [
    "Customer web hub for food, groceries, parcels and bills in one flow",
    "English / Spanish content with localized slugs and per-user locale",
    "Display-currency switching on top of XAF base pricing",
  ],
}

const serveu: Project = {
  slug: "serveu-today",
  title: "ServeUToday",
  client: "On-demand services marketplace",
  category: "Marketplace · Web + API",
  year: "2026",
  role: "Full-stack developer",
  url: "https://serveu.xcrinogroup.com",
  accent: "#ff8a3d",
  summary:
    "A marketplace where partners list services across verticals with their own branches, calendars and pricing, and customers book, chat, pay and review — modernised to Laravel 13 on PHP 8.4.",
  stack: ["Laravel 13", "PHP 8.4", "Sanctum", "Stripe", "Razorpay", "Apple Sign-in", "FCM", "Playwright"],
  metrics: [
    { label: "Migrations", value: "105" },
    { label: "Models", value: "70+" },
    { label: "Panels", value: "3" },
    { label: "Ledger jobs", value: "2" },
  ],
  backend: {
    flow: ["Partner onboarding", "Branch + calendar", "Booking request", "Wallet ledger", "Review & payout"],
    modules: [
      "Partner OTP onboarding",
      "Branches & calendars",
      "Bookings & urgent services",
      "Subscription plans (web + iOS)",
      "Partner wallets",
      "Ledger backfill & reconcile",
      "Chat & conversations",
      "Reviews with votes",
      "Products & delivery",
      "Notifications (in-app, email, push)",
    ],
    tables: ["bookings", "request_bookings", "plansubscriptions", "partner_wallets", "wallet_transactions", "vendor_services", "branches", "calendars", "conversations", "reviews", "orders"],
    highlights: [
      {
        title: "Trustworthy money",
        detail:
          "Partner wallets run on a transaction ledger with dedicated BackfillLedger and ReconcileLedger commands, so balances can always be rebuilt and audited.",
      },
      {
        title: "Subscription lifecycle",
        detail: "Scheduled commands expire and maintain partner plans across web and iOS in-app purchase tiers.",
      },
      {
        title: "Platform upgrade",
        detail:
          "Moved the app to Laravel 13 / PHP 8.4, including a hand-built Windows PHP runtime, and documented a safe MariaDB 11.4 migration path with verified dumps.",
      },
      {
        title: "Notification system",
        detail:
          "Designed one writer for in-app, email and push across admin, partner and customer — a missing template can never abort a booking write.",
      },
    ],
  },
  design: [
    "Rebuilt the front end on Bootstrap 5 with shared Blade components",
    "Per-vertical partner profiles and service pages",
    "Unified header notifications for all three panels",
  ],
}

const photoseasons: Project = {
  slug: "photoseasons",
  title: "PhotoSeasons",
  client: "International photo competitions",
  category: "Platform · AI + Payments",
  year: "2026",
  role: "Full-stack developer",
  url: "https://photoseasons.com",
  accent: "#f472b6",
  summary:
    "A FIAP-style photography competition platform with paid entries, a jury scoring panel, AI-assisted shortlisting, certificates, a print marketplace and automated photographer payouts.",
  stack: ["Laravel", "MySQL", "OpenAI Vision", "Stripe", "PayPal", "Socialite", "DomPDF", "Leaflet"],
  metrics: [
    { label: "Migrations", value: "119" },
    { label: "Models", value: "85" },
    { label: "Controllers", value: "70" },
    { label: "Panels", value: "3" },
  ],
  backend: {
    flow: ["Paid entry", "AI vision analysis", "AI shortlist", "Jury scoring", "Results + payouts"],
    modules: [
      "Competitions & categories",
      "Entry payments",
      "OpenAI Vision analysis",
      "AI shortlist command",
      "Jury panel & calibration",
      "Certificate templates",
      "Print marketplace",
      "Finance & payouts",
      "Localization",
      "Admin RBAC",
    ],
    tables: ["competitions", "competition_entries", "competition_results", "jury_scores", "certificate_templates", "orders", "payouts", "admin_roles", "translations"],
    highlights: [
      {
        title: "AI in the jury loop",
        detail:
          "Every entry is analysed by an OpenAI vision model (model configurable from admin); a scheduled command applies an AI shortlist the human jury then scores and calibrates.",
      },
      {
        title: "Competition lifecycle",
        detail: "Entries open → close → judged → announced; a scheduled job closes competitions after announcement and issues PDF certificates.",
      },
      {
        title: "Money out, not just in",
        detail: "Stripe and PayPal webhooks for entries and sales, plus a ProcessPayouts command that settles photographer earnings.",
      },
    ],
  },
  design: [
    "Gallery-first public site with lightbox viewing and map-based locations",
    "Dedicated jury workspace for fast scoring and shortlists",
    "Full translation layer captured from the views",
  ],
}

const vissatputai: Project = {
  slug: "vissatputai",
  title: "Vissatputai",
  client: "Latvian holiday marketplace",
  category: "Travel · AI marketplace",
  year: "2026",
  role: "Full-stack developer",
  url: "https://vissatputai.lv",
  accent: "#38bdf8",
  summary:
    "A holiday and accommodation marketplace for Latvia where vendors list stays and packages on subscription — with AI search, AI-written listings and blogs, and multilingual content.",
  stack: ["Laravel", "MySQL", "OpenAI API", "Stripe Billing", "Google Translate", "Leaflet", "Mapbox"],
  metrics: [
    { label: "Controllers", value: "76" },
    { label: "Cron jobs", value: "10" },
    { label: "AI features", value: "5" },
    { label: "Languages", value: "Multi" },
  ],
  backend: {
    flow: ["Vendor subscribes", "AI listing copy", "Geo + catalog", "AI search / chat", "Booking + invoice"],
    modules: [
      "Vendor subscriptions",
      "Auto-renewal & checks",
      "Listings & packages",
      "AI catalog search",
      "AI chat assistant",
      "AI descriptions, blogs & tags",
      "Bookings & invoices",
      "Inquiries & reviews",
      "Regions & municipalities",
      "Sitemap & SEO",
    ],
    tables: ["listings", "packages", "vendor_subscriptions", "bookings", "invoices", "inquiries", "reviews", "regions", "municipalities", "activity_logs"],
    highlights: [
      {
        title: "One AI service",
        detail:
          "A single OpenAI service exposes plain and strict-JSON completions with tuned temperature, token and timeout budgets — reused by search, chat, listing copy and blog generation.",
      },
      {
        title: "Subscription engine",
        detail: "Stripe Billing with webhook sync; scheduled commands auto-renew vendors, check expiries and nudge users who haven't listed yet.",
      },
      {
        title: "Built for search engines",
        detail: "Generated sitemaps, localized content and fixed geodata keep thousands of listings crawlable and on the map.",
      },
    ],
  },
  design: ["Map-led discovery with Leaflet / Mapbox", "AOS-animated landing pages and region guides", "Latvian-first UI with translation tooling"],
}

const school: Project = {
  slug: "school-saas",
  title: "Multi-School ERP",
  client: "Education SaaS",
  category: "SaaS · Multi-tenant",
  year: "2025",
  role: "Laravel developer",
  accent: "#4ade80",
  summary:
    "Customised and extended a large modular school ERP for multi-school use — a super-admin manages schools, packages and school admins while each school runs its own academics, staff, fees and exams.",
  stack: ["Laravel 10", "Passport", "Sanctum", "Laravel Modules", "Stripe", "PayPal", "Pusher", "MySQL"],
  metrics: [
    { label: "Modules", value: "16" },
    { label: "Tenancy", value: "Multi" },
    { label: "Gateways", value: "5+" },
    { label: "PWA", value: "✓" },
  ],
  backend: {
    flow: ["Super admin", "Create school", "Assign package", "School admin", "Academics & staff"],
    modules: [
      "School onboarding",
      "Packages & subscriptions",
      "Role permissions",
      "Classes, sections & subjects",
      "Fees & wallet",
      "Exam planning",
      "Lessons & study material",
      "Chat",
      "Two-factor auth",
      "Bulk printing",
      "Absence notifications",
    ],
    tables: ["sm_schools", "packages", "subscriptions", "sm_classes", "sm_sections", "sm_subjects", "sm_staffs", "sm_students", "fees_invoices"],
    highlights: [
      {
        title: "Tenant scoping",
        detail: "Every academic and staff write is bound to the signed-in user's school_id, keeping each school's data isolated.",
      },
      {
        title: "Flow audit",
        detail:
          "Audited the super-admin → school → package → admin flow end-to-end and mapped the gaps (school creation wizard, package-based limits) into a fix plan.",
      },
    ],
  },
  design: ["Module-based admin with per-role menus", "Installable PWA for staff and parents"],
}

const caseStudies: Project[] = [
  {
    slug: "goeasy-rides",
    title: "GoEasy Rides",
    client: "Ride-hailing & limousine platform",
    category: "Mobility · API + Admin",
    year: "2025",
    role: "Backend & admin developer",
    url: "https://goeasyrides.com",
    accent: "#d4ff3a",
    summary:
      "The backend, dispatch console and REST API behind a taxi service's customer and driver apps — later forked into a Stripe-powered limousine product with driver payouts.",
    stack: ["Laravel", "Sanctum", "MySQL", "Stripe", "Queues", "Tailwind", "Alpine.js"],
    metrics: [
      { label: "Controllers", value: "100+" },
      { label: "Tables", value: "49" },
      { label: "Client apps", value: "2" },
      { label: "Fare models", value: "4" },
    ],
    backend: {
      flow: ["App request", "Sanctum auth", "Zone + fare engine", "Driver matching", "Trip & wallet"],
      modules: [
        "Dispatch console",
        "Trip requests",
        "Zones & fares",
        "Airport / stop fares",
        "Driver matching cron",
        "Customer & driver wallets",
        "Driver payouts",
        "Stripe payment intents",
        "Complaints & SOS",
        "Role / module permissions",
      ],
      tables: [
        "trips",
        "trip_requests",
        "driver_trip_requests",
        "zones",
        "fare_settings",
        "airport_fare_settings",
        "reservation_prices",
        "admin_commissions",
        "driver_wallets",
        "driver_withdraws",
        "stripe_payments",
        "driver_payout_requests",
      ],
      highlights: [
        {
          title: "Driver matching",
          detail:
            "Ride requests fan out to nearby drivers; a scheduled AcceptRejectCron expires unanswered offers and re-dispatches so no trip is left hanging.",
        },
        {
          title: "Fare engine",
          detail:
            "Zone-based pricing with separate airport, stop and reservation rules, minimum fare and admin commission — all configurable from the console.",
        },
        {
          title: "Pay-after-ride",
          detail:
            "Driver marks trip complete → backend creates a Stripe PaymentIntent → app confirms the card → backend verifies and notifies the driver.",
        },
        {
          title: "Payouts",
          detail:
            "Driver earnings roll into wallets; payout requests flow through admin approval with status emails and Excel exports.",
        },
      ],
    },
    design: [
      "Tailwind admin built around a live dispatch view",
      "Dense data tables for trips, requests and wallets with clear status chips",
      "API documented for the mobile team with full payment-flow guides",
    ],
  },
  {
    slug: "7states-cars",
    title: "7States Cars",
    client: "UAE car marketplace",
    category: "Marketplace · Web + Mobile API",
    year: "2025",
    role: "Full-stack developer",
    url: "https://7statecars.ae",
    accent: "#ff6b3d",
    summary:
      "A classifieds marketplace where private sellers and dealers list new and used cars, and buyers search, compare, chat and get an instant valuation.",
    stack: ["Laravel", "MySQL", "Sanctum", "Stripe", "PayPal", "Pusher", "Socialite", "Swiper"],
    metrics: [
      { label: "Controllers", value: "125" },
      { label: "Tables", value: "67" },
      { label: "Gateways", value: "5" },
      { label: "Cron jobs", value: "3" },
    ],
    backend: {
      flow: ["Listing", "Admin review", "Boost package", "Search & compare", "Buyer chat"],
      modules: [
        "Listings & specs",
        "Search / compare",
        "Value-my-car",
        "Boost & featured ads",
        "Ad packages & wallet",
        "Buyer ↔ seller chat",
        "Support tickets",
        "Google / Apple login",
        "SMS OTP",
        "Role-permission matrix",
      ],
      tables: [
        "cars",
        "user_packages",
        "package_advantages",
        "wallets",
        "transactions",
        "conversation_threads",
        "messages",
        "support_tickets",
        "admin_role_permissions",
        "three_d_images",
        "payment_providers",
      ],
      highlights: [
        {
          title: "Monetisation",
          detail:
            "Sellers buy ad packages or boosts through Stripe, PayPal or Razorpay; scheduled jobs expire, re-feature and re-activate premium listings automatically.",
        },
        {
          title: "Three surfaces, one core",
          detail:
            "Controllers split into admin, web and customer (mobile API) namespaces sharing the same models and policies.",
        },
        {
          title: "Realtime messaging",
          detail: "Buyer–seller threads backed by Pusher, with click / call / favourite counters feeding seller leads.",
        },
        {
          title: "Configurable ops",
          detail: "Mail, Pusher, social login and payment gateways are all switchable from admin settings — no redeploys.",
        },
      ],
    },
    design: [
      "Hero, brand carousel and Swiper testimonials — all editable from the CMS",
      "Side-by-side compare view and gallery-led car detail pages",
      "Seller dashboard for ads, leads and saved cars",
    ],
  },
  {
    slug: "muhammadiyah",
    title: "Muhammadiyah SG",
    client: "Charity & donations, Singapore",
    category: "Non-profit · Web + Mobile API",
    year: "2025",
    role: "Laravel developer",
    url: "https://app.muhammadiyah.org.sg/",
    accent: "#3dd6c4",
    summary:
      "Donation and crowdfunding portal plus mobile-app backend for the Muhammadiyah Association — campaigns, recurring giving, paid events and tax receipts.",
    stack: ["Laravel", "MySQL", "HitPay", "Sanctum", "Spatie Permission", "DomPDF", "AWS S3"],
    metrics: [
      { label: "Controllers", value: "89" },
      { label: "Mailables", value: "20" },
      { label: "Gateways", value: "3" },
      { label: "Home layouts", value: "4" },
    ],
    backend: {
      flow: ["Donor", "Campaign", "HitPay checkout", "Webhook verify", "Receipt + tax log"],
      modules: [
        "Causes & campaigns",
        "Recurring donations",
        "Paid events",
        "Rewards & redemption",
        "Tax receipts",
        "User campaigns & withdrawals",
        "Support desk",
        "Form builder",
        "Apple sign-in",
      ],
      tables: ["causes", "cause_logs", "recurings", "donation_withdraws", "rewards", "reward_redeems", "tax_logs", "events", "event_payment_logs"],
      highlights: [
        {
          title: "HitPay integration",
          detail: "Customised the HitPay gateway for Singapore donors, including webhook verification and fixes for edge-case payment states.",
        },
        {
          title: "Recurring giving",
          detail: "A monthly cron charges recurring pledges, logs each cycle and emails donors their receipts.",
        },
        {
          title: "Tax-ready receipts",
          detail: "Every donation writes a tax log and a PDF receipt donors can download from their dashboard.",
        },
      ],
    },
    design: [
      "Multiple homepage layouts with sliders and animated counters",
      "Campaign pages with progress, updates and supporter comments",
      "Mobile-first donation flow mirrored in the native app",
    ],
  },
  {
    slug: "edunet-forms",
    title: "EduNet Forms",
    client: "AI form builder",
    category: "Product · AI + SaaS",
    year: "2026",
    role: "Solo — design & engineering",
    accent: "#a78bfa",
    summary:
      "A Typeform-style builder where forms are dragged together, generated from a prompt by an LLM, or imported from Word / Excel — then published or embedded anywhere.",
    stack: ["Laravel 12", "Livewire 3", "Alpine.js", "Tailwind 4", "OpenAI API", "MySQL 8", "Docker"],
    metrics: [
      { label: "Input modes", value: "3" },
      { label: "Queued jobs", value: "2" },
      { label: "Tables", value: "6" },
      { label: "CI", value: "GH Actions" },
    ],
    backend: {
      flow: ["Prompt / file", "Queued job", "LLM → JSON schema", "Rule builder", "Publish /f/slug"],
      modules: ["Drag-and-drop builder", "AI generation", "DOCX / XLSX import", "Schema validation", "Versioning", "Templates", "Embeds & QR", "Submissions"],
      tables: ["forms", "form_versions", "form_submissions", "ai_generations", "form_imports", "form_templates"],
      highlights: [
        {
          title: "Schema as source of truth",
          detail: "Every form is a JSON schema; the canvas, public renderer and validator all read from it, so they can never drift.",
        },
        {
          title: "Server-side rules",
          detail: "A SchemaRuleBuilder compiles the schema into Laravel validation rules at submit time.",
        },
        {
          title: "AI with a fallback",
          detail: "Generation runs on a queue against any OpenAI-compatible API, with a heuristic generator when the model is unavailable.",
        },
      ],
    },
    design: [
      "Sortable drag-and-drop canvas with a raw JSON toggle for power users",
      "Clean, distraction-free public fill page",
      "Design decisions documented in a DECISIONS.md log",
    ],
  },
  {
    slug: "ims-service",
    title: "IMS Service ERP",
    client: "Equipment sales & service business",
    category: "ERP · SPA + API",
    year: "2025",
    role: "Full-stack developer",
    accent: "#60a5fa",
    summary:
      "An inventory, POS and service ERP extended with complaint handling, preventive-maintenance scheduling and a field-engineer portal.",
    stack: ["Laravel", "Passport", "Vue 2", "Vuex", "ECharts", "MySQL", "DomPDF"],
    metrics: [
      { label: "Tables", value: "91" },
      { label: "Controllers", value: "85" },
      { label: "Apps", value: "2" },
      { label: "Modules", value: "HRM+" },
    ],
    backend: {
      flow: ["Complaint", "Service allocation", "Engineer notified", "Parts used", "Invoice / challan"],
      modules: ["Complaints & call types", "PPM scheduling", "Engineer portal", "Warehouses & transfers", "Quotations & proformas", "Delivery challans", "HRM & payroll", "Role permissions"],
      tables: ["complaints", "complaint_parts_items", "service_allocations", "delivery_challans", "proforma_invoices", "quotations", "sales", "purchases", "payrolls"],
      highlights: [
        {
          title: "Service workflow",
          detail: "Complaints are typed, allocated to engineers and closed with the parts consumed — stock adjusts automatically.",
        },
        {
          title: "Indian paperwork",
          detail: "Added quotations, proforma invoices and delivery challans with PDF output on top of the core sales flow.",
        },
      ],
    },
    design: ["Vue SPA with dark mode and ECharts dashboards", "Print-ready PDF documents"],
  },
  {
    slug: "lite-pos",
    title: "Lite POS",
    client: "Retail chain, multi-store",
    category: "Retail · POS + Inventory",
    year: "2024",
    role: "Laravel developer",
    accent: "#fbbf24",
    summary:
      "Point-of-sale and stock system for a retail chain — a central warehouse feeding many shops, each with its own POS, credit ledger and reports.",
    stack: ["Laravel 8", "Livewire", "MySQL", "DataTables", "Barcode", "PhpSpreadsheet"],
    metrics: [
      { label: "Roles", value: "3" },
      { label: "Controllers", value: "62" },
      { label: "Exports", value: "Excel" },
      { label: "Barcodes", value: "✓" },
    ],
    backend: {
      flow: ["Purchase", "Warehouse", "Transfer to shop", "POS sale", "Khata / reports"],
      modules: ["POS & quick sale", "Warehouse → shop transfers", "Barcode printing", "Khata credit ledger", "Gift vouchers & member cards", "Staff attendance", "Payouts & collections"],
      tables: ["khata_transactions", "quick_sales", "payment_collections", "payouts", "admin_wallets", "warehouse_to_shop"],
      highlights: [
        {
          title: "Three-role model",
          detail: "Admin, storekeeper and shop users each get scoped screens and stock views over the same inventory.",
        },
        {
          title: "Khata ledger",
          detail: "Digital version of the Indian credit book — running balances per customer with collections and transactions.",
        },
      ],
    },
    design: ["Fast keyboard-first POS screen", "Barcode and invoice print layouts"],
  },
]

const bySlug = (slug: string) => caseStudies.find((p) => p.slug === slug)!

export const projects: Project[] = [
  bySlug("goeasy-rides"),
  situcka,
  photoseasons,
  serveu,
  vissatputai,
  bySlug("7states-cars"),
  bySlug("muhammadiyah"),
  bySlug("edunet-forms"),
  school,
]

export const otherProjects: { title: string; kind: string; note: string; stack: string[] }[] = [
  {
    title: "Car On Call Limousine",
    kind: "Operations platform",
    note: "Invite-only B2B limo ops for Dubai — dispatch, captain permits, fleet depreciation & Salik, investor statements, VAT invoicing, payroll and 23 scheduled jobs.",
    stack: ["Laravel", "Cron"],
  },
  {
    title: "Sanket Staffing ERP",
    kind: "ERP",
    note: "Manpower outsourcing ERP — quotations, rosters, payroll, visa tracking with deadline reminders, vendor contracts, insurance claims and double-entry finance with client/agent/vendor portals.",
    stack: ["Laravel", "Excel"],
  },
  {
    title: "NAEUME Restaurant POS",
    kind: "Hospitality",
    note: "Online + QR table ordering, multi-terminal POS, kitchen bump screen, delivery-boy app, recipes & stock, loyalty and Razorpay / PhonePe payments.",
    stack: ["Laravel", "JWT"],
  },
  {
    title: "Vaishvik Welfare Foundation",
    kind: "NGO · live",
    note: "Donation site and member portal sharing one database — Razorpay donations, membership packages, referrals, event registration and certificate requests.",
    stack: ["Laravel", "Razorpay"],
  },
  {
    title: "IMS Service ERP",
    kind: "ERP",
    note: "Inventory, POS and service ERP extended with complaints, preventive-maintenance scheduling, delivery challans and a field-engineer portal.",
    stack: ["Laravel", "Vue"],
  },
  {
    title: "Lite POS",
    kind: "Retail",
    note: "Multi-store POS with warehouse-to-shop transfers, barcode printing and a digital khata credit ledger for three user roles.",
    stack: ["Laravel", "Livewire"],
  },
  {
    title: "Multi-vendor Marketplace",
    kind: "E-commerce",
    note: "Admin, vendor, rider and customer panels; added delivery riders, pickup points and service areas plus SMTP deliverability fixes.",
    stack: ["Laravel", "Stripe"],
  },
  {
    title: "CosmoNet",
    kind: "Social network",
    note: "Business community portal with custom trade-fair, courier, domain-bidding, company directory and CV-builder modules.",
    stack: ["PHP", "MySQL"],
  },
  {
    title: "Bulk Mailer",
    kind: "Personal tool",
    note: "CSV-imported contacts, queued jobs per email, SMTP settings and send logs — built to automate my own job applications.",
    stack: ["Laravel", "Queues"],
  },
]
