import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Luxurucarrental() {

const cardData = {
keyword: "Luxury Car Rentals in Pune",
headingDescription: "Citysky Cabs provides luxury car rentals in Pune for executives, corporate guests, families, tourists, wedding groups, event attendees, and customers seeking comfortable premium transportation. Luxury and premium cars can be arranged with driver support for airport transfers, business meetings, corporate events, weddings, sightseeing, private journeys, and outstation travel. Rental options can be planned according to passenger capacity, destination, travel duration, luggage requirements, and occasion. Services are available across major Pune locations and business corridors including Koregaon Park, Kalyani Nagar, Viman Nagar, Baner, Kharadi, Hinjewadi, Magarpatta City, Hadapsar, Pune International Airport, and surrounding areas.",
topPlaces: [
{
title: "Koregaon Park",
description: "Koregaon Park is a popular premium hospitality, dining, residential, and business destination in Pune. Luxury car rentals can support corporate guests, tourists, families, executives, and event attendees travelling between hotels, restaurants, offices, airports, and other city destinations."
},
{
title: "Kalyani Nagar",
description: "Kalyani Nagar combines premium residential communities, hotels, commercial establishments, and corporate destinations. Luxury vehicles can be arranged for executive travel, client pickups, airport transfers, business meetings, special occasions, and private city transportation."
},
{
title: "Pune International Airport",
description: "Pune International Airport is an important arrival and departure point for executives, corporate guests, families, and tourists. Luxury airport car rentals can provide comfortable transfers between the airport, hotels, offices, residences, event venues, and outstation destinations."
},
{
title: "Viman Nagar",
description: "Viman Nagar is a major commercial and hospitality corridor located close to Pune Airport. Premium cars can be arranged for business visitors, hotel guests, families, tourists, and corporate professionals travelling around Pune or continuing to other destinations."
},
{
title: "Baner",
description: "Baner is a prominent business and lifestyle destination with corporate offices, restaurants, hotels, and residential areas. Luxury car rentals can support executive movement, corporate events, private celebrations, client transportation, airport transfers, and local sightseeing."
},
{
title: "Hinjewadi IT Park",
description: "Hinjewadi IT Park is a major technology and corporate hub with a large professional workforce and frequent business visitors. Luxury cars can be used for executive transportation, client visits, corporate meetings, airport transfers, conferences, and business events."
},
{
title: "Magarpatta City",
description: "Magarpatta City is an established business and residential destination with corporate offices and commercial facilities. Premium rental cars can support executives, employees, corporate guests, clients, business meetings, airport travel, and special corporate occasions."
},
{
title: "Hadapsar",
description: "Hadapsar is an important employment, IT, commercial, and residential corridor in eastern Pune. Luxury car rental services can provide comfortable transportation for corporate travel, family journeys, airport transfers, private events, and business appointments."
},
{
title: "Shivajinagar",
description: "Shivajinagar is a central Pune destination with railway connectivity, commercial areas, offices, hotels, and important city routes. Luxury cars can be arranged for executive travel, station transfers, corporate meetings, private journeys, and special occasions."
},
{
title: "Kothrud",
description: "Kothrud is a well-established residential and commercial locality with convenient access to central and western Pune. Luxury car rentals can support families, executives, tourists, wedding guests, corporate visitors, and customers travelling for private or professional purposes."
}
],
services: [
{
name: "Luxury Car Rental Pune",
description: "Luxury Car Rental Pune provides premium transportation for executives, families, tourists, corporate guests, wedding groups, and customers seeking a more comfortable travel experience. Cars can be arranged for local, airport, event, and outstation journeys."
},
{
name: "Luxury Car Hire Pune",
description: "Luxury Car Hire Pune offers premium vehicles for business travel, private journeys, celebrations, airport transfers, weddings, events, and sightseeing. Rental arrangements can be planned according to passenger requirements, destination, and travel duration."
},
{
name: "Luxury Car on Rent Pune",
description: "Luxury Car on Rent Pune provides premium vehicle options for customers requiring comfortable transportation for specific occasions or planned journeys. Cars can be arranged for corporate travel, family trips, tourism, weddings, events, and airport transfers."
},
{
name: "Luxury Car Booking Pune",
description: "Luxury Car Booking Pune helps customers arrange premium vehicles in advance for important travel requirements. Bookings can support executive movement, airport transfers, corporate events, weddings, private celebrations, sightseeing, and outstation journeys."
},
{
name: "Premium Car Rental Pune",
description: "Premium Car Rental Pune provides comfortable vehicle options for executives, families, tourists, corporate guests, and special occasions. Premium cars can be scheduled for city travel, airport transfers, business meetings, events, and intercity journeys."
},
{
name: "Luxury Taxi Service Pune",
description: "Luxury Taxi Service Pune provides premium taxi transportation for customers who want comfortable and professional travel across Pune and nearby destinations. Services can support airport transfers, business travel, family journeys, events, and private trips."
},
{
name: "Luxury Cab Rental Pune",
description: "Luxury Cab Rental Pune offers premium cab arrangements for corporate professionals, families, tourists, wedding guests, and business visitors. Cars can be scheduled for local transportation, airport journeys, events, sightseeing, and outstation travel."
},
{
name: "Luxury Car with Driver Pune",
description: "Luxury Car with Driver Pune provides a premium vehicle along with driver support for customers seeking convenient travel. This option can be suitable for executives, corporate guests, airport passengers, families, weddings, events, and long-distance journeys."
},
{
name: "Premium Car Hire with Driver Pune",
description: "Premium Car Hire with Driver Pune combines a comfortable premium vehicle with driver assistance for planned travel. It can support business executives, clients, families, tourists, event guests, airport transfers, and corporate transportation."
},
{
name: "Luxury Outstation Car Rental Pune",
description: "Luxury Outstation Car Rental Pune provides premium vehicles for customers travelling from Pune to destinations outside the city. Cars can be arranged for business trips, family holidays, weekend travel, weddings, tourism, and long-distance private journeys."
},
{
name: "Luxury Airport Car Rental Pune",
description: "Luxury Airport Car Rental Pune provides premium transportation between Pune International Airport and hotels, offices, residences, event venues, and other destinations. Vehicles can be scheduled around flight timings for executives, families, tourists, and corporate guests."
},
{
name: "Luxury Corporate Car Rental Pune",
description: "Luxury Corporate Car Rental Pune supports companies requiring premium transportation for executives, clients, business partners, visiting professionals, and corporate teams. Cars can be used for meetings, conferences, airport transfers, events, and business travel."
},
{
name: "Luxury Wedding Car Rental Pune",
description: "Luxury Wedding Car Rental Pune provides premium vehicles for wedding couples, family members, guests, and special wedding transportation. Cars can be scheduled for venue transfers, hotel movement, airport pickups, ceremonies, receptions, and related functions."
},
{
name: "Luxury Event Car Rental Pune",
description: "Luxury Event Car Rental Pune supports transportation requirements for corporate events, conferences, celebrations, exhibitions, private functions, and special occasions. Premium cars can be arranged for guests, executives, organizers, and important attendees."
},
{
name: "Luxury Family Car Rental Pune",
description: "Luxury Family Car Rental Pune provides comfortable premium transportation for families travelling within Pune or to nearby destinations. Cars can be selected according to family size, luggage requirements, journey duration, and trip itinerary."
},
{
name: "Luxury Tourist Car Rental Pune",
description: "Luxury Tourist Car Rental Pune provides premium travel options for visitors exploring Pune and surrounding destinations. Cars with driver support can be used for sightseeing, heritage visits, weekend trips, family tours, and longer Maharashtra journeys."
},
{
name: "Affordable Luxury Car Rental Pune",
description: "Affordable Luxury Car Rental Pune provides premium vehicle options for customers seeking a comfortable travel experience while considering their planned budget. Rental arrangements can be made for business trips, events, airport travel, family journeys, and private occasions."
},
{
name: "Luxury Car Rental Near Me Pune",
description: "Luxury Car Rental Near Me Pune helps customers arrange premium transportation around Pune's major residential, commercial, airport, and business areas. Services can support executives, tourists, families, wedding guests, corporate visitors, and private travellers."
},
{
name: "Premium Car Rental Service Pune",
description: "Premium Car Rental Service Pune provides comfortable premium vehicles for corporate travel, airport transfers, tourism, family journeys, weddings, events, and special occasions. Rental options can be planned around route, duration, passenger capacity, and itinerary."
},
{
name: "Luxury Sedan Rental Pune",
description: "Luxury Sedan Rental Pune provides premium sedan options for executive travel, corporate meetings, airport transfers, private journeys, weddings, and special events. Sedans can be suitable for customers seeking a refined and comfortable travel experience."
},
{
name: "Luxury SUV Rental Pune",
description: "Luxury SUV Rental Pune provides spacious premium vehicles for families, corporate groups, executives, tourists, and event guests. SUVs can be arranged for airport travel, outstation trips, sightseeing, business journeys, weddings, and longer-distance transportation."
},
{
name: "Luxury Car for Business Travel Pune",
description: "Luxury Car for Business Travel Pune provides premium transportation for professionals travelling to meetings, client locations, conferences, offices, industrial sites, and business events. Cars can be arranged with driver support for convenient corporate travel."
},
{
name: "Luxury Car for Corporate Events Pune",
description: "Luxury Car for Corporate Events Pune supports premium transportation for conferences, seminars, company functions, exhibitions, award programs, and corporate gatherings. Cars can be arranged for executives, speakers, clients, guests, and important attendees."
},
{
name: "Luxury Car for Marriage Pune",
description: "Luxury Car for Marriage Pune provides premium transportation for wedding couples, family members, guests, and special ceremonies. Vehicles can be scheduled for venue transfers, hotel movement, airport travel, reception functions, and other wedding-related requirements."
},
{
name: "Luxury Private Car Rental Pune",
description: "Luxury Private Car Rental Pune provides dedicated premium transportation for customers who prefer private travel. Cars can support family journeys, executive movement, tourism, airport transfers, special occasions, private events, and outstation trips."
}
],
tableData: [
["Luxury Car Rental Pune"],
["Luxury Car Hire Pune"],
["Luxury Car on Rent Pune"],
["Luxury Car Booking Pune"],
["Premium Car Rental Pune"],
["Luxury Taxi Service Pune"],
["Luxury Cab Rental Pune"],
["Luxury Car with Driver Pune"],
["Premium Car Hire with Driver Pune"],
["Luxury Outstation Car Rental Pune"],
["Luxury Airport Car Rental Pune"],
["Luxury Corporate Car Rental Pune"],
["Luxury Wedding Car Rental Pune"],
["Luxury Event Car Rental Pune"],
["Luxury Family Car Rental Pune"],
["Luxury Tourist Car Rental Pune"],
["Affordable Luxury Car Rental Pune"],
["Luxury Car Rental Near Me Pune"],
["Premium Car Rental Service Pune"],
["Luxury Sedan Rental Pune"],
["Luxury SUV Rental Pune"],
["Luxury Car for Business Travel Pune"],
["Luxury Car for Corporate Events Pune"],
["Luxury Car for Marriage Pune"],
["Luxury Private Car Rental Pune"]
],
whychoose: [
{
WhyChooseheading: "Premium Travel for Business Requirements",
WhyChoosedescription: "Luxury rental cars can provide comfortable transportation for executives, corporate guests, clients, and professionals travelling for meetings, conferences, airport transfers, and business events. Driver-supported options can make scheduled business travel more convenient."
},
{
WhyChooseheading: "Comfortable Airport Transfers",
WhyChoosedescription: "Premium vehicles can be arranged for travel between Pune International Airport, hotels, offices, residences, and event venues. Airport transportation can be coordinated around flight schedules for executives, families, tourists, and corporate guests."
},
{
WhyChooseheading: "Wedding and Special Occasion Travel",
WhyChoosedescription: "Luxury vehicles can add comfortable transportation for wedding couples, family members, guests, and attendees travelling between hotels and venues. Cars can also be scheduled for receptions, ceremonies, private celebrations, and other special occasions."
},
{
WhyChooseheading: "Professional Driver Support",
WhyChoosedescription: "Customers can choose premium cars with driver support for business travel, sightseeing, airport journeys, family trips, weddings, and long-distance routes. This arrangement allows passengers to focus on their itinerary instead of driving."
},
{
WhyChooseheading: "Luxury Local and Outstation Options",
WhyChoosedescription: "Premium vehicles can be used for local Pune travel as well as longer journeys outside the city. Customers can arrange transportation for tourism, weekend trips, family holidays, corporate visits, destination events, and intercity business travel."
},
{
WhyChooseheading: "Sedan and SUV Choices",
WhyChoosedescription: "Luxury sedan and SUV options can accommodate different passenger and luggage requirements. Sedans can suit executive and private travel, while spacious SUVs can be useful for families, groups, longer journeys, and additional luggage."
},
{
WhyChooseheading: "Corporate Guest Transportation",
WhyChoosedescription: "Businesses can arrange premium transportation for visiting clients, executives, consultants, business partners, and other professional guests. Vehicles can connect airports, hotels, offices, restaurants, meeting venues, and corporate events."
},
{
WhyChooseheading: "Private and Comfortable Journeys",
WhyChoosedescription: "Private luxury car rentals provide a dedicated transportation option for customers seeking comfort during important journeys. Vehicles can be arranged for families, tourists, executives, airport passengers, special occasions, and personal travel."
}
]
};













const faqData = [
{
question: "What luxury car rental options are available in Pune with Citysky Cabs?",
answer: "Citysky Cabs can arrange luxury car rental solutions in Pune for customers who need a more premium vehicle experience for business travel, special occasions, airport transfers, weddings, private events, and outstation journeys. Vehicle availability can be discussed according to the passenger count, travel schedule, destination, and required rental duration."
},
{
question: "Who can use luxury car rental services in Pune?",
answer: "Luxury car rentals can be considered by business executives, corporate guests, wedding parties, families, tourists, event organizers, and individuals looking for premium transportation. The service can be planned for occasions where a comfortable and presentable vehicle is preferred for local or outstation travel."
},
{
question: "Can I rent a luxury car in Pune for a wedding function?",
answer: "Luxury cars can be arranged for weddings, receptions, engagement ceremonies, anniversary celebrations, and other special functions. They may be used for transporting the bride and groom, family members, VIP guests, or wedding attendees between homes, hotels, venues, and airports according to the event schedule."
},
{
question: "Can luxury cars be rented for corporate travel in Pune?",
answer: "Companies can enquire about premium car rentals for executive meetings, client visits, conferences, business events, airport transfers, and visiting management teams. Citysky Cabs can discuss the required vehicle category, travel itinerary, number of passengers, and rental duration based on the corporate requirement."
},
{
question: "Are luxury car rentals available for Pune Airport transfers?",
answer: "Luxury car rental can be used for airport pickups and drops involving corporate executives, visiting clients, families, and other passengers who prefer premium transportation. Customers can provide flight details, pickup or drop location, passenger count, luggage requirements, and preferred timing while planning the airport transfer."
},
{
question: "Can I rent a luxury car from Pune for an outstation trip?",
answer: "Customers can enquire about luxury car rentals for outstation journeys from Pune to destinations such as Mumbai, Mahabaleshwar, Nashik, Goa, Kolhapur, Lonavala, Aurangabad, and other cities. One-way, round-trip, and multi-day requirements can be discussed according to the planned route and duration."
},
{
question: "Can luxury cars be hired for business meetings across Pune?",
answer: "A dedicated luxury car can be useful when an executive or corporate guest needs to travel between offices, hotels, client locations, conference venues, and other business destinations across Pune. Sharing the complete day's itinerary helps Citysky Cabs understand the required rental period and travel schedule."
},
{
question: "Can I hire a luxury car for a special event in Pune?",
answer: "Luxury cars can be arranged for events such as award functions, private celebrations, product launches, exhibitions, conferences, and formal gatherings. The event venue, reporting time, passenger requirement, number of stops, and expected usage duration can be shared to plan the transportation arrangement."
},
{
question: "Is luxury car rental suitable for Pune sightseeing and private tours?",
answer: "Travellers who prefer a premium vehicle for private sightseeing can enquire about luxury car rental for local tours and nearby destinations. A customized itinerary can include multiple sightseeing stops, hotels, restaurants, and attractions while keeping the transportation arrangement focused on the group's schedule."
},
{
question: "How can I book a luxury car rental in Pune with Citysky Cabs?",
answer: "To enquire about a luxury car rental, share the pickup location, travel date, destination, passenger count, required vehicle type, rental duration, and purpose of travel. For airport or event transportation, additional details such as flight timing, venue information, multiple stops, or special requirements can also be provided."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Rohan Deshmukh",
feedback:
"I needed a premium car in Pune for a visiting business partner who had meetings at two offices and an evening airport departure. Citysky Cabs coordinated the rental around the itinerary we shared, which made the day's transportation much easier to manage without arranging separate cars for every location.",
rating: 5
},
{
id: 2,
name: "Miss. Neha Kulkarni",
feedback:
"For my sister's wedding, we wanted a luxury car for the bride's travel between the hotel and the function venue. Citysky Cabs handled the transportation according to our event timings, and having a dedicated premium vehicle made the arrangements feel much more organized throughout the function.",
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
  "name": "Luxury Car Rentals in Pune",
  "image": "https://www.cityskycab.in/assets/images/luxury-car-rentals-in-pune.webp",
  "description": "Luxury Car Rentals in Pune from Citysky Cabs are suitable for executives, corporate guests, families, wedding groups and customers looking for comfortable premium transportation with professional drivers. Luxury Car Rental Pune, Luxury Car Hire Pune, Luxury Car on Rent Pune and Luxury Car Booking Pune provide flexible options for local travel, business meetings, special occasions and longer journeys. Premium Car Rental Pune and Luxury Taxi Service Pune are suitable for customers seeking a more refined travel experience, while Luxury Cab Rental Pune offers convenient transportation for airport transfers, events and private trips. Luxury Car with Driver Pune and Premium Car Hire with Driver Pune are designed for hassle-free chauffeur-driven travel without the need to manage the vehicle yourself. Luxury Outstation Car Rental Pune and Luxury Airport Car Rental Pune can be arranged for intercity journeys and airport transfers. Luxury Corporate Car Rental Pune is suitable for executives, clients and business visitors, while Luxury Wedding Car Rental Pune and Luxury Event Car Rental Pune can support transportation for weddings, celebrations, conferences and special occasions. Luxury Family Car Rental Pune provides a comfortable option for families travelling locally or to nearby destinations.",
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
    "url": "https://www.cityskycab.in/luxury-car-rentals-in-pune"
  }
};



    return (
        <div>

<Helmet>
  <title>
    Luxury Car Rentals in Pune | Premium Chauffeur-Driven Cars for Travel & Events | +91 9272112191 
  </title>

  <meta
    name="description"
    content="Luxury Car Rentals in Pune by Citysky Cabs for premium car hire, chauffeur-driven travel, corporate transportation, airport transfers, weddings, events, family trips and outstation journeys."
  />

  <meta
    name="keywords"
    content="Luxury Car Rentals in Pune, Luxury Car Rental Pune, Luxury Car Hire Pune, Luxury Car on Rent Pune, Luxury Car Booking Pune, Premium Car Rental Pune, Luxury Taxi Service Pune, Luxury Cab Rental Pune, Luxury Car with Driver Pune, Premium Car Hire with Driver Pune, Luxury Outstation Car Rental Pune, Luxury Airport Car Rental Pune, Luxury Corporate Car Rental Pune, Luxury Wedding Car Rental Pune, Luxury Event Car Rental Pune, Luxury Family Car Rental Pune, Luxury chauffeur car rental Pune, Luxury chauffeur service Pune, Premium chauffeur car Pune, Pune luxury car rental service, Pune premium car hire, Pune luxury taxi service, Pune luxury cab rental, Pune luxury car booking, Pune executive car rental, Pune premium car with driver, Pune luxury airport transfer, Pune luxury outstation taxi, Pune luxury corporate transportation, Pune luxury wedding car hire, Pune luxury event transportation, Pune luxury family car rental, Pune luxury car rental with chauffeur, Pune premium car rental with driver, Pune luxury business travel car, Pune executive chauffeur service, Pune luxury airport car service, Pune luxury car for events, Pune luxury car for wedding, Pune premium outstation car rental, Pune luxury private car hire"
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
                            <img src='/images/keywords/153.jpg' alt='img' className='img-fluid' />
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

export default Luxurucarrental;