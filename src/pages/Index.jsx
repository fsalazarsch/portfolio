import React, { Component,  useEffect, useState } from 'react';
import { Skills } from "../components/Skills";
import profile from '../assets/profile.jpg';  
import { Link } from 'react-router-dom';

class Index extends Component {
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
    <div className="main-wrapper">      
    

    
        <section className="about-me-section p-3 p-lg-5 theme-bg-light">
            <div className="container">
                <div className="profile-teaser row">
                    
                    <div className="col">
                        <h2 className="name font-weight-bold mb-1">Felipe Salazar Schlotterbeck</h2>
                        <div className="tagline mb-3">Senior Software Engineer</div>
                        <div className="bio mb-4">
                        {indexData.summary}
                        <div/>
                        </div>
                        <div className="mb-4">
                        <Link 
                            className="btn btn-primary me-2 mb-3" 
                            to={`/portfolio`} >
                            <i className="fas fa-arrow-alt-circle-right me-2"></i>Portfolio
                        </Link>

                        <Link 
                            className="btn btn-secondary mb-3" 
                            to={`/resume`} >
                            <i className="fas fa-file-alt me-2"></i>Resume
                        </Link>
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
                <h2 className="section-title font-weight-bold mb-3">{indexData.whatido_title}</h2>
                <div className="section-intro mb-5">
                {indexData.whatido_summary}
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