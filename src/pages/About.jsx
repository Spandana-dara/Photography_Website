import WomanImg from '../img/about/woman.png';

import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section className='section'>
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
          <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none
            '>
            <img src={WomanImg} alt=''></img>
          </div>
          <div className='flex-1 pt-36 pb-14 lg:pt-20 lg:w-auto
          z-10 flex flex-col justify-center items-center lg:items-start'>
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