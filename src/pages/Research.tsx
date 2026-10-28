import { useState, useCallback } from 'react'
import '../styles/research.css'
import ResearchNotebook from '../components/ResearchNotebook'
import type { ResearchPanelId } from '../components/ResearchNotebook'
import genomicsImg from '../assets/research/genomics.png'
import droughtImg from '../assets/research/drought.webp'
import latitudeImg from '../assets/research/latitude.webp'
import dalpur5 from '../assets/photos/Herbarium/dalpur_5.png'

export default function Research() {
  // Research notebook pop-up
  const [activePanel, setActivePanel] = useState<ResearchPanelId | null>(null)
  const openPanel = (panelId: ResearchPanelId) => setActivePanel(panelId)
  const closePanel = useCallback(() => setActivePanel(null), [])

  return (
    <>
      <div className="research-page fade-in">
        <section className="research-overview">
          <p>
            Our work examines the distribution and spread of adaptive genetic variation across
            environmental gradients and its impact on adaptation to climate change. We use herbivory
            as a model to study the biogeography of species interactions, by considering latitudinal
            gradients in plant herbivory and defence. We study the effects of climate change by
            considering range-wide differences in rapid evolution to drought and potential for
            evolutionary rescue. As well, we study how landscape features and environmental gradients
            affect the spread of neutral and adaptive genetic markers with possible implications for
            management actions such as assisted migration.
          </p>
        </section>

        {/* Decorative divider - dalpur_5 flower specimen */}
        <div className="research-divider">
          <div className="divider-flower">
            <img src={dalpur5} alt="Pressed flower specimen divider" />
          </div>
        </div>

        <section className="research-areas">

          <div className="research-cards-grid">
            <button type="button" className="research-card sticky-note-card" onClick={() => openPanel('genomics')}>
              <span className="research-card-image">
                <img src={genomicsImg} alt="" />
              </span>
              <span className="research-card-title">Landscape genomics</span>
              <span className="card-subtitle">How do landscapes shape genetic diversity and adaptation?</span>
            </button>

            <button type="button" className="research-card sticky-note-card" onClick={() => openPanel('evolution')}>
              <span className="research-card-image">
                <img src={droughtImg} alt="" />
              </span>
              <span className="research-card-title">Rapid evolution</span>
              <span className="card-subtitle">Can plants adapt fast enough to survive climate extremes?</span>
            </button>

            <button type="button" className="research-card sticky-note-card" onClick={() => openPanel('gradients')}>
              <span className="research-card-image">
                <img src={latitudeImg} alt="" />
              </span>
              <span className="research-card-title">Latitudinal gradients</span>
              <span className="card-subtitle">How do plant defenses vary across latitudes?</span>
            </button>
          </div>
        </section>
      </div>

      {/* Pop-up Panels - Rendered outside research-page container for proper overlay coverage */}
      {activePanel && <ResearchNotebook panel={activePanel} onClose={closePanel} />}
    </>
  )
}
