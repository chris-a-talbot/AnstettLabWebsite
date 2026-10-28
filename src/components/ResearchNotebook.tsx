import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import '../styles/research-notebook.css'

export type ResearchPanelId = 'genomics' | 'evolution' | 'gradients'

interface ResearchNotebookProps {
  panel: ResearchPanelId
  onClose: () => void
}

// Notebook pop-up with the long description of a research area.
// Shared by the home page's research notes and the Research tab.
export default function ResearchNotebook({ panel, onClose }: ResearchNotebookProps) {
  // Lock page scroll while open, and close with Escape
  useEffect(() => {
    document.body.classList.add('modal-open')
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.classList.remove('modal-open')
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  // Rendered into <body> so it sits above the site header on every screen size
  return createPortal(
    <div className="panel-overlay" onClick={onClose}>
      <div className="panel-notebook" role="dialog" aria-modal="true" onClick={e => e.stopPropagation()}>
        <button className="panel-close" onClick={onClose} aria-label="Close" autoFocus>×</button>

        {panel === 'genomics' && (
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
              (5 meters to 5 KM) in the lichen genus <em>Peltigera</em> (Anstett et al. 2013). We have also
              been involved in studying the distribution of adaptive variation in <em>Campanula barbata</em>{' '}
              (Bearded Bellflower) across a precipitation gradient in the Alps (Jones et al. 2013).
              This project also involved evaluating the effectiveness of individually-based landscape
              genomics approaches in detecting loci under selection. Finally, we have shown decreased
              genetic diversity in evening primrose (<em>Oenothera biennis</em>) in the Northern parts of its
              range (Anstett et al. 2015). Areas under glaciation had both decreased allelic richness
              and decreased evenness, suggesting a dispersal limitation or an adaptive reason for
              decreased genotypes in the North.
            </p>
            <p>
              Currently, we are studying the landscape genomics of <em>Mimulus cardinalis</em> (scarlet
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

        {panel === 'evolution' && (
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
              We use the plant scarlet monkeyflower (<em>Erythranthe cardinalis</em>) as a model system to
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

        {panel === 'gradients' && (
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
              defence traits. In a survey of 79 populations of <em>Oenothera biennis</em> (common evening
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
    </div>,
    document.body
  )
}
