import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function Guarantee() {
  return (
    <main className='bg-white text-gray-800 px-6 py-20 max-w-5xl mx-auto font-body'>
      <Helmet>
        <title>Hospitality Recruitment Guarantee | Global Hospitality</title>
        <meta
          name='description'
          content='Global Hospitality offers an industry-leading one-year guarantee on all hospitality executive placements. Learn how we ensure long-term success with every hire.'
        />
        <meta
          name='keywords'
          content='hospitality executive search guarantee, one-year placement assurance, Global Hospitality promise, recruitment satisfaction guarantee, hospitality talent retention'
        />
        <meta property='og:title' content='Our Guarantee | Global Hospitality Executive Search' />
        <meta
          property='og:description'
          content='We back every hospitality executive placement with a one-year guarantee. Discover our commitment to candidate fit, retention, and long-term client success.'
        />
        <meta property='og:url' content='https://globalhospitality.com/guarantee' />
        <link rel='canonical' href='https://globalhospitality.com/guarantee' />
      </Helmet>

      <section aria-labelledby='guarantee-heading'>
        <h1
          id='guarantee-heading'
          className='text-4xl font-heading font-bold text-brand-primary mb-10 text-center'>
          Our Guarantee
        </h1>

        <div className='text-lg leading-relaxed space-y-8'>
          <p>
            Global Hospitality takes great care to ensure our clients receive not only qualified
            candidates but the right candidates. From initial contact through final placement, we
            focus on building long-term value through the right cultural and professional fit.
          </p>
          <p>
            As part of our commitment to excellence, we conduct extensive due diligence in
            collaboration with our clients. This includes structured interviews, background checks,
            and detailed reference reviews—ensuring confidence in every hire.
          </p>
          <p>
            We proudly offer an industry-leading one-year guarantee on every executive placement.
            Should a placement not meet expectations within the first year, we will conduct a
            replacement search at no additional cost.
          </p>
          <p>
            If you’d like to learn more about our placement guarantee and process, please{' '}
            <Link to='/contact' className='text-brand-primary underline'>
              contact one of our consultants
            </Link>{' '}
            today.
          </p>
        </div>

        <div className='mt-16 border-t pt-10 text-center'>
          <blockquote className='italic text-gray-600 max-w-3xl mx-auto'>
            “Thank you so much Terry – it was a pleasure to work with you again. I have always
            appreciated and admired the quality you bring in presenting candidates to us. With our
            growth, don’t be surprised if I reach out to you for assistance again in the near
            future!”
          </blockquote>
          <p className='mt-4 font-medium'>– Tracy W.</p>
        </div>

        <div className='flex justify-center gap-4 mt-12'>
          <Link
            to='/proposal'
            className='bg-brand-primary text-white px-6 py-3 rounded-full hover:bg-brand-primary/80 transition'>
            Request for Proposal
          </Link>
          <Link
            to='/contact'
            className='border border-brand-primary text-brand-primary px-6 py-3 rounded-full hover:bg-brand-primary hover:text-white transition'>
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Guarantee;
