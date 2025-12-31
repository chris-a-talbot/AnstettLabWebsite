import Posts from '../components/Posts'
import '../styles/blog.css'

export default function Blog() {
  return (
    <div className="blog-page" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <Posts />
    </div>
  )
}
