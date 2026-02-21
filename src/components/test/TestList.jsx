import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


export const TestList = () => {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationTexts, setPaginationTexts] = useState({ previous: "Anterior", next: "Siguiente" });
  const itemsPerPage = 6;

  useEffect(() => {
    const lang = localStorage.getItem('language') || 'en';
    Promise.all([
      import(`../../data/${lang}/tests.json`),
      import(`../../data/${lang}/index.json`)
    ])
      .then(([testModule, indexModule]) => {
        setTests(testModule.default);
        setPaginationTexts({
          previous: indexModule.default.pagination_previous || "Anterior",
          next: indexModule.default.pagination_next || "Siguiente"
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error("No se pudo cargar la data de tests:", err);
        setLoading(false);
      });
  }, []);

  // Reset to page 1 when language changes
  useEffect(() => {
    setCurrentPage(1);
  }, [tests]);

  if (loading) {
    return <p>Loading...</p>;
  }

  // Calculate pagination
  const totalPages = Math.ceil(tests.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = tests.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  function setInnnerHtml(innerHtml){
    return {__html: innerHtml}
  }

  return (
    <>
      {currentItems.map((data) => {
        return (
          <div className="item mb-5">
          <div className="row g-3 g-xl-0">
            <div className="col-2 col-xl-3">
              <img
                className="img-fluid post-thumb "
                src={`assets/images/test/${data.image}`}
                alt={data.title}
              />
            </div>
            <div className="col">
              <h3 className="title mb-1">
                <a className="text-link" href={`/test/${data.company}`}>
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
      
      {/* Pagination */}
      {totalPages > 1 && (
        <nav className="blog-nav nav nav-justified my-5" aria-label="Tests pagination">
          <button
            className={`nav-link-prev nav-item nav-link d-none rounded-left ${currentPage === 1 ? 'disabled' : ''}`}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            style={{ display: currentPage === 1 ? 'none' : 'block' }}
          >
            <i className="arrow-prev fas fa-long-arrow-alt-left me-2" />
            {paginationTexts.previous}
          </button>
          
          <div className="pagination-info d-flex align-items-center justify-content-center flex-grow-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`btn btn-sm mx-1 ${currentPage === page ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ))}
          </div>
        </nav>
      )}
    </>
  );
};