import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Corporatemobility() {

const cardData = {
keyword: "Corporate Mobility Solutions in Pune",
headingDescription: "Citysky Cabs provides structured corporate mobility solutions in Pune for companies managing employee transportation, office commuting, business travel, corporate airport transfers, fleet requirements, client movement, and regular staff mobility. Transportation solutions can be planned for IT companies, manufacturing businesses, corporate offices, industrial units, and growing enterprises requiring dependable daily and monthly travel arrangements. Services can connect major business corridors such as Hinjewadi, Kharadi, Magarpatta, Baner, Viman Nagar, Pimpri Chinchwad, Hadapsar, Pune Airport, and other important commercial destinations through organized cab and employee transportation solutions.",
topPlaces: [
{
title: "Hinjewadi IT Park",
description: "Hinjewadi IT Park is one of Pune's major technology and employment corridors, with numerous companies and large employee workforces. Corporate mobility solutions can support scheduled employee transportation, office pickup and drop, business travel, airport transfers, and recurring staff mobility requirements."
},
{
title: "Kharadi EON IT Park",
description: "Kharadi EON IT Park is a prominent technology and corporate destination in eastern Pune. Employee transportation and corporate cab solutions can help businesses coordinate daily commuting, executive travel, client movement, airport transfers, and scheduled office transportation."
},
{
title: "Magarpatta City",
description: "Magarpatta City is an established integrated business and residential destination with a large professional workforce. Corporate mobility services can support employee pickup and drop, office transportation, business meetings, guest transfers, and regular corporate travel."
},
{
title: "Pune International Airport",
description: "Pune International Airport is an important travel point for corporate executives, employees, clients, and visiting professionals. Corporate mobility solutions can coordinate airport pickup and drop services according to flight schedules, business itineraries, and passenger requirements."
},
{
title: "Baner",
description: "Baner is a major commercial and residential corridor with offices, technology businesses, hospitality facilities, and professional destinations. Corporate transportation can support employee commuting, business meetings, client transfers, and daily office mobility from this area."
},
{
title: "Pimpri Chinchwad",
description: "Pimpri Chinchwad is a major industrial and commercial region with manufacturing companies, offices, and large employee populations. Corporate mobility services can help organizations coordinate staff transportation, factory commuting, business travel, and inter-office movement."
},
{
title: "Viman Nagar",
description: "Viman Nagar is a well-connected business, hospitality, residential, and commercial locality near Pune Airport. Corporate cab and mobility solutions can support employees, executives, clients, and guests travelling between offices, hotels, airport routes, and business destinations."
},
{
title: "Hadapsar",
description: "Hadapsar is an important employment and commercial corridor with IT campuses, industrial areas, offices, and residential communities. Corporate mobility planning can support regular employee transportation, office pickup and drop, business travel, and corporate transfers."
},
{
title: "Kalyani Nagar",
description: "Kalyani Nagar combines corporate offices, commercial establishments, hotels, and residential communities with strong connectivity to eastern Pune. Corporate transportation services can help companies arrange employee travel, executive movement, client pickups, and business meetings."
},
{
title: "Pune Railway Station",
description: "Pune Railway Station is a major transportation hub used by employees, executives, clients, and business visitors. Corporate mobility services can coordinate railway station transfers with offices, hotels, business parks, and other destinations across Pune."
}
],
services: [
{
name: "Corporate Mobility Solutions Pune",
description: "Corporate Mobility Solutions Pune helps businesses organize employee commuting, office transportation, executive movement, client travel, airport transfers, and recurring corporate journeys. Transportation plans can be structured around workforce locations, office schedules, and business requirements."
},
{
name: "Corporate Transportation Solutions Pune",
description: "Corporate Transportation Solutions Pune provides organized travel arrangements for employees, executives, clients, guests, and business teams. Routes and schedules can be planned for daily commuting, meetings, airport transfers, industrial visits, and corporate events."
},
{
name: "Employee Transportation Solutions Pune",
description: "Employee Transportation Solutions Pune helps companies manage regular staff commuting between residential areas and workplaces. Pickup points, routes, vehicle requirements, and schedules can be coordinated around employee locations, office timings, and shift patterns."
},
{
name: "Corporate Cab Solutions Pune",
description: "Corporate Cab Solutions Pune provides cab-based transportation for employees, executives, clients, and business visitors. Services can cover office pickup and drop, meetings, airport travel, guest transportation, corporate events, and outstation business journeys."
},
{
name: "Corporate Mobility Services Pune",
description: "Corporate Mobility Services Pune supports businesses requiring recurring transportation for employees and professional travel. Mobility arrangements can include daily office commuting, airport transfers, executive movement, client travel, and scheduled corporate transportation."
},
{
name: "Corporate Travel Solutions Pune",
description: "Corporate Travel Solutions Pune provides transportation support for meetings, conferences, client visits, business trips, airport journeys, and intercity travel. Cab arrangements can be planned according to company schedules, passenger requirements, and travel itineraries."
},
{
name: "Employee Mobility Services Pune",
description: "Employee Mobility Services Pune helps organizations coordinate transportation for staff travelling between their homes, offices, industrial facilities, and business locations. Services can be structured around daily schedules, shifts, pickup points, and workforce requirements."
},
{
name: "Corporate Fleet Management Pune",
description: "Corporate Fleet Management Pune supports companies managing recurring vehicle requirements for employees, executives, clients, and business operations. Vehicle allocation, scheduled transportation, driver-based travel, and recurring mobility requirements can be organized according to company needs."
},
{
name: "Corporate Cab Management Pune",
description: "Corporate Cab Management Pune helps businesses coordinate cab requirements for daily employee travel, office transportation, airport transfers, guest pickups, and business journeys. Transportation schedules can be planned around workforce requirements and company operating hours."
},
{
name: "Corporate Taxi Solutions Pune",
description: "Corporate Taxi Solutions Pune provides professional taxi transportation for employees, executives, clients, vendors, and business guests. Services can support local business travel, office commuting, airport transfers, meetings, and scheduled intercity journeys."
},
{
name: "Office Transportation Solutions Pune",
description: "Office Transportation Solutions Pune provides organized employee movement between residential areas and corporate workplaces. Pickup and drop routes can be coordinated around office timings, staff locations, shift schedules, and recurring business transportation requirements."
},
{
name: "Corporate Car Rental Solutions Pune",
description: "Corporate Car Rental Solutions Pune provides flexible vehicles for employees, executives, clients, guests, business meetings, airport transfers, and corporate events. Rental arrangements can be planned according to passenger capacity, duration, route, and travel schedule."
},
{
name: "Employee Pickup Drop Solutions Pune",
description: "Employee Pickup Drop Solutions Pune helps companies arrange recurring transportation between staff residences and offices. Pickup points and routes can be organized according to employee locations, shift timings, working hours, and daily commuting requirements."
},
{
name: "Corporate Transport Management Pune",
description: "Corporate Transport Management Pune supports businesses in organizing recurring employee and business transportation. Travel schedules can be structured around office routes, workforce locations, airport requirements, executive movement, and corporate travel plans."
},
{
name: "IT Employee Transportation Pune",
description: "IT Employee Transportation Pune supports technology companies with regular transportation for software professionals, support teams, managers, and other employees. Services can accommodate office schedules, employee pickup points, shift travel, airport transfers, and business requirements."
},
{
name: "Corporate Airport Transfer Solutions Pune",
description: "Corporate Airport Transfer Solutions Pune provides scheduled transportation between corporate offices, employee locations, hotels, and Pune International Airport. Airport journeys can be coordinated according to flight timings, passenger details, and business travel schedules."
},
{
name: "Corporate Outstation Transportation Pune",
description: "Corporate Outstation Transportation Pune supports companies requiring employee, executive, client, or guest travel beyond Pune. Cabs can be arranged for one-way and round-trip journeys to Mumbai, Nashik, Mahabaleshwar, Kolhapur, Satara, Goa, and other destinations."
},
{
name: "Monthly Corporate Transportation Pune",
description: "Monthly Corporate Transportation Pune provides recurring travel arrangements for businesses with ongoing employee and corporate mobility requirements. Monthly plans can support office commuting, staff transportation, executive movement, airport travel, and scheduled business journeys."
},
{
name: "Daily Employee Transport Pune",
description: "Daily Employee Transport Pune provides regular commuting support for employees travelling between residential areas and workplaces. Daily routes can be coordinated according to office timings, shift schedules, employee locations, and recurring transportation requirements."
},
{
name: "Business Travel Mobility Pune",
description: "Business Travel Mobility Pune supports professionals travelling for meetings, client appointments, conferences, factory visits, corporate events, and business trips. Transportation can be scheduled for local Pune travel as well as longer intercity journeys."
},
{
name: "Corporate Mobility Provider Pune",
description: "Corporate Mobility Provider Pune supports businesses seeking organized transportation for employees, executives, clients, guests, and professional travel. Mobility arrangements can cover office commuting, airport transfers, business meetings, and recurring corporate journeys."
},
{
name: "Corporate Transport Service Provider Pune",
description: "Corporate Transport Service Provider Pune offers structured transportation support for companies managing employee commuting, office travel, airport transfers, guest movement, and outstation business trips. Routes and schedules can be adapted to operational requirements."
},
{
name: "Corporate Employee Travel Solutions Pune",
description: "Corporate Employee Travel Solutions Pune helps organizations manage employee movement for daily commuting, meetings, training programs, business visits, airport travel, and intercity assignments. Transportation can be coordinated according to employee schedules and company requirements."
},
{
name: "Corporate Mobility Company Pune",
description: "Corporate Mobility Company Pune supports businesses with organized cab and transportation solutions for employees, executives, clients, and business guests. Services can cover recurring office travel, airport transfers, corporate events, and outstation requirements."
},
{
name: "Corporate Cab Service Near Me Pune",
description: "Corporate Cab Service Near Me Pune helps businesses and professionals arrange convenient corporate transportation around Pune's major office, IT, industrial, and commercial corridors. Services can support employee commuting, meetings, airport travel, and guest transfers."
}
],
tableData: [
["Corporate Mobility Solutions Pune"],
["Corporate Transportation Solutions Pune"],
["Employee Transportation Solutions Pune"],
["Corporate Cab Solutions Pune"],
["Corporate Mobility Services Pune"],
["Corporate Travel Solutions Pune"],
["Employee Mobility Services Pune"],
["Corporate Fleet Management Pune"],
["Corporate Cab Management Pune"],
["Corporate Taxi Solutions Pune"],
["Office Transportation Solutions Pune"],
["Corporate Car Rental Solutions Pune"],
["Employee Pickup Drop Solutions Pune"],
["Corporate Transport Management Pune"],
["IT Employee Transportation Pune"],
["Corporate Airport Transfer Solutions Pune"],
["Corporate Outstation Transportation Pune"],
["Monthly Corporate Transportation Pune"],
["Daily Employee Transport Pune"],
["Business Travel Mobility Pune"],
["Corporate Mobility Provider Pune"],
["Corporate Transport Service Provider Pune"],
["Corporate Employee Travel Solutions Pune"],
["Corporate Mobility Company Pune"],
["Corporate Cab Service Near Me Pune"]
],
whychoose: [
{
WhyChooseheading: "Structured Employee Mobility",
WhyChoosedescription: "Corporate mobility planning helps organizations coordinate employee transportation across different residential areas and workplace locations. Routes, pickup points, vehicle requirements, and schedules can be organized around workforce needs."
},
{
WhyChooseheading: "Daily Office Transportation",
WhyChoosedescription: "Companies can arrange recurring office pickup and drop transportation for employees travelling to corporate workplaces. Daily routes can be planned around working hours, shift timings, employee locations, and regular commuting patterns."
},
{
WhyChooseheading: "IT Workforce Transportation",
WhyChoosedescription: "Pune has several major technology and business corridors with large professional workforces. Corporate mobility services can support IT employees with scheduled commuting, shift transportation, airport transfers, and business travel requirements."
},
{
WhyChooseheading: "Corporate Airport Transfers",
WhyChoosedescription: "Executives, employees, clients, and visiting professionals can use scheduled transportation between offices, hotels, residences, and Pune International Airport. Airport transfers can be coordinated around flight timings and business itineraries."
},
{
WhyChooseheading: "Fleet and Cab Coordination",
WhyChoosedescription: "Businesses with recurring transportation needs can organize vehicle requirements for employees, executives, clients, and guests. Cab schedules and driver-based travel can be structured around passenger numbers, routes, timings, and operational requirements."
},
{
WhyChooseheading: "Corporate Guest and Client Travel",
WhyChoosedescription: "Visiting clients, vendors, consultants, and executives can be provided with scheduled transportation between airports, railway stations, hotels, offices, and meeting venues. Guest travel can be planned according to individual business schedules."
},
{
WhyChooseheading: "Local and Outstation Business Mobility",
WhyChoosedescription: "Corporate mobility can cover regular Pune travel as well as longer business journeys to other cities and destinations. One-way and round-trip cab arrangements can support meetings, industrial visits, conferences, client travel, and corporate events."
},
{
WhyChooseheading: "Flexible Corporate Travel Planning",
WhyChoosedescription: "Transportation requirements can vary between daily employee commuting, monthly contracts, executive travel, airport transfers, and occasional business trips. Mobility arrangements can be structured according to the frequency, route, and nature of each requirement."
}
]
};











const faqData = [
{
question: "What corporate mobility solutions can companies arrange in Pune with Citysky Cabs?",
answer: "Businesses can enquire about employee transportation, office pickup and drop services, executive travel, airport transfers, client transportation, meeting travel, event mobility, and outstation business journeys. Citysky Cabs can review the company's routes, employee schedules, passenger count, and travel frequency to discuss a suitable transportation arrangement."
},
{
question: "Can Citysky Cabs provide regular employee transportation in Pune?",
answer: "Companies with recurring employee commuting requirements can discuss scheduled cab transportation across Pune. Employee residential pickup points, office locations, reporting times, shift schedules, passenger numbers, and service frequency can be shared to help organize regular workplace transportation."
},
{
question: "Can corporate mobility services support employees working in different shifts?",
answer: "Organizations operating morning, evening, night, or rotating shifts can enquire about transportation based on their working hours. Citysky Cabs can consider different employee groups, pickup locations, workplace addresses, shift timings, and passenger counts when discussing a corporate mobility requirement."
},
{
question: "Can companies arrange airport mobility services for employees and executives in Pune?",
answer: "Businesses can arrange transportation between Pune Airport and offices, hotels, residences, or other business locations for employees, executives, and visiting professionals. Flight details, pickup address, passenger count, luggage requirements, and required airport reporting time can be shared when planning the journey."
},
{
question: "Can Citysky Cabs provide corporate mobility for clients and business visitors?",
answer: "Companies can enquire about transportation for clients, consultants, suppliers, vendors, and visiting executives. Depending on the itinerary, the cab arrangement can cover airport pickups, hotel transfers, office meetings, industrial visits, conferences, and return transportation."
},
{
question: "Can corporate mobility solutions include transportation for business events in Pune?",
answer: "Organizations conducting conferences, exhibitions, seminars, training programs, workshops, annual gatherings, and team events can discuss transportation requirements. Event venues, pickup locations, guest numbers, reporting times, and return schedules can be shared to plan the required mobility service."
},
{
question: "Can companies arrange outstation corporate mobility from Pune?",
answer: "Corporate teams travelling from Pune to Mumbai, Nashik, Kolhapur, Satara, Aurangabad, Bangalore, Hyderabad, Gujarat, or other business destinations can enquire about outstation transportation. One-way, return, and multi-stop requirements can be discussed according to the company's travel itinerary."
},
{
question: "Can employees from multiple Pune locations use a coordinated corporate cab service?",
answer: "Employees travelling from areas such as Hinjewadi, Kharadi, Hadapsar, Viman Nagar, Baner, Wakad, Kothrud, Pimpri-Chinchwad, and surrounding locations can enquire about coordinated transportation. Pickup points, office timings, passenger count, and route requirements can be provided while planning the employee travel arrangement."
},
{
question: "Can corporate mobility services be used for industrial and client visits around Pune?",
answer: "Companies conducting factory visits, supplier meetings, audits, inspections, training sessions, or client programs around Pune can arrange dedicated cab transportation. The facility address, visitor count, pickup point, meeting schedule, and return timing can be shared with Citysky Cabs for discussing the required journey."
},
{
question: "What information is needed to arrange Corporate Mobility Solutions in Pune?",
answer: "Companies can provide employee pickup locations, office addresses, travel dates, passenger count, shift or reporting timings, preferred vehicle category, service frequency, and destinations. Details about airport transfers, multiple stops, client travel, events, and outstation journeys can also be included when planning a broader corporate mobility requirement."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Rahul Joshi",
feedback:
"Our company had employees travelling from several Pune locations, with different teams following different office timings. We shared the employee routes and schedules with Citysky Cabs, and the transportation arrangement helped us coordinate regular office commuting in a more organized way.",
rating: 5
},
{
id: 2,
name: "Miss. Meenal Patil",
feedback:
"We had a week of meetings involving employees and visiting clients, including airport pickups and travel between different office locations. Citysky Cabs arranged the cab requirements around the itinerary we provided. Having the business travel planned together made the coordination much easier for our team.",
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
  "name": "Corporate Mobility Solutions in Pune",
  "image": "https://www.cityskycab.in/assets/images/corporate-mobility-solutions-in-pune.webp",
  "description": "Corporate Mobility Solutions in Pune from Citysky Cabs are designed to help companies manage employee commuting, business travel and organized corporate transportation across Pune. Corporate Mobility Solutions Pune, Corporate Transportation Solutions Pune and Employee Transportation Solutions Pune support businesses that require structured travel arrangements for employees, executives and visiting guests. Corporate Cab Solutions Pune and Corporate Mobility Services Pune can be planned around office locations, employee pickup points, shift timings and recurring travel schedules. Corporate Travel Solutions Pune and Employee Mobility Services Pune are suitable for daily workplace commuting, airport transfers, client visits, meetings and intercity business journeys. Corporate Fleet Management Pune can include suitable vehicle arrangements for different employee groups and travel requirements, while Corporate Employee Transport Pune supports regular staff movement between residential areas and workplaces. Citysky Cabs can also coordinate corporate airport transfers, outstation business travel, office pickup and drop, monthly transportation plans and dedicated cab-with-driver services. These mobility arrangements can be customized according to company schedules, passenger requirements, routes and transportation needs.",
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
    "url": "https://www.cityskycab.in/corporate-mobility-solutions-in-pune"
  }
};







    return (
        <div>
<Helmet>
  <title>
    Corporate Mobility Solutions in Pune | Employee Transport & Corporate Travel Services | +91 8554819191
  </title>

  <meta
    name="description"
    content="Corporate Mobility Solutions in Pune by Citysky Cabs for employee transportation, corporate fleet services, office pickup and drop, business travel, airport transfers and customized company mobility."
  />

  <meta
    name="keywords"
    content="Corporate Mobility Solutions in Pune, Corporate Mobility Solutions Pune, Corporate Transportation Solutions Pune, Employee Transportation Solutions Pune, Corporate Cab Solutions Pune, Corporate Mobility Services Pune, Corporate Travel Solutions Pune, Employee Mobility Services Pune, Corporate Fleet Management Pune, Corporate Employee Transport Pune, Corporate Mobility Company Pune, Corporate Transportation Company Pune, Corporate Cab Service Pune, Corporate Employee Transportation Pune, Corporate Fleet Services Pune, Corporate Travel Management Pune, Employee Transport Management Pune, Pune corporate mobility service, Pune employee mobility service, Pune corporate transport solutions, Pune employee transportation service, Pune corporate cab solutions, Pune corporate travel service, Pune business transportation, Pune office transportation solutions, Pune employee pickup drop service, Pune corporate fleet service, Pune company transportation service, Pune corporate taxi solutions, Pune corporate airport transfer, Pune business travel cab, Pune executive transportation, Pune corporate outstation travel, Pune monthly employee transportation, Pune daily corporate cab service, Pune shift employee transportation, Pune corporate guest transportation, Pune company cab rental, Pune corporate car rental, Pune corporate mobility partner"
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
                            <img src='/images/keywords/149.jpg' alt='img' className='img-fluid' />
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

export default Corporatemobility;