import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image1 from '../img/portfolio/10.png';
import Image2 from '../img/portfolio/7.png';
import Image3 from '../img/portfolio/8.png';
import Image4 from '../img/portfolio/9.png';

export default function GalleryB() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow">
        <Carousel showArrows={false} showThumbs={false} autoPlay={true} infiniteLoop={true}>
          <div>
            <img src={Image1} alt="" />
          </div>
          <div>
            <img src={Image2} alt="" />
          </div>
          <div>
            <img src={Image3} alt="" />
          </div>
          <div>
            <img src={Image4} alt="" />
          </div>
        </Carousel>
      </div>
      <div className="flex flex-col justify-center items-center h-16 bg-gray-900 text-white">
        <h1 className="text-2xl font-bold">Welcome to the Scrolling Images Page</h1>
        <p className="text-gray-300">Scroll down to explore more</p>
      </div>
      <div className="flex-grow bg-gray-200">
        {/* Rest of the page content */}
      </div>
    </div>
  );
}
