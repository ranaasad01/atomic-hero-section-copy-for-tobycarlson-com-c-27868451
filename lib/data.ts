export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

export const APP_NAME = "Toby Carlson";
export const APP_TAGLINE =
  "Exploring the edge of innovation, transforming bold ideas into technologies that shape tomorrow.";
export const APP_URL = "https://tobycarlson.com";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Projects", href: "/projects" },
  { label: "Articles", href: "/articles" },
  { label: "Videos", href: "/videos" },
  { label: "Patents", href: "/patents" },
  { label: "Speaking", href: "/speaking" },
  { label: "About", href: "/about" },
  { label: "Connect", href: "/connect" },
];

export const primaryCTA = {
  label: "Explore My Work",
  href: "/work",
};

export const stats: StatItem[] = [
  { label: "Innovations", value: 47, suffix: "+" },
  { label: "Patents", value: 12 },
  { label: "Projects", value: 30, suffix: "+" },
  { label: "Articles", value: 85, suffix: "+" },
  { label: "Videos", value: 120, suffix: "+" },
  { label: "Speaking Engagements", value: 60, suffix: "+" },
  { label: "Community", value: 25, suffix: "K+", prefix: "" },
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/tobycarlson" },
  { label: "Twitter", href: "https://twitter.com/tobycarlson" },
  { label: "GitHub", href: "https://github.com/tobycarlson" },
  { label: "YouTube", href: "https://youtube.com/@tobycarlson" },
];
