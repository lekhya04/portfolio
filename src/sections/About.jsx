import SectionTitle from '../components/SectionTitle'

function About() {
  return (
    <section className="section" id="about">
      <SectionTitle
        label="About Me"
        title="Engineering clean, scalable, and impactful software."
        subtitle="M.Tech CSE candidate specializing in modern software engineering and full-stack web applications."
      />
      <div className="about-grid">
        <div className="about-text card">
          <p>
            I am an <strong>M.Tech Computer Science & Engineering</strong> student with a strong foundation in software engineering, object-oriented programming, and system architecture. I focus on building reliable, user-centric applications and optimizing back-end workflows.
          </p>
          <p>
            My experience spans full-stack web development, database management, and API design. I enjoy taking software projects from concept to deployment—emphasizing clean code practices, performance optimization, and intuitive design.
          </p>
          <p>
            Driven by curiosity and structured problem-solving, I continually expand my knowledge of modern technologies to build efficient systems that solve real-world problems.
          </p>
        </div>

        <div className="about-facts card">
          <div>
            <span>Degree</span>
            <strong>M.Tech CSE</strong>
          </div>
          <div>
            <span>Primary Focus</span>
            <strong>Software & Web Development</strong>
          </div>
          <div>
            <span>Core Skills</span>
            <strong>Full-Stack, APIs, Databases</strong>
          </div>
          <div>
            <span>Location</span>
            <strong>India</strong>
          </div>
          <div>
            <span>Availability</span>
            <strong>Open to Software Engineering Roles</strong>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About