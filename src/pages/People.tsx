import danielImg from '../assets/people/daniel.jpg'
import katieImg from '../assets/people/katie.jpg'
import chrisImg from '../assets/people/chris.jpg'
import arctostaphylosImg from '../assets/people/arctostaphylos.jpg'
import mrLittleGuyImg from '../assets/people/mrlittleguy.jpg'
import annaImg from '../assets/people/anna.png'

export default function People() {
  return (
    <div className="people-page fade-in" style={{
      maxWidth: '1000px',
      margin: '0 auto',
      position: 'relative'
    }}>
      <h1 style={{ 
        fontSize: '2.5rem',
        marginBottom: '3rem',
        fontWeight: 700
      }}>
        People
      </h1>

      {/* PI - Daniel Anstett */}
      <div className="person-card">
        <div>
          <img
            src={danielImg}
            alt="Daniel Anstett"
            className="person-photo"
          />
        </div>
        <div>
          <h2 className="person-name">Daniel Anstett</h2>
          <p style={{ 
            fontSize: '1rem', 
            fontWeight: 600, 
            color: 'var(--text-secondary)', 
            marginBottom: '1rem'
          }}>
            Principal Investigator
          </p>
          <p className="person-bio">
            Daniel studies evolutionary ecology across large spatial scales with a focus on understanding
            range-wide differences in adaptive traits. He uses a combination of latitudinal surveys,
            common gardens, plant chemistry, and landscape genomics to research geographical variation
            in trait evolution.
          </p>
          <p style={{ marginTop: '1rem', lineHeight: 2 }}>
            <a href="mailto:dna38@cornell.edu">Email</a> • 
            <a href="https://scholar.google.ca/citations?hl=en&user=9vyKmwIAAAAJ" target="_blank" rel="noopener noreferrer"> Google Scholar</a>
          </p>
        </div>
      </div>

      {/* Post-doc - Anna Peschel */}
      <div className="person-card">
        <div>
          <img
            src={annaImg}
            alt="Anna Peschel"
            className="person-photo"
          />
        </div>
        <div>
          <h2 className="person-name">Anna Peschel</h2>
          <p style={{ 
            fontSize: '1rem', 
            fontWeight: 600, 
            color: 'var(--text-secondary)', 
            marginBottom: '1rem'
          }}>
            Post-doctoral Researcher
          </p>
          <p className="person-bio">
            Anna investigates the molecular mechanisms underlying plant adaptation to environmental stress.
            Her work combines genomics, transcriptomics, and physiological studies to understand how plants
            respond to climate change at the molecular level.
          </p>
          <p style={{ marginTop: '1rem', lineHeight: 2 }}>
            <a href="mailto:example@cornell.edu">Email</a> • 
            <a href="#"> Google Scholar</a>
          </p>
        </div>
      </div>

      {/* PhD Student - Katie Debbas */}
      <div className="person-card">
        <div>
          <img
            src={katieImg}
            alt="Katie Debbas"
            className="person-photo"
          />
        </div>
        <div>
          <h2 className="person-name">Katie Debbas</h2>
          <p style={{ 
            fontSize: '1rem', 
            fontWeight: 600, 
            color: 'var(--text-secondary)', 
            marginBottom: '1rem'
          }}>
            PhD Student
          </p>
          <p className="person-bio">
            Katie studies latitudinal gradients in plant-herbivore interactions and the evolution of plant
            defense mechanisms. Her research combines field surveys across climate gradients with common
            garden experiments and chemical analysis of defensive compounds.
          </p>
          <p style={{ marginTop: '1rem', lineHeight: 2 }}>
            <a href="mailto:example@cornell.edu">Email</a> • 
            <a href="#"> Google Scholar</a>
          </p>
        </div>
      </div>

      {/* Collaborating PhD Student - Chris Talbot */}
      <div className="person-card">
        <div>
          <img
            src={chrisImg}
            alt="Chris Talbot"
            className="person-photo"
          />
        </div>
        <div>
          <h2 className="person-name">Chris Talbot</h2>
          <p style={{ 
            fontSize: '1rem', 
            fontWeight: 600, 
            color: 'var(--text-secondary)', 
            marginBottom: '1rem'
          }}>
            Collaborating PhD Student
          </p>
          <p className="person-bio">
            Chris combines computational biology and field ecology to study evolutionary genomics.
            His work integrates large-scale genomic data with ecological experiments to understand
            how plants adapt to environmental change across time and space.
          </p>
          <p style={{ marginTop: '1rem', lineHeight: 2 }}>
            <a href="mailto:example@cornell.edu">Email</a> • 
            <a href="https://chris-a-talbot.com" target="_blank" rel="noopener noreferrer"> Website</a> • 
            <a href="#"> GitHub</a>
          </p>
        </div>
      </div>

      {/* Lab Companions */}
      <hr style={{ 
        border: 'none',
        borderTop: '1px solid var(--border-subtle)',
        margin: '4rem 0 3rem'
      }} />
      
      <h2 style={{ 
        fontSize: '1.75rem', 
        marginBottom: '2rem', 
        fontWeight: 700
      }}>
        Lab Companions
      </h2>

      <div className="person-card">
        <div>
          <div style={{
            width: '180px',
            height: '180px',
            backgroundColor: '#e8e8e8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.9rem',
            color: '#999',
            border: '1px solid var(--border-subtle)'
          }}>
            Photo coming soon
          </div>
        </div>
        <div>
          <h2 className="person-name">Totoro</h2>
          <p style={{ 
            fontSize: '1rem', 
            fontWeight: 600, 
            color: 'var(--text-secondary)', 
            marginBottom: '1rem'
          }}>
            Lab Dog
          </p>
          <p className="person-bio">
            Totoro is our resident lab mascot and plant enthusiast. While not directly involved in
            research, Totoro provides valuable emotional support during long days in the greenhouse
            and helps keep the lab stress-free and full of joy.
          </p>
        </div>
      </div>

      <div className="person-card">
        <div>
          <img
            src={arctostaphylosImg}
            alt="Arctostaphylos uva-ursi"
            className="person-photo"
          />
        </div>
        <div>
          <h2 className="person-name">Arctostaphylos uva-ursi</h2>
          <p style={{ 
            fontSize: '1rem', 
            fontWeight: 600, 
            color: 'var(--text-secondary)', 
            marginBottom: '1rem'
          }}>
            Lab Cat
          </p>
          <p className="person-bio">
            Named after the plant species <em>Arctostaphylos uva-ursi</em> (bearberry), Arctostaphylos
            brings a sense of calm to the lab environment. Their curiosity mirrors our scientific
            approach to understanding plant evolution.
          </p>
        </div>
      </div>

      <div className="person-card">
        <div>
          <img
            src={mrLittleGuyImg}
            alt="Mr. Little Guy"
            className="person-photo"
          />
        </div>
        <div>
          <h2 className="person-name">Mr. Little Guy</h2>
          <p style={{ 
            fontSize: '1rem', 
            fontWeight: 600, 
            color: 'var(--text-secondary)', 
            marginBottom: '1rem'
          }}>
            Lab Cat
          </p>
          <p className="person-bio">
            Mr. Little Guy brings curiosity and playfulness to the lab environment. His presence reminds
            us that scientific discovery often comes from unexpected places, much like the evolutionary
            surprises we uncover in our plant studies.
          </p>
        </div>
      </div>

    </div>
  )
}
