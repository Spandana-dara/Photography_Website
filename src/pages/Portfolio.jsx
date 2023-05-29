import Image1 from '../img/portfolio/10.png';
import Image2 from '../img/portfolio/7.png';
import Image3 from '../img/portfolio/8.png';
import Image4 from '../img/portfolio/9.png';

import { Link } from 'react-router-dom';


export default function Portfolio() {
  return (
    <section className='section'>
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start
        gap-x-24 text-center lg:text-left pt-44 lg:pt-0 pb-8'>
          <div className='flex flex-col lg:items-start lg:mt-[100px] lg:pl-[30px]'>
            <h1 className='h1'>Portfolio</h1>
            <p className='mb-12 max-w-sm text-[22px]'>
            Special moments turned into timeless portraits of human essence.
            </p>
            <br />
            <br />
            <div className='flex space-x-4 pb-[20px]'>
            <Link to={'/galleryA'} className='btn mb-[30px] mx-auto lg:mx-0'>Gallery A</Link>
            <Link to={'/galleryB'} className='btn mb-[30px] mx-auto lg:mx-0'>Gallery B</Link>
            </div>
          </div>
          <div className='grid grid-cols-2 lg:gap-2 lg:mt-[100px] lg:pl-[90px]'>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px]
            bg-accent overflow-hidden'>
              <img className='object-cover h-full lg:h-[220px]
              hover:scale-110 transition-all duration-500' src={Image1} alt='' />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px]
            bg-accent overflow-hidden'>
              <img className='object-cover h-full lg:h-[220px]
              hover:scale-110 transition-all duration-500' src={Image2} alt='' />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px]
            bg-accent overflow-hidden'>
              <img className='object-cover h-full lg:h-[220px]
              hover:scale-110 transition-all duration-500' src={Image3} alt='' />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px]
            bg-accent overflow-hidden'>
              <img className='object-cover h-full lg:h-[220px]
              hover:scale-110 transition-all duration-500' src={Image4} alt='' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}