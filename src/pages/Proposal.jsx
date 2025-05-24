import React from 'react';
import { Link } from 'react-router-dom';

function Proposal() {
  return (
    <section className='bg-white text-gray-800 px-6 py-20 max-w-4xl mx-auto'>
      <h1 className='text-4xl font-serif font-bold text-brand mb-10 text-center'>
        Request a Proposal
      </h1>

      <p className='text-lg leading-relaxed mb-8 text-center'>
        Global Hospitality will skillfully help you find the talent that will make customers sing
        your praises. We’re happy to discuss how we can assist you—promptly and professionally.
      </p>

      <p className='text-lg leading-relaxed mb-6'>
        If you’re seeking the perfect fit for your organization, want to explore your staffing
        needs, or have questions about our executive search services, please use the appropriate
        request link below. A knowledgeable member of our team will reach out at your convenience.
      </p>

      <div className='flex flex-col md:flex-row gap-6 justify-center mt-8'>
        <a
          href='mailto:la@globalhospitality.com'
          className='bg-brand text-white px-6 py-3 rounded-full text-center hover:bg-brand/80 transition'>
          Los Angeles Office: Request Proposal
        </a>
        <a
          href='mailto:toronto@globalhospitality.com'
          className='border border-brand text-brand px-6 py-3 rounded-full text-center hover:bg-brand hover:text-white transition'>
          Toronto Office: Request Proposal
        </a>
      </div>

      <p className='mt-10 text-center text-sm text-gray-600'>
        Prefer to connect another way? Contact us directly by phone or email—we’d be happy to answer
        your questions and discuss how Global can best assist you.
      </p>
    </section>
  );
}

export default Proposal;
