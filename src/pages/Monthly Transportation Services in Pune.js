import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Monthlytransportation() {

const cardData = {
keyword: "Monthly Transportation Services in Pune",
headingDescription: "Citysky Cabs provides reliable monthly transportation services in Pune for companies, employees, offices, factories, IT teams, business professionals, and organizations requiring regular vehicle arrangements. Monthly transportation plans can be structured for employee pickup and drop, office commuting, staff transportation, corporate travel, airport transfers, factory shifts, IT employee movement, and business requirements. Flexible cab, taxi, and car rental options with driver support can help organizations manage recurring transportation across major Pune business and employment corridors such as Hinjewadi, Kharadi, Hadapsar, Magarpatta, Pimpri Chinchwad, Baner, Viman Nagar, Bhosari, Talegaon, and surrounding areas.",
topPlaces: [
{
title: "Hinjewadi IT Park",
description: "Hinjewadi IT Park is a major technology and employment hub where companies often have recurring employee commuting requirements. Monthly transportation arrangements can support office pickup and drop, shift-based travel, employee mobility, airport transfers, and regular business transportation."
},
{
title: "Kharadi EON IT Park",
description: "Kharadi EON IT Park is a prominent corporate destination in eastern Pune with a large professional workforce. Monthly cab and employee transportation services can be organized around office timings, residential pickup points, shift schedules, business travel, and corporate mobility requirements."
},
{
title: "Pimpri Chinchwad",
description: "Pimpri Chinchwad has extensive industrial, manufacturing, commercial, and residential areas with regular staff transportation needs. Monthly vehicle arrangements can help companies coordinate employee commuting, factory shifts, office travel, and business transportation."
},
{
title: "Magarpatta City",
description: "Magarpatta City is an established business and residential destination with offices and a large professional workforce. Monthly transportation services can provide recurring employee pickup and drop, corporate cab requirements, staff movement, and scheduled business travel."
},
{
title: "Hadapsar",
description: "Hadapsar includes important IT, commercial, industrial, and residential zones where employees frequently travel on fixed schedules. Monthly transportation plans can be arranged for office commuting, staff pickup and drop, corporate travel, and regular employee movement."
},
{
title: "Bhosari MIDC",
description: "Bhosari MIDC is a major industrial area with manufacturing units, factories, suppliers, and employee workforces. Monthly employee transportation can help organizations coordinate scheduled factory commuting, shift travel, staff pickup and drop, and regular business movement."
},
{
title: "Viman Nagar",
description: "Viman Nagar is a well-connected commercial and residential locality close to Pune International Airport. Monthly cab services can support employees, executives, business professionals, airport travel, office commuting, and recurring transportation requirements."
},
{
title: "Talegaon MIDC",
description: "Talegaon MIDC is an important industrial and manufacturing corridor west of Pune. Monthly transportation arrangements can assist companies with employee commuting, factory staff movement, shift-based travel, office transfers, and regular transportation between nearby residential areas."
},
{
title: "Baner",
description: "Baner is a major business and residential corridor with offices, technology companies, commercial establishments, and professional destinations. Monthly transportation services can be planned for employees, corporate teams, executives, meetings, and recurring office travel."
},
{
title: "Pune International Airport",
description: "Pune International Airport is an important destination for corporate employees, executives, clients, and business visitors. Monthly transportation arrangements can include recurring airport transfers, employee travel, business pickups, and scheduled vehicle requirements connected with corporate operations."
}
],
services: [
{
name: "Monthly Transportation Service Pune",
description: "Monthly Transportation Service Pune provides recurring vehicle arrangements for businesses, employees, offices, factories, and professional travel. Monthly plans can be structured around fixed routes, working schedules, pickup points, and ongoing transportation requirements."
},
{
name: "Monthly Employee Transportation Pune",
description: "Monthly Employee Transportation Pune helps companies organize regular staff commuting between residential areas and workplaces. Routes, pickup points, vehicle capacity, and schedules can be coordinated according to employee locations and office or shift timings."
},
{
name: "Monthly Corporate Transportation Pune",
description: "Monthly Corporate Transportation Pune supports businesses requiring consistent transportation for employees, executives, clients, and guests. Monthly arrangements can cover office commuting, meetings, airport transfers, business travel, and recurring corporate mobility."
},
{
name: "Monthly Cab Service Pune",
description: "Monthly Cab Service Pune provides regular cab arrangements for employees, professionals, businesses, and families with recurring travel requirements. Vehicles can be scheduled for office commuting, local travel, business movement, airport trips, and other planned journeys."
},
{
name: "Monthly Taxi Service Pune",
description: "Monthly Taxi Service Pune offers recurring taxi transportation for companies and individuals who need regular vehicle access. Monthly travel can be organized for office routes, employee movement, business visits, airport transfers, and scheduled local transportation."
},
{
name: "Monthly Car Rental Pune",
description: "Monthly Car Rental Pune provides longer-duration vehicle arrangements for companies, professionals, executives, and organizations. Cars can be used for office travel, business meetings, employee movement, client visits, and regular local transportation."
},
{
name: "Monthly Office Transportation Pune",
description: "Monthly Office Transportation Pune helps businesses manage recurring employee travel between residential pickup locations and workplaces. Transportation schedules can be aligned with office timings, working days, shift requirements, and employee commuting patterns."
},
{
name: "Monthly Staff Transportation Pune",
description: "Monthly Staff Transportation Pune supports companies with regular movement of employees and support staff. Monthly routes can be organized around multiple pickup points, office locations, shift schedules, and recurring workplace transportation requirements."
},
{
name: "Monthly Employee Pickup Drop Pune",
description: "Monthly Employee Pickup Drop Pune provides planned transportation between employee residences and offices throughout an ongoing monthly schedule. Pickup points and routes can be coordinated according to staff locations, reporting times, and operational needs."
},
{
name: "Monthly Office Pickup Drop Pune",
description: "Monthly Office Pickup Drop Pune helps organizations maintain regular employee commuting arrangements throughout the month. Scheduled cabs can support morning and evening transportation based on office timings, employee locations, and daily operating schedules."
},
{
name: "Monthly Corporate Cab Pune",
description: "Monthly Corporate Cab Pune provides recurring cab transportation for employees, executives, clients, and business visitors. Companies can arrange monthly travel for office commuting, meetings, airport transfers, corporate events, and regular professional journeys."
},
{
name: "Monthly Corporate Taxi Pune",
description: "Monthly Corporate Taxi Pune supports organizations that require consistent taxi transportation for professional travel. Monthly arrangements can cover employee commuting, executive movement, client visits, airport transfers, and scheduled corporate journeys."
},
{
name: "Monthly Car Hire with Driver Pune",
description: "Monthly Car Hire with Driver Pune provides a vehicle with driver support for businesses and professionals requiring regular transportation. It can be suitable for executives, business meetings, client travel, office movement, airport transfers, and extended local use."
},
{
name: "Monthly Transport Contract Pune",
description: "Monthly Transport Contract Pune supports organizations with recurring transportation requirements through planned monthly arrangements. Routes, vehicles, schedules, employee movement, and business travel can be organized according to the company's operating needs."
},
{
name: "Monthly Employee Cab Rental Pune",
description: "Monthly Employee Cab Rental Pune provides recurring cab arrangements for staff commuting between homes and workplaces. Companies can coordinate vehicles and routes according to employee numbers, pickup locations, shift timings, and monthly transportation requirements."
},
{
name: "Affordable Monthly Transportation Pune",
description: "Affordable Monthly Transportation Pune offers recurring transportation options for businesses and employees seeking practical monthly travel arrangements. Plans can be structured around regular office commuting, staff movement, business travel, and other predictable transportation needs."
},
{
name: "Monthly Transportation Service Near Me Pune",
description: "Monthly Transportation Service Near Me Pune helps businesses and professionals find recurring transportation support within Pune and nearby business corridors. Monthly cab arrangements can cover employee commuting, office travel, airport transfers, and regular local journeys."
},
{
name: "Monthly AC Cab Service Pune",
description: "Monthly AC Cab Service Pune provides air-conditioned transportation for employees, executives, business professionals, and organizations requiring comfortable recurring travel. Monthly arrangements can support office routes, corporate mobility, airport journeys, and regular business transportation."
},
{
name: "Monthly Corporate Car Rental Pune",
description: "Monthly Corporate Car Rental Pune provides extended vehicle rental arrangements for companies managing regular business travel. Cars can support executives, employees, clients, meetings, airport transfers, corporate events, and other recurring professional requirements."
},
{
name: "Monthly Factory Employee Transport Pune",
description: "Monthly Factory Employee Transport Pune supports manufacturing and industrial businesses with recurring staff transportation. Vehicles and routes can be coordinated for factory shifts, employee pickup and drop, industrial areas, and residential locations."
},
{
name: "Monthly IT Employee Transportation Pune",
description: "Monthly IT Employee Transportation Pune helps technology companies arrange recurring commuting for software professionals and support teams. Monthly routes can accommodate office timings, shift requirements, employee pickup points, airport travel, and business mobility."
},
{
name: "Monthly Staff Cab Service Pune",
description: "Monthly Staff Cab Service Pune provides recurring cab transportation for office staff, support teams, and employees. Services can be planned around regular work schedules, multiple pickup points, office locations, and monthly commuting requirements."
},
{
name: "Monthly Business Transportation Pune",
description: "Monthly Business Transportation Pune supports professionals and companies with regular travel for meetings, client visits, office movement, airport transfers, and business operations. Monthly arrangements can be customized around recurring routes and schedules."
},
{
name: "Monthly Company Transport Service Pune",
description: "Monthly Company Transport Service Pune helps organizations manage ongoing transportation for employees, executives, clients, and business guests. Regular routes can be arranged for offices, industrial facilities, airport transfers, meetings, and corporate travel."
},
{
name: "Monthly Driver Transportation Service Pune",
description: "Monthly Driver Transportation Service Pune provides recurring driver-supported travel for companies and professionals requiring regular vehicle movement. It can support executive travel, office transportation, business meetings, airport transfers, and scheduled monthly mobility needs."
}
],
tableData: [
["Monthly Transportation Service Pune"],
["Monthly Employee Transportation Pune"],
["Monthly Corporate Transportation Pune"],
["Monthly Cab Service Pune"],
["Monthly Taxi Service Pune"],
["Monthly Car Rental Pune"],
["Monthly Office Transportation Pune"],
["Monthly Staff Transportation Pune"],
["Monthly Employee Pickup Drop Pune"],
["Monthly Office Pickup Drop Pune"],
["Monthly Corporate Cab Pune"],
["Monthly Corporate Taxi Pune"],
["Monthly Car Hire with Driver Pune"],
["Monthly Transport Contract Pune"],
["Monthly Employee Cab Rental Pune"],
["Affordable Monthly Transportation Pune"],
["Monthly Transportation Service Near Me Pune"],
["Monthly AC Cab Service Pune"],
["Monthly Corporate Car Rental Pune"],
["Monthly Factory Employee Transport Pune"],
["Monthly IT Employee Transportation Pune"],
["Monthly Staff Cab Service Pune"],
["Monthly Business Transportation Pune"],
["Monthly Company Transport Service Pune"],
["Monthly Driver Transportation Service Pune"]
],
whychoose: [
{
WhyChooseheading: "Convenient Monthly Travel Planning",
WhyChoosedescription: "A monthly transportation arrangement gives businesses a structured way to manage recurring travel instead of arranging individual journeys repeatedly. Routes, pickup points, vehicle requirements, and schedules can be planned around regular office and employee transportation needs."
},
{
WhyChooseheading: "Regular Employee Pickup and Drop",
WhyChoosedescription: "Companies can organize recurring employee pickup and drop services for staff travelling between their residences and workplaces. Monthly schedules can accommodate fixed office timings, multiple pickup locations, and regular morning and evening commuting requirements."
},
{
WhyChooseheading: "Support for IT and Corporate Teams",
WhyChoosedescription: "Pune's technology and corporate corridors have large employee populations with recurring transportation requirements. Monthly cab arrangements can support IT teams, office staff, executives, and business professionals travelling to major employment hubs."
},
{
WhyChooseheading: "Industrial and Factory Staff Mobility",
WhyChoosedescription: "Manufacturing and industrial businesses can use monthly transportation arrangements for employees working across factories and industrial areas. Routes can be organized around shift timings, workforce locations, and regular factory commuting requirements."
},
{
WhyChooseheading: "Vehicle With Driver Options",
WhyChoosedescription: "Organizations and professionals requiring regular vehicle access can choose monthly car or cab arrangements with driver support. This can be useful for executives, business meetings, client movement, airport transfers, and ongoing corporate travel."
},
{
WhyChooseheading: "Corporate Airport Transportation",
WhyChoosedescription: "Monthly transportation plans can also include recurring airport transfers for executives, employees, clients, and visiting business professionals. Travel can be scheduled between Pune International Airport, offices, hotels, and other corporate destinations."
},
{
WhyChooseheading: "Flexible Business Mobility",
WhyChoosedescription: "Monthly transportation requirements can differ between employee commuting, corporate meetings, staff movement, business trips, and executive travel. Services can be arranged according to the frequency, passenger requirements, routes, and schedules involved."
},
{
WhyChooseheading: "Suitable for Long-Term Requirements",
WhyChoosedescription: "Monthly arrangements are useful for organizations and professionals with predictable transportation needs over an extended period. Regular vehicle availability can simplify office commuting, employee movement, business travel, and recurring local transportation requirements."
}
]
};












const faqData = [
{
question: "How can companies arrange Monthly Transportation Services in Pune with Citysky Cabs?",
answer: "Businesses requiring recurring employee or office transportation can discuss monthly cab arrangements by sharing employee pickup locations, office addresses, shift timings, passenger count, and expected travel frequency. Citysky Cabs can review the regular routes and schedules to understand the transportation requirement for the month."
},
{
question: "Can Citysky Cabs provide monthly employee pickup and drop services in Pune?",
answer: "Companies can enquire about scheduled employee transportation for regular office commuting throughout the month. Residential pickup points, workplace locations, reporting times, shift schedules, employee numbers, and required service days can be shared while planning the monthly transportation arrangement."
},
{
question: "Can monthly transportation services support employees working in multiple shifts?",
answer: "Organizations with morning, evening, night, or rotating shifts can discuss monthly transportation based on their employee schedules. Citysky Cabs can consider different pickup routes, shift timings, workplace destinations, and passenger groups when reviewing a recurring employee transportation requirement."
},
{
question: "Can companies arrange monthly cab services for employees from different areas of Pune?",
answer: "Employees travelling from Hinjewadi, Kharadi, Hadapsar, Viman Nagar, Baner, Wakad, Kothrud, Pimpri-Chinchwad, and other Pune areas can be included in a monthly transportation plan. Pickup points, employee counts, office timings, and destination addresses can be shared for route planning."
},
{
question: "Are Monthly Transportation Services in Pune suitable for IT and corporate offices?",
answer: "IT companies, corporate offices, service organizations, manufacturing businesses, and other workplaces can enquire about recurring transportation for employees. Monthly requirements can include scheduled office pickup and drop services based on the company's working hours, employee routes, and required travel frequency."
},
{
question: "Can Citysky Cabs arrange monthly transportation for industrial employees in Pune?",
answer: "Manufacturing units, warehouses, industrial companies, and businesses located around Pune can discuss recurring employee transportation. Factory addresses, residential pickup areas, shift timings, passenger count, and monthly service requirements can be provided to understand the transportation schedule."
},
{
question: "Can monthly corporate transportation include airport and business travel?",
answer: "Companies with recurring airport transfers, executive travel, client meetings, or business journeys can discuss these requirements along with regular employee transportation. Citysky Cabs can consider the company's expected travel schedule, destinations, passenger details, and frequency when discussing a broader monthly arrangement."
},
{
question: "Can monthly transportation be arranged for employees working late-night shifts?",
answer: "Employees finishing work during late evening or night shifts can be included in a recurring transportation requirement. Companies can provide shift-ending times, employee pickup addresses, workplace location, passenger count, and service days so Citysky Cabs can understand the required monthly travel schedule."
},
{
question: "Can companies use monthly transportation services for multiple office locations in Pune?",
answer: "Organizations operating from more than one office can enquire about transportation covering different workplace destinations. Providing each office address, employee pickup locations, reporting times, passenger groups, and travel frequency helps define the routes required for a monthly corporate transportation plan."
},
{
question: "What details are required for Monthly Transportation Services in Pune?",
answer: "Companies can provide the employee pickup locations, office or factory addresses, passenger count, shift timings, working days, required travel frequency, and preferred vehicle category. Details about multiple routes, airport transfers, executive travel, or occasional outstation requirements can also be shared when applicable."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Amol Deshpande",
feedback:
"Our office needed regular employee transportation throughout the month, with staff coming from different parts of Pune and a few different reporting times. We shared the routes and schedules with Citysky Cabs, and having a monthly arrangement made it easier for our administration team to manage the daily commute.",
rating: 5
},
{
id: 2,
name: "Miss. Sonali Jadhav",
feedback:
"We were looking for recurring transportation for employees working in different shifts at our Pune facility. Citysky Cabs reviewed the pickup areas and timings we provided and arranged the cab requirement around our monthly schedule. It reduced the need to coordinate separate travel arrangements every day.",
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
  "name": "Monthly Transportation Services in Pune",
  "image": "https://www.cityskycab.in/assets/images/monthly-transportation-services-in-pune.webp",
  "description": "Monthly Transportation Services in Pune from Citysky Cabs are suitable for companies, offices, employees, business teams and organizations that require reliable transportation on a recurring monthly basis. Monthly Transportation Service Pune, Monthly Employee Transportation Pune and Monthly Corporate Transportation Pune can be arranged for regular staff commuting, office travel and scheduled business requirements. Monthly Cab Service Pune and Monthly Taxi Service Pune provide convenient options for organizations that need dedicated or recurring vehicle arrangements, while Monthly Car Rental Pune can support executives, project teams, visiting employees and businesses requiring a car with driver for extended periods. Monthly Office Transportation Pune and Monthly Staff Transportation Pune can be planned around employee pickup points, office locations, shift timings and daily schedules. Citysky Cabs can also coordinate monthly airport transfers, corporate travel, employee pickup and drop, industrial staff transportation and outstation business journeys. Vehicle selection, routes, pickup locations and service schedules can be customized according to passenger numbers and the organization's transportation requirements.",
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
    "url": "https://www.cityskycab.in/monthly-transportation-services-in-pune"
  }
};



    return (
        <div>



<Helmet>
  <title>
    Monthly Transportation Services in Pune | Employee, Office & Corporate Cab Plans | +91 9272112191 
  </title>

  <meta
    name="description"
    content="Monthly Transportation Services in Pune by Citysky Cabs for employee transport, corporate commuting, monthly cab and taxi service, office staff travel, car rental and recurring business transportation."
  />

  <meta
    name="keywords"
    content="Monthly Transportation Services in Pune, Monthly Transportation Service Pune, Monthly Employee Transportation Pune, Monthly Corporate Transportation Pune, Monthly Cab Service Pune, Monthly Taxi Service Pune, Monthly Car Rental Pune, Monthly Office Transportation Pune, Monthly Staff Transportation Pune, Monthly Employee Cab Pune, Monthly Corporate Cab Pune, Monthly Office Cab Pune, Monthly Employee Taxi Pune, Monthly Corporate Taxi Pune, Monthly Car Rental with Driver Pune, Monthly Cab Rental Pune, Pune monthly transportation service, Pune monthly employee transport, Pune monthly corporate transportation, Pune monthly cab service, Pune monthly taxi service, Pune monthly car rental, Pune monthly office cab, Pune monthly staff transport, Pune monthly employee cab rental, Pune monthly corporate cab rental, Pune company employee transportation, Pune office employee transport, Pune recurring cab service, Pune long term car rental with driver, Pune monthly chauffeur service, Pune monthly business travel cab, Pune monthly corporate car service, Pune monthly airport transportation, Pune monthly office pickup drop, Pune monthly staff pickup drop, Pune monthly industrial employee transport, Pune monthly company cab service, Pune monthly corporate travel service, Pune monthly taxi rental, Pune monthly car hire with driver"
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
                            <img src='/images/keywords/150.jpg' alt='img' className='img-fluid' />
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

export default Monthlytransportation;