import React from "react";
import { expSkills } from "../data/resumeData";

export const SkillsResume = ({ typeSkills }) => {


  const lang = localStorage.getItem('language') || 'en';
  let skillsresume = [];

  if (typeSkills === "technical") {
    skillsresume = expSkills.technicals.custom || [];

    if (lang === "es")
      skillsresume = skillsresume.concat(expSkills.technicals.es || []);
    else if (lang === "pt")
      skillsresume = skillsresume.concat(expSkills.technicals.pt || []);
    else
      skillsresume = skillsresume.concat(expSkills.technicals.en || []);
  }

  if (typeSkills === "professional") {
    if (lang === "es")
      skillsresume = expSkills.professionals.es || [];
    else if (lang === "pt")
      skillsresume = expSkills.professionals.pt || [];
    else
      skillsresume = expSkills.professionals.en || [];
  }

  if (typeSkills === "interests") {
    if (lang === "es")
      skillsresume = expSkills.interests.es || [];
    else if (lang === "pt")
      skillsresume = expSkills.interests.pt || [];
    else
      skillsresume = expSkills.interests.en || [];
  }

  if (typeSkills === "languages") {
    if (lang === "es")
      skillsresume = expSkills.languages.es || [];
    else if (lang === "pt")
      skillsresume = expSkills.languages.pt || [];
    else
      skillsresume = expSkills.languages.en || [];
  }

  if (typeSkills === "languages") {
    if (lang === "es")
      skillsresume = expSkills.languages.es || [];
    else if (lang === "pt")
      skillsresume = expSkills.languages.pt || [];
    else
      skillsresume = expSkills.languages.en || [];
  }


  if (typeSkills === "education") {
    if (lang === "es")
      skillsresume = expSkills.education.es || [];
    else if (lang === "pt")
      skillsresume = expSkills.education.pt || [];
    else
      skillsresume = expSkills.education.en || [];
  }


  if (typeSkills === "awards") {
      skillsresume = expSkills.awards.default || [];
  }


  if(typeSkills === "education")
    return (
      <>
        
        {skillsresume.map((data, key) => (
                <li className="mb-3">
                <div className="resume-degree font-weight-bold">
                  {data.career}
                  </div>
                <div className="resume-degree-org text-muted">
                  {data.university}
                </div>
                <div className="resume-degree-time text-muted">
                  {data.duration}
                </div>
              </li>
        ))}
      </>
    );




  if(typeSkills === "languages"){
    return (
      <>
        {skillsresume.map((data, key) => {
          return (
            <ul className="list-unstyled resume-lang-list" key={key}>
              <>
                <li className="mb-2">
                  {data.lang} <span className="text-muted">({data.level})</span>
                </li>
  
              </>
            </ul>
          );
        })}
      </>
    );

  }

  
  if(typeSkills === "awards")
    return (
      <>
        
        {skillsresume.map((data, key) => (
          <li className="mb-3">
            <div className="text-muted">{data.detail}</div>
          </li>
        ))}
      </>
    );


  if((typeSkills === "technical") || (typeSkills === "professional") || (typeSkills === "interests"))
    return (
      <>
        
        {skillsresume.map((data, key) => (

          <li className="mb-2" key={key}>{data.detail}</li>
        ))}
      </>
    );
};
