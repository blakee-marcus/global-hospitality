import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const Clubs = () => {
  return (
    <main className='font-body text-neutral-800'>
      <Helmet>
        <title>Clubs | Global Hospitality</title>
        <meta
          name='description'
          content='Global Hospitality provides private clubs with top-tier executive and departmental talent, tailored to uphold tradition, service, and innovation.'
        />
        <link rel='canonical' href='https://globalhospitality.com/clubs-2/' />
      </Helmet>

      {/* Hero Section */}
      <section className='bg-brand-accent py-20 px-6 text-center'>
        <motion.h1
          className='text-4xl md:text-5xl font-heading font-bold text-brand-primary mb-4'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}>
          Clubs
        </motion.h1>
        <p className='max-w-3xl mx-auto text-lg text-neutral-800 leading-relaxed'>
          We are proud to serve the private club sector with personalized search services that
          deliver experienced, service-oriented professionals who uphold the highest standards of
          excellence.
        </p>
      </section>

      {/* Content Section */}
      <section className='bg-white py-16 px-6'>
        <div className='max-w-4xl mx-auto space-y-6'>
          <p>
            From exclusive golf and country clubs to yacht and city clubs, we understand the
            culture, tradition, and member expectations that define these unique environments. Our
            approach is discreet, tailored, and consultative—reflecting the standards of the clubs
            we serve.
          </p>
          <p>
            We have successfully placed General Managers, Clubhouse Managers, Executive Chefs,
            Directors of Membership, and other key departmental leaders. Our candidates are vetted
            not just for their experience, but for their ability to build relationships, maintain
            discretion, and exceed expectations in high-touch settings.
          </p>
          <p>
            Global Hospitality’s deep relationships in the private club space allow us to present
            top talent that aligns with your club’s values and vision.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className='bg-brand-light py-20 px-6 text-center'>
        <h2 className='text-2xl md:text-3xl font-heading font-semibold text-brand-dark mb-4'>
          Let’s Find Your Next Club Leader
        </h2>
        <p className='max-w-xl mx-auto mb-8 text-neutral-800'>
          Reach out to our team for trusted, confidential recruitment support in the private club
          industry.
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

export default Clubs;
