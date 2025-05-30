import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const industries = [
  {
    title: 'Hotels & Resorts',
    description:
      'We partner with luxury and boutique hotel brands to recruit seasoned executives and management talent worldwide.',
    path: '/hotels-resorts',
  },
  {
    title: 'Restaurants',
    description:
      'From fine dining to fast-casual concepts, we provide restaurant executive recruitment services tailored to your brand.',
    path: '/restaurants',
  },
  {
    title: 'Clubs',
    description: 'Executive search for private golf, yacht, and city clubs across North America.',
    path: '/clubs',
  },
  {
    title: 'Campus Dining & Services',
    description:
      'Recruiting experienced leaders for institutional and campus food service operations.',
    path: '/campus-dining-and-campus-services',
  },
  {
    title: 'Spas',
    description: 'Spa and wellness leadership recruitment for luxury resorts and hotels worldwide.',
    path: '/spas',
  },
  {
    title: 'Food Services',
    description:
      'Strategic hiring for stadiums, cultural centers, and contract-managed food service programs.',
    path: '/food-services',
  },
  {
    title: 'Casinos',
    description: 'Providing casino operations with top-tier hospitality and gaming executives.',
    path: '/casinos',
  },
  {
    title: 'Private Service',
    description:
      'Confidential staffing for luxury estates and private residences across the globe.',
    path: '/private-service',
  },
  {
    title: 'Senior Living',
    description:
      'Recruiting compassionate leadership for independent and assisted living communities.',
    path: '/senior-living',
  },
  {
    title: 'Food & Beverage Production',
    description:
      'Staffing food and beverage production facilities with operations and supply chain talent.',
    path: '/food-beverage-production-recruitment',
  },
];

const Home = () => {
  return (
    <main className='font-body text-neutral-800'>
      <Helmet>
        <title>Global Hospitality | Executive Search Firm for Hotels, Restaurants & More</title>
        <meta
          name='description'
          content='Global Hospitality is a worldwide executive search firm specializing in hospitality recruitment for hotels, restaurants, spas, casinos, and more.'
        />
        <meta
          name='keywords'
          content='hospitality recruitment, executive search firm, hotel recruiting, restaurant executive search, casino staffing, senior living hiring'
        />
        <meta property='og:title' content='Global Hospitality | Executive Search & Recruitment' />
        <meta
          property='og:description'
          content='Global Hospitality specializes in recruiting leaders for the hospitality industry including hotels, restaurants, casinos, and more.'
        />
        <meta property='og:url' content='https://globalhospitality.com/' />
        <link rel='canonical' href='https://globalhospitality.com/' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Global Hospitality',
              url: 'https://globalhospitality.com',
              logo: 'https://globalhospitality.com/logo.png',
              description:
                'Global Hospitality is an international executive search firm specializing in recruitment for hotels, restaurants, clubs, and luxury hospitality operations worldwide.',
              sameAs: ['https://www.linkedin.com/company/globalhospitality'],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Los Angeles',
                addressRegion: 'CA',
                addressCountry: 'US',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-310-123-4567',
                contactType: 'customer service',
                areaServed: 'Worldwide',
              },
            }),
          }}
        />
      </Helmet>

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
          A premier international executive search firm with deep expertise in placing leaders
          across hospitality sectors—hotels, restaurants, senior living, and more.
        </p>
        <div className='flex justify-center gap-4 mt-10'>
          <Link
            to='/proposal'
            className='bg-brand-primary text-white px-6 py-3 rounded-full hover:bg-brand/80 transition'>
            Request a Proposal
          </Link>
          <Link
            to='/contact'
            className='border border-brand text-brand px-6 py-3 rounded-full hover:bg-brand hover:text-white transition'>
            Contact Us
          </Link>
        </div>
      </section>

      {/* Industries Section */}
      <section className='bg-gray-50 py-20 px-6'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-3xl font-serif font-semibold text-center mb-12 text-brand'>
            Industries We Serve
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {industries.map(({ title, description, path }) => (
              <motion.article
                key={title}
                className='bg-white p-6 rounded-2xl shadow-sm border hover:shadow-md transition'
                whileHover={{ scale: 1.01 }}>
                <h3 className='text-lg font-bold mb-2'>{title}</h3>
                <p className='text-sm text-gray-600 mb-4 leading-relaxed'>{description}</p>
                <Link
                  to={path}
                  className='text-brand font-medium hover:underline'
                  aria-label={`Learn more about our work in ${title}`}>
                  Learn More »
                </Link>
              </motion.article>
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
    </main>
  );
};

export default Home;
