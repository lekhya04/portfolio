import { ExternalLink, Github } from 'lucide-react'

function ProjectCard({ project }) {
  return (
    <article className="project-card card">
      <div className="project-image">
        <img src={project.image} alt={'${project.title} screenshot'}/>
      </div>
      <div className="project-content">
        <span className="project-status">{project.status}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tags">
          {project.tech.map((item) => <span key={item}>{item}</span>)}
        </div>
        <div className="project-links">
          <a href={project.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
          {project.demo && <a href={project.demo} target="_blank" rel="noreferrer"><ExternalLink size={17} /> Demo</a>}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
