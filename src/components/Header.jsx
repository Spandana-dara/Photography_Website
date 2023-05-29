import React, { useContext } from 'react';

import Socials from './Socials';
import MobileNav from './MobileNav';

import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='fixed w-full px-[30px] lg:px-[100px] z-30 h-[80px] lg:h-[80px] flex items-center bg-black'>
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        <Link to={'/'} className='max-w-[200px]'>
          <div className="text-[#ffff] lg:ml-[-50px] ml-[-27px]">
            <h1 className="text-2xl">
              E U P H O R I A
            </h1>
            <h1 className="text-2xl mt-[-10px]">
              W E D D I N G S
            </h1>
          </div>
        </Link>
        <nav className='hidden xl:flex font-serif gap-x-12 font-semibold text-[20px]'>
          <Link to="/" className='text-[#ffff]'>Home</Link>
          <Link to="/about" className='text-[#ffff]'>About</Link>
          <Link to="/portfolio" className='text-[#ffff]'>Portfolio</Link>
          <Link to="/contact" className='text-[#ffff]'>Contact</Link>
        </nav>
      </div>
      <Socials />
      <MobileNav />

    </header>
  )
}