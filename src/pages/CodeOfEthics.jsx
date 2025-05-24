import React from 'react';
import { Link } from 'react-router-dom';

function CodeOfEthics() {
  return (
    <section className='bg-white text-gray-800 px-6 py-20 max-w-5xl mx-auto'>
      <h1 className='text-4xl font-serif font-bold text-brand mb-10 text-center'>Code of Ethics</h1>

      <p className='text-lg leading-relaxed mb-10 text-center max-w-3xl mx-auto'>
        Our Professional Code of Ethics is the foundation of our commitment to every firm and every
        person with whom we work.
      </p>

      <div className='space-y-8 text-lg leading-relaxed'>
        <p>
          Global Hospitality client relationships are built on mutual respect, loyalty, and
          discretion. We honor the trust placed in us with every contract by making an absolute
          commitment: to earn that trust fully and never compromise it.
        </p>

        <h2 className='text-2xl font-semibold mt-8'>We pledge to always:</h2>
        <ul className='list-disc list-inside space-y-2 ml-4'>
          <li>
            Respect the confidentiality of information received from both clients and candidates.
          </li>
          <li>
            Maintain the anonymity and confidentiality of a client until permission for disclosure
            has been given.
          </li>
          <li>Screen, evaluate, and reference all candidates as part of the hiring process.</li>
          <li>
            Abide by all provisions and laws of the Employment Agencies Act, the Human Rights Code,
            and/or the Equal Employment and Opportunity Commission.
          </li>
          <li>
            Stand behind our work with the most comprehensive performance pledge in the industry—the
            Global one-year guarantee.
          </li>
        </ul>

        <h2 className='text-2xl font-semibold mt-8'>We pledge never to:</h2>
        <ul className='list-disc list-inside space-y-2 ml-4'>
          <li>Submit unsolicited resumes.</li>
          <li>Forward a resume without the candidate’s consent.</li>
          <li>Solicit the employees of an active Global client.</li>
          <li>Recruit any employee we have previously placed.</li>
          <li>
            Knowingly withhold pertinent information about either a client or a candidate that might
            influence the other’s decision.
          </li>
        </ul>
      </div>

      <div className='mt-16 border-t pt-10'>
        <blockquote className='italic text-gray-600 text-center max-w-3xl mx-auto'>
          “Global Hospitality has been an excellent partner in building our management team. Working
          with Brian Marcus made the process smooth and efficient, and ultimately, we got an
          outstanding General Manager at a time when skilled talent was very difficult to find.”
        </blockquote>
        <p className='text-center mt-4 font-medium'>– Gillian</p>
      </div>

      <div className='flex justify-center gap-4 mt-12'>
        <Link
          to='/proposal'
          className='bg-brand text-white px-6 py-3 rounded-full hover:bg-brand/80 transition'>
          Request for Proposal
        </Link>
        <Link
          to='/contact'
          className='border border-brand text-brand px-6 py-3 rounded-full hover:bg-brand hover:text-white transition'>
          Contact Us
        </Link>
      </div>
    </section>
  );
}
export default CodeOfEthics;
