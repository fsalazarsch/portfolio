import React from "react";
import { blogList } from "../../data/en/blog";
import { Link } from 'react-router-dom';
import { timepassed } from '../../utils/dateutils';


export const BlogList = () => {

  function setInnnerHtml(innerHtml){
    return {__html: innerHtml}
  }


  return (
    <>
      {blogList.map((data) => {
        return (
          <div className="item mb-5">
          <div className="row g-3 g-xl-0">
            <div className="col-2 col-xl-3">
              <img
                className="img-fluid post-thumb "
                src="assets/images/blog/blog-post-thumb-1.jpg"
                alt="image"
              />
            </div>
            <div className="col">
              <h3 className="title mb-1">
                <a className="text-link" href="blog-post.html">
                  {data.title}
                </a>
              </h3>
              <div className="meta mb-1">
                <span className="date">{data.date}</span>
                <span className="time">5 min read</span>
                <span className="comment">
                  <a className="text-link" href="#">
                    0 comments
                  </a>
                </span>
              </div>
              <div className="intro">
                {data.body}
              </div>
              <Link 
                    className="theme-link" 
                    to={`/blogDetail/${data.title}`} 
                    >
                    Read more →
                </Link>                
            </div>
            {/*//col*/}
          </div>
          {/*//row*/}
        </div>
        );
      })}
    </>
  );
};