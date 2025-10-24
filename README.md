# AnstettLab — React + TypeScript + Vite

A beautiful herbarium-themed academic lab website built with React, TypeScript, and Vite. Features an aged paper aesthetic with integrated WordPress blog functionality.

## Features

- 🌿 Herbarium-inspired design with aged paper texture
- 📱 Fully responsive layout
- 🧭 Multi-page navigation (Lab Home, About, People, Research, Photos, Contact, Blog)
- 📝 WordPress REST API integration for blog posts
- 🎨 Consistent theme across all pages
- ⚡ Fast development with Vite + HMR

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

- **Lab Home** - Welcome page with pressed flower imagery and recent news
- **About** - Lab mission, research focus, and philosophy
- **People** - Team members and alumni
- **Research** - Current projects and publications
- **Photos** - Field work and herbarium specimen gallery (displays your pressed flower images)
- **Contact** - Location and contact information
- **Blog** - WordPress-integrated blog posts

## WordPress Integration

WordPress posts are fetched from the REST API endpoint `wp-json/wp/v2/posts` using a small client in `src/lib/wp.ts`. The UI component `src/components/Posts.tsx` renders the latest 5 posts using the site URL from `VITE_WORDPRESS_URL`.

To connect to a WordPress.com or self-hosted WordPress instance:

- Ensure your site exposes the REST API at `https://your-site.com/wp-json/`
- If your site has CORS restrictions, allow your dev origin (default `http://localhost:5173`) in your WordPress or reverse proxy configuration
- For private sites or authenticated endpoints, you can extend the client to add headers/tokens

## Customization

### Theme Colors

The herbarium color scheme is defined in `src/theme.css` with CSS variables:

- `--herbarium-bg`: Aged paper background (#f4ead5)
- `--herbarium-accent`: Soft sage green (#9cac7e)
- `--header-bg`: Light sage header (#c5d4a8)

Feel free to adjust these to match your preferred aesthetic!

### Adding Content

Edit the page components in `src/pages/` to add your lab's specific information:

- `Home.tsx` - Update welcome text and news items
- `About.tsx` - Add lab mission and research focus
- `People.tsx` - List team members and their information
- `Research.tsx` - Describe current projects and publications
- `Photos.tsx` - Already displays your flower images from `src/assets/flowers/`
- `Contact.tsx` - Add your lab's contact details and address

## Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **WordPress REST API** - Blog integration

---

Built with 🌿 for The Anstett Lab
