'use client'

import { useState } from 'react'
import { ArrowUpRight, Download, Menu, X } from 'lucide-react'

const skills = [
  'Computer troubleshooting',
  'Hardware & software installation',
  'Microsoft Office suite',
  'HTML, CSS & JavaScript',
  'Database fundamentals',
  'Windows & basic Linux',
  'Data entry & typing',
]

const education = [
  { period: '2022 — 2026', school: 'Mater Dei College', detail: 'B.S. Information Technology · Tubigon, Bohol' },
  { period: '2016 — 2022', school: 'Salus Institute of Technology', detail: 'Secondary education' },
  { period: '2010 — 2016', school: 'Bright Minds Learning Center', detail: 'Elementary education' },
]

const sampleProjects = [
  {
    type: 'Business dashboard',
    title: 'Finance Control',
    description: 'A focused financial workspace for monitoring business numbers and keeping decisions organized.',
    url: 'https://finance-control-red.vercel.app',
  },
  {
    type: 'Inventory system',
    title: 'Inventory Manager',
    description: 'A practical inventory experience designed to make stock tracking and daily operations clearer.',
    url: 'https://inventory-2t55n9tk3-chilldaddys-projects-0bcd7349.vercel.app',
  },
  {
    type: 'Evaluation platform',
    title: 'Performance Evaluation Hub',
    description: 'A structured platform for organizing performance reviews, feedback, and professional growth.',
    url: 'https://performance-evaluation-hub--aljayenocdinoy.replit.app/',
  },
  {
    type: 'Web application',
    title: 'Project Workspace',
    description: 'A web-based project exploring a clean, usable interface for real-world digital workflows.',
    url: 'https://7db24f0a-d59b-4753-832f-81f04beed129-00-h0odq8w000jh.sisko.replit.dev',
  },
]

export function Portfolio() {
  const [open, setOpen] = useState(false)
  const [resumeConfirmOpen, setResumeConfirmOpen] = useState(false)
  const closeMenu = () => setOpen(false)
  const resumeUrl = '/data/Aljay-Enoc-Dinoy-Resume-15fff6.docx'
  const confirmResumeDownload = () => {
    const link = document.createElement('a')
    link.href = resumeUrl
    link.download = 'Aljay-Enoc-Dinoy-Resume.docx'
    document.body.appendChild(link)
    link.click()
    link.remove()
    setResumeConfirmOpen(false)
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Aljay Dinoy home">
          <img className="brand-photo" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Profile-sYBBALVJN0VnXLnrf82Ceepbs8JzXt.png" alt="Portrait of Aljay Dinoy" />
          <span>Aljay Dinoy</span>
        </a>
        <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      </header>

      <section id="top" className="hero page-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Available for entry-level opportunities</p>
          <h1>Building a steady start in <em>technology.</em></h1>
          <p className="hero-lede">I&apos;m Aljay Enoc Dinoy, a detail-oriented B.S. Information Technology graduate ready to contribute, learn, and grow in a professional IT environment.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Let&apos;s connect <ArrowUpRight size={17} /></a>
            <button className="button button-quiet" type="button" onClick={() => setResumeConfirmOpen(true)}><Download size={16} /> Download resume</button>
          </div>
        </div>
      </section>

      <section id="about" className="section page-grid">
        <SectionLabel number="02" title="Profile" />
        <div className="section-content split-content">
          <div><p className="section-kicker">Career objective</p><h2>Curious, practical, and ready to be useful from day one.</h2></div>
          <p className="body-copy">Motivated and detail-oriented BSIT graduate seeking an entry-level position in the IT industry where I can apply my technical skills, contribute to organizational success, and continuously develop my knowledge in a professional environment.</p>
        </div>
      </section>

      <section id="skills" className="section page-grid tinted-section">
        <SectionLabel number="03" title="Capabilities" />
        <div className="section-content"><p className="section-kicker">Basic IT skills</p><div className="skill-list">{skills.map((skill, i) => <div className="skill-item" key={skill}><span>0{i + 1}</span><strong>{skill}</strong></div>)}</div></div>
      </section>

      <section id="projects" className="section page-grid projects-section">
        <SectionLabel number="04" title="Projects" />
        <div className="section-content">
          <div className="projects-intro"><div><p className="section-kicker">Selected work</p><h2>Small systems, built to be useful.</h2></div><p className="body-copy">A selection of web projects I&apos;ve created to practice turning everyday workflows into clear digital experiences.</p></div>
          <div className="project-grid">{sampleProjects.map((project, index) => <article className="project-card" key={project.title}><div className="project-card-top"><span className="project-number">0{index + 1}</span><span className="project-type">{project.type}</span></div><h3>{project.title}</h3><p>{project.description}</p><a className="project-link" href={project.url} target="_blank" rel="noreferrer" aria-label={`View ${project.title} project`}>View project <ArrowUpRight size={16} /></a></article>)}</div>
        </div>
      </section>

      <section id="experience" className="section page-grid">
        <SectionLabel number="05" title="Experience" />
        <div className="section-content experience-block"><p className="section-kicker">On-the-job training</p><h2>Department of Information and Communications Technology</h2><p className="body-copy">DICT — Tagbilaran Provincial Office, Bohol</p><div className="experience-note">A first professional setting to apply foundational IT knowledge, support day-to-day work, and learn from a public technology organization.</div></div>
      </section>

      <section className="section page-grid tinted-section">
        <SectionLabel number="06" title="Education" />
        <div className="section-content education-list">{education.map((item) => <article className="education-item" key={item.school}><span className="period">{item.period}</span><div><h3>{item.school}</h3><p>{item.detail}</p></div></article>)}</div>
      </section>

      <section id="contact" className="contact-section page-grid">
        <SectionLabel number="07" title="Contact" />
        <div className="section-content contact-content"><h2>Open to the next chapter.</h2><p className="body-copy">If you&apos;re looking for someone eager to learn and grounded in the fundamentals, I&apos;d be glad to hear from you.</p><div className="contact-links"><a href="mailto:aljaydinoy061004@gmail.com">aljaydinoy061004@gmail.com <ArrowUpRight size={17} /></a><a href="tel:+639947601035">0994 760 1035 <ArrowUpRight size={17} /></a></div><p className="location">Mataub, Clarin, Bohol · Filipino</p></div>
      </section>

      {resumeConfirmOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setResumeConfirmOpen(false)}>
          <section className="confirm-modal" role="dialog" aria-modal="true" aria-labelledby="resume-dialog-title">
            <p className="section-kicker">Before you download</p>
            <h2 id="resume-dialog-title">Download my resume?</h2>
            <p className="body-copy">This will download a copy of my resume to your device.</p>
            <div className="modal-actions">
              <button className="button button-quiet" type="button" onClick={() => setResumeConfirmOpen(false)}>Cancel</button>
              <button className="button button-primary" type="button" onClick={confirmResumeDownload}>Yes, download <Download size={16} /></button>
            </div>
          </section>
        </div>
      )}

      <footer><span>Aljay Enoc Dinoy</span><span>Built with intention · 2026</span></footer>
    </main>
  )
}

function SectionLabel({ number, title }: { number: string; title: string }) {
  return <div className="section-label"><span>{number}</span><span>{title}</span></div>
}
