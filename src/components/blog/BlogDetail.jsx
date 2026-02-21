import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function BlogDetail(){
  const [blogList, setBlogList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { title } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const lang = localStorage.getItem('language') || 'en';
    import(`../../data/${lang}/blog.json`)
      .then((module) => {
        setBlogList(module.default);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error cargando blog:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  const data = blogList.find((item) => item.title === decodeURIComponent(title));

  if (!data) return <p>Blog post not found</p>;

  return (
    <div className="main-wrapper">
      <article className="blog-post px-3 py-5 p-md-5">
        <div className="container single-col-max-width">

          {/* Imagen banner */}
          {data.image && (
            <figure className="blog-banner mb-4">
              <img
                className="img-fluid rounded w-100"
                src={`assets/images/blog/${data.image}`}
                alt={data.title}
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              />
            </figure>
          )}

          <header className="blog-post-header mb-4">
            <h2 className="title mb-2">{data.title}</h2>
            <div className="meta mb-3">
              <span className="date me-3">{data.date}</span>
              <span className="time">5 min read</span>
            </div>
            {/* Intro/resumen como en LinkedIn */}
            <p className="lead text-muted border-start border-3 ps-3">
              {data.body}
            </p>
          </header>

          <hr className="mb-4" />

          {/* Contenido del artículo */}
          <div
            className="blog-post-body"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />

          <hr className="mt-5" />

          {/* Botón volver */}
          <div className="text-center mt-4">
            <button
              className="btn btn-primary"
              onClick={() => navigate('/blog')}
            >
              <i className="fas fa-arrow-left me-2" />
              Volver al Blog
            </button>
          </div>

        </div>
      </article>
    </div>
  );
}

export default BlogDetail;