import React from 'react';
import { Helmet } from 'react-helmet-async';

const clients = [
  { name: 'Four Seasons', domain: 'fourseasons.com' },
  { name: 'Hilton', domain: 'hilton.com' },
  { name: 'Marriott', domain: 'marriott.com' },
  { name: 'Hyatt', domain: 'hyatt.com' },
  { name: 'Harvard University', domain: 'harvard.edu' },
  { name: 'Stanford University', domain: 'stanford.edu' },
  { name: 'Mandarin Oriental', domain: 'mandarinoriental.com' },
  { name: 'Fairmont Hotels', domain: 'fairmont.com' },
  { name: 'Dorchester Collection', domain: 'dorchestercollection.com' },
  { name: 'Langham Hotels', domain: 'langhamhotels.com' },
  { name: 'Club Med', domain: 'clubmed.us' },
  { name: 'Aman Resorts', domain: 'amanresorts.com' },
  { name: 'Alaskan Dream Cruises', domain: 'alaskandreamcruises.com' },
  { name: 'Andina Restaurant', domain: 'andinarestaurant.com' },
  { name: 'Annandale Golf Club', domain: 'annandalegolf.com' },
  { name: 'Arizona Biltmore', domain: 'arizonabiltmore.com' },
  { name: 'Atlantific Hotels', domain: 'atlific.com' },
  { name: 'Atlantis Bahamas', domain: 'atlantisbahamas.com' },
  { name: 'Bahia Principe', domain: 'bahia-principe.com' },
  { name: 'Bel-Air Bay Club', domain: 'belairbayclub.com' },
  { name: 'Belcampo Belize', domain: 'belcampobz.com' },
  { name: 'Bice San Diego', domain: 'bicesandiego.com' },
  { name: 'Big Canyon Country Club', domain: 'bigcanyoncc.org' },
  { name: 'CBS Corporation', domain: 'cbscorporation.com' },
  { name: 'Calistoga Ranch', domain: 'calistogaranch.aubergeresorts.com' },
  { name: 'Commerce Casino', domain: 'commercecasino.com' },
  { name: 'Del Paso Country Club', domain: 'delpasocc.org' },
  { name: 'Duke University', domain: 'duke.edu' },
  { name: 'El Monte Sagrado', domain: 'elmontesagrado.com' },
  { name: 'Emeril’s Restaurants', domain: 'emerilsrestaurants.com' },
  { name: 'Enchantment Resort', domain: 'enchantmentresort.com' },
  { name: 'Etihad Airways', domain: 'etihad.com' },
  { name: 'Glen Ivy Hot Springs', domain: 'glenivy.com' },
  { name: 'Great Wolf Lodge', domain: 'greatwolf.com' },
  { name: 'HCC Los Angeles', domain: 'hcc-la.com' },
  { name: 'Half Moon', domain: 'halfmoon.rockresorts.com' },
  { name: 'Hard Rock Hotel San Diego', domain: 'hardrockhotelsd.com' },
  { name: 'Iowa State University', domain: 'iastate.edu' },
  { name: 'La Quinta Resort', domain: 'laquintaresort.com' },
  { name: 'La Tennis Club', domain: 'latennisclub.com' },
  { name: 'Lawry’s', domain: 'lawrysonline.com' },
  { name: 'Los Poblanos', domain: 'lospoblanos.com' },
  { name: 'Madison Club', domain: 'madisonclubca.com' },
  { name: 'Maple Leafs', domain: 'mapleleafs.nhl.com' },
  { name: 'Meadowood Napa Valley', domain: 'meadowood.com' },
  { name: 'Millennium Hotels', domain: 'millenniumhotels.com' },
  { name: 'Multnomah Athletic Club', domain: 'themac.com' },
  { name: 'Ojai Valley Inn', domain: 'ojairesort.com' },
  { name: 'Omni Hotels', domain: 'omnihotels.com' },
  { name: 'Paradise Point Resort', domain: 'paradisepoint.com' },
  { name: 'RIU Hotels', domain: 'riu.com' },
  { name: 'Rational AG', domain: 'rational-online.com' },
  { name: 'Riviera Country Club', domain: 'therivieracountryclub.com' },
  { name: 'Rouge Tomate', domain: 'rougetomate.com' },
  { name: 'San Ysidro Ranch', domain: 'sanysidroranch.com' },
  { name: 'Sherwood Country Club', domain: 'sherwoodcountryclub.com' },
  { name: 'Shore Lodge', domain: 'shorelodge.com' },
  { name: 'Sofitel', domain: 'sofitel.com' },
  { name: 'Squaw Creek Resort', domain: 'squawcreek.com' },
  { name: 'Standard Hotels', domain: 'standardhotels.com' },
  { name: 'Starwood Hotels', domain: 'starwoodhotels.com' },
  { name: 'TAG Restaurant Group', domain: 'tag-restaurant.com' },
  { name: 'The American Club Resort', domain: 'americanclubresort.com' },
  { name: 'The Blennerhassett Hotel', domain: 'theblennerhassett.com' },
  { name: 'The Capital Group', domain: 'thecapitalgroup.com' },
  { name: 'The Hollywood Roosevelt', domain: 'thehollywoodroosevelt.com' },
  { name: 'The Madison Club', domain: 'madisonclubca.com' },
  { name: 'Toronto Blue Jays', domain: 'toronto.bluejays.mlb.com' },
  { name: 'Turneffe Island Resort', domain: 'turnefferesort.com' },
  { name: 'Universal Studios Hollywood', domain: 'universalstudioshollywood.com' },
  { name: 'University of San Diego', domain: 'sandiego.edu' },
  { name: 'University of West Georgia', domain: 'westga.edu' },
  { name: 'Valley Hunt Club', domain: 'valleyhuntclub.com' },
  { name: 'Wedgewood Weddings', domain: 'wedgewoodweddings.com' },
  { name: 'Windjammer Landing', domain: 'windjammer-landing.com' },
  { name: 'Yellowstone Club', domain: 'yellowstoneclub.com' },
];

function ClientList() {
  return (
    <main className='bg-white text-gray-800 px-6 py-20 max-w-6xl mx-auto font-body'>
      <Helmet>
        <title>Our Clients | Trusted Hospitality Recruiters | Global Hospitality</title>
        <meta
          name='description'
          content='Explore the prestigious hotel brands, casinos, universities, and private clubs that trust Global Hospitality for executive search and hospitality recruitment services.'
        />
        <meta
          name='keywords'
          content='hospitality recruitment clients, hotel executive search, casino staffing partners, university hospitality hiring, luxury hospitality clients'
        />
        <meta property='og:title' content='Our Clients | Global Hospitality Executive Search' />
        <meta
          property='og:description'
          content='See why global brands like Four Seasons, Hilton, Harvard, and Commerce Casino rely on Global Hospitality to recruit their leadership talent.'
        />
        <meta property='og:url' content='https://globalhospitality.com/clients' />
        <link rel='canonical' href='https://globalhospitality.com/clients' />
      </Helmet>

      <section aria-labelledby='clients-header'>
        <header className='text-center mb-10'>
          <h1 id='clients-header' className='text-4xl font-serif font-bold text-brand-primary mb-6'>
            Our Clients
          </h1>
          <p className='text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto'>
            Global Hospitality is proud to partner with many of the world’s most respected
            organizations in the hospitality industry. Our clients include top-tier hotel brands,
            luxury resorts, casinos, universities, private clubs, and food service operations across
            the globe.
          </p>
        </header>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center'>
          {clients.map((client, index) => (
            <article
              key={index}
              className='flex flex-col items-center text-center p-4'
              aria-label={`Client: ${client.name}`}>
              <img
                src={`https://logo.clearbit.com/${client.domain}`}
                alt={`${client.name} logo`}
                className='h-20 object-contain grayscale hover:grayscale-0 transition duration-300'
                loading='lazy'
              />
              <span className='mt-2 text-sm font-medium text-gray-700'>{client.name}</span>
            </article>
          ))}
        </div>

        <div className='mt-16 border-t pt-10 text-center'>
          <blockquote className='italic text-gray-600 max-w-3xl mx-auto'>
            “Thank you so much Terry – it was a pleasure to work with you again. I have always
            appreciated and admired the quality you bring in presenting candidates to us. With our
            growth, don’t be surprised if I reach out to you for assistance again in the near
            future!”
          </blockquote>
          <p className='mt-4 font-medium'>– Tracy W.</p>
        </div>

        <div className='flex justify-center gap-4 mt-12'>
          <a
            href='/proposal'
            className='bg-brand-primary text-white px-6 py-3 rounded-full hover:bg-brand-primary/80 transition'>
            Request for Proposal
          </a>
          <a
            href='/contact'
            className='border border-brand-primary text-brand-primary px-6 py-3 rounded-full hover:bg-brand-primary hover:text-white transition'>
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}

export default ClientList;
