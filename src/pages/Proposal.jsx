import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function Proposal() {
  return (
    <main className='bg-white text-gray-800 px-6 py-20 max-w-4xl mx-auto font-body'>
      <Helmet>
        <title>Request a Proposal | Global Hospitality Executive Search</title>
        <meta
          name='description'
          content='Submit a proposal request to Global Hospitality. Let our expert hospitality recruiters help you find top-tier talent in the U.S., Canada, and internationally.'
        />
        <meta
          name='keywords'
          content='hospitality executive search proposal, recruit hospitality leaders, hospitality recruiters Los Angeles Toronto, request recruiter services'
        />
        <meta property='og:title' content='Request a Proposal | Global Hospitality' />
        <meta
          property='og:description'
          content='Looking for expert hospitality recruiters? Request a proposal from Global Hospitality’s offices in Los Angeles or Toronto to start your executive search.'
        />
        <meta property='og:url' content='https://globalhospitality.com/proposal' />
        <link rel='canonical' href='https://globalhospitality.com/proposal' />
      </Helmet>

      <section aria-labelledby='proposal-heading'>
        <h1
          id='proposal-heading'
          className='text-4xl font-heading font-bold text-brand-primary mb-10 text-center'>
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
          <Link
            to='/proposal-request-los-angeles'
            className='bg-brand-primary text-white px-6 py-3 rounded-full text-center hover:bg-brand-primary/80 transition'>
            Los Angeles Office: Request Proposal
          </Link>
          <Link
            to='/proposal-request-toronto'
            className='border border-brand-primary text-brand-primary px-6 py-3 rounded-full text-center hover:bg-brand-primary hover:text-white transition'>
            Toronto Office: Request Proposal
          </Link>
        </div>

        <p className='mt-10 text-center text-sm text-gray-600'>
          Prefer to connect another way? Contact us directly by phone or email—we’d be happy to
          answer your questions and discuss how Global can best assist you.
        </p>
      </section>
    </main>
  );
}

export default Proposal;
