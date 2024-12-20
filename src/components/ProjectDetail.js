import React, { Component } from 'react';

class ProjectDetail extends Component {
  render() {
    return (

  <div className="main-wrapper">
  <section className="cta-section theme-bg-light py-5">
    <div className="container single-col-max-width">
      <h2 className="heading text-center">Case Study: Project Name</h2>
      <div className="project-intro text-center">
        <p className="mb-0 lead">
          Project intro goes here. In the intro it's a good idea to answer a
          potential client's need/problem so it's more likely to land your next
          project or job.
        </p>
      </div>
    </div>
    {/*//container*/}
  </section>
  <section className="project px-3 py-5 p-md-5">
    <div className="container">
      <div className="project-meta theme-bg-light p-4">
        <div className="row g-4 g-lg-5">
          <div className="col-md-5 col-lg-4 col-xxl-3 d-none d-md-block">
            <img
              className="project-thumb img-fluid rounded"
              src="assets/images/project/project-3.jpg"
              alt=""
            />
          </div>
          {/*//col*/}
          <div className="col-12 col-md-7 col-lg-8 col-xxl-9">
            <div className="client-info">
              <h3 className="client-name font-weight-bold mb-4">Client Name</h3>
              <ul className="client-meta list-unstyled">
                <li className="mb-2">
                  <svg
                    className="svg-inline--fa fa-industry fa-fw me-2"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="industry"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M64 32C46.3 32 32 46.3 32 64V304v48 80c0 26.5 21.5 48 48 48H496c26.5 0 48-21.5 48-48V304 152.2c0-18.2-19.4-29.7-35.4-21.1L352 215.4V152.2c0-18.2-19.4-29.7-35.4-21.1L160 215.4V64c0-17.7-14.3-32-32-32H64z"
                    />
                  </svg>
                  {/* <i class="fas fa-industry fa-fw me-2"></i> Font Awesome fontawesome.com */}
                  <strong>Industry:</strong> Tech
                </li>
                <li className="mb-2">
                  <svg
                    className="svg-inline--fa fa-users fa-fw me-2"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="users"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"
                    />
                  </svg>
                  {/* <i class="fas fa-users fa-fw me-2"></i> Font Awesome fontawesome.com */}
                  <strong>Size:</strong> 100+
                </li>
                <li className="mb-2">
                  <strong>
                    <svg
                      className="svg-inline--fa fa-link fa-fw me-2"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="link"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"
                      />
                    </svg>
                    {/* <i class="fas fa-link fa-fw me-2"></i> Font Awesome fontawesome.com */}
                    Website:
                  </strong>{" "}
                  <a className="theme-link" href="#">
                    clientsite.com
                  </a>
                </li>
              </ul>
              <div className="client-bio mb-4">
                Short description of the client and project requirements. Lorem
                ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
              </div>
              <h4 className="subheading mb-3">Project Requirements</h4>
              <ul className="mb-0">
                <li className="mb-2">
                  Requirement lorem ipsum dolor sit amet, consectetuer
                  adipiscing elit.
                </li>
                <li className="mb-2">
                  Requirement donec pede justo, fringilla vel, aliquet nec.
                </li>
                <li className="mb-2">
                  Requirement phasellus ullamcorper ipsum rutrum nunc.{" "}
                </li>
              </ul>
            </div>
            {/*//client-info*/}
          </div>
          {/*//col*/}
        </div>
        {/*//row*/}
      </div>
      {/*//project-meta*/}
      <div className="project-sections py-5">
        <div className="project-section mb-5">
          <h3 className="project-section-title mb-3">Project Overview</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus.{" "}
          </p>
        </div>
        {/*//project-section*/}
        <div className="project-section mb-5">
          <h3 className="project-section-title">The Challenge</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus.{" "}
          </p>
        </div>
        {/*//project-section*/}
        <div className="project-section mb-5">
          <h3 className="project-section-title">The Approach &amp; Solution</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus.{" "}
          </p>
          <div className="row mt-5">
            <div className="col-12 col-lg-6 mb-5">
              <img
                className="img-fluid rounded"
                src="assets/images/project/project-figure-1.jpg"
                alt="image"
              />
            </div>
            <div className="col-12 col-lg-6 mb-5">
              <img
                className="img-fluid rounded"
                src="assets/images/project/project-figure-2.jpg"
                alt="image"
              />
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus.{" "}
          </p>
        </div>
        {/*//project-section*/}
        <div className="project-section mb-5">
          <h3 className="project-section-title mb-3">The Results</h3>
          <div className="metrics mb-4">
            <div className="row">
              <div className="metric col-6 col-xl-3 mb-3">
                <div className="inner p-3 theme-bg-light">
                  <div className="metric-name">Efficiency</div>
                  <div className="metric-data mb-2">
                    20% <span className="unit">up</span>
                  </div>
                  <div className="metric-desc">
                    Metric description lorem ipsum dolor sit amet.
                  </div>
                </div>
              </div>
              {/*//metric*/}
              <div className="metric col-6 col-xl-3 mb-3">
                <div className="inner p-3 theme-bg-light">
                  <div className="metric-name">Customer Satisfaction</div>
                  <div className="metric-data mb-2">
                    14% <span className="unit">up</span>
                  </div>
                  <div className="metric-desc">
                    Metric description lorem ipsum dolor sit amet.
                  </div>
                </div>
              </div>
              {/*//metric*/}
              <div className="metric col-6 col-xl-3 mb-3">
                <div className="inner p-3 theme-bg-light">
                  <div className="metric-name">Sales Generated</div>
                  <div className="metric-data mb-2">$130K</div>
                  <div className="metric-desc">
                    Metric description lorem ipsum dolor sit amet.
                  </div>
                </div>
              </div>
              {/*//metric*/}
              <div className="metric col-6 col-xl-3 mb-3">
                <div className="inner p-3 theme-bg-light">
                  <div className="metric-name">Overall Cost</div>
                  <div className="metric-data mb-2">
                    20% <span className="unit">down</span>
                  </div>
                  <div className="metric-desc">
                    Metric description lorem ipsum dolor sit amet.
                  </div>
                </div>
              </div>
              {/*//metric*/}
            </div>
            {/*//row*/}
          </div>
          {/*//metrics*/}
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus.{" "}
          </p>
        </div>
        {/*//project-section*/}
        <div className="project-section mb-5">
          <h3 className="project-section-title mb-3">Client Testimonial</h3>
        </div>
        {/*//project-section*/}
        <div className="client-quote">
          <div className="quote-holder">
            <blockquote className="quote-content">
              Simon is a brilliant software engineer! Lorem ipsum dolor sit
              amet, consectetuer adipiscing elit. Aenean commodo ligula eget
              dolor. Aenean massa. Cum sociis natoque penatibus et magnis.
            </blockquote>
            <svg
              className="svg-inline--fa fa-quote-left"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="quote-left"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"
              />
            </svg>
            {/* <i class="fas fa-quote-left"></i> Font Awesome fontawesome.com */}
          </div>
          {/*//quote-holder*/}
          <div className="source-holder">
            <div className="source-profile">
              <img src="assets/images/clients/profile-4.png" alt="image" />
            </div>
            <div className="meta">
              <div className="name">James Lee</div>
              <div className="info">Product Manager, Amazon</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="promo-section theme-bg-light py-5 text-center">
    <div className="container single-col-max-width">
      <h2 className="title">Want me to help with your project?</h2>
      <p>
        If you take on freelance work, you can use this section to prompt any
        potential clients to get in touch with you with their project
        requirements.
      </p>
      <div className="text-center">
        <a className="btn btn-primary" href="contact.html" target="_blank">
          <svg
            className="svg-inline--fa fa-paper-plane me-2"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="paper-plane"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"
            />
          </svg>
          {/* <i class="fas fa-paper-plane me-2"></i> Font Awesome fontawesome.com */}
          Hire Me
        </a>
      </div>
    </div>
    {/*//container*/}
  </section>

</div>



    );
  }
}

export default ProjectDetail;