import type { PhotoData } from '../data/galleryConfig'

interface PinnedPhotoProps {
  photo: PhotoData
  index: number
  onClick: () => void
}

export default function PinnedPhoto({ photo, index, onClick }: PinnedPhotoProps) {
  // Deterministic "random" styling based on index
  const rotation = ((index % 5) * 2 - 4) // -4 to +4 degrees
  const marginTop = (index % 3) * 8 // 0, 8, or 16px offset

  return (
    <div
      className="pinned-photo"
      style={{
        transform: `rotate(${rotation}deg)`,
        marginTop: `${marginTop}px`,
      }}
      onClick={onClick}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        loading="lazy"
      />
      {photo.showCaption && (
        <span className="pinned-photo-caption">{photo.caption}</span>
      )}
    </div>
  )
}
