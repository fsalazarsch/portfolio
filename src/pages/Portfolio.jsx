import React, { Component } from 'react';
import { PortfolioList } from "../components/portfolio/PortfolioList";


class Portfolio extends Component {
  render() {
    return (

  <div className="main-wrapper">
    <section className="cta-section theme-bg-light py-5">
      <div className="container text-center single-col-max-width">
        <h2 className="heading">Portfolio</h2>
        <div className="intro">
          <p>
          Welcome to my online portfolio. Here, you'll find a selection of my personal projects and company projects that I am permitted to share. 
          I'm currently adapting some of these projects to work with various frameworks.
          </p>
        </div>
        <a className="btn btn-primary" href="contact.html" target="_blank">
          <i className="fas fa-paper-plane me-2" />
          Hire Me
        </a>
      </div>
    </section>
    <section className="projects-list px-3 py-5 p-md-5">
      <div className="container">
        <div className="text-center">
          <ul id="filters" className="filters mb-5 mx-auto   ps-0">
            <li className="type active mb-3 mb-lg-0" data-filter="*">
              All
            </li>
            <li className="type  mb-3 mb-lg-0" data-filter=".webapp">
              Web App
            </li>
            <li className="type  mb-3 mb-lg-0" data-filter=".mobileapp">
              Mobile App
            </li>
            <li className="type  mb-3 mb-lg-0" data-filter=".frontend">
              Frontend
            </li>
            <li className="type  mb-3 mb-lg-0" data-filter=".backend">
              Backend
            </li>
          </ul>
          {/*//filters: mobileapp webapp frontend backend*/}
        </div>
        <div className="project-cards row isotope">
          <PortfolioList/>

        </div>
        {/*//row*/}
      </div>
    </section>
  </div>

    );
  }
}

export default Portfolio;