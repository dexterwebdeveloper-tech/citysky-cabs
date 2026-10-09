import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Innovacarrentalinpune() {



const cardData = {
keyword: "Innova Car Rental in Pune",
headingDescription: "Innova Car Rental in Pune provides a convenient and spacious transportation option for families, groups, corporate travelers, wedding guests, tourists, and passengers planning local or outstation journeys. With comfortable seating, air conditioning, luggage space, and driver-assisted travel, an Innova is suitable for airport transfers, sightseeing, one-day rentals, family functions, business travel, and longer road trips. Whether the requirement is a short local journey or travel from Pune to destinations such as Mumbai, Lonavala, Mahabaleshwar, Nashik, Shirdi, or Goa, renting an Innova offers the flexibility of private transportation with a practical seating capacity.",
topPlaces: [
{
title: "Hinjewadi",
description: "Hinjewadi is a major technology and corporate destination in Pune with offices, business parks, hotels, and residential developments. Innova rentals from this area are useful for corporate transportation, airport transfers, visiting professionals, group travel, and outstation journeys where passengers require a comfortable vehicle with additional seating."
},
{
title: "Kharadi",
description: "Kharadi has become an important business and residential hub with numerous IT companies, commercial complexes, and hospitality facilities. An Innova rental provides convenient transportation for employees, business visitors, families, and groups traveling to the airport, offices, events, or destinations outside Pune."
},
{
title: "Viman Nagar",
description: "Viman Nagar is a well-connected Pune locality located near the airport and surrounded by hotels, offices, restaurants, and residential areas. Renting an Innova from Viman Nagar can be practical for airport pickups, family travel, corporate movements, sightseeing programs, and private intercity journeys."
},
{
title: "Baner",
description: "Baner is a popular residential and commercial area with corporate offices, restaurants, hotels, and entertainment facilities. Innova car rental services from Baner are suitable for families, business travelers, event transportation, airport transfers, and group journeys requiring comfortable seating and convenient door-to-door travel."
},
{
title: "Aundh",
description: "Aundh is an established Pune neighborhood with residential communities, commercial establishments, educational institutions, and healthcare facilities. A spacious Innova can be rented from this area for local transportation, family functions, airport travel, business requirements, sightseeing, and outstation trips."
},
{
title: "Lonavala",
description: "Lonavala is a popular hill destination for weekend holidays, family outings, corporate trips, and group vacations from Pune. An Innova offers comfortable seating and useful luggage capacity for travelers heading toward the hill station, particularly when several passengers want to stay together throughout the journey."
},
{
title: "Mahabaleshwar",
description: "Mahabaleshwar attracts families, tourists, couples, and groups looking for a relaxing hill-station getaway. Renting an Innova from Pune provides a private travel option with adequate passenger space for luggage and a flexible journey schedule, making it suitable for planned holidays and multi-stop sightseeing."
},
{
title: "Nashik",
description: "Nashik is an important destination for tourism, business visits, religious travel, and family journeys. An Innova rental is convenient for groups traveling from Pune because passengers can share one spacious vehicle while carrying luggage comfortably during the longer road journey."
},
{
title: "Shirdi",
description: "Shirdi is a major religious destination visited by families and groups throughout the year. An Innova rental provides private door-to-door transportation from Pune, allowing passengers to travel together with sufficient seating and luggage space while also making it easier to coordinate the return journey."
},
{
title: "Goa",
description: "Goa is a popular long-distance holiday destination for families, friends, corporate groups, and event travelers from Pune. A rented Innova is suitable for such journeys because it offers a spacious cabin, air conditioning, useful luggage capacity, and private transportation for passengers traveling together."
}
],
services: [
{
name: "Innova Car Rental Pune",
description: "Innova Car Rental Pune offers a practical transportation solution for families, groups, corporate travelers, tourists, and event guests. The spacious vehicle can be arranged for local travel, airport transfers, sightseeing, one-day requirements, or outstation journeys where passengers need comfortable seating and adequate luggage space."
},
{
name: "Innova Car Hire Pune",
description: "Innova Car Hire Pune is suitable for passengers who require a spacious vehicle for planned transportation around Pune or beyond the city. It can support family trips, corporate travel, weddings, airport transfers, sightseeing, and long-distance journeys with convenient private travel and driver assistance."
},
{
name: "Innova Car on Rent Pune",
description: "Innova Car on Rent Pune provides flexible access to a comfortable 7-seater vehicle for different travel requirements. Customers can use the rental for local movements, full-day travel, family functions, airport transportation, sightseeing, or outstation routes while keeping the entire group together in one vehicle."
},
{
name: "Innova Taxi Rental Pune",
description: "Innova Taxi Rental Pune combines spacious seating with convenient driver-operated transportation for local and long-distance travel. The service is useful for airport pickups, business requirements, family journeys, wedding transportation, sightseeing, and outstation trips where passengers prefer a private vehicle."
},
{
name: "Innova Cab Booking Pune",
description: "Innova Cab Booking Pune allows travelers to arrange a spacious vehicle according to their passenger count, destination, and schedule. With air-conditioned seating and luggage capacity, an Innova can comfortably handle airport transfers, family travel, corporate movements, events, sightseeing, and intercity journeys."
},
{
name: "Innova Car Rental Service Pune",
description: "Innova Car Rental Service Pune provides a convenient option for travelers who need a dependable vehicle for scheduled transportation. It can be arranged for local sightseeing, family outings, airport transfers, corporate travel, wedding events, and longer road journeys requiring comfortable passenger accommodation."
},
{
name: "Innova Hire Service Pune",
description: "Innova Hire Service Pune is designed for passengers looking for a spacious private vehicle with driver support. The service can accommodate family trips, group transportation, business travel, functions, airport transfers, and outstation journeys while reducing the need to arrange multiple smaller cars."
},
{
name: "AC Innova Car Rental Pune",
description: "AC Innova Car Rental Pune provides a climate-controlled cabin for comfortable travel in Pune and on longer road journeys. Families, senior passengers, business travelers, and groups can benefit from the combination of air conditioning, spacious seating, luggage room, and private vehicle transportation."
},
{
name: "Luxury Innova Car Rental Pune",
description: "Luxury Innova Car Rental Pune offers a premium and comfortable transportation option for business travel, special occasions, family journeys, weddings, airport transfers, and tourism. The spacious cabin and polished vehicle experience make it suitable for passengers who want a more comfortable private travel arrangement."
},
{
name: "7 Seater Innova Rental Pune",
description: "7 Seater Innova Rental Pune is suitable for families and small groups who want to travel together without arranging multiple cars. The additional seating capacity and luggage space make the vehicle useful for airport transportation, holidays, sightseeing, weddings, family functions, and outstation journeys."
},
{
name: "Affordable Innova Car Rental Pune",
description: "Affordable Innova Car Rental Pune provides a practical way to arrange a spacious vehicle for planned journeys without compromising on useful passenger capacity. It can be considered for local travel, airport pickups, family trips, corporate requirements, sightseeing, and outstation transportation from Pune."
},
{
name: "Innova for Outstation Pune",
description: "Innova for Outstation Pune is suitable for private road journeys from Pune to destinations across Maharashtra and neighboring states. The comfortable seating configuration, air conditioning, luggage capacity, and driver support make the vehicle useful for families and groups planning longer trips."
},
{
name: "Innova for Family Trip Pune",
description: "Innova for Family Trip Pune provides a spacious travel environment for families planning holidays, weekend trips, religious journeys, and visits to relatives. Passengers can travel together with their luggage while enjoying the flexibility of private pickup and drop arrangements based on their itinerary."
},
{
name: "Innova for Group Travel Pune",
description: "Innova for Group Travel Pune allows friends, relatives, colleagues, and small groups to share one comfortable vehicle for their journey. It is useful for airport transfers, weekend trips, sightseeing, events, and outstation travel where coordinated transportation and adequate passenger space are important."
},
{
name: "Innova for Corporate Travel Pune",
description: "Innova for Corporate Travel Pune offers comfortable transportation for executives, employees, clients, and visiting business teams. It can be used for office transfers, airport pickups, meetings, conferences, site visits, and intercity business journeys where professional driver support and comfortable seating are required."
},
{
name: "Innova for Wedding Pune",
description: "Innova for Wedding Pune is a convenient option for transporting wedding guests, relatives, family members, and event participants. The spacious cabin can support hotel transfers, airport pickups, venue movements, and transportation between different wedding functions while allowing groups to travel together."
},
{
name: "Innova Airport Pickup Car Pune",
description: "Innova Airport Pickup Car Pune provides additional passenger and luggage space for travelers arriving at or departing from Pune Airport. Families and groups can use one private vehicle for airport-to-hotel, airport-to-home, or onward destination transfers instead of coordinating several smaller cabs."
},
{
name: "Innova for Local Sightseeing Pune",
description: "Innova for Local Sightseeing Pune is suitable for families and groups visiting Pune's historical, cultural, religious, and recreational attractions. A private vehicle and driver allow travelers to organize multiple stops within their preferred schedule while keeping the group together throughout the sightseeing program."
},
{
name: "Innova One Day Car Rental Pune",
description: "Innova One Day Car Rental Pune is useful for full-day travel involving sightseeing, business appointments, shopping, family activities, events, or multiple destinations. A dedicated vehicle allows passengers to maintain a flexible itinerary without repeatedly arranging separate transportation throughout the day."
},
{
name: "Innova Car Near Me Pune",
description: "Innova Car Near Me Pune is helpful for travelers searching for a spacious vehicle close to their pickup area. The rental can be used for airport transfers, local travel, family functions, corporate transportation, sightseeing, and outstation trips with the convenience of private vehicle service."
},
{
name: "Innova Car Rental with Driver Pune",
description: "Innova Car Rental with Driver Pune provides chauffeur-assisted transportation for passengers who prefer not to drive themselves. It is suitable for local travel, airport transfers, family holidays, corporate trips, weddings, sightseeing, and long-distance routes where a comfortable driver-operated vehicle is preferred."
},
{
name: "Private Innova Car Hire Pune",
description: "Private Innova Car Hire Pune offers exclusive use of the vehicle for individuals, families, or groups without sharing the cabin with unrelated passengers. This provides greater privacy and scheduling flexibility for airport transfers, events, business travel, family trips, sightseeing, and outstation journeys."
},
{
name: "Innova Tourist Car Rental Pune",
description: "Innova Tourist Car Rental Pune is designed for travelers exploring Pune and nearby destinations or planning longer sightseeing journeys. The spacious cabin, comfortable seating, luggage capacity, and driver support make it suitable for families, tourists, and groups following customized travel itineraries."
},
{
name: "Innova for Family Function Pune",
description: "Innova for Family Function Pune provides convenient transportation for guests and relatives attending family gatherings, ceremonies, celebrations, and special occasions. Its seating capacity makes it easier for groups to travel together between homes, hotels, event venues, railway stations, airports, and nearby destinations."
},
{
name: "Innova Outstation Car Hire Pune",
description: "Innova Outstation Car Hire Pune is a practical choice for travelers planning longer private journeys from Pune. Whether the destination is a hill station, religious location, business city, or holiday destination, the spacious Innova provides comfortable seating, luggage capacity, air conditioning, and driver-assisted travel."
}
],
tableData: [
["Innova Car Rental Pune"],
["Innova Car Hire Pune"],
["Innova Car on Rent Pune"],
["Innova Taxi Rental Pune"],
["Innova Cab Booking Pune"],
["Innova Car Rental Service Pune"],
["Innova Hire Service Pune"],
["AC Innova Car Rental Pune"],
["Luxury Innova Car Rental Pune"],
["7 Seater Innova Rental Pune"],
["Affordable Innova Car Rental Pune"],
["Innova for Outstation Pune"],
["Innova for Family Trip Pune"],
["Innova for Group Travel Pune"],
["Innova for Corporate Travel Pune"],
["Innova for Wedding Pune"],
["Innova Airport Pickup Car Pune"],
["Innova for Local Sightseeing Pune"],
["Innova One Day Car Rental Pune"],
["Innova Car Near Me Pune"],
["Innova Car Rental with Driver Pune"],
["Private Innova Car Hire Pune"],
["Innova Tourist Car Rental Pune"],
["Innova for Family Function Pune"],
["Innova Outstation Car Hire Pune"]
],
whychoose: [
{
WhyChooseheading: "Comfortable 7-Seater Travel",
WhyChoosedescription: "The Innova's spacious seating arrangement makes it convenient for families and groups traveling together. Passengers get useful interior room for longer journeys, while the vehicle's luggage capacity helps accommodate travel bags without requiring multiple smaller cars."
},
{
WhyChooseheading: "Flexible Rental Options",
WhyChoosedescription: "An Innova can be arranged for short local requirements, full-day rentals, airport transfers, sightseeing schedules, family functions, corporate travel, and outstation journeys. This flexibility allows the vehicle to match different trip durations and passenger requirements."
},
{
WhyChooseheading: "Private Transportation",
WhyChoosedescription: "Private Innova rental gives passengers exclusive use of the vehicle, allowing families, colleagues, and groups to travel together without sharing their ride with unrelated passengers. This is particularly convenient for events, airport transfers, holidays, and customized sightseeing plans."
},
{
WhyChooseheading: "Air-Conditioned Cabin",
WhyChoosedescription: "The air-conditioned interior provides a more comfortable environment for passengers during city travel as well as longer road journeys. Families, senior travelers, corporate passengers, and tourists can enjoy a more relaxed cabin experience throughout their scheduled trip."
},
{
WhyChooseheading: "Driver-Assisted Journeys",
WhyChoosedescription: "A professional driver can handle the driving while passengers focus on their work, family activities, sightseeing, or relaxation. Driver-assisted rental is especially useful for unfamiliar routes, airport transportation, long-distance travel, and multi-stop itineraries."
},
{
WhyChooseheading: "Ideal for Airport Travel",
WhyChoosedescription: "The Innova provides useful space for passengers and luggage, making it a practical choice for Pune Airport transfers. Families and groups can travel together from the airport to homes, hotels, offices, or onward destinations without arranging separate vehicles."
},
{
WhyChooseheading: "Suitable for Events and Functions",
WhyChoosedescription: "Weddings, family functions, ceremonies, and corporate events often require coordinated transportation for multiple guests. An Innova can help move small groups between airports, railway stations, hotels, residences, and event venues with greater convenience."
},
{
WhyChooseheading: "Convenient Outstation Travel",
WhyChoosedescription: "For longer journeys from Pune, the Innova combines comfortable seating, air conditioning, luggage capacity, and private driver support. It can be used for destinations such as Lonavala, Mahabaleshwar, Nashik, Shirdi, Mumbai, Goa, and other intercity travel requirements."
}
]
};













const faqData = [
{
question: "Can I rent an Innova car in Pune for local travel?",
answer: "An Innova car can be rented in Pune for local transportation needs such as family functions, business meetings, hotel transfers, sightseeing, shopping trips, and other city journeys. Share your pickup location, destination, travel date, and required duration so the rental arrangement can be planned accordingly."
},
{
question: "What can I use an Innova rental car for in Pune?",
answer: "Innova rental cars can be used for local sightseeing, airport transfers, corporate travel, weddings, family occasions, group outings, and outstation journeys from Pune. The vehicle arrangement can be planned according to the number of passengers, luggage requirements, route, and duration of travel."
},
{
question: "Can I rent an Innova in Pune for an outstation trip?",
answer: "Outstation Innova rentals can be arranged from Pune for destinations such as Mumbai, Goa, Nashik, Shirdi, Mahabaleshwar, Kolhapur, Bangalore, Hyderabad, and other cities. Depending on the itinerary, travellers can discuss one-way, round-trip, or multi-day transportation requirements."
},
{
question: "Is an Innova suitable for family trips from Pune?",
answer: "Families can consider an Innova rental when several members need to travel together for holidays, religious journeys, family visits, weddings, or weekend trips. A dedicated vehicle can make it easier to coordinate children, senior members, luggage, travel breaks, and sightseeing stops."
},
{
question: "Can I rent an Innova car for Pune Airport transfers?",
answer: "An Innova can be arranged for Pune Airport pickup and drop requirements involving families, business travellers, or groups with luggage. Providing the flight timing, airport requirement, pickup location, passenger count, and destination helps coordinate the airport transportation around your travel schedule."
},
{
question: "Can companies hire an Innova rental car in Pune?",
answer: "Corporate organizations can arrange an Innova for employee transportation, client visits, business meetings, conferences, training programs, office transfers, and team outings. The rental schedule can be coordinated around office timings, business appointments, pickup points, and planned destinations."
},
{
question: "Can I rent an Innova for a wedding or family function?",
answer: "An Innova rental can be useful for transporting relatives and guests during weddings, receptions, family gatherings, and other functions. The vehicle can cover transfers between homes, hotels, event venues, railway stations, airports, and other locations included in the event itinerary."
},
{
question: "Can I hire an Innova in Pune for a one-day trip?",
answer: "A one-day Innova rental can be planned for sightseeing, nearby destinations, religious visits, picnics, or family outings. Share the starting point, destination, number of passengers, preferred departure time, and expected return timing so the journey can be organized around your day's itinerary."
},
{
question: "Can I travel with luggage in a rented Innova?",
answer: "Passengers can provide details about the approximate number of bags when requesting the rental. This is particularly helpful for airport transfers, family holidays, weddings, and multi-day journeys where travellers may carry several suitcases or personal belongings."
},
{
question: "How can I book an Innova Car Rental in Pune with Citysky Cabs?",
answer: "To arrange an Innova rental, provide your Pune pickup location, destination, travel date, passenger count, luggage details, preferred timing, and required rental duration. Citysky Cabs can coordinate the vehicle according to your local, airport, corporate, sightseeing, or outstation travel requirements."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Dinesh Jagtap",
feedback:
"I rented an Innova in Pune for a family function where we had relatives travelling between the hotel and venue throughout the day. Having one vehicle available for the group made the transfers much easier to coordinate. Citysky Cabs took our schedule and locations into consideration while arranging the rental.",
rating: 5
},
{
id: 2,
name: "Miss. Neha Bansode",
feedback:
"We needed a rental car for a weekend trip from Pune with family and luggage. I chose an Innova because we wanted everyone to travel together and planned a few stops during the journey. The booking with Citysky Cabs was straightforward, and the vehicle arrangement suited our travel plan.",
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
  "name": "Innova Car Rental in Pune",
  "image": "https://www.cityskycab.in/assets/images/innova-car-rental-in-pune.webp",
  "description": "Innova Car Rental in Pune from Citysky Cabs is suitable for families, corporate travellers, airport transfers, local journeys and outstation trips requiring a comfortable and spacious vehicle. Customers can choose from Innova Car Rental Pune, Innova Car Hire Pune, Innova Car on Rent Pune and Innova Taxi Rental Pune according to their travel plans. AC and luxury Innova options provide comfortable seating and practical luggage space for longer journeys, while experienced drivers help make city and highway travel more convenient. Flexible rental arrangements are available for local use, full-day travel, airport transfers and intercity routes from Pune.",
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
    "url": "https://www.cityskycab.in/innova-car-rental-in-pune"
  }
};




    return (
        <div>
<Helmet>
  <title>
    Innova Car Rental in Pune | Luxury Innova Car Rental Pune | +91 9272112191 
  </title>

  <meta
    name="description"
    content="Choose Innova Car Rental in Pune from Citysky Cabs for local travel, airport transfers, corporate trips and outstation journeys. Get comfortable AC and luxury Innova cars with experienced drivers and flexible rental options."
  />

  <meta
    name="keywords"
    content="Innova Car Rental Pune, Innova Car Hire Pune, Innova Car on Rent Pune, Innova Taxi Rental Pune, Innova Cab Booking Pune, Innova Car Rental Service Pune, Innova Hire Service Pune, AC Innova Car Rental Pune, Luxury Innova Car Rental Pune, Innova Car Rental in Pune, Innova taxi Pune, Innova cab Pune, Innova car hire near me Pune, Innova rental cab Pune, Innova car rental per km Pune, Innova local rental Pune, Innova airport cab Pune, Innova outstation rental Pune, 7 seater Innova rental Pune"
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
                            <img src='/images/keyword/19.jpg' alt='img' className='img-fluid' />
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

export default Innovacarrentalinpune;