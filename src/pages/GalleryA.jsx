import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image1 from '../img/portfolio/galleryA1.png';
import Image2 from '../img/portfolio/galleryA2.png';
import Image3 from '../img/portfolio/galleryA3.png';
import Image4 from '../img/portfolio/galleryA4.png';

import Image5 from '../img/portfolio/grid1.png';
import Image6 from '../img/portfolio/grid2.png';
import Image7 from '../img/portfolio/grid3.png';
import Image8 from '../img/portfolio/grid4.png';
import Image9 from '../img/portfolio/grid5.png';
import Image10 from '../img/portfolio/grid6.png';




export default function GalleryA() {
    return (
        <section className='section bg-white'>
            <div className='mx-auto h-full relative'>
                <div className='flex flex-col justify-center'>
                    <div className='flex justify-end max-h-96 lg:max-h-max justify-end'>
                        <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none lg:mt-[-20px] overflow-auto'>
                            <Carousel
                                showThumbs={false}
                                showStatus={false}
                                infiniteLoop
                                autoPlay
                                interval={3000}
                                className="custom-slider"
                            >
                                <div>
                                    <img src={Image1} alt="Image 1" className="carousel-image" />
                                </div>
                                <div>
                                    <img src={Image2} alt="Image 2" className="carousel-image" />
                                </div>
                                <div>
                                    <img src={Image3} alt="Image 3" className="carousel-image" />
                                </div>
                                <div>
                                    <img src={Image4} alt="Image 4" className="carousel-image" />
                                </div>
                            </Carousel>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='mt-20'>
                        <h1 className='text-[22px] text-center'>Let’s turn your stories and life into soulful portraits</h1>
                        </div>
                    </div>
                    {/* Add the grid */}
                    <div className="flex justify-center mt-20 ml-5 mr-5">
                        <div className="grid grid-cols-3 gap-4 gap-y-10">
                            <img src={Image5} alt="Image 5" className="grid-img" />
                            <img src={Image6} alt="Image 6" className="grid-img" />
                            <img src={Image7} alt="Image 7" className="grid-img" />
                            <img src={Image8} alt="Image 8" className="grid-img" />
                            <img src={Image9} alt="Image 9" className="grid-img" />
                            <img src={Image10} alt="Image 10" className="grid-img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
