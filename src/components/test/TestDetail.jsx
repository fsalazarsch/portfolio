import React from 'react';
import { testList } from "../../data/tests";
import { useParams } from 'react-router-dom';


function TestDetail(){

  const lang = localStorage.getItem('language') || 'en';
  let test = [];

      if (lang === "es"){
        test = test.concat(testList.es || []);
      }
      else if (lang === "pt"){
        test = test.concat(testList.pt || []);
      }
      else{
        test = test.concat(testList.en || []);
    }




  const { company } = useParams(); // Para obtener el título de la URL
  const data = test.find((item) => item.company === decodeURIComponent(company));


    return (

  <div className="main-wrapper">
    <article className="blog-post px-3 py-5 p-md-5">
      <div className="container single-col-max-width">
        <header className="blog-post-header">
          <h2 className="title mb-2">{data.title}</h2>
          <div className="meta mb-3">
            <span> {data.company}</span>
            
          </div>
        </header>
        <div className="blog-post-body"  dangerouslySetInnerHTML={{ __html: data.content.detail }}></div>
        
        <h5 className="my-3">Source Code:</h5>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Nombre - Tecnologías</th>
                <th scope="col"> <i className="fa-solid fa-terminal" /> </th>
              </tr>
            </thead>
            <tbody>
            {data.content.codes.map((item) => (
              
                item.available === true ? (
                  <tr>
                  <td scope="row">&nbsp;{item.title}</td>
                  <td><a href={item.code}><i className="fab fa-brand fa-bitbucket" /></a></td>
                  </tr>
                ) : (
                  <tr>
                  <td scope="row" style={{color: 'gray'}}>&nbsp;{item.title}</td>
                  <td style={{color: 'gray'}}> <i className="fab fa-brand fa-bitbucket" />{item.code}</td>
                  </tr>

                )
           ))}
           </tbody>
         </table>
         
        
        <nav className="blog-nav nav nav-justified my-5">
          <a className="nav-link-prev nav-item nav-link rounded-left" href="#">
            Previous
            <i className="arrow-prev fas fa-long-arrow-alt-left" />
          </a>
          <a className="nav-link-next nav-item nav-link rounded-right" href="#">
            Next
            <i className="arrow-next fas fa-long-arrow-alt-right" />
          </a>
        </nav>
        
        
      </div>
      {/*//container*/}
    </article>
  </div>


    );
  
}

export default TestDetail;