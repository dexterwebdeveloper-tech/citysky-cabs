import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Puneonewaycabservice() {


const cardData = {
keyword: "Pune One Way Cab Service",
headingDescription: "Citysky Cabs provides convenient Pune One Way Cab Service for passengers who need direct transportation to another city or destination without arranging a return journey. With comfortable vehicle options, professional drivers, flexible pickup points, and convenient booking support, one-way cabs are suitable for airport transfers, business travel, family visits, relocations, personal journeys, and long-distance outstation routes from Pune.",
topPlaces: [
{
title: "Mumbai",
description: "Mumbai is one of the most frequently travelled destinations from Pune for business meetings, family visits, airport connections, and personal travel. A one-way cab provides direct door-to-door transportation without requiring passengers to arrange a return vehicle, making the journey practical for travellers staying in Mumbai."
},
{
title: "Pune Airport",
description: "Pune Airport is a convenient starting point for travellers who need direct transportation to another city after arriving or departing from the airport. One-way cab services can connect passengers with Mumbai, Nashik, Kolhapur, Mahabaleshwar, and other destinations while accommodating luggage and scheduled travel requirements."
},
{
title: "Mahabaleshwar",
description: "Mahabaleshwar attracts visitors throughout the year for holidays, family trips, weekend breaks, and sightseeing. A one-way cab from Pune allows passengers to travel directly to their hotel, resort, or preferred destination without paying for an unnecessary return journey when they plan to return by another mode."
},
{
title: "Lonavala",
description: "Lonavala is a popular getaway for families, friends, couples, and corporate groups travelling from Pune. One-way cab transportation is useful when passengers need a direct drop at a hotel, resort, villa, or another destination and have separate plans for their return journey."
},
{
title: "Nashik",
description: "Nashik is an important destination for business travel, religious visits, family functions, and leisure journeys. A one-way cab from Pune offers direct transportation with flexible pickup and drop locations, making it suitable for travellers who do not require the same vehicle for the return trip."
},
{
title: "Kolhapur",
description: "Kolhapur is frequently visited for business, pilgrimage, family occasions, and regional travel. A one-way taxi provides a convenient alternative to shared transportation by taking passengers directly from Pune to their preferred destination in Kolhapur with suitable seating and luggage capacity."
},
{
title: "Goa",
description: "Goa is a popular long-distance destination for holidays, family vacations, celebrations, and leisure travel from Pune. One-way cab service is useful for travellers who want a comfortable road journey to Goa without committing to a return cab, especially when their return plans are flexible or arranged separately."
},
{
title: "Shirdi",
description: "Shirdi is an important pilgrimage destination visited by devotees from Pune and surrounding regions. A one-way cab can provide direct transportation to hotels, temple-area accommodations, or other preferred drop points, allowing passengers to plan their onward or return journey independently."
},
{
title: "Aurangabad",
description: "Aurangabad, also known as Sambhajinagar, is a significant destination for business, heritage tourism, family travel, and pilgrimage routes. One-way cab transportation from Pune offers a direct and comfortable road journey for passengers who require only a drop service at their destination."
},
{
title: "Alibaug",
description: "Alibaug is a popular coastal destination for weekend holidays, family outings, resort stays, and group trips from Pune. A one-way cab allows travellers to reach Alibaug directly with convenient pickup, comfortable seating, and sufficient luggage space while keeping their return arrangements independent."
}
],
services: [
{
name: "Pune one way cab service",
description: "Pune one way cab service is suitable for passengers who need direct transportation from Pune to another city or destination without booking the same vehicle for the return journey. Citysky Cabs supports flexible pickup locations, comfortable vehicles, professional drivers, and convenient drop arrangements for personal, business, family, and outstation travel."
},
{
name: "one way taxipune",
description: "one way taxipune provides a practical travel option for passengers who only require transportation toward their destination. Citysky Cabs can arrange direct taxi journeys from Pune for business travel, family visits, airport transfers, relocation requirements, and intercity trips with vehicle choices based on passenger and luggage needs."
},
{
name: "one side cabpune",
description: "one side cabpune is useful when travellers need a vehicle for only the onward journey and have their own arrangements for returning. Citysky Cabs supports one-side transportation from Pune to nearby and long-distance destinations with convenient pickup points, suitable vehicles, and professional driver coordination."
},
{
name: "drop taxipune",
description: "drop taxipune services are designed for passengers who primarily need a direct drop from Pune to another city, airport, hotel, residence, office, or destination. Citysky Cabs provides flexible one-way transportation with comfortable vehicles and planned pickup and drop arrangements for different types of journeys."
},
{
name: "intercity one way cabpune",
description: "intercity one way cabpune is suitable for travellers moving between Pune and another city for work, family commitments, education, relocation, holidays, or personal reasons. Citysky Cabs can arrange direct intercity transportation with appropriate vehicle options and professional driver support for a convenient road journey."
},
{
name: "pune to city one way taxi",
description: "pune to city one way taxi requirements can cover transportation from Pune to a wide range of cities across Maharashtra and other states. Citysky Cabs supports direct pickup and destination drop services, allowing passengers to travel comfortably without having to reserve the vehicle for the return portion."
},
{
name: "one way cab booking pune",
description: "one way cab booking pune makes it easier to arrange a direct journey when a return cab is not required. Citysky Cabs supports advance booking for airport transfers, business travel, family trips, relocation, and outstation routes, with vehicle selection based on the number of passengers and luggage."
},
{
name: "affordable one way cabpune",
description: "affordable one way cabpune is a practical option for travellers who want direct intercity transportation while avoiding the need to arrange a complete round trip. Citysky Cabs provides different vehicle choices so passengers can select an arrangement appropriate for their route, group size, luggage, and overall travel requirements."
},
{
name: "cheap one way taxipune",
description: "cheap one way taxipune can be useful for cost-conscious passengers travelling from Pune to another city or destination. Citysky Cabs supports economical one-way travel with practical vehicle options, convenient pickup locations, and direct destination drops for individuals, families, and business travellers."
},
{
name: "best one way cabpune",
description: "best one way cabpune requirements can include dependable pickup coordination, comfortable vehicles, professional drivers, and a straightforward destination drop. Citysky Cabs supports local-to-intercity travel for airport journeys, family visits, corporate requirements, holidays, and other routes where passengers need only one-way transportation."
},
{
name: "one way outstation cabpune",
description: "one way outstation cabpune is suitable for passengers travelling from Pune toward destinations such as Mumbai, Nashik, Goa, Kolhapur, Shirdi, Mahabaleshwar, Lonavala, and other cities. Citysky Cabs provides direct transportation with suitable vehicle choices and convenient pickup and destination drop arrangements."
},
{
name: "long distance one way taxipune",
description: "long distance one way taxipune services are useful for extended road journeys where passengers need transportation only toward their destination. Citysky Cabs supports long-distance routes from Pune with comfortable vehicles, professional driver coordination, planned travel arrangements, and direct door-to-door drop facilities."
},
{
name: "sedan one way cabpune",
description: "sedan one way cabpune is suitable for individuals, couples, small families, and business travellers who prefer a comfortable and economical vehicle for direct intercity travel. Citysky Cabs can arrange sedan transportation for airport transfers, personal journeys, business trips, and one-way outstation routes."
},
{
name: "suv one way cabpune",
description: "suv one way cabpune provides additional space and comfortable seating for passengers travelling with family, friends, or more luggage. Citysky Cabs can arrange suitable SUV options for longer journeys, airport transportation, family travel, business requirements, and one-way outstation trips from Pune."
},
{
name: "instant one way cabpune",
description: "instant one way cabpune requirements are useful when passengers need direct transportation with limited advance planning. Citysky Cabs supports convenient cab coordination for suitable routes and vehicle requirements, helping travellers arrange pickup and destination drop transportation for local, airport, and intercity journeys."
},
{
name: "Pune One Way Cab Service",
description: "Pune One Way Cab Service is designed for travellers who need a direct ride from Pune to their destination without retaining the vehicle for the return journey. Citysky Cabs offers comfortable vehicle options, professional driver coordination, flexible pickup points, and convenient drops for personal, corporate, airport, and outstation travel."
},
{
name: "One Way CabPune",
description: "One Way CabPune provides a convenient solution for passengers travelling from Pune to another city, airport, hotel, office, or residence. Citysky Cabs supports direct one-way transportation with vehicle choices suited to individual travellers, families, small groups, and passengers carrying additional luggage."
},
{
name: "One Way Taxi Service Pune",
description: "One Way Taxi Service Pune is useful for travellers who want a direct destination drop without booking a return trip. Citysky Cabs can arrange transportation for business visits, family journeys, airport connections, relocation travel, holidays, and long-distance routes with convenient scheduling and professional driver support."
},
{
name: "Pune One Side Cab Booking",
description: "Pune One Side Cab Booking is suitable when the passenger's travel plan includes a one-direction journey and the return transportation will be arranged separately. Citysky Cabs provides flexible booking support for different destinations with suitable vehicles, comfortable seating, luggage capacity, and planned pickup coordination."
},
{
name: "Best One Way Cab in Pune",
description: "Best One Way Cab in Pune requirements can involve dependable pickup timing, comfortable vehicles, professional drivers, and direct destination drops. Citysky Cabs supports one-way journeys for individuals, families, corporate travellers, airport passengers, and outstation customers who prefer a simple point-to-point transportation arrangement."
},
{
name: "Cheap One Way CabPune",
description: "Cheap One Way CabPune is useful for passengers seeking practical transportation from Pune without paying for a return journey that they do not require. Citysky Cabs provides suitable vehicle choices for different passenger counts and routes while supporting convenient pickup and direct destination drop services."
},
{
name: "Online One Way Cab Booking Pune",
description: "Online One Way Cab Booking Pune allows passengers to coordinate their one-way transportation in advance without needing to visit a booking counter. Citysky Cabs supports online booking arrangements for local-to-intercity travel, airport transfers, family journeys, corporate trips, and long-distance destinations."
},
{
name: "24x7 One Way TaxiPune",
description: "24x7 One Way TaxiPune is suitable for passengers who need direct transportation at different hours, including early airport departures, late-night arrivals, urgent travel, and scheduled outstation journeys. Citysky Cabs supports round-the-clock travel requirements with convenient pickup coordination and appropriate vehicle options."
},
{
name: "Outstation One Way CabPune",
description: "Outstation One Way CabPune provides direct transportation from Pune to destinations across Maharashtra and other states without requiring a return booking. Citysky Cabs can arrange comfortable vehicles for routes such as Mumbai, Goa, Nashik, Kolhapur, Shirdi, Mahabaleshwar, and other long-distance destinations."
}
],
tableData: [
["Pune one way cab service"],
["one way taxipune"],
["one side cabpune"],
["drop taxipune"],
["intercity one way cabpune"],
["pune to city one way taxi"],
["one way cab booking pune"],
["affordable one way cabpune"],
["cheap one way taxipune"],
["best one way cabpune"],
["one way outstation cabpune"],
["long distance one way taxipune"],
["sedan one way cabpune"],
["suv one way cabpune"],
["instant one way cabpune"],
["Pune One Way Cab Service"],
["One Way CabPune"],
["One Way Taxi Service Pune"],
["Pune One Side Cab Booking"],
["Best One Way Cab in Pune"],
["Cheap One Way CabPune"],
["Online One Way Cab Booking Pune"],
["24x7 One Way TaxiPune"],
["Outstation One Way CabPune"]
],
whychoose: [
{
WhyChooseheading: "Direct Point-to-Point Travel",
WhyChoosedescription: "One-way cab travel eliminates the need to reserve a vehicle for the return journey when passengers already have separate return plans. Citysky Cabs supports direct pickup and destination drop arrangements, making this format practical for business travel, family visits, airport transfers, relocation, and personal journeys."
},
{
WhyChooseheading: "Flexible Pickup Locations",
WhyChoosedescription: "Passengers can plan pickup from a convenient location in Pune rather than travelling to a fixed taxi stand. Home, hotel, office, railway station, airport, and other suitable pickup points can make the beginning of an intercity journey more convenient and time-efficient."
},
{
WhyChooseheading: "Vehicle Choices for Different Groups",
WhyChoosedescription: "Different passengers have different seating and luggage requirements, so vehicle selection can be based on the size of the travelling group. Sedan and SUV options provide practical choices for individuals, couples, families, business travellers, and passengers carrying additional luggage."
},
{
WhyChooseheading: "Useful for Long-Distance Routes",
WhyChoosedescription: "One-way transportation is particularly useful for long-distance journeys where travellers do not need the same vehicle after reaching their destination. Citysky Cabs supports routes toward major destinations across Maharashtra and other states with comfortable vehicles and professional driver coordination."
},
{
WhyChooseheading: "Airport Travel Convenience",
WhyChoosedescription: "Airport journeys often have fixed schedules, making direct cab transportation a convenient option for passengers with flights to catch or arrivals to manage. One-way services can connect Pune Airport with homes, hotels, offices, and destinations in other cities according to the travel plan."
},
{
WhyChooseheading: "Suitable for Family and Personal Travel",
WhyChoosedescription: "Families travelling for holidays, functions, religious visits, or personal commitments can benefit from a dedicated one-way vehicle. Citysky Cabs provides comfortable travel arrangements with suitable seating and luggage capacity for journeys where the return trip is not required."
},
{
WhyChooseheading: "Professional Driver Support",
WhyChoosedescription: "A long-distance one-way journey requires clear pickup coordination and dependable communication throughout the trip. Citysky Cabs supports passengers with professional driver coordination, planned pickup details, and direct destination drop arrangements for a smoother travel experience."
},
{
WhyChooseheading: "Convenient Advance Booking",
WhyChoosedescription: "Advance booking helps passengers organize transportation around their preferred travel date and departure time, particularly for airport transfers, family functions, corporate meetings, and outstation journeys. Citysky Cabs provides convenient booking coordination for planned one-way travel from Pune."
}
]
};








const faqData = [
{
question: "How can I book a Pune One Way Cab Service with Citysky Cabs?",
answer: "To arrange a one-way cab from Pune, passengers can share their pickup location, destination, travel date, preferred departure time, number of passengers, luggage details, and vehicle requirement. Citysky Cabs can then coordinate the journey according to the planned route and travel schedule."
},
{
question: "What is a one-way cab service from Pune?",
answer: "A one-way cab is intended for travellers who need transportation from Pune to a destination without requiring the same vehicle for a return journey. This type of travel can be useful for relocation, personal visits, business trips, family functions, airport transfers, and journeys to another city."
},
{
question: "Which destinations can I travel to with a one-way cab from Pune?",
answer: "Passengers can enquire about one-way travel from Pune to destinations such as Mumbai, Nashik, Shirdi, Mahabaleshwar, Lonavala, Kolhapur, Goa, Aurangabad, Indore, Hyderabad, Bangalore, and other locations. The exact route and destination can be shared while making the enquiry."
},
{
question: "Is Pune One Way Cab Service suitable for airport travel?",
answer: "One-way cab transportation can be arranged for passengers travelling from Pune to an airport in another city or for suitable airport-related routes. Flight timing, passenger count, luggage quantity, pickup address, and airport terminal information can be provided so the journey can be planned around the travel schedule."
},
{
question: "Can I use a one-way cab for shifting to another city?",
answer: "Travellers relocating from Pune to another city can enquire about one-way cab transportation when they need to move with personal luggage and household belongings. It is helpful to provide the approximate number of passengers, luggage volume, pickup address, and destination while discussing the vehicle requirement."
},
{
question: "Can families use a Pune one-way cab for long-distance travel?",
answer: "Families travelling to another city for a wedding, family visit, education, religious program, or personal work can consider a private one-way cab. Everyone can travel together in the same vehicle while carrying their luggage and following a mutually planned departure schedule."
},
{
question: "Can I arrange a one-way cab from Pune for a business trip?",
answer: "Professionals travelling from Pune for meetings, client visits, conferences, training programs, interviews, or office assignments can enquire about one-way cab transportation. The pickup point, destination, reporting time, passenger details, and any intermediate stops can be shared when planning the trip."
},
{
question: "Can I get a one-way cab from Pune to Mumbai?",
answer: "Travellers needing direct transportation from Pune to Mumbai can enquire about a one-way private cab. The Mumbai drop location may be a home, hotel, office, railway station, airport, or another specified address, depending on the passenger's travel requirement."
},
{
question: "Can I carry luggage in a Pune one-way cab?",
answer: "Passengers can travel with luggage in a one-way cab, including suitcases, travel bags, and personal belongings. When the baggage quantity is higher than usual, it is useful to mention the approximate luggage volume along with the passenger count so an appropriate vehicle can be discussed."
},
{
question: "What details are needed for a Pune One Way Cab enquiry?",
answer: "Citysky Cabs can plan a one-way journey after receiving the Pune pickup address, destination, travel date, preferred departure time, passenger count, luggage details, and vehicle preference. Any required stops, airport timings, special arrangements, or other route information should also be communicated in advance."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Rohit Bhosale",
feedback:
"I was shifting from Pune to Mumbai for work and needed a one-way cab because I did not require a return trip. I shared my pickup address, destination, luggage details, and preferred timing with Citysky Cabs. The private vehicle was convenient for travelling directly with all my bags.",
rating: 5
},
{
id: 2,
name: "Miss. Aditi Sharma",
feedback:
"My parents had to travel from Pune to Nashik for a family function, and I wanted them to have a direct cab instead of changing transportation on the way. Citysky Cabs arranged the journey after I provided the pickup and destination details. The one-way arrangement worked well for their travel plan.",
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
  "name": "Pune One Way Cab Service",
  "image": "https://www.cityskycab.in/assets/images/pune-one-way-cab-service.webp",
  "description": "Pune One Way Cab Service from Citysky Cabs provides private point-to-point transportation for travellers who need a single-side drop from Pune without booking a return journey. The service covers One Way Taxi Pune, One Side Cab Pune, Drop Taxi Pune, Intercity One Way Cab Pune, Pune to City One Way Taxi and One Way Cab Booking Pune requirements. Travellers can choose sedan, Ertiga or Innova Crysta vehicles according to passenger count, luggage and destination. One-way cab services can be arranged from Pune and Pimpri Chinchwad to popular destinations such as Mumbai, Mumbai Airport, Nashik, Shirdi, Mahabaleshwar, Lonavala, Kolhapur, Sambhajinagar and other intercity locations. Citysky Cabs supports flexible pickup from homes, offices, hotels, railway stations and Pune Airport for convenient private one-way journeys.",
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
    "url": "https://www.cityskycab.in/pune-one-way-cab-service"
  }
};



    return (
        <div>


<Helmet>
  <title>
    Pune One Way Cab Service | Intercity Drop Taxi Booking | +91 9272112191 
  </title>

  <meta
    name="description"
    content="Pune One Way Cab Service by Citysky Cabs for private intercity drops. Book sedan, Ertiga or Innova Crysta for convenient one-side taxi travel from Pune and PCMC."
  />

  <meta
    name="keywords"
    content="Pune One Way Cab Service, one way taxi Pune, one side cab Pune, drop taxi Pune, intercity one way cab Pune, Pune to city one way taxi, one way cab booking Pune, Pune one way taxi service, Pune one side taxi, Pune drop cab service, one way cab Pune, one way cabs in Pune, one way taxi service in Pune, Pune intercity cab service, intercity taxi Pune, Pune intercity one way taxi, one way outstation cab Pune, Pune outstation one way taxi, affordable one way cab Pune, private one way cab Pune, AC one way cab Pune, one way car rental Pune, one way car hire Pune, online one way cab booking Pune, one way taxi booking Pune, Pune one way cab fare, Pune one way taxi fare, Pune one way cab charges, Pune sedan one way cab, Pune Ertiga one way cab, Pune Innova one way cab, Pune Innova Crysta one way cab, Pune to Mumbai one way cab, Pune to Mumbai Airport one way cab, Pune to Nashik one way cab, Pune to Shirdi one way cab, Pune to Lonavala one way cab, Pune to Mahabaleshwar one way cab, Pune to Kolhapur one way cab, Pune to Sambhajinagar one way cab, Pune Airport one way cab, Pimpri Chinchwad one way cab, PCMC one way taxi service, one way cab from Pune, one way taxi from Pune"
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
                            <img src='/images/keywords/122.jpg' alt='img' className='img-fluid' />
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

export default Puneonewaycabservice;