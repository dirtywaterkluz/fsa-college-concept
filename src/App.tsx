import { useEffect, useMemo, useState } from "react";
import heroImage from "./assets/hero-public-safety.png";
import { faqs } from "./data/faqs";
import { partners } from "./data/partners";
import { pathways } from "./data/pathways";
import { roadmap } from "./data/roadmap";
import { trainingPrograms } from "./data/trainingPrograms";

type NavItem = {
  path: string;
  label: string;
};

const navItems: NavItem[] = [
  { path: "/", label: "Home" },
  { path: "/vision", label: "Vision" },
  { path: "/how-it-works", label: "How It Works" },
  { path: "/education-pathways", label: "Education Pathways" },
  { path: "/training-and-certificates", label: "Training and Certificates" },
  { path: "/credit-for-prior-training", label: "Credit for Prior Training" },
  { path: "/tuition-and-state-funding-concept", label: "Tuition and State Funding" },
  { path: "/legislative-and-executive-support-concept", label: "Legislative Support" },
  { path: "/partner-opportunities", label: "Partner Opportunities" },
  { path: "/roadmap", label: "Roadmap" },
  { path: "/faq", label: "FAQ" },
  { path: "/contact", label: "Contact" }
];

const homeCards = [
  "One front door for sheriff's office employees",
  "Degree pathways through partner colleges and universities",
  "Technical, associate, bachelor's, graduate, and executive tracks",
  "Credit review for prior training and certification",
  "Affordable statewide tuition strategy",
  "Scalable public safety model for Florida and beyond"
];

const workModel = [
  {
    title: "FSA Role",
    body:
      "FSA coordinates the concept, promotes the pathway, supports cohorts, works with sheriff's offices, helps align training, supports partnership agreements, and advocates for statewide funding."
  },
  {
    title: "College and University Role",
    body:
      "Partner institutions provide academic programs, admissions, advising, credit evaluation, transcripts, certificates, and degrees."
  },
  {
    title: "Sheriff's Office Role",
    body:
      "Sheriff's offices verify employment, identify workforce needs, encourage participation, provide training records, and support employees through tuition reimbursement or local policy where available."
  },
  {
    title: "State Role",
    body:
      "The State of Florida could support the model through legislation, executive direction, state appropriations, tuition waivers, reimbursement mechanisms, or a public safety education trust fund."
  }
];

const fundingOptions = [
  "Negotiated public-rate tuition",
  "Cohort pricing",
  "Employer tuition reimbursement",
  "Scholarships",
  "Grants",
  "Existing financial aid",
  "Future legislative tuition waiver",
  "Future public safety education trust fund",
  "State reimbursement to participating institutions"
];

const creditExamples = [
  "Academy training",
  "CJSTC certification",
  "Law enforcement certification",
  "Corrections certification",
  "Dual certification",
  "FTO training",
  "Instructor training",
  "Leadership academies",
  "FSA training",
  "NIC training",
  "AJA training",
  "Other approved professional development"
];

function usePathname() {
  const [pathname, setPathname] = useState(() => window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigate = (path: string) => {
    if (path !== window.location.pathname) {
      window.history.pushState({}, "", path);
      setPathname(path);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return { pathname, navigate };
}

function App() {
  const { pathname, navigate } = usePathname();
  const current = navItems.find((item) => item.path === pathname) ?? navItems[0];

  useEffect(() => {
    document.title =
      current.path === "/"
        ? "Florida Sheriffs College and Training Institute"
        : `${current.label} | Florida Sheriffs College and Training Institute`;
  }, [current]);

  const page = useMemo(() => renderPage(pathname, navigate), [pathname, navigate]);

  return (
    <div className="min-h-screen bg-ivory text-ink">
      <Header currentPath={current.path} navigate={navigate} />
      <main>{page}</main>
      <Footer navigate={navigate} />
    </div>
  );
}

function Header({
  currentPath,
  navigate
}: {
  currentPath: string;
  navigate: (path: string) => void;
}) {
  const [open, setOpen] = useState(false);

  const selectPath = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 text-white shadow-lg backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <button
          className="text-left"
          onClick={() => selectPath("/")}
          aria-label="Go to homepage"
          type="button"
        >
          <span className="block text-sm font-semibold uppercase tracking-[0.16em] text-gold-2">
            Concept Website
          </span>
          <span className="block text-lg font-bold leading-tight sm:text-xl">
            Florida Sheriffs College and Training Institute
          </span>
        </button>
        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded border border-white/25 lg:hidden"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="h-0.5 w-5 bg-white shadow-[0_7px_0_#fff,0_-7px_0_#fff]" />
        </button>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.slice(0, 8).map((item) => (
            <NavLink
              key={item.path}
              item={item}
              active={item.path === currentPath}
              navigate={selectPath}
            />
          ))}
          <button
            className="ml-2 rounded bg-gold px-4 py-2 text-sm font-bold text-navy transition hover:bg-gold-2"
            type="button"
            onClick={() => selectPath("/contact")}
          >
            Interest Form
          </button>
        </nav>
      </div>
      {open ? (
        <nav className="border-t border-white/10 bg-navy px-4 pb-4 lg:hidden" aria-label="Mobile navigation">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                item={item}
                active={item.path === currentPath}
                navigate={selectPath}
              />
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}

function NavLink({
  item,
  active,
  navigate
}: {
  item: NavItem;
  active: boolean;
  navigate: (path: string) => void;
}) {
  return (
    <a
      href={item.path}
      onClick={(event) => {
        event.preventDefault();
        navigate(item.path);
      }}
      className={`rounded px-3 py-2 text-sm font-semibold transition ${
        active ? "bg-white text-navy" : "text-white/82 hover:bg-white/10 hover:text-white"
      }`}
    >
      {item.label}
    </a>
  );
}

function Footer({ navigate }: { navigate: (path: string) => void }) {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-2">
            Presentation Concept
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-white/75">
            This concept site describes a potential statewide pathway coordinated by FSA and delivered
            through degree-granting partner institutions. Final eligibility, funding, credit, and
            partnership terms would be implementation items.
          </p>
        </div>
        <button
          className="h-11 rounded bg-gold px-5 text-sm font-bold text-navy transition hover:bg-gold-2"
          type="button"
          onClick={() => navigate("/contact")}
        >
          Join the Interest List
        </button>
      </div>
    </footer>
  );
}

function renderPage(pathname: string, navigate: (path: string) => void) {
  switch (pathname) {
    case "/":
      return <HomePage navigate={navigate} />;
    case "/vision":
      return <VisionPage />;
    case "/how-it-works":
      return <HowItWorksPage />;
    case "/education-pathways":
      return <EducationPathwaysPage />;
    case "/training-and-certificates":
      return <TrainingPage />;
    case "/credit-for-prior-training":
      return <CreditPage />;
    case "/tuition-and-state-funding-concept":
      return <FundingPage />;
    case "/legislative-and-executive-support-concept":
      return <LegislativePage />;
    case "/partner-opportunities":
      return <PartnerPage />;
    case "/roadmap":
      return <RoadmapPage />;
    case "/faq":
      return <FaqPage />;
    case "/contact":
      return <ContactPage />;
    default:
      return <NotFoundPage navigate={navigate} />;
  }
}

function HomePage({ navigate }: { navigate: (path: string) => void }) {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <img
          src={heroImage}
          alt="Public safety professionals and education partners in a modern training setting"
          className="absolute inset-0 h-full w-full object-cover opacity-54"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/36" />
        <div className="relative mx-auto grid min-h-[690px] max-w-7xl content-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold-2">
              Florida Sheriffs Association Concept
            </p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Building a statewide education and training pathway for Florida's sheriff's office
              professionals.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/88">
              The Florida Sheriffs College and Training Institute is a concept for connecting
              sheriff's office employees with affordable technical training, certificates, associate
              degrees, bachelor's degrees, graduate programs, and leadership development through
              coordinated college and university partnerships.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="primary-button" type="button" onClick={() => navigate("/vision")}>
                Explore the Concept
              </button>
              <button
                className="secondary-button"
                type="button"
                onClick={() => navigate("/education-pathways")}
              >
                View Pathways
              </button>
              <button className="outline-button" type="button" onClick={() => navigate("/contact")}>
                Join the Interest List
              </button>
            </div>
          </div>
        </div>
      </section>
      <Section eyebrow="Core Message" title="A practical partnership model for statewide reach.">
        <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="rounded bg-white p-7 shadow-soft">
            <p className="text-2xl font-bold leading-snug text-navy">
              FSA creates the front door. State colleges and universities provide the academic
              engine. Sheriff's offices provide the workforce. The State of Florida can help create
              the long-term funding structure.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {homeCards.map((card) => (
              <div key={card} className="border-l-4 border-gold bg-white p-5 shadow-sm">
                <p className="font-semibold leading-6 text-ink">{card}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

function VisionPage() {
  return (
    <PageShell
      eyebrow="Vision"
      title="A coordinated education pathway for the people who keep Florida's communities safe."
      intro="Florida's sheriff's offices rely on deputy sheriffs, detention deputies, corrections officers, civilian professionals, supervisors, command staff, and many specialized employees. A statewide pathway could help those professionals see a clear next step, whether they need technical training, a certificate, a degree, or executive preparation."
    >
      <TwoColumnText
        leftTitle="Why a pathway matters"
        leftText="Public safety careers now require operational skill, ethical judgment, technology fluency, leadership capacity, and resilience. Many employees already complete substantial professional training, yet the connection between that training and academic advancement can be difficult to navigate."
        rightTitle="What the concept provides"
        rightText="The Florida Sheriffs College and Training Institute would be the coordinated front door. It would help employees understand options, help agencies align workforce needs, and help academic partners serve a mission-focused statewide audience without FSA becoming a degree-granting institution."
      />
      <Callout>
        This is a presentation-ready concept for partnership development. Final admissions,
        accreditation, credit, funding, and governance details would be addressed through partner
        agreements and future implementation work.
      </Callout>
    </PageShell>
  );
}

function HowItWorksPage() {
  return (
    <PageShell
      eyebrow="How It Works"
      title="Four roles, one coordinated pathway."
      intro="The model keeps responsibilities clear. FSA coordinates and advocates. Academic partners educate and credential. Sheriff's offices connect workforce needs to employee opportunity. The state can help make the model affordable and scalable."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {workModel.map((item) => (
          <InfoCard key={item.title} title={item.title} body={item.body} />
        ))}
      </div>
    </PageShell>
  );
}

function EducationPathwaysPage() {
  return (
    <PageShell
      eyebrow="Education Pathways"
      title="Stackable options from technical training to executive leadership."
      intro="The pathway is designed to meet employees at different career stages and give agencies a clearer way to support development, retention, and advancement."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {pathways.map((pathway) => (
          <div key={pathway.title} className="bg-white p-6 shadow-soft">
            <h2 className="text-xl font-bold text-navy">{pathway.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate">{pathway.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {pathway.outcomes.map((outcome) => (
                <span key={outcome} className="rounded bg-ivory px-3 py-1 text-xs font-bold text-navy-2">
                  {outcome}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}

function TrainingPage() {
  return (
    <PageShell
      eyebrow="Training and Certificates"
      title="Sample categories for workforce-aligned professional development."
      intro="Training and certificate offerings would be shaped by partner capacity, sheriff's office workforce needs, and statewide public safety priorities."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {trainingPrograms.map((program) => (
          <InfoCard key={program.title} title={program.title} body={program.description} />
        ))}
      </div>
    </PageShell>
  );
}

function CreditPage() {
  return (
    <PageShell
      eyebrow="Credit for Prior Training"
      title="A clearer process for possible credit review."
      intro="Many public safety employees have already completed significant training. The concept would help employees gather records and submit eligible training to partner institutions for possible credit review."
    >
      <Callout>
        Any credit for prior training would be subject to partner institution approval, not
        guaranteed, and based on institutional policy.
      </Callout>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {creditExamples.map((item) => (
          <div key={item} className="border border-navy/10 bg-white p-4 font-semibold text-navy">
            {item}
          </div>
        ))}
      </div>
    </PageShell>
  );
}

function FundingPage() {
  return (
    <PageShell
      eyebrow="Tuition and State Funding Concept"
      title="Affordable and predictable tuition is the long-term goal."
      intro="The concept aims to keep tuition affordable and predictable for eligible public safety employees through coordinated partnerships and state support."
    >
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="bg-navy p-7 text-white shadow-soft">
          <h2 className="text-2xl font-bold">Statewide support concept</h2>
          <p className="mt-4 leading-7 text-white/82">
            A full statewide version could be supported through legislation, executive direction,
            Board of Governors coordination, State Board of Education coordination, state
            appropriations, a public safety education trust fund, or a reimbursement model that keeps
            tuition rates affordable and consistent across participating public institutions.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {fundingOptions.map((option) => (
            <div key={option} className="bg-white p-4 font-semibold text-ink shadow-sm">
              {option}
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

function LegislativePage() {
  return (
    <PageShell
      eyebrow="Legislative and Executive Support Concept"
      title="A statewide compact for recruitment, retention, and professionalization."
      intro="Florida could support this effort through legislation or executive direction requiring or encouraging public institutions to participate in a statewide law enforcement and public safety education pathway."
    >
      <Callout>
        Florida has an opportunity to create a statewide public safety education compact that
        supports recruitment, retention, leadership development, and professionalization across law
        enforcement, corrections, detention, probation, and related public safety fields.
      </Callout>
      <TwoColumnText
        leftTitle="Potential levers"
        leftText="State leaders could encourage institutional participation, support transfer alignment, fund tuition assistance, authorize reimbursement mechanisms, or direct system-level coordination."
        rightTitle="Implementation posture"
        rightText="The concept does not need to solve every legal or logistical issue on day one. Those items can be framed as partnership, governance, appropriation, and implementation work."
      />
    </PageShell>
  );
}

function PartnerPage() {
  return (
    <PageShell
      eyebrow="Partner Opportunities"
      title="A coordinated model with room for mission-aligned partners."
      intro="The concept depends on clear partner roles and practical implementation agreements. Different institutions and agencies could contribute at different stages."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {partners.map((partner) => (
          <div key={partner.title} className="bg-white p-6 shadow-soft">
            <h2 className="text-xl font-bold text-navy">{partner.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate">{partner.description}</p>
            <ul className="mt-5 space-y-2">
              {partner.opportunities.map((item) => (
                <li key={item} className="flex gap-2 text-sm font-semibold text-ink">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PageShell>
  );
}

function RoadmapPage() {
  return (
    <PageShell
      eyebrow="Roadmap"
      title="A phased route from pilot to statewide model."
      intro="The roadmap keeps the first version focused while showing leadership a path toward broader impact."
    >
      <div className="grid gap-5 lg:grid-cols-4">
        {roadmap.map((phase, index) => (
          <div key={phase.phase} className="relative bg-white p-6 shadow-soft">
            <div className="flex h-12 w-12 items-center justify-center rounded bg-gold text-lg font-extrabold text-navy">
              {index + 1}
            </div>
            <p className="mt-5 text-sm font-bold uppercase tracking-[0.14em] text-teal">{phase.phase}</p>
            <h2 className="mt-2 text-xl font-bold text-navy">{phase.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate">{phase.description}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}

function FaqPage() {
  return (
    <PageShell
      eyebrow="FAQ"
      title="Common questions for leaders, agencies, and partners."
      intro="These answers are intentionally concise for presentation use and should be refined as partnerships and policy decisions mature."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {faqs.map((faq) => (
          <details key={faq.question} className="group bg-white p-5 shadow-sm">
            <summary className="cursor-pointer list-none text-lg font-bold text-navy">
              {faq.question}
            </summary>
            <p className="mt-3 text-sm leading-6 text-slate">{faq.answer}</p>
          </details>
        ))}
      </div>
    </PageShell>
  );
}

function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact / Interest Form"
      title="Placeholder interest form for agencies and partners."
      intro="This form is a static placeholder for concept review. A future version could connect to a CRM, email workflow, or partner intake system."
    >
      <form className="grid gap-5 bg-white p-6 shadow-soft md:grid-cols-2">
        <FormField label="Name" />
        <FormField label="Agency" />
        <FormField label="Title/rank" />
        <FormField label="Email" type="email" />
        <FormField label="Phone" type="tel" />
        <FormField label="Employee category" as="select" options={["Sworn", "Detention", "Corrections", "Civilian", "Command staff", "Partner institution", "State partner"]} />
        <FormField label="Desired pathway" as="select" options={["Technical or certificate", "Associate degree", "Bachelor's degree", "Graduate degree", "Executive leadership", "Partnership discussion"]} />
        <FormField label="Interest area" as="select" options={["Student pathway", "Agency cohort", "Academic partnership", "Funding concept", "Legislative support", "General information"]} />
        <div className="md:col-span-2">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea id="message" className="form-input min-h-36" placeholder="Share the area of interest or question." />
        </div>
        <div className="md:col-span-2">
          <button className="primary-button" type="button">
            Submit Interest
          </button>
          <p className="mt-3 text-sm text-slate">
            Placeholder only. No information is submitted from this static concept site.
          </p>
        </div>
      </form>
    </PageShell>
  );
}

function NotFoundPage({ navigate }: { navigate: (path: string) => void }) {
  return (
    <PageShell
      eyebrow="Page Not Found"
      title="That page is not part of the concept site."
      intro="Use the navigation to return to the presentation pages."
    >
      <button className="primary-button" type="button" onClick={() => navigate("/")}>
        Return Home
      </button>
    </PageShell>
  );
}

function PageShell({
  eyebrow,
  title,
  intro,
  children
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold-2">{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/82">{intro}</p>
        </div>
      </section>
      <Section>{children}</Section>
    </>
  );
}

function Section({
  eyebrow,
  title,
  children
}: {
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      {eyebrow || title ? (
        <div className="mb-8">
          {eyebrow ? <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal">{eyebrow}</p> : null}
          {title ? <h2 className="mt-3 max-w-3xl text-3xl font-extrabold text-navy sm:text-4xl">{title}</h2> : null}
        </div>
      ) : null}
      {children}
    </section>
  );
}

function InfoCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="bg-white p-6 shadow-soft">
      <h2 className="text-xl font-bold text-navy">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-slate">{body}</p>
    </div>
  );
}

function TwoColumnText({
  leftTitle,
  leftText,
  rightTitle,
  rightText
}: {
  leftTitle: string;
  leftText: string;
  rightTitle: string;
  rightText: string;
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      <InfoCard title={leftTitle} body={leftText} />
      <InfoCard title={rightTitle} body={rightText} />
    </div>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 border-l-4 border-gold bg-white p-6 text-lg font-semibold leading-8 text-navy shadow-sm">
      {children}
    </div>
  );
}

function FormField({
  label,
  type = "text",
  as,
  options
}: {
  label: string;
  type?: string;
  as?: "select";
  options?: string[];
}) {
  const id = label.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <div>
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      {as === "select" ? (
        <select id={id} className="form-input">
          <option value="">Select an option</option>
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input id={id} className="form-input" type={type} />
      )}
    </div>
  );
}

export default App;
