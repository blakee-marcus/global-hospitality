import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const Spa = () => {
  return (
    <main className='font-body text-neutral-800'>
      <Helmet>
        <title>Spas | Global Hospitality</title>
        <meta
          name='description'
          content='Global Hospitality specializes in spa industry recruitment, providing luxury resorts and hospitality groups with experienced wellness professionals and spa directors.'
        />
        <link rel='canonical' href='https://globalhospitality.com/spas/' />
      </Helmet>

      {/* Hero Section */}
      <section className='bg-brand-accent py-20 px-6 text-center'>
        <motion.h1
          className='text-4xl md:text-5xl font-heading font-bold text-brand-primary mb-4'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}>
          Spas
        </motion.h1>
        <p className='max-w-3xl mx-auto text-lg text-neutral-800 leading-relaxed'>
          Global Hospitality brings deep expertise in recruiting spa and wellness leaders who
          elevate guest experiences at luxury resorts, hotels, and wellness destinations.
        </p>
      </section>

      {/* Content Section */}
      <section className='bg-white py-16 px-6'>
        <div className='max-w-4xl mx-auto space-y-6'>
          <p>
            As the wellness industry grows and evolves, spa environments demand leaders who can
            innovate, inspire, and deliver exceptional service. Our recruitment process prioritizes
            candidates with a balance of operational strength and a passion for holistic well-being.
          </p>
          <p>
            We’ve placed Spa Directors, Lead Therapists, Spa Managers, and Wellness Executives
            across five-star resorts, hotel spas, private clubs, and cruise lines. These
            professionals bring not only technical expertise but also leadership skills that drive
            staff engagement and guest satisfaction.
          </p>
          <p>
            Our industry knowledge ensures that we understand the nuances of spa staffing, including
            licensing, brand standards, and wellness trends that shape modern experiences.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className='bg-brand-light py-20 px-6 text-center'>
        <h2 className='text-2xl md:text-3xl font-heading font-semibold text-brand-dark mb-4'>
          Ready to Hire Spa and Wellness Leaders?
        </h2>
        <p className='max-w-xl mx-auto mb-8 text-neutral-800'>
          Reach out today to find dedicated professionals who align with your brand’s wellness
          philosophy and operational goals.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <a
            href='/proposal'
            className='bg-brand-primary text-white px-6 py-3 rounded-full hover:bg-brand-dark transition'>
            Request a Proposal
          </a>
          <a
            href='/contact'
            className='border border-brand-primary text-brand-primary px-6 py-3 rounded-full hover:bg-brand-primary hover:text-white transition'>
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
};

export default Spa;
