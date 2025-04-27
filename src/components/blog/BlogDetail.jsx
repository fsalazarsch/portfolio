import React, { Component } from 'react';
import { blogList } from "../../data/en/blog";
import { setInnnerHtml} from '../../utils/formatutils';

function BlogDetail(){

  const { title } = useParams(); // Para obtener el título de la URL
  const data = blogList.find((item) => item.title === decodeURIComponent(title));

    return (

  <div className="main-wrapper">
    <article className="blog-post px-3 py-5 p-md-5">
      <div className="container single-col-max-width">
        <header className="blog-post-header">
          <h2 className="title mb-2">{data.title}</h2>
          <div className="meta mb-3">
            <span className="date">{data.date}</span>
            <span className="time">5 min read</span>
            <span className="comment">
              <a className="text-link" href="#">
                4 comments
              </a>
            </span>
          </div>
        </header>
        <div className="blog-post-body">
          setInnnerHtml({data.content});
        </div>
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
        <div className="blog-comments-section">
          <div id="disqus_thread" />
          <noscript>
            Please enable JavaScript to view the &lt;a
            href="https://disqus.com/?ref_noscript" rel="nofollow"&gt; comments
            powered by Disqus. &lt;/a&gt;
          </noscript>
        </div>
        {/*//blog-comments-section*/}
      </div>
      {/*//container*/}
    </article>
  </div>


    );
  
}

export default BlogDetail;