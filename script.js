const flipInner = document.getElementById("flipInner");
const contentArea = document.getElementById("contentArea");

/* ---- Sections content ---- */
const sections = {
  about: `
    <h2>About Me</h2>
    <img src="imageshero.png" alt="Kint Lee Sola" class="about-image">
    <p>I blend technology, organization, and creativity. I've supported executives, optimized ad campaigns, and delivered clear reports and assets—always aiming for calm, useful systems that help teams move faster.</p>
    <p>Recent roles include Executive Assistant to the Vice Mayor, Ads Analyst, Proofreader, and Virtual Assistant. I enjoy turning scattered tasks into organized, repeatable workflows.</p>
  `,
  experience: `
    <h2>Work Experience</h2>
    <ul>
      <li><strong>Executive Assistant of Vice Mayor</strong> — Municipality of Ocampo, Camarines Sur <em>(Aug 2024 – Apr 2025)</em></li>
      <li><strong>Ads Analyst</strong> — Private Employer | Remote <em>(Jan 2025 – Mar 2025)</em></li>
      <li><strong>Proofreader (Freelance)</strong> — Upwork | Remote <em>(Dec 2024 – Jun 2025)</em></li>
      <li><strong>Virtual Assistant (VA)</strong> — Upwork | Remote <em>(Aug 2024 – Feb 2025)</em></li>
      <li><strong>Customer Service Representative</strong> — Sutherland Global Services <em>(2018–2020)</em></li>
    </ul>
  `,
  projects: `
    <h2>Projects</h2>
    <h3>📝 Executive Support</h3>
    <p>Speech drafting, report creation, and project coordination for the Vice Mayor’s Office.</p>

    <h3>📊 Ad Campaign Optimization</h3>
    <p>Targeting adjustments and creative testing to improve CTR and conversions.</p>

    <h3>🎨 Creative Design</h3>
    <p>Marketing visuals and layouts built in Canva & Figma for small campaigns.</p>

    <h3>📂 Confidential Projects</h3>
    <p>Detailed previews available upon request due to privacy.</p>
  `,
  skills: `
    <h2>Skills</h2>
    <h3>Technical</h3>
    <ul>
      <li>HTML, CSS, JavaScript (fundamentals)</li>
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
    <p><strong>School Partnership Outreach Assistant</strong> — Unbound (2022–2024)</p>
    <ul>
      <li>Facilitated educational programs for 500+ students.</li>
      <li>Supported donor communications and partnership development.</li>
    </ul>
  `,
  training: `
    <h2>Training & Certifications</h2>
    <ul>
      <li><strong>Accenture Technology Academy</strong> — Innovative Technology Services Philippines | <em>May 2024</em></li>
      <li><strong>AWS Academy Cloud Developing</strong> — Amazon Web Services | <em>Apr 2024</em></li>
      <li><strong>AWS Academy Cloud Foundations</strong> — Amazon Web Services | <em>Jan 2024</em></li>
      <li><strong>Introduction to Cybersecurity</strong> — Cisco Networking Academy | <em>Jun 2023</em></li>
      <li><strong>3GX Solutions</strong> — On-the-Job Training (Installment Department) | <em>Feb 2018</em></li>
    </ul>
  `,
  achievements: `
    <h2>Achievements</h2>
    <ul>
      <li>English Immersive Environment (EIE) Champion — <em>Oct 2023</em></li>
      <li>Dean’s Lister — <em>Aug 2021</em></li>
    </ul>
  `,
  contact: `
    <h2>Contact</h2>
    <p>📞 Landline: <strong>054-871-0261</strong></p>
    <p>📱 Mobile: <strong>+63 936-825-6150</strong></p>
    <p>📧 Email: <a href="mailto:solakintlee@gmail.com">solakintlee@gmail.com</a></p>
    <p>💼 LinkedIn: <a href="https://linkedin.com/in/kint-lee-sola/" target="_blank">linkedin.com/in/kint-lee-sola</a></p>
    <p>🌐 Portfolio: <a href="https://kintleesola.github.io/ResumeWebsite/" target="_blank">Resume Website</a></p>
  `
};

/* ---- Actions ---- */
function showCard(section) {
  contentArea.innerHTML = sections[section] || "<p>Section not found.</p>";
  flipInner.style.transform = "rotateY(180deg)";
}
function goHome() {
  flipInner.style.transform = "rotateY(0deg)";
}

/* Optional: keyboard support (Esc = back) */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") goHome();
});
