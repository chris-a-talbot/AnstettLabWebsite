# AnstettLab — React + TypeScript + Vite

A beautiful herbarium specimen-inspired academic lab website built with React, TypeScript, and Vite. Features an aged paper aesthetic reminiscent of traditional botanical collections.

## Features

- 🌿 Authentic herbarium-inspired design with aged paper background
- 📱 Fully responsive layout
- 🧭 Multi-page navigation (Home, Research, People, Publications, Photos, Contact, Blog)
- 📝 WordPress REST API integration for blog posts
- 🎨 Clean, sketch-style typography with Courier Prime and Special Elite fonts
- ⚡ Fast development with Vite + HMR
- 🖼️ Botanical imagery with pressed flower specimens

## Quick Start

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Configure WordPress (optional):**

   - Edit the `.env` file
   - Set `VITE_WORDPRESS_URL` to your WordPress site URL, e.g. `https://your-site.com`
   - Leave blank if you don't have a WordPress blog yet

3. **Run the dev server:**

   ```bash
   npm run dev
   ```

4. **Open your browser** to `http://localhost:5173` and explore the site!

## Site Structure

- **Home** - Welcome page with lab overview and botanical imagery
- **Research** - Lab mission, research focus, and current projects
- **People** - Team members with photos and bios, including alumni section
- **Publications** - Chronologically organized publications by year
- **Photos** - Gallery of pressed flower specimens and field work
- **Contact** - Lab location and contact information with Cornell affiliation
- **Blog** - WordPress-integrated blog posts (optional)

## WordPress Integration (Optional)

The blog page integrates with WordPress REST API to display posts. Set up is optional - the site works perfectly without it.

WordPress posts are fetched from the REST API endpoint `wp-json/wp/v2/posts` using a client in `src/lib/wp.ts`. The UI component `src/components/Posts.tsx` renders the latest 5 posts.

**To connect to WordPress:**

1. Copy `env.example` to `.env`
2. Set `VITE_WORDPRESS_URL=https://your-site.com` in `.env`
3. Ensure your WordPress site has REST API enabled (enabled by default)
4. If you have CORS restrictions, allow `http://localhost:5173` in your WordPress settings

**No WordPress?** Leave the `.env` file blank and the blog page will show a setup message.

## Customization

### Theme Colors

The herbarium specimen aesthetic is defined in `src/theme.css` with CSS variables:

- `--background`: Aged paper background (#f4ead5)
- `--card-bg`: Card background for contrast (#ede3c8)
- `--accent-green`: Soft botanical green for accents (#b8c99f)
- `--text-primary`: Dark gray for main text (#3d3d3d)
- `--text-secondary`: Medium gray for body text (#5a5a5a)

Adjust these colors to customize the aged paper effect or change the overall aesthetic!

### Adding Content

Edit the page components in `src/pages/` to add your lab's specific information:

- `Home.tsx` - Update welcome text, lab overview, and intro
- `Research.tsx` - Describe research focus, philosophy, and current projects
- `People.tsx` - Add team members with photos, bios, and alumni
- `Publications.tsx` - Add publications organized by year
- `Photos.tsx` - Add images to `src/assets/flowers/` (currently displays flower1-6.png)
- `Contact.tsx` - Update lab address, email, and contact details
- `Blog.tsx` - Integrates with WordPress (optional)

## Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

## Tech Stack

- **React 19** - Modern UI library with latest features
- **TypeScript** - Type safety and better developer experience
- **Vite 7** - Lightning-fast build tool and dev server with HMR
- **React Router 7** - Client-side routing for seamless navigation
- **WordPress REST API** - Optional blog integration
- **Google Fonts** - Courier Prime and Special Elite for authentic typewriter aesthetic

## Project Structure

```
src/
├── assets/          # Images and static files
│   ├── flowers/     # Pressed flower specimen images
│   └── people/      # Team member photos
├── components/      # Reusable React components
│   ├── Layout.tsx   # Main layout with header and navigation
│   └── Posts.tsx    # WordPress blog post display
├── pages/           # Page components
│   ├── Home.tsx
│   ├── Research.tsx
│   ├── People.tsx
│   ├── Publications.tsx
│   ├── Photos.tsx
│   ├── Contact.tsx
│   └── Blog.tsx
├── lib/             # Utilities and helpers
│   └── wp.ts        # WordPress API client
├── theme.css        # Global theme and styling
└── main.tsx         # Application entry point
```

---

Built for The Anstett Lab at Cornell University
