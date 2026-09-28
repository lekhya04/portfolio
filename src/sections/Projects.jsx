import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

function Projects() {
  return (
    <section className="section" id="projects">
      <SectionTitle label="Projects" title="Things I've built." subtitle="Replace the placeholder links and images with your real project repositories and screenshots." />
      <div className="grid three-col">
        {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
      </div>
    </section>
  )
}

export default Projects
