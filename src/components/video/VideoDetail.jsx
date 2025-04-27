import React, { Component } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { videotutList } from "../../data/en/videotutorials";

function VideoDetail () {

  const { title } = useParams(); // Para obtener el título de la URL
  const data = videotutList.find((item) => item.title === decodeURIComponent(title));

  console.log(data);
    return (

  <div className="main-wrapper">
    <article className="blog-post px-3 py-5 p-md-5">
      <div className="container single-col-max-width">
        <header className="blog-post-header">
          <h2 className="title mb-2">{title}</h2>
          <div className="meta mb-3">
            <span className="date">{data.date}</span>
            <span className="comment">
              <a className="text-link" href="#">
                No comments for now
              </a>
            </span>
          </div>
        </header>
        <div className="blog-post-body">
          <p>
            {data.content.detail}
          </p>
          
          {data.content.playlist  ? (
          <><h5 className="my-3">PlayList:</h5>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Time</th>
                <th scope="col"> <i className="fa-solid fa-terminal" /> </th>
              </tr>
            </thead>
            <tbody>
            {data.content.playlist.map((video) => (
              
                video.available === false ? (
                  <tr>
                  <td scope="row" style={{color: 'gray'}}><i className="fas fa-regular fa-circle-play" /> &nbsp;{video.name}</td>
                  <td style={{color: 'gray'}}>({video.time})</td>
                  <td style={{color: 'gray'}}> <i className="fab fa-brand fa-github" /></td>
                  </tr>
                ) : (
                  <tr>
                  <td scope="row" ><i className="fas fa-regular fa-circle-play" /> &nbsp;{video.name}</td>
                  <td>({video.time})</td>
                  <td><a href={video.code}><i className="fab fa-brand fa-github" /></a></td>
                </tr>
                )
                
              ))}
            </tbody>
          </table></>
          ) : null
          }

          <h3 className="mt-5 mb-3">Video</h3>
          <p>
            {data.content.secondDetail}
          </p>
          <div className="ratio ratio-16x9">
            <iframe
              width={560}
              height={315}
              src={`https://www.youtube.com/embed/videoseries?list=${data.content.playlistId}`}
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

export default VideoDetail;