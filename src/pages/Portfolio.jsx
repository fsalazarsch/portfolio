import React, { Component } from 'react';
import { PortfolioList } from "../components/portfolio/PortfolioList";


class Portfolio extends Component {

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
        return <p>Loading...</p>; 
      }

    return (

  <div className="main-wrapper">
    <section className="cta-section theme-bg-light py-5">
      <div className="container text-center single-col-max-width">
        <h2 className="heading">Portfolio</h2>
        <div className="intro">
          <p>
          {indexData.summary_porfolio}
          </p>
        </div>
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