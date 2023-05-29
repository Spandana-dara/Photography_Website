import WomanImg from '../img/home/woman.png';
import { Link } from 'react-router-dom';


import React from 'react';

export default function Home() {
  // const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <section className='section'>
      <div className='container mx-auto relative'>
        <div className='flex flex-col justify-center pt-[110px] lg:pt-[50px]'>
          <div
            className='w-full pt-46 pb-14 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col
          justify-center items-center lg:items-start'>
            <h1 className='h1'>Wedding Photographer</h1>
            <p className='text-[26px] lg:text-[29px] font-primary mb-4 lg:mb-5 lg:mt-100 ml-[9px]'>Charlotte, USA</p>
            <Link to={'/portfolio'} className='btn mb-[30px] ml-[9px]'>
              View my work
            </Link>
          </div>
          <div className='flex lg:justify-end overflow-hidden lg:pt-[90px] justify-center  '>
            <div className='relative lg:-right-[100] overflow-hidden '>
              <img
                src={WomanImg} alt='' />
            </div>
          </div>
        </div>
      </div>
    </section>
    

  )
}