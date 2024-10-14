import React, { Component } from 'react';
//import './Navbar.css'; 

class Navbar extends Component {
  handleLinkClick = (event, page) => {
    event.preventDefault();
    this.props.setPage(page);
  };

  render() {
    return (

    
    <header className="header text-center">     
        <div className="force-overflow">
            <h1 className="blog-name pt-lg-4 mb-0"><a className="no-text-decoration" href="#">Felipe Salazar Schlotterbeck</a></h1>
            
            <nav className="navbar navbar-expand-lg navbar-dark" >
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div id="navigation" className="collapse navbar-collapse flex-column" >
                    <div className="profile-section pt-3 pt-lg-0">                        
                        <div className="bio mb-3">Hi, welcome to my personal website!</div>
                        <ul className="social-list list-inline py-2 mx-auto">
                            <li className="list-inline-item"><a href="https://shorturl.at/knLT6"><i className="fab fa-linkedin-in fa-fw"></i></a></li>
                            <li className="list-inline-item"><a href="https://goo.gl/GfYwut"><i className="fab fa-github-alt fa-fw"></i></a></li>
                            <li className="list-inline-item"><a href="https://goo.gl/VDBBK6"><i className="fab fa-bitbucket fa-fw"></i></a></li>
                            <li className="list-inline-item"><a href="https://shorturl.at/cB4gk"><i className="fab fa-hackerrank fa-fw"></i></a></li>
                            <li className="list-inline-item"><a href="https://goo.gl/jURXc1"><i className="fab fa-stack-overflow fa-fw"></i></a></li>
                            <li className="list-inline-item"><a href="https://shorturl.at/egnT7"><i className="fab fa-youtube fa-fw"></i></a></li>
                        </ul>
                        <hr/> 
                    </div>
                    
                    <ul className="navbar-nav flex-column text-start">
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={(e) => this.handleLinkClick(e, 'index')}><i className="fas fa-user fa-fw me-2"></i>About Me<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={(e) => this.handleLinkClick(e, 'portfolio')}><i className="fas fa-laptop-code fa-fw me-2"></i>Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={(e) => this.handleLinkClick(e, 'services')}><i className="fas fa-cogs fa-fw me-2"></i>API</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={(e) => this.handleLinkClick(e, 'resume')}><i className="fas fa-file-alt fa-fw me-2"></i>Resume</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={(e) => this.handleLinkClick(e, 'blog')}><i className="fas fa-blog fa-fw me-2"></i>Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={(e) => this.handleLinkClick(e, 'videotut')}><i className="fas fa-video fa-fw me-2"></i>Videos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={(e) => this.handleLinkClick(e, 'contact')}><i className="fas fa-envelope-open-text fa-fw me-2"></i>Contact</a>
                        </li>
                    </ul>                    
    
                    <div className="dark-mode-toggle text-center w-100">
                        <hr className="mb-4" />
                        <h4 className="toggle-name mb-3 "><i className="fas fa-adjust me-1"></i>Dark Mode</h4>
                        
                        <input className="toggle" id="darkmode" type="checkbox" />
                        <label className="toggle-btn mx-auto mb-0" for="darkmode"></label>
                        
                    </div>
                    
                </div>
            </nav>
        </div>
    </header>
    );
  }
}

export default Navbar;