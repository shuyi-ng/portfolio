import Link from "next/link";

const strengths = [
  ["Coordination", "Keep people, priorities, and deadlines aligned when work is moving quickly and requirements change."],
  ["Clear communication", "Turn complex information into practical updates, clear next steps, and helpful follow-through for different stakeholders."],
  ["Organisation", "Bring structure to schedules, incoming requests, and day-to-day operational details so work stays dependable."],
  ["Independent ownership", "Take initiative, anticipate what needs attention, and keep progress moving without constant direction."],
];

const competencies = [
  "Stakeholder communication",
  "Priority management",
  "Document and process support",
  "Scheduling and coordination",
  "Follow-through and task tracking",
  "Issue escalation",
  "Cross-functional support",
  "Workflow improvement",
];

export default function AdminPage() {
  return (
    <main className="admin-page">
      <nav className="nav" aria-label="Admin profile navigation">
        <Link className="brand" href="/" aria-label="Shuyi Ng home">SN<span>.</span></Link>
        <div className="nav-links"><Link href="/">Developer profile</Link><a href="#experience">Experience</a><a href="#contact">Contact</a></div>
      </nav>

      <section className="admin-hero hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow">Administrative &amp; operations profile · Singapore</p>
          <h1>Supportive operations work grounded in clarity, follow-through, and steady coordination.</h1>
          <p className="hero-copy">I&apos;m Shuyi Ng. I bring a calm, organised approach to supporting teams, managing shifting priorities, and making sure important details do not get missed. My background in web development strengthened my communication, documentation, and cross-functional coordination skills, which I now apply in administrative and operations work.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="mailto:shuyi.ng@outlook.sg">Get in touch <span aria-hidden="true">&rarr;</span></a>
            <Link className="text-link" href="/">View developer profile <span aria-hidden="true">&nbsp;</span></Link>
          </div>
        </div>
        <div className="hero-note"><span className="note-dot" /> Open to administrative &amp; operations opportunities</div>
      </section>

      <section className="admin-section" id="experience">
        <p className="section-label">01 / Relevant experience</p>
        <div className="admin-grid">
          <div><h2>Practical support for busy teams, changing priorities, and important details.</h2></div>
          <div><p>Across nine years in a fast-moving automotive marketplace, I worked closely with designers, editorial teams, sales personnel, and technical stakeholders to keep work progressing across multiple moving parts. That required clear communication, timely follow-up, and a strong focus on meeting expectations under pressure.</p><p>I am comfortable balancing competing requests, surfacing blockers early, and helping teams stay aligned when priorities shift. I also run a small TikTok Shop project, where I manage product planning, content scheduling, and day-to-day execution, which has sharpened my ability to organise work independently and keep momentum going.</p></div>
        </div>
        <div className="admin-role">
          <div><p className="small-heading">2017–2026 · Sgcarmart</p><h3>Web Developer</h3></div>
          <ul><li>Coordinated work across teams to support time-sensitive launches and changing requests.</li><li>Shared updates in daily Scrum check-ins and flagged blockers early so priorities stayed clear.</li><li>Translated evolving requirements into practical next steps for stakeholders and delivery teams.</li><li>Tracked details, tested updates, and improved internal processes to support smoother delivery.</li></ul>
        </div>
        <div className="admin-role">
          <div><p className="small-heading">Earlier experience · Sales Assistant</p><h3>Customer-facing support role</h3></div>
          <ul><li>Handled customer enquiries and supported day-to-day service needs in a busy environment.</li><li>Balanced multiple requests while maintaining an organised and welcoming space for customers and staff.</li><li>Worked closely with the team to support sales activity, transactions, and follow-up tasks.</li><li>Developed strong communication, patience, and problem-solving skills while managing changing priorities.</li></ul>
        </div>
      </section>

      <section className="admin-section admin-strengths">
        <p className="section-label">02 / What I bring</p>
        <div className="admin-strength-grid">{strengths.map(([title, description], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
      </section>

      <section className="admin-section admin-tools">
        <p className="section-label">03 / Core competencies</p>
        <div className="admin-grid"><h2>Admin support built on organisation, communication, and steady follow-through.</h2><div><p>I am especially strong in keeping work moving behind the scenes: making priorities clearer, helping people stay aligned, and making sure important details do not get missed.</p><p>My experience has also strengthened my ability to support busy teams with documentation, workflow coordination, and practical problem-solving in environments where expectations shift quickly.</p><div className="admin-competencies" aria-label="core competencies">{competencies.map((item) => <span key={item}>{item}</span>)}</div></div></div>
      </section>

      <section className="admin-section admin-tools">
        <p className="section-label">04 / Working style</p>
        <div className="admin-grid"><h2>Reliable in the routine. Thoughtful when things get busy.</h2><div><p>I bring a calm, structured approach to administrative and operational work. I enjoy making information easier to act on, helping people stay aligned, and following through on the details that keep work running smoothly.</p><p>My technical background also means I learn new systems quickly and use tools such as AI thoughtfully to research, organise information, and improve everyday workflows. I am comfortable in fast-moving environments where clarity, consistency, and good communication matter most.</p></div></div>
      </section>

      <section className="contact" id="contact"><p className="eyebrow">Open to administrative &amp; operations opportunities</p><h2>Let&apos;s make work run <em>smoothly.</em></h2><div className="contact-links"><a href="mailto:shuyi.ng@outlook.sg">shuyi.ng@outlook.sg <span aria-hidden="true">&rarr;</span></a><a href="https://www.linkedin.com/in/shuyi-ng-204aab416" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">&rarr;</span></a><a href="/">View developer profile <span aria-hidden="true">&rarr;</span></a></div></section>
    </main>
  );
}
