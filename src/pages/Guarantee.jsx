import React from 'react';
import { Link } from 'react-router-dom';

function Guarantee() {
  return (
    <section className='bg-white text-gray-800 px-6 py-20 max-w-5xl mx-auto'>
      <h1 className='text-4xl font-serif font-bold text-brand mb-10 text-center'>Our Guarantee</h1>

      <div className='text-lg leading-relaxed space-y-8'>
        <p>
          Global Hospitality takes great care to ensure our clients receive not only qualified
          candidates but the right candidates. From initial contact through final placement, we are
          focused on creating the strongest possible match between the client's needs and the
          candidate’s skills and culture fit.
        </p>
        <p>
          As part of our commitment to excellence, we conduct extensive due diligence on all final
          candidates in collaboration with our clients. This helps ensure long-term success for
          every hire we recommend.
        </p>
        <p>
          To support that commitment, we offer an exclusive guarantee—backing each placement with up
          to one year of assurance. If you'd like to learn more about the specifics of our
          guarantee, please contact one of our experienced consultants.
        </p>
      </div>

      <div className='mt-16 border-t pt-10'>
        <blockquote className='italic text-gray-600 text-center max-w-3xl mx-auto'>
          “Thank you so much Terry – it was a pleasure to work with you again. I have always
          appreciated and admired the quality you bring in presenting candidates to us. With our
          growth, don’t be surprised if I reach out to you for assistance again in the near future!”
        </blockquote>
        <p className='text-center mt-4 font-medium'>– Tracy W.</p>
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
export default Guarantee;
