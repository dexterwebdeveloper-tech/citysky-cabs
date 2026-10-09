import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Corporatetravelcompanies() {

const cardData = {
keyword: "Corporate Travel Companies in Pune",
headingDescription: "Citysky Cabs provides corporate travel and transportation solutions in Pune for companies, employees, executives, clients, guests, and business teams. Corporate travel arrangements can cover office commuting, airport transfers, business meetings, outstation assignments, corporate events, employee transportation, guest movement, and scheduled business trips. With flexible cab, taxi, and car rental options, businesses can organize professional transportation across major Pune business corridors including Hinjewadi, Kharadi, Magarpatta, Viman Nagar, Baner, Pimpri Chinchwad, Hadapsar, and other important commercial destinations.",
topPlaces: [
{
title: "Hinjewadi IT Park",
description: "Hinjewadi IT Park is one of Pune's major technology and corporate employment destinations, with professionals travelling daily for offices, meetings, and business activities. Corporate travel services can arrange employee transportation, executive transfers, client movement, and scheduled business journeys."
},
{
title: "Kharadi EON IT Park",
description: "Kharadi EON IT Park is a prominent business and technology hub in eastern Pune. Corporate transportation can connect employees, executives, clients, and visiting professionals with offices and nearby business destinations through planned cab and taxi services."
},
{
title: "Magarpatta City",
description: "Magarpatta City combines corporate offices, commercial facilities, and residential development, creating regular business travel requirements. Cab services can support employee commuting, corporate meetings, guest transfers, airport journeys, and scheduled company transportation."
},
{
title: "Pune International Airport",
description: "Pune International Airport is an important transit point for corporate executives, clients, employees, and business visitors. Corporate travel arrangements can provide scheduled airport pickup and drop services based on flight timings and professional travel itineraries."
},
{
title: "Viman Nagar",
description: "Viman Nagar is a major commercial and business locality close to Pune Airport, with offices, hotels, retail destinations, and corporate facilities. Corporate travel cabs can support employee movement, guest transfers, meetings, and airport connectivity."
},
{
title: "Baner",
description: "Baner is a major western Pune business and residential corridor with corporate offices, commercial establishments, and professional activity. Corporate transportation can provide scheduled travel for employees, executives, clients, meetings, and business events."
},
{
title: "Pimpri Chinchwad",
description: "Pimpri Chinchwad has extensive industrial, manufacturing, commercial, and corporate activity. Corporate travel services can support employee transportation, factory visits, client meetings, business trips, and movement between offices and industrial facilities."
},
{
title: "Hadapsar",
description: "Hadapsar is an important business and technology corridor with corporate offices, commercial areas, and industrial activity. Transportation services can connect employees and business travelers with workplaces, meetings, hotels, airport routes, and other professional destinations."
},
{
title: "Koregaon Park",
description: "Koregaon Park is known for hospitality, restaurants, hotels, commercial activity, and premium business destinations. Corporate travel cabs can assist companies with executive movement, client transportation, guest transfers, meetings, and professional events."
},
{
title: "Shivajinagar",
description: "Shivajinagar is a central Pune transportation and commercial hub with offices, institutions, railway connectivity, and business activity. Corporate transportation can provide convenient movement for employees, executives, clients, and visitors travelling across the city."
}
],
services: [
{
name: "Corporate Travel Company Pune",
description: "Corporate Travel Company Pune provides organized transportation support for businesses, employees, executives, clients, and visiting professionals. Services can cover office travel, airport transfers, meetings, events, outstation assignments, and scheduled corporate journeys."
},
{
name: "Corporate Travel Services Pune",
description: "Corporate Travel Services Pune can support companies with employee transportation, executive travel, airport transfers, business meetings, guest movement, and outstation trips. Travel arrangements can be planned according to schedules, destinations, and passenger requirements."
},
{
name: "Corporate Travel Agency Pune",
description: "Corporate Travel Agency Pune services can assist businesses in coordinating transportation for employees, executives, clients, and corporate guests. Cab and car arrangements can be scheduled for local business travel, airport transfers, events, and intercity journeys."
},
{
name: "Corporate Cab Company Pune",
description: "Corporate Cab Company Pune services provide dedicated transportation options for organizations requiring employee commuting, executive travel, airport transfers, business meetings, and corporate events. Vehicles can be arranged according to passenger capacity and journey requirements."
},
{
name: "Corporate Taxi Service Provider Pune",
description: "Corporate Taxi Service Provider Pune supports companies with scheduled taxi transportation for employees, executives, clients, and guests. Services can be used for office travel, meetings, airport transfers, local business journeys, and outstation requirements."
},
{
name: "Corporate Car Rental Company Pune",
description: "Corporate Car Rental Company Pune provides flexible vehicle arrangements for business professionals, employees, executives, and guests. Rental services can support office transportation, client meetings, airport transfers, events, and longer corporate assignments."
},
{
name: "Business Travel Services Pune",
description: "Business Travel Services Pune helps professionals arrange transportation for meetings, conferences, inspections, client appointments, training programs, and corporate visits. Local and outstation cab options can be planned according to business schedules."
},
{
name: "Corporate Transportation Company Pune",
description: "Corporate Transportation Company Pune services help organizations coordinate employee mobility, executive travel, guest transfers, airport journeys, and business transportation. Routes and schedules can be structured around company requirements and travel frequency."
},
{
name: "Employee Transportation Company Pune",
description: "Employee Transportation Company Pune services provide organized commuting solutions for staff travelling between residential areas and offices or industrial workplaces. Pickup points, routes, and schedules can be planned around office hours and shift requirements."
},
{
name: "Corporate Cab Service Provider Pune",
description: "Corporate Cab Service Provider Pune services support businesses requiring regular and occasional transportation for employees, executives, clients, and guests. Cabs can be arranged for office commuting, meetings, airport transfers, events, and business travel."
},
{
name: "Corporate Travel Management Pune",
description: "Corporate Travel Management Pune transportation support can help businesses organize multiple travel requirements through planned cab and car arrangements. Services can cover employee mobility, executive journeys, airport transfers, guest travel, meetings, and corporate events."
},
{
name: "Corporate Mobility Company Pune",
description: "Corporate Mobility Company Pune services provide flexible transportation solutions for employees, executives, clients, and business teams. Travel can be organized across office locations, residential areas, airports, hotels, event venues, and outstation destinations."
},
{
name: "Corporate Airport Transfer Pune",
description: "Corporate Airport Transfer Pune provides scheduled transportation between Pune International Airport and offices, hotels, residential areas, meeting locations, and business destinations. Transfers can be planned according to flight schedules and passenger requirements."
},
{
name: "Corporate Outstation Travel Pune",
description: "Corporate Outstation Travel Pune supports employees and business professionals travelling outside Pune for meetings, inspections, conferences, client visits, training, and company assignments. One-way and round-trip cab arrangements can be organized around the itinerary."
},
{
name: "Corporate Employee Transport Pune",
description: "Corporate Employee Transport Pune helps businesses arrange regular staff commuting between employee residences and workplaces. Transportation plans can be structured around office timings, shift schedules, pickup locations, workforce size, and recurring travel requirements."
},
{
name: "Business Trip Cab Service Pune",
description: "Business Trip Cab Service Pune provides transportation for professionals travelling to meetings, client offices, industrial locations, conferences, and other business destinations. Cabs can be scheduled for local journeys as well as intercity assignments."
},
{
name: "Corporate Travel Car Rental Pune",
description: "Corporate Travel Car Rental Pune provides flexible cars for executives, employees, clients, and business teams. Rental arrangements can be used for meetings, airport transfers, corporate events, business visits, and longer professional travel requirements."
},
{
name: "Corporate Travel Booking Company Pune",
description: "Corporate Travel Booking Company Pune services can coordinate cab and car bookings for employees, executives, guests, and clients. Travel details such as pickup time, destination, vehicle requirement, and journey schedule can be arranged in advance."
},
{
name: "Corporate Travel Partner Pune",
description: "Corporate Travel Partner Pune services support organizations with recurring and occasional transportation needs. Companies can arrange employee travel, executive movement, airport transfers, guest transportation, meetings, events, and outstation business journeys."
},
{
name: "Corporate Transport Solutions Pune",
description: "Corporate Transport Solutions Pune provides flexible transportation arrangements for organizations with different employee and business mobility requirements. Services can include staff commuting, executive travel, airport transfers, guest movement, events, and outstation trips."
},
{
name: "Corporate Travel Cab Booking Pune",
description: "Corporate Travel Cab Booking Pune enables companies to schedule cabs for business meetings, employee travel, executive transfers, airport journeys, and corporate events. Bookings can be organized according to passenger numbers, routes, timings, and vehicle preferences."
},
{
name: "Corporate Travel Taxi Pune",
description: "Corporate Travel Taxi Pune provides convenient transportation for professionals travelling across Pune and surrounding business destinations. Taxis can be arranged for office visits, meetings, client appointments, airport transfers, and corporate events."
},
{
name: "Corporate Event Transportation Pune",
description: "Corporate Event Transportation Pune supports companies organizing conferences, seminars, meetings, celebrations, training sessions, and business events. Cabs and cars can be scheduled to move employees, executives, guests, and clients between required locations."
},
{
name: "Corporate Guest Transportation Pune",
description: "Corporate Guest Transportation Pune provides scheduled travel for visiting clients, executives, vendors, consultants, and business partners. Transfers can be arranged between airports, railway stations, hotels, offices, meeting venues, and other destinations."
},
{
name: "Corporate Travel Services Near Me Pune",
description: "Corporate Travel Services Near Me Pune helps businesses looking for convenient transportation support around their offices and nearby business corridors. Services can cover employee commuting, airport transfers, executive travel, guest movement, meetings, and corporate trips."
}
],
tableData: [
["Corporate Travel Company Pune"],
["Corporate Travel Services Pune"],
["Corporate Travel Agency Pune"],
["Corporate Cab Company Pune"],
["Corporate Taxi Service Provider Pune"],
["Corporate Car Rental Company Pune"],
["Business Travel Services Pune"],
["Corporate Transportation Company Pune"],
["Employee Transportation Company Pune"],
["Corporate Cab Service Provider Pune"],
["Corporate Travel Management Pune"],
["Corporate Mobility Company Pune"],
["Corporate Airport Transfer Pune"],
["Corporate Outstation Travel Pune"],
["Corporate Employee Transport Pune"],
["Business Trip Cab Service Pune"],
["Corporate Travel Car Rental Pune"],
["Corporate Travel Booking Company Pune"],
["Corporate Travel Partner Pune"],
["Corporate Transport Solutions Pune"],
["Corporate Travel Cab Booking Pune"],
["Corporate Travel Taxi Pune"],
["Corporate Event Transportation Pune"],
["Corporate Guest Transportation Pune"],
["Corporate Travel Services Near Me Pune"]
],
whychoose: [
{
WhyChooseheading: "Corporate Travel Across Pune",
WhyChoosedescription: "Businesses can arrange transportation across Pune's major corporate, technology, industrial, residential, and commercial corridors. Cab services can connect employees, executives, clients, and guests with offices, meeting venues, airports, hotels, and other professional destinations."
},
{
WhyChooseheading: "Employee and Executive Mobility",
WhyChoosedescription: "Corporate transportation can cover both regular employee commuting and scheduled executive travel. Companies can organize routes according to office timings, employee locations, meetings, business appointments, and individual travel schedules."
},
{
WhyChooseheading: "Airport Transfer Support",
WhyChoosedescription: "Pune International Airport is an important destination for business travelers and visiting professionals. Scheduled airport transfers can connect passengers with offices, hotels, residential areas, and meeting locations according to flight schedules."
},
{
WhyChooseheading: "Local and Outstation Business Travel",
WhyChoosedescription: "Corporate travel requirements can extend from short local journeys to longer business trips outside Pune. Cab arrangements can support meetings, client visits, inspections, conferences, training programs, and other professional assignments."
},
{
WhyChooseheading: "Corporate Guest Transportation",
WhyChoosedescription: "Visiting clients, executives, vendors, consultants, and business partners may require coordinated transportation during their stay. Cabs can be arranged between airports, railway stations, hotels, offices, event venues, and other required destinations."
},
{
WhyChooseheading: "Flexible Car and Cab Options",
WhyChoosedescription: "Corporate travel requirements vary depending on passenger numbers, journey distance, and the purpose of travel. Businesses can arrange suitable cars and cabs for individual executives, employees, small teams, guests, and larger corporate groups."
},
{
WhyChooseheading: "Event and Meeting Transportation",
WhyChoosedescription: "Corporate events, conferences, seminars, training programs, and meetings often require transportation between multiple locations. Scheduled cab services can help coordinate employee, guest, client, and executive movement around event timings."
},
{
WhyChooseheading: "Recurring Corporate Travel Planning",
WhyChoosedescription: "Companies with regular transportation requirements can organize recurring employee and business travel schedules. Routes and pickup points can be planned around workforce locations, office timings, airport requirements, business appointments, and ongoing corporate mobility needs."
}
]
};








const faqData = [
{
question: "How can businesses arrange corporate travel services in Pune with Citysky Cabs?",
answer: "Companies planning employee travel, business meetings, conferences, airport transfers, client visits, or outstation assignments can share their travel schedule, pickup locations, destinations, passenger count, and vehicle requirements with Citysky Cabs. The transportation arrangement can then be discussed according to the company's itinerary and travel frequency."
},
{
question: "Can Citysky Cabs handle regular corporate travel requirements in Pune?",
answer: "Organizations with recurring business transportation needs can enquire about regular cab arrangements for employees, executives, clients, and visiting professionals. Travel routes, office locations, employee schedules, passenger numbers, and service frequency can be provided to help plan transportation for ongoing corporate requirements."
},
{
question: "Can corporate companies in Pune arrange airport transportation through Citysky Cabs?",
answer: "Businesses can arrange transportation for employees, clients, consultants, and executives travelling through Pune Airport. Pickup or drop locations, flight timings, passenger count, luggage requirements, and reporting times can be shared to coordinate airport transfers as part of a corporate travel schedule."
},
{
question: "Can Citysky Cabs arrange outstation corporate travel from Pune?",
answer: "Corporate teams travelling from Pune to Mumbai, Nashik, Kolhapur, Aurangabad, Satara, Bangalore, Hyderabad, Gujarat, or other business destinations can enquire about outstation cab transportation. One-way and return travel requirements can be discussed by sharing the destination, travel date, passenger count, and planned itinerary."
},
{
question: "Can companies use corporate travel services for client and guest transportation?",
answer: "Businesses can enquire about dedicated transportation for clients, vendors, suppliers, consultants, investors, and other visiting guests. Depending on the itinerary, Citysky Cabs can discuss transportation for airport pickups, hotel transfers, office meetings, factory visits, conferences, and return journeys."
},
{
question: "Are corporate travel services available for conferences and business events in Pune?",
answer: "Companies organizing conferences, seminars, exhibitions, training programs, workshops, and corporate events can discuss group transportation requirements. The event venue, employee or guest count, pickup points, reporting time, and return schedule can be shared while planning the required cab service."
},
{
question: "Can corporate travel arrangements cover employees from multiple Pune locations?",
answer: "Employees travelling from Hinjewadi, Kharadi, Viman Nagar, Hadapsar, Baner, Wakad, Kothrud, Pimpri-Chinchwad, and other areas can enquire about coordinated corporate transportation. Multiple pickup points, office timings, passenger numbers, and destination details can be considered when discussing the travel arrangement."
},
{
question: "Can Citysky Cabs arrange transportation for senior executives in Pune?",
answer: "Organizations can enquire about dedicated cab transportation for senior executives, managers, visiting directors, and other business professionals. The itinerary may include residential pickup, office transfers, airport travel, client meetings, hotel transportation, and intercity business journeys depending on the executive's schedule."
},
{
question: "Can companies arrange corporate travel for industrial visits around Pune?",
answer: "Businesses conducting plant inspections, supplier visits, audits, factory meetings, employee training, or industrial programs can enquire about transportation from Pune to nearby industrial areas. Sharing the facility address, visitor count, reporting time, pickup location, and return requirements helps define the travel schedule."
},
{
question: "What information is required to plan corporate travel with Citysky Cabs in Pune?",
answer: "Companies can provide the pickup and destination addresses, travel dates, passenger count, preferred vehicle type, reporting times, number of trips, and expected return schedule. Additional details such as multiple stops, airport transfers, employee routes, client transportation, or outstation travel can also be shared for a more complete itinerary."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Sameer Patil",
feedback:
"Our company had a visiting management team coming to Pune for meetings at different locations. We needed airport pickup, hotel transfers, and transportation between the offices during the visit. Citysky Cabs arranged the travel around the itinerary we shared, which made coordinating the visitors much simpler.",
rating: 5
},
{
id: 2,
name: "Miss. Riya Deshpande",
feedback:
"We required transportation for a small corporate group travelling from Pune to an industrial facility outside the city for a full-day meeting. The schedule included an early pickup and a return journey after the program. Citysky Cabs handled the cab arrangement according to our timings and helped keep the day's travel organized.",
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
  "name": "Corporate Travel Companies in Pune",
  "image": "https://www.cityskycab.in/assets/images/corporate-travel-companies-in-pune.webp",
  "description": "Corporate Travel Companies in Pune by Citysky Cabs support businesses, offices, startups and established organizations with organized transportation for employees, executives, clients and business visitors. Corporate Travel Company Pune and Corporate Travel Services Pune cover daily corporate commuting, scheduled business journeys and customized transportation requirements. Corporate Travel Agency Pune and Corporate Cab Company Pune services can be arranged for companies seeking dedicated vehicles and planned travel support. Corporate Taxi Service Provider Pune and Corporate Car Rental Company Pune are suitable for executive transfers, meetings, airport travel and local business movement. Business Travel Services Pune and Corporate Transportation Company Pune can support employee transportation, client visits, conferences, events and intercity business trips. Citysky Cabs can arrange suitable cars, SUVs and larger vehicles according to passenger requirements, with professional drivers and flexible pickup and drop locations. Corporate airport transfers, employee pickup and drop, outstation business travel and recurring monthly transportation can also be coordinated for organizations operating across Pune and nearby business hubs.",
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
    "url": "https://www.cityskycab.in/corporate-travel-companies-in-pune"
  }
};




    return (
        <div>


<Helmet>
  <title>
    Corporate Travel Companies in Pune | Business Travel, Corporate Taxi & Car Rental | +91 9272112191 
  </title>

  <meta
    name="description"
    content="Corporate Travel Companies in Pune by Citysky Cabs for business travel, employee transportation, corporate taxis, car rentals, airport transfers, executive travel and organized company transportation."
  />

  <meta
    name="keywords"
    content="Corporate Travel Companies in Pune, Corporate Travel Company Pune, Corporate Travel Services Pune, Corporate Travel Agency Pune, Corporate Cab Company Pune, Corporate Taxi Service Provider Pune, Corporate Car Rental Company Pune, Business Travel Services Pune, Corporate Transportation Company Pune, Corporate Employee Transportation Pune, Corporate Travel Management Pune, Corporate Taxi Company Pune, Corporate Cab Service Provider Pune, Corporate Car Rental Pune, Corporate Travel Cab Pune, Pune business travel taxi, Pune corporate travel service, Pune corporate transportation service, Pune employee travel service, Pune executive car rental, Pune business cab service, Pune corporate airport transfer, Pune airport corporate taxi, Pune corporate outstation travel, Pune corporate cab rental, Pune company transportation service, Pune employee pickup drop service, Pune corporate employee cab, Pune office transportation service, Pune business travel cab, Pune executive taxi service, Pune corporate guest transportation, Pune client pickup service, Pune corporate event transportation, Pune conference travel cab, Pune monthly corporate cab service, Pune corporate travel partner, Pune corporate fleet transportation"
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
                            <img src='/images/keywords/141.jpg' alt='img' className='img-fluid' />
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

export default Corporatetravelcompanies;