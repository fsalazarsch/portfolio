import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Index from './pages/Index';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Blog from './pages/Blog';
import BlogDetail from './components/blog/BlogDetailtemplate';
import ProjectDetail from './components/portfolio/ProjectDetail';
import VideoTut from './pages/VideoTut';
import VideoDetail from './components/video/VideoDetail';
import SwaggerDoc from './components/swagger/swaggerDoc';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogDetail" element={<BlogDetail />} />
          <Route path="/projectDetail/:title" element={<ProjectDetail />} />
          <Route path="/videotut" element={<VideoTut />} />
          <Route path="/videoDetail" element={<VideoDetail />} />
          <Route path="/videoDetail/:title" element={<VideoDetail />} />
          <Route path="/api-docs" element={<SwaggerDoc />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
