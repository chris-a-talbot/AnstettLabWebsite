import { labAuthors } from '../data/publications'
import type { Publication } from '../data/publications'
import '../styles/publication-entry.css'

const labAuthorPattern = new RegExp(
  `(${labAuthors.map(name => name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`
)

// *Asterisk* segments in titles are species/genus names - render them in italics
function renderTitle(title: string) {
  return title.split('*').map((part, i) => (i % 2 ? <em key={i}>{part}</em> : part))
}

// Bold current lab members wherever they appear in the author list
function renderAuthors(authors: string) {
  return authors
    .split(labAuthorPattern)
    .map((part, i) => (labAuthors.includes(part) ? <strong key={i}>{part}</strong> : part))
}

interface PublicationEntryProps {
  pub: Publication
  // Compact entries (home page) show the year instead of volume/pages
  compact?: boolean
}

export default function PublicationEntry({ pub, compact = false }: PublicationEntryProps) {
  const url = pub.doi ? `https://doi.org/${pub.doi}` : undefined
  const volume = pub.volume && (pub.issue ? `${pub.volume}(${pub.issue})` : pub.volume)
  const details = [volume, pub.pages].filter(Boolean).join(': ')

  return (
    <li className="pub-entry">
      <p className="pub-title">
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer">
            {renderTitle(pub.title)}
          </a>
        ) : (
          renderTitle(pub.title)
        )}
      </p>
      <p className="pub-authors">{renderAuthors(pub.authors)}</p>
      <p className="pub-venue">
        <em>{pub.venue}</em>
        {compact ? `, ${pub.year}` : details && ` ${details}`}
        {pub.preprint && <span className="pub-tag">Preprint</span>}
      </p>
    </li>
  )
}
