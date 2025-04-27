import React from "react";
import { projectsData } from "../data/projects";

export const ProjectsList = ({ starred }) => {

  

  const lang = localStorage.getItem('language') || 'en';
  let projects = [];


    if (lang === "es")
      projects = projects.concat(projectsData.es || []);
    else if (lang === "pt")
      projects = projects.concat(projectsData.pt || []);
    else
      projects = projects.concat(projectsData.en || []);

      if(starred == "true")
        projects = projects.filter(item => item.star === true);

    return (
      <>
        {projects.map((data, key) => (
          <div className="item mb-3">
            <div className="item-heading row align-items-center mb-2">
              <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                {data.title}
              </h4>
              <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">
                {data.extra}
              </div>
            </div>
            <div className="item-content">
              <p>
                {data.details}
              </p>
            </div>
          </div>
        ))}
      </>
    );
};
