export type EventItem = {
  title: string;
  date: string; // ISO format: YYYY-MM-DD
  location?: string;
  description: string;
  theme?: string;
  registerLink?: string;
};

export const event: EventItem = {
  title: "Atharv Joined Cyber Congress",
  date: "2026-06-01",
  location: "School Campus",
  description:
    "Atharv officially joined Cyber Congress and became an active member, contributing to cybersecurity initiatives and technical events.",
  theme: "Cybersecurity & Ethical Hacking",
  registerLink: "https://forms.gle/xxxx",
};