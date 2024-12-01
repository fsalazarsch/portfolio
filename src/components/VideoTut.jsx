import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Videotuts } from "./VideotutsDetails";

class VideoTut extends Component {


    
  render() {
    return (
<>
  <div className="main-wrapper">
    <section className="cta-section theme-bg-light py-5">
      <div className="container text-center">
        <h2 className="heading">Videotutorials</h2>
        <div className="intro">
        Welcome! In this section, you’ll find video tutorials and ideas. I'm working on adding more content — stay tuned for updates! <br/>
        <b>NOTE:</b> the videos are in Spanish, but i will add additional information in English
        </div>
      </div>
    </section>
    <section className="blog-list px-3 py-5 p-md-5">
      <div className="container">
        <div className="row">
          <Videotuts/>
          
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