import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Topcarrentalcompany() {

const cardData = {
keyword: "Top Car Rental Company in Pune",
headingDescription: "Citysky Cabs provides flexible car rental services in Pune for local travel, airport transfers, corporate transportation, family journeys, tourism, events, weddings, and outstation trips. Customers can choose from practical cars and spacious vehicles according to passenger capacity, route, duration, and travel requirements. Car rental with driver options can support business professionals, families, tourists, wedding groups, corporate teams, and visitors travelling across Pune and nearby destinations. Services can be arranged for daily, monthly, one-day, local, airport, and long-distance travel from major areas such as Hinjewadi, Kharadi, Viman Nagar, Hadapsar, Baner, Pimpri Chinchwad, Magarpatta, Pune Airport, and other important locations.",
topPlaces: [
{
title: "Pune International Airport",
description: "Pune International Airport is a major travel point for business visitors, families, tourists, and corporate passengers. Car rental services can be arranged for airport pickup and drop, hotel transfers, office travel, outstation journeys, and scheduled local transportation."
},
{
title: "Hinjewadi IT Park",
description: "Hinjewadi IT Park is an important corporate and technology destination in Pune. Car rentals with driver support can help executives, employees, clients, and visiting professionals travel between offices, hotels, residential areas, airports, and business meeting locations."
},
{
title: "Kharadi EON IT Park",
description: "Kharadi EON IT Park attracts corporate professionals and business visitors throughout the year. Rental cars can support office travel, client meetings, airport transfers, executive movement, corporate events, and local transportation around eastern Pune."
},
{
title: "Magarpatta City",
description: "Magarpatta City is a major business and residential destination with offices, commercial establishments, and professional workplaces. Car rental arrangements can be used for employee travel, business meetings, family transportation, airport transfers, and planned local journeys."
},
{
title: "Baner",
description: "Baner is a well-connected business, residential, hospitality, and entertainment corridor. Rental cars can provide convenient transportation for professionals, families, tourists, event guests, and visitors travelling between offices, hotels, restaurants, and nearby destinations."
},
{
title: "Pimpri Chinchwad",
description: "Pimpri Chinchwad is an extensive industrial and commercial region with manufacturing units, offices, residential areas, and business destinations. Car rental services can support corporate travel, factory visits, family journeys, employee movement, and outstation trips."
},
{
title: "Viman Nagar",
description: "Viman Nagar is a popular commercial and residential area located close to Pune Airport. Car hire services can be arranged for airport travel, hotel transfers, corporate meetings, shopping, family transportation, and local or outstation journeys."
},
{
title: "Koregaon Park",
description: "Koregaon Park is known for its hospitality, restaurants, commercial establishments, and residential properties. Rental cars can help tourists, business visitors, families, and event guests travel comfortably between hotels, offices, airport routes, and other Pune destinations."
},
{
title: "Shivajinagar",
description: "Shivajinagar is a central Pune area with railway, commercial, educational, residential, and business destinations. Car rental services can be arranged for station transfers, city travel, corporate meetings, family transportation, and longer journeys outside Pune."
},
{
title: "Hadapsar",
description: "Hadapsar is an important employment and residential corridor with IT campuses, commercial areas, and business destinations. Car rentals can support office travel, corporate requirements, airport transfers, family trips, event transportation, and outstation journeys."
}
],
services: [
{
name: "Car Rental Company Pune",
description: "Car Rental Company Pune provides convenient vehicle rental options for local transportation, airport transfers, business travel, family journeys, tourism, events, and outstation trips. Cars can be arranged according to passenger capacity, duration, route, and travel requirements."
},
{
name: "Car Rental Service Pune",
description: "Car Rental Service Pune supports customers looking for vehicles for short-term and extended travel requirements. Rental cars can be used for city travel, airport journeys, business visits, family transportation, sightseeing, and intercity trips."
},
{
name: "Car Hire Company Pune",
description: "Car Hire Company Pune provides car hiring options for professionals, families, tourists, corporate teams, and visitors. Vehicles can be arranged for local travel, meetings, airport transfers, events, sightseeing, and outstation journeys."
},
{
name: "Car Rental Agency Pune",
description: "Car Rental Agency Pune offers vehicle arrangements for different travel purposes and durations. Customers can select suitable cars for business travel, family trips, tourism, airport transfers, events, weddings, and long-distance journeys."
},
{
name: "Car Booking Company Pune",
description: "Car Booking Company Pune helps customers arrange rental vehicles for planned local and intercity travel. Booking options can support airport transfers, corporate travel, family transportation, tourist trips, events, and recurring car requirements."
},
{
name: "Best Car Rental Service Pune",
description: "Best Car Rental Service Pune provides practical rental options for customers requiring comfortable transportation across Pune and nearby destinations. Services can be arranged for business travel, family journeys, tourism, airport movement, events, and outstation routes."
},
{
name: "Car Rental with Driver Pune",
description: "Car Rental with Driver Pune provides a convenient option for customers who prefer professional driver support during their journey. It can be useful for business executives, families, tourists, airport passengers, corporate guests, and long-distance travellers."
},
{
name: "Car Hire with Driver Pune",
description: "Car Hire with Driver Pune allows customers to use a rental vehicle along with driver assistance for planned journeys. Cars can be arranged for local travel, corporate meetings, airport transfers, sightseeing, family trips, and outstation transportation."
},
{
name: "AC Car Rental Pune",
description: "AC Car Rental Pune provides air-conditioned vehicles for comfortable travel across Pune and other destinations. Rental cars can be used for family journeys, business trips, airport transfers, sightseeing, events, and longer intercity routes."
},
{
name: "Luxury Car Rental Pune",
description: "Luxury Car Rental Pune provides premium vehicle options for executive travel, special occasions, corporate events, weddings, guest transportation, and important business journeys. Cars can be arranged according to passenger requirements and travel schedules."
},
{
name: "Affordable Car Rental Pune",
description: "Affordable Car Rental Pune offers practical rental options for customers seeking convenient transportation for local and outstation travel. Rental arrangements can be planned according to the journey duration, vehicle requirement, passenger count, and route."
},
{
name: "Outstation Car Rental Pune",
description: "Outstation Car Rental Pune supports customers travelling from Pune to destinations across Maharashtra and nearby states. Cars can be arranged for one-way and round-trip journeys for tourism, family travel, business visits, and personal trips."
},
{
name: "Corporate Car Rental Pune",
description: "Corporate Car Rental Pune provides transportation solutions for companies, executives, employees, clients, and business visitors. Rental cars can support office travel, meetings, airport transfers, corporate events, and scheduled business journeys."
},
{
name: "Airport Car Rental Pune",
description: "Airport Car Rental Pune provides rental vehicles for passengers travelling to and from Pune International Airport. Cars can be arranged for airport pickup, airport drop, hotel transfers, corporate travel, family transportation, and onward outstation journeys."
},
{
name: "Monthly Car Rental Pune",
description: "Monthly Car Rental Pune provides extended vehicle rental arrangements for professionals, companies, families, and organizations requiring regular transportation. Cars can be used for office travel, business mobility, local commuting, and longer-duration travel requirements."
},
{
name: "Daily Car Rental Pune",
description: "Daily Car Rental Pune provides vehicles for customers who need transportation for a full day or recurring daily requirements. Rental cars can support local sightseeing, business meetings, airport travel, family trips, and planned city journeys."
},
{
name: "One Day Car Rental Pune",
description: "One Day Car Rental Pune is suitable for customers requiring a vehicle for a single day's travel. Cars can be arranged for sightseeing, business visits, airport transfers, family outings, shopping trips, events, and nearby destinations."
},
{
name: "Family Car Rental Pune",
description: "Family Car Rental Pune provides comfortable transportation for families travelling within Pune or to nearby destinations. Vehicle selection can be based on family size, luggage requirements, journey duration, and whether the trip is local or outstation."
},
{
name: "Group Car Rental Pune",
description: "Group Car Rental Pune supports families, friends, corporate teams, and travel groups requiring suitable passenger transportation. Spacious vehicles can be arranged for sightseeing, events, airport travel, corporate outings, and intercity journeys."
},
{
name: "Wedding Car Rental Pune",
description: "Wedding Car Rental Pune provides vehicle arrangements for wedding couples, family members, guests, and event-related transportation. Cars can be scheduled for venue transfers, hotel movement, guest pickup, airport travel, and other wedding functions."
},
{
name: "Event Car Rental Pune",
description: "Event Car Rental Pune supports transportation requirements for corporate functions, private events, conferences, celebrations, exhibitions, and social gatherings. Rental cars can be scheduled for guests, organizers, executives, speakers, and event transfers."
},
{
name: "Tourist Car Rental Pune",
description: "Tourist Car Rental Pune provides convenient transportation for visitors exploring Pune and nearby destinations. Cars with driver support can be arranged for sightseeing, heritage visits, family tours, weekend trips, and longer Maharashtra travel."
},
{
name: "Private Car Rental Pune",
description: "Private Car Rental Pune provides dedicated vehicle arrangements for customers seeking private transportation during local or outstation journeys. Rental cars can support families, professionals, tourists, airport passengers, and individuals requiring flexible travel."
},
{
name: "Car Rental Service Near Me Pune",
description: "Car Rental Service Near Me Pune helps customers arrange rental vehicles around major residential, commercial, airport, and business areas of Pune. Services can support local travel, business transportation, family journeys, tourism, events, and outstation trips."
},
{
name: "Corporate Car Hire Company Pune",
description: "Corporate Car Hire Company Pune supports organizations requiring dedicated transportation for executives, employees, clients, and business visitors. Car hire arrangements can cover office travel, meetings, airport transfers, corporate events, and scheduled business journeys."
}
],
tableData: [
["Car Rental Company Pune"],
["Car Rental Service Pune"],
["Car Hire Company Pune"],
["Car Rental Agency Pune"],
["Car Booking Company Pune"],
["Best Car Rental Service Pune"],
["Car Rental with Driver Pune"],
["Car Hire with Driver Pune"],
["AC Car Rental Pune"],
["Luxury Car Rental Pune"],
["Affordable Car Rental Pune"],
["Outstation Car Rental Pune"],
["Corporate Car Rental Pune"],
["Airport Car Rental Pune"],
["Monthly Car Rental Pune"],
["Daily Car Rental Pune"],
["One Day Car Rental Pune"],
["Family Car Rental Pune"],
["Group Car Rental Pune"],
["Wedding Car Rental Pune"],
["Event Car Rental Pune"],
["Tourist Car Rental Pune"],
["Private Car Rental Pune"],
["Car Rental Service Near Me Pune"],
["Corporate Car Hire Company Pune"]
],
whychoose: [
{
WhyChooseheading: "Wide Range of Rental Requirements",
WhyChoosedescription: "Car rental arrangements can be planned for different travel purposes, including airport transfers, local commuting, business travel, family journeys, tourism, weddings, events, and outstation trips. Vehicle selection can be based on passenger count and journey requirements."
},
{
WhyChooseheading: "Driver-Assisted Travel",
WhyChoosedescription: "Customers who prefer not to drive can choose rental vehicles with driver support. This option can be convenient for business executives, families, tourists, corporate guests, airport passengers, and customers travelling on unfamiliar routes."
},
{
WhyChooseheading: "Corporate Travel Support",
WhyChoosedescription: "Businesses can arrange rental cars for executives, employees, clients, visiting professionals, and corporate guests. Vehicles can support meetings, office transfers, airport travel, conferences, events, and scheduled business journeys."
},
{
WhyChooseheading: "Airport Transportation Options",
WhyChoosedescription: "Car rental services can be coordinated for Pune International Airport pickup and drop requirements. Vehicles can connect the airport with offices, hotels, residences, business destinations, and onward outstation routes according to the travel schedule."
},
{
WhyChooseheading: "Local and Outstation Travel",
WhyChoosedescription: "Rental cars can be used for short local journeys as well as longer intercity travel from Pune. Customers can arrange transportation for sightseeing, family trips, business visits, weekend travel, and destinations across Maharashtra and nearby regions."
},
{
WhyChooseheading: "Flexible Rental Durations",
WhyChoosedescription: "Different travel schedules may require different rental periods, so car arrangements can be planned for one day, daily use, monthly requirements, or specific trips. Duration can be matched with the customer's itinerary and transportation needs."
},
{
WhyChooseheading: "Family and Group-Friendly Vehicles",
WhyChoosedescription: "Families and groups can select vehicles according to passenger numbers and luggage requirements. Spacious rental options can be useful for holidays, airport journeys, sightseeing, celebrations, weddings, and longer-distance travel."
},
{
WhyChooseheading: "Event and Special Occasion Travel",
WhyChoosedescription: "Rental vehicles can also support weddings, corporate events, conferences, celebrations, exhibitions, and other special occasions. Cars can be scheduled for guests, organizers, executives, family members, venue transfers, and airport movement."
}
]
};











const faqData = [
{
question: "What car rental services can I get from Citysky Cabs in Pune?",
answer: "Citysky Cabs can be approached for car rental requirements such as local Pune travel, airport transfers, corporate transportation, family trips, weddings, events, sightseeing, and outstation journeys. Customers can share the travel date, pickup location, destination, passenger count, and preferred vehicle category to discuss the rental requirement."
},
{
question: "Which types of cars can I rent in Pune through Citysky Cabs?",
answer: "Customers looking for a car rental in Pune can enquire about vehicle options suitable for different group sizes and travel purposes. Depending on availability and the journey requirement, options may include sedan cars, SUVs, premium cars, and larger vehicles such as Innova or Innova Crysta."
},
{
question: "Can I rent a car in Pune for local travel?",
answer: "Local car rental can be arranged for business meetings, personal appointments, shopping, sightseeing, family functions, hotel transfers, and other city travel requirements. The pickup location, destinations, number of passengers, and expected duration can be shared with Citysky Cabs when enquiring about the vehicle."
},
{
question: "Can Citysky Cabs provide car rental for outstation trips from Pune?",
answer: "Travellers planning journeys from Pune to Mumbai, Mahabaleshwar, Lonavala, Nashik, Shirdi, Kolhapur, Goa, Aurangabad, or other destinations can enquire about outstation car rental. One-way, round-trip, and multi-day requirements can be discussed according to the planned itinerary."
},
{
question: "Is car rental available for Pune Airport transfers?",
answer: "Passengers can enquire about rental cars for airport pickup and drop services between Pune Airport and residences, hotels, offices, or other destinations. Flight timing, pickup address, passenger count, luggage requirements, and preferred vehicle type can be provided while planning the airport transfer."
},
{
question: "Can companies rent cars for corporate travel in Pune?",
answer: "Businesses can arrange rental cars for employees, executives, clients, consultants, meetings, conferences, airport transfers, and industrial visits. Citysky Cabs can discuss the requirement based on the number of passengers, travel schedule, pickup locations, business destinations, and duration of the corporate journey."
},
{
question: "Can I rent a car for a wedding or family function in Pune?",
answer: "Families and event organizers can enquire about rental cars for weddings, receptions, religious functions, family gatherings, and other occasions. Transportation can be planned between homes, hotels, railway stations, airports, and event venues according to the function schedule and passenger requirements."
},
{
question: "Can I rent an Innova Crysta for a family trip from Pune?",
answer: "Families requiring additional seating space for holidays, pilgrimages, sightseeing, or longer journeys can enquire about an Innova Crysta rental. The destination, passenger count, luggage requirements, travel dates, and one-way or return itinerary can be shared with Citysky Cabs for discussing the vehicle requirement."
},
{
question: "Can I hire a car for a full-day trip in Pune?",
answer: "Customers planning multiple stops during the day can enquire about a full-day car rental arrangement. The starting point, sightseeing or business locations, expected travel duration, number of passengers, and return location can be provided so Citysky Cabs can understand the complete day's itinerary."
},
{
question: "What information is required to rent a car in Pune?",
answer: "To enquire about car rental, customers can provide the pickup address, travel date, destination, passenger count, required duration, preferred vehicle category, and whether the trip is local, one-way, or round-trip. Additional requirements such as airport transfers, multiple stops, luggage, or corporate travel can also be mentioned."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Nikhil Joshi",
feedback:
"We needed a spacious car for a family trip from Pune with several bags and multiple stops during the journey. After sharing our travel dates and route with Citysky Cabs, we arranged an Innova Crysta for the trip. The larger vehicle made it easier for everyone to travel together with the luggage.",
rating: 5
},
{
id: 2,
name: "Miss. Priya Kulkarni",
feedback:
"I required a rental car for a full day of business meetings across Pune, including office visits and an airport pickup later in the evening. Citysky Cabs arranged the vehicle around the schedule I provided, which made moving between the different locations much more convenient.",
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
  "name": "Top Car Rental Company in Pune",
  "image": "https://www.cityskycab.in/assets/images/top-car-rental-company-in-pune.webp",
  "description": "Top Car Rental Company in Pune by Citysky Cabs provides convenient car rental and chauffeur-driven travel options for local transportation, business trips, airport transfers, family journeys and outstation travel. Car Rental Company Pune, Car Rental Service Pune, Car Hire Company Pune and Car Rental Agency Pune cover a range of travel requirements for individuals, families, corporate teams and visiting guests. Car Booking Company Pune makes it easier to arrange vehicles according to trip duration, passenger count and travel plans. Best Car Rental Service Pune options can include comfortable cars with professional drivers for city travel, airport transfers and longer routes. Car Rental with Driver Pune and Car Hire with Driver Pune are suitable for customers who prefer a convenient chauffeur-driven journey without managing the vehicle themselves. AC Car Rental Pune provides comfortable travel in warm weather, while Luxury Car Rental Pune is suitable for executives, special occasions, corporate guests and premium business travel. Citysky Cabs can arrange suitable vehicles, pickup and drop locations, flexible rental durations and professional drivers according to the customer's requirements.",
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
    "url": "https://www.cityskycab.in/top-car-rental-company-in-pune"
  }
};






    return (
        <div>

<Helmet>
  <title>
    Top Car Rental Company in Pune | Chauffeur Driven, AC & Luxury Car Hire | +91 8554819191
  </title>

  <meta
    name="description"
    content="Top Car Rental Company in Pune by Citysky Cabs for AC and luxury car rental, chauffeur-driven car hire, airport transfers, local travel, corporate journeys and outstation trips."
  />

  <meta
    name="keywords"
    content="Top Car Rental Company in Pune, Car Rental Company Pune, Car Rental Service Pune, Car Hire Company Pune, Car Rental Agency Pune, Car Booking Company Pune, Best Car Rental Service Pune, Car Rental with Driver Pune, Car Hire with Driver Pune, AC Car Rental Pune, Luxury Car Rental Pune, Car Rental Pune with Driver, Chauffeur Driven Car Rental Pune, Chauffeur Car Hire Pune, Pune car rental service, Pune car hire service, Pune car booking service, Pune car rental agency, Pune chauffeur car service, Pune AC car hire, Pune luxury car hire, Pune premium car rental, Pune corporate car rental, Pune airport car rental, Pune airport car with driver, Pune local car rental, Pune outstation car rental, Pune one day car rental, Pune full day car rental with driver, Pune monthly car rental with driver, Pune business car rental, Pune executive car hire, Pune family car rental, Pune tourist car rental, Pune private car hire, Pune car rental for outstation travel, Pune car hire for corporate travel, Pune car rental for airport transfer, Pune car rental with chauffeur, Pune luxury chauffeur service, Pune affordable car rental"
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
                            <img src='/images/keywords/151.jpg' alt='img' className='img-fluid' />
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
                                            <a href="tel:+918554819191" className="pc-call">+91 8554819191 </a>
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

export default Topcarrentalcompany;