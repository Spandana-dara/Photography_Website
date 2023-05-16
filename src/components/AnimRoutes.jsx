import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import GalleryA from '../pages/GalleryA';
import GalleryB from '../pages/GalleryB';

import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';

export default function AnimRoutes() {
  const location=useLocation();
  return (
        <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/galleryA' element={<GalleryA />} />
        <Route path='/galleryB' element={<GalleryB />} />
      </Routes>
  )
}