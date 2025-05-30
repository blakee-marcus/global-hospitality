import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const consultants = [
  'Eden',
  'Terry',
  'Joshua',
  'Emily',
  'Doug',
  'John Platz',
  'Brian Marcus',
  'Jose Acuna',
];

function ConsultantProfiles() {
  return (
    <main className='bg-white text-gray-800 px-6 py-20 max-w-5xl mx-auto font-body'>
      <Helmet>
        <title>Meet Our Hospitality Recruiters | Global Hospitality Consultants</title>
        <meta
          name='description'
          content='Our executive search consultants are former hospitality professionals with deep industry experience. Meet the Global Hospitality team behind your next hire.'
        />
        <meta
          name='keywords'
          content='hospitality executive recruiters, hotel recruiter bios, Global Hospitality consultants, recruiter team, executive search team profiles'
        />
        <meta property='og:title' content='Meet Our Hospitality Consultants | Global Hospitality' />
        <meta
          property='og:description'
          content='Our consultants are seasoned industry veterans with operational experience across hotels, resorts, restaurants, and clubs. Get to know the experts behind Global Hospitality.'
        />
        <meta property='og:url' content='https://globalhospitality.com/consultants' />
        <link rel='canonical' href='https://globalhospitality.com/consultants' />

        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://globalhospitality.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Consultants',
                item: 'https://globalhospitality.com/consultants',
              },
            ],
          })}
        </script>
      </Helmet>

      <section aria-labelledby='consultants-heading'>
        <h1
          id='consultants-heading'
          className='text-4xl font-heading font-bold text-brand-primary mb-10 text-center'>
          Consultant Profiles
        </h1>

        <p className='text-lg leading-relaxed mb-10 text-center max-w-3xl mx-auto'>
          Our understanding of your needs comes from inside the business. Global Hospitality
          executive search consultants are seasoned professionals who began their hospitality
          careers in operational roles such as general managers, food and beverage directors, chefs,
          and other leadership positions. Many have earned degrees from top hotel schools. Each
          brings deep, firsthand knowledge of the unique challenges and opportunities within the
          hospitality industry.
        </p>

        <div className='grid grid-cols-2 md:grid-cols-3 gap-6 text-center'>
          {consultants.map((name) => (
            <div
              key={name}
              className='bg-neutral-100 p-6 rounded-xl shadow-card hover:shadow-md transition'>
              <div
                className='h-24 w-24 mx-auto rounded-full bg-brand-primary text-white flex items-center justify-center text-2xl font-bold'
                aria-hidden='true'>
                {name
                  .split(' ')
                  .map((word) => word[0])
                  .join('')}
              </div>
              <p className='mt-4 font-medium text-lg'>{name}</p>
            </div>
          ))}
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

export default ConsultantProfiles;
