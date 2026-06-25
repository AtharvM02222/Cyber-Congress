export interface Socials {
  github?: string;
  linkedin?: string;
  email?: string;
  discord?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  socials: Socials;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Bhavit Grover",
    role: "President",
    image: "/bhavit_grover.webp",
    socials: {
      github: "https://github.com/bhavitgrover",
      linkedin: "https://www.linkedin.com/in/bhavit-grover/",
      email: "",
      discord: "",
    },
  },
  {
    name: "Aarav Juneja",
    role: "Vice President",
    image: "/aarav_juneja.webp",
    socials: {
      github: "https://github.com/AaravJuneja",
      linkedin: "https://www.linkedin.com/in/aaravjuneja",
      email: "",
      discord: "",
    },
  },
  {
    name: "Saksham Jain",
    role: "Secretary",
    image: "/mainlogo.jpg",
    socials: {
      github: "",
      linkedin: "",
      email: "",
      discord: "",
    },
  },
  {
    name: "Kushagra Sethia",
    role: "Secretary",
    image: "/mainlogo.jpg",
    socials: {
      github: "",
      linkedin: "",
      email: "",
      discord: "",
    },
  },
  {
    name: "Ahaana Dhamija",
    role: "Core Member",
    image: "/Ahaana_Dhamija.webp",
    socials: {
      github: "",
      linkedin: "",
      email: "",
      discord: "",
    },
  },
  {
    name: "Aarna Sethi",
    role: "Core Member",
    image: "/Aarna_Sethi.webp",
    socials: {
      github: "",
      linkedin: "",
      email: "",
      discord: "",
    },
  },
  {
    name: "Kanishk Jain",
    role: "Core Member",
    image: "/Kanishk_Jain.webp",
    socials: {
      github: "",
      linkedin: "",
      email: "",
      discord: "jkanishk98.4",
    },
  },
  {
    name: "Parag Verma",
    role: "Core Member",
    image: "/mainlogo.jpg",
    socials: {
      github: "",
      linkedin: "",
      email: "",
      discord: "",
    },
  },
];
