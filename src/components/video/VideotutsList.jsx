import React from "react";
import { videotutList } from "../../data/en/videotutorials";
import { Link } from 'react-router-dom';
import { timepassed } from '../../utils/dateutils';


export const VideotutsList = () => {

  function setInnnerHtml(innerHtml){
    return {__html: innerHtml}
  }


  return (
    <>
      {videotutList.map((data, key) => {
        return (
            <div className="col-md-4 mb-3">
            <div className="card blog-post-card">
              <img
                className="card-img-top"
                src= {`./portfolio/assets/img/videotuts/${data.image}`}
                alt="image"
              />
              <div className="card-body">
                <h5 className="card-title">
                <Link 
                    className="theme-link" 
                    to={`/videoDetail/${data.title}`} 
                    >
                    {data.title}
                </Link>
                </h5>
                <p className="card-text">
                  {data.body}
                </p>
                <p className="mb-0">
                  <a className="text-link" href={`/videoDetail/${data.title}`}>
                    Read more →
                  </a>
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">{timepassed(data.date)}</small>
              </div>
            </div>
            </div>
        );
      })}
    </>
  );
};