import { Github, Linkedin, Mail } from 'lucide-react'

function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://github.com/lekhya04" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={20} /></a>
      <a href="https://www.linkedin.com/in/kada-lekhya-manaswi-0a4246244" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
      <a href="mailto:lekhya1854@gmail.com" aria-label="Email"><Mail size={20} /></a>
    </div>
  )
}

export default SocialLinks
