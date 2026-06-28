export type PartnerGroup = {
  title: string;
  description: string;
  opportunities: string[];
};

export const partners: PartnerGroup[] = [
  {
    title: "Florida College System Partners",
    description:
      "Public colleges could anchor technical training, certificates, associate degrees, and selected bachelor's-level public safety programs.",
    opportunities: ["Certificates", "Associate degrees", "Applied bachelor's programs", "Credit evaluation"]
  },
  {
    title: "State University System Partners",
    description:
      "Universities could provide bachelor's completion pathways, specialized public safety programs, research support, and leadership development.",
    opportunities: ["Bachelor's completion", "Advising pathways", "Transfer alignment", "Cohort programs"]
  },
  {
    title: "Graduate and Executive Education Partners",
    description:
      "Graduate institutions could support master's degrees, executive leadership, criminology, public administration, cyber, and policy programs.",
    opportunities: ["Graduate degrees", "Executive institutes", "Policy programs", "Specialized credentials"]
  },
  {
    title: "Sheriff's Offices",
    description:
      "Agencies could identify workforce needs, encourage participation, verify employment, and provide training records for possible review.",
    opportunities: ["Workforce planning", "Employee support", "Training records", "Local reimbursement policy"]
  },
  {
    title: "State Workforce and Funding Partners",
    description:
      "State leaders and workforce partners could help make the model affordable, consistent, and scalable across Florida.",
    opportunities: ["Appropriations", "Trust fund concepts", "Reimbursement models", "System coordination"]
  },
  {
    title: "National Training Partners",
    description:
      "Public safety training organizations could contribute specialized content, professional development, and future national alignment.",
    opportunities: ["Specialized training", "Leadership content", "Corrections expertise", "National scaling"]
  }
];
