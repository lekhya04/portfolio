import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <SectionTitle label="Contact" title="Let's connect." subtitle="Replace these placeholders with your real contact details before publishing." />
      <div className="contact-card card">
        <div>
          <h3>Open to opportunities</h3>
          <p>Internships, software development roles and meaningful technical projects.</p>
        </div>
        <div className="contact-links">
          <a href="mailto:lekhya1854@gmail.com"><Mail size={18} /> Email</a>
          <a href="https://github.com/lekhya04" target="_blank" rel="noreferrer"><Github size={18} /> GitHub <ArrowUpRight size={15} /></a>
          <a href="https://www.linkedin.com/in/kada-lekhya-manaswi-0a4246244" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn <ArrowUpRight size={15} /></a>
        </div>
      </div>
    </section>
  )
}

export default Contact