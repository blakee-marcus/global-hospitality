import React from 'react';
import { Link } from 'react-router-dom';

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
    <section className='bg-white text-gray-800 px-6 py-20 max-w-5xl mx-auto'>
      <h1 className='text-4xl font-serif font-bold text-brand mb-10 text-center'>
        Consultant Profiles
      </h1>

      <p className='text-lg leading-relaxed mb-10 text-center max-w-3xl mx-auto'>
        Our understanding of your needs comes from inside the business. Global Hospitality executive
        search consultants are seasoned professionals who began their hospitality careers in
        operational roles such as general managers, food and beverage directors, chefs, and other
        leadership positions. Many have earned degrees from top hotel schools. Each brings deep,
        firsthand knowledge of the unique challenges and opportunities within the hospitality
        industry.
      </p>

      <div className='grid grid-cols-2 md:grid-cols-3 gap-6 text-center'>
        {consultants.map((name) => (
          <div
            key={name}
            className='bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition'>
            <div className='h-24 w-24 mx-auto rounded-full bg-brand text-white flex items-center justify-center text-2xl font-bold'>
              {name
                .split(' ')
                .map((word) => word[0])
                .join('')}
            </div>
            <p className='mt-4 font-medium text-lg'>{name}</p>
          </div>
        ))}
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
export default ConsultantProfiles;
