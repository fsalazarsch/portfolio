import React from "react";
import { portfolioList } from "../../data/portfolio";
import { Link } from 'react-router-dom';
import { timepassed } from '../../utils/dateutils';


export const PortfolioList = () => {

  
    const lang = localStorage.getItem('language') || 'en';
    let portfolios = [];
    let view_details="";
  
  
      if (lang === "es"){
        portfolios = portfolios.concat(portfolioList.es || []);
        view_details="Ver Detalles";
      }
      else if (lang === "pt"){
        portfolios = portfolios.concat(portfolioList.pt || []);
        view_details="Ver Detalhes";
      }
      else{
      portfolios = portfolios.concat(portfolioList.en || []);
      view_details="View Details";  
    }

  function setInnnerHtml(innerHtml){
    return {__html: innerHtml}
  }


  return (
    <>
      {portfolios.map((data) => {
        return (
          <div className="isotope-item col-md-6 mb-5 mobileapp frontend">
            <div className="card project-card">
              <div className="row">
                <div className="col-12 col-xl-5 card-img-holder">
                  <img
                    src={`./portfolio/assets/img/portfolio/${data.image}`}
                    className="card-img"
                    alt="image"
                  />
                </div>
                <div className="col-12 col-xl-7">
                  <div className="card-body">
                    <h5 className="card-title">
                    <Link 
                    className="theme-link" 
                    to={`/projectDetail/${data.title}`} 
                    >
                    {data.title}
                    </Link>
                    </h5>
                    <p className="card-text">
                      {data.body}
                    </p>
                    <p className="card-text">
                      <small className="text-muted">Client: ---</small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="link-mask">
              <Link 
                    className="theme-link" 
                    to={`/projectDetail/${data.title}`} 
                    >
                    {data.title}
                    </Link>
                <div className="link-mask-text">
                  <a className="btn btn-secondary" href={`/projectDetail/${data.title}`} >
                    <i className="fas fa-eye me-2" />
                    {view_details}
                  </a>
                </div>
              </div>
              {/*//link-mask*/}
            </div>
            {/*//card*/}
          </div>
        );
      })}
    </>
  );
};