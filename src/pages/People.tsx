import danielImg from '../assets/people/daniel.jpg'
import katieImg from '../assets/people/katie.jpg'
import chrisImg from '../assets/people/chris.jpg'
import arctostaphylosImg from '../assets/people/arctostaphylos.jpg'
import mrLittleGuyImg from '../assets/people/mrlittleguy.jpg'
import annaImg from '../assets/people/anna.png'
import totoroImg from '../assets/people/totoro.png'

// Import random flowers for decorations
import esccal3 from '../assets/flowers/esccal_3.png'
import erycar5 from '../assets/flowers/erycar_5.png'
import dalpur2 from '../assets/flowers/dalpur_2.png'
import rubhir2 from '../assets/flowers/rubhir_2.png'
import trirep2 from '../assets/flowers/trirep_2.png'
import oenbie3 from '../assets/flowers/oenbie_3.png'
import chafas4 from '../assets/flowers/chafas_4.png'

import '../styles/people.css'

export default function People() {
  // Lorem ipsum text for bios
  const loremShort = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
  const loremMedium = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel sapien ac nisi cursus varius. Nulla facilisi. Praesent euismod libero vel eros dignissim, ut consectetur urna molestie. Cras ultricies magna vel felis volutpat blandit."
  
  return (
    <div className="people-page fade-in">
      {/* Corner decorative flowers */}

      
      <div className="container">
        <div className="people-grid">
          {/* PI - Daniel Anstett - LEFT */}
          <div className="person-card left-column">
            <div className="person-flower" style={{ transform: 'translateY(-50%) rotate(-15deg)', top: '5%', left: '-350px' }}>
              <img src={esccal3} alt="" />
            </div>
            <div className="person-content">
              <img
                src={danielImg}
                alt="Daniel Anstett"
                className="person-photo"
              />
              <div className="person-info">
                <h2 className="person-name">Daniel Anstett</h2>
                <p className="person-role">Principal Investigator</p>
                <p className="person-bio">{loremMedium}</p>
                <p className="person-links">
                  <a href="mailto:dna38@cornell.edu">Email</a> • 
                  <a href="https://scholar.google.ca/citations?hl=en&user=9vyKmwIAAAAJ" target="_blank" rel="noopener noreferrer"> Google Scholar</a>
                </p>
              </div>
            </div>
          </div>

          {/* Post-doc - Anna Peschel - RIGHT */}
          <div className="person-card right-column">
            <div className="person-flower" style={{ transform: 'translateY(-50%) rotate(180deg)', top: '1%' }}>
              <img src={erycar5} alt="" />
            </div>
            <div className="person-content">
              <img
                src={annaImg}
                alt="Anna Peschel"
                className="person-photo"
              />
              <div className="person-info">
                <h2 className="person-name">Anna Peschel</h2>
                <p className="person-role">Post-doctoral Researcher</p>
                <p className="person-bio">{loremMedium}</p>
                <p className="person-links">
                  <a href="mailto:example@cornell.edu">Email</a> • 
                  <a href="#"> Google Scholar</a>
                </p>
              </div>
            </div>
          </div>

          {/* PhD Student - Katie Debbas - LEFT */}
          <div className="person-card left-column">
            <div className="person-flower" style={{ transform: 'translateY(-50%) rotate(-25deg)' }}>
              <img src={dalpur2} alt="" />
            </div>
            <div className="person-content">
              <img
                src={katieImg}
                alt="Katie Debbas"
                className="person-photo"
              />
              <div className="person-info">
                <h2 className="person-name">Katie Debbas</h2>
                <p className="person-role">PhD Student</p>
                <p className="person-bio">{loremMedium}</p>
                <p className="person-links">
                  <a href="mailto:example@cornell.edu">Email</a> • 
                  <a href="#"> Google Scholar</a>
                </p>
              </div>
            </div>
          </div>

          {/* Collaborating PhD Student - Chris Talbot - RIGHT */}
          <div className="person-card right-column">
            <div className="person-flower" style={{ transform: 'translateY(-50%) rotate(30deg)', top: '3%' }}>
              <img src={rubhir2} alt="" />
            </div>
            <div className="person-content">
              <img
                src={chrisImg}
                alt="Chris Talbot"
                className="person-photo"
              />
              <div className="person-info">
                <h2 className="person-name">Chris Talbot</h2>
                <p className="person-role">Collaborating PhD Student</p>
                <p className="person-bio">{loremMedium}</p>
                <p className="person-links">
                  <a href="mailto:example@cornell.edu">Email</a> • 
                  <a href="https://chris-a-talbot.com" target="_blank" rel="noopener noreferrer"> Website</a> • 
                  <a href="#"> GitHub</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Lab Companions Section */}
        <h2 className="section-heading">Lab Companions</h2>
        
        <div className="people-grid">
          {/* Totoro - LEFT */}
          <div className="person-card left-column">
            <div className="person-flower" style={{ transform: 'translateY(-50%) rotate(-20deg)' }}>
              <img src={trirep2} alt="" />
            </div>
            <div className="person-content">
              <img
                src={totoroImg}
                alt="Totoro"
                className="person-photo"
              />
              <div className="person-info">
                <h2 className="person-name">Totoro</h2>
                <p className="person-role">Lab Dog</p>
                <p className="person-bio">{loremShort}</p>
              </div>
            </div>
          </div>

          {/* Arctostaphylos - RIGHT */}
          <div className="person-card right-column">
            <div className="person-flower" style={{ transform: 'translateY(-50%) rotate(200deg)', top: '-5%' }}>
              <img src={oenbie3} alt="" />
            </div>
            <div className="person-content">
              <img
                src={arctostaphylosImg}
                alt="Arctostaphylos uva-ursi"
                className="person-photo"
              />
              <div className="person-info">
                <h2 className="person-name">Arctostaphylos uva-ursi</h2>
                <p className="person-role">Lab Cat</p>
                <p className="person-bio">{loremShort}</p>
              </div>
            </div>
          </div>

          {/* Mr. Little Guy - LEFT */}
          <div className="person-card left-column">
            <div className="person-flower" style={{ transform: 'translateY(-50%) rotate(-30deg)', top: '25%' }}>
              <img src={chafas4} alt="" />
            </div>
            <div className="person-content">
              <img
                src={mrLittleGuyImg}
                alt="Mr. Little Guy"
                className="person-photo"
              />
              <div className="person-info">
                <h2 className="person-name">Mr. Little Guy</h2>
                <p className="person-role">Lab Cat</p>
                <p className="person-bio">{loremShort}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
