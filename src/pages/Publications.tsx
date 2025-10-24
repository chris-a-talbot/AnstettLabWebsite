import flower4 from '../assets/flowers/flower4.png'
import flower1 from '../assets/flowers/flower1.png'

export default function Publications() {
  return (
    <div className="publications-page" style={{ 
      display: 'grid',
      gridTemplateColumns: '1fr 400px',
      gap: '3rem',
      maxWidth: '1400px',
      margin: '0 auto'
    }}>
      {/* Publications content on the left */}
      <div>
        <div style={{ marginBottom: '2rem' }}>
          <a 
            href="https://scholar.google.com/citations?user=GOOGLE_SCHOLAR_ID" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              fontSize: '1.1rem',
              color: '#2563eb',
              textDecoration: 'none',
              fontWeight: '500'
            }}
          >
            View Google Scholar Profile →
          </a>
        </div>

        <div style={{ 
          marginBottom: '2rem', 
          padding: '1rem', 
          backgroundColor: '#f3f4f6', 
          borderRadius: '8px',
          fontSize: '0.9rem'
        }}>
          <strong>Key:</strong> <strong>Bold</strong> = Principal Investigator | <em>Italics</em> = Lab Member
        </div>

        <div className="year-header">2025</div>
        <div className="publication-entry">
          <strong>Haploblocks contribute to parallel climate adaptation following global invasion of a cosmopolitan plant</strong><br />
          Battlay P, Hendrickson BT, Mendez-Reneau JI, Santangelo JS, Albano LJ, ..., <strong>Anstett DN</strong> (19 of 49), ..., Hodgins KA, Kooyers NJ<br />
          <em>Nature Ecology & Evolution</em> 9 (8) (2025)<br />
          <a href="https://doi.org/10.1038/s41559-025-02751-2" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>DOI: 10.1038/s41559-025-02751-2</a>
        </div>

        <div className="publication-entry">
          <strong>Resilient plants, sustainable future</strong><br />
          Rhee SY, <strong>Anstett DN</strong> (2 of 21), ..., Way D, Weber APM<br />
          <em>Trends in Plant Science</em> 30 (4), 382-388 (2025)<br />
          <a href="https://doi.org/10.1016/j.tplants.2024.11.001" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>DOI: 10.1016/j.tplants.2024.11.001</a>
        </div>

        <div className="year-header">2024</div>
        <div className="publication-entry">
          <strong>Effects of urban-induced mutations on ecology, evolution and health</strong><br />
          Johnson MTJ, Arif I, Marchetti F, Munshi-South J, Ness RW, ..., <strong>Anstett DN</strong> (9 of 20), ..., Rosenberg MS, Winchell KM<br />
          <em>Nature Ecology & Evolution</em> 8 (6), 1074-1086 (2024)<br />
          <a href="https://doi.org/10.1038/s41559-024-02401-z" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>DOI: 10.1038/s41559-024-02401-z</a>
        </div>

        <div className="publication-entry">
          <strong>Phenotypic lags influence rapid evolution throughout a drought cycle</strong><br />
          Branch HA, <strong>Anstett DN</strong>, Angert AL<br />
          <em>Evolution</em> 78 (6), 1067-1077 (2024)<br />
          <a href="https://doi.org/10.1093/evolut/qpae037" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>DOI: 10.1093/evolut/qpae037</a>
        </div>

        <div className="publication-entry">
          <strong>Does urbanisation lead to parallel demographic shifts across the world in a cosmopolitan plant?</strong><br />
          Caizergues AE, Santangelo JS, Ness RW, Angeoletto F, <strong>Anstett DN</strong> (5 of 26), ..., Tack AJM, Johnson MTJ<br />
          <em>Molecular Ecology</em> 33 (7) (2024)<br />
          <a href="https://doi.org/10.1111/mec.17311" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>DOI: 10.1111/mec.17311</a>
        </div>

        <div className="year-header">2023</div>
        <div className="publication-entry">
          <strong>Plant size, latitude, and phylogeny explain within-population variability in herbivory</strong><br />
          The Herbivory Variability Network (including <strong>Anstett DN</strong>)<br />
          <em>Science</em> 382 (6671), 679-683 (2023)<br />
          <a href="https://doi.org/10.1126/science.adh8830" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>DOI: 10.1126/science.adh8830</a>
        </div>

        <div className="year-header">2022</div>
        <div className="publication-entry">
          <strong>Global urban environmental change drives adaptation in white clover</strong><br />
          Santangelo JS, ..., <strong>Anstett DN</strong> (21 of 287), ..., Zytynska SE, Johnson MTJ<br />
          <em>Science</em> 375 (6586), 1275-1281 (2022)<br />
          <a href="https://doi.org/10.1126/science.abk0989" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>DOI: 10.1126/science.abk0989</a>
        </div>

        <div className="year-header">2021</div>
        <div className="publication-entry">
          <strong>Adaptation across geographic ranges is consistent with strong selection in marginal climates and legacies of range expansion</strong><br />
          Bontrager M, Usui T, Lee-Yaw JA, <strong>Anstett DN</strong>, Branch HA, Hargreaves AL, Muir CD, Angert AL<br />
          <em>Evolution</em> 75 (6), 1316-1333 (2021)<br />
          <a href="https://doi.org/10.1111/evo.14231" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>DOI: 10.1111/evo.14231</a>
        </div>

        <div className="publication-entry">
          <strong>Regional differences in rapid evolution during severe drought</strong><br />
          <strong>Anstett DN</strong>, Branch HA, Angert AL<br />
          <em>Evolution Letters</em> 5 (2), 130-142 (2021)<br />
          <a href="https://doi.org/10.1002/evl3.218" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>DOI: 10.1002/evl3.218</a>
        </div>

        <div className="year-header">2020</div>
        <div className="publication-entry">
          <strong>Pelagic fish predation is stronger at temperate latitudes than near the equator</strong><br />
          Roesti M, <strong>Anstett DN</strong>, Freeman BG, Lee-Yaw JA, Schluter D, Chavarie L, Rolland J, Holzman R<br />
          <em>Nature Communications</em> 11 (1), 1527 (2020)<br />
          <a href="https://doi.org/10.1038/s41467-020-15335-4" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>DOI: 10.1038/s41467-020-15335-4</a>
        </div>

        <div className="year-header">2019</div>
        <div className="publication-entry">
          <strong>Ellagitannins from the Onagraceae Decrease the Performance of Generalist and Specialist Herbivores</strong><br />
          <strong>Anstett DN</strong>, Cheval I, D'Souza C, Salminen J-P, Johnson MTJ<br />
          <em>Journal of Chemical Ecology</em> 45 (1), 86-94 (2019)<br />
          <a href="https://doi.org/10.1007/s10886-018-1038-x" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>DOI: 10.1007/s10886-018-1038-x</a>
        </div>

        <div className="year-header">2018</div>
        <div className="publication-entry">
          <strong>Testing for latitudinal gradients in defense at the macroevolutionary scale</strong><br />
          <strong>Anstett DN</strong>, Ahern JR, Johnson MTJ, Salminen J-P<br />
          <em>Evolution</em> 72 (10), 2129-2143 (2018)<br />
          <a href="https://doi.org/10.1111/evo.13579" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>DOI: 10.1111/evo.13579</a>
        </div>

        <div className="publication-entry">
          <strong>The influence of range-wide plant genetic variation on soil invertebrate communities</strong><br />
          Fitzpatrick CR, Mikhailitchenko AV, <strong>Anstett DN</strong>, Johnson MTJ<br />
          <em>Ecography</em> 41 (7), 1135-1146 (2018)<br />
          <a href="https://doi.org/10.1111/ecog.03347" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>DOI: 10.1111/ecog.03347</a>
        </div>

        <div className="year-header">2016</div>
        <div className="publication-entry">
          <strong>Sources of Controversy Surrounding Latitudinal Patterns in Herbivory and Defense</strong><br />
          <strong>Anstett DN</strong>, Nunes KA, Baskett C, Kotanen PM<br />
          <em>Trends in Ecology & Evolution</em> 31 (10), 789-802 (2016)<br />
          <a href="https://doi.org/10.1016/j.tree.2016.07.011" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>DOI: 10.1016/j.tree.2016.07.011</a>
        </div>

        <div className="publication-entry">
          <strong>Latitudinal Gradients in Induced and Constitutive Resistance against Herbivores</strong><br />
          <strong>Anstett DN</strong>, Chen W, Johnson MTJ<br />
          <em>Journal of Chemical Ecology</em> 42 (8), 772-781 (2016)<br />
          <a href="https://doi.org/10.1007/s10886-016-0735-6" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>DOI: 10.1007/s10886-016-0735-6</a>
        </div>

        <div className="year-header">2015</div>
        <div className="publication-entry">
          <strong>Can genetically based clines in plant defence explain greater herbivory at higher latitudes?</strong><br />
          <strong>Anstett DN</strong>, Ahern JR, Glinos J, Nawar N, Salminen J-P, Johnson MTJ<br />
          <em>Ecology Letters</em> 18 (12), 1376-1386 (2015)<br />
          <a href="https://doi.org/10.1111/ele.12532" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>DOI: 10.1111/ele.12532</a>
        </div>

        <div className="year-header">2014</div>
        <div className="publication-entry">
          <strong>Latitudinal gradients in herbivory on Oenothera biennis vary according to herbivore guild and specialization</strong><br />
          <strong>Anstett DN</strong>, Naujokaitis-Lewis I, Johnson MTJ<br />
          <em>Ecology</em> 95 (10), 2915-2923 (2014)<br />
          <a href="https://doi.org/10.1890/13-0932.1" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>DOI: 10.1890/13-0932.1</a>
        </div>

        <div className="publication-entry">
          <strong>Growing foliose lichens on cover slips: a method for asexual propagation and observing development</strong><br />
          <strong>Anstett DN</strong>, Salcedo A, Larsen EW<br />
          <em>Bryologist</em> 117 (2), 179-186 (2014)<br />
          <a href="https://doi.org/10.1639/0007-2745-117.2.179" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>DOI: 10.1639/0007-2745-117.2.179</a>
        </div>

        <div className="year-header">2013</div>
        <div className="publication-entry">
          <strong>Dispersal analysis of three Peltigera species based on landscape genetics data</strong><br />
          <strong>Anstett DN</strong>, O'Brien H, Larsen EW, Troy McMullin R, Fortin M-J<br />
          <em>Mycology</em> 4 (4), 187-195 (2013)<br />
          <a href="https://doi.org/10.1080/21501203.2013.875955" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>DOI: 10.1080/21501203.2013.875955</a>
        </div>

        <div className="publication-entry">
          <strong>Integrating landscape genomics and spatially explicit approaches to detect loci under selection in clinal populations</strong><br />
          Jones MR, Forester BR, Teufel AI, Adams RV, <strong>Anstett DN</strong> (5 of 9), ..., Joost S, Manel S<br />
          <em>Evolution</em> 67 (12), 3455-3468 (2013)<br />
          <a href="https://doi.org/10.1111/evo.12237" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>DOI: 10.1111/evo.12237</a>
        </div>
      </div>

      {/* Flowers integrated on the right - matches reference with yellow flowers at top, red at bottom */}
      <div style={{ 
        position: 'relative',
        height: '100%'
      }}>
        <img 
          src={flower4} 
          alt="Pressed flower specimen" 
          style={{ 
            width: '350px',
            height: 'auto',
            display: 'block',
            position: 'absolute',
            top: '100px',
            right: '0'
          }}
        />
        <img 
          src={flower1} 
          alt="Pressed flower specimen" 
          style={{ 
            width: '280px',
            height: 'auto',
            display: 'block',
            position: 'absolute',
            bottom: '0',
            right: '60px'
          }}
        />
      </div>
    </div>
  )
}

