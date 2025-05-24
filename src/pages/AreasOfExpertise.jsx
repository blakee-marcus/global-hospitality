import React from 'react';
import { Link } from 'react-router-dom';

const areas = [
  {
    title: 'Hotels & Resorts',
    description:
      'A hallmark of Global’s strength is the network of relationships built with hotel operators worldwide. Our recruiters, many with experience in luxury properties and hotel management, place leaders in roles like General Manager, Director of Sales, and Financial Controller.',
  },
  {
    title: 'Restaurants',
    description:
      'Global Hospitality works with leading restaurant groups to place front and back-of-house talent. From Executive Chefs to VPs of Operations, our network covers fine dining, chains, and independent concepts.',
  },
  {
    title: 'Clubs',
    description:
      'We’ve conducted executive searches for top-tier private clubs—country, city, and golf—focusing on governance, operations, and member experience. Positions include General Manager, Executive Chef, Membership Director, and more.',
  },
  {
    title: 'Campus Dining and Campus Services',
    description:
      'We support educational institutions with comprehensive recruitment for dining and campus service leadership roles including Auxiliary Services, Dining Directors, Catering, and Facilities Management.',
  },
  {
    title: 'Spas',
    description:
      'From luxury resort spas to wellness retreats, we recruit Spa Directors and professionals who drive guest satisfaction, retail success, and health-forward innovation in spa experiences.',
  },
  {
    title: 'Food Services',
    description:
      'Serving high-volume and contract operations—arenas, convention centers, institutions—we place executive talent with deep experience in catering, logistics, and operational efficiency.',
  },
  {
    title: 'Casinos',
    description:
      'Our casino searches include tribal, riverboat, and resort properties. We understand the unique culture, entertainment focus, and leadership styles needed in this vibrant sector.',
  },
  {
    title: 'Private Service',
    description:
      'From personal chefs to estate managers, we match discerning households with discreet, qualified professionals. Our approach is confidential, customized, and always client-focused.',
  },
  {
    title: 'Senior Living',
    description:
      'We help build compassionate and capable senior living teams—from General Managers to Culinary and Wellness Directors—bringing hospitality expertise to this growing care sector.',
  },
  {
    title: 'Food & Beverage Production',
    description:
      'We support supply chain operations with placement of executives in food & beverage manufacturing, logistics, and technical innovation roles.',
  },
];

function AreaOfExpertise() {
  return (
    <section className='bg-white text-gray-800 px-6 py-20 max-w-6xl mx-auto'>
      <h1 className='text-4xl font-serif font-bold text-brand mb-12 text-center'>
        Areas of Expertise
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {areas.map((area, index) => (
          <div
            key={index}
            className='bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition'>
            <h2 className='text-xl font-semibold mb-2'>{area.title}</h2>
            <p className='text-gray-700 text-sm leading-relaxed'>{area.description}</p>
          </div>
        ))}
      </div>

      <div className='mt-16 border-t pt-10'>
        <blockquote className='italic text-gray-600 text-center max-w-3xl mx-auto'>
          “I LOVE Aimee! She and I think so much alike that I think we must be related. I dread it
          when I will probably get that envelope telling me what a great time she has had working
          for me BUT … time to move on. My first call will be to you for sure!”
        </blockquote>
        <p className='text-center mt-4 font-medium'>– Shirlee G.</p>
      </div>
    </section>
  );
}

export default AreaOfExpertise;
