import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <section className='bg-white text-gray-800 px-6 py-20 max-w-5xl mx-auto'>
      <h1 className='text-4xl font-serif font-bold text-brand mb-10 text-center'>
        Why Global Hospitality?
      </h1>

      <div className='space-y-10 text-lg leading-relaxed'>
        <div>
          <h2 className='text-2xl font-semibold mb-2'>Hospitality is All We Do</h2>
          <p>
            At Global Hospitality, hospitality is not just an industry—it’s our entire focus. Our
            team consists of professionals who began their careers in hospitality itself—as general
            managers, food and beverage directors, chefs, and other key management leaders. Many of
            our consultants hold degrees from renowned hotel schools. This insider experience allows
            us to understand your requirements deeply and deliver solutions rooted in real-world
            knowledge.
          </p>
        </div>

        <div>
          <h2 className='text-2xl font-semibold mb-2'>Real Results</h2>
          <p>
            Since 1992, Global Hospitality has helped leading firms in every sector of the
            hospitality industry find and secure exceptional talent. Our exclusive search approach
            means we are fully committed to each client and each role. Our mission is simple:
            identify and deliver top-tier candidates who make a measurable impact on your long-term
            success.
          </p>
        </div>

        <div>
          <h2 className='text-2xl font-semibold mb-2'>Global Reach</h2>
          <p>
            Our international reach sets us apart. With offices and partnerships around the globe,
            we are able to execute fast, comprehensive searches tailored to your needs—whether
            local, regional, national, or international. We leverage a vast proprietary database,
            trusted industry networks, and decades of experience to get ahead and stay ahead.
          </p>
        </div>

        <div>
          <h2 className='text-2xl font-semibold mb-2'>Unshakeable Integrity</h2>
          <p>
            Our most valuable asset is our reputation for honesty and integrity. We consider
            ourselves an extension of each client’s team, and we operate with the highest ethical
            standards. We never compromise the trust placed in us.
          </p>
        </div>
      </div>

      <div className='mt-16 border-t pt-10'>
        <blockquote className='italic text-gray-600 text-center max-w-3xl mx-auto'>
          “I LOVE Aimee! She and I think so much alike that I think we must be related. I dread it
          when I will probably get that envelope telling me what a great time she has had working
          for me BUT … time to move on. My first call will be to you for sure!”
        </blockquote>
        <p className='text-center mt-4 font-medium'>– Shirlee G.</p>
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

export default About;
