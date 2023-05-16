import React, { useContext } from 'react';

import Socials from './Socials';
import MobileNav from './MobileNav';

import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        <Link to={'/'} className='max-w-[200px]'>
          <div className="text-[#696c6d] lg:ml-[-35px] ml-[-27px]">
            <h1 className="text-2xl">
              E U P H O R I A
            </h1>
            <h1 className="text-2xl mt-[-10px]">
              W E D D I N G S
            </h1>
          </div>
        </Link>
        <nav className='hidden xl:flex font-serif gap-x-12 font-semibold text-[20px]'>
          <Link to="/" className='text-[#696c6d] hover:text-primary transition'>Home</Link>
          <Link to="/about" className='text-[#696c6d] hover:text-primary transition'>About</Link>
          <Link to="/portfolio" className='text-[#696c6d] hover:text-primary transition'>Portfolio</Link>
          <Link to="/contact" className='text-[#696c6d] hover:text-primary transition'>Contact</Link>
        </nav>
      </div>
      <Socials />
      <MobileNav />

    </header>
  )
}