import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <section className='bg-white text-gray-800 px-6 py-20 max-w-4xl mx-auto'>
      <h1 className='text-4xl font-serif font-bold text-brand mb-10 text-center'>Contact Us</h1>

      <p className='text-lg leading-relaxed mb-10 text-center'>
        Global Hospitality consultants are ready to help you find the perfect match. Please contact
        one of our offices and a consultant will be happy to assist you.
      </p>

      <div className='grid md:grid-cols-2 gap-10'>
        <div className='bg-gray-50 p-6 rounded-xl shadow-sm'>
          <h2 className='text-2xl font-semibold text-brand mb-4'>Los Angeles</h2>
          <p className='mb-2'>Global Hospitality, Inc.</p>
          <p className='mb-2'>Pasadena, CA 91107, USA</p>
          <p className='mb-2 font-medium'>
            Tel:{' '}
            <a href='tel:16268361222' className='text-brand hover:underline'>
              626.836.1222
            </a>
          </p>
          <p>
            Email:{' '}
            <a href='mailto:mail@globalhospitality.com' className='text-brand hover:underline'>
              mail@globalhospitality.com
            </a>
          </p>
          <a
            href='mailto:la@globalhospitality.com'
            className='inline-block mt-4 bg-brand text-white px-4 py-2 rounded-full hover:bg-brand/80 transition'>
            Request Proposal
          </a>
        </div>

        <div className='bg-gray-50 p-6 rounded-xl shadow-sm'>
          <h2 className='text-2xl font-semibold text-brand mb-4'>Toronto</h2>
          <p className='mb-2'>Global Hospitality Search Consultants, Ltd.</p>
          <p className='mb-2'>Toronto, Ontario, Canada</p>
          <p className='mb-2'>
            Licensed to operate as a Recruiter in Ontario
            <br />
            License # REC-0000003525
          </p>
          <p className='mb-2 font-medium'>
            Tel:{' '}
            <a href='tel:14165383636' className='text-brand hover:underline'>
              416.538.3636
            </a>
          </p>
          <p>
            Email:{' '}
            <a href='mailto:toronto@globalhospitality.com' className='text-brand hover:underline'>
              toronto@globalhospitality.com
            </a>
          </p>
          <a
            href='mailto:toronto@globalhospitality.com'
            className='inline-block mt-4 border border-brand text-brand px-4 py-2 rounded-full hover:bg-brand hover:text-white transition'>
            Request Proposal
          </a>
        </div>
      </div>
    </section>
  );
}
export default Contact;
