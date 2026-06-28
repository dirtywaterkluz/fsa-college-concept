export type RoadmapPhase = {
  phase: string;
  title: string;
  description: string;
};

export const roadmap: RoadmapPhase[] = [
  {
    phase: "Phase 1",
    title: "Build the Florida sheriff's office pilot.",
    description:
      "Launch a focused pilot with FSA, selected sheriff's offices, and initial college and university partners."
  },
  {
    phase: "Phase 2",
    title: "Expand to all Florida sheriff's offices.",
    description:
      "Open the pathway across Florida's sheriff's offices with consistent communications, cohort support, and partner advising."
  },
  {
    phase: "Phase 3",
    title: "Expand to broader Florida public safety.",
    description:
      "Include law enforcement, corrections, probation, parole, and related public safety agencies as funding and partner capacity mature."
  },
  {
    phase: "Phase 4",
    title: "Build a national model.",
    description:
      "Use the Florida framework to inform sheriff, jail, corrections, and public safety education partnerships in other states."
  }
];
