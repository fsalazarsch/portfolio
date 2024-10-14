import React, { Component } from 'react';

class VideoDetail extends Component {
  render() {
    return (

  <div className="main-wrapper">
    <article className="blog-post px-3 py-5 p-md-5">
      <div className="container single-col-max-width">
        <header className="blog-post-header">
          <h2 className="title mb-2">Vdeotuts of C languaje</h2>
          <div className="meta mb-3">
            <span className="date">Published X days ago</span>
            <span className="comment">
              <a className="text-link" href="#">
                No comments plz
              </a>
            </span>
          </div>
        </header>
        <div className="blog-post-body">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
            semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
            porttitor eu, consequat vitae, eleifend ac, enim.{" "}
          </p>
          <h5 className="my-3">PlayList:</h5>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Time</th>
                <th scope="col"> <i className="fa-solid fa-terminal" /> </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row" ><i className="fas fa-regular fa-circle-play" /> &nbsp;Introduction to C</td>
                <td>(5:04)</td>
                <td> <i className="fab fa-brand fa-github" /></td>
              </tr>
              <tr>
                <td scope="row" style={{color: 'gray'}}><i className="fas fa-regular fa-circle-play" /> &nbsp;Variables</td>
                <td style={{color: 'gray'}}>(7:03)</td>
                <td style={{color: 'gray'}}> <i className="fab fa-brand fa-github" /></td>
              </tr>
            </tbody>
          </table>

          <h3 className="mt-5 mb-3">Video Example</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.{" "}
          </p>
          <div className="ratio ratio-16x9">
            <iframe
              width={560}
              height={315}
              src="https://www.youtube.com/embed/1nxSE0R27Gg"
              frameBorder={0}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen=""
            />
          </div>
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
      </div>
    </article>
  </div>


    );
  }
}

export default VideoDetail;