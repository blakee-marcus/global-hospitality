import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function HowWeWork() {
  return (
    <main className='bg-white text-gray-800 px-6 py-20 max-w-5xl mx-auto font-body'>
      <Helmet>
        <title>How We Work | Global Hospitality Executive Search</title>
        <meta
          name='description'
          content='Discover how Global Hospitality conducts executive search and recruitment for hotels, resorts, restaurants, clubs, casinos, and more. Learn about our process and view open roles.'
        />
        <meta
          name='keywords'
          content='hospitality executive search, global hospitality recruiters, hotel recruiter process, restaurant recruitment agency, casino talent placement, no candidate fees'
        />
        <meta property='og:title' content='How We Work | Global Hospitality' />
        <meta
          property='og:description'
          content='We recruit top hospitality talent globally—placing leaders in hotels, restaurants, and resorts. Learn how we work and view our featured roles.'
        />
        <meta property='og:url' content='https://globalhospitality.com/how-we-work' />
        <link rel='canonical' href='https://globalhospitality.com/how-we-work' />
      </Helmet>

      <section aria-labelledby='how-we-work-heading'>
        <h1
          id='how-we-work-heading'
          className='text-4xl font-heading font-bold text-brand-primary mb-10 text-center'>
          What We Do
        </h1>

        <div className='text-lg leading-relaxed space-y-8'>
          <p>
            Global Hospitality partners with hospitality organizations worldwide—including hotels,
            resorts, spas, restaurants, private clubs, and casinos. Our experienced recruiters have
            built a proprietary database of thousands of candidates and maintain strong
            relationships within the global hospitality community.
          </p>
          <p>
            Our mission is clear: to place the best executive and leadership talent where they can
            make a measurable, lasting impact. We uphold the highest ethical standards and aim to
            build long-term partnerships between professionals and world-class employers.
          </p>
          <p>
            Our services are always retained by the client. As a candidate, you will never be asked
            to pay a fee. Instead, you gain access to exclusive opportunities and expert guidance
            from a global hospitality search partner.
          </p>
          <p>
            Interested in how we conduct our searches or want to see available positions? Explore
            our process and open roles using the links below.
          </p>
        </div>

        <div className='flex justify-center gap-4 mt-12'>
          <Link
            to='/proposal'
            className='bg-brand-primary text-white px-6 py-3 rounded-full hover:bg-brand-primary/80 transition'>
            Learn About Our Search Process
          </Link>
          <Link
            to='/job-search'
            className='border border-brand-primary text-brand-primary px-6 py-3 rounded-full hover:bg-brand-primary hover:text-white transition'>
            View Featured Opportunities
          </Link>
        </div>

        <div className='mt-16 border-t pt-10 text-center'>
          <blockquote className='italic text-gray-600 max-w-3xl mx-auto'>
            “I really appreciated working with Global Hospitality. The professionalism and
            dedication to filling our vacant Executive Chef position by Brian was exceptional. He
            worked very hard to find the right fit for our hotel and did an outstanding job. Our new
            Executive Chef is exceeding all expectations.”
          </blockquote>
          <p className='mt-4 font-medium'>– Tony M.</p>
        </div>
      </section>
    </main>
  );
}

export default HowWeWork;
