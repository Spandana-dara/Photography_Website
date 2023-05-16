import WomanImg from '../img/home/woman.png';
import { Link } from 'react-router-dom';


import React from 'react';

export default function Home() {
  // const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <section className='section'>
      <div className='fixed container mx-auto h-full relative'>
        <div className='flex flex-col justify-center'>
          <div
            className='w-full pt-36 pb-14 lg:mt-[-300px] lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col
          justify-center items-center lg:items-start'>
            <h1 className='h1'>Wedding Photographer</h1>
            <p className='text-[26px] lg:text-[29px] font-primary mb-4 lg:mb-5 lg:mt-[-15px] ml-[9px]'>Charlotte, USA</p>
            <Link to={'/contact'} className='btn mb-[30px] ml-[9px]'>
              Hire me
            </Link>
          </div>
          <div className='flex justify-end max-h-96 lg:max-h-max justify-end '>
            <div className='relative lg:-right-[-9] lg:-top-5 overflow-hidden'>
              <img
                src={WomanImg} alt='' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}