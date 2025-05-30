import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <main className='min-h-screen flex flex-col items-center justify-center bg-brand-accent text-neutral-900 px-4 text-center'>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className='text-6xl font-heading font-bold mb-4'>
        404
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className='text-lg font-body mb-6'>
        Sorry, the page you're looking for doesn't exist.
      </motion.p>
      <Link
        to='/'
        className='inline-block bg-brand-primary text-white font-body px-6 py-3 rounded-xl shadow-card hover:bg-brand-dark transition'>
        Back to Home
      </Link>
    </main>
  );
};

export default NotFound;
