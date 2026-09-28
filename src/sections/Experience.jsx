import SectionTitle from '../components/SectionTitle'
import { experience } from '../data/experience'

function Experience() {
  return (
    <section className="section" id="experience">
      <SectionTitle label="Experience" title="Professional experience." />
      <div className="timeline">
        {experience.map((item) => (
          <article className="timeline-item card" key={`${item.organization}-${item.role}`}>
            <div className="timeline-top">
              <div>
                <h3>{item.role}</h3>
                <p className="organization">{item.organization}</p>
              </div>
              <span>{item.period}</span>
            </div>
            <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
