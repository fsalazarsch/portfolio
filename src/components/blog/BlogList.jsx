import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { timepassed } from '../../utils/dateutils';


export const BlogList = () => {
  const [blogList, setBlogList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationTexts, setPaginationTexts] = useState({ previous: "Anterior", next: "Siguiente" });
  const [indexData, setIndexData] = useState(null);
  const itemsPerPage = 6;

  useEffect(() => {
    const lang = localStorage.getItem('language') || 'en';
    Promise.all([
      import(`../../data/${lang}/blog.json`),
      import(`../../data/${lang}/index.json`)
    ])
      .then(([blogModule, indexModule]) => {
        setBlogList(blogModule.default);
        setIndexData(indexModule.default);
        setPaginationTexts({
          previous: indexModule.default.pagination_previous || indexModule.default.previous || "Anterior",
          next: indexModule.default.pagination_next || indexModule.default.next || "Siguiente"
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error("No se pudo cargar la data del blog:", err);
        setLoading(false);
      });
  }, []);

  // Reset to page 1 when language changes
  useEffect(() => {
    setCurrentPage(1);
  }, [blogList]);

  function setInnnerHtml(innerHtml){
    return {__html: innerHtml}
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  // Calculate pagination
  const totalPages = Math.ceil(blogList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = blogList.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {currentItems.map((data, index) => {
        return (
          <div className="item mb-5" key={index}>
            <div className="row g-3 g-xl-0">
              <div className="col-2 col-xl-3">
                <img
                  className="img-fluid post-thumb"
                  src="assets/images/blog/blog-post-thumb-1.jpg"
                  alt={data.title}
                />
              </div>
              <div className="col">
                <h3 className="title mb-1">
                  <Link className="text-link" to={`/blogDetail/${data.title}`}>
                    {data.title}
                  </Link>
                </h3>
                <div className="meta mb-1">
                  <span className="date">{timepassed(data.date)}</span>
                  <span className="time">5 min read</span>
                  <span className="comment">
                    <a className="text-link" href="#">
                      0 comments
                    </a>
                  </span>
                </div>
                <div className="intro">
                  {data.body}
                </div>
                <Link 
                  className="theme-link" 
                  to={`/blogDetail/${data.title}`} 
                >
                  {indexData?.read_more || 'Read more'} →
                </Link>                
              </div>
            </div>
          </div>
        );
      })}
      
      {/* Pagination */}
      {totalPages > 1 && (
        <nav className="blog-nav nav nav-justified my-5" aria-label="Blog pagination">
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