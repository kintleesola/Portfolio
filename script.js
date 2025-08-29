/* Build all section contents.
   NOTE: As requested, About + Projects are left exactly as you provided. */

const sections = {
  about: `
    <h2>About Me</h2>
    <img src="imageshero.png" alt="Kint Lee Sola" class="about-image">
    <p>I’m <strong>Kint Lee Sola</strong>, a graduate of Information Technology with experience as a Customer Service Representative, Virtual Assistant, and Executive Assistant. 
    I have supported diverse clients with professionalism and efficiency, strengthening my skills in organization, problem-solving, and client communication.</p>

    <p>I bring multilingual communication skills, including proficiency in <strong>Japanese</strong>, which helps me deliver accurate and natural written expression for global audiences. 
    I’m also well-versed in remote work environments, with expertise in task management, reporting, and collaboration using tools like Google Workspace, Trello, Microsoft Office Suite, and CRM platforms.</p>

    <p>Beyond work, I enjoy <strong>cosplay</strong>, which allows me to express creativity and attention to detail, as well as hobbies like reading, continuous learning, and exploring digital tools. 
    I take pride in being adaptable, reliable, and detail-oriented—qualities that I believe make me a valuable member of any support team.</p>

    <h3>Licenses & Certifications</h3>
    <div class="cert-card">
      <h4>AWS Academy Cloud Architecting</h4>
      <p>Amazon Web Services (AWS) — Issued Apr 2024</p>
      <p><em>Credential: <a href="https://www.credly.com/go/UoSnMbfn" target="_blank" rel="noopener">Verify</a></em></p>
    </div>
    <div class="cert-card">
      <h4>AWS Academy Cloud Foundations</h4>
      <p>Amazon Web Services (AWS) — Issued Jan 2024</p>
    </div>
    <div class="cert-card">
      <h4>Introduction to Cybersecurity</h4>
      <p>Cisco Networking Academy — Issued Jun 2023</p>
    </div>
    <div class="section-footer">© 2024 Kint Lee B. Sola | PORTFOLIO</div>
  `,

  experience: `
    <h2>Work Experience</h2>
    <ul>
      <li><strong>Executive Assistant of Vice Mayor</strong> — Municipality of Ocampo, Camarines Sur (Hybrid) <em>Aug 2024 – Apr 2025</em>
        <ul>
          <li>Managed executive calendar and coordinated high-level meetings.</li>
          <li>Handled official correspondence and confidential documentation.</li>
        </ul>
      </li>
      <li><strong>Ads Analyst</strong> — Private Employer (Remote) <em>Jan 2025 – Mar 2025</em>
        <ul>
          <li>Enhanced engagement and conversions through data-driven strategies.</li>
          <li>Monitored performance metrics and delivered actionable insights.</li>
        </ul>
      </li>
      <li><strong>Proofreader (Freelance)</strong> — Upwork (Remote) <em>Dec 2024 – Jun 2025</em>
        <ul>
          <li>Ensured error-free, high-quality deliverables across diverse client projects.</li>
          <li>Maintained strict deadlines and editorial standards.</li>
        </ul>
      </li>
      <li><strong>Virtual Assistant (VA)</strong> — Upwork (Remote) <em>Aug 2024 – Feb 2025</em>
        <ul>
          <li>Social media scheduling, content creation, email and file organization.</li>
          <li>Maintained 95%+ client satisfaction rating.</li>
        </ul>
      </li>
      <li><strong>Customer Service Representative</strong> — Sutherland Global Services <em>2018 – 2020</em>
        <ul>
          <li>Delivered multi-channel support with a 97% satisfaction rate.</li>
        </ul>
      </li>
    </ul>
    <div class="section-footer">© 2024 Kint Lee B. Sola | PORTFOLIO</div>
  `,

  projects: `
    <h2>Projects</h2>
    <div class="project-grid">
      <div class="project-card">
        <h3>📝 Executive Support</h3>
        <p>Speech drafting, report creation, and project coordination for the Vice Mayor’s Office.</p>
      </div>
      <div class="project-card">
        <h3>📊 Ad Campaign Optimization</h3>
        <p>Targeting adjustments and creative testing to improve CTR and conversions.</p>
      </div>
      <div class="project-card">
        <h3>🎨 Creative Design</h3>
        <p>Marketing visuals and layouts built in Canva & Figma for small campaigns.</p>
      </div>
      <div class="project-card clickable" onclick="showCard('contact')">
        <h3>📂 University Clinic Management System</h3>
        <p>Research project proposal (UNC). Click to connect with me!</p>
      </div>
    </div>
    <div class="section-footer">© 2024 Kint Lee B. Sola | PORTFOLIO</div>
  `,

  skills: `
    <h2>Skills</h2>
    <h3>Expertise</h3>
    <ul>
      <li>Customer Service · Executive Support · Virtual Assistance & Remote Ops</li>
      <li>Proofreading & Content Quality</li>
    </ul>
    <h3>Technical</h3>
    <ul>
      <li>HTML, CSS, JavaScript (fundamentals)</li>
      <li>SQL, Power BI, Tableau, Looker Studio</li>
      <li>WordPress & basic website management</li>
    </ul>
    <h3>Productivity & Collaboration</h3>
    <ul>
      <li>Microsoft Office & Google Workspace</li>
      <li>Trello, Asana, Slack, Zoom</li>
      <li>CRM and ticketing tools</li>
    </ul>
    <h3>Design & Marketing</h3>
    <ul>
      <li>Canva, Figma, Adobe XD</li>
      <li>Mailchimp, HubSpot, Google Analytics</li>
      <li>SEO basics</li>
    </ul>
    <div class="section-footer">© 2024 Kint Lee B. Sola | PORTFOLIO</div>
  `,

  hobbies: `
    <h2>Hobbies</h2>
    <ul>
      <li>🎭 Cosplaying</li>
      <li>✏️ Sketching</li>
      <li>📚 Reading & continuous learning</li>
      <li>🎮 Gaming</li>
    </ul>
    <div class="section-footer">© 2024 Kint Lee B. Sola | PORTFOLIO</div>
  `,

  testimonials: `
    <h2>Testimonials</h2>
    <blockquote>
      “Kint showed exceptional communication, teamwork, and presentation skills during the Professional Employment Program. She would be an asset to any team.”
      <br><cite>— Hilary Joan Prilles</cite>
    </blockquote>
    <div class="section-footer">© 2024 Kint Lee B. Sola | PORTFOLIO</div>
  `,

  volunteer: `
    <h2>Volunteering</h2>
    <p><strong>Customer Service Staff</strong> — Unbound (nonprofit) <em>Jun 2022 – Present</em></p>
    <ul>
      <li>Supports children-focused initiatives and donor communications.</li>
      <li>Helps deliver programs that empower women and underserved families.</li>
    </ul>
    <div class="section-footer">© 2024 Kint Lee B. Sola | PORTFOLIO</div>
  `,

  training: `
    <h2>Training & Certifications</h2>
    <ul>
      <li><strong>Accenture Technology Academy</strong> — Accenture <em>Issued May 2024</em></li>
      <li><strong>AWS Academy Cloud Developing</strong> — AWS <em>Issued Apr 2024</em></li>
      <li><strong>AWS Academy Cloud Foundations</strong> — AWS <em>Issued Jan 2024</em></li>
      <li><strong>Introduction to Cybersecurity</strong> — Cisco Networking Academy (NetAcad) <em>Issued Jun 2023</em></li>
    </ul>
    <div class="section-footer">© 2024 Kint Lee B. Sola | PORTFOLIO</div>
  `,

  achievements: `
    <h2>Achievements</h2>
    <ul>
      <li>English Immersive Environment (EIE) Champion — <em>Oct 2023</em></li>
      <li>Dean’s Lister — <em>Aug 2021</em></li>
    </ul>
    <div class="section-footer">© 2024 Kint Lee B. Sola | PORTFOLIO</div>
  `,

  languages: `
    <h2>Languages</h2>
    <ul>
      <li><strong>English</strong> — Full professional proficiency</li>
      <li><strong>Filipino</strong> — Native or bilingual proficiency</li>
      <li><strong>Japanese</strong> — Elementary proficiency</li>
    </ul>
    <div class="section-footer">© 2024 Kint Lee B. Sola | PORTFOLIO</div>
  `,

  contact: `
    <h2>Contact</h2>
    <p>📞 Mobile: <strong>+63 936-825-6150</strong></p>
    <p>📧 Email: <a href="mailto:solakintlee@gmail.com">solakintlee@gmail.com</a></p>
    <p>🌐 Portfolio: <a href="https://kintleesola.github.io/Portfolio/" target="_blank" rel="noopener">kintleesola.github.io/Portfolio/</a></p>
    <p>📍 Address: 230, San Francisco, Ocampo, Camarines Sur</p>
    <div class="section-footer">© 2024 Kint Lee B. Sola | PORTFOLIO</div>
  `
};

/* Inject section into the card */
function showCard(section) {
  const el = document.getElementById("content");
  el.innerHTML = sections[section] || "<p>Section not found.</p><div class='section-footer'>© 2024 Kint Lee B. Sola | PORTFOLIO</div>";
}
