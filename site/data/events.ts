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
    id: "ctf-night-2026",
    title: "CTF Night: Capture the Flag",
    date: "2026-08-14",
    status: "upcoming",
    location: "Computer Lab 2, AIS-46",
    description: "Beginner-friendly capture-the-flag covering web exploitation, crypto, and forensics challenges. Teams of 2-3.",
  },
  {
    id: "phishing-awareness-drive",
    title: "Phishing Awareness Drive",
    date: "2026-07-02",
    status: "upcoming",
    location: "School Auditorium",
    description: "Live demo of common phishing tactics and how to spot them, followed by a Q&A with the IT department.",
  },
];
