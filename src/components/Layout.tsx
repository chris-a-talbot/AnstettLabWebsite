import { Outlet, Link } from 'react-router-dom'
import { useState } from 'react'
import FolderTab from './FolderTab'
import logoFlower from '../assets/logos/profile.png'
import cornellLogoBlack from '../assets/logos/cornell_seal_simple_web_black.png'
import flickrIcon from '../assets/icons/flickr.png'
import scholarIcon from '../assets/icons/scholar.png'
import cornellIcon from '../assets/icons/cornell.svg'

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="site-wrapper">
      {/* Header */}
      <header className="site-header">
        <div className="container">
          <div className="header-top">
            <Link to="/" className="site-logo">
              <div className="logo-icon">
                <img src={logoFlower} alt="Pressed flower specimen" className="logo-flower" />
              </div>
              <div className="logo-text">
                <h1>Anstett Lab</h1>
                <div className="logo-tagline">Evolutionary Ecology of Change</div>
              </div>
            </Link>
            
            <a 
              href="https://cals.cornell.edu/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <img
                src={cornellLogoBlack}
                alt="Cornell University"
                className="cornell-logo-header"
                style={{ height: '60px', width: 'auto' }}
              />
            </a>
          </div>
        </div>
      </header>
      
      {/* Navigation Container */}
      <div className="container nav-container">
        <nav className="site-nav">
          {/* Hamburger Menu Button */}
          <button 
            className="hamburger-btn" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Desktop Tabs - progressively hide on smaller screens */}
          <div className="nav-tabs-desktop">
            <FolderTab to="/" label="The Lab" tabIndex={1} end />
            <FolderTab to="/research" label="Research" tabIndex={4} />
            <FolderTab to="/publications" label="Publications" tabIndex={2} />
            <FolderTab to="/people" label="People" tabIndex={3} />
            <FolderTab to="/photos" label="Photos" tabIndex={2} />
            <FolderTab to="/contact" label="Contact" tabIndex={5} />
          </div>

          {/* Mobile Menu Dropdown */}
          <div className={`nav-menu-mobile ${menuOpen ? 'open' : ''}`}>
            <Link to="/" onClick={() => setMenuOpen(false)}>The Lab</Link>
            <Link to="/research" onClick={() => setMenuOpen(false)}>Research</Link>
            <Link to="/publications" onClick={() => setMenuOpen(false)}>Publications</Link>
            <Link to="/people" onClick={() => setMenuOpen(false)}>The Herbarium</Link>
            <Link to="/photos" onClick={() => setMenuOpen(false)}>SciComm & Design</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </div>
        </nav>
      </div>
      
      {/* Main Content */}
      <main className="main-content">
        <Outlet />
      </main>
      
      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <img
                src={cornellLogoBlack}
                alt="Cornell University School of Integrative Plant Science"
                className="footer-logo"
              />
              <div className="footer-text">
                <strong>Cataloged by D.N. Anstett</strong> © {new Date().getFullYear()}. All Rights Reserved.
                <br />
                <span>Site designed by <a href="https://chris-a-talbot.com" target="_blank" rel="noopener noreferrer" className="footer-credit-link">Chris Talbot</a> | <a href="https://github.com/chris-a-talbot/AnstettLabWebsite" target="_blank" rel="noopener noreferrer" className="footer-credit-link">GitHub</a></span>
                <br />
                <span>Pressed flower photos courtesy of <a href="https://cals.cornell.edu/people/katie-debbas" target="_blank" rel="noopener noreferrer" className="footer-credit-link">Katie Debbas</a> and the <a href="http://bhort.bh.cornell.edu/" target="_blank" rel="noopener noreferrer" className="footer-credit-link">Cornell Bailey Hortorium</a></span>
              </div>
              {/* Contact info for smaller screens */}
              <div className="footer-contact">
                <div className="footer-contact-item">
                  <strong>The Anstett Lab</strong>
                </div>
                <div className="footer-contact-item">
                  Email: dna38[at]cornell.edu
                </div>
                <div className="footer-contact-item">
                  <a href="/contact" className="footer-contact-link">Full Contact Info</a>
                </div>
              </div>
            </div>
            
            <div className="footer-social">
              <span className="footer-label">Follow:</span>

              {/* Flickr */}
              <a
                href="https://www.flickr.com/photos/133009705@N05/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Flickr"
              >
                <img src={flickrIcon} alt="Flickr" />
              </a>

              {/* Google Scholar */}
              <a
                href="https://scholar.google.com/citations?user=9vyKmwIAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Google Scholar"
              >
                <img src={scholarIcon} alt="Google Scholar" />
              </a>

              {/* Cornell */}
              <a
                href="https://cals.cornell.edu/people/daniel-anstett"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Cornell University"
              >
                <img src={cornellIcon} alt="Cornell University" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
