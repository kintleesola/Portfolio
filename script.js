const sections = {
  about: `
    <h2>About Me</h2>
    <!-- image placed on top -->
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

  /* --- keep other sections the same as before (experience, projects, etc.) --- */
};

function showCard(section) {
  const el = document.getElementById("content");
  el.innerHTML = sections[section] || "<p>Section not found.</p><div class='section-footer'>© 2024 Kint Lee B. Sola | PORTFOLIO</div>";
}
