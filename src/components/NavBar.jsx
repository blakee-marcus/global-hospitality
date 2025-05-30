import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  const closeDropdowns = () => setOpenDropdown(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        closeDropdowns();
      }
    };

    const handleEscape = (e) => {
      if (e.key === 'Escape') closeDropdowns();
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <header className='sticky top-0 z-50 bg-brand-primary shadow'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <Link to='/' className='text-2xl font-bold text-white'>
            Global Hospitality
          </Link>

          {/* Desktop Navigation */}
          <nav
            className='hidden md:flex items-center space-x-6 text-white text-sm font-medium'
            ref={dropdownRef}>
            <Dropdown
              label='About'
              isOpen={openDropdown === 'about'}
              onToggle={() => toggleDropdown('about')}
              links={[
                { to: '/about-us', text: 'Why Global Hospitality?' },
                { to: '/code-of-ethics', text: 'Code of Ethics' },
                { to: '/consultant-profiles', text: 'Our Consultants' },
                { to: '/gh-testimonials', text: 'Testimonials' },
                { to: '/gh-blog', text: 'Blog' },
              ]}
            />
            <Dropdown
              label='What We Do'
              isOpen={openDropdown === 'services'}
              onToggle={() => toggleDropdown('services')}
              links={[
                { to: '/how-we-work', text: 'Search Process' },
                { to: '/category/area-of-expertise', text: 'Areas of Expertise' },
                { to: '/guarantee', text: 'Global Guarantee' },
                { to: '/positions-we-recruit', text: 'Positions We Recruit' },
              ]}
            />
            <Link to='/client-list' className='hover:text-white'>
              Client List
            </Link>
            <Link to='/proposal' className='hover:text-white'>
              Request a Proposal
            </Link>
            <Link to='/contact' className='hover:text-white'>
              Contact
            </Link>
          </nav>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className='md:hidden text-white focus:outline-none'
            aria-label='Toggle mobile menu'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
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

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className='md:hidden bg-white text-brand-primary border-t shadow-lg transition-all duration-300'>
          <div className='px-4 py-4 space-y-4'>
            <MobileSection
              title='About'
              links={[
                { to: '/about-us', text: 'Why Global Hospitality?' },
                { to: '/code-of-ethics', text: 'Code of Ethics' },
                { to: '/consultant-profiles', text: 'Our Consultants' },
                { to: '/gh-testimonials', text: 'Testimonials' },
                { to: '/gh-blog', text: 'Blog' },
              ]}
            />
            <MobileSection
              title='What We Do'
              links={[
                { to: '/how-we-work', text: 'Search Process' },
                { to: '/category/area-of-expertise', text: 'Areas of Expertise' },
                { to: '/guarantee', text: 'Global Guarantee' },
                { to: '/positions-we-recruit', text: 'Positions We Recruit' },
              ]}
            />
            <div className='space-y-2'>
              <Link className='block font-medium' to='/client-list'>
                Client List
              </Link>
              <Link className='block font-medium' to='/proposal'>
                Request a Proposal
              </Link>
              <Link className='block font-medium' to='/contact'>
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

// Reusable Dropdown component
const Dropdown = ({ label, links, isOpen, onToggle }) => (
  <div className='relative'>
    <button
      onClick={onToggle}
      className='hover:text-white focus:outline-none'
      aria-haspopup='true'
      aria-expanded={isOpen}>
      {label}
    </button>
    {isOpen && (
      <div className='absolute left-0 mt-2 w-56 bg-brand-primary shadow-lg rounded-md py-2 z-50'>
        {links.map((link, i) => (
          <Link key={i} to={link.to} className='block px-4 py-2 text-white hover:bg-brand-dark'>
            {link.text}
          </Link>
        ))}
      </div>
    )}
  </div>
);

// Mobile accordion section
const MobileSection = ({ title, links }) => (
  <details className='group'>
    <summary className='cursor-pointer text-sm font-semibold text-gray-700'>{title}</summary>
    <div className='pl-4 pt-2 space-y-1'>
      {links.map((link, i) => (
        <Link key={i} to={link.to} className='block py-1 text-sm text-brand-primary'>
          {link.text}
        </Link>
      ))}
    </div>
  </details>
);

export default NavBar;
