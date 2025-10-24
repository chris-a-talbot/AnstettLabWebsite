import { useEffect, useState } from 'react'
import { getPosts, stripHtml, type WPPost } from '../lib/wp'

export default function Posts() {
  const [posts, setPosts] = useState<WPPost[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    getPosts({ perPage: 5 })
      .then((data) => {
        if (!cancelled) {
          setPosts(data)
          setError(null)
        }
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          const message = err instanceof Error ? err.message : 'Unknown error'
          setError(message)
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  if (loading) return <p style={{ color: 'var(--text-secondary)' }}>Loading posts…</p>
  if (error) return <p style={{ color: '#c44536' }}>Failed to load posts: {error}</p>
  if (!posts || posts.length === 0) return <p style={{ color: 'var(--text-secondary)' }}>No posts found.</p>

  return (
    <section>
      <ul style={{ paddingLeft: 0, listStyle: 'none', display: 'grid', gap: '2rem' }}>
        {posts.map((post) => (
          <li key={post.id}>
            <a 
              href={post.link} 
              target="_blank" 
              rel="noreferrer" 
              style={{ 
                textDecoration: 'none',
                color: 'var(--text-primary)',
                display: 'block'
              }}
            >
              <h3 style={{ 
                marginTop: 0, 
                marginBottom: '0.75rem', 
                fontSize: '1.5rem',
                fontWeight: 500,
                color: 'var(--text-primary)'
              }}>
                {stripHtml(post.title.rendered)}
              </h3>
            </a>
            <p style={{ 
              marginBottom: 0, 
              color: 'var(--text-secondary)', 
              lineHeight: 1.7,
              fontSize: '0.95rem'
            }}>
              {stripHtml(post.excerpt.rendered)}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
