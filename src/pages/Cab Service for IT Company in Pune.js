import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Cabsserviceforitcompany() {

const cardData = {
keyword: "Cab Service for IT Company in Pune",
headingDescription: "Citysky Cabs provides dependable cab services for IT companies in Pune, designed around employee transportation, office pickup and drop, airport transfers, business travel, and scheduled corporate mobility. From daily employee routes and monthly transport arrangements to IT park transfers and outstation requirements, the service supports companies with comfortable cars, professional drivers, flexible scheduling, and convenient booking options. Businesses can arrange suitable transportation for employees, guests, clients, and corporate travel while maintaining reliable pickup timings and smooth coordination across Pune.",
topPlaces: [
{
title: "Hinjewadi IT Park",
description: "Hinjewadi is one of Pune's major technology and business corridors, making it a key location for employee pickup and drop transportation. Cab services can support companies operating across Phase 1, Phase 2, and Phase 3 with scheduled daily routes, shift-based transportation, and convenient office transfers."
},
{
title: "Kharadi EON IT Park",
description: "Kharadi has a strong concentration of IT offices and corporate workplaces, creating regular demand for dependable employee mobility. Corporate cab arrangements can connect staff with residential areas, nearby business districts, Pune Airport, and other important workplace destinations while maintaining planned travel schedules."
},
{
title: "Magarpatta City",
description: "Magarpatta City is an established commercial and technology destination where employees, business visitors, and corporate guests frequently require organized transportation. Cab services can be arranged for office commuting, airport transfers, client meetings, and scheduled employee pickup and drop requirements."
},
{
title: "Pune International Airport",
description: "Pune International Airport is an important travel point for IT professionals, visiting executives, clients, and employees travelling for business purposes. Dedicated corporate cab arrangements can provide airport pickup and drop services with scheduled reporting times and direct transfers to offices, hotels, and residential locations."
},
{
title: "Baner",
description: "Baner combines commercial offices, technology businesses, hotels, and residential communities, making it a practical area for corporate transportation. IT companies can use scheduled cabs for employee commuting, office transfers, business meetings, and airport-related travel from this western Pune corridor."
},
{
title: "Viman Nagar",
description: "Viman Nagar is close to Pune Airport and includes numerous commercial establishments, hotels, and business destinations. Corporate cab services can help IT employees and business guests travel conveniently between offices, accommodation, residential areas, and airport terminals according to planned schedules."
},
{
title: "Pimpri Chinchwad",
description: "Pimpri Chinchwad is an important employment and industrial region with offices, manufacturing units, technology businesses, and residential areas. Employee transportation services can connect staff from this region to Pune's major IT corridors while supporting regular office shifts and corporate travel requirements."
},
{
title: "Wakad",
description: "Wakad provides convenient connectivity between Hinjewadi, Baner, Pimpri Chinchwad, and central Pune, making it a useful employee transportation corridor. IT companies can arrange regular pickup and drop routes for employees living around Wakad and nearby residential communities."
},
{
title: "Kalyani Nagar",
description: "Kalyani Nagar is surrounded by corporate offices, commercial establishments, hotels, and premium residential areas. IT company cab services can support employee commuting, executive travel, client transportation, airport transfers, and scheduled movement between business locations in eastern Pune."
},
{
title: "Shivajinagar",
description: "Shivajinagar is a central Pune transportation hub with access to business districts, residential areas, railway connectivity, and major roads. Corporate cab arrangements can help IT employees and visiting professionals travel between offices, transit points, meetings, and other business destinations efficiently."
}
],
services: [
{
name: "IT Company Cab Service Pune",
description: "Dedicated cab transportation for IT companies in Pune can support regular employee commuting, office transfers, scheduled pickup and drop routes, and business travel. Flexible vehicle options and planned schedules help companies coordinate daily transportation requirements across multiple employee locations."
},
{
name: "IT Company Taxi Service Pune",
description: "Professional taxi services for IT companies can be arranged for employees, executives, clients, and visiting professionals travelling around Pune. The service can accommodate office transfers, meetings, airport journeys, and other planned corporate transportation needs with convenient scheduling."
},
{
name: "IT Employee Transportation Pune",
description: "Employee transportation solutions help IT companies manage recurring travel between residential areas and workplaces. Routes can be planned according to office timings, shift schedules, employee locations, and operational requirements, making daily commuting easier to coordinate."
},
{
name: "IT Company Employee Cab Pune",
description: "Employee cabs provide organized transportation for IT professionals travelling to and from offices across Pune. Companies can arrange suitable vehicles and scheduled pickup points to support regular commuting, different work shifts, and employee travel requirements."
},
{
name: "IT Office Pickup Drop Pune",
description: "Scheduled office pickup and drop services help IT employees reach their workplaces and return home according to planned company timings. Route coordination can cover multiple employee locations while providing a structured transportation arrangement for daily office operations."
},
{
name: "IT Company Cab Booking Pune",
description: "IT companies can arrange cab bookings for employees, corporate guests, airport transfers, meetings, and special business travel requirements. Advance scheduling makes it easier to coordinate vehicles, pickup locations, travel timings, and destination details."
},
{
name: "IT Company Cab Rental Pune",
description: "Cab rental solutions allow IT companies to arrange transportation for daily operations, business meetings, employee movement, airport transfers, and temporary corporate requirements. Flexible rental periods can be planned according to the company's travel schedule."
},
{
name: "Corporate Cab for IT Employees Pune",
description: "Corporate cabs designed for IT employees can support recurring office commutes, shift transportation, business travel, and scheduled pickup and drop services. Companies can organize transportation around employee locations and office operating hours."
},
{
name: "IT Park Cab Service Pune",
description: "IT park cab services provide convenient transportation for employees working in major technology corridors such as Hinjewadi, Kharadi, and other business districts. Planned routes can connect employees with offices, residential areas, airports, hotels, and meeting locations."
},
{
name: "Employee Pickup Drop for IT Companies Pune",
description: "Employee pickup and drop transportation can be structured around office shifts, employee residences, and designated pickup points. This arrangement helps IT companies manage recurring daily travel while maintaining clear route and timing coordination."
},
{
name: "Office Cab Service for IT Companies Pune",
description: "Office cab services support regular employee commuting as well as transportation for meetings, visitors, and business requirements. Companies can coordinate scheduled routes and suitable vehicles based on workforce size, travel frequency, and office timings."
},
{
name: "Monthly IT Company Cab Pune",
description: "Monthly cab arrangements are suitable for IT companies requiring recurring transportation throughout the month. Planned monthly services can cover employee pickup and drop, office commuting, airport transfers, and selected corporate travel requirements with consistent scheduling."
},
{
name: "Daily IT Employee Cab Pune",
description: "Daily employee cab services help IT professionals travel between their homes and workplaces on a regular schedule. Pickup points and routes can be coordinated around office shifts, working hours, and employee locations for practical everyday commuting."
},
{
name: "IT Company Airport Cab Pune",
description: "Airport cab services for IT companies provide scheduled transportation for employees, executives, clients, and visiting professionals travelling through Pune International Airport. Transfers can be planned around flight timings and direct office, hotel, or residential destinations."
},
{
name: "IT Company Outstation Cab Pune",
description: "Outstation cab services help IT companies arrange transportation for employee travel, business meetings, client visits, conferences, and corporate trips outside Pune. One-way and round-trip requirements can be planned according to the destination and travel schedule."
},
{
name: "AC Corporate Cab for IT Companies Pune",
description: "Air-conditioned corporate cabs provide comfortable transportation for employees, executives, clients, and business visitors. These vehicles are suitable for daily office travel, airport transfers, meetings, and longer corporate journeys where a comfortable travel environment is important."
},
{
name: "Affordable IT Company Cab Pune",
description: "Affordable cab arrangements help IT companies manage recurring employee and business transportation while keeping travel requirements organized. Companies can choose suitable vehicle and service arrangements based on route frequency, passenger requirements, and corporate travel schedules."
},
{
name: "IT Employee Transport Service Pune",
description: "IT employee transport services are designed for recurring workplace commuting across Pune. Route planning, scheduled pickups, office drops, and flexible vehicle arrangements can help companies coordinate transportation for employees working across different shifts and locations."
},
{
name: "IT Company Cab with Driver Pune",
description: "Cab services with professional drivers provide convenient transportation for IT employees, executives, clients, and business visitors. Driver-based travel is suitable for office commuting, meetings, airport transfers, and scheduled corporate journeys throughout Pune."
},
{
name: "IT Office Taxi Rental Pune",
description: "Office taxi rental services can support temporary or recurring transportation requirements for IT companies. Vehicles can be arranged for employee commuting, business meetings, office transfers, airport travel, and other planned corporate mobility needs."
},
{
name: "IT Company Staff Transportation Pune",
description: "Staff transportation solutions help IT companies coordinate regular travel for employees across multiple residential and business locations. Services can be structured around office timings, shift schedules, pickup points, and recurring routes to simplify daily employee mobility."
},
{
name: "Corporate Taxi for IT Employees Pune",
description: "Corporate taxi services give IT employees access to organized transportation for office commuting, business meetings, airport journeys, and other work-related travel. Companies can coordinate scheduled travel according to employee locations and corporate requirements."
},
{
name: "IT Company Cab Service Near Me Pune",
description: "IT companies looking for nearby cab transportation in Pune can arrange employee pickup and drop, office transfers, airport rides, and corporate travel through scheduled cab services. Route planning can be customized around the company's workplace and employee travel requirements."
},
{
name: "Business Travel Cab for IT Companies Pune",
description: "Business travel cabs are useful for IT professionals attending meetings, conferences, client visits, office appointments, and corporate events. Vehicles can be arranged for individual executives or planned business travel requirements across Pune and nearby destinations."
},
{
name: "IT Company Car Rental Pune",
description: "Car rental services provide IT companies with flexible transportation for employees, executives, clients, airport transfers, meetings, and corporate events. Different vehicle arrangements can be selected according to passenger capacity, duration, route, and travel purpose."
}
],
tableData: [
["IT Company Cab Service Pune"],
["IT Company Taxi Service Pune"],
["IT Employee Transportation Pune"],
["IT Company Employee Cab Pune"],
["IT Office Pickup Drop Pune"],
["IT Company Cab Booking Pune"],
["IT Company Cab Rental Pune"],
["Corporate Cab for IT Employees Pune"],
["IT Park Cab Service Pune"],
["Employee Pickup Drop for IT Companies Pune"],
["Office Cab Service for IT Companies Pune"],
["Monthly IT Company Cab Pune"],
["Daily IT Employee Cab Pune"],
["IT Company Airport Cab Pune"],
["IT Company Outstation Cab Pune"],
["AC Corporate Cab for IT Companies Pune"],
["Affordable IT Company Cab Pune"],
["IT Employee Transport Service Pune"],
["IT Company Cab with Driver Pune"],
["IT Office Taxi Rental Pune"],
["IT Company Staff Transportation Pune"],
["Corporate Taxi for IT Employees Pune"],
["IT Company Cab Service Near Me Pune"],
["Business Travel Cab for IT Companies Pune"],
["IT Company Car Rental Pune"]
],
whychoose: [
{
WhyChooseheading: "Dedicated Corporate Transportation",
WhyChoosedescription: "Citysky Cabs can support IT companies with transportation planned specifically around employee commuting, office travel, airport transfers, meetings, and corporate mobility requirements. Routes and schedules can be coordinated according to the company's operating pattern."
},
{
WhyChooseheading: "Employee Pickup and Drop Support",
WhyChoosedescription: "Regular employee transportation can be organized around designated pickup points, residential areas, office locations, and shift timings. This makes recurring commuting requirements easier for companies to coordinate across different employee routes."
},
{
WhyChooseheading: "Flexible Vehicle Options",
WhyChoosedescription: "Companies can select suitable vehicles according to passenger numbers and travel requirements, whether the need is for individual employees, small teams, executives, corporate guests, or longer business journeys. This allows transportation arrangements to remain practical for different situations."
},
{
WhyChooseheading: "Airport and Business Travel",
WhyChoosedescription: "IT companies frequently require transportation beyond routine office commuting. Airport transfers, client meetings, business appointments, conferences, and corporate visits can be arranged with scheduled cab services tailored to the required pickup and destination details."
},
{
WhyChooseheading: "Monthly and Daily Arrangements",
WhyChoosedescription: "Transportation can be organized for both recurring and occasional requirements. Daily employee commuting can be coordinated alongside monthly corporate arrangements, temporary rentals, special business trips, and other travel needs that arise during normal company operations."
},
{
WhyChooseheading: "Professional Driver Support",
WhyChoosedescription: "Driver-based cab services provide convenient travel for employees, executives, clients, and visiting professionals. Drivers handle the journey while companies and passengers can focus on their work, meetings, communication, or other responsibilities during the trip."
},
{
WhyChooseheading: "Coverage Across Pune",
WhyChoosedescription: "Transportation can connect major IT and business corridors including Hinjewadi, Kharadi, Magarpatta, Baner, Viman Nagar, Wakad, Pimpri Chinchwad, and other parts of Pune. This wider coverage helps support employees living and working in different areas."
},
{
WhyChooseheading: "Convenient Corporate Booking",
WhyChoosedescription: "Corporate travel requirements can be planned with clear pickup locations, destinations, dates, timings, vehicle preferences, and passenger details. This organized booking approach helps IT companies manage routine employee travel as well as occasional corporate transportation needs."
}
]
};










const faqData = [
{
question: "How can an IT company arrange cab service in Pune with Citysky Cabs?",
answer: "IT companies can arrange employee transportation by sharing office locations, employee pickup areas, shift timings, passenger count, and required travel frequency. Citysky Cabs can review the commuting pattern and discuss a suitable cab arrangement for regular office travel, airport transfers, meetings, and other corporate transportation needs."
},
{
question: "Can Citysky Cabs provide regular employee transportation for IT companies in Pune?",
answer: "Technology companies with employees travelling to offices on a regular basis can enquire about recurring cab transportation. Pickup points, office timings, employee numbers, work locations, and preferred routes can be provided to help Citysky Cabs understand the company's daily commuting requirements."
},
{
question: "Can cab service for IT companies in Pune support different shifts?",
answer: "IT organizations operating morning, evening, night, or rotating shifts can discuss employee transportation based on their working schedules. Citysky Cabs can consider employee pickup locations, shift timings, office destinations, and passenger numbers when reviewing the required corporate cab arrangement."
},
{
question: "Can IT companies arrange cabs for employees working in Hinjewadi?",
answer: "Companies with offices in Hinjewadi can enquire about employee transportation from different parts of Pune and Pimpri-Chinchwad. Pickup areas, office location, reporting time, employee count, and travel frequency can be shared with Citysky Cabs to discuss a suitable route and vehicle requirement."
},
{
question: "Can IT company employees use cab services between Pune and Kharadi?",
answer: "Employees travelling to technology and business offices in Kharadi can enquire about regular or occasional corporate cab transportation. Citysky Cabs can consider residential pickup locations, office addresses, shift timings, passenger count, and recurring travel requirements for the planned commute."
},
{
question: "Can IT companies arrange Pune Airport transfers for employees and clients?",
answer: "Corporate cab transportation can be discussed for employees, visiting executives, clients, consultants, and business partners travelling through Pune Airport. Sharing flight details, pickup or drop location, passenger count, and required timing helps Citysky Cabs understand the airport transfer itinerary."
},
{
question: "Can IT companies hire cabs for business meetings and client visits?",
answer: "Technology professionals can enquire about dedicated cab transportation for client meetings, office visits, conferences, presentations, and business appointments across Pune. The pickup point, destination, meeting schedule, number of passengers, and return requirement can be shared with Citysky Cabs."
},
{
question: "Can an IT company arrange transportation for employees from multiple pickup points?",
answer: "Companies with employees living across different Pune areas can discuss shared or scheduled transportation based on their routes and office timings. Providing the pickup locations, total passenger count, destination, and reporting time allows Citysky Cabs to understand the required group transportation pattern."
},
{
question: "Can cab services be arranged for IT company events and team activities?",
answer: "IT companies organizing conferences, training sessions, team outings, seminars, workshops, or employee events can enquire about group transportation. Event organizers can share the pickup locations, venue, participant count, reporting time, and return schedule so Citysky Cabs can understand the travel requirement."
},
{
question: "What details are required to arrange Cab Service for an IT Company in Pune?",
answer: "Companies can provide office addresses, employee pickup locations, passenger count, travel dates, working or shift timings, required service frequency, and destination details. Additional information such as airport transfers, multiple stops, client travel, or return journeys can also be included in the enquiry."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Aditya Deshpande",
feedback:
"Our IT team works in rotating shifts, so arranging transportation for employees from different parts of Pune was becoming difficult. We shared the shift schedules and pickup locations with Citysky Cabs. The planned cab service helped our team coordinate their regular office commute more conveniently.",
rating: 5
},
{
id: 2,
name: "Miss. Sneha Kulkarni",
feedback:
"We had employees and a few visiting clients travelling between our Pune office and the airport during an important project meeting. Citysky Cabs arranged the required transportation based on the itinerary we provided. It made the airport and office transfers much easier for our administration team to manage.",
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
  "name": "Cab Service for IT Company in Pune",
  "image": "https://www.cityskycab.in/assets/images/cab-service-for-it-company-in-pune.webp",
  "description": "Cab Service for IT Company in Pune from Citysky Cabs is designed for IT companies, technology parks, corporate offices and employees who need dependable transportation for regular workplace commuting and business travel. The service includes IT Company Cab Service Pune, IT Company Taxi Service Pune, IT Employee Transportation Pune and IT Company Employee Cab Pune for organizations managing daily staff movement across Pune. IT Office Pickup Drop Pune arrangements can be planned around employee locations, office timings and shift schedules, while IT Company Cab Booking Pune and IT Company Cab Rental Pune support recurring as well as customized corporate transportation requirements. Corporate Cab for IT Employees Pune is suitable for companies looking for organized employee travel, and IT Park Cab Service Pune can support transportation to and from major technology and business hubs. Citysky Cabs can coordinate daily, monthly, shift-based and airport-related corporate travel with suitable vehicles, scheduled routes and pickup points based on the requirements of the organization.",
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
    "url": "https://www.cityskycab.in/cab-service-for-it-company-in-pune"
  }
};




    return (
        <div>

<Helmet>
  <title>
    Cab Service for IT Company in Pune | IT Employee Transport & Office Pickup Drop | +91 9272112191 
  </title>

  <meta
    name="description"
    content="Cab Service for IT Company in Pune by Citysky Cabs for employee transportation, office pickup and drop, IT park travel, corporate taxi rental, daily shifts and scheduled business transportation."
  />

  <meta
    name="keywords"
    content="Cab Service for IT Company in Pune, IT Company Cab Service Pune, IT Company Taxi Service Pune, IT Employee Transportation Pune, IT Company Employee Cab Pune, IT Office Pickup Drop Pune, IT Company Cab Booking Pune, IT Company Cab Rental Pune, Corporate Cab for IT Employees Pune, IT Park Cab Service Pune, IT company employee transportation Pune, Pune IT employee cab service, Pune IT company taxi service, Pune IT office cab service, Pune IT employee pickup drop, Pune IT employee transport, Pune IT corporate cab, Pune IT corporate taxi, Pune IT company staff transportation, Pune IT office transportation, Pune IT park taxi service, Pune IT park employee cab, Pune IT employee cab rental, Pune IT company daily cab service, Pune IT company monthly cab service, Pune IT shift transportation, Pune IT night shift cab, Pune IT company airport cab, Pune corporate employee transportation, Pune corporate cab rental, Pune employee pickup drop service, Pune office cab service, Pune corporate taxi service, Pune IT business travel cab, Pune technology company cab service, IT company transport service Pune, IT employee travel service Pune"
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
                            <img src='/images/keywords/131.jpg' alt='img' className='img-fluid' />
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

export default Cabsserviceforitcompany;