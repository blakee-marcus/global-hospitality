import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const HotelResorts = () => {
  return (
    <main className='font-body text-neutral-800'>
      <Helmet>
        <title>Hotels & Resorts | Global Hospitality</title>
        <meta
          name='description'
          content='We partner with hotel and resort brands worldwide to deliver exceptional executive talent that elevates guest experience and operational success.'
        />
        <link rel='canonical' href='https://globalhospitality.com/hotels-resorts/' />
      </Helmet>

      {/* Hero */}
      <section className='bg-brand-accent py-20 px-6 text-center'>
        <motion.h1
          className='text-4xl md:text-5xl font-heading font-bold text-brand-primary mb-4'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}>
          Hotels & Resorts
        </motion.h1>
        <p className='max-w-3xl mx-auto text-lg text-neutral-800 leading-relaxed'>
          Our legacy of hospitality recruiting began in hotels and resorts, and this sector
          continues to be at the core of our expertise. We work with luxury and boutique brands
          around the globe to place senior executives, departmental heads, and culinary leaders who
          drive brand excellence and guest satisfaction.
        </p>
      </section>

      {/* Content */}
      <section className='bg-white py-16 px-6'>
        <div className='max-w-4xl mx-auto space-y-6'>
          <p>
            Global Hospitality has partnered with independent and corporate hotel clients in major
            metropolitan cities, remote resort destinations, and everything in between. We
            understand the unique challenges of recruiting for properties that blend exceptional
            guest experiences with high performance operations.
          </p>
          <p>
            Our placements span General Managers, Executive Chefs, Directors of Operations, Sales &
            Marketing leaders, and Spa & Wellness Directors. We bring insight into the talent needs
            of five-star, four-diamond, and lifestyle-driven properties.
          </p>
          <p>
            Whether you are staffing a new opening, filling a key leadership vacancy, or building an
            elite team for a rebrand or repositioning, Global Hospitality is your trusted executive
            search partner.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className='bg-brand-light py-20 px-6 text-center'>
        <h2 className='text-2xl md:text-3xl font-heading font-semibold text-brand-dark mb-4'>
          Ready to Elevate Your Hotel Leadership?
        </h2>
        <p className='max-w-xl mx-auto mb-8 text-neutral-800'>
          Contact our team to learn more about our personalized approach to executive recruitment in
          the hotel and resort industry.
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

export default HotelResorts;
