// Mobile apps for the Mobile section. Every highlight here is traceable to
// the app's own repo; keep it that way (these back job applications).

export type MobileApp = {
  name: string;
  status: "live" | "in-development";
  tagline: string;
  description: string;
  role?: string;
  icon?: string;
  site?: string;
  stores?: { label: "App Store" | "Google Play"; href: string }[];
  screenshots?: { src: string; alt: string }[];
  stats?: { value: string; label: string }[];
  highlights: string[];
  stack: string[];
};

export const wakabuddy: MobileApp = {
  name: "WakaBuddy",
  status: "live",
  tagline: "Walk more, together.",
  description:
    "A social walking app for iPhone and Android. It reads the steps the phone or watch already counts (Apple Health, Health Connect, Samsung Health) and turns them into friend leaderboards, challenges, weekly leagues, recorded walks, group chat and an AI coach.",
  role: "Built end to end: the app, its native modules, the API and the release pipeline.",
  icon: "/mobile/wakabuddy-icon.webp",
  site: "https://wakabuddy.xyz",
  stores: [
    { label: "App Store", href: "https://apps.apple.com/app/id6824891844" },
    {
      label: "Google Play",
      href: "https://play.google.com/store/apps/details?id=app.wakabuddy.mobile",
    },
  ],
  screenshots: [
    { src: "/mobile/wakabuddy-01-home.webp", alt: "WakaBuddy home: today's steps and the friends leaderboard" },
    { src: "/mobile/wakabuddy-02-walk.webp", alt: "WakaBuddy recording a walk" },
    { src: "/mobile/wakabuddy-06-wrapped.webp", alt: "WakaBuddy monthly recap" },
  ],
  stats: [
    { value: "2 stores", label: "Live on iOS & Android" },
    { value: "~5,000", label: "Lines of Swift & Kotlin" },
    { value: "155", label: "Test files in CI" },
  ],
  highlights: [
    "Five in-house native modules in Kotlin and Swift: an Android foreground step service with home-screen widgets, a HealthKit module that replaced an unmaintained library, and the Samsung Health partner SDK.",
    "iOS home-screen widgets and a Live Activity on the Dynamic Island for walks in progress, sharing data with the app through an App Group.",
    "Background sync and crash-safe GPS route recording; finished walks queue offline and upload when signal returns, and map tiles download for offline use.",
    "Over-the-air updates through EAS Update, guarded by a native-fingerprint check that refuses to publish when native code has changed.",
    "In-app subscriptions with RevenueCat, verified deep links on both platforms, and Play Integrity checks at sign-in.",
    "Jest tests run in CI, with accessibility labels, roles and reduced-motion support throughout the app.",
  ],
  stack: [
    "React Native",
    "Expo",
    "TypeScript",
    "Swift",
    "Kotlin",
    "Expo Router",
    "TanStack Query",
    "MapLibre",
    "RevenueCat",
    "Sentry",
    "NestJS",
    "Postgres",
  ],
};

export const otherApps: MobileApp[] = [
  {
    name: "Aiido",
    status: "in-development",
    tagline: "Wedding planning, in your pocket.",
    description:
      "The mobile app for Aiido's wedding-planning platform for Nigerian couples and their vendors: budgets, vendor discovery, bookings and payments, messaging and RSVPs, with separate couple and vendor sides.",
    highlights: [
      "Paystack checkout in an in-app browser session that hands back to the app by deep link.",
      "Silent token refresh that runs one refresh at a time and rotates tokens.",
      "Push notifications that open the right screen, and data that refetches on reconnect and app focus.",
    ],
    stack: ["React Native", "Expo", "Expo Router", "TanStack Query", "TypeScript", "NestJS", "Prisma"],
  },
];
