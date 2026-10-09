import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Officepickupanddropservice() {

const cardData = {
keyword: "Office Pickup and Drop Service in Pune",
headingDescription: "Citysky Cabs provides organized office pickup and drop services in Pune for employees, staff members, corporate teams, IT professionals, factory workers, and business organizations. Daily and monthly transportation can be arranged according to office timings, employee locations, shift schedules, and designated pickup points. From IT corridors and corporate parks to industrial areas and residential neighborhoods, the service supports convenient employee commuting with comfortable vehicles, professional drivers, flexible booking options, and planned routes for regular office transportation.",
topPlaces: [
{
title: "Hinjewadi IT Park",
description: "Hinjewadi is one of Pune's largest employment and technology corridors, with employees travelling from many parts of the city every day. Office pickup and drop services can connect staff with Phase 1, Phase 2, and Phase 3 workplaces through scheduled routes based on office timings and shift requirements."
},
{
title: "Kharadi EON IT Park",
description: "Kharadi has a major concentration of IT offices, corporate workplaces, and business centers. Employee transportation can be arranged between residential areas and EON IT Park, with daily pickup and drop schedules designed around working hours, employee locations, and company requirements."
},
{
title: "Magarpatta City",
description: "Magarpatta City is a prominent business and technology destination where many professionals require dependable daily commuting. Office cab services can support employees travelling to and from workplaces while also accommodating monthly transportation plans and scheduled corporate travel."
},
{
title: "Pune International Airport",
description: "Pune International Airport is an important travel point for employees, executives, clients, and visiting professionals. Office transportation services can include airport pickup and drop arrangements for corporate travelers as well as direct transfers between workplaces, residences, and the airport."
},
{
title: "Baner",
description: "Baner is a busy commercial and residential corridor with offices, technology companies, restaurants, hotels, and business establishments. Scheduled office cabs can connect employees from Baner and surrounding neighborhoods to workplaces across western and central Pune."
},
{
title: "Aundh",
description: "Aundh combines established residential communities with offices, educational institutions, healthcare facilities, and commercial destinations. Employee pickup and drop routes can connect Aundh residents with corporate workplaces in Hinjewadi, Baner, Shivajinagar, and other Pune business corridors."
},
{
title: "Viman Nagar",
description: "Viman Nagar is a prominent eastern Pune locality close to the airport and several commercial and corporate destinations. Office cab services can provide scheduled employee transportation between residences, offices, business centers, and nearby technology corridors."
},
{
title: "Pimpri Chinchwad",
description: "Pimpri Chinchwad has extensive residential, industrial, and commercial development, creating regular employee transportation requirements. Office and factory staff can use scheduled pickup and drop routes connecting their homes with workplaces across Bhosari, Chinchwad, Pimpri, and nearby industrial areas."
},
{
title: "Hadapsar",
description: "Hadapsar is an important employment and residential corridor with Magarpatta City, SP Infocity, offices, and surrounding housing communities. Daily employee transportation can be planned around office schedules and pickup points for professionals travelling from Hadapsar and nearby areas."
},
{
title: "Kalyani Nagar",
description: "Kalyani Nagar has corporate offices, commercial establishments, hotels, and residential communities with strong connectivity to eastern Pune. Office pickup and drop services can support employees, executives, and business guests travelling between this locality and major workplace destinations."
}
],
services: [
{
name: "Office Pickup Drop Service Pune",
description: "Office pickup and drop services provide scheduled transportation between employee residences and workplaces across Pune. Routes can be organized around office timings, designated pickup points, working shifts, and regular commuting requirements for companies and their staff."
},
{
name: "Office Pickup and Drop Cab Pune",
description: "Office pickup and drop cabs offer convenient daily transportation for employees travelling to and from their workplaces. Companies can coordinate recurring routes, pickup locations, and reporting times according to their operational schedules and employee requirements."
},
{
name: "Employee Pickup Drop Service Pune",
description: "Employee pickup and drop transportation helps businesses manage regular staff commuting through planned routes and scheduled vehicles. Services can be arranged for employees travelling from different residential areas to offices, IT parks, commercial centers, and industrial workplaces."
},
{
name: "Employee Transportation Pune",
description: "Employee transportation solutions are designed to support regular workplace commuting across Pune. Routes can be customized around employee locations, office timings, shift patterns, and designated pickup points to create a more organized daily travel arrangement."
},
{
name: "Office Cab Service Pune",
description: "Office cab services provide practical transportation for employees, staff members, executives, and corporate guests. Vehicles can be scheduled for routine commuting, meetings, airport transfers, office events, and other business-related journeys throughout Pune."
},
{
name: "Office Taxi Service Pune",
description: "Office taxi services can be used for employee commuting, business appointments, guest transportation, airport journeys, and short-notice office travel. Companies can arrange vehicles according to passenger requirements, destinations, travel times, and specific corporate needs."
},
{
name: "Daily Office Pickup Drop Pune",
description: "Daily office pickup and drop services help employees travel consistently between their homes and workplaces. Regular schedules can be coordinated according to office opening and closing times, employee locations, and different working shifts."
},
{
name: "Monthly Office Pickup Drop Pune",
description: "Monthly office pickup and drop arrangements are suitable for companies requiring recurring employee transportation throughout the month. Planned routes and schedules can help coordinate staff commuting while accommodating regular office timings and designated pickup locations."
},
{
name: "Corporate Pickup Drop Pune",
description: "Corporate pickup and drop services support businesses that need organized transportation for employees, executives, guests, and visiting professionals. Services can be scheduled for routine office travel as well as special corporate transportation requirements."
},
{
name: "Staff Pickup Drop Service Pune",
description: "Staff pickup and drop services provide scheduled transportation for employees working in offices, commercial establishments, factories, and corporate facilities. Routes can be planned around staff residential locations and workplace timings for convenient daily commuting."
},
{
name: "Office Cab Booking Pune",
description: "Office cab booking services allow companies to arrange transportation in advance for employees, staff, executives, guests, meetings, and airport transfers. Booking details can include pickup points, destinations, travel dates, timings, and preferred vehicle requirements."
},
{
name: "Office Cab Rental Pune",
description: "Office cab rental services provide flexible transportation for recurring or temporary corporate requirements. Vehicles can be arranged for employee commuting, meetings, events, airport transfers, client visits, and other business travel according to the required duration."
},
{
name: "Employee Cab Rental Pune",
description: "Employee cab rentals can support businesses requiring transportation for staff commuting, temporary assignments, office events, or special work schedules. Flexible vehicle arrangements can be planned around passenger requirements, routes, and travel duration."
},
{
name: "Office Car Rental with Driver Pune",
description: "Office car rental with driver services provides convenient transportation for employees, executives, clients, and corporate guests. Vehicles can be used for office travel, business meetings, airport transfers, site visits, and scheduled corporate journeys."
},
{
name: "AC Office Cab Service Pune",
description: "AC office cab services provide comfortable transportation for employees and corporate travelers during daily commuting and business journeys. Air-conditioned vehicles can be arranged for regular office routes, airport transfers, meetings, and longer corporate travel."
},
{
name: "Affordable Office Pickup Drop Pune",
description: "Affordable office pickup and drop arrangements help companies organize recurring employee transportation while considering regular travel requirements and route frequency. Suitable vehicle options can be planned according to staff numbers, locations, and office schedules."
},
{
name: "Office Pickup Drop Near Me Pune",
description: "Companies looking for nearby office pickup and drop services in Pune can arrange scheduled transportation for employees, staff, and corporate teams. Pickup locations and routes can be coordinated around the workplace and residential areas requiring regular service."
},
{
name: "Company Employee Transport Pune",
description: "Company employee transport services help organizations coordinate daily staff movement between residential locations and workplaces. Routes can be structured according to employee distribution, office timings, shift schedules, and recurring transportation requirements."
},
{
name: "IT Office Pickup Drop Pune",
description: "IT office pickup and drop services are designed for professionals working in Pune's technology corridors. Transportation can connect employees with Hinjewadi, Kharadi, Magarpatta, Baner, and other IT destinations through scheduled routes and office-specific timings."
},
{
name: "Factory Employee Pickup Drop Pune",
description: "Factory employee pickup and drop services support industrial businesses with regular staff transportation requirements. Routes can be coordinated around production shifts and employee residential areas for workplaces located across Bhosari, Chakan, Talegaon, Pimpri Chinchwad, and other industrial corridors."
},
{
name: "Corporate Office Taxi Pune",
description: "Corporate office taxi services provide transportation for employees, executives, clients, guests, and business visitors. Cabs can be scheduled for office commuting, meetings, airport transfers, corporate events, and other professional travel requirements."
},
{
name: "Daily Employee Transport Pune",
description: "Daily employee transport services provide recurring commuting arrangements for staff travelling to and from workplaces. Pickup points, routes, and travel schedules can be organized according to employee locations and company operating hours."
},
{
name: "Monthly Staff Transportation Pune",
description: "Monthly staff transportation services are suitable for companies requiring consistent employee mobility throughout the month. Regular routes can be planned around office timings, employee residences, shift schedules, and designated pickup and drop points."
},
{
name: "Office Cab with Driver Pune",
description: "Office cabs with drivers provide convenient transportation for employees, executives, clients, and corporate guests. Driver-based travel can be arranged for daily commuting, business meetings, airport journeys, site visits, and other planned office requirements."
},
{
name: "Private Office Transportation Pune",
description: "Private office transportation offers dedicated travel arrangements for employees and corporate teams based on specific company requirements. Services can be organized for daily commuting, staff routes, business travel, office events, and other scheduled transportation needs."
}
],
tableData: [
["Office Pickup Drop Service Pune"],
["Office Pickup and Drop Cab Pune"],
["Employee Pickup Drop Service Pune"],
["Employee Transportation Pune"],
["Office Cab Service Pune"],
["Office Taxi Service Pune"],
["Daily Office Pickup Drop Pune"],
["Monthly Office Pickup Drop Pune"],
["Corporate Pickup Drop Pune"],
["Staff Pickup Drop Service Pune"],
["Office Cab Booking Pune"],
["Office Cab Rental Pune"],
["Employee Cab Rental Pune"],
["Office Car Rental with Driver Pune"],
["AC Office Cab Service Pune"],
["Affordable Office Pickup Drop Pune"],
["Office Pickup Drop Near Me Pune"],
["Company Employee Transport Pune"],
["IT Office Pickup Drop Pune"],
["Factory Employee Pickup Drop Pune"],
["Corporate Office Taxi Pune"],
["Daily Employee Transport Pune"],
["Monthly Staff Transportation Pune"],
["Office Cab with Driver Pune"],
["Private Office Transportation Pune"]
],
whychoose: [
{
WhyChooseheading: "Scheduled Employee Commuting",
WhyChoosedescription: "Citysky Cabs can arrange office transportation around fixed working hours, employee locations, and designated pickup points. Regular schedules help companies coordinate recurring daily travel for staff members travelling between their homes and workplaces."
},
{
WhyChooseheading: "Daily and Monthly Service Options",
WhyChoosedescription: "Transportation requirements can vary between daily office commuting and longer-term staff arrangements. Flexible daily and monthly services allow companies to organize transportation according to their workforce size, route frequency, and operational schedule."
},
{
WhyChooseheading: "Support for IT and Corporate Offices",
WhyChoosedescription: "Pune has several major technology and corporate corridors, and employee transportation can be planned for workplaces in Hinjewadi, Kharadi, Magarpatta, Baner, Viman Nagar, and other business locations. Routes can be aligned with office timings and employee residences."
},
{
WhyChooseheading: "Factory and Industrial Employee Travel",
WhyChoosedescription: "Office transportation requirements also extend to manufacturing and industrial workplaces. Pickup and drop services can support factory employees travelling to areas such as Bhosari, Chakan, Pimpri Chinchwad, Talegaon, and other industrial corridors according to shift schedules."
},
{
WhyChooseheading: "Comfortable Driver-Based Travel",
WhyChoosedescription: "Driver-operated cabs provide convenient transportation for employees, executives, clients, and business guests. Passengers can travel without managing the vehicle themselves while the arranged driver handles the journey between the scheduled pickup and destination points."
},
{
WhyChooseheading: "Airport and Business Transfers",
WhyChoosedescription: "Corporate transportation can include more than routine office commuting. Airport pickups, client transfers, business meetings, corporate events, and scheduled professional travel can also be arranged using suitable vehicles and planned travel timings."
},
{
WhyChooseheading: "Flexible Vehicle Selection",
WhyChoosedescription: "Different office travel requirements may call for different vehicle capacities. Companies can arrange suitable cars according to passenger numbers, employee routes, executive travel, guest transportation, and specific corporate journey requirements."
},
{
WhyChooseheading: "Wide Pune Route Coverage",
WhyChoosedescription: "Office pickup and drop services can connect residential neighborhoods with major employment centers across Pune. Coverage can support employees travelling between areas such as Hinjewadi, Kharadi, Hadapsar, Pimpri Chinchwad, Baner, Aundh, Viman Nagar, and other important business corridors."
}
]
};









const faqData = [
{
question: "How does Office Pickup and Drop Service in Pune work with Citysky Cabs?",
answer: "Office pickup and drop transportation can be arranged for employees who need regular travel between their residential areas and workplace. Companies can share employee pickup points, office address, working timings, passenger count, and travel frequency with Citysky Cabs to discuss a suitable daily transportation arrangement."
},
{
question: "Can companies arrange regular office pickup and drop for employees in Pune?",
answer: "Businesses can enquire about recurring employee transportation for regular office commuting. Citysky Cabs can consider employee residential locations, office destination, reporting time, shift schedules, number of passengers, and required service frequency while discussing the transportation plan."
},
{
question: "Is office pickup and drop service suitable for employees working in different shifts?",
answer: "Organizations with morning, evening, night, or rotating shifts can discuss transportation based on their employee schedules. Pickup locations, shift timings, office destinations, and passenger numbers can be shared with Citysky Cabs to understand the requirements for different employee groups."
},
{
question: "Can office pickup and drop services cover Hinjewadi and Kharadi?",
answer: "Companies located in major Pune business areas such as Hinjewadi and Kharadi can enquire about employee transportation from different residential locations. Citysky Cabs can consider the employee routes, office timings, pickup points, and passenger count when discussing regular office commute arrangements."
},
{
question: "Can employees from different areas of Pune travel together for office?",
answer: "Employees living in nearby or connected areas can discuss shared transportation when their pickup routes and work schedules are suitable. Providing the residential pickup points, office destination, total passenger count, and reporting time helps Citysky Cabs understand the group travel requirement."
},
{
question: "Can companies arrange office pickup and drop service for IT employees?",
answer: "IT companies and technology businesses can enquire about recurring employee transportation between residential areas and their Pune offices. The service can be discussed around shift schedules, employee pickup locations, office addresses, passenger numbers, and regular working days."
},
{
question: "Can office pickup and drop transportation be arranged for employees travelling to Pune Airport?",
answer: "Employees and corporate visitors who require transportation between their office, residence, and Pune Airport can enquire about airport-related cab travel. Citysky Cabs can consider flight timings, pickup locations, passenger count, and required reporting times when discussing the airport transfer requirement."
},
{
question: "Can Office Pickup and Drop Service in Pune be arranged for industrial employees?",
answer: "Manufacturing units, industrial companies, warehouses, and other organizations can discuss regular employee transportation to workplace locations across Pune and Pimpri-Chinchwad. Shift timings, employee pickup points, workplace addresses, and travel frequency can be shared with Citysky Cabs."
},
{
question: "Can office pickup and drop service be used for corporate events and meetings?",
answer: "Businesses organizing meetings, training sessions, conferences, workshops, or employee events can enquire about transportation for staff and participants. Event organizers can provide the pickup locations, venue, passenger count, reporting time, and return schedule to help Citysky Cabs understand the travel arrangement."
},
{
question: "What details are needed to arrange Office Pickup and Drop Service in Pune?",
answer: "Companies can provide employee pickup addresses or areas, office destination, passenger count, travel days, morning and evening timings, and expected service duration. Information about multiple pickup points, shift schedules, airport transfers, or additional stops can also be shared when required."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Rahul Shinde",
feedback:
"Our employees travel to the office from several areas of Pune, and coordinating their daily pickup and drop was becoming difficult. We shared the regular routes and office timings with Citysky Cabs. The planned transportation arrangement helped our team manage their everyday commute with less coordination.",
rating: 5
},
{
id: 2,
name: "Miss. Komal Joshi",
feedback:
"Our office has employees working in different shifts, so a single travel schedule was not practical for everyone. We discussed the shift timings and pickup locations with Citysky Cabs. The office pickup and drop arrangement made it easier for us to organize transportation around the team's working hours.",
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
  "name": "Office Pickup and Drop Service in Pune",
  "image": "https://www.cityskycab.in/assets/images/office-pickup-and-drop-service-in-pune.webp",
  "description": "Office Pickup and Drop Service in Pune from Citysky Cabs is designed for companies, offices and employees who need dependable daily transportation between homes and workplaces. The service covers Office Pickup Drop Service Pune, Office Pickup and Drop Cab Pune, Employee Pickup Drop Service Pune and Employee Transportation Pune for organizations managing regular staff commuting. Office Cab Service Pune and Office Taxi Service Pune can be arranged for scheduled employee routes, while Daily Office Pickup Drop Pune and Monthly Office Pickup Drop Pune options are suitable for recurring transportation requirements. Corporate Pickup Drop Pune and Staff Pickup Drop Service Pune support businesses with multiple employees and planned pickup locations. Office Cab Booking Pune, Office Cab Rental Pune and Employee Cab Rental Pune provide flexible arrangements based on office timings, shift schedules and travel requirements. Office Car Rental with Driver Pune can also be organized for companies, executives and business visitors who require dedicated transportation. Citysky Cabs can coordinate pickup points, routes, vehicle types and schedules according to the organization's daily or monthly transportation needs.",
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
    "url": "https://www.cityskycab.in/office-pickup-and-drop-service-in-pune"
  }
};






    return (
        <div>

<Helmet>
  <title>
    Office Pickup and Drop Service in Pune | Employee Transport & Daily Office Cab | +91 9272112191 
  </title>

  <meta
    name="description"
    content="Office Pickup and Drop Service in Pune by Citysky Cabs for employee transportation, daily and monthly office commuting, staff pickup drop, corporate cab rental and office cars with drivers."
  />

  <meta
    name="keywords"
    content="Office Pickup and Drop Service in Pune, Office Pickup Drop Service Pune, Office Pickup and Drop Cab Pune, Employee Pickup Drop Service Pune, Employee Transportation Pune, Office Cab Service Pune, Office Taxi Service Pune, Daily Office Pickup Drop Pune, Monthly Office Pickup Drop Pune, Corporate Pickup Drop Pune, Staff Pickup Drop Service Pune, Office Cab Booking Pune, Office Cab Rental Pune, Employee Cab Rental Pune, Office Car Rental with Driver Pune, Pune office employee transportation, Pune office pickup drop service, Pune employee transport service, Pune staff transportation, Pune corporate pickup drop, Pune daily office cab, Pune monthly office cab, Pune employee cab service, Pune employee cab rental, Pune office taxi service, Pune office car rental, Pune office cab rental, Pune office transport service, Pune corporate cab service, Pune company employee cab, Pune staff pickup drop cab, Pune staff taxi service, Pune office commute cab, Pune employee transportation cab, Pune office pickup and drop taxi, Pune corporate employee transportation, Pune office cab with driver, Pune office car with driver, Pune daily employee pickup drop, Pune monthly employee transportation, Pune shift employee cab service, Pune corporate staff cab"
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
                            <img src='/images/keywords/133.jpg' alt='img' className='img-fluid' />
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

export default Officepickupanddropservice;