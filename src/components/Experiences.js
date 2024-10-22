import React from "react";
import { expData } from "../data/experiences";

export const Experiences = () => {

  function setInnnerHtml(innerHtml){
    return {__html: innerHtml}
  }

  const experiences = expData.en;

  return (
    <>
        {

          experiences.map((data, key) => {
          return (

              <div className="item mb-3" key={key}>
                <div className="item-heading row align-items-center mb-2">
                  <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                    {data.posicion}
                  </h4>
                  <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">
                    {data.lugar} <br />[{data.tiempo}]
                  </div>
                </div>
                <div className="item-content">
                  <p>
                    {data.descripcion}
                  </p>
                  <ul className="resume-list">
                    <li>{data.cuerpo[0]}</li>
                    <li>{data.cuerpo[1]}</li>
                    <li>{data.cuerpo[2]}</li>
                  </ul>
                </div>
              </div>

          );
        })}
      
    </>
  );
};