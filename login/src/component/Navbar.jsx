/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className='fixedfixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4'></nav>
      <div className='glass-card flex w-full max-w-7xl items-center justify-between px-6 py-3 !rounded-2xl'></div>
      <div className='hidden md:flex items-center gap-8'>
        <Link
          to='/dashboard'
          className='text-sm font-medium text-gray-300 transition-colors hover:text-white'>
          Dashboard
        </Link>
        <Link
          to='/projects'
          className='text-sm font-medium text-gray-300 transition-colors hover:text-white'>
          Projects
        </Link>
        <Link
          to='/team'
          className='text-sm font-medium text-gray-300 transition-colors hover:text-white'>
          Team
        </Link>
      </div>
    </>
  );
};

export default Navbar;
