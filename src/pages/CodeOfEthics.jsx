import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function CodeOfEthics() {
  return (
    <main className='bg-white text-gray-800 px-6 py-20 max-w-5xl mx-auto font-body'>
      <Helmet>
        <title>Code of Ethics | Global Hospitality Executive Search</title>
        <meta
          name='description'
          content='Learn about the Global Hospitality Code of Ethics. We uphold confidentiality, professionalism, and fairness in every client and candidate relationship.'
        />
        <meta
          name='keywords'
          content='Global Hospitality code of ethics, hospitality recruiter standards, executive search ethics, recruitment confidentiality, professional conduct'
        />
        <meta property='og:title' content='Code of Ethics | Global Hospitality Executive Search' />
        <meta
          property='og:description'
          content='Our Code of Ethics outlines our commitment to confidentiality, professionalism, and integrity throughout the hospitality recruitment process.'
        />
        <meta property='og:url' content='https://globalhospitality.com/code-of-ethics' />
        <link rel='canonical' href='https://globalhospitality.com/code-of-ethics' />

        {/* JSON-LD Structured Data */}
        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://globalhospitality.com/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Code of Ethics',
                item: 'https://globalhospitality.com/code-of-ethics',
              },
            ],
          })}
        </script>

        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Global Hospitality',
            url: 'https://globalhospitality.com',
            logo: 'https://globalhospitality.com/logo.png', // Replace if logo is hosted elsewhere
            sameAs: [
              'https://www.linkedin.com/company/globalhospitality',
              'https://www.facebook.com/globalhospitality',
            ],
          })}
        </script>
      </Helmet>

      <section aria-labelledby='ethics-heading'>
        <h1
          id='ethics-heading'
          className='text-4xl font-serif font-bold text-brand-primary mb-10 text-center'>
          Code of Ethics
        </h1>

        <p className='text-lg leading-relaxed mb-10 text-center max-w-3xl mx-auto'>
          Our Professional Code of Ethics is the foundation of our commitment to every firm and
          every person with whom we work.
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
              Abide by all provisions and laws of the Employment Agencies Act, the Human Rights
              Code, and/or the EEOC.
            </li>
            <li>
              Stand behind our work with the most comprehensive performance pledge in the
              industry—the{' '}
              <Link to='/guarantee' className='underline text-brand-primary-primary'>
                Global one-year guarantee
              </Link>
              .
            </li>
          </ul>

          <h2 className='text-2xl font-semibold mt-8'>We pledge never to:</h2>
          <ul className='list-disc list-inside space-y-2 ml-4'>
            <li>Submit unsolicited resumes.</li>
            <li>Forward a resume without the candidate’s consent.</li>
            <li>Solicit the employees of an active Global client.</li>
            <li>Recruit any employee we have previously placed.</li>
            <li>Knowingly withhold pertinent information that might influence decisions.</li>
          </ul>
        </div>

        <div className='mt-16 border-t pt-10 text-center'>
          <blockquote className='italic text-gray-600 max-w-3xl mx-auto'>
            “Global Hospitality has been an excellent partner in building our management team.
            Working with Brian Marcus made the process smooth and efficient, and ultimately, we got
            an outstanding General Manager at a time when skilled talent was very difficult to
            find.”
          </blockquote>
          <p className='mt-4 font-medium'>– Gillian</p>
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

export default CodeOfEthics;
