import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const Casinos = () => {
  return (
    <main className='font-body text-neutral-800'>
      <Helmet>
        <title>Casinos | Global Hospitality</title>
        <meta
          name='description'
          content='Global Hospitality provides executive recruitment for diverse casino operations worldwide, delivering leadership talent attuned to the unique demands of the gaming industry.'
        />
        <link rel='canonical' href='https://globalhospitality.com/casino-recruitment/' />
      </Helmet>

      {/* Hero Section */}
      <section className='bg-brand-accent py-20 px-6 text-center'>
        <motion.h1
          className='text-4xl md:text-5xl font-heading font-bold text-brand-primary mb-4'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}>
          Casinos
        </motion.h1>
        <p className='max-w-3xl mx-auto text-lg text-neutral-800 leading-relaxed'>
          From Las Vegas to riverboats, tribal casinos, and racetracks, Global Hospitality connects
          gaming operations with leaders who understand the fast-paced, entertainment-driven world
          of casinos.
        </p>
      </section>

      {/* Content Section */}
      <section className='bg-white py-16 px-6'>
        <div className='max-w-4xl mx-auto space-y-6'>
          <p>
            Casino management roles often mirror hotel leadership in title, but the guest experience
            and operational focus differ significantly. Casinos are immersive entertainment
            environments where food, beverage, gaming, and nightlife converge.
          </p>
          <p>
            We recruit for a wide range of casino formats—including dockside, tribal,
            limited-stakes, and land-based venues—each with distinct regulatory and cultural
            considerations. Our placements include General Managers, Directors of Gaming Operations,
            Executive Chefs, Security Directors, and VIP Services Managers.
          </p>
          <p>
            Our recruiters understand the nuances of casino hospitality, from compliance and
            customer engagement to high-volume service and entertainment integration. We deliver
            candidates who thrive in high-energy, guest-centric environments.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className='bg-brand-light py-20 px-6 text-center'>
        <h2 className='text-2xl md:text-3xl font-heading font-semibold text-brand-dark mb-4'>
          Ready to Staff Your Casino with Proven Leaders?
        </h2>
        <p className='max-w-xl mx-auto mb-8 text-neutral-800'>
          Contact us to find experienced professionals who bring operational excellence and guest
          satisfaction to your gaming venue.
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

export default Casinos;
