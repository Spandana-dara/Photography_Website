import { Carousel } from 'react-responsive-carousel';
import { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image1 from '../img/galleryB/1.png';
import Image2 from '../img/galleryB/2.png';
import Image3 from '../img/galleryB/3.png';
import Image4 from '../img/galleryB/4.png';

import Image5 from '../img/galleryB/5.png';
import Image6 from '../img/galleryB/6.png';
import Image7 from '../img/galleryB/7.png';
import Image8 from '../img/galleryB/8.png';
import Image9 from '../img/galleryB/9.png';
import Image10 from '../img/galleryB/10.png';
import Image11 from '../img/galleryB/11.png';
import Image12 from '../img/galleryB/12.png';
import Image13 from '../img/galleryB/13.png';
import Image14 from '../img/galleryB/14.png';
import Image15 from '../img/galleryB/15.png';

export default function GalleryB() {
  const [visibleImages, setVisibleImages] = useState(6);

  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6, 
    Image7,
    Image8,
    Image9, 
    Image10, 
    Image11,
    Image12, 
    Image13,
    Image14,
    Image15
  ];

  const handleSeeMore = () => {
    setVisibleImages(prevVisibleImages => prevVisibleImages + 3);
  };

  return (
    <section className='section bg-white'>
    <div className='flex justify-center'>
      <div className='mt-20'>
        <h1 className='text-3xl text-center'>Photos are windows into the human essence</h1>
        <div className='image-grid mt-20 ml-5 mr-5 grid grid-cols-3 gap-4' style={{ gridAutoRows: 'auto' }}>
          {images.slice(0, visibleImages).map((image, index) => (
            <img src={image} alt={`Image ${index + 1}`} className='object-contain' key={index} />
          ))}
        </div>
        {visibleImages < images.length && (
          <div className='flex justify-center mt-10'>
            <button className='btn' onClick={handleSeeMore}>
              See More
            </button>
          </div>
        )}
      </div>
    </div>
  </section>
  )
}
