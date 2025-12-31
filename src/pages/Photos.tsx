import '../styles/photos.css'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

interface FlowerImage {
  src: string
  alt: string
  species: string
}

// Import all flower images
import chafas1Img from '../assets/flowers/chafas_1.png'
import chafas2Img from '../assets/flowers/chafas_2.png'
import chafas3Img from '../assets/flowers/chafas_3.png'
import chafas4Img from '../assets/flowers/chafas_4.png'
import dalpur1Img from '../assets/flowers/dalpur_1.png'
import dalpur2Img from '../assets/flowers/dalpur_2.png'
import dalpur3Img from '../assets/flowers/dalpur_3.png'
import dalpur4Img from '../assets/flowers/dalpur_4.png'
import dalpur5Img from '../assets/flowers/dalpur_5.png'
import dalpur6Img from '../assets/flowers/dalpur_6.png'
import erycar1Img from '../assets/flowers/erycar_1.png'
import erycar2Img from '../assets/flowers/erycar_2.png'
import erycar3Img from '../assets/flowers/erycar_3.png'
import erycar4Img from '../assets/flowers/erycar_4.png'
import erycar5Img from '../assets/flowers/erycar_5.png'
import erycar6Img from '../assets/flowers/erycar_6.png'
import erycar7Img from '../assets/flowers/erycar_7.png'
import erycar8Img from '../assets/flowers/erycar_8.png'
import esccal1Img from '../assets/flowers/esccal_1.png'
import esccal2Img from '../assets/flowers/esccal_2.png'
import esccal3Img from '../assets/flowers/esccal_3.png'
import esccal4Img from '../assets/flowers/esccal_4.png'
import esccal5Img from '../assets/flowers/esccal_5.png'
import esccal6Img from '../assets/flowers/esccal_6.png'
import esccal7Img from '../assets/flowers/esccal_7.png'
import esccal8Img from '../assets/flowers/esccal_8.png'
import esccal9Img from '../assets/flowers/esccal_9.png'
import esccal10Img from '../assets/flowers/esccal_10.png'
import esccal11Img from '../assets/flowers/esccal_11.png'
import oenbie1Img from '../assets/flowers/oenbie_1.png'
import oenbie2Img from '../assets/flowers/oenbie_2.png'
import oenbie3Img from '../assets/flowers/oenbie_3.png'
import rubhir1Img from '../assets/flowers/rubhir_1.png'
import rubhir2Img from '../assets/flowers/rubhir_2.png'
import rubhir3Img from '../assets/flowers/rubhir_3.png'
import trirep1Img from '../assets/flowers/trirep_1.png'
import trirep2Img from '../assets/flowers/trirep_2.png'
import trirep3Img from '../assets/flowers/trirep_3.png'

export default function Photos() {
  const [selectedImage, setSelectedImage] = useState<FlowerImage | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const flowerImages = [
    { src: chafas1Img, alt: 'Chafas flower specimen 1', species: 'Chafas 1' },
    { src: chafas2Img, alt: 'Chafas flower specimen 2', species: 'Chafas 2' },
    { src: chafas3Img, alt: 'Chafas flower specimen 3', species: 'Chafas 3' },
    { src: chafas4Img, alt: 'Chafas flower specimen 4', species: 'Chafas 4' },
    { src: dalpur1Img, alt: 'Dalpur flower specimen 1', species: 'Dalpur 1' },
    { src: dalpur2Img, alt: 'Dalpur flower specimen 2', species: 'Dalpur 2' },
    { src: dalpur3Img, alt: 'Dalpur flower specimen 3', species: 'Dalpur 3' },
    { src: dalpur4Img, alt: 'Dalpur flower specimen 4', species: 'Dalpur 4' },
    { src: dalpur5Img, alt: 'Dalpur flower specimen 5', species: 'Dalpur 5' },
    { src: dalpur6Img, alt: 'Dalpur flower specimen 6', species: 'Dalpur 6' },
    { src: erycar1Img, alt: 'Erycar flower specimen 1', species: 'Erycar 1' },
    { src: erycar2Img, alt: 'Erycar flower specimen 2', species: 'Erycar 2' },
    { src: erycar3Img, alt: 'Erycar flower specimen 3', species: 'Erycar 3' },
    { src: erycar4Img, alt: 'Erycar flower specimen 4', species: 'Erycar 4' },
    { src: erycar5Img, alt: 'Erycar flower specimen 5', species: 'Erycar 5' },
    { src: erycar6Img, alt: 'Erycar flower specimen 6', species: 'Erycar 6' },
    { src: erycar7Img, alt: 'Erycar flower specimen 7', species: 'Erycar 7' },
    { src: erycar8Img, alt: 'Erycar flower specimen 8', species: 'Erycar 8' },
    { src: esccal1Img, alt: 'Esccal flower specimen 1', species: 'Esccal 1' },
    { src: esccal2Img, alt: 'Esccal flower specimen 2', species: 'Esccal 2' },
    { src: esccal3Img, alt: 'Esccal flower specimen 3', species: 'Esccal 3' },
    { src: esccal4Img, alt: 'Esccal flower specimen 4', species: 'Esccal 4' },
    { src: esccal5Img, alt: 'Esccal flower specimen 5', species: 'Esccal 5' },
    { src: esccal6Img, alt: 'Esccal flower specimen 6', species: 'Esccal 6' },
    { src: esccal7Img, alt: 'Esccal flower specimen 7', species: 'Esccal 7' },
    { src: esccal8Img, alt: 'Esccal flower specimen 8', species: 'Esccal 8' },
    { src: esccal9Img, alt: 'Esccal flower specimen 9', species: 'Esccal 9' },
    { src: esccal10Img, alt: 'Esccal flower specimen 10', species: 'Esccal 10' },
    { src: esccal11Img, alt: 'Esccal flower specimen 11', species: 'Esccal 11' },
    { src: oenbie1Img, alt: 'Oenbie flower specimen 1', species: 'Oenbie 1' },
    { src: oenbie2Img, alt: 'Oenbie flower specimen 2', species: 'Oenbie 2' },
    { src: oenbie3Img, alt: 'Oenbie flower specimen 3', species: 'Oenbie 3' },
    { src: rubhir1Img, alt: 'Rubhir flower specimen 1', species: 'Rubhir 1' },
    { src: rubhir2Img, alt: 'Rubhir flower specimen 2', species: 'Rubhir 2' },
    { src: rubhir3Img, alt: 'Rubhir flower specimen 3', species: 'Rubhir 3' },
    { src: trirep1Img, alt: 'Trirep flower specimen 1', species: 'Trirep 1' },
    { src: trirep2Img, alt: 'Trirep flower specimen 2', species: 'Trirep 2' },
    { src: trirep3Img, alt: 'Trirep flower specimen 3', species: 'Trirep 3' },
  ]

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && modalOpen) {
        closeModal()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [modalOpen])

  const openModal = (image: FlowerImage) => {
    setSelectedImage(image)
    setModalOpen(true)
    document.body.style.overflow = 'hidden' // Prevent background scrolling
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
        <div className="photo-grid">
          {flowerImages.map((image, index) => (
            <div key={index} className="photo-item" onClick={() => openModal(image)}>
              <img
                src={image.src}
                alt={image.alt}
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  borderRadius: '30px',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer'
                }}
                loading="lazy"
              />
              <div className="photo-overlay">
                <span className="photo-caption">{image.species}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Portal - renders directly to document.body */}
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
            <div className="photo-modal-caption">
              {selectedImage.species}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
