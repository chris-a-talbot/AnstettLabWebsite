import { Link } from 'react-router-dom'
import '../styles/home.css'

export default function Home() {
  return (
    <div className="home-wrapper">
      {/* Decorative botanical elements */}
      <div className="botanical-bg botanical-left"></div>
      <div className="botanical-bg botanical-right"></div>
      
      {/* Hero Section with Magnifying Glass */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="magnifying-glass-wrapper">
              <div className="magnifying-glass">
                <div className="glass-rim">
                  <div className="specimen-view">
                    <div className="specimen-image"></div>
                    <div className="specimen-label">
                      <span className="label-text">SPECIMEN: <em>Arabidopsis thaliana</em></span>
                      <span className="label-text">LOCATION: <em>Latitudinal Gradient</em></span>
                      <span className="label-text">DATE: <em>2024</em></span>
                    </div>
                  </div>
                </div>
                <div className="glass-handle"></div>
              </div>
              <div className="mounted-slides-label">mounted slides</div>
            </div>
            
            <div className="hero-text">
              <h2 className="hero-title">
                <span className="title-word">Evolution</span>{' '}
                <span className="title-word">in real time.</span>
              </h2>
              <p className="hero-subtitle">
                Tracking rapid adaptation and biodiversity in a changing climate<br />
                through biological collections and modern genomics.
              </p>
              <Link to="/research" className="btn btn-hero">
                View Current Research
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Expertise & Exploration Section */}
      <section className="expertise-section">
        <div className="container">
          <h2 className="section-title">Expertise & Exploration</h2>
          
          <div className="expertise-grid">
            {/* Biology Box */}
            <div className="expertise-box">
              <div className="expertise-icon">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 20 L50 80 M35 35 L50 20 L65 35" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M30 50 C30 50, 35 45, 40 50 C45 55, 45 60, 40 65 C35 70, 30 70, 30 70" stroke="currentColor" strokeWidth="2.5" fill="none"/>
                  <path d="M70 50 C70 50, 65 45, 60 50 C55 55, 55 60, 60 65 C65 70, 70 70, 70 70" stroke="currentColor" strokeWidth="2.5" fill="none"/>
                  <ellipse cx="50" cy="72" rx="8" ry="4" fill="var(--brown-medium)" opacity="0.3"/>
                </svg>
              </div>
              <h3 className="expertise-title">Biology</h3>
              <div className="expertise-label">
                <span>Landscape Genomics</span>
                <span>& Rapid Evolution</span>
              </div>
            </div>
            
            {/* Herbarium Box */}
            <div className="expertise-box">
              <div className="expertise-icon">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="25" y="15" width="50" height="70" stroke="currentColor" strokeWidth="2.5" fill="none"/>
                  <line x1="30" y1="15" x2="30" y2="85" stroke="currentColor" strokeWidth="2"/>
                  <rect x="35" y="25" width="30" height="15" fill="var(--green-sage)" opacity="0.4"/>
                  <rect x="35" y="45" width="30" height="15" fill="var(--green-sage)" opacity="0.4"/>
                  <rect x="35" y="65" width="30" height="8" fill="var(--brown-medium)" opacity="0.3"/>
                  <line x1="38" y1="30" x2="62" y2="30" stroke="currentColor" strokeWidth="1.5"/>
                  <line x1="38" y1="35" x2="62" y2="35" stroke="currentColor" strokeWidth="1.5"/>
                  <line x1="38" y1="50" x2="62" y2="50" stroke="currentColor" strokeWidth="1.5"/>
                  <line x1="38" y1="55" x2="62" y2="55" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <h3 className="expertise-title">Herbarium</h3>
              <div className="expertise-label">
                <span>Historical</span>
                <span>Herbarium Collections</span>
              </div>
            </div>
            
            {/* SciComm Box */}
            <div className="expertise-box">
              <div className="expertise-icon">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="20" y="25" width="60" height="50" stroke="currentColor" strokeWidth="2.5" fill="none"/>
                  <line x1="25" y1="35" x2="75" y2="35" stroke="currentColor" strokeWidth="2"/>
                  <line x1="25" y1="45" x2="70" y2="45" stroke="currentColor" strokeWidth="1.5"/>
                  <line x1="25" y1="52" x2="68" y2="52" stroke="currentColor" strokeWidth="1.5"/>
                  <line x1="25" y1="59" x2="72" y2="59" stroke="currentColor" strokeWidth="1.5"/>
                  <line x1="25" y1="66" x2="65" y2="66" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M65 30 L70 25 L75 30 L70 20" stroke="currentColor" strokeWidth="2" fill="var(--tan-dark)"/>
                </svg>
              </div>
              <h3 className="expertise-title">SciComm</h3>
              <div className="expertise-label">
                <span>Science</span>
                <span>Communication & Education</span>
              </div>
            </div>
            
            {/* Web Design Box */}
            <div className="expertise-box">
              <div className="expertise-icon">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="20" y="30" width="60" height="45" stroke="currentColor" strokeWidth="2.5" fill="none" rx="2"/>
                  <line x1="20" y1="40" x2="80" y2="40" stroke="currentColor" strokeWidth="2.5"/>
                  <text x="30" y="55" fill="currentColor" fontSize="20" fontFamily="monospace">&lt;/&gt;</text>
                  <circle cx="25" cy="35" r="1.5" fill="currentColor"/>
                  <circle cx="30" cy="35" r="1.5" fill="currentColor"/>
                  <circle cx="35" cy="35" r="1.5" fill="currentColor"/>
                  <path d="M50 70 L50 85 M45 82 L50 87 L55 82" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <ellipse cx="50" cy="88" rx="15" ry="3" fill="var(--brown-medium)" opacity="0.3"/>
                </svg>
              </div>
              <h3 className="expertise-title">Web Design</h3>
              <div className="expertise-label">
                <span>Biological Data &</span>
                <span>Web Development</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
