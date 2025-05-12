import React from "react";
import { testList } from "../../data/tests";
import { Link } from 'react-router-dom';


  const lang = localStorage.getItem('language') || 'en';
  let tests = [];

      if (lang === "es"){
        tests = tests.concat(testList.es || []);
      }
      else if (lang === "pt"){
        tests = tests.concat(testList.pt || []);
      }
      else{
        tests = tests.concat(testList.en || []);
    }

export const TestList = () => {

  function setInnnerHtml(innerHtml){
    return {__html: innerHtml}
  }


  return (
    <>
      {tests.map((data) => {
        return (
          <div className="item mb-5">
          <div className="row g-3 g-xl-0">
            <div className="col-2 col-xl-3">
              <img
                className="img-fluid post-thumb "
                src="assets/images/blog/blog-post-thumb-2.jpg"
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
              <span> {data.company}</span>
              <span> {data.technologies}</span>
              </div>
              <div className="intro">
                {data.body}
              </div>
              <a className="text-link"  href={`/test/${data.company}`}>
                Read more →
              </a>
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