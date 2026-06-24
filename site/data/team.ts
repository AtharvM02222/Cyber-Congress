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
    image: "/mainlogo.jpg",
    socials: {
      github: "",
      linkedin: "",
      email: "bhavit@gmail.com",
      discord: "thedoctor",
    },
  },
  {
    name: "Aarav Juneja",
    role: "Vice President",
    image: "/mainlogo.jpg",
    socials: {
      github: "",
      linkedin: "",
      email: "aarav@gmail.com",
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
      email: "saksham@gmail.com",
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
      email: "kushagra@gmail.com",
      discord: "",
    },
  },
  {
    name: "Ahaana Dhamija",
    role: "Core Member",
    image: "/mainlogo.jpg",
    socials: {
      github: "",
      linkedin: "",
      email: "ahaana@gmail.com",
      discord: "",
    },
  },
  {
    name: "Aarna Sethi",
    role: "Core Member",
    image: "/mainlogo.jpg",
    socials: {
      github: "",
      linkedin: "",
      email: "aarna@gmail.com",
      discord: "",
    },
  },
  {
    name: "Kanishk Jain",
    role: "Core Member",
    image: "/mainlogo.jpg",
    socials: {
      github: "",
      linkedin: "",
      email: "kanishk@gmail.com",
      discord: "",
    },
  },
  {
    name: "Parag Verma",
    role: "Core Member",
    image: "/mainlogo.jpg",
    socials: {
      github: "",
      linkedin: "",
      email: "parag@gmail.com",
      discord: "",
    },
  },
];
