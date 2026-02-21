import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { timepassed } from '../../utils/dateutils';


export const VideotutsList = () => {
  const [videotut, setVideotut] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationTexts, setPaginationTexts] = useState({ previous: "Anterior", next: "Siguiente" });
  const itemsPerPage = 6;

  useEffect(() => {
    const lang = localStorage.getItem('language') || 'en';
    Promise.all([
      import(`../../data/${lang}/videotutorials.json`),
      import(`../../data/${lang}/index.json`)
    ])
      .then(([videoModule, indexModule]) => {
        setVideotut(videoModule.default);
        setPaginationTexts({
          previous: indexModule.default.pagination_previous || "Anterior",
          next: indexModule.default.pagination_next || "Siguiente"
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error("No se pudo cargar la data de videotutorials:", err);
        setLoading(false);
      });
  }, []);

  // Reset to page 1 when language changes
  useEffect(() => {
    setCurrentPage(1);
  }, [videotut]);

  if (loading) {
    return <p>Loading...</p>;
  }

  // Calculate pagination
  const totalPages = Math.ceil(videotut.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = videotut.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="row">
        {currentItems.map((data, key) => {
        return (
            <div className="col-md-4 mb-3">
            <div className="card blog-post-card">
              <img
                className="card-img-top"
                src= {`./portfolio/assets/img/videotuts/${data.image}`}
                alt="image"
                style={{ maxHeight: "170px" }}
              />
              <div className="card-body">
                <h5 className="card-title">
                <Link 
                    className="theme-link" 
                    to={`/videoDetail/${data.title}`} 
                    >
                    {data.title}
                </Link>
                </h5>
                <p className="card-text">
                  {data.body}
                </p>
                <p className="mb-0">
                  <a className="text-link" href={`/videoDetail/${data.title}`}>
                    Read more →
                  </a>
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">{timepassed(data.date)}</small>
              </div>
            </div>
            </div>
        );
      })}
      </div>
      
      {/* Pagination */}
      {totalPages > 1 && (
        <nav className="blog-nav nav nav-justified my-5" aria-label="Video tutorials pagination">
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