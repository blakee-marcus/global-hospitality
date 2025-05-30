import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const FBProduction = () => {
  return (
    <main className='font-body text-neutral-800'>
      <Helmet>
        <title>Food & Beverage Production | Global Hospitality</title>
        <meta
          name='description'
          content='Global Hospitality specializes in recruiting top-tier talent for food and beverage production companies, connecting professionals to roles across the hospitality supply chain.'
        />
        <link
          rel='canonical'
          href='https://globalhospitality.com/food-beverage-production-recruitment/'
        />
      </Helmet>

      {/* Hero Section */}
      <section className='bg-brand-accent py-20 px-6 text-center'>
        <motion.h1
          className='text-4xl md:text-5xl font-heading font-bold text-brand-primary mb-4'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}>
          Food & Beverage Production
        </motion.h1>
        <p className='max-w-3xl mx-auto text-lg text-neutral-800 leading-relaxed'>
          Global Hospitality connects food and beverage production companies with exceptional
          talent, ensuring seamless integration within the hospitality supply chain.
        </p>
      </section>

      {/* Content Section */}
      <section className='bg-white py-16 px-6'>
        <div className='max-w-4xl mx-auto space-y-6'>
          <p>
            Food and beverage production companies that provide kitchen, bar, and retail stock for
            preparation and consumption are integral to the hospitality industry supply chain.
          </p>
          <p>
            Food and beverage production can be an attractive career move because the required
            skillsets may be transferable from other hospitality sectors or different industries
            altogether.
          </p>
          <p>
            F&B production roles we place range from C-suite and managerial to technical,
            operational, marketing, and financial.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className='bg-brand-light py-20 px-6 text-center'>
        <h2 className='text-2xl md:text-3xl font-heading font-semibold text-brand-dark mb-4'>
          Seeking Top Talent in Food & Beverage Production?
        </h2>
        <p className='max-w-xl mx-auto mb-8 text-neutral-800'>
          Partner with us to find professionals who align with your production goals and uphold the
          highest standards in the industry.
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

export default FBProduction;
