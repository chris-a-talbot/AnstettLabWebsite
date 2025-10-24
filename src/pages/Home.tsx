import flower4 from '../assets/flowers/flower4.png'

export default function Home() {
  return (
    <div className="home-page" style={{ 
      maxWidth: '1000px',
      margin: '0 auto',
      paddingTop: '0.5rem'
    }}>
      {/* Welcome heading with reduced top space */}
      <h2 style={{ 
        fontSize: '1.75rem', 
        marginBottom: '1rem',
        fontWeight: 700,
        color: 'var(--text-primary)',
        textAlign: 'center'
      }}>
        Welcome to The Anstett Lab
      </h2>
      
      {/* Kicker text - compelling intro */}
      <p style={{ 
        textAlign: 'center', 
        fontSize: '1rem', 
        lineHeight: 1.6,
        color: 'var(--text-secondary)',
        maxWidth: '700px',
        margin: '0 auto 0.5rem',
        fontWeight: 400
      }}>
        We study rapid adaptation to climate change across space and time with the ultimate goal 
        of addressing the biodiversity crisis.
      </p>
      
      {/* Scroll indicator */}
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '2rem',
        fontSize: '1.5rem',
        color: 'var(--text-secondary)',
        opacity: 0.5,
        animation: 'bounce 2s infinite'
      }}>
        ↓
      </div>
      
      {/* Flower with text wrapping around the stem */}
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: '1fr 400px 1fr',
        gap: '2rem',
        alignItems: 'start',
        marginBottom: '2rem'
      }}>
        {/* Left column text */}
        <div style={{ paddingTop: '200px' }}>
          <p style={{ marginBottom: '1.25rem', lineHeight: 1.8, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            The Anstett lab studies rapid adaptation to climate change across space and time. 
            We also study latitudinal gradients in herbivory and plant defense.
          </p>
          
          <p style={{ marginBottom: '1.25rem', lineHeight: 1.8, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Additionally, we leverage herbarium collections to track evolutionary change over 
            tens to hundreds of years and compare to contemporary field and seed collections.
          </p>
        </div>
        
        {/* Center - flower */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img 
            src={flower4} 
            alt="Pressed flower specimen" 
            style={{ 
              width: '100%',
              maxWidth: '400px',
              height: 'auto',
              display: 'block'
            }}
          />
        </div>
        
        {/* Right column text */}
        <div style={{ paddingTop: '200px' }}>
          <p style={{ marginBottom: '1.25rem', lineHeight: 1.8, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            We study evolutionary ecology across large spatial scales with a focus on understanding 
            range-wide differences in adaptive traits.
          </p>
          
          <p style={{ marginBottom: '1.25rem', lineHeight: 1.8, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            We use a combination of latitudinal surveys, common gardens, plant chemistry, and 
            landscape genomics to research geographical variation in trait evolution.
          </p>
        </div>
      </div>
      
      {/* Main content below */}
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <p style={{ marginBottom: '1.25rem', lineHeight: 1.8, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          Our research program uses these approaches to understand rapid evolution in response to 
          climate change, latitudinal gradients in biotic interactions, and where populations might 
          be most vulnerable to climate change.
        </p>
        
        <h3 style={{ 
          fontSize: '1.25rem', 
          marginBottom: '1rem',
          fontWeight: 700,
          marginTop: '2rem',
          color: 'var(--text-primary)'
        }}>
          Core Research Questions
        </h3>
        
        <ul style={{ 
          paddingLeft: '1.5rem', 
          listStyleType: 'disc',
          color: 'var(--text-secondary)',
          marginBottom: '2rem'
        }}>
          <li style={{ marginBottom: '0.75rem', lineHeight: 1.7, fontSize: '0.95rem' }}>
            How often does rapid evolution rescue populations from extreme climate events?
          </li>
          <li style={{ marginBottom: '0.75rem', lineHeight: 1.7, fontSize: '0.95rem' }}>
            How does rapid evolution vary across geographic and phylogenetic scales?
          </li>
          <li style={{ marginBottom: '0.75rem', lineHeight: 1.7, fontSize: '0.95rem' }}>
            How does climate change impact latitudinal gradients in species interactions and evolution of defenses against herbivory?
          </li>
        </ul>
        
        <p style={{ marginBottom: '1.25rem', lineHeight: 1.8, color: 'var(--text-secondary)', fontSize: '0.95rem', fontStyle: 'italic' }}>
          We predominantly use plants and herbivorous insects to answer these questions.
        </p>
      </div>
      
      {/* Add bounce animation */}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
      `}</style>
    </div>
  )
}
