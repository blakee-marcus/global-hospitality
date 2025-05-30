import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CampusDining = () => {
  return (
    <main className='font-body text-neutral-800'>
      <Helmet>
        <title>Campus Dining & Services Recruitment | Global Hospitality</title>
        <meta
          name='description'
          content='Global Hospitality connects universities and institutions with top culinary and administrative leadership for campus dining and support services.'
        />
        <meta
          name='keywords'
          content='campus dining recruitment, institutional food service, education food leadership, university dining hiring, food service director search'
        />
        <meta property='og:title' content='Campus Dining & Services Recruitment' />
        <meta
          property='og:description'
          content='Expert recruitment for campus dining and institutional food service programs, placing leaders who drive quality, safety, and student satisfaction.'
        />
        <meta
          property='og:url'
          content='https://globalhospitality.com/campus-dining-and-campus-services/'
        />
        <link
          rel='canonical'
          href='https://globalhospitality.com/campus-dining-and-campus-services/'
        />
      </Helmet>

      {/* Hero Section */}
      <section className='bg-brand-accent py-20 px-6 text-center'>
        <motion.h1
          className='text-4xl md:text-5xl font-heading font-bold text-brand-primary mb-4'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}>
          Campus Dining & Services
        </motion.h1>
        <p className='max-w-3xl mx-auto text-lg text-neutral-800 leading-relaxed'>
          We specialize in placing culinary and operational leaders within campus dining and
          institutional service environments that value consistency and community impact.
        </p>
      </section>

      {/* Content Section */}
      <section className='bg-white py-16 px-6' aria-labelledby='campus-dining-content'>
        <div className='max-w-4xl mx-auto space-y-6 text-base leading-relaxed'>
          <p>
            Global Hospitality has decades of experience recruiting for colleges, universities, and
            contract food service providers. We understand the complexities of managing
            multi-department, high-volume dining programs while delivering on student satisfaction,
            nutritional goals, and operational excellence.
          </p>
          <p>
            We’ve successfully placed professionals in roles such as Directors of Dining Services,
            Executive Chefs, Facilities Managers, and regional multi-unit operators—leaders who
            bring both vision and accountability to education-based operations.
          </p>
          <p>
            Whether your institution is independently managed or partners with a national provider,
            our recruitment team finds mission-aligned professionals who thrive in academic
            environments.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className='bg-brand-light py-20 px-6 text-center'>
        <h2 className='text-2xl md:text-3xl font-heading font-semibold text-brand-dark mb-4'>
          Build a Better Campus Experience
        </h2>
        <p className='max-w-xl mx-auto mb-8 text-neutral-800'>
          Connect with us to find experienced professionals who can elevate your dining program and
          institutional support services.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Link
            to='/proposal'
            className='bg-brand-primary text-white px-6 py-3 rounded-full hover:bg-brand-dark transition'
            aria-label='Request a Proposal'>
            Request a Proposal
          </Link>
          <Link
            to='/contact'
            className='border border-brand-primary text-brand-primary px-6 py-3 rounded-full hover:bg-brand-primary hover:text-white transition'
            aria-label='Contact Us'>
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
};

export default CampusDining;
