import SectionTitle from '../components/SectionTitle'
import { certifications } from '../data/certifications'

function Certifications() {
  return (
    <section className="section" id="certifications">
      <SectionTitle label="Certifications" title="Courses and certifications." />
      <div className="cert-list card">
        {certifications.map((item, index) => (
          <div className="cert-item" key={item}><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p></div>
        ))}
      </div>
    </section>
  )
}

export default Certifications
