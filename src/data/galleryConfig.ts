// Gallery configuration - auto-discovers photos from file system
//
// To add photos: Place them in src/assets/photos/
// To create folders: Create subfolders in src/assets/photos/
//
// Configuration: Edit src/assets/photos/gallery.config.json
//   - showCaptions: default visibility for root-level photos
//   - folders.{name}.showCaptions: visibility for specific folders
//   - captions.{path}: custom caption for specific images
//   - dates.{path}: custom date override (ISO format) for sorting
//
// Sorting: Photos are sorted by date (most recent first)
//   Priority: 1) config override, 2) EXIF metadata, 3) file modification time
//   Run `npm run extract-dates` locally to regenerate photo-dates.json, then commit it.
//   The file is committed to git and used directly during builds (no extraction on Railway).

import galleryConfigJson from '../assets/photos/gallery.config.json'
import photoDatesJson from './photo-dates.json'

export interface PhotoData {
  src: string
  alt: string
  caption: string
  showCaption: boolean
  date: string | null
}

export interface GalleryPhoto extends PhotoData {
  type: 'photo'
}

export interface GalleryFolder {
  type: 'folder'
  name: string
  preview: string[]
  photos: PhotoData[]
  showCaptions: boolean
  newestDate: string | null
}

export type GalleryItem = GalleryPhoto | GalleryFolder

interface GalleryConfig {
  showCaptions: boolean
  folders: Record<string, { showCaptions?: boolean }>
  captions: Record<string, string>
  dates: Record<string, string>
}

interface PhotoDateEntry {
  date: string
  source: string
}

interface PhotoDatesFile {
  generatedAt: string | null
  photos: Record<string, PhotoDateEntry>
}

const config: GalleryConfig = galleryConfigJson as GalleryConfig
const photoDates: Record<string, PhotoDateEntry> = (photoDatesJson as PhotoDatesFile).photos || {}

// Auto-import all images from the photos directory
// Include both lowercase and uppercase extensions
const imageModules = import.meta.glob<{ default: string }>(
  '../assets/photos/**/*.{png,jpg,jpeg,gif,webp,PNG,JPG,JPEG,GIF,WEBP}',
  { eager: true }
)

// Helper to extract display name from filename
const getDisplayName = (filename: string): string => {
  // Remove extension and replace underscores/hyphens with spaces
  const name = filename.replace(/\.[^/.]+$/, '').replace(/[_-]/g, ' ')
  // Capitalize first letter of each word
  return name.replace(/\b\w/g, c => c.toUpperCase())
}

// Helper to extract folder name from path
const getFolderFromPath = (path: string): string | null => {
  // Path format: ../assets/photos/[folder/]filename.ext
  const match = path.match(/\.\.\/assets\/photos\/(.+)\/[^/]+$/)
  if (match && match[1]) {
    return match[1]
  }
  return null // Root level photo
}

// Helper to get filename from path
const getFilename = (path: string): string => {
  return path.split('/').pop() || ''
}

// Helper to get relative path for config lookup
const getRelativePath = (path: string): string => {
  // Convert ../assets/photos/Herbarium/file.png to Herbarium/file.png
  // or ../assets/photos/file.png to file.png
  const match = path.match(/\.\.\/assets\/photos\/(.+)$/)
  return match ? match[1] : ''
}

// Get caption for a photo (custom or default)
const getCaption = (relativePath: string, filename: string): string => {
  if (config.captions && config.captions[relativePath]) {
    return config.captions[relativePath]
  }
  return getDisplayName(filename)
}

// Get date for a photo (config override > extracted date > null)
const getPhotoDate = (relativePath: string): string | null => {
  // Config override takes priority
  if (config.dates && config.dates[relativePath]) {
    return config.dates[relativePath]
  }
  // Use extracted date if available
  if (photoDates[relativePath]) {
    return photoDates[relativePath].date
  }
  return null
}

// Get showCaptions setting for a folder
const getFolderShowCaptions = (folderName: string): boolean => {
  if (config.folders && config.folders[folderName]?.showCaptions !== undefined) {
    return config.folders[folderName].showCaptions!
  }
  return config.showCaptions ?? true
}

// Sort by date (most recent first), nulls last
const sortByDate = <T extends { date: string | null }>(items: T[]): T[] => {
  return [...items].sort((a, b) => {
    if (!a.date && !b.date) return 0
    if (!a.date) return 1
    if (!b.date) return -1
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

// Build gallery items from discovered images
function buildGalleryItems(): GalleryItem[] {
  const folders: Record<string, PhotoData[]> = {}
  const loosePhotos: GalleryPhoto[] = []

  for (const path of Object.keys(imageModules)) {
    const src = imageModules[path].default
    const filename = getFilename(path)
    const relativePath = getRelativePath(path)
    const folder = getFolderFromPath(path)
    const caption = getCaption(relativePath, filename)
    const date = getPhotoDate(relativePath)

    const photoData: PhotoData = {
      src,
      alt: `${caption} photograph`,
      caption,
      showCaption: folder ? getFolderShowCaptions(folder) : (config.showCaptions ?? true),
      date
    }

    if (folder) {
      // Photo belongs to a folder
      if (!folders[folder]) {
        folders[folder] = []
      }
      folders[folder].push(photoData)
    } else {
      // Loose photo at root level
      loosePhotos.push({
        type: 'photo',
        ...photoData
      })
    }
  }

  // Sort loose photos by date
  const sortedLoosePhotos = sortByDate(loosePhotos)

  // Build folder items with sorted photos and newest date
  const folderItems: GalleryFolder[] = Object.entries(folders).map(([folderName, photos]) => {
    const sortedPhotos = sortByDate(photos)
    const newestDate = sortedPhotos[0]?.date || null

    return {
      type: 'folder' as const,
      name: folderName,
      preview: sortedPhotos.slice(0, 2).map(p => p.src),
      photos: sortedPhotos,
      showCaptions: getFolderShowCaptions(folderName),
      newestDate
    }
  })

  // Sort folders by their newest photo date
  const sortedFolders = [...folderItems].sort((a, b) => {
    if (!a.newestDate && !b.newestDate) return 0
    if (!a.newestDate) return 1
    if (!b.newestDate) return -1
    return new Date(b.newestDate).getTime() - new Date(a.newestDate).getTime()
  })

  // Combine all items and sort by date (loose photos use their date, folders use newestDate)
  const allItems: GalleryItem[] = [...sortedLoosePhotos, ...sortedFolders]

  // Final sort: interleave loose photos and folders by date
  return allItems.sort((a, b) => {
    const dateA = a.type === 'photo' ? a.date : a.newestDate
    const dateB = b.type === 'photo' ? b.date : b.newestDate
    if (!dateA && !dateB) return 0
    if (!dateA) return 1
    if (!dateB) return -1
    return new Date(dateB).getTime() - new Date(dateA).getTime()
  })
}

export const galleryItems: GalleryItem[] = buildGalleryItems()
