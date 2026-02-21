import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      indexData: null,
      lang: localStorage.getItem('language') || 'es',
      darkMode: this.getInitialDarkMode(),
    };
  }

  componentDidMount() {
    this.loadLanguageData();
    // Initialize dark mode after a short delay to ensure DOM is ready
    setTimeout(() => {
      this.initializeDarkMode();
      this.setupDarkModeToggle();
    }, 100);
  }

  getInitialDarkMode = () => {
    // Check localStorage first
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') {
      return true;
    }
    if (stored === 'light') {
      return false;
    }
    
    // Check cookie if js-cookie is available
    if (typeof window !== 'undefined' && window.Cookies) {
      const cookieMode = window.Cookies.get('mode');
      if (cookieMode === 'dark-mode') {
        localStorage.setItem('theme', 'dark');
        return true;
      }
    }
    
    // Check if body already has dark-mode class (from index.js)
    if (document.body.classList.contains('dark-mode')) {
      return true;
    }
    
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return true;
    }
    
    return false;
  }

  initializeDarkMode = () => {
    const isDark = this.state.darkMode;
    const body = document.body;
    
    // Ensure body has correct class
    if (isDark) {
      body.classList.add('dark-mode');
      body.classList.remove('light-mode');
    } else {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
    }
  }

  setupDarkModeToggle = () => {
    // React handles this via onChange, but ensure checkbox is synced
    setTimeout(() => {
      const checkbox = document.getElementById('darkmode');
      if (checkbox && checkbox.checked !== this.state.darkMode) {
        checkbox.checked = this.state.darkMode;
      }
    }, 50);
  }

  handleDarkModeToggle = (event) => {
    const isDark = event.target.checked;
    const body = document.body;
    
    if (isDark) {
      body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
      // Set cookie if js-cookie is available
      if (typeof window !== 'undefined' && window.Cookies) {
        window.Cookies.set('mode', 'dark-mode', { expires: 7 });
      }
    } else {
      body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
      // Remove cookie if js-cookie is available
      if (typeof window !== 'undefined' && window.Cookies) {
        window.Cookies.remove('mode');
      }
    }
    
    this.setState({ darkMode: isDark });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.lang !== this.state.lang) {
      this.loadLanguageData();
    }
  }

  componentWillUnmount() {
    // Clean up event listener if needed
    const checkbox = document.getElementById('darkmode');
    if (checkbox) {
      checkbox.removeEventListener('change', this.handleDarkModeToggle);
    }
  }

  loadLanguageData = () => {
    const { lang } = this.state;
    import(`../data/${lang}/index.json`)
      .then((module) => {
        const data = module.default;
        this.setState({ indexData: data });
      })
      .catch((err) => {
        console.error("No se pudo cargar la data:", err);
        // Fallback a inglés si el idioma no existe
        if (lang !== 'en') {
          this.setState({ lang: 'en' });
        }
      });
  }

  handleLanguageChange = (newLang) => {
    if (newLang !== this.state.lang) {
      localStorage.setItem('language', newLang);
      this.setState({ lang: newLang });
      // Recargar la página para actualizar todos los componentes
      window.location.reload();
    }
  }

  setInnerHtml(innerHtml) {
    return { __html: innerHtml };
  }

  render() {
    const { indexData } = this.state;
    if (!indexData) {
        return <p>Loading...</p>; // O cualquier componente de carga
      }

    return (
      <header className="header text-center">
        <div className="force-overflow">
          <h1 className="blog-name pt-lg-4 mb-0">
            <a className="no-text-decoration" href="/">Felipe Salazar Schlotterbeck</a>
          </h1>

          <nav className="navbar navbar-expand-lg navbar-dark">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div id="navigation" className="collapse navbar-collapse flex-column">
              <ul className="navbar-nav flex-column text-start">

                            <ul className="social-list list-inline py-2 mx-auto">
                <li className="list-inline-item">
                  <a href="https://shorturl.at/knLT6">
                    <i className="fab fa-linkedin-in fa-fw"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://goo.gl/GfYwut">
                    <i className="fab fa-github-alt fa-fw"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://goo.gl/VDBBK6">
                    <i className="fab fa-bitbucket fa-fw"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://shorturl.at/cB4gk">
                    <i className="fab fa-hackerrank fa-fw"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://goo.gl/jURXc1">
                    <i className="fab fa-stack-overflow fa-fw"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://shorturl.at/egnT7">
                    <i className="fab fa-youtube fa-fw"></i>
                  </a>
                </li>
              </ul>
              <hr />

                <li className="nav-item">
                  <Link className="nav-link" to="/"><i className="fas fa-user fa-fw me-2"></i>{indexData.about_me}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/portfolio"><i className="fas fa-laptop-code fa-fw me-2"></i>Portfolio</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/resume"><i className="fas fa-file-alt fa-fw me-2"></i>Resume</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog"><i className="fas fa-blog fa-fw me-2"></i>Blog</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/videotut"><i className="fas fa-video fa-fw me-2"></i>Videos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/test"><i className="fas fa-file-code fa-fw me-2"></i>Test</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/api-docs"><i className="fas fa-cog fa-fw me-2"></i>API</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        
                    <div className="dark-mode-toggle text-center w-100">
              

              <a
        className="btn btn-primary"
        href={indexData.link_resume}
        target="_blank"
        rel="noreferrer"
      >
        <i className="fas fa-file-pdf me-2" />
        {indexData.downlaod_pdf}
      </a>
              <hr className="mb-4" />
              
              {/* Language Selector */}
              <div className="language-selector mb-4">
                <h4 className="toggle-name mb-3">
                  <i className="fas fa-language me-1"></i>Idioma / Language / Idioma
                </h4>
                <div className="btn-group" role="group" aria-label="Language selector">
                  <button
                    type="button"
                    className={`btn btn-sm ${
                      this.state.lang === 'es' 
                          ? 'btn-primary' 
                          : this.getInitialDarkMode() 
                              ? 'btn-outline-primary' 
                              : 'btn-outline'
                  }`}
                    onClick={() => this.handleLanguageChange('es')}
                    title="Español"
                  >
                    🇪🇸 ES
                  </button>
                  <button
                    type="button"
                    className={`btn btn-sm ${
                      this.state.lang === 'en' 
                          ? 'btn-primary' 
                          : this.getInitialDarkMode() 
                              ? 'btn-outline-primary' 
                              : 'btn-outline'
                  }`}
                    onClick={() => this.handleLanguageChange('en')}
                    title="English"
                  >
                    🇺🇸 EN
                  </button>
                  <button
                    type="button"
                    className={`btn btn-sm ${
                      this.state.lang === 'pt' 
                          ? 'btn-primary' 
                          : this.getInitialDarkMode() 
                              ? 'btn-outline-primary' 
                              : 'btn-outline'
                  }`}
                    onClick={() => this.handleLanguageChange('pt')}
                    title="Português"
                  >
                    🇧🇷 PT
                  </button>
                </div>
              </div>

              <hr className="mb-4" />
              <h4 className="toggle-name mb-3">
                <i className="fas fa-adjust me-1"></i>{indexData.dark_mode}
              </h4>

              <input 
                className="toggle" 
                id="darkmode" 
                type="checkbox" 
                checked={this.state.darkMode}
                onChange={this.handleDarkModeToggle}
              />
              <label className="toggle-btn mx-auto mb-0" htmlFor="darkmode"></label>
            </div>
      </header>
    );
  }
}

export default Navbar;
