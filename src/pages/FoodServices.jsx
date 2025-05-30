import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const FoodServices = () => {
  return (
    <main className='font-body text-neutral-800'>
      <Helmet>
        <title>Food Services | Global Hospitality</title>
        <meta
          name='description'
          content='Global Hospitality provides strategic recruitment solutions for food service operations in cultural centers, sports venues, and institutions seeking operational excellence.'
        />
        <link rel='canonical' href='https://globalhospitality.com/food-services/' />
      </Helmet>

      {/* Hero Section */}
      <section className='bg-brand-accent py-20 px-6 text-center'>
        <motion.h1
          className='text-4xl md:text-5xl font-heading font-bold text-brand-primary mb-4'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}>
          Food Services
        </motion.h1>
        <p className='max-w-3xl mx-auto text-lg text-neutral-800 leading-relaxed'>
          From cultural institutions to sports and entertainment venues, Global Hospitality helps
          food service organizations source the talent they need to meet high-volume demands with
          quality and consistency.
        </p>
      </section>

      {/* Content Section */}
      <section className='bg-white py-16 px-6'>
        <div className='max-w-4xl mx-auto space-y-6'>
          <p>
            We partner with organizations that operate in high-traffic, guest-facing environments to
            identify leaders who can execute on both strategy and service. These include museums,
            stadiums, arenas, corporate campuses, and more.
          </p>
          <p>
            Our successful placements include Food & Beverage Directors, Concessions Managers,
            Culinary Directors, and Executive Chefs who understand how to deliver exceptional
            experiences under pressure.
          </p>
          <p>
            With deep insight into the operational demands of food service environments, Global
            Hospitality brings a personalized, responsive approach to executive recruitment across
            institutional and contract-managed settings.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className='bg-brand-light py-20 px-6 text-center'>
        <h2 className='text-2xl md:text-3xl font-heading font-semibold text-brand-dark mb-4'>
          Let’s Build a Stronger Food Service Team
        </h2>
        <p className='max-w-xl mx-auto mb-8 text-neutral-800'>
          Connect with our search specialists to find proven leaders for your food service
          operations.
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

export default FoodServices;
