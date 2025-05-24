import React from 'react';
import { Link } from 'react-router-dom';

function HowWeWork() {
  return (
    <section className='bg-white text-gray-800 px-6 py-20 max-w-5xl mx-auto'>
      <h1 className='text-4xl font-serif font-bold text-brand mb-10 text-center'>What We Do</h1>

      <div className='text-lg leading-relaxed space-y-8'>
        <p>
          Global Hospitality partners with hospitality clients around the world—including hotels,
          resorts, spas, restaurants, clubs, casinos, and other upscale properties. Our team has
          built an extensive proprietary database of thousands of candidates and continues to
          develop a global network of professionals.
        </p>
        <p>
          Our mission is simple: to find and place the best talent—people who make a lasting and
          positive impact on our clients' long-term success. We operate with the highest ethical
          standards and are committed to creating matches between top-tier professionals and
          world-class companies.
        </p>
        <p>
          Our services are always billed to the client. As a candidate, you will never pay a fee to
          work with us. Instead, you gain the opportunity to become part of an international network
          dedicated to elevating careers in hospitality leadership.
        </p>
        <p>
          If you would like to learn more about how Global Hospitality conducts searches for our
          clients, or to see our featured job opportunities, please follow the links below.
        </p>
      </div>

      <div className='flex justify-center gap-4 mt-12'>
        <Link
          to='/proposal'
          className='bg-brand text-white px-6 py-3 rounded-full hover:bg-brand/80 transition'>
          Learn About Our Search Process
        </Link>
        <Link
          to='/job-search'
          className='border border-brand text-brand px-6 py-3 rounded-full hover:bg-brand hover:text-white transition'>
          View Featured Opportunities
        </Link>
      </div>

      <div className='mt-16 border-t pt-10'>
        <blockquote className='italic text-gray-600 text-center max-w-3xl mx-auto'>
          “I really appreciated working with Global Hospitality. The professionalism and dedication
          to filling our vacant Executive Chef position by Brian was exceptional. He worked very
          hard to find the right fit for our hotel and did an outstanding job. Our new Executive
          Chef is exceeding all expectations.”
        </blockquote>
        <p className='text-center mt-4 font-medium'>– Tony M.</p>
      </div>
    </section>
  );
}

export default HowWeWork;
