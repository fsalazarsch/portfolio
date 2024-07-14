import React, { Component } from 'react';

class Index extends Component {
  render() {
    return (
    <div className="main-wrapper">      
    

    
        <section className="about-me-section p-3 p-lg-5 theme-bg-light">
            <div className="container">
                <div className="profile-teaser row">
                    
                    <div className="col">
                        <h2 className="name font-weight-bold mb-1">Simon Doe</h2>
                        <div className="tagline mb-3">Senior Software Engineer</div>
                        <div className="bio mb-4">I'm a software engineer specialised in frontend and backend development for complex scalable web apps. I write about software development on <a className="text-link" href="blog-home.html">my blog</a>. Want to know how I may help your project? Check out my project <a className="text-link" href="projects.html">portfolio</a> and <a className="text-link" href="resume.html">online resume</a>.
                        </div>
                        <div className="mb-4">
                            <a className="btn btn-primary me-2 mb-3" href="portfolio.html"><i className="fas fa-arrow-alt-circle-right me-2"></i><span className="d-none d-md-inline">View</span> Portfolio</a>
                            <a className="btn btn-secondary mb-3" href="resume.html"><i className="fas fa-file-alt me-2"></i><span className="d-none d-md-inline">View</span> Resume</a>
                        </div>
                    </div>
                    
                    <div className="col-md-5 col-lg-5">
                        <img className="profile-image img-fluid mb-3 mb-lg-0 me-md-0" src="assets/images/profile-lg.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
        
        <section className="overview-section p-3 p-lg-5">
            <div className="container">
                <h2 className="section-title font-weight-bold mb-3">What I do</h2>
                <div className="section-intro mb-5">I have more than 10 years' experience building software for clients all over the world. Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience? Check out my <a className="text-link" href="resume.html">online resume</a> and <a className="text-link" href="portfolio.html">project portfolio</a>.</div>
                <div className="row">
                    <div className="item col-6 col-lg-3">
                        <div className="item-inner">
                            <div className="item-icon"><i className="fab fa-js-square"></i></div>
                            <h3 className="item-title">Vanilla JavaScript</h3>
                            <div className="item-desc">List skills/technologies here. You can change the icon above to any of the 1500+ <a className="theme-link" href="https://fontawesome.com/" target="_blank">FontAwesome 5 free icons</a> available. Aenean commodo ligula eget dolor.</div>
                        </div>
                    </div>
                    <div className="item col-6 col-lg-3">
                        <div className="item-inner">
                            <div className="item-icon"><i className="fab fa-angular me-2"></i><i className="fab fa-react me-2"></i><i className="fab fa-vuejs"></i></div>
                            <h3 className="item-title">Angular, React &amp;  Vue</h3>
                            <div className="item-desc">List skills/technologies here. You can change the icon above to any of the 1500+ <a className="theme-link" href="https://fontawesome.com/" target="_blank">FontAwesome 5 free icons</a> available. Aenean commodo ligula eget dolor.  </div>
                        </div>
                    </div>
                    
                    <div className="item col-6 col-lg-3">
                        <div className="item-inner">
                            <div className="item-icon"><i className="fab fa-node-js"></i></div>
                            <h3 className="item-title">Node.js</h3>
                            <div className="item-desc">List skills/technologies here. You can change the icon above to any of the 1500+ <a className="theme-link" href="https://fontawesome.com/" target="_blank">FontAwesome 5 free icons</a> available. Aenean commodo ligula eget dolor.  </div>
                        </div>
                    </div>
                    
                    <div className="item col-6 col-lg-3">
                        <div className="item-inner">
                            <div className="item-icon"><i className="fab fa-python"></i></div>
                            <h3 className="item-title">Python &amp; Django</h3>
                            <div className="item-desc">List skills/technologies here. You can change the icon above to any of the 1500+ <a className="theme-link" href="https://fontawesome.com/" target="_blank">FontAwesome 5 free icons</a> available. Aenean commodo ligula eget dolor.  </div>
                        </div>
                    </div>
                    <div className="item col-6 col-lg-3">
                        <div className="item-inner">
                            <div className="item-icon"><i className="fab fa-php"></i></div>
                            <h3 className="item-title">PHP</h3>
                            <div className="item-desc">List skills/technologies here. You can change the icon above to any of the 1500+ <a className="theme-link" href="https://fontawesome.com/" target="_blank">FontAwesome 5 free icons</a> available. Aenean commodo ligula eget dolor.  </div>
                        </div>
                    </div>
                    <div className="item col-6 col-lg-3">
                        <div className="item-inner">
                            <div className="item-icon"><i className="fab fa-npm me-2"></i><i className="fab fa-gulp me-2"></i><i className="fab fa-grunt"></i></div>
                            <h3 className="item-title">npm, Gulp &amp; Grunt</h3>
                            <div className="item-desc">List skills/technologies here. You can change the icon above to any of the 1500+ <a className="theme-link" href="https://fontawesome.com/" target="_blank">FontAwesome 5 free icons</a> available. Aenean commodo ligula eget dolor.  </div>
                        </div>
                    </div>
                    <div className="item col-6 col-lg-3">
                        <div className="item-inner">
                            <div className="item-icon"><i className="fab fa-html5 me-2"></i><i className="fab fa-css3-alt"></i></div>
                            <h3 className="item-title">HTML &amp; CSS</h3>
                            <div className="item-desc">List skills/technologies here. You can change the icon above to any of the 1500+ <a className="theme-link" href="https://fontawesome.com/" target="_blank">FontAwesome 5 free icons</a> available. Aenean commodo ligula eget dolor.  </div>
                        </div>
                    </div>
                    <div className="item col-6 col-lg-3">
                        <div className="item-inner">
                            <div className="item-icon"><i className="fab fa-sass me-2"></i><i className="fab fa-less"></i></div>
                            <h3 className="item-title">Sass &amp; LESS</h3>
                            <div className="item-desc">List skills/technologies here. You can change the icon above to any of the 1500+ <a className="theme-link" href="https://fontawesome.com/" target="_blank">FontAwesome 5 free icons</a> available. Aenean commodo ligula eget dolor.  </div>
                        </div>
                    </div>
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