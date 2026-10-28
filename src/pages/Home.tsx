import { Link } from 'react-router-dom'
import { useCallback, useState } from 'react'
import '../styles/home.css'
import PublicationEntry from '../components/PublicationEntry'
import ResearchNotebook from '../components/ResearchNotebook'
import type { ResearchPanelId } from '../components/ResearchNotebook'
import { publications, googleScholarUrl } from '../data/publications'

// Import background flower image
import rubhir3 from '../assets/photos/Herbarium/rubhir_3.png'

// Import research images
import genomicsImg from '../assets/research/genomics.png'
import droughtImg from '../assets/research/drought.webp'
import latitudeImg from '../assets/research/latitude.webp'

// Newest papers shown on the home page (list is kept newest-first)
const recentPublications = publications.slice(0, 4)

export default function Home() {
  // Research notebook pop-up
  const [activePanel, setActivePanel] = useState<ResearchPanelId | null>(null)
  const openPanel = (panelId: ResearchPanelId) => setActivePanel(panelId)
  const closePanel = useCallback(() => setActivePanel(null), [])

  // Function to scroll to the next section (research section)
  const scrollToNextSection = useCallback(() => {
    // Get the hero section height and scroll down by that amount plus some padding
    const heroSection = document.querySelector('.hero-section') as HTMLElement;
    if (heroSection) {
      const heroHeight = heroSection.offsetHeight;
      // Scroll down by hero height minus a smaller overlap to show transition
      const scrollDistance = heroHeight - 50; // Leave 50px of hero visible for context
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      window.scrollTo({
        top: scrollDistance,
        behavior: reduceMotion ? 'auto' : 'smooth'
      });
    }
  }, []);

  return (
    <div className="home-wrapper">
      {/* Large overgrown specimen background (decorative) */}
      <div className="overgrown-specimen" aria-hidden="true">
        <img src={rubhir3} alt="" />
      </div>

      {/* Hero Section - Herbarium Display */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            {/* Empty space for flower head */}
            <div className="specimen-display">
            </div>
            
            <div className="hero-text">
              <h2 className="hero-title">
                <span className="title-word">Evolutionary ecology</span>{' '}
                <span className="title-word">of change.</span>
              </h2>
              <p className="hero-subtitle">
                We study rapid adaptation in plants across space and time to understand when evolution can rescue populations from environmental extremes—and when it can&apos;t.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Arrow - Always visible */}
        <button type="button" className="scroll-arrow" onClick={scrollToNextSection} aria-label="Scroll to research">
          <span className="scroll-arrow-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </button>
      </section>
      
      {/* Research Section */}
      <section className="expertise-section">
        <div className="container">
          <h3 className="section-title">Research</h3>
          
          <div className="expertise-grid">
            {/* Landscape genomics Box */}
            <button type="button" onClick={() => openPanel('genomics')} className="expertise-box sticky-note">
              <span className="expertise-icon">
                <img src={genomicsImg} alt="" className="expertise-flower" />
              </span>
              <span className="expertise-title">Landscape genomics</span>
              <span className="sticky-subtitle">How do landscapes shape genetic diversity and adaptation?</span>
            </button>

            {/* Empty Box - Invisible */}
            <div className="expertise-box expertise-box-invisible" aria-hidden="true">
            </div>

            {/* Rapid evolution Box */}
            <button type="button" onClick={() => openPanel('evolution')} className="expertise-box sticky-note">
              <span className="expertise-icon">
                <img src={droughtImg} alt="" className="expertise-flower" />
              </span>
              <span className="expertise-title">Rapid evolution</span>
              <span className="sticky-subtitle">Can plants adapt fast enough to survive climate extremes?</span>
            </button>

            {/* Latitudinal gradients Box */}
            <button type="button" onClick={() => openPanel('gradients')} className="expertise-box sticky-note">
              <span className="expertise-icon">
                <img src={latitudeImg} alt="" className="expertise-flower" />
              </span>
              <span className="expertise-title">Latitudinal gradients</span>
              <span className="sticky-subtitle">How do plant defenses vary across latitudes?</span>
            </button>
          </div>
        </div>
      </section>

      {/* Recent Publications + Contact */}
      <section className="home-lower">
        <div className="recent-publications">
          <h3 className="section-title">Recent publications</h3>
          <ol className="pub-list">
            {recentPublications.map(pub => (
              <PublicationEntry key={pub.doi ?? pub.title} pub={pub} compact />
            ))}
          </ol>
          <p className="recent-publications-links">
            <Link to="/publications">All publications</Link>
            <a href={googleScholarUrl} target="_blank" rel="noopener noreferrer">
              Google Scholar
            </a>
          </p>
        </div>

        <aside className="contact-content">
          <h3 className="contact-title">Get in touch</h3>
          <p className="contact-description">
            We welcome inquiries from prospective students, collaborators, and anyone interested in our research.
          </p>
          <dl className="contact-details">
            <dt>Email</dt>
            <dd className="contact-email">dna38[at]cornell.edu</dd>
            <dt>Department</dt>
            <dd>School of Integrative Plant Science, Cornell University</dd>
          </dl>
          <Link to="/contact" className="contact-full-link">
            Full contact information
          </Link>
        </aside>
      </section>

      {/* Research Modal */}
      {activePanel && <ResearchNotebook panel={activePanel} onClose={closePanel} />}
    </div>
  )
}
