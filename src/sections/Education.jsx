import SectionTitle from '../components/SectionTitle'
import { education } from '../data/education'

function Education() {
  return (
    <section className="section" id="education">
      <SectionTitle label="Education" title="Academic background." />
      <div className="grid two-col">
        {education.map((item) => (
          <article className="education-card card" key={item.degree}>
            <span>{item.period}</span>
            <h3>{item.degree}</h3>
            <p>{item.institution}</p>
            <strong>{item.detail}</strong>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Education
