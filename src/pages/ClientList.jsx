import React from 'react';
import { Link } from 'react-router-dom';

const clients = [
  { name: 'Four Seasons', logo: '/logos/four-seasons.png' },
  { name: 'Hilton', logo: '/logos/hilton.png' },
  { name: 'Marriott', logo: '/logos/marriott.png' },
  { name: 'Hyatt', logo: '/logos/hyatt.png' },
  { name: 'Atlantis Bahamas', logo: '/logos/atlantis.png' },
  { name: 'Commerce Casino', logo: '/logos/commerce.png' },
  { name: 'Lawry’s', logo: '/logos/lawrys.png' },
  { name: 'Sherwood Country Club', logo: '/logos/sherwood.png' },
  { name: 'Harvard University', logo: '/logos/harvard.png' },
  { name: 'Stanford University', logo: '/logos/stanford.png' },
];

function ClientList() {
  return (
    <section className='bg-white text-gray-800 px-6 py-20 max-w-6xl mx-auto'>
      <h1 className='text-4xl font-serif font-bold text-brand mb-10 text-center'>Our Clients</h1>

      <p className='text-lg leading-relaxed text-center max-w-3xl mx-auto mb-10'>
        Global Hospitality is proud to have partnered with some of the most prestigious names in
        hospitality across the globe. From iconic hotel brands to elite private clubs, cruise lines,
        casinos, and educational institutions, our clients trust us to deliver exceptional talent.
      </p>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center'>
        {clients.map((client, index) => (
          <div key={index} className='flex flex-col items-center text-center p-4'>
            <img
              src={client.logo}
              alt={`${client.name} Logo`}
              className='h-20 object-contain grayscale hover:grayscale-0 transition duration-300'
            />
            <span className='mt-2 text-sm font-medium text-gray-700'>{client.name}</span>
          </div>
        ))}
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
        <a
          href='/proposal'
          className='bg-brand text-white px-6 py-3 rounded-full hover:bg-brand/80 transition'>
          Request for Proposal
        </a>
        <a
          href='/contact'
          className='border border-brand text-brand px-6 py-3 rounded-full hover:bg-brand hover:text-white transition'>
          Contact Us
        </a>
      </div>
    </section>
  );
}

export default ClientList;
