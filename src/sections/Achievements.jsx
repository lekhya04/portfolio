import SectionTitle from '../components/SectionTitle'

function Achievements() {
  const items = [
    'GATE 2026 — Score 499',
    'Merit recognition for academic performance, 3rd Rank — B.Tech 3rd Year, 2nd Semester',
  ]

  return (
    <section className="section" id="achievements">
      <SectionTitle label="Achievements" title="Milestones and highlights." />
      <div className="grid three-col">
        {items.map((item) => <div className="achievement-card card" key={item}>{item}</div>)}
      </div>
    </section>
  )
}

export default Achievements
