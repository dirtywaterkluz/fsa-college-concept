export type Pathway = {
  title: string;
  summary: string;
  outcomes: string[];
};

export const pathways: Pathway[] = [
  {
    title: "Technical and Certificate Pathway",
    summary:
      "Short-format training and workforce certificates aligned to sheriff's office operations, supervision, and specialized public safety needs.",
    outcomes: ["Skill development", "Stackable credentials", "Workforce relevance"]
  },
  {
    title: "Associate Degree Pathway",
    summary:
      "Partner college programs that could help employees move toward associate degrees in criminal justice, public safety administration, emergency management, or related fields.",
    outcomes: ["Academic foundation", "Transfer readiness", "Career mobility"]
  },
  {
    title: "Bachelor's Degree Pathway",
    summary:
      "Degree completion options through public colleges and universities for employees seeking advancement into leadership, policy, operations, or specialized roles.",
    outcomes: ["Degree completion", "Leadership preparation", "Promotion readiness"]
  },
  {
    title: "Graduate Degree Pathway",
    summary:
      "Master's-level options in criminology, public administration, correctional leadership, cyber, emergency management, and public safety policy.",
    outcomes: ["Advanced expertise", "Executive preparation", "Policy leadership"]
  },
  {
    title: "Executive Leadership Pathway",
    summary:
      "Focused executive education for command staff, senior civilian leaders, jail administrators, and future agency executives.",
    outcomes: ["Strategic leadership", "Cohort learning", "Statewide peer network"]
  },
  {
    title: "Future Public Safety Expansion Pathway",
    summary:
      "A later phase could extend the model to broader Florida public safety employees, including law enforcement, corrections, probation, parole, and related agencies.",
    outcomes: ["Broader access", "Shared standards", "State workforce support"]
  },
  {
    title: "Future National Expansion Pathway",
    summary:
      "Once proven in Florida, the model could inform a national education pathway for sheriff, jail, corrections, and public safety organizations.",
    outcomes: ["Replicable model", "National partnerships", "Professionalization"]
  }
];
