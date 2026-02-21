import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function TestDetail(){
  const [test, setTest] = useState([]);
  const [loading, setLoading] = useState(true);
  const { company } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const lang = localStorage.getItem('language') || 'en';
    import(`../../data/${lang}/tests.json`)
      .then((module) => {
        setTest(module.default);
        setLoading(false);
      })
      .catch((err) => {
        console.error("No se pudo cargar la data de tests:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  const data = test.find((item) => item.company === decodeURIComponent(company));

  if (!data) return <p>Test not found</p>;

  return (
    <div className="main-wrapper">
      <article className="blog-post px-3 py-5 p-md-5">
        <div className="container single-col-max-width">

          <header className="blog-post-header">
            <h2 className="title mb-2">{data.title}</h2>
            <div className="meta mb-3">
              <span>{data.company}</span>
            </div>
          </header>

          <div
            className="blog-post-body"
            dangerouslySetInnerHTML={{ __html: data.content.detail }}
          />

          <h5 className="my-3">Source Code:</h5>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Nombre - Tecnologías</th>
                <th scope="col"><i className="fa-solid fa-terminal" /></th>
              </tr>
            </thead>
            <tbody>
              {data.content.codes.map((item, index) => (
                item.available === true ? (
                  <tr key={index}>
                    <td>&nbsp;{item.title}</td>
                    <td>
                      <a href={item.code} target="_blank" rel="noreferrer">
                        <i className="fab fa-bitbucket" />
                      </a>
                    </td>
                  </tr>
                ) : (
                  <tr key={index}>
                    <td style={{ color: 'gray' }}>&nbsp;{item.title}</td>
                    <td style={{ color: 'gray' }}>
                      <i className="fab fa-bitbucket" />
                    </td>
                  </tr>
                )
              ))}
            </tbody>
          </table>

          <hr className="mt-5" />

          <div className="text-center mt-4">
            <button
              className="btn btn-primary"
              onClick={() => navigate('/test')}
            >
              <i className="fas fa-arrow-left me-2" />
              Volver a Tests
            </button>
          </div>

        </div>
      </article>
    </div>
  );
}

export default TestDetail;