import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const SeniorLiving = () => {
  return (
    <main className='font-body text-neutral-800'>
      <Helmet>
        <title>Senior Living | Global Hospitality</title>
        <meta
          name='description'
          content='Global Hospitality specializes in senior living recruitment, placing experienced professionals in Independent and Assisted Living communities worldwide.'
        />
        <link rel='canonical' href='https://globalhospitality.com/senior-living-2/' />
      </Helmet>

      {/* Hero Section */}
      <section className='bg-brand-accent py-20 px-6 text-center'>
        <motion.h1
          className='text-4xl md:text-5xl font-heading font-bold text-brand-primary mb-4'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}>
          Senior Living
        </motion.h1>
        <p className='max-w-3xl mx-auto text-lg text-neutral-800 leading-relaxed'>
          Global Hospitality brings a professional and compassionate approach to senior living
          recruitment, placing exceptional talent in Independent and Assisted Living communities
          worldwide.
        </p>
      </section>

      {/* Content Section */}
      <section className='bg-white py-16 px-6'>
        <div className='max-w-4xl mx-auto space-y-6'>
          <p>
            Senior living residences generally provide hotel-style rooms and/or suites or apartments
            on a monthly basis for Independent Living and Assisted Living. In addition to safe,
            secure living accommodations, a full range of dining options, as well as recreational
            activities, physical fitness programs, field trips and medical care are provided for
            residents.
          </p>
          <p>
            Individuals with experience in the hospitality industry often find rewarding career
            opportunities in this field. Our recruiters are skilled at finding candidates
            well-versed in the science and art of senior markets.
          </p>
          <p>
            We place General Managers, Sales and Marketing Directors, all levels of Culinary Staff,
            Housekeeping Managers, Engineers, and other key support positions.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className='bg-brand-light py-20 px-6 text-center'>
        <h2 className='text-2xl md:text-3xl font-heading font-semibold text-brand-dark mb-4'>
          Seeking Exceptional Senior Living Professionals?
        </h2>
        <p className='max-w-xl mx-auto mb-8 text-neutral-800'>
          Connect with us to find dedicated professionals who align with your community's standards
          and expectations.
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

export default SeniorLiving;
