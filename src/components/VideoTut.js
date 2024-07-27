import React, { Component } from 'react';

class VideoTut extends Component {
  handleLinkClick = (event, page) => {
      event.preventDefault();
      this.props.setPage(page);
    };

    
  render() {
    return (
<>
  <div className="main-wrapper">
    <section className="cta-section theme-bg-light py-5">
      <div className="container text-center">
        <h2 className="heading">Videotutos</h2>
        <div className="intro">
          Welcome, this is a section under construction
        </div>
      </div>
    </section>
    <section className="blog-list px-3 py-5 p-md-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card blog-post-card">
              <img
                className="card-img-top"
                src="assets/images/blog/blog-post-thumb-card-1.jpg"
                alt="image"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <a className="theme-link" href="#" onClick={(e) => this.handleLinkClick(e, 'videoDetail')}>
                    Top 3 JavaScript Frameworks
                  </a>
                </h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient...
                </p>
                <p className="mb-0">
                  <a className="text-link" href="blog-post.html">
                    Read more →
                  </a>
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Published 2 days ago</small>
              </div>
            </div>
            {/*//card*/}
          </div>
          {/*//col*/}
          <div className="col-md-4 mb-3">
            <div className="card blog-post-card">
              <img
                className="card-img-top"
                src="assets/images/blog/blog-post-thumb-card-2.jpg"
                alt="image"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <a className="theme-link" href="blog-post.html">
                    About Remote Working
                  </a>
                </h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient...
                </p>
                <p className="mb-0">
                  <a className="text-link" href="blog-post.html">
                    Read more →
                  </a>
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Published a week ago</small>
              </div>
            </div>
            {/*//card*/}
          </div>
          {/*//col*/}
          <div className="col-md-4 mb-3">
            <div className="card blog-post-card">
              <img
                className="card-img-top"
                src="assets/images/blog/blog-post-thumb-card-3.jpg"
                alt="image"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <a className="theme-link" href="blog-post.html">
                    A Guide to Becoming a Full-Stack Developer
                  </a>
                </h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient...
                </p>
                <p className="mb-0">
                  <a className="text-link" href="blog-post.html">
                    Read more →
                  </a>
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Published 3 weeks ago</small>
              </div>
            </div>
            {/*//card*/}
          </div>
          {/*//col*/}
          <div className="col-md-4 mb-3">
            <div className="card blog-post-card">
              <img
                className="card-img-top"
                src="assets/images/blog/blog-post-thumb-card-4.jpg"
                alt="image"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <a className="theme-link" href="blog-post.html">
                    High Performance JavaScript
                  </a>
                </h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient...
                </p>
                <p className="mb-0">
                  <a className="text-link" href="blog-post.html">
                    Read more →
                  </a>
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Published 1 month ago</small>
              </div>
            </div>
            {/*//card*/}
          </div>
          {/*//col*/}
          <div className="col-md-4 mb-3">
            <div className="card blog-post-card">
              <img
                className="card-img-top"
                src="assets/images/blog/blog-post-thumb-card-5.jpg"
                alt="image"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <a className="theme-link" href="blog-post.html">
                    Learn React in 24 Hours
                  </a>
                </h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient...
                </p>
                <p className="mb-0">
                  <a className="text-link" href="blog-post.html">
                    Read more →
                  </a>
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Published 1 month ago</small>
              </div>
            </div>
            {/*//card*/}
          </div>
          {/*//col*/}
          <div className="col-md-4 mb-3">
            <div className="card blog-post-card">
              <img
                className="card-img-top"
                src="assets/images/blog/blog-post-thumb-card-6.jpg"
                alt="image"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <a className="theme-link" href="blog-post.html">
                    How to Build Desktop Apps with HTML, CSS and JavaScript
                  </a>
                </h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient...
                </p>
                <p className="mb-0">
                  <a className="text-link" href="blog-post.html">
                    Read more →
                  </a>
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Published 2 months ago</small>
              </div>
            </div>
            {/*//card*/}
          </div>
          {/*//col*/}
        </div>
        {/*//row*/}
        <nav className="blog-nav nav nav-justified my-5">
          <a
            className="nav-link-prev nav-item nav-link d-none rounded-left"
            href="#"
          >
            Previous
            <i className="arrow-prev fas fa-long-arrow-alt-left" />
          </a>
          <a className="nav-link-next nav-item nav-link rounded" href="#">
            Next
            <i className="arrow-next fas fa-long-arrow-alt-right" />
          </a>
        </nav>
      </div>
    </section>
  </div>
</>


    );
  }
}

export default VideoTut;