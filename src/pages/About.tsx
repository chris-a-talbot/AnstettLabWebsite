export default function About() {
  return (
    <div className="about-page" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <h1 className="page-title">About</h1>
      
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700 }}>
          Daniel N Anstett
        </h2>
        <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1rem' }}>
          <strong>Cornell University</strong><br />
          Verified email at cornell.edu
        </p>
        <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1rem' }}>
          <em>Evolutionary Ecology • Rapid Evolution • Landscape Genomics • Chemical Ecology • Herbivory</em>
        </p>
      </section>
      
      <section style={{ marginBottom: '3rem' }}>
        <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1rem' }}>
          I study evolutionary ecology across large spatial scales with a focus on understanding 
          range-wide differences in adaptive traits. I use a combination of latitudinal surveys, 
          common gardens, plant chemistry, and landscape genomics to research geographical variation 
          in trait evolution.
        </p>
        <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1rem' }}>
          My research program uses these approaches to understand rapid evolution in response to 
          climate change, latitudinal gradients in biotic interactions, and where populations might 
          be most vulnerable to climate change.
        </p>
      </section>
      
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700 }}>
          Research Focus
        </h2>
        <p style={{ marginBottom: '1rem', lineHeight: 1.7, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          I aim to address three core questions:
        </p>
        <ul style={{ paddingLeft: '2rem', marginBottom: '1rem', listStyleType: 'disc' }}>
          <li style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            How often does rapid evolution rescue populations from extreme climate events?
          </li>
          <li style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            How does rapid evolution vary across geographic and phylogenetic scales?
          </li>
          <li style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            How does climate change impact latitudinal gradients in species interactions and evolution of defenses against herbivory?
          </li>
        </ul>
        <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)', fontSize: '0.95rem', fontStyle: 'italic' }}>
          I predominantly use plants and herbivorous insects to answer these questions.
        </p>
      </section>
      
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700 }}>
          Background
        </h2>
        <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1rem' }}>
          I was a Plant Resilience Institute Research Associate at Michigan State University, 
          working with David Lowry and Will Wetzel. For my first postdoc, I was at the University 
          of British Columbia working with Amy Angert and Loren Rieseberg.
        </p>
        <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          I completed my PhD at the Ecology and Evolutionary Biology Department at the University 
          of Toronto under the supervision of Marc Johnson.
        </p>
      </section>
    </div>
  )
}
