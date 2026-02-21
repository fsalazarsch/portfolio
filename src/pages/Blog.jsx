import React, { Component } from 'react';
import { BlogList } from '../components/blog/BlogList';

class Blog extends Component {
  render() {
    return (
<>
  <div className="main-wrapper">
    <section className="cta-section theme-bg-light py-5">
      <div className="container text-center single-col-max-width">
        <h2 className="heading">A Blog About Software Development And Life</h2>
        <div className="intro">
          Welcome to my blog. Subscribe and get my latest blog post in your
          inbox.
        </div>
        <div className="single-form-max-width pt-3 mx-auto">
          <form className="signup-form row g-2 g-lg-2 align-items-center">
            <div className="col-12 col-md-9">
              <label className="sr-only" htmlFor="semail">
                Your email
              </label>
              <input
                type="email"
                id="semail"
                name="semail1"
                className="form-control me-md-1 semail"
                placeholder="Enter email"
              />
            </div>
            <div className="col-12 col-md-2">
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </div>
          </form>
          {/*//signup-form*/}
        </div>
        {/*//single-form-max-width*/}
      </div>
      {/*//container*/}
    </section>
    <section className="blog-list px-3 py-5 p-md-5">
      <div className="container single-col-max-width">
        <BlogList/>
      </div>
    </section>
  </div>
</>

    );
  }
}

export default Blog;