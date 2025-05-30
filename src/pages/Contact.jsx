import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <main className='bg-white text-gray-800 px-6 py-20 max-w-4xl mx-auto font-body'>
      <Helmet>
        <title>Contact Global Hospitality | Executive Hospitality Recruiters</title>
        <meta
          name='description'
          content='Connect with Global Hospitality consultants in Los Angeles and Toronto for expert executive search services in the hospitality industry.'
        />
        <meta
          name='keywords'
          content='hospitality recruiters contact, executive search firm hospitality, Global Hospitality email, Global Hospitality phone, recruiter offices'
        />
        <meta property='og:title' content='Contact Global Hospitality Recruiters' />
        <meta
          property='og:description'
          content='Get in touch with Global Hospitality’s executive search teams in Los Angeles and Toronto. We specialize in global hospitality recruitment and consulting.'
        />
        <meta property='og:url' content='https://globalhospitality.com/contact' />
        <link rel='canonical' href='https://globalhospitality.com/contact' />
        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Global Hospitality',
            url: 'https://globalhospitality.com',
            contactPoint: [
              {
                '@type': 'ContactPoint',
                telephone: '+1-626-836-1222',
                contactType: 'Customer Service',
                areaServed: 'US',
                availableLanguage: ['English'],
              },
              {
                '@type': 'ContactPoint',
                telephone: '+1-416-538-3636',
                contactType: 'Customer Service',
                areaServed: 'CA',
                availableLanguage: ['English'],
              },
            ],
          })}
        </script>
      </Helmet>

      <section aria-labelledby='contact-heading'>
        <h1
          id='contact-heading'
          className='text-4xl font-heading font-bold text-brand-primary mb-10 text-center'>
          Contact Us
        </h1>

        <p className='text-lg leading-relaxed mb-10 text-center'>
          Global Hospitality consultants are ready to help you find the perfect match. Please
          contact one of our offices and a consultant will be happy to assist you.
        </p>

        <div className='grid md:grid-cols-2 gap-10'>
          {/* Los Angeles Office */}
          <div className='bg-neutral-100 p-6 rounded-xl shadow-card'>
            <h2 className='text-2xl font-semibold text-brand-primary mb-4'>Los Angeles Office</h2>
            <p className='mb-2'>Global Hospitality, Inc.</p>
            <p className='mb-2'>Pasadena, CA 91107, USA</p>
            <p className='mb-2 font-medium'>
              Tel:{' '}
              <a href='tel:16268361222' className='text-brand-primary hover:underline'>
                626.836.1222
              </a>
            </p>
            <p>
              Email:{' '}
              <a href='mailto:mail@globalhospitality.com' className='text-brand-primary hover:underline'>
                mail@globalhospitality.com
              </a>
            </p>
            <Link
              to='/proposal-request-los-angeles'
              className='inline-block mt-4 bg-brand-primary text-white px-4 py-2 rounded-full hover:bg-brand-primary/80 transition'>
              Request Proposal
            </Link>
          </div>

          {/* Toronto Office */}
          <div className='bg-neutral-100 p-6 rounded-xl shadow-card'>
            <h2 className='text-2xl font-semibold text-brand-primary mb-4'>Toronto Office</h2>
            <p className='mb-2'>Global Hospitality Search Consultants, Ltd.</p>
            <p className='mb-2'>Toronto, Ontario, Canada</p>
            <p className='mb-2'>
              Licensed to operate as a Recruiter in Ontario
              <br />
              License # REC-0000003525
            </p>
            <p className='mb-2 font-medium'>
              Tel:{' '}
              <a href='tel:14165383636' className='text-brand-primary hover:underline'>
                416.538.3636
              </a>
            </p>
            <p>
              Email:{' '}
              <a href='mailto:toronto@globalhospitality.com' className='text-brand-primary hover:underline'>
                toronto@globalhospitality.com
              </a>
            </p>
            <Link
              to='/proposal-request-toronto'
              className='inline-block mt-4 border border-brand-primary text-brand-primary px-4 py-2 rounded-full hover:bg-brand-primary hover:text-white transition'>
              Request Proposal
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
