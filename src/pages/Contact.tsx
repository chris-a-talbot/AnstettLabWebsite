export default function Contact() {
  return (
    <div className="contact-page" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <h1 className="page-title">Contact</h1>
      
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700 }}>
          Get in Touch
        </h2>
        <p style={{ marginBottom: '1.5rem', lineHeight: 1.7, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          We welcome inquiries from prospective students, collaborators, and anyone interested 
          in our research.
        </p>
      </section>
      
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700 }}>
          Lab Address
        </h2>
        <p style={{ marginBottom: '0.5rem', lineHeight: 1.7, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          <strong style={{ color: 'var(--text-primary)' }}>The Anstett Lab</strong>
        </p>
        <p style={{ marginBottom: '0.5rem', lineHeight: 1.7, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          School of Integrative Plant Science
        </p>
        <p style={{ marginBottom: '0.5rem', lineHeight: 1.7, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          Plant Biology Section
        </p>
        <p style={{ marginBottom: '0.5rem', lineHeight: 1.7, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          Cornell University College of Agriculture and Life Sciences
        </p>
        <p style={{ marginBottom: '0.5rem', lineHeight: 1.7, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          Emerson Hall, Room 331
        </p>
        <p style={{ marginBottom: '0.5rem', lineHeight: 1.7, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          236 Mann Drive
        </p>
        <p style={{ marginBottom: '1.5rem', lineHeight: 1.7, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          Ithaca, NY 14850
        </p>
        <p style={{ marginBottom: '1.5rem', lineHeight: 1.7, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          Phone: <a href="tel:+16072554781" style={{ color: 'var(--text-primary)', textDecoration: 'underline' }}>(607) 255-4781</a>
        </p>
      </section>
      
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700 }}>
          Email
        </h2>
        <p style={{ lineHeight: 1.7, fontSize: '0.95rem' }}>
          <a href="mailto:dna38@cornell.edu" style={{ 
            color: 'var(--text-primary)',
            textDecoration: 'underline'
          }}>
            dna38@cornell.edu
          </a>
        </p>
      </section>
      
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700 }}>
          Prospective Students
        </h2>
        <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          If you are interested in joining the lab as a graduate student, post-doctoral researcher, 
          or undergraduate researcher, please reach out to discuss potential projects and opportunities. 
          We are always looking for motivated individuals passionate about evolutionary ecology and 
          conservation science.
        </p>
      </section>
    </div>
  )
}
