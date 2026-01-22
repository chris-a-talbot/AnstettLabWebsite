import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import type { GalleryFolder, PhotoData } from '../data/galleryConfig'
import PinnedPhoto from './PinnedPhoto'

interface FolderOverlayProps {
  folder: GalleryFolder
  onClose: () => void
  onPhotoClick: (photo: PhotoData) => void
}

export default function FolderOverlay({ folder, onClose, onPhotoClick }: FolderOverlayProps) {
  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  return createPortal(
    <div className="folder-overlay" onClick={handleBackdropClick}>
      <div className="folder-modal">
        <div className="folder-modal-tab">{folder.name}</div>
        <button
          className="folder-modal-close"
          onClick={(e) => {
            e.stopPropagation()
            onClose()
          }}
          aria-label="Close folder"
        >
          ×
        </button>
        <div className="folder-modal-content">
          {folder.photos.map((photo, index) => (
            <PinnedPhoto
              key={index}
              photo={photo}
              index={index}
              onClick={() => onPhotoClick(photo)}
            />
          ))}
        </div>
      </div>
    </div>,
    document.body
  )
}
