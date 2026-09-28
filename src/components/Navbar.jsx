import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = ['about', 'skills', 'projects', 'experience', 'education', 'certifications', 'achievements', 'contact']

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="nav-inner">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>LM<span>.</span></a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((link) => (
            <a key={link} href={`#${link}`} onClick={() => setOpen(false)}>
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
