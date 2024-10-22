import React, { Component } from 'react';

import { Skills } from "./Skills";
import profile from '../assets/profile.jpg';  


class Index extends Component {
  handleLinkClick = (event, page) => {
    event.preventDefault();
    this.props.setPage(page);
  };


  render() {
    return (
    <div className="main-wrapper">      
    

    
        <section className="about-me-section p-3 p-lg-5 theme-bg-light">
            <div className="container">
                <div className="profile-teaser row">
                    
                    <div className="col">
                        <h2 className="name font-weight-bold mb-1">Felipe Salazar Schlotterbeck</h2>
                        <div className="tagline mb-3">Senior Software Engineer</div>
                        <div className="bio mb-4">
                        Professional IT Engineer with over 10 years of experience in developing 
                    and leading innovative projects. Proficient in Java, Python, and full-stack
                    development. Successfully managed multiple projects from conception to 
                    completion. Self-taught, detail-oriented, and dedicated to continuous 
                    learning.
                        </div>
                        <div className="mb-4">
                            <a className="btn btn-primary me-2 mb-3" href="#" onClick={(e) => this.handleLinkClick(e, 'portfolio')}><i className="fas fa-arrow-alt-circle-right me-2"></i><span className="d-none d-md-inline">View</span> Portfolio</a>
                            <a className="btn btn-secondary mb-3" href="#" onClick={(e) => this.handleLinkClick(e, 'resume')}><i className="fas fa-file-alt me-2"></i><span className="d-none d-md-inline">View</span> Resume</a>
                        </div>
                    </div>
                    <div className="col-md-5 col-lg-5">
                        <img className="profile-image img-fluid mb-3 mb-lg-0 me-md-0" src={profile} alt="" />
                    </div>
                </div>
            </div>
        </section>
        
        <section className="overview-section p-3 p-lg-5">
            <div className="container">
                <h2 className="section-title font-weight-bold mb-3">What I do</h2>
                <div className="section-intro mb-5">
                I'm a software engineer specialised in frontend, backend 
                and mobile development for complex scalable web apps. 
                I write about software development, programming and other miscellaneous
                tech things on <a className="text-link" href="#" onClick={(e) => this.handleLinkClick(e, 'blog')}>
                my blog</a>. Want to know how I may help your project? Check out my project&nbsp;
                <a className="text-link" href="#" onClick={(e) => this.handleLinkClick(e, 'portfolio')}>
                portfolio</a> and <a className="text-link" href="#" onClick={(e) => this.handleLinkClick(e, 'resume')}>
                online resume</a>.
                </div>
                <div className="row">
                    <Skills />
                </div>
                <div className="text-center py-3"><a href="services.html" className="btn btn-primary"><i className="fas fa-arrow-alt-circle-right me-2"></i>Services &amp; Pricing
                    
                </a></div>
                
            </div>
        </section>
    </div>

    );
  }
}

export default Index;