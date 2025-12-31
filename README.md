# Anstett Lab Website

A React-based academic lab website built with TypeScript and Vite.

## Features

- Responsive multi-page layout (Home, Research, People, Publications, Photos, Contact, Blog)
- Optional WordPress REST API integration for blog posts
- Custom theming with CSS variables

## Setup

```bash
npm install
npm run dev
```

## WordPress Integration (Optional)

To connect a WordPress blog, create a `.env` file and set:
```
VITE_WORDPRESS_URL=https://your-wordpress-site.com
```

## Pages

- Home - Lab overview
- Research - Research focus and projects
- People - Team members and alumni
- Publications - Publications by year
- Photos - Image gallery
- Contact - Contact information
- Blog - WordPress-integrated posts (optional)

## Customization

Edit page components in `src/pages/` to customize content. Theme colors are defined in `src/theme.css` using CSS variables.

## Build

```bash
npm run build
```

## Tech Stack

- React + TypeScript
- Vite
- React Router
- WordPress REST API (optional)

## Project Structure

```
src/
├── assets/      # Static files
├── components/  # Reusable components
├── pages/       # Page components
├── lib/         # Utilities
└── theme.css    # Global styles
```
