import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Punetoshrivardhancab() {


const cardData = {
keyword: "Pune to Shrivardhan Cab",
headingDescription: "Pune to Shrivardhan Cab provides convenient private transportation for travelers heading from Pune to the scenic Konkan coastal destination of Shrivardhan. The journey can be arranged as a direct cab, round trip, beach tour, family holiday, or customized Konkan sightseeing itinerary. Citysky Cabs offers vehicle options such as Ertiga and Innova Crysta for families and groups who need comfortable seating and luggage space. Travelers can also extend their trip to nearby Harihareshwar, Ganpatipule, Ratnagiri, Sawantwadi, and other Konkan destinations according to their preferred route, travel duration, and sightseeing plans.",
topPlaces: [
{
title: "Shrivardhan",
description: "Shrivardhan is a peaceful Konkan coastal destination known for its beaches, temples, scenic surroundings, and relaxed holiday atmosphere. A private cab from Pune provides convenient road transportation for families, couples, and groups planning a beach getaway or extended Konkan trip."
},
{
title: "Shrivardhan Beach",
description: "Shrivardhan Beach is a popular coastal attraction offering a scenic setting for visitors looking to enjoy the Konkan shoreline. Travelers can arrange a private cab from Pune and combine the beach with nearby temples, viewpoints, local attractions, and accommodation."
},
{
title: "Harihareshwar",
description: "Harihareshwar is a prominent coastal pilgrimage destination located near Shrivardhan and is known for its temple and beautiful sea-facing surroundings. It can be easily included in a Pune to Shrivardhan itinerary, making it suitable for a combined beach and religious trip."
},
{
title: "Harihareshwar Beach",
description: "Harihareshwar Beach provides a scenic coastal stop for travelers exploring the Shrivardhan and Harihareshwar region. A private vehicle allows visitors to combine the beach with temple visits and other Konkan attractions without depending on local transport."
},
{
title: "Ganpatipule",
description: "Ganpatipule is a well-known Konkan destination associated with the revered Swayambhu Ganpati Temple and its coastal surroundings. Travelers planning an extended Konkan journey can combine Ganpatipule with Shrivardhan and other coastal destinations."
},
{
title: "Ratnagiri",
description: "Ratnagiri is an important coastal city with beaches, historical attractions, temples, and scenic Konkan landscapes. It can be included in a longer private cab itinerary for travelers exploring Shrivardhan and the wider Konkan coastline."
},
{
title: "Sawantwadi",
description: "Sawantwadi is a cultural and scenic destination in southern Konkan known for its heritage, local handicrafts, and surrounding natural beauty. Travelers planning a longer Konkan tour can include Sawantwadi along with coastal destinations such as Shrivardhan and Ratnagiri."
},
{
title: "Diveagar",
description: "Diveagar is a popular beach destination close to Shrivardhan and is well suited for travelers looking for a relaxed coastal holiday. A private cab makes it convenient to combine Diveagar with Shrivardhan and Harihareshwar in a single Konkan itinerary."
},
{
title: "Bagmandla",
description: "Bagmandla is a scenic coastal area near Harihareshwar and Shrivardhan that can be included in a relaxed Konkan sightseeing route. Travelers using a private cab can explore the surrounding coastal locations according to their available travel time."
},
{
title: "Konkan Coast",
description: "The Konkan Coast offers a wide range of beaches, temples, villages, viewpoints, and cultural attractions across Maharashtra. Travelers starting from Pune can create a customized coastal route covering Shrivardhan, Harihareshwar, Diveagar, Ganpatipule, Ratnagiri, and other selected destinations."
}
],
services: [
{
name: "pune to shrivardhan cab booking",
description: "Pune to Shrivardhan cab booking allows travelers to arrange private transportation in advance for their Konkan journey. The service is suitable for families, couples, and groups planning beach holidays, weekend trips, resort stays, or extended coastal sightseeing."
},
{
name: "pune to shrivardhan innova crysta",
description: "Pune to Shrivardhan Innova Crysta provides a spacious private vehicle option for families and groups traveling toward the Konkan coast. The additional seating and luggage space can be useful for multi-day trips involving Shrivardhan, Harihareshwar, Diveagar, and other destinations."
},
{
name: "pune to shrivardhan ertiga car booking",
description: "Pune to Shrivardhan Ertiga car booking provides a practical spacious vehicle for families and medium-sized groups. The cab can be arranged for a direct journey, round trip, beach holiday, or customized Konkan sightseeing itinerary."
},
{
name: "Pune to shrivardhan beach cab",
description: "Pune to Shrivardhan Beach cab provides direct private transportation for travelers visiting the scenic Konkan coastline. It can be arranged for a one-day trip, weekend getaway, family holiday, or extended beach sightseeing tour."
},
{
name: "Pune to shrivardhan beach cab fare",
description: "Pune to Shrivardhan Beach cab fare depends on the selected vehicle, trip type, passenger count, travel duration, and additional destinations included in the itinerary. Travelers can choose a suitable vehicle and plan the journey according to their complete travel requirements."
},
{
name: "pune to shrivardhan beach innova crysta",
description: "Pune to Shrivardhan Beach Innova Crysta provides a spacious travel option for families and groups visiting the coastal region. It is suitable for longer beach holidays where passengers need additional cabin comfort and luggage space."
},
{
name: "pune to shrivardhan beach innova cabs",
description: "Pune to Shrivardhan Beach Innova cabs provide private transportation for families and groups traveling to the Konkan coast. The vehicle can be used for direct beach travel or extended sightseeing covering Harihareshwar, Diveagar, and nearby destinations."
},
{
name: "pune to shrivardhan beach ertiga cabs",
description: "Pune to Shrivardhan Beach Ertiga cabs offer a spacious private vehicle option for medium-sized families and groups. Travelers can arrange the cab for a direct coastal trip, round trip, or customized itinerary with additional sightseeing."
},
{
name: "pune to shrivardhan beach package",
description: "Pune to Shrivardhan Beach package can be customized for travelers planning a coastal holiday from Pune. The itinerary can include private transportation, beach sightseeing, nearby temples, resort transfers, and return travel based on the selected trip duration."
},
{
name: "pune to shrivardhan beach tour package",
description: "Pune to Shrivardhan Beach tour package provides a private travel arrangement for families, couples, and groups exploring the Konkan coastline. The tour can include Shrivardhan Beach, Harihareshwar, Diveagar, and other nearby attractions according to the preferred itinerary."
},
{
name: "pune to harihareshwar cab",
description: "Pune to Harihareshwar cab provides private road transportation to the coastal pilgrimage destination near Shrivardhan. The journey can be arranged as a direct trip or combined with Shrivardhan Beach, Diveagar, and other Konkan attractions."
},
{
name: "pune to harihareshwar cab booking",
description: "Pune to Harihareshwar cab booking allows travelers to organize private transportation before their coastal or pilgrimage journey. Advance planning can be useful for families, temple visits, weekend trips, and itineraries covering multiple Konkan destinations."
},
{
name: "pune to harihareshwar innova crysta",
description: "Pune to Harihareshwar Innova Crysta provides a spacious vehicle for families and groups visiting the Harihareshwar temple and surrounding coastal attractions. It can also be used for extended journeys covering Shrivardhan, Diveagar, and other destinations."
},
{
name: "pune to ganpatipule cabs",
description: "Pune to Ganpatipule cabs provide private transportation for travelers heading toward the famous Konkan temple and coastal destination. The journey can be arranged as a direct trip, round trip, or part of a longer Konkan sightseeing circuit."
},
{
name: "pune to konkan innova cab",
description: "Pune to Konkan Innova cab provides a spacious private vehicle for families and groups exploring multiple coastal destinations. It is suitable for multi-day routes covering Shrivardhan, Harihareshwar, Ganpatipule, Ratnagiri, Sawantwadi, and other Konkan locations."
},
{
name: "pune to mahabaleshwar innova rate",
description: "Pune to Mahabaleshwar Innova rate depends on factors such as trip type, vehicle requirements, travel duration, passenger count, and additional sightseeing or route requirements. Travelers can discuss their complete itinerary to plan an appropriate private cab arrangement."
},
{
name: "pune to konkan darshan cab",
description: "Pune to Konkan Darshan cab provides private transportation for travelers planning to explore multiple destinations along the Maharashtra coastline. The itinerary can be customized with beaches, temples, forts, resorts, and scenic locations according to the number of travel days."
},
{
name: "pune to sawantwadi cab",
description: "Pune to Sawantwadi cab provides private road transportation toward southern Konkan. It is suitable for families and groups planning a longer coastal journey and can be combined with Ratnagiri, Ganpatipule, and other destinations."
},
{
name: "pune to ratnagiri cab price",
description: "Pune to Ratnagiri cab price depends on the selected vehicle category, journey type, passenger count, travel duration, and additional destinations included in the route. Travelers can select a suitable vehicle and plan the trip according to their complete Konkan travel requirements."
}
],
tableData: [
["pune to shrivardhan cab booking"],
["pune to shrivardhan innova crysta"],
["pune to shrivardhan ertiga car booking"],
["Pune to shrivardhan beach cab"],
["Pune to shrivardhan beach cab fare"],
["pune to shrivardhan beach innova crysta"],
["pune to shrivardhan beach innova cabs"],
["pune to shrivardhan beach ertiga cabs"],
["pune to shrivardhan beach package"],
["pune to shrivardhan beach tour package"],
["pune to harihareshwar cab"],
["pune to harihareshwar cab booking"],
["pune to harihareshwar innova crysta"],
["pune to ganpatipule cabs"],
["pune to konkan innova cab"],
["pune to mahabaleshwar innova rate"],
["pune to konkan darshan cab"],
["pune to sawantwadi cab"],
["pune to ratnagiri cab price"]
],
whychoose: [
{
WhyChooseheading: "Direct Shrivardhan Travel",
WhyChoosedescription: "A private cab provides direct transportation from Pune to Shrivardhan, making the coastal journey convenient for families, couples, and groups. Travelers can select a suitable pickup point and plan their arrival according to their accommodation or sightseeing schedule."
},
{
WhyChooseheading: "Comfortable Konkan Journeys",
WhyChoosedescription: "Longer coastal journeys are easier to manage with a dedicated private vehicle where the group can travel together with luggage. Spacious options such as Ertiga and Innova Crysta are suitable for families and groups requiring additional cabin space."
},
{
WhyChooseheading: "Shrivardhan and Harihareshwar Together",
WhyChoosedescription: "Shrivardhan and Harihareshwar can conveniently be combined into the same itinerary for travelers interested in beaches and pilgrimage attractions. A private cab provides flexibility to visit both destinations without arranging separate local transportation."
},
{
WhyChooseheading: "Customized Konkan Routes",
WhyChoosedescription: "Travelers can extend their trip beyond Shrivardhan by adding Diveagar, Ganpatipule, Ratnagiri, Sawantwadi, and other coastal destinations. The route can be adjusted according to the number of days, sightseeing preferences, and group requirements."
},
{
WhyChooseheading: "Suitable for Family Holidays",
WhyChoosedescription: "Private transportation is convenient for families carrying children, senior citizens, luggage, and holiday essentials. The group can remain together throughout the journey while planning suitable breaks and sightseeing stops."
},
{
WhyChooseheading: "Beach Tour Flexibility",
WhyChoosedescription: "A private vehicle makes it easier to include multiple coastal attractions during the same trip. Travelers can plan Shrivardhan Beach, Harihareshwar Beach, Diveagar, and other selected beaches according to their available travel time."
},
{
WhyChooseheading: "Multi-Day Coastal Trips",
WhyChoosedescription: "The cab can be used for short weekend journeys as well as longer Konkan Darshan itineraries. Multi-day travel allows visitors to explore several beaches, temples, resorts, and coastal towns without changing transportation between destinations."
},
{
WhyChooseheading: "Advance Vehicle Booking",
WhyChoosedescription: "Advance booking helps travelers organize a preferred vehicle before starting their journey from Pune. This is useful for weekend holidays, family tours, group travel, beach packages, and extended Konkan routes requiring a spacious private cab."
}
]
};









const faqData = [
{
question: "How do I arrange a Pune to Shrivardhan Cab with Citysky Cabs?",
answer: "To arrange a cab from Pune to Shrivardhan, provide your pickup location, journey date, number of passengers, preferred departure time, luggage details, and whether the trip is one-way or round-trip. Citysky Cabs can coordinate the transportation based on your planned travel schedule."
},
{
question: "Is a cab convenient for travelling from Pune to Shrivardhan?",
answer: "Private cab travel allows passengers to go directly from their Pune pickup point toward Shrivardhan without changing vehicles during the journey. It can be suitable for families, couples, friends, and small groups looking for a flexible way to plan their coastal trip."
},
{
question: "Can I book a one-way taxi from Pune to Shrivardhan?",
answer: "Passengers who only need transportation from Pune to Shrivardhan can enquire about a one-way cab. While making the booking request, mention the exact pickup location, destination, travel date, passenger count, and preferred departure time."
},
{
question: "Does Citysky Cabs provide round-trip cab arrangements for Shrivardhan?",
answer: "Travellers planning to return to Pune after spending time in Shrivardhan can enquire about a round-trip arrangement. This option can be useful for weekend holidays, family visits, beach outings, and short coastal stays where both onward and return transportation are required."
},
{
question: "Can families hire a cab from Pune to Shrivardhan?",
answer: "Families can use a private cab when travelling to Shrivardhan with children, elderly relatives, or holiday luggage. Travelling in one dedicated vehicle allows the group to coordinate departure times, breaks, and the return journey more easily."
},
{
question: "Can I travel to Shrivardhan by cab for a weekend trip?",
answer: "A Pune to Shrivardhan cab can be considered for short weekend getaways as well as longer coastal holidays. Travellers can discuss their preferred departure and return schedule while sharing details about accommodation, passenger count, and any sightseeing plans."
},
{
question: "Can I visit nearby places during a Pune to Shrivardhan cab trip?",
answer: "Travellers interested in exploring nearby coastal attractions can discuss additional stops while planning their cab journey. Mention the places you want to include, along with the expected trip duration, so the itinerary can be coordinated around the planned route."
},
{
question: "Is Pune to Shrivardhan Cab suitable for senior citizens?",
answer: "For families travelling with senior citizens, a private vehicle can make the journey easier to coordinate because the group can travel together without changing transport modes. Any specific requirements related to travel breaks, luggage, or the planned schedule should be shared when arranging the cab."
},
{
question: "Can a group of friends book a Pune to Shrivardhan Cab?",
answer: "Friends and small groups can enquire about a private cab for a Shrivardhan trip. A dedicated vehicle can help the group manage luggage, departure timings, planned stops, and return travel without having to coordinate separate transportation for each passenger."
},
{
question: "What information should I provide when booking a Pune to Shrivardhan Cab?",
answer: "For a smooth booking enquiry, share your Pune pickup point, Shrivardhan destination, journey date, passenger count, luggage requirements, preferred departure time, and one-way or return-trip preference. Citysky Cabs can then plan the cab arrangement according to the details of your journey."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Rohit Bhosale",
feedback:
"A group of us planned a weekend trip to Shrivardhan from Pune and wanted to travel together instead of arranging separate transport. Citysky Cabs arranged the cab according to our pickup and travel details. The private vehicle gave us enough flexibility to manage our luggage and planned stops during the trip.",
rating: 5
},
{
id: 2,
name: "Miss. Priya Sawant",
feedback:
"We were travelling to Shrivardhan with our parents for a short coastal holiday, so we preferred a direct cab from Pune. Citysky Cabs coordinated the journey after we shared our travel schedule. Having one vehicle for the family made the trip easier to organize, especially with luggage and regular breaks along the way.",
rating: 5
}
];


















    const Images = [

    { place: "/images/keyword/1.jpg", text: "Innova Crysta Cab in Pune", link: "innova-crysta-cab-in-pune" },

    { place: "/images/keyword/2.jpg", text: "Innova Crysta On Rent in Pune", link: "innova-crysta-on-rent-in-pune" },

    { place: "/images/keyword/3.jpg", text: "Innova Crysta Cabs / Taxi Booking in Pune", link: "innova-crysta-cabs-taxi-booking-in-pune" },

    { place: "/images/keyword/4.jpg", text: "Pune to Mahabaleshwar Innova Crysta Cab", link: "pune-to-mahabaleshwar-innova-crysta-cab" },

    { place: "/images/keyword/5.jpg", text: "Book Innova Crysta for Outstation From Pune", link: "book-innova-crysta-for-outstation-from-pune" },

    { place: "/images/keyword/6.jpg", text: "Innova Crysta Cabs for Pune Airport", link: "innova-crysta-cabs-for-pune-airport" },

    { place: "/images/keyword/7.jpg", text: "Pune to Mumbai Airport Innova Crysta", link: "pune-to-mumbai-airport-innova-crysta" },

    { place: "/images/keyword/8.jpg", text: "Innova Crysta Cab for Corporate Office", link: "innova-crysta-cab-for-corporate-office" },

    { place: "/images/keyword/9.jpg", text: "Mumbai Airport to Pune Innova Crysta Cabs", link: "mumbai-airport-to-pune-innova-crysta-cabs" },

    { place: "/images/keyword/10.jpg", text: "Pune to Shirdi Innova Crysta", link: "pune-to-shirdi-innova-crysta" },

    { place: "/images/keyword/11.jpg", text: "Pune Aurangabad Innova Crysta Cab Service", link: "pune-aurangabad-innova-crysta-cab-service" },

    { place: "/images/keyword/12.jpg", text: "Pune to Goa Innova Crysta Cab", link: "pune-to-goa-innova-crysta-cab" },

    { place: "/images/keyword/13.jpg", text: "Pune to Bangalore Innova Crysta Cab", link: "pune-to-bangalore-innova-crysta-cab" },

    { place: "/images/keyword/14.jpg", text: "Pune to Hyderabad Innova Crysta Rental Cab", link: "pune-to-hyderabad-innova-crysta-rental-cab" },

    { place: "/images/keyword/15.jpg", text: "Innova Crysta on Rent in Pune", link: "innova-crysta-on-rent-in-pune-2" },

    { place: "/images/keyword/16.jpg", text: "Pune to Lavasa Innova Crysta Cab Booking", link: "pune-to-lavasa-innova-crysta-cab-booking" },

    { place: "/images/keyword/17.jpg", text: "Pune Darshan Innova Crysta Cabs", link: "pune-darshan-innova-crysta-cabs" },

    { place: "/images/keyword/18.jpg", text: "Innova Crysta Cabs in Pune", link: "innova-crysta-cabs-in-pune" },

    { place: "/images/keyword/19.jpg", text: "Innova Car Rental In Pune", link: "innova-car-rental-in-pune" },

    { place: "/images/keyword/20.jpg", text: "Innova Taxi Service in Pune", link: "innova-taxi-service-in-pune" },

    { place: "/images/keyword/21.jpg", text: "Book Innova for Outstation Pune", link: "book-innova-for-outstation-pune" },

    { place: "/images/keyword/22.jpg", text: "Innova Crysta On Rent In Pune", link: "innova-crysta-on-rent-in-pune-3" },

    { place: "/images/keyword/23.jpg", text: "Pune to Mahabaleshwar Panchgani Innova Crysta Cabs", link: "pune-to-mahabaleshwar-panchgani-innova-crysta-cabs" },

    { place: "/images/keyword/24.jpg", text: "Pune to Outstation Innova Crysta Booking", link: "pune-to-outstation-innova-crysta-booking" },

    { place: "/images/keyword/25.jpg", text: "Innova Crysta on Rent in Pune", link: "innova-crysta-on-rent-in-pune-4" },


];











const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Pune to Shrivardhan Cab",
  "image": "https://www.cityskycab.in/assets/images/pune-to-shrivardhan-cab.webp",
  "description": "Pune to Shrivardhan Cab from Citysky Cabs is a convenient private travel option for families, couples, groups and weekend travellers planning a coastal trip from Pune to Shrivardhan. The service covers Pune to Shrivardhan Cab Booking, Innova Crysta, Ertiga Car Booking and Shrivardhan Beach Cab requirements. Travellers can select a suitable vehicle according to the number of passengers, luggage and trip duration, with spacious options such as Innova Crysta and Ertiga available for comfortable outstation travel. Private cab journeys can be planned for Shrivardhan Beach, nearby coastal attractions, family holidays, weekend getaways and sightseeing tours. Citysky Cabs supports flexible pickup and drop locations across Pune and offers one-way and round-trip cab options for travellers looking for a comfortable road journey to Shrivardhan and nearby Konkan destinations.",
  "brand": {
    "@type": "Brand",
    "name": "Citysky Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "8517"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Starting From ₹12/Km",
    "availability": "https://schema.org/InStock",
    "url": "https://www.cityskycab.in/pune-to-shrivardhan-cab"
  }
};






    return (
        <div>


<Helmet>
  <title>
    Pune to Shrivardhan Cab | Beach Taxi, Innova Crysta & Ertiga | +91 9272112191 
  </title>

  <meta
    name="description"
    content="Pune to Shrivardhan Cab by Citysky Cabs for beach trips, family tours and outstation travel. Book Innova Crysta or Ertiga for one-way and round-trip journeys from Pune."
  />

  <meta
    name="keywords"
    content="Pune to Shrivardhan Cab, Pune to Shrivardhan cab booking, Pune to Shrivardhan Innova Crysta, Pune to Shrivardhan Ertiga car booking, Pune to Shrivardhan beach cab, Pune to Shrivardhan taxi, Pune Shrivardhan cab service, Pune to Shrivardhan car rental, Pune Shrivardhan taxi service, Pune to Shrivardhan private cab, Pune to Shrivardhan one way cab, Pune to Shrivardhan round trip cab, Pune Shrivardhan cab fare, Pune to Shrivardhan taxi fare, Pune Shrivardhan car hire, Pune to Shrivardhan Innova cab, Pune Shrivardhan Ertiga cab, Innova Crysta from Pune to Shrivardhan, Ertiga from Pune to Shrivardhan, Pune to Shrivardhan AC cab, Pune to Shrivardhan outstation cab, Pune to Shrivardhan family cab, Pune Shrivardhan beach trip, Pune to Shrivardhan tour package, Pune Shrivardhan weekend trip cab, Pune to Shrivardhan sightseeing cab, Pune to Shrivardhan Konkan cab, Pune Shrivardhan return cab, Shrivardhan to Pune cab, Shrivardhan to Pune taxi, Shrivardhan to Pune car rental"
  />

  <script type="application/ld+json">
    {JSON.stringify(productSchema)}
  </script>
</Helmet>


            <div className="sisf-banner sis-br-radius mt-3 position-relative">
                <div className="banner-img">
                    <figure>
                      {/* <img
                            src="/images/page-banner.jpg"
                            alt="Mauliwala Travels Urbania and Mini Bus Rental Pune"
                        /> */}
                    </figure>
                </div>

                <div className="sisf-page-title sisf-m sisf-title--standard sisf-alignment--center">
                    <div className="sisf-m-inner container">
                        <div className="sisf-m-content sisf-content-grid">
                            <h1 className="sisf-m-title text-white sis-text-anime-style-3 entry-title">
                                {cardData.keyword}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>














            <section>
                <div className="container-fluid p-0" >
                    <div className="row container-fluid px-md-2">
                        <div className="col-12 col-md-7 bg-foootr">
                            <img src='/images/keyword/78.jpg' alt='img' className='img-fluid' />
                            <h3 className="py-1"
                                style={{
                                    color: '#183765', // Red color for the title 
                                    textShadow: '5px 5px 10px rgba(255, 255, 255, 0.7)', // Light shadow effect
                                    fontWeight: 'bold'
                                }}


                            >Citysky Cabs: {cardData.keyword} </h3><p className='fw-bold '>{cardData.headingDescription}</p>

                            <div className="topPlaces">

                                <p className="sectionLead">Top Places to visit from {cardData.keyword} </p>
                                {cardData.topPlaces.map((place, index) => (
                                    <article key={index} className="placeCard borderr" tabIndex="0">
                                        <span className="placeBadge">{String(index + 1).padStart(2, "0")}</span>

                                        <div className="placeBody">
                                            <h4 className="placeTitle">{place.title}</h4>
                                            <p className="placeDesc">{place.description}</p>

                                        </div>

                                        <span className="placeArrow" aria-hidden>›</span>
                                    </article>
                                ))}
                            </div>





                            <div className="services-section">
                                {cardData.services.map((service, index) => (
                                    <div className="service-card" key={index}>
                                        <div className="service-content">
                                            <h4>{service.name}</h4>
                                            <span className="line"></span>
                                            <p>{service.description}</p>
                                        </div>

                                        <div className="service-icon">
                                            <i className="fas fa-arrow-right"></i>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="keyword-grid">
                                {cardData.tableData.flat().map((keyword, index) => (
                                    <div key={index} className="keyword-item">
                                        <span className="keyword-bullet">-</span>
                                        {keyword}
                                    </div>
                                ))}
                            </div>



                            <div id="why-choose-section" className="why-choose-section">

                                <h2 className="section-title text-dark">
                                    Why Choose <span>Citysky Cabs</span>
                                </h2>

                                <div className="bento-grid">
                                    {cardData.whychoose.map((item, index) => (
                                        <div className="bento-card" key={index}>

                                            <div className="bento-number">
                                                {String(index + 1).padStart(2, "0")}
                                            </div>

                                            <h4>{item.WhyChooseheading}</h4>

                                            <p>{item.WhyChoosedescription}</p>

                                        </div>
                                    ))}
                                </div>

                            </div>



                            <div className="row twm-faq-section-1 m-b30">


                                <div className=" col-md-12 wow fadeInDown" data-wow-delay="0.2">
                                    <div className="twm-faq-info-wrap">

                                        <div className="section-head left">
                                            <h2 className="twm-large-title site-text-dark">FAQS {cardData.keyword} For Citysky Cabs</h2>
                                        </div>


                                        <div className="twm-faq-info">
                                            <div className="accordion twm-acdn" id="sf-faq-accordion">

                                                <FaqSection
                                                    title=""
                                                    subtitle=""
                                                    items={faqData}
                                                />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <TestimonialSectionKeyword
                                testimonials={testimonials}
                            />


                            <ContactShowcase keyword={cardData.keyword} />
                        </div>

                        <div className='col-12 col-md-4' >
                            <div className="routeList">
                                {Images.map((e, i) => {
                                    const isExternal = typeof e.link === "string" && /^https?:\/\//i.test(e.link);
                                    const href = isExternal ? e.link : `/${String(e.link || "").replace(/^\/+/, "")}`;

                                    return (
                                        <a
                                            key={e.link || i}
                                            href={href}
                                            className="routeItem"
                                            aria-label={e.text}
                                            {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                        >
                                            <div className="routeThumb">
                                                <img src={e.place} alt="" loading="lazy" />
                                            </div>

                                            <div className="routeMeta">
                                                <h6 className="routeTitle">{e.text}</h6>
                                                <span className="routeUnderline" />
                                            </div>

                                            <span className="routeArrow" aria-hidden>›</span>
                                        </a>
                                    );
                                })}
                            </div>




                            <div>
                                <FleetHighway />
                            </div>
                            <div className="pc-contact">
                                <h4 className="pc-title">Contact Information</h4>

                                <div className="pc-grid">
                                    {/* Phones */}
                                    <section className="pc-tile">
                                        <header className="pc-tile-head">
                                            <i className="fas fa-phone-alt"></i>
                                            <span>Phone Numbers</span>
                                        </header>

                                        

                                        <div className="pc-list">
                                            <a href="tel:+919272112191 " className="pc-call">+91 9272112191 </a>
                                        </div>
                                        <div className="pc-list">
                                            <a href="tel:+918459883515" className="pc-call">+91 8459883515 </a>
                                        </div>
                                        <div className="pc-cta">
                                            <a
                                                href="https://wa.me/918459883515
"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="pc-whats"
                                            >
                                                <i className="bi bi-whatsapp"></i> WhatsApp
                                            </a>
                                            <a href="tel:+918459883515" className="pc-primary">
                                                Call Now
                                            </a>
                                        </div>
                                    </section>

                                    {/* Email */}
                                    <section className="pc-tile">
                                        <header className="pc-tile-head">
                                            <i className="fa-solid fa-envelope"></i>
                                            <span>Email</span>
                                        </header>

                                        <a href="mailto:booking@cityskycab.in" className="pc-email">
                                            booking@cityskycab.in
                                        </a>
                                    </section>

                                    {/* Address */}
                                    <section className="pc-tile">
                                        <header className="pc-tile-head">
                                            <i className="fa-solid fa-location-dot"></i>
                                            <span>Address</span>
                                        </header>

                                        <address className="pc-address">
                                            <strong>Citysky Cabs</strong><br />

                                            Office No,307,3rd Floor,
                                            52, Sinhgad Rd, Wadgaon Budruk,
                                            Narhe, Pune, Maharashtra,India- 411041.






                                        </address>
                                    </section>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default Punetoshrivardhancab;