import '../styles/photos.css'
import '../styles/masonry.css'
import '../styles/folder.css'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { galleryItems } from '../data/galleryConfig'
import type { PhotoData } from '../data/galleryConfig'
import MasonryGrid from '../components/MasonryGrid'

export default function Photos() {
  const [selectedImage, setSelectedImage] = useState<PhotoData | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  // Simulate loading state for better UX
  useEffect(() => {
    const timer = setTimeout(() => setImagesLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  // Handle ESC key press for photo lightbox
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && modalOpen) {
        closeModal()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [modalOpen])

  const openModal = (photo: PhotoData) => {
    setSelectedImage(photo)
    setModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeModal()
    }
  }

  return (
    <>
      <div className="photos-page" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {!imagesLoaded ? (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '400px',
            fontSize: '1.1rem',
            color: 'var(--text-secondary)'
          }}>
            Loading flower specimens...
          </div>
        ) : (
          <MasonryGrid items={galleryItems} onPhotoClick={openModal} />
        )}
        <p style={{
          textAlign: 'center',
          fontSize: '0.8rem',
          color: 'var(--ink-brown)',
          opacity: 0.7,
          marginTop: '2rem',
          marginBottom: '1rem',
          fontFamily: 'var(--font-mono)'
        }}>
          All photos © Anstett Lab. All rights reserved.
        </p>
      </div>

      {/* Photo Lightbox Modal - renders directly to document.body */}
      {modalOpen && selectedImage && createPortal(
        <div className="photo-modal-overlay" onClick={handleBackdropClick}>
          <div className="photo-modal">
            <button
              className="photo-modal-close"
              onClick={(e) => {
                e.stopPropagation()
                closeModal()
              }}
              aria-label="Close modal"
            >
              ×
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="photo-modal-image"
            />
            {selectedImage.showCaption && (
              <div className="photo-modal-caption">
                {selectedImage.caption}
              </div>
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
