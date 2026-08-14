const skills = ["React", "Next.js", "JavaScript", "HTML5 & CSS3", "PHP", "MySQL", "Figma", "Git & GitHub"];

const strengths = [
  ["Creative problem solving", "I enjoy finding the clearest path through a messy brief, whether that means simplifying a flow or trying a different approach."],
  ["Builder energy", "I am comfortable taking an idea from a loose starting point to something real, usable, and ready to learn from."],
  ["An audience-aware mindset", "Making products and short-form content has taught me to notice what catches attention and what makes people stay."],
  ["Independent learning", "I learn by making, testing, asking better questions, and improving the next version."],
];

const diySteps = [
  ["01", "Idea", "Notice a small creative spark and turn it into a product concept."],
  ["02", "Create", "Make cute DIY pieces, refine the details, and prepare them to share."],
  ["03", "Launch", "Set up a TikTok Shop as a real home for the project."],
  ["04", "Promote", "Plan and create short TikTok videos to introduce the work."],
  ["05", "Learn", "Pay attention to content, audience response, and what feels worth exploring."],
  ["06", "Iterate", "Use those observations to improve the products and the next post."],
];

const aiWorkflow = [
  ["Judgement", "Knowing when an AI suggestion is useful, incomplete, or simply wrong."],
  ["Human context", "Turning stakeholder needs and audience behaviour into clear experiences."],
  ["Ownership", "Taking an idea from first brief through build, launch, and iteration."],
  ["Taste & craft", "Making the final result intentional, clear, and trustworthy."],
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Shuyi Ng home">SN<span>.</span></a>
        <div className="nav-links">
          <a href="#about">About</a><a href="#work">Work</a><a href="#studio">Studio</a><a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow">Frontend-focused web developer &middot; Singapore</p>
          <h1>I build digital products that feel <em>clear, fast,</em> and useful.</h1>
          <p className="hero-copy">I&apos;m Shuyi Ng, a web developer with 9 years of experience turning complex business needs into reliable, user-centred web applications.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <span aria-hidden="true">&darr;</span></a>
            <a className="text-link" href="mailto:shuyi.ng@outlook.sg">Let&apos;s talk <span aria-hidden="true">&nbsp;</span></a>
          </div>
        </div>
        <div className="hero-note"><span className="note-dot" /> Available for meaningful opportunities</div>
      </section>

      <section className="section about" id="about">
        <p className="section-label">01 / About</p>
        <div className="section-content intro-grid">
          <h2>Thoughtful interfaces.<br />Dependable engineering.</h2>
          <div>
            <p className="lead">I create web experiences that make complicated tasks simpler for people. My foundation is in front-end craft, with hands-on full-stack experience that has grown through real product work.</p>
            <p>In the automotive marketplace industry, I&apos;ve developed and maintained business-critical applications, partnering with designers and stakeholders from the first conversation through to release and improvement.</p>
            <p>I also love making cute DIY items and experimenting with creative projects. That same curiosity has become an independent TikTok Shop side project: a small, hands-on space where I create products, make promotional videos, and keep learning by trying things.</p>
          </div>
        </div>
        <div className="career-note">
          <p className="small-heading">A developer&apos;s evolution</p>
          <p>My early career was rooted in HTML, CSS, JavaScript, PHP, and responsive interface work. I helped support the transition from HTTP to HTTPS, then moved into modern Next.js development as the platform evolved. Today, I use AI tools such as ChatGPT and GitHub Copilot to speed up research, learning, debugging, and documentation &mdash; while validating the implementation myself.</p>
        </div>
      </section>

      <section className="numbers" aria-label="Experience at a glance">
        <div><strong>9+</strong><span>years building for the web</span></div>
        <div><strong>2</strong><span>specialist diplomas</span></div>
        <div><strong>1</strong><span>independent creative shop</span></div>
      </section>

      <section className="section work" id="work">
        <p className="section-label">02 / Selected work</p>
        <div className="section-content">
          <article className="project-card">
            <div className="project-header">
              <div>
                <p className="project-kicker">Sgcarmart &middot; 2023&ndash;2025</p>
                <h2>Car of the Year</h2>
              </div>
              <span className="project-mark" aria-hidden="true">01</span>
            </div>
            <p className="project-summary">An annual digital campaign that helps drivers discover standout cars. Across three editions, my role grew from frontend implementation to owning delivery across frontend and backend components.</p>
            <dl className="project-details">
              <div><dt>What I built</dt><dd>A responsive campaign experience with evolving frontend and backend functionality.</dd></div>
              <div><dt>Why it mattered</dt><dd>It gave editorial and commercial teams a focused, engaging destination for a time-sensitive annual campaign.</dd></div>
              <div><dt>What I learned</dt><dd>How to balance fixed launch dates, shifting requirements, API performance, and a polished user experience.</dd></div>
              <div><dt>Toolkit</dt><dd>React, Next.js, PHP, MySQL, HTML, CSS, JavaScript</dd></div>
            </dl>
            <div className="project-timeline">
              <div><span>2023</span><h3>Frontend development</h3><p>Built the responsive campaign experience alongside a dedicated backend developer.</p></div>
              <div><span>2024</span><h3>Full-stack contribution</h3><p>Led frontend delivery while contributing to backend development and evolving campaign requirements.</p></div>
              <div><span>2025</span><h3>Technical ownership</h3><p>Owned frontend and backend delivery, including API-performance improvements and launch support.</p></div>
            </div>
            <div className="project-footer">
              <p>Delivered against fixed annual launch deadlines in collaboration with design, editorial, sales, and technical stakeholders.</p>
              <div className="project-links" aria-label="Car of the Year live editions">
                <a href="https://www.sgcarmart.com/coty2023/" target="_blank" rel="noreferrer">2023 <span aria-hidden="true">&nbsp;</span></a>
                <a href="https://www.sgcarmart.com/coty2024/" target="_blank" rel="noreferrer">2024 <span aria-hidden="true">&nbsp;</span></a>
                <a href="https://www.sgcarmart.com/coty2025/" target="_blank" rel="noreferrer">2025 <span aria-hidden="true">&nbsp;</span></a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section studio" id="studio">
        <p className="section-label">03 / Independent studio</p>
        <div className="section-content">
          <div className="studio-heading">
            <div><p className="small-heading">DIY &amp; TikTok Shop</p><h2>A small creative project with real-world lessons.</h2></div>
            <p>I wanted to understand what happens when an idea moves from a code-free concept to a physical product, its own small brand, a piece of content, and finally an audience. I make the products, set up the shop, and create promotional TikToks using CapCut and ChatGPT to shape a story before editing the final post. Every post is a chance to learn and improve the next version.</p>
          </div>
          <div className="studio-board" aria-label="DIY TikTok Shop project process">
            {diySteps.map(([number, title, description]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}
          </div>
          <div className="studio-assets">
            <div className="studio-links"><p className="small-heading">Visit the project</p><a className="placeholder-link" href="https://www.tiktok.com/@just_smileee3" target="_blank" aria-label="TikTok Shop link placeholder">TikTok Shop link <span aria-hidden="true">&nbsp;</span></a></div>
          </div>
        </div>
      </section>

      <section className="section experience" id="experience">
        <p className="section-label">04 / Experience</p>
        <div className="section-content">
          <article className="role feature-role">
            <div className="role-meta"><span>2017&ndash;2026</span><span>Sgcarmart</span></div>
            <div className="role-title"><h2>Web Developer</h2><p>Delivered full-stack web applications for a large automotive marketplace, from responsive interfaces to backend integration.</p></div>
            <ul><li>Built polished, responsive user interfaces with React, Next.js, HTML, CSS and JavaScript.</li><li>Connected frontend experiences with PHP, MySQL and backend systems.</li><li>Improved quality and performance through testing, debugging and optimisation.</li><li>Worked closely with UI/UX designers and stakeholders to deliver useful features.</li></ul>
          </article>
          <article className="role compact-role"><div className="role-meta"><span>2016&ndash;2017</span><span>Coolasia Technology</span></div><div className="role-title"><h3>Software Developer Intern</h3><p>Supported software development, quality assurance, bug fixing and technical documentation.</p></div></article>
        </div>
      </section>

      <section className="section skills" id="skills">
        <p className="section-label">05 / Toolkit &amp; strengths</p>
        <div className="section-content skills-layout">
          <div><h2>Technical thinking, with room for a little imagination.</h2><div className="skill-cloud" aria-label="Technical skills">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div><aside className="ai-note"><span aria-hidden="true">✦</span><div><p><strong>AI helps me build faster, not think less.</strong></p><p>I use it to accelerate research, prototypes, debugging, and content ideas. I bring the judgement to decide what is worth building and the care to make it useful for people.</p></div></aside><div className="ai-workflow" aria-label="What I bring in an AI-assisted world">{aiWorkflow.map(([title, description]) => <article key={title}><h3>{title}</h3><p>{description}</p></article>)}</div></div>
          <div className="strengths"><p className="small-heading">What I bring</p><ul>{strengths.map(([title, description], index) => <li key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}</ul></div>
        </div>
      </section>

      <section className="section approach" id="approach">
        <p className="section-label">06 / How I work</p>
        <div className="section-content"><h2>Good work starts with listening &mdash; and finishes with a reliable launch.</h2><div className="process-list"><div><span>01</span><div><h3>Understand</h3><p>Clarify user needs, project goals, and the practical constraints behind every request.</p></div></div><div><span>02</span><div><h3>Align</h3><p>Work closely with designers, editorial teams, sales personnel, and technical stakeholders to keep delivery moving.</p></div></div><div><span>03</span><div><h3>Build &amp; refine</h3><p>Create responsive, maintainable interfaces, then test, debug, and improve the details that shape the user experience.</p></div></div><div><span>04</span><div><h3>Deliver</h3><p>Use daily Scrum check-ins to share progress, raise blockers early, and keep work on track for launch.</p></div></div></div></div>
      </section>

      <section className="section now">
        <p className="section-label">07 / Right now</p>
        <div className="section-content now-content">
          <div><p className="small-heading">Currently curious about</p><h2>Keeping the builder mindset alive.</h2></div>
          <div><p>I&apos;m currently exploring the practical side of AI-assisted development, motion and interaction, short-form content, e-commerce experiments, and better ways to turn a small idea into something useful.</p><p>Some projects begin with a brief. Others begin with a simple question: <em>could I make that?</em></p></div>
        </div>
      </section>

      <section className="section education"><p className="section-label">08 / Education</p><div className="section-content education-list"><div><span>2020</span><h3>Specialist Diploma in Information Systems Development</h3><p>Nanyang Polytechnic</p></div><div><span>2017</span><h3>Diploma in Mobile Software Development</h3><p>Republic Polytechnic</p></div><div><span>Certifications</span><h3>Professional Scrum Master I (PSM I)</h3><p>Also certified in SEO, Google Ads and Data Analytics.</p></div></div></section>

      <section className="contact" id="contact"><p className="eyebrow">Have an idea worth building?</p><h2>Let&apos;s create something <em>useful.</em></h2><div className="contact-links"><a href="mailto:shuyi.ng@outlook.sg">shuyi.ng@outlook.sg <span aria-hidden="true">&nbsp;</span></a><a href="https://www.linkedin.com/in/shuyi-ng-204aab416" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">&nbsp;</span></a></div><p className="footer-note">&copy; {new Date().getFullYear()} Shuyi Ng</p></section>
    </main>
  );
}
