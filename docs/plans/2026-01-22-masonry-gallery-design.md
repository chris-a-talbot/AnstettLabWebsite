# Masonry Photo Gallery with Folders - Design Document

**Date:** 2026-01-22
**Status:** Approved

## Overview

Redesign the photo gallery to use a dynamic masonry grid layout with folder support. Photos display at normalized visual weights while preserving aspect ratios. Folders appear as manila folder graphics and open as full-screen overlays with photos pinned inside.

## Data Structure

Single configuration file (`src/data/galleryConfig.ts`) defining all photos and folders:

```typescript
export interface GalleryPhoto {
  type: 'photo';
  src: string;
  alt: string;
  species: string;
}

export interface GalleryFolder {
  type: 'folder';
  name: string;
  preview: string[];  // 1-2 images peeking from folder icon
  photos: Omit<GalleryPhoto, 'type'>[];
}

export type GalleryItem = GalleryPhoto | GalleryFolder;
```

Current photos: ~3 loose for demonstration, ~35 in "Herbarium" folder.

## Masonry Grid Layout

CSS Grid with dynamic row spans based on aspect ratio:

- `grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))`
- `grid-auto-rows: 10px` (small base unit for fine control)
- Row span calculated from image dimensions after load

**Row span calculation:**
```typescript
const calculateRowSpan = (width: number, height: number, baseWidth = 300) => {
  const aspectRatio = width / height;
  const calculatedHeight = baseWidth / aspectRatio;
  return Math.ceil(calculatedHeight / 10) + 2; // +2 for gap compensation
};
```

All images get similar visual weight regardless of original pixel size. Portrait images span more rows, landscape fewer.

## Folder Appearance in Grid

Manila folder graphic fitting into masonry grid:

- **Body:** Warm manila tan (#d4b896) with subtle paper texture
- **Tab:** Darker tan (#c4a878), top-left, rounded top corners
- **Preview photos:** 1-2 images at ±3-5° rotation, peeking from top
- **Labels:** Folder name + photo count centered
- **Hover:** Slight scale up, shadow deepen
- **Fixed row span:** ~28-32 rows for consistent sizing

## Folder Overlay (Open State)

Full-screen modal styled as open manila folder:

- **Size:** ~90vw × 90vh, centered
- **Tab:** Protrudes from top-left with folder name
- **Interior:** Warm off-white (#f5f0e6)
- **Close:** ✕ button, ESC key, or click overlay
- **Animation:** Smooth scale/fade open

## Pinned Photos Inside Folders

Scattered/pinned layout inside open folders:

- Flexbox wrap with relaxed grid feel
- Random rotation per photo: -4° to +4° (deterministic from index)
- Slight vertical offset variation
- White border like physical photo prints
- Clicking opens existing lightbox modal
- Vertical scroll within folder body

## File Changes

### New Files
- `src/data/galleryConfig.ts` - Photo/folder configuration
- `src/components/MasonryGrid.tsx` - Main masonry grid
- `src/components/FolderItem.tsx` - Folder in grid
- `src/components/FolderOverlay.tsx` - Manila folder modal
- `src/components/PhotoItem.tsx` - Photo in masonry grid
- `src/components/PinnedPhoto.tsx` - Photo inside folder
- `src/styles/masonry.css` - Masonry styles
- `src/styles/folder.css` - Folder styles

### Modified Files
- `src/pages/Photos.tsx` - Use new components

### Preserved
- All images in `src/assets/flowers/`
- Existing lightbox functionality
- Archival aesthetic from theme.css
- Lazy loading
