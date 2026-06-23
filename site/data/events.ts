export type EventItem = {
  id: string;
  title: string;
  date: string;
  status: "upcoming" | "completed";
  location?: string;
  description: string;
};

export const events: EventItem[] = [

];
