import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      indexData: null,
      lang: localStorage.getItem('language') || 'en',
    };
  }

  componentDidMount() {
    const { lang } = this.state;
    import(`../data/${lang}/index.json`)
      .then((module) => {
        const data = module.default;
        this.setState({ indexData: data });
        console.log(data)
      })
      .catch((err) => {
        console.error("No se pudo cargar la data:", err);
      });
  }

  setInnnerHtml(innerHtml) {
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
      >
        <i className="fas fa-file-pdf me-2" />
        {indexData.downlaod_pdf}
      </a>
<hr className="mb-4" />
              <h4 className="toggle-name mb-3">
                <i className="fas fa-adjust me-1"></i>{indexData.dark_mode}
              </h4>

              <input className="toggle" id="darkmode" type="checkbox" />
              <label className="toggle-btn mx-auto mb-0" htmlFor="darkmode"></label>
            </div>
      </header>
    );
  }
}

export default Navbar;
