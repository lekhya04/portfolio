import SectionTitle from '../components/SectionTitle'
import { skillGroups } from '../data/skills'

function Skills() {
  return (
    <section className="section" id="skills">
      <SectionTitle label="Skills" title="Technologies I work with." subtitle="Organized by area so recruiters can scan the stack quickly." />
      <div className="grid three-col">
        {skillGroups.map((group) => (
          <div className="skill-card card" key={group.title}>
            <h3>{group.title}</h3>
            <div className="tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
