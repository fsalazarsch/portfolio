import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export const PortfolioList = ({ activeFilter }) => {
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationTexts, setPaginationTexts] = useState({ previous: "Previous", next: "Next" });
  const [indexData, setIndexData] = useState(null);
  const itemsPerPage = 6;

  useEffect(() => {
    const lang = localStorage.getItem('language') || 'en';
    Promise.all([
      import(`../../data/${lang}/portfolio.json`),
      import(`../../data/${lang}/index.json`)
    ])
      .then(([portfolioModule, indexModule]) => {
        setPortfolios(portfolioModule.default);
        setIndexData(indexModule.default);
        setPaginationTexts({
          previous: indexModule.default.pagination_previous || "Previous",
          next: indexModule.default.pagination_next || "Next"
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error("No se pudo cargar la data de portfolio:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  if (loading) return <p>Loading...</p>;

  const filtered = activeFilter === 'all' ? portfolios : portfolios.filter((p) => p.type === activeFilter);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filtered.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {currentItems.map((data, index) => {
        return (
          <div key={index} className="isotope-item col-md-6 mb-5 mobileapp frontend">
            <div className="card project-card">
              <div className="row">
                <div className="col-12 col-xl-5 card-img-holder">
                  <img
                    src={`./portfolio/assets/img/portfolio/${data.image}`}
                    className="card-img"
                    alt={data.title}
                  />
                </div>
                <div className="col-12 col-xl-7">
                  <div className="card-body">
                    <h5 className="card-title">
                      <Link className="theme-link" to={`/projectDetail/${data.title}`}>{data.title}</Link>
                    </h5>
                    <p className="card-text">{data.body}</p>
                    <p className="card-text">
                      <small className="text-muted">Client: ---</small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="link-mask">
                <Link className="theme-link" to={`/projectDetail/${data.title}`}>{data.title}</Link>
                <div className="link-mask-text">
                  <a className="btn btn-secondary" href={`/projectDetail/${data.title}`}>
                    <i className="fas fa-eye me-2" />
                    {indexData?.view_details || 'View Details'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {totalPages > 1 && (
        <nav className="blog-nav nav nav-justified my-5" aria-label="Portfolio pagination">
          <button
            className={`nav-link-prev nav-item nav-link rounded-left ${currentPage === 1 ? 'disabled' : ''}`}
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
          <button
            className={`nav-link-next nav-item nav-link rounded-right ${currentPage === totalPages ? 'disabled' : ''}`}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            style={{ display: currentPage === totalPages ? 'none' : 'block' }}
          >
            {paginationTexts.next}
            <i className="arrow-next fas fa-long-arrow-alt-right ms-2" />
          </button>
        </nav>
      )}
    </>
  );
};