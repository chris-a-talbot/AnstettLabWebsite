// People photos are now served directly from public/assets/people/
const danielImg = '/assets/people/daniel.jpg'
const katieImg = '/assets/people/katie.jpg'
const chrisImg = '/assets/people/chris.jpg'
const arctostaphylosImg = '/assets/people/arctostaphylos.jpg'
const mrLittleGuyImg = '/assets/people/mrlittleguy.jpg'
const annaImg = '/assets/people/anna.jpg'
const totoroImg = '/assets/people/totoro.png'
const littleBluestemImg = '/assets/people/littlebluestem.jpg'

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
                <p className="person-bio">Daniel Anstett is an Assistant Professor at Cornell University in the School of Integrative Plant Science. His research focuses on evolutionary ecology across large spatial scales, studying rapid adaptation to climate change, latitudinal gradients in plant-herbivore interactions, and landscape genomics. He uses plants as model systems to understand when evolution can rescue populations from environmental extremes.</p>
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
                <p className="person-bio">Anna is a Postdoctoral researcher with Dr. Daniel Anstett. Her research evaluates the capacity for native plant communities to adapt to environmental change and how the results can inform conservation management practices like seed sourcing. Prior to joining the Anstett research group, Anna investigated these questions using wild plant populations in the tallgrass prairie ecosystem at the University of Minnesota with Dr. Ruth Shaw. She enjoys reading and exploring Ithaca's natural areas with her family.</p>
                <p className="person-links">
                  <a href="mailto:arp326@cornell.edu">Email</a> •
                  <a href="https://scholar.google.com/citations?user=BRnddhEAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer"> Google Scholar</a>
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
                <p className="person-bio">Katie Debbas is a PhD student in Dr. Daniel Anstett's lab investigating the unintended effects of California's native plant industry. Her research uses two iconic wildflowers, the California poppy (<em>Eschscholzia californica</em>) and baby blue eyes (<em>Nemophila menziesii</em>), to assess whether cultivated genotypes are introgressing into wild populations and potentially reducing their adaptive capacity to stressors such as drought. This work aims to conserve the biodiversity in California's precious wild ecosystems by bridging the gap between conservation science and horticultural practice.</p>
                <p className="person-links">
                  <a href="mailto:cd696@cornell.edu">Email</a> •
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
                <p className="person-bio">Chris Talbot is a collaborating PhD student in Dr. Philipp Messer's lab in the field of Computational Biology. He is interested in applying simulation models to understand how genetics can inform conservation efforts across spatial and temporal scales.</p>
                <p className="person-links">
                  <a href="mailto:cat267@cornell.edu">Email</a> •
                  <a href="https://scholar.google.com/citations?user=iC5hGLYAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer"> Google Scholar</a> •
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
              </div>
            </div>
          </div>

          {/* Little Bluestem - RIGHT */}
          <div className="person-card right-column">
            <div className="person-flower">
              <img src={erycar1} alt="" style={{ transform: 'rotate(150deg)' }} />
            </div>
            <div className="person-content">
              <img
                src={littleBluestemImg}
                alt="Little Bluestem"
                className="person-photo"
              />
              <div className="person-info">
                <h2 className="person-name">Little Bluestem</h2>
                <p className="person-role">Lab Cat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
