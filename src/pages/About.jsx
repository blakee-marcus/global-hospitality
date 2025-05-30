import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function About() {
  return (
    <main className='bg-white text-gray-800 px-6 py-20 max-w-5xl mx-auto font-body'>
      <Helmet>
        <title>About Us | Global Hospitality Executive Search Firm</title>
        <meta
          name='description'
          content='Learn why Global Hospitality is the trusted executive search firm for hotels, restaurants, clubs, and luxury properties worldwide. Discover our hospitality roots, results-driven approach, and global reach.'
        />
        <meta
          name='keywords'
          content='hospitality executive search, hotel recruitment firm, global hospitality, restaurant headhunting, luxury hospitality recruiter'
        />
        <meta property='og:title' content='Why Global Hospitality?' />
        <meta
          property='og:description'
          content='Global Hospitality is a trusted leader in executive search for the hospitality industry, delivering experienced leadership for hotels, restaurants, clubs, and more.'
        />
        <meta property='og:url' content='https://globalhospitality.com/about-us' />
        <link rel='canonical' href='https://globalhospitality.com/about-us' />
      </Helmet>

      <h1 className='text-4xl font-serif font-bold text-brand-primary mb-10 text-center'>
        Why Global Hospitality?
      </h1>

      <section className='space-y-10 text-lg leading-relaxed'>
        <article>
          <h2 className='text-2xl font-semibold mb-2'>Hospitality is All We Do</h2>
          <p>
            At Global Hospitality, hospitality is our exclusive focus. Our team includes former
            general managers, chefs, food & beverage directors, and other seasoned industry
            leaders—many of whom hold degrees from top-ranked hotel schools. This insider experience
            equips us to deliver precise, insightful recruiting solutions based on real-world
            understanding.
          </p>
        </article>

        <article>
          <h2 className='text-2xl font-semibold mb-2'>Real Results, Since 1992</h2>
          <p>
            With over 30 years of specialized experience, Global Hospitality has partnered with
            leading hotel groups, restaurant brands, private clubs, and resorts to recruit
            world-class talent. Our retained search model ensures undivided attention to every
            client, and our placements consistently drive long-term impact.
          </p>
        </article>

        <article>
          <h2 className='text-2xl font-semibold mb-2'>Global Reach, Local Insight</h2>
          <p>
            Our international footprint allows us to conduct efficient, targeted executive searches
            whether local, regional, or global. With an expansive proprietary database and trusted
            partner network, we source high-caliber professionals quickly and discreetly.
          </p>
        </article>

        <article>
          <h2 className='text-2xl font-semibold mb-2'>Integrity That Builds Trust</h2>
          <p>
            We act as a true extension of your leadership team. Known for transparency and
            discretion, we uphold the highest ethical standards in every engagement. Clients return
            to us again and again because we never compromise on trust.
          </p>
        </article>
      </section>

      <section className='mt-16 border-t pt-10 text-center'>
        <blockquote className='italic text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed'>
          “I LOVE Aimee! She and I think so much alike that I think we must be related. I dread it
          when I will probably get that envelope telling me what a great time she has had working
          for me BUT … time to move on. My first call will be to you for sure!”
        </blockquote>
        <p className='mt-4 font-medium'>– Shirlee G.</p>
      </section>

      <div className='flex justify-center gap-4 mt-12'>
        <Link
          to='/proposal'
          className='bg-brand-primary text-white px-6 py-3 rounded-full hover:bg-brand-primary/80 transition'
          aria-label='Request a proposal from Global Hospitality'>
          Request for Proposal
        </Link>
        <Link
          to='/contact'
          className='border border-brand-primary text-brand-primary px-6 py-3 rounded-full hover:bg-brand-primary hover:text-white transition'
          aria-label='Contact the Global Hospitality team'>
          Contact Us
        </Link>
      </div>
    </main>
  );
}

export default About;
