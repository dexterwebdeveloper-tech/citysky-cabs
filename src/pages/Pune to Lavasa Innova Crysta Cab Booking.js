import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Punetolavasainnova() {



const cardData = {
keyword: "Pune to Lavasa Innova Crysta Cab Booking",
headingDescription: "Pune to Lavasa Innova Crysta Cab Booking provides a comfortable private travel option for families, friends, tourists, and groups planning a scenic trip from Pune to Lavasa. The spacious Innova Crysta is suitable for weekend holidays, one-day trips, sightseeing, family tours, and round-trip journeys, offering comfortable seating, air conditioning, and useful luggage space for a convenient road travel experience.",
topPlaces: [
{
title: "Lavasa",
description: "Lavasa is a scenic planned hill destination near Pune known for its lakefront setting, winding roads, surrounding hills, and relaxed atmosphere. A private Innova Crysta provides comfortable transportation for families and groups traveling from Pune for a weekend or leisure trip."
},
{
title: "Lavasa Lake",
description: "Lavasa Lake is one of the area's recognizable attractions and is surrounded by scenic landscapes, promenades, and leisure spots. Travelers arriving from Pune can use a spacious Innova Crysta for convenient transportation while carrying family or group luggage."
},
{
title: "Lakeshore Watersports",
description: "The lakeside area offers leisure activities and scenic views that attract visitors during Lavasa trips. A private cab makes it easier for families and groups to reach the destination comfortably without managing the drive themselves."
},
{
title: "Lavasa City Promenade",
description: "Lavasa's promenade area is popular for lakeside walks, photography, dining, and relaxed sightseeing. An Innova Crysta is suitable for groups visiting the area together, providing comfortable seating and convenient transportation from Pune."
},
{
title: "Temghar Dam",
description: "Temghar Dam and its surrounding landscape provide scenic views of the Western Ghats and are often included in road-trip itineraries around the region. A private Innova Crysta gives travelers a convenient option for reaching the area during a planned sightseeing trip."
},
{
title: "Mulshi Lake",
description: "Mulshi Lake is surrounded by green hills and is a popular scenic destination near the Pune region. Travelers combining Lavasa with nearby nature spots can use a spacious Innova Crysta for comfortable group transportation and luggage accommodation."
},
{
title: "Mulshi Dam",
description: "Mulshi Dam is a popular destination for travelers looking for scenic landscapes and peaceful surroundings. A private cab from Pune can make it convenient for families and groups to include Mulshi in a Lavasa-focused road trip itinerary."
},
{
title: "Panshet Dam",
description: "Panshet Dam is a scenic destination surrounded by hills and greenery and can be included in a broader Pune-region sightseeing plan. The Innova Crysta provides comfortable transportation for groups planning multiple stops during their leisure trip."
},
{
title: "Sinhagad Fort",
description: "Sinhagad Fort is a prominent historic hill fort near Pune and can be combined with nearby destinations in a customized day-trip itinerary. Families and groups can travel in a spacious Innova Crysta when planning a longer sightseeing route."
},
{
title: "Khadakwasla Dam",
description: "Khadakwasla Dam is a popular leisure destination around Pune and can be included as part of a broader weekend road-trip plan. A private Innova Crysta provides convenient transportation for groups traveling with family members, friends, and luggage."
}
],
services: [
{
name: "Pune to Lavasa Innova Crysta Taxi",
description: "Pune to Lavasa Innova Crysta Taxi provides private transportation for passengers traveling from Pune to Lavasa. The spacious vehicle is suitable for families, friends, and groups looking for comfortable seating, air conditioning, and practical luggage space."
},
{
name: "Pune Lavasa Innova Crysta Cab",
description: "Pune Lavasa Innova Crysta Cab offers a convenient private travel option for passengers planning a leisure journey to Lavasa. The vehicle is suitable for weekend trips, family outings, sightseeing tours, and group travel from Pune."
},
{
name: "Pune Lavasa Innova Crysta Booking",
description: "Pune Lavasa Innova Crysta Booking allows travelers to arrange their private vehicle before their planned Lavasa trip. Advance booking can be useful for weekends, holidays, family outings, and one-day sightseeing schedules."
},
{
name: "Pune to Lavasa Innova Crysta Rental",
description: "Pune to Lavasa Innova Crysta Rental provides a spacious vehicle for travelers planning a private trip from Pune to Lavasa. It can be suitable for families, groups, tourists, weekend travelers, and passengers carrying luggage."
},
{
name: "Pune to Lavasa Innova Crysta on Rent",
description: "Pune to Lavasa Innova Crysta on Rent offers a practical transportation option for passengers who want a spacious vehicle for their Lavasa journey. The Innova Crysta is suitable for day trips, weekend plans, family tours, and group outings."
},
{
name: "Pune to Lavasa Innova Crysta Hire",
description: "Pune to Lavasa Innova Crysta Hire provides private transportation for travelers looking for a comfortable vehicle for their trip. Families and groups can enjoy spacious seating and sufficient luggage capacity during the journey."
},
{
name: "Pune Lavasa AC Innova Crysta Cab",
description: "Pune Lavasa AC Innova Crysta Cab provides air-conditioned private transportation for passengers traveling to Lavasa. The comfortable cabin is suitable for families and groups who want a convenient road trip from Pune."
},
{
name: "Pune Lavasa Luxury Innova Crysta Cab",
description: "Pune Lavasa Luxury Innova Crysta Cab offers a premium private travel option for passengers who prefer additional comfort during their leisure trip. The spacious cabin and air conditioning make it suitable for family outings and special weekend journeys."
},
{
name: "Pune to Lavasa 7 Seater Innova Crysta",
description: "Pune to Lavasa 7 Seater Innova Crysta is suitable for families and small groups traveling together. The seven-seater configuration provides practical passenger capacity along with useful luggage space for a day trip or weekend holiday."
},
{
name: "Pune Lavasa One Way Innova Crysta Cab",
description: "Pune Lavasa One Way Innova Crysta Cab is useful for passengers who require private transportation from Pune to Lavasa without arranging an immediate return journey. It can suit travelers staying overnight or making separate return plans."
},
{
name: "Pune Lavasa Round Trip Innova Crysta Cab",
description: "Pune Lavasa Round Trip Innova Crysta Cab provides return transportation for travelers planning to visit Lavasa and come back to Pune. It is convenient for families and groups arranging one-day sightseeing trips or weekend itineraries."
},
{
name: "Pune Lavasa Outstation Innova Crysta Cab",
description: "Pune Lavasa Outstation Innova Crysta Cab provides private transportation for the journey from Pune toward Lavasa. The spacious vehicle is suitable for travelers looking for comfortable seating, air conditioning, and convenient road travel."
},
{
name: "Pune to Lavasa Family Innova Crysta Cab",
description: "Pune to Lavasa Family Innova Crysta Cab offers a comfortable private travel solution for families planning a leisure trip. The spacious cabin allows family members to travel together while keeping bags and other trip essentials conveniently accommodated."
},
{
name: "Pune Lavasa Group Travel Innova Crysta",
description: "Pune Lavasa Group Travel Innova Crysta is suitable for friends, relatives, and small groups planning a shared trip to Lavasa. Traveling together in one spacious vehicle makes it practical for sightseeing, photography trips, and weekend outings."
},
{
name: "Affordable Pune Lavasa Innova Crysta Cab",
description: "Affordable Pune Lavasa Innova Crysta Cab is a search-focused option for travelers comparing private transportation for their Lavasa trip. Passengers can consider the applicable fare based on their travel date, trip type, passenger count, and pickup requirements."
},
{
name: "Pune Lavasa Innova Crysta Taxi Service",
description: "Pune Lavasa Innova Crysta Taxi Service provides private transportation for families, tourists, friends, and groups traveling from Pune to Lavasa. The spacious vehicle is useful for comfortable sightseeing and leisure travel."
},
{
name: "Pune Lavasa Innova Crysta Cab Near Me",
description: "Pune Lavasa Innova Crysta Cab Near Me is useful for travelers searching for a suitable private Innova Crysta cab for their Lavasa journey. Passengers can check vehicle availability, pickup requirements, and travel schedules before confirming their trip."
},
{
name: "Pune to Lavasa Private Cab",
description: "Pune to Lavasa Private Cab offers exclusive transportation for passengers who prefer traveling without sharing the vehicle with unrelated travelers. It is suitable for families, couples, friends, and small groups planning a private leisure trip."
},
{
name: "Pune Lavasa Sightseeing Innova Crysta",
description: "Pune Lavasa Sightseeing Innova Crysta is suitable for travelers who want to explore Lavasa and nearby scenic destinations during their trip. The spacious vehicle provides comfortable transportation between planned sightseeing stops."
},
{
name: "Pune Lavasa Weekend Trip Cab",
description: "Pune Lavasa Weekend Trip Cab provides private transportation for travelers planning a short weekend getaway from Pune. Families and groups can use the spacious Innova Crysta for convenient travel with luggage and flexible sightseeing plans."
},
{
name: "Pune to Lavasa Tourist Cab",
description: "Pune to Lavasa Tourist Cab is suitable for visitors planning sightseeing, photography, family outings, and leisure activities in Lavasa. A private Innova Crysta offers comfortable seating and useful space for luggage during the trip."
},
{
name: "Pune Lavasa Innova Crysta Cab Hire",
description: "Pune Lavasa Innova Crysta Cab Hire provides a convenient private vehicle option for travelers planning a Lavasa trip. The spacious cab is suitable for families, friends, tourists, and groups requiring comfortable transportation."
},
{
name: "Pune Lavasa Innova Crysta Rental Service",
description: "Pune Lavasa Innova Crysta Rental Service offers private transportation for passengers planning day trips, weekend holidays, sightseeing tours, and family outings. Travelers can arrange the vehicle according to their itinerary and passenger requirements."
},
{
name: "Pune to Lavasa Family Tour Cab",
description: "Pune to Lavasa Family Tour Cab provides comfortable private transportation for families planning a sightseeing or leisure tour. The spacious Innova Crysta offers room for passengers and luggage while allowing the family to travel together."
},
{
name: "Pune Lavasa One Day Trip Innova Crysta",
description: "Pune Lavasa One Day Trip Innova Crysta is suitable for travelers planning a same-day visit from Pune to Lavasa and back. The spacious vehicle can accommodate families and groups while providing comfortable transportation throughout the planned itinerary."
}
],
tableData: [
["Pune to Lavasa Innova Crysta Taxi"],
["Pune Lavasa Innova Crysta Cab"],
["Pune Lavasa Innova Crysta Booking"],
["Pune to Lavasa Innova Crysta Rental"],
["Pune to Lavasa Innova Crysta on Rent"],
["Pune to Lavasa Innova Crysta Hire"],
["Pune Lavasa AC Innova Crysta Cab"],
["Pune Lavasa Luxury Innova Crysta Cab"],
["Pune to Lavasa 7 Seater Innova Crysta"],
["Pune Lavasa One Way Innova Crysta Cab"],
["Pune Lavasa Round Trip Innova Crysta Cab"],
["Pune Lavasa Outstation Innova Crysta Cab"],
["Pune to Lavasa Family Innova Crysta Cab"],
["Pune Lavasa Group Travel Innova Crysta"],
["Affordable Pune Lavasa Innova Crysta Cab"],
["Pune Lavasa Innova Crysta Taxi Service"],
["Pune Lavasa Innova Crysta Cab Near Me"],
["Pune to Lavasa Private Cab"],
["Pune Lavasa Sightseeing Innova Crysta"],
["Pune Lavasa Weekend Trip Cab"],
["Pune to Lavasa Tourist Cab"],
["Pune Lavasa Innova Crysta Cab Hire"],
["Pune Lavasa Innova Crysta Rental Service"],
["Pune to Lavasa Family Tour Cab"],
["Pune Lavasa One Day Trip Innova Crysta"]
],
whychoose: [
{
WhyChooseheading: "Spacious Innova Crysta for Group Travel",
WhyChoosedescription: "The Innova Crysta offers generous seating and luggage capacity, making it practical for families and groups traveling from Pune to Lavasa. Passengers can share one comfortable vehicle throughout their leisure trip."
},
{
WhyChooseheading: "Ideal for Weekend Getaways",
WhyChoosedescription: "Lavasa is suitable for short leisure trips and weekend plans, and a private cab makes the journey easier to organize. Travelers can carry their bags and plan their route without depending on shared transportation schedules."
},
{
WhyChooseheading: "Comfortable AC Journey",
WhyChoosedescription: "The air-conditioned cabin provides a comfortable environment for passengers traveling with family or friends. Spacious seating makes the Innova Crysta suitable for both short sightseeing plans and longer day-trip itineraries."
},
{
WhyChooseheading: "One-Day Trip Convenience",
WhyChoosedescription: "Passengers planning a same-day Lavasa visit can arrange a round-trip private cab according to their itinerary. This makes it convenient to manage departure, sightseeing, leisure time, and the return journey."
},
{
WhyChooseheading: "Private Travel Experience",
WhyChoosedescription: "A private Innova Crysta allows travelers to enjoy the journey with their own group without sharing the vehicle with unrelated passengers. This provides greater convenience for families, friends, and small groups."
},
{
WhyChooseheading: "Useful for Sightseeing Plans",
WhyChoosedescription: "The spacious vehicle can accommodate itineraries covering Lavasa, the lakefront, surrounding scenic areas, and nearby destinations. Groups can travel comfortably between multiple planned stops during their trip."
},
{
WhyChooseheading: "Family-Friendly Transportation",
WhyChoosedescription: "Families can travel together in a comfortable seven-seater vehicle with useful space for luggage and trip essentials. The private arrangement is suitable for parents, children, and extended family outings."
},
{
WhyChooseheading: "Flexible Trip Arrangements",
WhyChoosedescription: "Travelers can plan one-way, round-trip, sightseeing, weekend, or one-day journeys depending on their requirements. This flexibility makes the Innova Crysta useful for different types of Lavasa travel plans."
}
]
};
















const faqData = [
{
question: "Can I book an Innova Crysta from Pune to Lavasa?",
answer: "An Innova Crysta can be arranged for a Pune to Lavasa trip when families, friends, couples, or small groups want to travel together in a dedicated vehicle. You can provide your Pune pickup location, travel date, passenger count, and preferred departure time to organize the cab according to your plans."
},
{
question: "Is Innova Crysta suitable for a Pune to Lavasa trip?",
answer: "Travellers looking for a comfortable group vehicle for the Pune to Lavasa route can consider an Innova Crysta. It is useful for passengers carrying day-trip luggage, travelling with family members, or planning sightseeing and leisure activities after reaching Lavasa."
},
{
question: "Can I book a round-trip Innova Crysta from Pune to Lavasa?",
answer: "Round-trip cab bookings can be arranged for travellers who want to visit Lavasa and return to Pune on the same day or after an overnight stay. The requested pickup time, expected return time, and itinerary can be shared in advance for better trip coordination."
},
{
question: "Can families use an Innova Crysta for a Lavasa trip?",
answer: "Families can choose an Innova Crysta when several members are travelling together from Pune to Lavasa. A dedicated vehicle makes it easier to coordinate children, senior family members, bags, sightseeing stops, meal breaks, and the overall schedule for the outing."
},
{
question: "Can I book an Innova Crysta for a Lavasa weekend trip?",
answer: "A weekend Lavasa journey can be planned with an Innova Crysta for families, couples, and small groups. The itinerary may include hotel transfers, sightseeing, leisure stops, and the return journey to Pune based on the duration and travel plans shared at the time of booking."
},
{
question: "Can I include sightseeing during my Pune to Lavasa cab booking?",
answer: "Travellers can discuss their sightseeing requirements while arranging the cab. Depending on the itinerary, the trip can include viewpoints, lakeside areas, local attractions, dining stops, and other places around Lavasa, with the schedule planned according to the group's preferences."
},
{
question: "Is there enough luggage space in an Innova Crysta for Lavasa travel?",
answer: "Passengers can mention their approximate luggage requirements while booking the vehicle. For overnight stays or group outings, providing details about the number of travellers and bags helps Citysky Cabs coordinate the Innova Crysta according to the group's transportation needs."
},
{
question: "Can friends hire an Innova Crysta for a Pune to Lavasa outing?",
answer: "Friends and small groups can arrange an Innova Crysta for a Lavasa day trip, weekend outing, or leisure tour. Travelling together in one dedicated cab can make it easier to coordinate the group's departure time, sightseeing plans, meal stops, and return schedule."
},
{
question: "Can I book an Innova Crysta for an early morning Pune to Lavasa trip?",
answer: "Travellers who prefer an early start can provide their desired pickup time while making the booking request. This can be useful for groups planning a full-day Lavasa itinerary, allowing more time for sightseeing, leisure activities, and a scheduled return to Pune."
},
{
question: "How can I make a Pune to Lavasa Innova Crysta Cab Booking with Citysky Cabs?",
answer: "To arrange the cab, share your Pune pickup location, Lavasa destination, travel date, preferred departure time, passenger count, luggage details, and one-way or round-trip requirement. Citysky Cabs can coordinate the Innova Crysta according to your planned Lavasa itinerary."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Rohit Bhosale",
feedback:
"A few of us planned a weekend trip from Pune to Lavasa and wanted to travel in one vehicle. I booked an Innova Crysta through Citysky Cabs and shared our pickup and return schedule in advance. The spacious vehicle was convenient for our group and the bags we carried for the overnight stay.",
rating: 5
},
{
id: 2,
name: "Miss. Snehal Patil",
feedback:
"My family wanted to spend a day in Lavasa, so I arranged an Innova Crysta for our Pune pickup. We had children with us and planned several stops during the outing. Keeping everyone in the same cab made the day easier to manage, and the booking process with Citysky Cabs was simple.",
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
  "name": "Pune to Lavasa Innova Crysta Cab Booking",
  "image": "https://www.cityskycab.in/assets/images/pune-to-lavasa-innova-crysta-cab-booking.webp",
  "description": "Pune to Lavasa Innova Crysta Cab Booking from Citysky Cabs is a convenient choice for travellers looking for a spacious, comfortable and premium vehicle for the scenic Pune to Lavasa route. The service covers Pune to Lavasa Innova Crysta Taxi, rental, hire and on-rent requirements, with options suited to families, friends, corporate groups and weekend travellers. The AC Innova Crysta offers comfortable seating for up to 7 passengers along with sufficient luggage space, making it suitable for relaxed hill-road travel. Citysky Cabs provides experienced drivers, convenient pickup from Pune locations, clean vehicles and flexible one-way or round-trip travel arrangements for Lavasa journeys.",
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
    "url": "https://www.cityskycab.in/pune-to-lavasa-innova-crysta-cab-booking"
  }
};





    return (
        <div>
<Helmet>
  <title>
    Pune to Lavasa Innova Crysta Cab Booking | Pune Lavasa Luxury Innova Crysta Cab | +91 9272112191 
  </title>

  <meta
    name="description"
    content="Enjoy a comfortable Pune to Lavasa journey in an Innova Crysta with Citysky Cabs. Choose AC 7-seater luxury travel with experienced drivers, convenient Pune pickup and flexible one-way or round-trip cab options."
  />

  <meta
    name="keywords"
    content="Pune to Lavasa Innova Crysta Taxi, Pune Lavasa Innova Crysta Cab, Pune Lavasa Innova Crysta Booking, Pune to Lavasa Innova Crysta Rental, Pune to Lavasa Innova Crysta on Rent, Pune to Lavasa Innova Crysta Hire, Pune Lavasa AC Innova Crysta Cab, Pune Lavasa Luxury Innova Crysta Cab, Pune to Lavasa 7 Seater Innova Crysta, Pune to Lavasa Innova Crysta Cab Booking, Pune Lavasa Innova Crysta Taxi, Pune Lavasa premium cab, Pune to Lavasa AC cab, Pune to Lavasa 7 seater cab, Pune to Lavasa one way Innova Crysta, Pune to Lavasa round trip cab, Innova Crysta for Lavasa trip, Lavasa cab from Pune"
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
                            <img src='/images/keyword/16.jpg' alt='img' className='img-fluid' />
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

export default Punetolavasainnova;