import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const Restaurants = () => {
  return (
    <main className='font-body text-neutral-800'>
      <Helmet>
        <title>Restaurants | Global Hospitality</title>
        <meta
          name='description'
          content='From Michelin-starred restaurants to emerging dining concepts, Global Hospitality connects culinary and operational leadership with top restaurant brands.'
        />
        <link rel='canonical' href='https://globalhospitality.com/restaurants/' />
      </Helmet>

      {/* Hero Section */}
      <section className='bg-brand-accent py-20 px-6 text-center'>
        <motion.h1
          className='text-4xl md:text-5xl font-heading font-bold text-brand-primary mb-4'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}>
          Restaurants
        </motion.h1>
        <p className='max-w-3xl mx-auto text-lg text-neutral-800 leading-relaxed'>
          Global Hospitality places high-impact leaders across the full spectrum of restaurant
          concepts, from Michelin-starred fine dining establishments to fast-growing casual dining
          and fast-casual groups.
        </p>
      </section>

      {/* Content Section */}
      <section className='bg-white py-16 px-6'>
        <div className='max-w-4xl mx-auto space-y-6'>
          <p>
            We understand that success in the restaurant industry depends on creative vision,
            consistent execution, and efficient management. That’s why we focus on recruiting
            forward-thinking executives and culinary professionals who can lead with innovation and
            excellence.
          </p>
          <p>
            Our experience includes placing key talent in roles such as Executive Chef, Director of
            Operations, General Manager, Culinary Director, and Chief Marketing Officer. We support
            both independent operators and multi-unit restaurant groups in building strong,
            sustainable leadership teams.
          </p>
          <p>
            With a pulse on food and beverage trends and a deep network in hospitality, Global
            Hospitality helps restaurant brands stay ahead in a competitive and ever-evolving
            landscape.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className='bg-brand-light py-20 px-6 text-center'>
        <h2 className='text-2xl md:text-3xl font-heading font-semibold text-brand-dark mb-4'>
          Looking for Leadership in the Kitchen or the Boardroom?
        </h2>
        <p className='max-w-xl mx-auto mb-8 text-neutral-800'>
          Let us help you find dynamic culinary and operational leaders to take your restaurant
          concept to the next level.
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

export default Restaurants;
