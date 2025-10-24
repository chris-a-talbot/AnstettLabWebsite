import { NavLink, Outlet, Link } from 'react-router-dom'
import cornellLogo from '../assets/cornell_logo.png'

export default function Layout() {
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="container">
          <div className="site-title-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h1 className="site-title" style={{ margin: 0 }}>The Anstett Lab</h1>
            </Link>
            <a 
              href="https://cals.cornell.edu/news/2024/10/meet-our-faculty-daniel-anstett" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ position: 'absolute', right: 0 }}
            >
              <img 
                src={cornellLogo} 
                alt="Cornell University - Meet Daniel Anstett" 
                style={{ height: '50px', width: 'auto', display: 'block' }}
              />
            </a>
          </div>
          <nav className="site-nav">
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              end
            >
              Lab Home
            </NavLink>
            <NavLink 
              to="/research" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Research
            </NavLink>
            <NavLink 
              to="/people" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              People
            </NavLink>
            <NavLink 
              to="/publications" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Publications
            </NavLink>
            <NavLink 
              to="/photos" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Photos
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </NavLink>
            <NavLink 
              to="/blog" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Blog
            </NavLink>
          </nav>
        </div>
      </header>
      
      <main className="main-content">
        <div className="container">
          <Outlet />
        </div>
      </main>
      
      <footer style={{
        backgroundColor: '#f8f9fa',
        borderTop: '1px solid #e0e0e0',
        padding: '1.5rem 0',
        marginTop: '4rem',
        textAlign: 'center',
        color: 'var(--text-secondary)',
        fontSize: '0.875rem'
      }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
          <img 
            src={cornellLogo} 
            alt="Cornell University" 
            style={{ height: '40px', width: 'auto', opacity: 0.7 }}
          />
          <div>
            © {new Date().getFullYear()} Chris Talbot. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
