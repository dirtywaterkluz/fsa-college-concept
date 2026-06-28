import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const hero = await readFile(resolve(root, "src/assets/hero-public-safety-small.jpg"));
const heroUrl = `data:image/jpeg;base64,${hero.toString("base64")}`;

const badge = `<svg class="badge" viewBox="0 0 100 100" aria-hidden="true"><polygon points="50,4 61,35 94,35 67,55 78,88 50,68 22,88 33,55 6,35 39,35"/><circle cx="50" cy="50" r="24"/><path d="M50 31l5.6 11.3 12.4 1.8-9 8.8 2.1 12.3L50 59.4 38.9 65.2 41 52.9l-9-8.8 12.4-1.8L50 31z"/></svg>`;

const homeCards = [
  "One front door for sheriff's office employees",
  "Degree pathways through partner colleges and universities",
  "Technical, associate, bachelor's, graduate, and executive tracks",
  "Credit review for prior training and certification",
  "Affordable statewide tuition strategy",
  "Scalable public safety model for Florida and beyond"
];

const pathways = [
  ["Technical and Certificate Pathway", "Short-format training and workforce certificates aligned to sheriff's office operations, supervision, and specialized public safety needs.", "Skill development|Stackable credentials|Workforce relevance"],
  ["Associate Degree Pathway", "Partner college programs that could help employees move toward associate degrees in criminal justice, public safety administration, emergency management, or related fields.", "Academic foundation|Transfer readiness|Career mobility"],
  ["Bachelor's Degree Pathway", "Degree completion options through public colleges and universities for employees seeking advancement into leadership, policy, operations, or specialized roles.", "Degree completion|Leadership preparation|Promotion readiness"],
  ["Graduate Degree Pathway", "Master's-level options in criminology, public administration, correctional leadership, cyber, emergency management, and public safety policy.", "Advanced expertise|Executive preparation|Policy leadership"],
  ["Executive Leadership Pathway", "Focused executive education for command staff, senior civilian leaders, jail administrators, and future agency executives.", "Strategic leadership|Cohort learning|Statewide peer network"],
  ["Future Public Safety Expansion Pathway", "A later phase could extend the model to broader Florida public safety employees, including law enforcement, corrections, probation, parole, and related agencies.", "Broader access|Shared standards|State workforce support"],
  ["Future National Expansion Pathway", "Once proven in Florida, the model could inform a national education pathway for sheriff, jail, corrections, and public safety organizations.", "Replicable model|National partnerships|Professionalization"]
];

const training = [
  "Corrections and jail operations",
  "Law enforcement leadership",
  "Public safety supervision",
  "Accreditation and compliance",
  "Ethics and accountability",
  "Cybercrime and intelligence",
  "Emergency management",
  "Human resources and risk management",
  "Wellness and resilience",
  "Executive leadership"
];

const credit = [
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

const funding = [
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

const partners = [
  ["Florida College System partners", "Technical classes, certificates, associate degrees, and selected bachelor-level public safety programs."],
  ["State University System partners", "Bachelor's degree completion pathways, advising, transfer alignment, and cohort programs."],
  ["Graduate and executive education partners", "Master's degrees, executive leadership, criminology, public administration, cyber, emergency management, and public safety policy."],
  ["Sheriff's offices", "Employment verification, workforce needs, training records, and employee support."],
  ["State workforce and funding partners", "Appropriations, trust fund concepts, reimbursement models, and system coordination."],
  ["National training partners", "Specialized professional development and future national alignment."]
];

const faqs = [
  ["Is this an accredited college?", "No. This is a concept for a coordinated education and training pathway. FSA would not award degrees."],
  ["Who awards the degrees?", "Degree-granting partner colleges and universities would provide academic programs, process admissions, evaluate credit, maintain transcripts, and confer certificates and degrees."],
  ["Who is eligible?", "The initial concept focuses on Florida sheriff's office employees. Final eligibility would be defined through partner agreements, agency policy, and any future funding structure."],
  ["Can civilian sheriff's office employees participate?", "Yes. The concept includes civilian professionals, supervisors, command staff, and operational support employees, subject to final program and partner criteria."],
  ["Can detention and corrections employees participate?", "Yes. Detention deputies, corrections officers, jail staff, and corrections leaders are central audiences."],
  ["Can prior training count for college credit?", "Prior training could be submitted for possible credit review, subject to partner institution approval. Credit is not guaranteed and would be based on institutional policy."],
  ["Will the program be online?", "The concept anticipates flexible online, hybrid, and cohort options where partner institutions can support them."],
  ["How would tuition work?", "The long-term goal is affordable and predictable tuition through negotiated rates, employer reimbursement, scholarships, grants, financial aid, or future state support."],
  ["Would legislation be needed?", "A pilot could begin through partnerships. A full statewide version could be strengthened through legislation, executive direction, appropriations, or coordinated public system support."],
  ["Can other agencies participate later?", "Yes. Future phases could include broader Florida public safety agencies beyond sheriff's offices."],
  ["Can this become a national model?", "Yes. A successful Florida model could inform a national pathway for sheriff, jail, corrections, and public safety organizations."]
];

const esc = (value) =>
  String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);

const card = (title, body = "") =>
  `<article class="card">${badge}<h3>${esc(title)}</h3>${body ? `<p>${esc(body)}</p>` : ""}</article>`;

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Florida Sheriffs College and Training Institute</title>
  <meta name="description" content="Concept website for a statewide education and training pathway for Florida sheriff's office professionals.">
  <style>
    :root{--navy:#071b35;--green:#173b2f;--green2:#245846;--gold:#c8a044;--gold2:#f1d27a;--ivory:#f7f4ea;--ink:#20252e;--slate:#52616f;--white:#fff}
    *{box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{margin:0;background:var(--ivory);color:var(--ink);font-family:Inter,Arial,sans-serif}
    a{color:inherit}
    .top{position:sticky;top:0;z-index:50;background:linear-gradient(90deg,var(--green),var(--navy));color:white;border-bottom:3px solid var(--gold)}
    .nav{max-width:1180px;margin:auto;padding:12px 20px;display:flex;align-items:center;gap:18px;justify-content:space-between}
    .brand{display:flex;align-items:center;gap:12px;font-weight:900;line-height:1.08;font-size:18px}
    .brand span{display:block;color:var(--gold2);font-size:12px;text-transform:uppercase;letter-spacing:.16em;margin-bottom:4px}
    .badge{width:46px;height:46px;flex:0 0 auto;filter:drop-shadow(0 7px 12px rgba(0,0,0,.22))}
    .badge polygon{fill:var(--gold)}.badge circle{fill:var(--green);stroke:white;stroke-width:3}.badge path{fill:var(--gold2)}
    .badge.big{width:92px;height:92px;margin-bottom:20px}
    .links{display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end}
    .links a{padding:8px 10px;border-radius:4px;text-decoration:none;font-weight:800;font-size:13px;color:rgba(255,255,255,.86)}
    .links a:hover{background:rgba(255,255,255,.13);color:white}
    .hero{position:relative;min-height:690px;color:white;display:grid;align-items:center;background:var(--navy);overflow:hidden}
    .hero:before{content:"";position:absolute;inset:0;background-image:linear-gradient(90deg,rgba(7,27,53,.98),rgba(23,59,47,.90),rgba(7,27,53,.44)),url("${heroUrl}");background-size:cover;background-position:center}
    .hero:after{content:"";position:absolute;right:-90px;bottom:-120px;width:420px;height:420px;border:2px solid rgba(241,210,122,.28);border-radius:50%;box-shadow:0 0 0 35px rgba(200,160,68,.06),0 0 0 70px rgba(200,160,68,.04)}
    .wrap{max-width:1180px;margin:auto;padding:70px 20px;position:relative}
    .kicker{color:var(--gold);font-weight:900;text-transform:uppercase;letter-spacing:.18em;font-size:13px}
    .hero .kicker{color:var(--gold2)}
    .hero h1{font-size:clamp(38px,6vw,68px);line-height:1.02;max-width:880px;margin:18px 0 22px;font-weight:950;color:white}
    .hero p{font-size:19px;line-height:1.65;max-width:780px;color:rgba(255,255,255,.9)}
    .actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:30px}
    .btn{display:inline-flex;min-height:44px;align-items:center;justify-content:center;border-radius:4px;padding:11px 18px;text-decoration:none;font-weight:950}
    .primary{background:var(--gold);color:var(--navy)}.secondary{background:white;color:var(--green)}.outline{border:1px solid rgba(255,255,255,.5);color:white}
    section{padding:70px 20px;background:var(--ivory)}section:nth-of-type(even){background:white}
    .inner{max-width:1180px;margin:auto}
    h2{font-size:clamp(30px,4vw,48px);line-height:1.08;color:var(--navy);margin:12px 0 18px;font-weight:950}
    .intro{font-size:18px;line-height:1.7;color:var(--slate);max-width:900px}
    .grid{display:grid;gap:18px}.two{grid-template-columns:repeat(2,minmax(0,1fr))}.three{grid-template-columns:repeat(3,minmax(0,1fr))}.four{grid-template-columns:repeat(4,minmax(0,1fr))}
    .card{position:relative;background:white;border-top:4px solid var(--gold);box-shadow:0 18px 45px rgba(7,27,53,.12);padding:24px;overflow:hidden}section:nth-of-type(even) .card{background:var(--ivory)}
    .card:after{content:"★";position:absolute;right:16px;bottom:8px;color:rgba(200,160,68,.16);font-size:52px;line-height:1}
    .card h3{margin:0 0 10px;color:var(--green);font-size:21px;line-height:1.18}.card p,.card li{color:var(--slate);line-height:1.58;font-size:15px}
    .callout{border-left:6px solid var(--gold);background:linear-gradient(90deg,var(--green),var(--navy));color:white;padding:28px;margin:26px 0;font-size:21px;line-height:1.55;font-weight:900}
    .pillrow{display:flex;gap:8px;flex-wrap:wrap;margin-top:14px}.pill{background:rgba(200,160,68,.18);color:var(--green);font-weight:900;font-size:12px;padding:7px 10px;border-radius:999px}
    .list{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin-top:26px}.list div{background:white;border:1px solid rgba(7,27,53,.12);border-left:4px solid var(--gold);padding:15px;font-weight:900;color:var(--green)}section:nth-of-type(even) .list div{background:var(--ivory)}
    .roadmap{counter-reset:phase;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px}.phase{background:white;padding:24px;box-shadow:0 18px 45px rgba(7,27,53,.12)}.phase:before{counter-increment:phase;content:counter(phase);display:grid;place-items:center;width:48px;height:48px;background:var(--gold);color:var(--navy);font-weight:950;border-radius:50%;margin-bottom:18px}
    .faq details{background:white;padding:20px;border-left:4px solid var(--gold);box-shadow:0 10px 30px rgba(7,27,53,.08)}.faq summary{cursor:pointer;font-weight:950;color:var(--green);font-size:18px}
    .form{background:white;box-shadow:0 18px 45px rgba(7,27,53,.12);padding:24px;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}.field label{display:block;font-weight:950;color:var(--green);font-size:14px;margin-bottom:7px}.field input,.field select,.field textarea{width:100%;border:1px solid rgba(7,27,53,.18);padding:12px;border-radius:4px;font:inherit;background:white}.field.full{grid-column:1/-1}.disclaimer{color:var(--slate);font-size:14px;line-height:1.5}
    footer{background:var(--ink);color:white;padding:34px 20px;border-top:4px solid var(--gold)}footer .inner{display:flex;gap:20px;justify-content:space-between;align-items:center}footer p{max-width:760px;color:rgba(255,255,255,.75);line-height:1.6;margin:8px 0 0}
    @media(max-width:900px){.nav{display:block}.brand{align-items:flex-start}.links{justify-content:flex-start;margin-top:12px}.two,.three,.four,.roadmap,.list,.form{grid-template-columns:1fr}.hero{min-height:650px}footer .inner{display:block}}
  </style>
</head>
<body>
  <header class="top"><div class="nav"><div class="brand">${badge}<div><span>Concept Website</span>Florida Sheriffs College and Training Institute</div></div><nav class="links"><a href="#vision">Vision</a><a href="#how">How It Works</a><a href="#pathways">Pathways</a><a href="#training">Training</a><a href="#credit">Credit</a><a href="#funding">Funding</a><a href="#support">Support</a><a href="#partners">Partners</a><a href="#roadmap">Roadmap</a><a href="#faq">FAQ</a><a href="#contact">Contact</a></nav></div></header>
  <main>
    <section class="hero"><div class="wrap">${badge.replace('class="badge"', 'class="badge big"')}<div class="kicker">Florida Sheriffs Association Concept</div><h1>Building a statewide education and training pathway for Florida's sheriff's office professionals.</h1><p>The Florida Sheriffs College and Training Institute is a concept for connecting sheriff's office employees with affordable technical training, certificates, associate degrees, bachelor's degrees, graduate programs, and leadership development through coordinated college and university partnerships.</p><div class="actions"><a class="btn primary" href="#vision">Explore the Concept</a><a class="btn secondary" href="#pathways">View Pathways</a><a class="btn outline" href="#contact">Join the Interest List</a></div></div></section>
    <section><div class="inner"><div class="kicker">Core Message</div><h2>A practical partnership model for statewide reach.</h2><div class="callout">FSA creates the front door. State colleges and universities provide the academic engine. Sheriff's offices provide the workforce. The State of Florida can help create the long-term funding structure.</div><div class="grid three">${homeCards.map((item) => card(item)).join("")}</div></div></section>
    <section id="vision"><div class="inner"><div class="kicker">Vision</div><h2>A coordinated education pathway for the people who keep Florida's communities safe.</h2><p class="intro">Florida's sheriff's offices rely on deputy sheriffs, detention deputies, corrections officers, civilian professionals, supervisors, command staff, and specialized employees. A statewide pathway could help those professionals see a clear next step, whether they need technical training, a certificate, a degree, or executive preparation.</p><div class="grid two">${card("Why a pathway matters", "Public safety careers now require operational skill, ethical judgment, technology fluency, leadership capacity, and resilience. Many employees already complete substantial professional training, yet the connection between that training and academic advancement can be difficult to navigate.")}${card("What the concept provides", "The Institute would be the coordinated front door. It would help employees understand options, help agencies align workforce needs, and help academic partners serve a mission-focused statewide audience without FSA becoming a degree-granting institution.")}</div></div></section>
    <section id="how"><div class="inner"><div class="kicker">How It Works</div><h2>Four roles, one coordinated pathway.</h2><div class="grid four">${card("FSA Role", "FSA coordinates the concept, promotes the pathway, supports cohorts, works with sheriff's offices, helps align training, supports partnership agreements, and advocates for statewide funding.")}${card("College and University Role", "Partner institutions provide academic programs, admissions, advising, credit evaluation, transcripts, certificates, and degrees.")}${card("Sheriff's Office Role", "Sheriff's offices verify employment, identify workforce needs, encourage participation, provide training records, and support employees through tuition reimbursement or local policy where available.")}${card("State Role", "The State of Florida could support the model through legislation, executive direction, state appropriations, tuition waivers, reimbursement mechanisms, or a public safety education trust fund.")}</div></div></section>
    <section id="pathways"><div class="inner"><div class="kicker">Education Pathways</div><h2>Stackable options from technical training to executive leadership.</h2><div class="grid three">${pathways.map(([title, body, pills]) => `<article class="card">${badge}<h3>${esc(title)}</h3><p>${esc(body)}</p><div class="pillrow">${pills.split("|").map((pill) => `<span class="pill">${esc(pill)}</span>`).join("")}</div></article>`).join("")}</div></div></section>
    <section id="training"><div class="inner"><div class="kicker">Training and Certificates</div><h2>Sample categories for workforce-aligned professional development.</h2><div class="grid three">${training.map((item) => card(item, "Sample workforce-aligned training category for future partner development.")).join("")}</div></div></section>
    <section id="credit"><div class="inner"><div class="kicker">Credit for Prior Training</div><h2>A clearer process for possible credit review.</h2><p class="intro">Academy training, CJSTC certification, law enforcement certification, corrections certification, dual certification, FTO training, instructor training, leadership academies, FSA training, NIC training, AJA training, and other approved professional development could be submitted to partner institutions.</p><div class="callout">Any credit would be a possible credit review, subject to partner institution approval, not guaranteed, and based on institutional policy.</div><div class="list">${credit.map((item) => `<div>${esc(item)}</div>`).join("")}</div></div></section>
    <section id="funding"><div class="inner"><div class="kicker">Tuition and State Funding Concept</div><h2>Affordable and predictable tuition is the long-term goal.</h2><p class="intro">The concept aims to keep tuition affordable and predictable for eligible public safety employees through coordinated partnerships and state support.</p><div class="list">${funding.map((item) => `<div>${esc(item)}</div>`).join("")}</div></div></section>
    <section id="support"><div class="inner"><div class="kicker">Legislative and Executive Support Concept</div><h2>A statewide compact for recruitment, retention, and professionalization.</h2><div class="callout">Florida has an opportunity to create a statewide public safety education compact that supports recruitment, retention, leadership development, and professionalization across law enforcement, corrections, detention, probation, and related public safety fields.</div><div class="grid two">${card("Potential levers", "Florida could support this effort through legislation or executive direction requiring or encouraging public institutions to participate in a statewide law enforcement and public safety education pathway.")}${card("Implementation posture", "The full statewide version could be supported through legislation, executive direction, Board of Governors coordination, State Board of Education coordination, state appropriations, a trust fund, or a reimbursement model.")}</div></div></section>
    <section id="partners"><div class="inner"><div class="kicker">Partner Opportunities</div><h2>A coordinated model with room for mission-aligned partners.</h2><div class="grid three">${partners.map(([title, body]) => card(title, body)).join("")}</div></div></section>
    <section id="roadmap"><div class="inner"><div class="kicker">Roadmap</div><h2>A phased route from pilot to statewide model.</h2><div class="roadmap"><article class="phase"><h3>Phase 1</h3><p>Build the Florida sheriff's office pilot.</p></article><article class="phase"><h3>Phase 2</h3><p>Expand to all Florida sheriff's offices.</p></article><article class="phase"><h3>Phase 3</h3><p>Expand to broader Florida public safety, including law enforcement, corrections, probation, parole, and related agencies.</p></article><article class="phase"><h3>Phase 4</h3><p>Build a national model for sheriff, jail, corrections, and public safety organizations.</p></article></div></div></section>
    <section id="faq"><div class="inner"><div class="kicker">FAQ</div><h2>Common questions for leaders, agencies, and partners.</h2><div class="grid two faq">${faqs.map(([question, answer]) => `<details><summary>${esc(question)}</summary><p>${esc(answer)}</p></details>`).join("")}</div></div></section>
    <section id="contact"><div class="inner"><div class="kicker">Contact / Interest Form</div><h2>Placeholder interest form for agencies and partners.</h2><form class="form"><div class="field"><label>Name</label><input></div><div class="field"><label>Agency</label><input></div><div class="field"><label>Title/rank</label><input></div><div class="field"><label>Email</label><input type="email"></div><div class="field"><label>Phone</label><input></div><div class="field"><label>Employee category</label><select><option>Select an option</option><option>Sworn</option><option>Detention</option><option>Corrections</option><option>Civilian</option><option>Command staff</option><option>Partner institution</option><option>State partner</option></select></div><div class="field"><label>Desired pathway</label><select><option>Select an option</option><option>Technical or certificate</option><option>Associate degree</option><option>Bachelor's degree</option><option>Graduate degree</option><option>Executive leadership</option></select></div><div class="field"><label>Interest area</label><select><option>Select an option</option><option>Student pathway</option><option>Agency cohort</option><option>Academic partnership</option><option>Funding concept</option><option>Legislative support</option></select></div><div class="field full"><label>Message</label><textarea rows="5"></textarea></div><div class="field full"><button class="btn primary" type="button">Submit Interest</button><p class="disclaimer">Placeholder only. No information is submitted from this static concept site.</p></div></form></div></section>
  </main>
  <footer><div class="inner"><div><div class="kicker">Presentation Concept</div><p>This concept site describes a potential statewide pathway coordinated by FSA and delivered through degree-granting partner institutions. Final eligibility, funding, credit, and partnership terms would be implementation items.</p></div><a class="btn primary" href="#contact">Join the Interest List</a></div></footer>
</body>
</html>
`;

await writeFile(resolve(root, "standalone/fsa-college-concept.html"), html);
console.log("Wrote standalone/fsa-college-concept.html");
