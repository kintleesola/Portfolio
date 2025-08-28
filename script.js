const flipInner = document.getElementById("flipInner");
const contentArea = document.getElementById("contentArea");

// Section content
const sections = {
  about: `
    <h2>About Me</h2>
    <p>I blend technology, organization, and creativity. With experience as a Virtual Assistant, Ads Analyst, Executive Assistant, and more, I’ve supported projects, improved workflows, and delivered results with clarity and precision.</p>
  `,
  experience: `
    <h2>Work Experience</h2>
    <ul>
      <li><strong>Executive Assistant of Vice Mayor</strong> – Municipality of Ocampo, Camarines Sur (Aug 2024 – Apr 2025)</li>
      <li><strong>Ads Analyst</strong> – Private Employer | Remote (Jan 2025 – Mar 2025)</li>
      <li><strong>Proofreader (Freelance)</strong> – Upwork | Remote (Dec 2024 – Jun 2025)</li>
      <li><strong>Virtual Assistant (VA)</strong> – Upwork | Remote (Aug 2024 – Feb 2025)</li>
      <li><strong>Customer Service Representative</strong> – Sutherland Global Services (2018–2020)</li>
    </ul>
  `,
  projects: `
    <h2>Projects</h2>
    <div>
      <h3>📝 Executive Support</h3>
      <p>Speech drafting, report creation, and project management for the Vice Mayor’s Office.</p>
    </div>
    <div>
      <h3>📊 Ad Campaign Optimization</h3>
      <p>Improved ad performance through targeted adjustments.</p>
    </div>
    <div>
      <h3>🎨 Creative Design Work</h3>
      <p>Created marketing visuals using Canva & Figma.</p>
    </div>
    <div>
      <h3>📂 Confidential Projects</h3>
      <p>Some project details are available only upon request due to privacy.</p>
    </div>
  `,
  skills: `
    <h2>Skills</h2>
    <h3>Technical</h3>
    <ul>
      <li>Basic HTML, CSS, JavaScript</li>
      <li>SQL, Power BI, Tableau, Looker Studio</li>
      <li>WordPress & Website Management</li>
    </ul>
    <h3>Productivity & Collaboration</h3>
    <ul>
      <li>Microsoft Office & Google Workspace</li>
      <li>Trello, Asana, Slack, Zoom</li>
    </ul>
    <h3>Design & Marketing</h3>
    <ul>
      <li>Canva, Figma, Adobe XD</li>
      <li>Mailchimp, HubSpot, Google Analytics</li>
    </ul>
    <h3>Other Strengths</h3>
    <ul>
      <li>Customer Service & CRM Systems</li>
      <li>Project Coordination & Time Management</li>
      <li>Technical Writing & Documentation</li>
    </ul>
  `,
  hobbies: `
    <h2>Hobbies</h2>
    <ul>
      <li>🎭 Cosplaying</li>
      <li>✏️ Sketching</li>
      <li>📚 Reading</li>
      <li>🎮 Gaming</li>
    </ul>
  `,
  testimonials: `
    <h2>Testimonials</h2>
    <blockquote>
      “Kint showed exceptional communication, teamwork, and presentation skills during the Professional Employment Program. She would be an asset to any team.”
      <br><cite>— Hilary Joan Prilles</cite>
    </blockquote>
  `,
  volunteer: `
    <h2>Volunteer Work</h2>
    <p><strong>School Partnership Outreach Assistant</strong> – Unbound (2022–2024). Facilitated educational programs for 500+ students and supported donor communications.</p>
  `,
  training: `
    <h2>Training & Certifications</h2>
    <ul>
      <li>Accenture Technology Academy – Accenture (May 2024)</li>
      <li>AWS Academy Cloud Developing – AWS (Apr 2024)</li>
      <li>AWS Academy Cloud Foundations – AWS (Jan 2024)</li>
      <li>Introduction to Cybersecurity – Cisco Networking Academy (Jun 2023)</li>
      <li>3GX Solutions – On-the-Job Training (Feb 2018)</li>
    </ul>
  `,
  achievements: `
    <h2>Achievements</h2>
    <ul>
      <li>English
