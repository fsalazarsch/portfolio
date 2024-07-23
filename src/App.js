import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Index from './components/Index';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Blog from './components/Blog';
import Contact from './components/Contact';
import BlogDetail from './components/BlogDetail';
import ProjectDetail from './components/ProjectDetail';



function App() {

  const [page, setPage] = useState("index");

  let ContentComponent;
  switch (page) {
    case "index":
      ContentComponent = Index;
      break;
    case "portfolio":
      ContentComponent = Portfolio;
      break;
    case "resume":
      ContentComponent = Resume;
      break;
    case "blog":
      ContentComponent = Blog;
      break;
    case "contact":
      ContentComponent = Contact;
      break;
    case "blogDetail":
      ContentComponent = BlogDetail;
      break;
    case "projectDetail":
      ContentComponent = ProjectDetail;
      break;
    default:
      ContentComponent = Index;
  }


  return (
    <div>
      <Navbar setPage={setPage} />
      <ContentComponent setPage={setPage}/>

    </div>


  );
}

export default App;
