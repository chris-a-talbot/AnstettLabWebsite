export default function Research() {
  return (
    <div className="research-page" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <h1 className="page-title">Research</h1>
      
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700 }}>
          Daniel N Anstett
        </h2>
        <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1rem' }}>
          <strong>Assistant Professor</strong><br />
          School of Integrative Plant Science, Plant Biology Section<br />
          Cornell University
        </p>
        <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1rem' }}>
          <em>Landscape Genomics • Rapid Evolution to Climate Change • Herbivory and Plant Defenses</em>
        </p>
      </section>
      
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700 }}>
          Research Overview
        </h2>
        <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1rem' }}>
          My research focuses on rapid evolution across spatiotemporal scales with a focus on climate 
          change and biotic interactions. At Cornell, my lab uses a combination of latitudinal surveys, 
          common gardens, chemical ecology, and landscape genomics to research geographical variation 
          in plant trait evolution.
        </p>
        <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1rem' }}>
          My students, research associates and I seek to find solutions to the biodiversity crisis by 
          leveraging genomics and spatial-based science to inform conservation management and restoration 
          ecology. To achieve this ultimate goal, we leverage population genomic theory and simulations 
          in conjunction with herbarium and living (seed) collections to document contemporary evolution 
          and model possible future adaptation.
        </p>
      </section>
      
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700 }}>
          Core Research Questions
        </h2>
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
      </section>
      
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700 }}>
          Education
        </h2>
        <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '0.75rem' }}>
          <strong>Ph.D.</strong>, Ecology and Evolutionary Biology<br />
          University of Toronto, 2017<br />
          <em>Advisor: Marc Johnson</em>
        </p>
        <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          <strong>B.S.</strong>, University of Toronto, 2011
        </p>
      </section>
      
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700 }}>
          Previous Positions
        </h2>
        <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1rem' }}>
          <strong>Plant Resilience Institute Research Associate</strong><br />
          Michigan State University<br />
          <em>With David Lowry and Will Wetzel</em>
        </p>
        <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          <strong>Postdoctoral Researcher</strong><br />
          University of British Columbia<br />
          <em>With Amy Angert and Loren Rieseberg</em>
        </p>
      </section>
      
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700 }}>
          Links
        </h2>
        <ul style={{ paddingLeft: 0, listStyleType: 'none' }}>
          <li style={{ marginBottom: '0.5rem' }}>
            <a 
              href="https://scholar.google.ca/citations?hl=en&user=9vyKmwIAAAAJ&view_op=list_works&sortby=pubdate" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: 'var(--text-primary)', textDecoration: 'underline' }}
            >
              Google Scholar
            </a>
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <a 
              href="mailto:dna38{at}cornell.edu"
              style={{ color: 'var(--text-primary)', textDecoration: 'underline' }}
            >
              dna38{at}cornell.edu
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}
