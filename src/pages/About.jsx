import WomanImg from '../img/about/woman.png';

import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section className='section'>
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col lg:flex-row items-center justify-center gap-x-24 text-center lg:text-left items-center'>
          <div className='flex-1 lg:order-none lg:mt-[100px] mt-[130px] mb-[70px] lg:pl-[20px] overflow-hidden justify-center '>
            <img src={WomanImg} className='h-85' alt=''></img>
          </div>
          <div className='flex-1 pt-100 pb-14 lg:pt-[150px] lg:pl-[70px] lg:w-auto
          z-10 flex flex-col lg:items-start items-center'>
            <h1 className='h1'> About me</h1>
            <p className='mb-8 max-w-sm text-[18px]'>
              Hi there! I'm Chinmay, a passionate wedding photographer capturing timeless moments of love and joy.
              <br />
              <br />
              My work is a reflection of what I appreciate in life - the magic 
              of minor life moments. I take these 
              instances and freeze them in time through photography.
              <br />
              <br />
              <b className='text-[22px]'> Let's create beautiful memories together!"</b>
            </p>
            <Link to={'/portfolio'} className='btn'>View my work</Link>
          </div>
          

        </div>

      </div>
    </section>
  )
}