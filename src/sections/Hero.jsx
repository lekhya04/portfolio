import { ArrowDown, Download, Github, Linkedin } from 'lucide-react'
import SocialLinks from '../components/SocialLinks'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">M.Tech CSE Student • Software Developer</span>
          <h1>Hi, I'm <span>Lekhya</span>.</h1>
          <p>
            I build software applications and explore AI-driven solutions for real-world problems,
            with a focus on clean development, problem solving and continuous learning.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">View Projects <ArrowDown size={18} /></a>
            <a className="button secondary" href="/resume.pdf" download>Download Resume <Download size={18} /></a>
          </div>
          <SocialLinks />
        </div>
        <div className="hero-card">
          <img 
            src="/profile.jpg" 
            alt="Lekhya" 
            className="profile-image" 
          />
          <div>
            <strong>Computer Science</strong>
            <p>Development • Research • Problem Solving</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
