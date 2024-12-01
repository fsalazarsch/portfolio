import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Index from './components/Index';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Blog from './components/Blog';
import Contact from './components/Contact';
import BlogDetail from './components/BlogDetail';
import ProjectDetail from './components/ProjectDetail';
import VideoTut from './components/VideoTut';
import VideoDetail from './components/VideoDetail';

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
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogDetail" element={<BlogDetail />} />
          <Route path="/projectDetail" element={<ProjectDetail />} />
          <Route path="/videotut" element={<VideoTut />} />
          <Route path="/videoDetail" element={<VideoDetail />} />
          <Route path="/videoDetail/:title" element={<VideoDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
