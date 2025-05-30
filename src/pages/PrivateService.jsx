import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const PrivateService = () => {
  return (
    <main className='font-body text-neutral-800'>
      <Helmet>
        <title>Private Service | Global Hospitality</title>
        <meta
          name='description'
          content='Global Hospitality specializes in private service recruitment, delivering top-tier professionals for estates and residences with utmost discretion and professionalism.'
        />
        <link rel='canonical' href='https://globalhospitality.com/private-service-recruitment/' />
      </Helmet>

      {/* Hero Section */}
      <section className='bg-brand-accent py-20 px-6 text-center'>
        <motion.h1
          className='text-4xl md:text-5xl font-heading font-bold text-brand-primary mb-4'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}>
          Private Service
        </motion.h1>
        <p className='max-w-3xl mx-auto text-lg text-neutral-800 leading-relaxed'>
          Global Hospitality brings a discreet and professional approach to private service
          recruitment, placing exceptional talent in estates and residences worldwide.
        </p>
      </section>

      {/* Content Section */}
      <section className='bg-white py-16 px-6'>
        <div className='max-w-4xl mx-auto space-y-6'>
          <p>
            The realm of private service encompasses a diverse range of settings, from urban
            penthouses to sprawling countryside estates. These environments often rival luxury
            hotels in terms of amenities and service expectations.
          </p>
          <p>
            Our recruiters excel in understanding and fulfilling the unique and often demanding
            requirements of private clients. We pride ourselves on our ability to deliver tailored
            recruitment solutions with the highest level of professionalism and confidentiality.
          </p>
          <p>
            Global Hospitality has successfully placed top-tier candidates in roles such as Estate
            Managers, Personal Chefs, Executive Housekeepers, and Chief Engineers, ensuring seamless
            operations and exceptional service standards.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className='bg-brand-light py-20 px-6 text-center'>
        <h2 className='text-2xl md:text-3xl font-heading font-semibold text-brand-dark mb-4'>
          Seeking Exceptional Private Service Professionals?
        </h2>
        <p className='max-w-xl mx-auto mb-8 text-neutral-800'>
          Connect with us to find dedicated professionals who align with your estate's standards and
          expectations.
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

export default PrivateService;
