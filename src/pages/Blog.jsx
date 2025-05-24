import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    title: 'What’s in a name?',
    author: '',
    excerpt:
      'We are all in the name business, it is the core of what makes a club a club. We all think that our staff use',
    path: '#',
  },
  {
    title: 'Get Engaged (Part II)',
    author: 'By Brian Marcus',
    excerpt:
      'Last blog we covered Staff Engagement and the Divisional Forum. This blog takes another best practice that worked for me',
    path: '#',
  },
  {
    title: 'Get Engaged (Part I)',
    author: 'By Brian Marcus',
    excerpt:
      'Employee satisfaction means nothing anymore. It is just not enough to have satisfied or even very satisfied staff; everyone does!',
    path: '#',
  },
  {
    title: 'Get read…',
    author: 'By Brian Marcus',
    excerpt:
      'In our offices we see thousands of resumes; everything from the good to the bad to the ugly! So, what makes a',
    path: '#',
  },
  {
    title: 'Scheduling a Millennial',
    author: 'By Brian Marcus',
    excerpt:
      'I remember when I was just starting out in my career, every two weeks I would check the hand-written schedule with red',
    path: '#',
  },
  {
    title: 'Your Resume…Does It Have The Right Stuff?',
    author: 'By Eden Slegr, President, Global Hospitality, Inc.',
    excerpt:
      'In the world of executive recruitment, a resume should make us want to get on the phone and',
    path: '#',
  },
  {
    title: 'Telephone Interview Tips',
    author: 'By Eden Slegr, President, Global Hospitality, Inc.',
    excerpt:
      'If you are actively job searching, be prepared for a phone interview at a moment’s notice! You never',
    path: '#',
  },
  {
    title: 'The Best Interview Tips',
    author: 'By Eden Slegr, President, Global Hospitality',
    excerpt:
      'You’ve finally landed an interview with the company of your dreams! Here’s how to make a great first impression!',
    path: '#',
  },
];

function Blog() {
  return (
    <section className='bg-white text-gray-800 px-6 py-20 max-w-5xl mx-auto'>
      <h1 className='text-4xl font-serif font-bold text-brand mb-10 text-center'>
        Global Hospitality Blog
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className='bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition'>
            <h2 className='text-xl font-semibold mb-2'>{post.title}</h2>
            {post.author && <p className='text-sm text-gray-600 mb-2 italic'>{post.author}</p>}
            <p className='text-gray-700 text-sm mb-4'>{post.excerpt}...</p>
            <Link to={post.path} className='text-brand font-medium hover:underline'>
              Read More »
            </Link>
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

export default Blog;
