import { NavLink, Outlet, Link } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="site-wrapper">
      {/* Header */}
      <header className="site-header">
        <div className="container">
          <div className="header-top">
            <Link to="/" className="site-logo">
              <div className="logo-icon">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Pressed leaf specimen icon */}
                  <path 
                    d="M50 15 Q48 35 50 50 Q52 65 50 85" 
                    stroke="var(--brown-text)" 
                    strokeWidth="2.5" 
                    fill="none"
                  />
                  <ellipse 
                    cx="35" cy="35" rx="12" ry="8" 
                    fill="var(--green-sage)" 
                    opacity="0.7"
                    transform="rotate(-25 35 35)"
                  />
                  <ellipse 
                    cx="65" cy="40" rx="10" ry="7" 
                    fill="var(--green-sage)" 
                    opacity="0.7"
                    transform="rotate(20 65 40)"
                  />
                  <ellipse 
                    cx="32" cy="50" rx="13" ry="9" 
                    fill="var(--green-sage)" 
                    opacity="0.7"
                    transform="rotate(-30 32 50)"
                  />
                  <ellipse 
                    cx="68" cy="55" rx="11" ry="8" 
                    fill="var(--green-sage)" 
                    opacity="0.7"
                    transform="rotate(25 68 55)"
                  />
                  <ellipse 
                    cx="35" cy="65" rx="12" ry="8" 
                    fill="var(--green-sage)" 
                    opacity="0.7"
                    transform="rotate(-20 35 65)"
                  />
                  <ellipse 
                    cx="65" cy="70" rx="10" ry="7" 
                    fill="var(--green-sage)" 
                    opacity="0.7"
                    transform="rotate(22 65 70)"
                  />
                  <path 
                    d="M35 35 L43 38 M65 40 L57 42 M32 50 L42 52 M68 55 L58 57 M35 65 L43 67 M65 70 L57 72" 
                    stroke="var(--green-dark)" 
                    strokeWidth="0.8" 
                    opacity="0.5"
                  />
                </svg>
              </div>
              <div className="logo-text">
                <h1>Anstett Lab</h1>
                <div className="logo-tagline">Evolutionary Ecology & Digital Archives</div>
              </div>
            </Link>
            
            <a 
              href="https://cals.cornell.edu/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <img 
                src="/src/assets/logos/cornell_seal_simple_web_black.png" 
                alt="Cornell University" 
                className="cornell-logo-header"
                style={{ height: '60px', width: 'auto' }}
              />
            </a>
          </div>
          
          <nav className="site-nav">
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              end
            >
              The Lab
            </NavLink>
            <NavLink 
              to="/research" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Research
            </NavLink>
            <NavLink 
              to="/publications" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Publications
            </NavLink>
            <NavLink 
              to="/people" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              The Herbarium
            </NavLink>
            <NavLink 
              to="/photos" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              SciComm & Design
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="main-content">
        <Outlet />
      </main>
      
      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <img 
                src="/src/assets/logos/cornell_seal_simple_web_black.png"
                alt="Cornell University School of Integrative Plant Science" 
                className="footer-logo"
              />
              <div className="footer-text">
                <strong>Cataloged by D.N. Anstett</strong> © {new Date().getFullYear()}. All Rights Reserved.
              </div>
            </div>
            
            <div className="footer-social">
              <span className="footer-label">Follow:</span>
              
              {/* Facebook */}
              <a 
                href="https://www.facebook.com/AnstettLab" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/anstettlab" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </a>
              
              {/* YouTube */}
              <a 
                href="https://www.youtube.com/@anstettlab" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="YouTube"
              >
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
