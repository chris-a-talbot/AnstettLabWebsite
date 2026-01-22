import { useState, useEffect, useRef, useCallback } from 'react'
import type { GalleryItem, GalleryFolder, PhotoData } from '../data/galleryConfig'
import FolderItem from './FolderItem'
import FolderOverlay from './FolderOverlay'

interface MasonryGridProps {
  items: GalleryItem[]
  onPhotoClick: (photo: PhotoData) => void
}

// Number of items to load initially and per batch
const INITIAL_LOAD = 15
const LOAD_MORE_COUNT = 12

export default function MasonryGrid({ items, onPhotoClick }: MasonryGridProps) {
  const [openFolder, setOpenFolder] = useState<GalleryFolder | null>(null)
  const [displayCount, setDisplayCount] = useState(INITIAL_LOAD)
  const loadMoreRef = useRef<HTMLDivElement>(null)

  const hasMore = displayCount < items.length
  const displayedItems = items.slice(0, displayCount)

  const loadMore = useCallback(() => {
    setDisplayCount(prev => Math.min(prev + LOAD_MORE_COUNT, items.length))
  }, [items.length])

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMore()
        }
      },
      { rootMargin: '200px' } // Load more when within 200px of the sentinel
    )

    const sentinel = loadMoreRef.current
    if (sentinel) {
      observer.observe(sentinel)
    }

    return () => {
      if (sentinel) {
        observer.unobserve(sentinel)
      }
    }
  }, [hasMore, loadMore])

  // Reset display count when items change
  useEffect(() => {
    setDisplayCount(INITIAL_LOAD)
  }, [items])

  return (
    <>
      <div className="masonry-grid">
        {displayedItems.map((item, index) => {
          if (item.type === 'photo') {
            return (
              <div key={`photo-${index}`} className="masonry-item">
                <div
                  className="masonry-photo-item"
                  onClick={() => onPhotoClick(item)}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                  />
                  {item.showCaption && (
                    <div className="photo-overlay">
                      <span className="photo-caption">{item.caption}</span>
                    </div>
                  )}
                </div>
              </div>
            )
          } else {
            return (
              <div key={`folder-${index}`} className="masonry-item">
                <FolderItem
                  folder={item}
                  onClick={() => setOpenFolder(item)}
                />
              </div>
            )
          }
        })}
      </div>

      {/* Sentinel element for infinite scroll */}
      {hasMore && (
        <div
          ref={loadMoreRef}
          style={{
            height: '1px',
            marginTop: '2rem'
          }}
        />
      )}

      {openFolder && (
        <FolderOverlay
          folder={openFolder}
          onClose={() => setOpenFolder(null)}
          onPhotoClick={onPhotoClick}
        />
      )}
    </>
  )
}
