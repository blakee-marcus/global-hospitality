import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const jobCategories = [
  {
    title: 'C-level Hospitality Positions',
    roles: ['CEO', 'CFO', 'CIO', 'President', 'Senior Operations Corporate', 'Asset Manager'],
  },
  {
    title: 'Operations',
    roles: [
      'Regional/Multi-Unit General Manager',
      'General Manager',
      'Assistant General Manager',
      'Clubhouse Manager',
    ],
  },
  {
    title: 'Finance',
    roles: [
      'Corporate Controller',
      'Director of Finance',
      'Controller',
      'Assistant Controller',
      'Senior Accountant',
      'Credit Manager',
      'Director of Revenue Management',
      'Revenue Manager',
      'Asset Manager/VP Asset Management',
      'Feasibility Director',
      'Regional Financial Analyst',
      'Corporate Director of Purchasing',
      'Director of Purchasing',
      'Systems Director',
      'IT Director',
    ],
  },
  {
    title: 'Rooms',
    roles: [
      'Director of Rooms',
      'Front Office Manager',
      'Reservations Manager',
      'Concierge',
      'Activities Director',
      'Director of Housekeeping',
      'Director of Engineering',
      'VP of Engineering Technical Services',
      'Project Manager',
    ],
  },
  {
    title: 'Food & Beverage',
    roles: [
      'Director of Food and Beverage',
      'Assistant Director of Food & Beverage',
      'Restaurant General Manager',
      'Banquet Manager/Director',
      'Beverage Manager/Director',
      'Sommelier',
      'Catering Director',
      'Catering Sales Manager',
    ],
  },
  {
    title: 'Culinary',
    roles: [
      'Corporate Chef',
      'Executive Chef',
      'Executive Sous Chef',
      'Sous Chef',
      'Chef de Cuisine',
      'Chef de Partie',
      'Personal Chef',
      'Steward',
      'Restaurant Chef',
      'Kitchen Manager',
      'Production Chef',
      'Banquet Chef',
      'Pastry Chef',
    ],
  },
  {
    title: 'Human Resources',
    roles: [
      'Director of Human Resources',
      'Regional Director of Human Resources',
      'Recruiter',
      'Training Manager',
    ],
  },
  {
    title: 'Sales & Marketing',
    roles: [
      'Director of Sales & Marketing',
      'Director of Sales',
      'Director of Marketing',
      'Sales Managers',
      'PR',
      'Special Events Coordinator',
    ],
  },
  {
    title: 'Spa',
    roles: ['Corporate Spa Director', 'Spa Director', 'Assistant Spa Director'],
  },
  {
    title: 'Estate Positions',
    roles: ['Personal Chef', 'Estate Manager'],
  },
  {
    title: 'Condos & Association Management',
    roles: ['General Manager', 'Multi-Property Management'],
  },
  {
    title: 'University/College Campus Food Service',
    roles: [
      'Director of Food Services',
      'Director of Dining Services/Food Services',
      'Executive Chef',
      'Catering/Banquet Chef',
    ],
  },
  {
    title: 'Gaming/Casino',
    roles: ['Gaming Dealers', 'Gaming Associates'],
  },
];

function JobSearch() {
  return (
    <main className='bg-white text-gray-800 px-6 py-20 max-w-6xl mx-auto font-body'>
      <Helmet>
        <title>Hospitality Jobs We Recruit | Global Hospitality Executive Search</title>
        <meta
          name='description'
          content='Explore the hospitality management jobs Global Hospitality recruits for—from executive chef to general manager, hotel operations, finance, HR, marketing, and more.'
        />
        <meta
          name='keywords'
          content='hospitality jobs, hospitality executive search, hotel general manager jobs, executive chef jobs, resort management careers, restaurant recruiter, casino hospitality careers'
        />
        <meta property='og:title' content='Hospitality Positions We Recruit | Global Hospitality' />
        <meta
          property='og:description'
          content='View a comprehensive list of hospitality roles we specialize in recruiting—from C-suite to operations, culinary, F&B, HR, sales, and beyond.'
        />
        <meta property='og:url' content='https://globalhospitality.com/job-search' />
        <link rel='canonical' href='https://globalhospitality.com/job-search' />
      </Helmet>

      <section aria-labelledby='positions-heading'>
        <h1
          id='positions-heading'
          className='text-4xl font-heading font-bold text-brand-primary mb-10 text-center'>
          Positions We Recruit
        </h1>

        <div className='text-lg leading-relaxed space-y-6'>
          <p>
            Global Hospitality is a specialized executive search firm focused solely on the
            hospitality industry. From C-level executives to departmental directors, we recruit top
            talent for hotels, resorts, clubs, restaurants, casinos, and more.
          </p>
          <p>
            With offices in Los Angeles and Toronto, we conduct confidential searches for a wide
            range of management and leadership roles. Many high-level positions are never publicly
            posted to ensure discretion.
          </p>
          <p className='font-medium text-brand-primary'>
            The following list includes examples of positions we regularly recruit for:
          </p>
        </div>

        <div className='mt-10 space-y-10'>
          {jobCategories.map((cat, index) => (
            <div key={index}>
              <h2 className='text-2xl font-semibold text-brand-primary mb-2'>{cat.title}</h2>
              <ul className='list-disc list-inside text-sm text-gray-700 space-y-1'>
                {cat.roles.map((role, i) => (
                  <li key={i}>{role}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='mt-16 border-t pt-10 text-center'>
          <blockquote className='italic text-gray-600 max-w-3xl mx-auto'>
            “The Briars acquired an Executive Chef through Global Hospitality Search. It was
            necessary for their representatives to go and seek the appropriate candidate on our
            behalf. We have been most satisfied with the results. We would like to mention the
            transaction was handled with integrity and fairness, and we will certainly use this
            company’s services in the future.”
          </blockquote>
          <p className='mt-4 font-medium'>– Barbara S.</p>
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

export default JobSearch;
