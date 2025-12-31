import { Link } from 'react-router-dom'
import { useEffect, useCallback, useState } from 'react'
import '../styles/home.css'

// Import background flower image
import rubhir3 from '../assets/flowers/rubhir_3.png'

// Import research images
import genomicsImg from '../assets/research/genomics.png'
import droughtImg from '../assets/research/drought.webp'
import latitudeImg from '../assets/research/latitude.webp'

export default function Home() {
  // State for WordPress pages (blog uses pages instead of posts)
  const [wpPages, setWpPages] = useState<any[]>([])
  const [wpLoading, setWpLoading] = useState(true)
  const [wpError, setWpError] = useState<string | null>(null)

  // Calculate width-based opacity based on current screen width
  const getWidthBasedOpacity = useCallback((width: number): number => {
    if (width <= 500) return 0.20;
    if (width <= 650) return 0.25;
    if (width <= 825) return 0.35;
    if (width <= 1100) return 0.60;
    if (width <= 1250) return 0.90;
    return 1.0; // Large screens
  }, []);

  // Handle scroll-based opacity changes
  const handleScrollOpacity = useCallback(() => {
    const flowerElement = document.querySelector('.overgrown-specimen') as HTMLElement;
    if (!flowerElement) return;

    const scrolled = window.pageYOffset;
    const maxScroll = Math.max(
      document.documentElement.scrollHeight - window.innerHeight,
      1 // Prevent division by zero
    );

    // Calculate scroll progress (0 at top, 1 at bottom)
    const scrollProgress = Math.min(scrolled / maxScroll, 1);

    // Calculate scroll-based opacity (1.0 at top, 0.3 at bottom)
    const scrollOpacity = 1 - (scrollProgress * 0.7);

    // Get current width-based opacity
    const widthOpacity = getWidthBasedOpacity(window.innerWidth);

    // Apply multiplicative opacity (scroll opacity is always <= width opacity)
    const finalOpacity = widthOpacity * scrollOpacity;

    // Apply the opacity with smooth transition
    flowerElement.style.opacity = finalOpacity.toString();
  }, [getWidthBasedOpacity]);

  // Set up scroll listener and initial opacity
  useEffect(() => {
    // Set initial opacity
    handleScrollOpacity();

    // Add scroll listener with passive option for better performance
    window.addEventListener('scroll', handleScrollOpacity, { passive: true });

    // Also listen for resize events to recalculate width-based opacity
    const handleResize = () => {
      handleScrollOpacity();
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Cleanup listeners
    return () => {
      window.removeEventListener('scroll', handleScrollOpacity);
      window.removeEventListener('resize', handleResize);
    };
  }, [handleScrollOpacity]);

  // Fetch recent WordPress pages (blog uses pages instead of posts)
  const fetchWpPosts = useCallback(async () => {
    try {
      setWpLoading(true)
      const response = await fetch(
        'https://public-api.wordpress.com/wp/v2/sites/dnanstett.wordpress.com/pages?per_page=5&_embed&orderby=modified&order=desc'
      )

      if (!response.ok) {
        throw new Error(`Failed to fetch pages: ${response.status}`)
      }

      const pages = await response.json()
      // Filter out the "Home" page since it's just the main landing page
      const filteredPages = pages.filter((page: any) =>
        page.slug !== 'about' && page.slug !== 'home' && page.slug !== ''
      ).slice(0, 3) // Take only first 3

      setWpPages(filteredPages)
      setWpError(null)
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown error'
      setWpError(message)
      console.error('Failed to fetch WordPress pages:', err)
    } finally {
      setWpLoading(false)
    }
  }, [])

  // Load WordPress posts on component mount
  useEffect(() => {
    fetchWpPosts()
  }, [fetchWpPosts])

  // Load the publication widget script for recent publications
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://pubsync.christopher-a-talbot.workers.dev/widget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      const existingScript = document.querySelector('script[src="https://pubsync.christopher-a-talbot.workers.dev/widget.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="home-wrapper">
      {/* Large overgrown specimen background */}
      <div className="overgrown-specimen">
        <img src={rubhir3} alt="Large pressed flower specimen" />
      </div>

      {/* Hero Section - Herbarium Display */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            {/* Empty space for flower head */}
            <div className="specimen-display">
            </div>
            
            <div className="hero-text">
              <h2 className="hero-title">
                <span className="title-word">Evolutionary ecology</span>{' '}
                <span className="title-word">of change.</span>
              </h2>
              <p className="hero-subtitle">
                We study rapid adaptation in plants across space and time to understand when evolution can rescue populations from environmental extremes—and when it can&apos;t.
              </p>
              <Link to="/research" className="btn btn-hero">
                View Current Research
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Research Section */}
      <section className="expertise-section">
        <div className="container">
          <h3 className="section-title">Research</h3>
          
          <div className="expertise-grid">
            {/* Landscape genomics Box */}
            <Link to="/research" className="expertise-box sticky-note">
              <div className="expertise-icon">
                <img src={genomicsImg} alt="Landscape genomics" className="expertise-flower" />
              </div>
              <h3 className="expertise-title">Landscape genomics</h3>
              <p className="sticky-subtitle">How do landscapes shape genetic diversity and adaptation?</p>
            </Link>
            
            {/* Empty Box - Invisible */}
            <div className="expertise-box expertise-box-invisible">
            </div>
            
            {/* Rapid evolution Box */}
            <Link to="/research" className="expertise-box sticky-note">
              <div className="expertise-icon">
                <img src={droughtImg} alt="Rapid evolution" className="expertise-flower" />
              </div>
              <h3 className="expertise-title">Rapid evolution</h3>
              <p className="sticky-subtitle">Can plants adapt fast enough to survive climate extremes?</p>
            </Link>
            
            {/* Latitudinal gradients Box */}
            <Link to="/research" className="expertise-box sticky-note">
              <div className="expertise-icon">
                <img src={latitudeImg} alt="Latitudinal gradients" className="expertise-flower" />
              </div>
              <h3 className="expertise-title">Latitudinal gradients</h3>
              <p className="sticky-subtitle">How do plant defenses vary across latitudes?</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section className="publications-section">
        <div className="container">
          <div className="publications-widget-wrapper">
            <div
              data-lab-id="cmjrx405l00025j35c0ge1824"
              data-api-url="https://pubsyncio-production.up.railway.app"
              data-theme="auto"
              data-widget-type="recent"
              data-max-items="5"
              data-max-height="1100px"
              data-see-all-url="https://anstettlab.chris-a-talbot.com/publications"
              data-see-all-text="View all publications"
            />
          </div>
        </div>
      </section>

      {/* Recent Updates from WordPress Blog */}
      <section className="blog-section">
        <div className="container">
          <h3 className="section-title">RECENT UPDATES</h3>
          <div className="blog-posts-wrapper">
            {wpLoading ? (
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Loading recent updates…
              </p>
            ) : wpError ? (
              <p style={{ color: '#c44536', fontSize: '0.9rem' }}>
                Unable to load recent updates
              </p>
            ) : wpPages.length > 0 ? (
              <div className="blog-posts-grid">
                {wpPages.map((post) => (
                  <article key={post.id} className="blog-post-card">
                    <h4 className="blog-post-title">
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="blog-post-link"
                      >
                        {post.title?.rendered || 'Untitled Post'}
                      </a>
                    </h4>
                    <div
                      className="blog-post-excerpt"
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt?.rendered || post.content?.rendered?.substring(0, 150) + '...' || ''
                      }}
                    />
                    <time
                      className="blog-post-date"
                      dateTime={post.date}
                    >
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </time>
                  </article>
                ))}
              </div>
            ) : (
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                No recent updates found
              </p>
            )}
            <div className="blog-view-all">
              <a
                href="https://dnanstett.wordpress.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="blog-link"
              >
                View all updates →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Panel */}
      <section className="contact-panel">
        <div className="container">
          <div className="contact-content">
            <h3 className="contact-title">Get in Touch</h3>
            <p className="contact-description">
              We welcome inquiries from prospective students, collaborators, and anyone interested in our research.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email:</strong>{' '}
                <span className="contact-email">dna38[at]cornell.edu</span>
              </div>
              <div className="contact-item">
                School of Integrative Plant Science, Cornell University
              </div>
            </div>
            <div className="contact-cta">
              <Link to="/contact" className="contact-full-link">
                View full contact information →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
