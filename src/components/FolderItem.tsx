import type { GalleryFolder } from '../data/galleryConfig'

interface FolderItemProps {
  folder: GalleryFolder
  onClick: () => void
}

export default function FolderItem({ folder, onClick }: FolderItemProps) {
  return (
    <div className="folder-item" onClick={onClick}>
      {/* Tab - lowest z-index */}
      <div className="gallery-folder-tab">{folder.name}</div>

      {/* Preview photos - middle z-index, can overlap tab */}
      <div className="folder-previews">
        {folder.preview.slice(0, 2).map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Preview ${i + 1}`}
            className="folder-preview-img"
            style={{
              transform: `rotate(${i % 2 === 0 ? -8 : 6}deg)`,
              right: i === 0 ? '45%' : '10%',
            }}
          />
        ))}
      </div>

      {/* Folder body - highest z-index, covers bottom of photos */}
      <div className="folder-body">
        <div className="folder-info">
          <span className="folder-label">{folder.name}</span>
          <span className="folder-count">({folder.photos.length} photos)</span>
        </div>
      </div>
    </div>
  )
}
