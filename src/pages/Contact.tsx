import '../styles/contact.css';

// Import flower specimens for decoration
import erycar8 from '../assets/flowers/erycar_8.png';
import trirep1 from '../assets/flowers/trirep_1.png';
import esccal4 from '../assets/flowers/esccal_4.png';
import chafas3 from '../assets/flowers/chafas_3.png';

export default function Contact() {
  return (
    <div className="contact-wrapper">
      <div className="container">
        <h1 className="page-title">Contact</h1>
        
        <div className="contact-grid-wrapper">
          {/* Decorative flower specimens */}
          <div className="flower-specimen flower-top-left">
            <img src={chafas3} alt="Pressed flower specimen" />
          </div>
          <div className="flower-specimen flower-top-right">
            <img src={erycar8} alt="Pressed flower specimen" />
          </div>
          <div className="flower-specimen flower-bottom-left">
            <img src={trirep1} alt="Pressed flower specimen" />
          </div>
          <div className="flower-specimen flower-bottom-right">
            <img src={esccal4} alt="Pressed flower specimen" />
          </div>
          
          <div className="contact-grid">
          {/* Get in Touch Card */}
          <section className="contact-card intro-card">
            <h2 className="card-title">Get in Touch</h2>
            <p className="card-text">
              We welcome inquiries from prospective students, collaborators, and anyone interested 
              in our research.
            </p>
            <div className="email-section">
              <a href="mailto:dna38@cornell.edu" className="email-link">
                dna38[at]cornell.edu
              </a>
            </div>
          </section>
          
          {/* Lab Address Card */}
          <section className="contact-card address-card">
            <h2 className="card-title">Lab Address</h2>
            <div className="address-content">
              <p className="address-line lab-name">
                <strong>The Anstett Lab</strong>
              </p>
              <p className="address-line">
                School of Integrative Plant Science
              </p>
              <p className="address-line">
                Plant Biology Section
              </p>
              <p className="address-line">
                Cornell University College of Agriculture and Life Sciences
              </p>
              <p className="address-line">
                Emerson Hall, Room 331
              </p>
              <p className="address-line">
                236 Mann Drive
              </p>
              <p className="address-line">
                Ithaca, NY 14850
              </p>
            </div>
          </section>
          
          {/* Prospective Students Card */}
          <section className="contact-card students-card">
            <h2 className="card-title">Prospective Students</h2>
            <p className="card-text">
              If you are interested in joining the lab as a graduate student, post-doctoral researcher, 
              or undergraduate researcher, please reach out to discuss potential projects and opportunities. 
              We are always looking for motivated individuals passionate about evolutionary ecology and 
              conservation science.
            </p>
          </section>
        </div>
        </div>
      </div>
    </div>
  )
}
