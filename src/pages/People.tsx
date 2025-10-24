import flower1 from '../assets/flowers/flower1.png'
import flower2 from '../assets/flowers/flower2.png'
import flower3 from '../assets/flowers/flower3.png'
import flower4 from '../assets/flowers/flower4.png'
import flower5 from '../assets/flowers/flower5.png'
import flower6 from '../assets/flowers/flower6.png'

export default function People() {
  return (
    <div className="people-page" style={{ 
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative',
      paddingBottom: '4rem'
    }}>
      {/* PI - Daniel Anstett - Left aligned, 2/3 width */}
      <div className="person-card" style={{
        boxShadow: '8px 8px 0px var(--accent-green)',
        width: '66%',
        marginLeft: '0',
        marginRight: 'auto',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '180px',
            height: '180px',
            borderRadius: '30px',
            backgroundColor: '#ddd',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.9rem',
            color: '#888'
          }}>
            Photo placeholder
          </div>
        </div>
        <div>
          <h2 className="person-name">Daniel Anstett</h2>
          <p style={{ 
            fontSize: '1rem', 
            fontWeight: 600, 
            color: 'var(--accent-green)', 
            marginBottom: '0.75rem',
            fontFamily: 'var(--font-main)'
          }}>
            Principal Investigator
          </p>
          <p className="person-bio">
            Daniel studies evolutionary ecology across large spatial scales with a focus on understanding 
            range-wide differences in adaptive traits. He uses a combination of latitudinal surveys, 
            common gardens, plant chemistry, and landscape genomics to research geographical variation 
            in trait evolution.
          </p>
          <p style={{ marginTop: '0.75rem', fontSize: '0.9rem' }}>
            <a href="mailto:dna38@cornell.edu" style={{ color: 'var(--text-primary)', textDecoration: 'underline', marginRight: '1rem' }}>
              Email
            </a>
            <a href="https://scholar.google.ca/citations?hl=en&user=9vyKmwIAAAAJ" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', textDecoration: 'underline', marginRight: '1rem' }}>
              Google Scholar
            </a>
            <a href="#" style={{ color: 'var(--text-primary)', textDecoration: 'underline' }}>
              Website
            </a>
          </p>
        </div>
      </div>

      {/* Flower overlaying right side of first card (no text there) */}
      <img 
        src={flower2} 
        alt="" 
        style={{ 
          position: 'absolute',
          top: '20px',
          right: '80px',
          width: '280px',
          height: 'auto',
          opacity: 0.9,
          zIndex: 5,
          pointerEvents: 'none'
        }}
      />

      {/* Post-doc - Anna Peschel - Right aligned, 2/3 width */}
      <div className="person-card" style={{
        boxShadow: '8px 8px 0px var(--accent-green)',
        width: '66%',
        marginLeft: 'auto',
        marginRight: '0',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '180px',
            height: '180px',
            borderRadius: '30px',
            backgroundColor: '#ddd',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.9rem',
            color: '#888'
          }}>
            Photo placeholder
          </div>
        </div>
        <div>
          <h2 className="person-name">Anna Peschel</h2>
          <p style={{ 
            fontSize: '1rem', 
            fontWeight: 600, 
            color: 'var(--accent-green)', 
            marginBottom: '0.75rem',
            fontFamily: 'var(--font-main)'
          }}>
            Post-doctoral Researcher
          </p>
          <p className="person-bio">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p style={{ marginTop: '0.75rem', fontSize: '0.9rem' }}>
            <a href="mailto:example@cornell.edu" style={{ color: 'var(--text-primary)', textDecoration: 'underline', marginRight: '1rem' }}>
              Email
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', textDecoration: 'underline', marginRight: '1rem' }}>
              Google Scholar
            </a>
            <a href="#" style={{ color: 'var(--text-primary)', textDecoration: 'underline' }}>
              Website
            </a>
          </p>
        </div>
      </div>

      {/* Tall flower overlaying left side of second card */}
      <img 
        src={flower3} 
        alt="" 
        style={{ 
          position: 'absolute',
          top: '340px',
          left: '20px',
          width: '220px',
          height: 'auto',
          opacity: 0.9,
          zIndex: 5,
          pointerEvents: 'none'
        }}
      />

      {/* Small accent flower on right edge */}
      <img 
        src={flower5} 
        alt="" 
        style={{ 
          position: 'absolute',
          top: '520px',
          right: '100px',
          width: '100px',
          height: 'auto',
          opacity: 0.85,
          zIndex: 5,
          pointerEvents: 'none'
        }}
      />

      {/* PhD Student - Katie Debbas - Left aligned, 2/3 width */}
      <div className="person-card" style={{
        boxShadow: '8px 8px 0px var(--accent-green)',
        width: '66%',
        marginLeft: '0',
        marginRight: 'auto',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '180px',
            height: '180px',
            borderRadius: '30px',
            backgroundColor: '#ddd',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.9rem',
            color: '#888'
          }}>
            Photo placeholder
          </div>
        </div>
        <div>
          <h2 className="person-name">Katie Debbas</h2>
          <p style={{ 
            fontSize: '1rem', 
            fontWeight: 600, 
            color: 'var(--accent-green)', 
            marginBottom: '0.75rem',
            fontFamily: 'var(--font-main)'
          }}>
            PhD Student
          </p>
          <p className="person-bio">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
            sit aspernatur aut odit aut fugit.
          </p>
          <p style={{ marginTop: '0.75rem', fontSize: '0.9rem' }}>
            <a href="mailto:example@cornell.edu" style={{ color: 'var(--text-primary)', textDecoration: 'underline', marginRight: '1rem' }}>
              Email
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', textDecoration: 'underline', marginRight: '1rem' }}>
              Google Scholar
            </a>
            <a href="#" style={{ color: 'var(--text-primary)', textDecoration: 'underline' }}>
              Website
            </a>
          </p>
        </div>
      </div>

      {/* Yellow flowers overlaying right side of third card */}
      <img 
        src={flower4} 
        alt="" 
        style={{ 
          position: 'absolute',
          right: '60px',
          top: '720px',
          width: '200px',
          height: 'auto',
          opacity: 0.9,
          zIndex: 5,
          pointerEvents: 'none'
        }}
      />

      {/* Delicate stems on right edge */}
      <img 
        src={flower6} 
        alt="" 
        style={{ 
          position: 'absolute',
          right: '-20px',
          top: '900px',
          width: '160px',
          height: 'auto',
          opacity: 0.85,
          zIndex: 5,
          pointerEvents: 'none'
        }}
      />

      {/* Collaborating PhD Student - Chris Talbot - Right aligned, 2/3 width */}
      <div className="person-card" style={{
        boxShadow: '8px 8px 0px var(--accent-green)',
        width: '66%',
        marginLeft: 'auto',
        marginRight: '0',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '180px',
            height: '180px',
            borderRadius: '30px',
            backgroundColor: '#ddd',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.9rem',
            color: '#888'
          }}>
            Photo placeholder
          </div>
        </div>
        <div>
          <h2 className="person-name">Chris Talbot</h2>
          <p style={{ 
            fontSize: '1rem', 
            fontWeight: 600, 
            color: 'var(--accent-green)', 
            marginBottom: '0.75rem',
            fontFamily: 'var(--font-main)'
          }}>
            Collaborating PhD Student
          </p>
          <p className="person-bio">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium 
            voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati 
            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.
          </p>
          <p style={{ marginTop: '0.75rem', fontSize: '0.9rem' }}>
            <a href="mailto:example@cornell.edu" style={{ color: 'var(--text-primary)', textDecoration: 'underline', marginRight: '1rem' }}>
              Email
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', textDecoration: 'underline', marginRight: '1rem' }}>
              Google Scholar
            </a>
            <a href="https://chris-a-talbot.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', textDecoration: 'underline' }}>
              Website
            </a>
          </p>
        </div>
      </div>

      {/* Orange flowers overlaying left side of fourth card */}
      <img 
        src={flower1} 
        alt="" 
        style={{ 
          position: 'absolute',
          left: '40px',
          top: '1080px',
          width: '180px',
          height: 'auto',
          opacity: 0.9,
          zIndex: 5,
          pointerEvents: 'none'
        }}
      />

      {/* Lab Pets Section */}
      <div style={{ marginTop: '5rem', position: 'relative', zIndex: 1 }}>
        <h2 style={{ 
          fontSize: '1.75rem', 
          marginBottom: '2rem', 
          fontWeight: 700,
          textAlign: 'center'
        }}>
          Lab Pets
        </h2>

        {/* Totoro the dog - Left aligned */}
        <div className="person-card" style={{
          boxShadow: '8px 8px 0px var(--accent-green)',
          width: '66%',
          marginLeft: '0',
          marginRight: 'auto',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '180px',
              height: '180px',
              borderRadius: '30px',
              backgroundColor: '#ddd',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.9rem',
              color: '#888'
            }}>
              Photo placeholder
            </div>
          </div>
          <div>
            <h2 className="person-name">Totoro</h2>
            <p style={{ 
              fontSize: '1rem', 
              fontWeight: 600, 
              color: 'var(--accent-green)', 
              marginBottom: '0.75rem',
              fontFamily: 'var(--font-main)'
            }}>
              Lab Dog
            </p>
            <p className="person-bio">
              Totoro provides essential moral support and helps with field work supervision. 
              Specialties include outdoor exploration, welcoming visitors to the lab, and 
              ensuring everyone takes regular breaks for walks.
            </p>
          </div>
        </div>

        {/* Arctostaphylos uva-ursi the cat - Right aligned */}
        <div className="person-card" style={{
          boxShadow: '8px 8px 0px var(--accent-green)',
          width: '66%',
          marginLeft: 'auto',
          marginRight: '0',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '180px',
              height: '180px',
              borderRadius: '30px',
              backgroundColor: '#ddd',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.9rem',
              color: '#888'
            }}>
              Photo placeholder
            </div>
          </div>
          <div>
            <h2 className="person-name">Arctostaphylos uva-ursi</h2>
            <p style={{ 
              fontSize: '1rem', 
              fontWeight: 600, 
              color: 'var(--accent-green)', 
              marginBottom: '0.75rem',
              fontFamily: 'var(--font-main)'
            }}>
              Lab Cat
            </p>
            <p className="person-bio">
              Named after the bearberry plant (Arctostaphylos uva-ursi), this lab cat brings 
              botanical expertise and excellent keyboard-warming capabilities to the team. 
              Known for attending virtual meetings and providing plant identification assistance.
            </p>
          </div>
        </div>

        {/* Mr. Little Guy the cat - Left aligned */}
        <div className="person-card" style={{
          boxShadow: '8px 8px 0px var(--accent-green)',
          width: '66%',
          marginLeft: '0',
          marginRight: 'auto',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '180px',
              height: '180px',
              borderRadius: '30px',
              backgroundColor: '#ddd',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.9rem',
              color: '#888'
            }}>
              Photo placeholder
            </div>
          </div>
          <div>
            <h2 className="person-name">Mr. Little Guy</h2>
            <p style={{ 
              fontSize: '1rem', 
              fontWeight: 600, 
              color: 'var(--accent-green)', 
              marginBottom: '0.75rem',
              fontFamily: 'var(--font-main)'
            }}>
              Lab Cat
            </p>
            <p className="person-bio">
              Mr. Little Guy assists with paper review (by sitting on them) and provides 
              critical feedback during lab meetings through strategic vocalizations. 
              Particularly skilled at detecting open food containers and monitoring office chair occupancy.
            </p>
          </div>
        </div>
      </div>

      {/* Small accent on bottom */}
      <img 
        src={flower5} 
        alt="" 
        style={{ 
          position: 'absolute',
          right: '120px',
          bottom: '100px',
          width: '90px',
          height: 'auto',
          opacity: 0.85,
          zIndex: 5,
          pointerEvents: 'none',
          transform: 'rotate(-30deg)'
        }}
      />
    </div>
  )
}
