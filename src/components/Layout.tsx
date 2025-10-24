import { NavLink, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="container">
          <div className="site-title-wrapper">
            <h1 className="site-title">The Anstett Lab</h1>
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
        <div className="container">
          © {new Date().getFullYear()} Chris Talbot. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
