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
      <p><em>Credential: <a href="https://www.credly.com/go/UoSnMbfn" target="_blank">Verify</a></em></p>
    </div>
    <div class="cert-card">
      <h4>AWS Academy Cloud Foundations</h4>
      <p>Amazon Web Services (AWS) — Issued Jan 2024</p>
    </div>
    <div class="cert-card">
      <h4>Introduction to Cybersecurity</h4>
      <p>Cisco Networking Academy — Issued Jun 2023</p>
    </div>
    <footer>© 2024 Kint Lee B. Sola | PORTFOLIO</footer>
  `,

  languages: `
    <h2>Languages</h2>
    <ul>
      <li><strong>English</strong> — Full professional proficiency</li>
      <li><strong>Filipino</strong> — Native or bilingual proficiency</li>
      <li><strong>Japanese</strong> — Elementary proficiency</li>
    </ul>
    <footer>© 2024 Kint Lee B. Sola | PORTFOLIO</footer>
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
    <footer>© 2024 Kint Lee B. Sola | PORTFOLIO</footer>
  `,

  // 🔹 You should add the rest of your sections here (experience, skills, hobbies, etc.)
};

function showCard(section) {
  document.getElementById("content").innerHTML = sections[section] || "<p>Content not available.</p>";
}
