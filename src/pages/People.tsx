import danielImg from '../assets/people/daniel.jpg'
import katieImg from '../assets/people/katie.jpg'
import chrisImg from '../assets/people/chris.jpg'
import arctostaphylosImg from '../assets/people/arctostaphylos.jpg'
import mrLittleGuyImg from '../assets/people/mrlittleguy.jpg'
import annaImg from '../assets/people/anna.png'
import totoroImg from '../assets/people/totoro.png'

// Import random flowers for decorations
import erycar1 from '../assets/flowers/erycar_1.png'
import erycar5 from '../assets/flowers/erycar_5.png'
import erycar3 from '../assets/flowers/erycar_3.png'
import dalpur2 from '../assets/flowers/dalpur_2.png'
import trirep2 from '../assets/flowers/trirep_2.png'
import oenbie2 from '../assets/flowers/oenbie_2.png'
import oenbie3 from '../assets/flowers/oenbie_3.png'

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
            <div className="person-flower">
              <img src={erycar1} alt="" style={{ transform: 'rotate(-15deg)' }} />
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
                  <a href="https://scholar.google.ca/citations?hl=en&user=9vyKmwIAAAAJ" target="_blank" rel="noopener noreferrer"> Google Scholar</a> •
                  <a href="https://dnanstett.wordpress.com/wp-content/uploads/2024/02/2.-cv_anstett_website.pdf" target="_blank" rel="noopener noreferrer"> CV</a>
                </p>
              </div>
            </div>
          </div>

          {/* Post-doc - Anna Peschel - RIGHT */}
          <div className="person-card right-column">
            <div className="person-flower">
              <img src={erycar5} alt="" style={{ transform: 'rotate(180deg)' }} />
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
            <div className="person-flower">
              <img src={dalpur2} alt="" style={{ transform: 'rotate(-25deg)' }} />
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
            <div className="person-flower">
              <img src={erycar3} alt="" style={{ transform: 'rotate(200deg)' }} />
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
                  <a href="https://chris-a-talbot.com/CV.html" target="_blank" rel="noopener noreferrer"> CV</a> •
                  <a href="#"> GitHub</a>
                </p>
              </div>
            </div>
          </div>

          {/* Totoro - LEFT */}
          <div className="person-card left-column">
            <div className="person-flower">
              <img src={trirep2} alt="" style={{ transform: 'rotate(-20deg)' }} />
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
            <div className="person-flower">
              <img src={oenbie3} alt="" style={{ transform: 'rotate(200deg)' }} />
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
            <div className="person-flower">
              <img src={oenbie2} alt="" style={{ transform: 'rotate(-30deg)' }} />
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
