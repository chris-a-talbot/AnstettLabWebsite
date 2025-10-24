// Minimal TypeScript client for WordPress REST API
// Defines types and helpers to fetch posts

export type WPRendered = {
  rendered: string
}

export type WPPost = {
  id: number
  date: string
  link: string
  slug: string
  title: WPRendered
  excerpt: WPRendered
  featured_media?: number
  _embedded?: Record<string, unknown>
}

function getEnvWordPressUrl(): string {
  const url = import.meta.env.VITE_WORDPRESS_URL as string | undefined
  if (!url) {
    throw new Error('Missing VITE_WORDPRESS_URL. Set it in your .env file.')
  }
  return url
}

function joinUrl(base: string, path: string): string {
  try {
    const u = new URL(path, base.endsWith('/') ? base : base + '/')
    return u.toString()
  } catch {
    return `${base.replace(/\/+$/, '')}/${path.replace(/^\/+/, '')}`
  }
}

async function fetchJson<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
    },
    ...init,
  })
  if (!response.ok) {
    const text = await response.text().catch(() => '')
    throw new Error(`WordPress request failed (${response.status}): ${text}`)
  }
  return (await response.json()) as T
}

export async function getPosts(params?: { perPage?: number; page?: number }): Promise<WPPost[]> {
  const base = getEnvWordPressUrl()
  const search = new URLSearchParams()
  search.set('per_page', String(params?.perPage ?? 10))
  if (params?.page) search.set('page', String(params.page))
  // _embed for convenient featured media/author if needed later
  search.set('_embed', '1')
  const url = joinUrl(base, `wp-json/wp/v2/posts?${search.toString()}`)
  return await fetchJson<WPPost[]>(url)
}

export function stripHtml(html: string): string {
  const tmp = globalThis.document?.createElement('div')
  if (!tmp) return html
  tmp.innerHTML = html
  return tmp.textContent || tmp.innerText || ''
}


