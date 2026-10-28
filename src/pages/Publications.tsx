import '../styles/publications.css'
import PublicationEntry from '../components/PublicationEntry'
import { publications, labMemberPublications, googleScholarUrl } from '../data/publications'
import type { Publication } from '../data/publications'

// Group a newest-first list by year, keeping order
function groupByYear(pubs: Publication[]) {
  return pubs.reduce<[number, Publication[]][]>((groups, pub) => {
    const last = groups[groups.length - 1]
    if (last && last[0] === pub.year) {
      last[1].push(pub)
    } else {
      groups.push([pub.year, [pub]])
    }
    return groups
  }, [])
}

// One paper sheet with the year in the left margin
function PublicationSheet({ pubs, idPrefix }: { pubs: Publication[]; idPrefix: string }) {
  return (
    <div className="publications-sheet">
      {groupByYear(pubs).map(([year, yearPubs]) => (
        <section key={year} className="pub-year-group" aria-labelledby={`${idPrefix}-${year}`}>
          <h3 id={`${idPrefix}-${year}`} className="pub-year">
            {year}
          </h3>
          <ol className="pub-list">
            {yearPubs.map(pub => (
              <PublicationEntry key={pub.doi ?? pub.title} pub={pub} />
            ))}
          </ol>
        </section>
      ))}
    </div>
  )
}

export default function Publications() {
  return (
    <div className="publications-page">
      <header className="publications-header">
        <h1 className="publications-title">Publications</h1>
        <p className="publications-intro">
          Papers and preprints from Daniel Anstett and the lab. For citation counts and
          the complete record, see{' '}
          <a href={googleScholarUrl} target="_blank" rel="noopener noreferrer">
            Daniel's Google Scholar profile
          </a>
          . Work that lab members published without Daniel is{' '}
          <a href="#lab-member-publications">listed separately below</a>.
        </p>
      </header>

      <section aria-label="Publications with Daniel Anstett">
        <PublicationSheet pubs={publications} idPrefix="pub-year" />
      </section>

      <section id="lab-member-publications" className="publications-group" aria-labelledby="lab-member-publications-title">
        <h2 id="lab-member-publications-title" className="publications-subtitle">
          Other work by lab members
        </h2>
        <p className="publications-group-intro">
          Papers by current lab members without Daniel as a co-author.
        </p>
        <PublicationSheet pubs={labMemberPublications} idPrefix="member-pub-year" />
      </section>
    </div>
  )
}
