import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const toggleDropdown = (menu) => setOpenDropdown(openDropdown === menu ? null : menu);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className='sticky top-0 z-50 bg-[#809a4b] shadow'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16 items-center'>
          <Link to='/' className='text-2xl font-bold text-white'>
            Global Hospitality
          </Link>

          <nav className='hidden md:flex space-x-4 items-center text-white' ref={dropdownRef}>
            <div className='relative'>
              <button
                onClick={() => toggleDropdown('about')}
                className='hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                About
              </button>
              {openDropdown === 'about' && (
                <div className='absolute mt-2 w-48 bg-[#809a4b] shadow-lg rounded-md py-1 text-white'>
                  <Link to='/about-us' className='block px-4 py-2 text-sm hover:bg-[#6e843d]'>
                    Why Global Hospitality?
                  </Link>
                  <Link to='/code-of-ethics' className='block px-4 py-2 text-sm hover:bg-[#6e843d]'>
                    Code of Ethics
                  </Link>
                  <Link
                    to='/consultant-profiles'
                    className='block px-4 py-2 text-sm hover:bg-[#6e843d]'>
                    Our Consultants
                  </Link>
                  <Link to='/gh-blog' className='block px-4 py-2 text-sm hover:bg-[#6e843d]'>
                    Blog
                  </Link>
                  <Link
                    to='/gh-testimonials'
                    className='block px-4 py-2 text-sm hover:bg-[#6e843d]'>
                    Testimonials
                  </Link>
                </div>
              )}
            </div>

            <div className='relative'>
              <button
                onClick={() => toggleDropdown('whatwedo')}
                className='hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                What We Do
              </button>
              {openDropdown === 'whatwedo' && (
                <div className='absolute mt-2 w-56 bg-[#809a4b] shadow-lg rounded-md py-1 text-white'>
                  <Link to='/how-we-work' className='block px-4 py-2 text-sm hover:bg-[#6e843d]'>
                    Search Process
                  </Link>
                  <Link
                    to='/category/area-of-expertise'
                    className='block px-4 py-2 text-sm hover:bg-[#6e843d]'>
                    Areas of Expertise
                  </Link>
                  <Link to='/guarantee' className='block px-4 py-2 text-sm hover:bg-[#6e843d]'>
                    Global Guarantee
                  </Link>
                  <Link
                    to='/positions-we-recruit'
                    className='block px-4 py-2 text-sm hover:bg-[#6e843d]'>
                    Positions We Recruit
                  </Link>
                </div>
              )}
            </div>

            <Link
              to='/client-list'
              className='hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
              Client List
            </Link>
            <Link
              to='/proposal'
              className='hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
              Proposal
            </Link>
            <Link
              to='/contact'
              className='hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
              Contact
            </Link>
          </nav>

          <div className='flex items-center md:hidden'>
            <button onClick={toggleMobileMenu} className='text-white focus:outline-none'>
              <svg className='h-6 w-6' stroke='currentColor' fill='none' viewBox='0 0 24 24'>
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className='md:hidden bg-white text-gray-800'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            <Link
              to='/about-us'
              className='block px-3 py-2 text-base font-medium hover:text-[#809a4b] hover:bg-gray-100'>
              About Us
            </Link>
            <Link
              to='/category/area-of-expertise'
              className='block px-3 py-2 text-base font-medium hover:text-[#809a4b] hover:bg-gray-100'>
              Areas of Expertise
            </Link>
            <Link
              to='/client-list'
              className='block px-3 py-2 text-base font-medium hover:text-[#809a4b] hover:bg-gray-100'>
              Client List
            </Link>
            <Link
              to='/proposal'
              className='block px-3 py-2 text-base font-medium hover:text-[#809a4b] hover:bg-gray-100'>
              Proposal
            </Link>
            <Link
              to='/contact'
              className='block px-3 py-2 text-base font-medium hover:text-[#809a4b] hover:bg-gray-100'>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
