import React from 'react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    quote:
      'Brian truly understands our industry’s needs with his decades of experience in high-end hospitality; he has an enormous network and “knocks on doors”! We filled 5 key leadership positions with highly qualified candidates which saved our opening right before the season began.',
    author: 'Patrick D.',
  },
  {
    quote:
      'I really appreciated working with Global Hospitality. The professionalism and dedication to filling our vacant Executive Chef position by Brian was exceptional. He worked very hard to find the right fit for our hotel and did an outstanding job. Our new Executive Chef is exceeding all expectations. Thank you.',
    author: 'Tony M.',
  },
  {
    quote:
      'Global Hospitality has been an excellent partner in building our management team. Working with Brian Marcus made the process smooth and efficient, and ultimately, we got an outstanding General Manager at a time when skilled talent was very difficult to find.',
    author: 'Gillian',
  },
  {
    quote:
      'Thanks for another great resume. I have never worked with a recruitment company that consistently finds great talent like yours.',
    author: 'Anthony R.',
  },
  {
    quote:
      'After searching on our own for months for our Executive Chef, it was wonderful to have found you! You were so responsive to our needs, great to work with and ultimately found us our perfect candidate. Thank you so much!',
    author: 'Camille Z.',
  },
  {
    quote:
      'Global Hospitality deals with integrity and honesty and works diligently on behalf of their clients to ensure that they secure the best candidates. I certainly would not hesitate in recommending Global Hospitality to any employer who was seeking an Executive Search Company who puts the needs of the client first and works hard to meet their needs.',
    author: 'Harry O.',
  },
  {
    quote:
      'The Briars acquired an Executive Chef through Global Hospitality Search. It was necessary for their representatives to go and seek the appropriate candidate on our behalf. We have been most satisfied with the results. The transaction was handled with integrity and fairness, and we will certainly use this company’s services in the future.',
    author: 'Barbara S.',
  },
  {
    quote:
      'I would like to extend my thanks and appreciation to you for the very timely and professional service you provided to us in the search and placement for this position. Your outstanding efforts have resulted in the recruitment of an ideal candidate. The Centre will not hesitate to consider utilizing the services of Global Hospitality in the future.',
    author: 'Doug A.',
  },
  {
    quote:
      'Thanks to Terry and Eden, we were able to find ourselves working for one of the best companies in the USA, running their property in Belize. Their communication and determination was a great example of top-tier hospitality recruiting.',
    author: 'Mary-Ann',
  },
  {
    quote:
      'Thank you so much Terry – it was a pleasure to work with you again. I have always appreciated and admired the quality you bring in presenting candidates to us.',
    author: 'Tracy W.',
  },
  {
    quote:
      'I LOVE Aimee! She and I think so much alike that I think we must be related. My first call will be to you for sure!',
    author: 'Shirlee G.',
  },
  {
    quote:
      'Through Eden’s firm, it was completely different. Eden helped in the entire process, keeping communications open with the employer, all the way to getting an excellent offer. I highly recommend Eden and his group.',
    author: 'David B.',
  },
];

function Testimonials() {
  return (
    <section className='bg-white text-gray-800 px-6 py-20 max-w-5xl mx-auto'>
      <h1 className='text-4xl font-serif font-bold text-brand mb-10 text-center'>
        Client Testimonials
      </h1>

      <div className='space-y-12'>
        {testimonials.map(({ quote, author }, index) => (
          <div
            key={index}
            className='bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition'>
            <blockquote className='italic text-lg text-gray-700'>“{quote}”</blockquote>
            <p className='mt-4 text-right font-medium text-brand'>– {author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
