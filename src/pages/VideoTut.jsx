import React, { Component } from 'react';
import { VideotutsList } from "../components/video/VideotutsList";


class VideoTut extends Component {

  constructor(props) {
    super(props);
    this.state = {
      indexData: null,
      lang: localStorage.getItem('language') || 'en',
    };
  }

  componentDidMount() {
    const { lang } = this.state;
    import(`../data/${lang}/index.json`)
      .then((module) => {
        const data = module.default;
        this.setState({ indexData: data });
        console.log(data)
      })
      .catch((err) => {
        console.error("No se pudo cargar la data:", err);
      });
  }

  setInnerHtml(innerHtml) {
    return { __html: innerHtml };
  }

    
  render() {
    const { indexData } = this.state;
    if (!indexData) {
        return <p>Loading...</p>; 
      }

    return (
      <>
        <div className="main-wrapper">
          <section className="cta-section theme-bg-light py-5">
            <div className="container text-center">
              <h2 className="heading">{indexData.video_title}</h2>
              <div className="intro" dangerouslySetInnerHTML={this.setInnerHtml(indexData.summary_videotutorials)} />
            </div>
          </section>
          <section className="blog-list px-3 py-5 p-md-5">
            <div className="container">
              <div className="row">
                <VideotutsList/>
                
              </div>
              {/*
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
              */}
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default VideoTut;