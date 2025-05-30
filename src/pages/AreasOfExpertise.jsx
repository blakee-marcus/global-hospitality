import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const areas = [
  {
    title: 'Hotels & Resorts',
    path: '/hotels-resorts',
    description:
      'A hallmark of Global Hospitality’s strength is the network of relationships built with hotel operators worldwide. Our recruiters, many with experience in luxury hotel management, place leaders in roles like General Manager, Director of Sales, and Financial Controller.',
  },
  {
    title: 'Restaurants',
    path: '/restaurants',
    description:
      'We work with top restaurant groups to place back-of-house and front-of-house executives. From Executive Chefs to VPs of Operations, we support fine dining, casual chains, and independent concepts.',
  },
  {
    title: 'Clubs',
    path: '/clubs',
    description:
      'From private golf and country clubs to yacht and city clubs, we recruit General Managers, Executive Chefs, Membership Directors, and operations leaders who understand member-first service.',
  },
  {
    title: 'Campus Dining and Campus Services',
    path: '/campus-dining-and-campus-services',
    description:
      'We support educational institutions with recruitment for Auxiliary Services, Dining Directors, Catering leadership, and Facilities Management, ensuring smooth and student-focused operations.',
  },
  {
    title: 'Spas',
    path: '/spas',
    description:
      'Our spa and wellness search practice places Spa Directors, Retail Managers, and treatment experts in five-star resorts, urban retreats, and destination spas around the world.',
  },
  {
    title: 'Food Services',
    path: '/food-services',
    description:
      'For high-volume catering operations and service contractors in stadiums, convention centers, and institutions, we deliver operational leaders with deep logistics and production expertise.',
  },
  {
    title: 'Casinos',
    path: '/casinos',
    description:
      'Global Hospitality places executives in tribal, riverboat, and resort casinos, where hospitality, gaming, entertainment, and compliance intersect.',
  },
  {
    title: 'Private Service',
    path: '/private-service',
    description:
      'We match high-net-worth households with Estate Managers, Personal Chefs, Butlers, and Housekeepers through a confidential, relationship-driven process.',
  },
  {
    title: 'Senior Living',
    path: '/senior-living',
    description:
      'We help senior living providers recruit General Managers, Culinary Directors, and Wellness leaders who bring compassion and hospitality excellence to residential care.',
  },
  {
    title: 'Food & Beverage Production',
    path: '/food-beverage-production-recruitment',
    description:
      'We recruit executives in food manufacturing, logistics, operations, and innovation, supporting supply chain success from production to distribution.',
  },
];

function AreaOfExpertise() {
  return (
    <main className='bg-white text-gray-800 px-6 py-20 max-w-6xl mx-auto font-body'>
      <Helmet>
        <title>Hospitality Executive Search by Sector | Global Hospitality</title>
        <meta
          name='description'
          content='Explore the hospitality sectors we serve including hotels, restaurants, senior living, spas, casinos, and more. Global Hospitality recruits experienced executives for leadership roles across hospitality.'
        />
        <meta
          name='keywords'
          content='hospitality executive search, hotel recruitment, restaurant executive hiring, spa recruitment agency, casino staffing, campus dining recruiting, private service staffing'
        />
        <meta property='og:title' content='Hospitality Executive Search by Sector' />
        <meta
          property='og:description'
          content='Learn about the industries served by Global Hospitality including hotels, restaurants, senior living, spas, and private clubs.'
        />
        <meta
          property='og:url'
          content='https://globalhospitality.com/category/area-of-expertise'
        />
        <link rel='canonical' href='https://globalhospitality.com/category/area-of-expertise' />
      </Helmet>

      <h1 className='text-4xl font-serif font-bold text-brand-primary mb-12 text-center'>
        Areas of Expertise in Hospitality Recruitment
      </h1>

      <section className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {areas.map(({ title, description, path }, index) => (
          <article
            key={index}
            className='bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition'>
            <h2 className='text-xl font-semibold mb-2'>{title}</h2>
            <p className='text-gray-700 text-sm leading-relaxed mb-3'>{description}</p>
            <Link
              to={path}
              className='text-brand-primary font-medium text-sm hover:underline'
              aria-label={`Learn more about executive recruitment for ${title}`}>
              Learn more »
            </Link>
          </article>
        ))}
      </section>

      <section className='mt-16 border-t pt-10 text-center'>
        <blockquote className='italic text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed'>
          “I LOVE Aimee! She and I think so much alike that I think we must be related. I dread it
          when I will probably get that envelope telling me what a great time she has had working
          for me BUT … time to move on. My first call will be to you for sure!”
        </blockquote>
        <p className='mt-4 font-medium'>– Shirlee G.</p>
      </section>
    </main>
  );
}

export default AreaOfExpertise;
