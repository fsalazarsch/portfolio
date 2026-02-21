import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Index from './pages/Index';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Test from './pages/Test';
import Blog from './pages/Blog';
import VideoTut from './pages/VideoTut';

import BlogDetail from './components/blog/BlogDetail';
//import BlogDetail from './components/blog/BlogDetailtemplate';

import TestDetail from './components/test/TestDetail';

import ProjectDetail from './components/portfolio/ProjectDetail';

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
          <Route path="/blogDetail/:title" element={<BlogDetail />} />
          <Route path="/projectDetail/:title" element={<ProjectDetail />} />
          <Route path="/videotut" element={<VideoTut />} />
          <Route path="/videoDetail" element={<VideoDetail />} />
          <Route path="/videoDetail/:title" element={<VideoDetail />} />
          <Route path="/test" element={<Test />} />
          <Route path="/test/:company" element={<TestDetail />} />

          <Route path="/api-docs" element={<SwaggerDoc />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
