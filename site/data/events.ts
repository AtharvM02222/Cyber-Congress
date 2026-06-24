export type EventItem = {
  id: string;
  title: string;
  date: string;
  status: "upcoming" | "completed";
  location?: string;
  description: string;
};

export const events: EventItem[] = [
  {
    id: "1",
    title: "Atharv Joined Cyber Congress",
    date: "2026-06-01",
    status: "completed",
    location: "School Campus",
    description:
      "Atharv officially joined Cyber Congress and became an active member, contributing to cybersecurity initiatives and technical events.",
  },
];