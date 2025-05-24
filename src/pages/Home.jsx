import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const industries = [
  {
    title: 'Hotels & Resorts',
    description:
      'We partner with luxury and boutique hotel brands to recruit seasoned executives and management talent worldwide.',
    path: '/category/hotels-resorts',
  },
  {
    title: 'Restaurants',
    description:
      'From fine dining to emerging concepts, we provide strategic hiring solutions for restaurants seeking top-tier leadership.',
    path: '/category/restaurants',
  },
  {
    title: 'Clubs',
    description:
      'Trusted by North America’s most exclusive clubs for executive and departmental hiring.',
    path: '/category/clubs',
  },
  {
    title: 'Campus Dining & Services',
    description:
      'We bring decades of expertise in staffing for campus and institutional food services.',
    path: '/category/campus',
  },
  {
    title: 'Spas',
    description:
      'Providing luxury spa talent to five-star resorts and hospitality groups across the globe.',
    path: '/category/spas',
  },
  {
    title: 'Food Services',
    description:
      'Our clients include cultural centers, stadiums, and service providers seeking operational excellence.',
    path: '/category/food-services',
  },
  {
    title: 'Casinos',
    description: 'Serving executive recruitment needs in high-profile and regional casinos.',
    path: '/category/casinos',
  },
  {
    title: 'Private Service',
    description: 'Discreet and professional staffing for elite residences and private estates.',
    path: '/category/private-service',
  },
  {
    title: 'Senior Living',
    description:
      'Supporting senior living communities with compassionate and qualified leadership talent.',
    path: '/category/senior-living',
  },
  {
    title: 'Food & Beverage Production',
    description:
      'Strategic hires for production facilities supporting food and beverage supply chains.',
    path: '/category/food-beverage',
  },
];

const Home = () => {
  return (
    <div className='text-gray-800'>
      {/* Hero Section */}
      <section className='bg-white text-center py-24 px-6'>
        <motion.h2
          className='uppercase tracking-widest text-sm text-gray-500 mb-2'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}>
          Executive Search & Recruitment
        </motion.h2>
        <motion.h1
          className='text-5xl font-serif font-bold mb-6 text-brand'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}>
          Global Hospitality
        </motion.h1>
        <p className='max-w-2xl mx-auto text-lg leading-relaxed'>
          A premier executive search firm with a global reach, specializing in hospitality
          leadership placements that drive excellence.
        </p>
        <div className='flex justify-center gap-4 mt-10'>
          <Link
            to='/proposal'
            className='bg-brand text-white px-6 py-3 rounded-full hover:bg-brand/80 transition'>
            Request a Proposal
          </Link>
          <Link
            to='/contact'
            className='border border-brand text-brand px-6 py-3 rounded-full hover:bg-brand hover:text-white transition'>
            Contact Us
          </Link>
        </div>
      </section>

      {/* Industries Grid */}
      <section className='bg-gray-50 py-20 px-6'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-3xl font-serif font-semibold text-center mb-12 text-brand'>
            Industries We Serve
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {industries.map(({ title, description, path }) => (
              <motion.div
                key={title}
                className='bg-white p-6 rounded-2xl shadow-sm border hover:shadow-md transition'
                whileHover={{ scale: 1.01 }}>
                <h3 className='text-lg font-bold mb-2'>{title}</h3>
                <p className='text-sm text-gray-600 mb-4 leading-relaxed'>{description}</p>
                <Link to={path} className='text-brand font-medium hover:underline'>
                  Learn More »
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className='bg-white py-20 px-6 text-center'>
        <div className='max-w-3xl mx-auto'>
          <blockquote className='italic text-lg leading-relaxed'>
            “Global Hospitality deals with integrity and honesty and works diligently on behalf of
            their clients to ensure that they secure the best candidates. I certainly would not
            hesitate in recommending Global Hospitality to any employer who was seeking an Executive
            Search Company who puts the needs of the client first.”
          </blockquote>
          <p className='mt-6 font-semibold text-gray-700'>– Harry O.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
