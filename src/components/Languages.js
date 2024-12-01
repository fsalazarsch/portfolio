import React from "react";
import { langData } from "../data/lang";

export const Languages = () => {

  function setInnnerHtml(innerHtml){
    return {__html: innerHtml}
  }

  const languages = langData.en;

  return (
    <>
      {languages.map((data, key) => {
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
};