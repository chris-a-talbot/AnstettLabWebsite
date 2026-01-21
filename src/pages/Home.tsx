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

  // State for research modal
  const [activePanel, setActivePanel] = useState<string | null>(null)

  const openPanel = (panelId: string) => {
    setActivePanel(panelId)
  }

  const closePanel = () => {
    setActivePanel(null)
  }

  // Disable body scroll when modal is open
  useEffect(() => {
    if (activePanel) {
      document.body.classList.add('modal-open')
    } else {
      document.body.classList.remove('modal-open')
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('modal-open')
    }
  }, [activePanel])


  // Handle scroll-based opacity - cumulative with CSS width-based opacity
  const handleScrollOpacity = useCallback(() => {
    const flowerElement = document.querySelector('.overgrown-specimen') as HTMLElement;
    if (!flowerElement) return;

    const scrolled = window.pageYOffset;
    const maxScroll = Math.max(
      document.documentElement.scrollHeight - window.innerHeight,
      1
    );

    // Calculate scroll progress (0 at top, 1 at bottom)
    const scrollProgress = Math.min(scrolled / maxScroll, 1);

    // Calculate scroll-based opacity multiplier (1.0 at top, 0.3 at bottom)
    const scrollMultiplier = 1 - (scrollProgress * 0.7);

    // Set as CSS custom property - multiplies with width-based opacity
    flowerElement.style.setProperty('--scroll-opacity', scrollMultiplier.toString());
  }, []);

  // Set up scroll listener
  useEffect(() => {
    // Set initial opacity
    handleScrollOpacity();

    // Add scroll listener with passive option for better performance
    window.addEventListener('scroll', handleScrollOpacity, { passive: true });

    // Cleanup listener
    return () => {
      window.removeEventListener('scroll', handleScrollOpacity);
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


  // Function to scroll to the next section (research section)
  const scrollToNextSection = useCallback(() => {
    // Get the hero section height and scroll down by that amount plus some padding
    const heroSection = document.querySelector('.hero-section') as HTMLElement;
    if (heroSection) {
      const heroHeight = heroSection.offsetHeight;
      // Scroll down by hero height minus some overlap to show transition
      const scrollDistance = heroHeight - 100; // Leave 100px of hero visible for context

      window.scrollTo({
        top: scrollDistance,
        behavior: 'smooth'
      });
    }
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
            </div>
          </div>
        </div>

        {/* Scroll Arrow - Always visible */}
        <div className="scroll-arrow" onClick={scrollToNextSection}>
          <div className="scroll-arrow-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="scroll-arrow-text">Scroll to explore</span>
        </div>
      </section>
      
      {/* Research Section */}
      <section className="expertise-section">
        <div className="container">
          <h3 className="section-title">Research</h3>
          
          <div className="expertise-grid">
            {/* Landscape genomics Box */}
            <div onClick={() => openPanel('genomics')} className="expertise-box sticky-note">
              <div className="expertise-icon">
                <img src={genomicsImg} alt="Landscape genomics" className="expertise-flower" />
              </div>
              <h3 className="expertise-title">Landscape genomics</h3>
              <p className="sticky-subtitle">How do landscapes shape genetic diversity and adaptation?</p>
            </div>

            {/* Empty Box - Invisible */}
            <div className="expertise-box expertise-box-invisible">
            </div>

            {/* Rapid evolution Box */}
            <div onClick={() => openPanel('evolution')} className="expertise-box sticky-note">
              <div className="expertise-icon">
                <img src={droughtImg} alt="Rapid evolution" className="expertise-flower" />
              </div>
              <h3 className="expertise-title">Rapid evolution</h3>
              <p className="sticky-subtitle">Can plants adapt fast enough to survive climate extremes?</p>
            </div>

            {/* Latitudinal gradients Box */}
            <div onClick={() => openPanel('gradients')} className="expertise-box sticky-note">
              <div className="expertise-icon">
                <img src={latitudeImg} alt="Latitudinal gradients" className="expertise-flower" />
              </div>
              <h3 className="expertise-title">Latitudinal gradients</h3>
              <p className="sticky-subtitle">How do plant defenses vary across latitudes?</p>
            </div>
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

      {/* Research Modal */}
      {activePanel && (
        <div className="panel-overlay" onClick={closePanel}>
          <div className="panel-notebook" onClick={(e) => e.stopPropagation()}>
            <button className="panel-close" onClick={closePanel}>×</button>

            {activePanel === 'genomics' && (
              <div className="panel-content">
                <h2>Landscape Genomics</h2>
                <p>
                  Landscape genomics is a subfield that represents the merger of landscape ecology
                  and population genetics with genomics. It asks how landscape features (distance,
                  landscape resistance) and evolutionary processes (gene flow, dispersal) affect the
                  spread of genetic variation at the population and individual level. This involves
                  considering the spread of neutral markers and metrics of dispersal and connectivity.
                  Landscape genomics can also be carried out on the genetics of adaptive traits and
                  therefore has important implications for evolutionary ecology when it is conducted
                  at large spatial scales. With the decreasing costs of next generation sequencing it
                  is now possible to study genome wide variation across a landscape and through climatic
                  gradients.
                </p>
                <p>
                  We have worked on various topics in landscape genetics and genomics. These include
                  searching for patterns of dispersal and autocorrelation at very small spatial scales
                  (5 meters to 5 KM) in the lichen genus Peltigera (Anstett et al. 2013). We have also
                  been involved in studying the distribution of adaptive variation in Campanula barbata
                  (Bearded Bellflower) across a precipitation gradient in the Alps (Jones et al. 2013).
                  This project also involved evaluating the effectiveness of individually-based landscape
                  genomics approaches in detecting loci under selection. Finally, we have shown decreased
                  genetic diversity in evening primrose (Oenothera biennis) in the Northern parts of its
                  range (Anstett et al. 2015). Areas under glaciation had both decreased allelic richness
                  and decreased evenness, suggesting a dispersal limitation or an adaptive reason for
                  decreased genotypes in the North.
                </p>
                <p>
                  Currently, we are studying the landscape genomics of Mimulus cardinalis (scarlet
                  monkeyflower) throughout a record breaking drought in California and Southern Oregon
                  (2010 to 2016). We generated a large spatiotemporal genomics dataset through whole
                  genome sequencing on 55 populations pre-drought and 12 populations sampled yearly from
                  2010 to 2016. We are currently measuring genomic vulnerability to climate change,
                  genomic evidence for rapid evolution and potential for evolutionary rescue. Specifically,
                  we are interested in understanding where maladaptation to climate change will be more
                  severe and how to best select donor populations for possible assisted migration.
                </p>
              </div>
            )}

            {activePanel === 'evolution' && (
              <div className="panel-content">
                <h2>Rapid Evolution to Drought</h2>
                <p>
                  Climate change is causing significant alterations in temperature and precipitation
                  patterns, including more intense and frequent extreme climatic events, such as
                  record-setting droughts. These extremes can have particularly detrimental effects on
                  species persistence. In order for organisms to survive, evolutionary rescue may help
                  prevent these local extinctions. Since the time of Darwin, evolution was viewed as a
                  process that gradually occurred over long-periods of time. However, in recent decades
                  scientists have discovered that rapid evolution can occur very quickly over a few
                  generations if sufficient genetic variation and selection pressures are present. This
                  raises hope that as the climate becomes more extreme populations will be able to become
                  locally adapted to new conditions.
                </p>
                <p>
                  Rapid evolution can be measured with resurrection studies, where propagules collected
                  in the past are grown side by side with present day samples. This powerful technique
                  has been carried out in a small number of closely situated sites, but rarely at the
                  landscape scale or across replicated climatic gradients. Yet multiple spatially
                  replicated resurrection studies are necessary to understand when and where organisms
                  can adapt sufficiently to overcome rapid changes in climate.
                </p>
                <p>
                  We use the plant scarlet monkeyflower (Erythranthe cardinalis) as a model system to
                  study rapid evolution to extreme drought in California & Southern Oregon. We are using
                  seven-years of seed collections (2010 to 2016) carried out across 11 sites throughout
                  California and Southern Oregon to study the evolutionary impacts of a record-setting
                  drought in California. Through resurrection studies we are comparing the phenotypes of
                  genetic families across years and sites to test for evolution of drought escape and/or
                  dehydration avoidance.
                </p>
                <p>
                  We also wish to understand if this rapid evolution can lead to evolutionary rescue, the
                  increase in population size after a decline due to adaptive evolution. To do this we
                  are comparing rapid evolution results to demographic data collected at each site
                  throughout the drought cycle. We aim to determine if and when evolutionary rescue is
                  predictable both empirically and through simulations using the SLiM population genomics
                  modeling environment.
                </p>
              </div>
            )}

            {activePanel === 'gradients' && (
              <div className="panel-content">
                <h2>Latitudinal Gradients in Plant Herbivory and Defence</h2>
                <p>
                  Herbivory is expected to increase towards the equator due to increased temperatures,
                  a longer growing season, and increased productivity. These conditions could lead to
                  larger herbivore populations which increases pest pressure. A longer growing season
                  also increases the amount of time in which herbivores can damage plants each year. As
                  a result plants in the tropics are expected to be under greater pressure to evolve
                  defences to prevent the damage. This hypothesis has been referred to as the Latitudinal
                  Herbivory-Defence Hypothesis (LHDH).
                </p>
                <p>
                  While early work on tropical and temperate forests supported this hypothesis, an
                  increasing number of studies have provided mixed or contradictory evidence, including
                  several global analyses. There are multiple reasons for a mismatch: study system
                  selection (one species versus a family or community), location and range of gradient
                  studied (tropical versus temperate only), type of herbivores selected, rigor of
                  herbivory and chemical defence measurements, incorporation of modern plant defence
                  theory (consideration of induction and tolerance), and mechanistic linkages between
                  herbivory and defence. We explored the reasons for these contradictory findings in a
                  Trends in Ecology and Evolution Paper (Anstett et al. 2016a).
                </p>
                <p>
                  In our Ph.D. research we studied LHDH at both within and between species scale, by
                  measuring temperate to subtropical clines in plant herbivory and genetically based
                  defence traits. In a survey of 79 populations of Oenothera biennis (common evening
                  primrose) we found that different herbivores that feed on the same plant across the
                  range exhibit different latitudinal patterns (Anstett et al. 2014). This provides
                  further support that LHDH might not always be applicable. It also raises the importance
                  of considering the life history of different herbivores, as latitudinal patterns in
                  herbivory varied according to feeding guild and degree of specialization.
                </p>
                <p>
                  In a common garden, we grew 137 genotypes of evening primrose from across the entire
                  native range. Plants from northern parts of the range were more susceptible to generalist
                  and specialist insects (Anstett et al. 2015). Southern plants, which were less susceptible,
                  also showed higher levels of compounds associated with lower herbivory (total phenolics
                  and oenothein A). It appears that plants from the Northern part of the range may experience
                  more damage because they are less well defended.
                </p>
                <p>
                  Further work on chemical defence based on growth chamber experiments has considered
                  gradients in constitutive vs. induced defences. It appears that while Northern plants
                  do show lower levels of chemical defence constitutively, they sometimes have increased
                  levels after induction (see Anstett et al. 2016b). Yet across the evening primrose
                  family there is no evidence of latitudinal gradients in plant defences, both when
                  considering total phenolics and the major ellagitannin compounds found in evening
                  primrose (oenothein A and B) (see Anstett et al. 2018). Instead, colder, less variable
                  climates seem to have increased defences.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
