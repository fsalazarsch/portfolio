import React from "react";
import { skillsData } from "../data/skills";

export const Skills = () => {

  function setInnnerHtml(innerHtml){
    return {__html: innerHtml}
  }

  const skills = skillsData.en;

  return (
    <>
        {

          skills.map((data, key) => {
          return (

            <div className="item col-6 col-lg-4" key={key}>
                <div className="item-inner">
                <div className="item-icon">
                  <i className={data.icon[0]}></i>
                    && <i className={data.icon[1]}></i>}
                  {data.icon[2] && <i className={data.icon[2]}></i>}
                  {data.icon[3] && <i className={data.icon[3]}></i>}
                  {data.icon[4] && <i className={data.icon[4]}></i>}
                </div>            
                <h3 className="item-title">{data.title}</h3>
                    <div className="item-desc" dangerouslySetInnerHTML = {setInnnerHtml(data.detail)} />
                </div>
            </div>

          );
        })}
      
    </>
  );
};