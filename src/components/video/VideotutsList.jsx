import React from "react";
import { videotutList } from "../../data/videotutorials";
import { Link } from 'react-router-dom';
import { timepassed } from '../../utils/dateutils';


  const lang = localStorage.getItem('language') || 'en';
  let videotut = [];

      if (lang === "es"){
        videotut = videotut.concat(videotutList.es || []);
      }
      else if (lang === "pt"){
        videotut = videotut.concat(videotutList.pt || []);
      }
      else{
        videotut = videotut.concat(videotutList.en || []);
    }


export const VideotutsList = () => {



  return (
    <>
      {videotut.map((data, key) => {
        return (
            <div className="col-md-4 mb-3">
            <div className="card blog-post-card">
              <img
                className="card-img-top"
                src= {`./portfolio/assets/img/videotuts/${data.image}`}
                alt="image"
                style={{ maxHeight: "170px" }}
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