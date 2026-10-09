import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Punetomumbaitaxifare() {


const cardData = {
keyword: "Pune to Mumbai Taxi Fare",
headingDescription: "Citysky Cabs provides Pune to Mumbai Taxi Fare services for passengers looking for private and convenient transportation between Pune and Mumbai. The applicable fare can vary according to the selected vehicle, one-way or round-trip requirement, airport destination, passenger count and luggage requirements. Customers can choose from sedan, Ertiga, Innova and Innova Crysta options based on their travel needs. The service is suitable for airport transfers, corporate travel, family journeys, personal visits and regular Pune-Mumbai transportation. Passengers can enquire about the relevant cab fare, vehicle category and journey type before confirming their booking.",
topPlaces: [
{
title: "Mumbai",
description: "Mumbai is the primary destination for passengers traveling from Pune and checking taxi fares for private transportation. Cab services can connect travelers with residential, commercial, corporate and hospitality destinations throughout the city."
},
{
title: "Chhatrapati Shivaji Maharaj International Airport",
description: "Mumbai Airport is a major destination for passengers traveling from Pune for domestic and international flights. Taxi fare can vary depending on the selected vehicle and airport transfer requirements."
},
{
title: "Mumbai Airport Terminal 2",
description: "Terminal 2 serves a large number of domestic and international passengers. Travelers from Pune can arrange private taxi transportation according to their flight schedule, luggage and preferred vehicle."
},
{
title: "Bandra",
description: "Bandra is an important Mumbai locality with corporate offices, hotels, residential areas and entertainment destinations. Pune passengers can arrange direct taxi transportation to Bandra for business or personal travel."
},
{
title: "Andheri",
description: "Andheri is a major commercial and residential destination located close to Mumbai Airport. Private taxis from Pune can provide direct transportation for airport transfers, office visits and hotel stays."
},
{
title: "Bandra Kurla Complex",
description: "Bandra Kurla Complex is a prominent business district in Mumbai. Professionals traveling from Pune can arrange private taxi transportation for meetings, conferences, corporate visits and scheduled appointments."
},
{
title: "Powai",
description: "Powai has corporate offices, residential communities and commercial destinations. A private taxi from Pune can provide direct connectivity for business travelers, families and individual passengers."
},
{
title: "Lower Parel",
description: "Lower Parel is a major commercial and corporate destination in Mumbai. Pune passengers can use private taxi transportation for business meetings, office visits, hotels and personal travel."
},
{
title: "Juhu",
description: "Juhu is a popular Mumbai destination with hotels, residences, restaurants and leisure attractions. A private taxi from Pune can provide direct transportation for families, tourists and business travelers."
},
{
title: "Navi Mumbai",
description: "Navi Mumbai includes major residential, commercial and industrial areas such as Vashi and Nerul. Passengers from Pune can arrange private transportation according to their specific Navi Mumbai destination."
}
],
services: [
{
name: "pune to mumbai fare by cab",
description: "pune to mumbai fare by cab relates to the cost of private cab transportation between Pune and Mumbai. The applicable fare can depend on vehicle category, journey type and passenger requirements."
},
{
name: "pune to mumbai taxi charges",
description: "pune to mumbai taxi charges represent the applicable cost of private taxi transportation on the Pune-Mumbai route. Vehicle type and selected travel arrangement can influence the overall charges."
},
{
name: "taxi fare from pune to mumbai airport",
description: "taxi fare from pune to mumbai airport relates to the cost of private airport transportation from Pune to Mumbai. The fare can vary according to vehicle category and airport travel requirements."
},
{
name: "pune to mumbai cheap cabs",
description: "pune to mumbai cheap cabs is intended for passengers searching for an economical private travel option between Pune and Mumbai. Travelers can select a suitable vehicle based on their passenger count and luggage."
},
{
name: "best cab service pune to mumbai",
description: "best cab service pune to mumbai is a route-focused search term for organized private transportation between Pune and Mumbai. The service can support airport, business, family and personal journeys."
},
{
name: "best cab service from pune to mumbai airport",
description: "best cab service from pune to mumbai airport is intended for travelers searching for private airport transportation from Pune. The journey can be coordinated according to flight timing and luggage requirements."
},
{
name: "best mumbai pune cab service",
description: "best mumbai pune cab service is a route-specific term for private transportation between Mumbai and Pune. It can support business travel, airport transfers, family journeys and personal trips."
},
{
name: "best pune to mumbai cab service",
description: "best pune to mumbai cab service is intended for passengers looking for organized private transportation between Pune and Mumbai. Customers can select a vehicle based on passenger capacity and luggage requirements."
},
{
name: "pune to mumbai ertiga cab",
description: "pune to mumbai ertiga cab provides a spacious private vehicle for families and small groups. The Ertiga offers practical seating and luggage capacity for comfortable intercity travel."
},
{
name: "Pune to Mumbai Innova Cab",
description: "Pune to Mumbai Innova Cab provides private transportation with additional passenger and luggage space. It is suitable for families, groups and travelers requiring a comfortable vehicle for the route."
},
{
name: "Pune to mumbai fare by cab",
description: "Pune to mumbai fare by cab provides a route-specific pricing search term for private transportation between Pune and Mumbai. The applicable amount can depend on vehicle type and selected journey."
},
{
name: "Pune to mumbai round trip cab fare",
description: "Pune to mumbai round trip cab fare relates to transportation costs when both onward and return travel are included. The applicable fare can depend on vehicle category and trip requirements."
},
{
name: "Pune to mumbai shared cab fare",
description: "Pune to mumbai shared cab fare refers to pricing associated with shared transportation on the Pune-Mumbai route. Travelers can consider the available arrangement according to their travel preferences."
},
{
name: "Pune to mumbai taxi charges",
description: "Pune to mumbai taxi charges provide a route-specific reference for private taxi transportation costs. The final amount can vary depending on vehicle category and selected travel service."
},
{
name: "Taxi fare from pune to mumbai airport",
description: "Taxi fare from pune to mumbai airport relates to the cost of a private taxi journey from Pune to Mumbai Airport. Vehicle type, trip requirement and airport destination can affect the applicable fare."
},
{
name: "pune to mumbai innova crysta taxi fare",
description: "pune to mumbai innova crysta taxi fare relates to the cost of hiring an Innova Crysta for private travel between Pune and Mumbai. The vehicle is suitable for families and groups requiring additional space."
},
{
name: "pune to mumbai airport drop innova taxi fare",
description: "pune to mumbai airport drop innova taxi fare relates to the cost of an Innova taxi for transportation from Pune to Mumbai Airport. The vehicle provides useful seating and luggage capacity for airport passengers."
},
{
name: "pune to mumbai ertiga taxi fare",
description: "pune to mumbai ertiga taxi fare relates to the cost of traveling between Pune and Mumbai in an Ertiga. This vehicle is suitable for families and small groups requiring additional seating."
},
{
name: "pune to mumbai cab round trip",
description: "pune to mumbai cab round trip provides private transportation for passengers who need both onward and return travel. It is suitable for business meetings, appointments, family visits and planned journeys."
},
{
name: "pune to mumbai Velocity Cabs taxi fare",
description: "pune to mumbai Velocity Cabs taxi fare is a route-focused fare search term for private transportation between Pune and Mumbai. The applicable fare can depend on the vehicle and journey selected."
},
{
name: "Pune to Mumbai taxi fare",
description: "Pune to Mumbai taxi fare provides a general route-specific reference for the cost of private taxi transportation between Pune and Mumbai. Vehicle category and journey requirements can affect the final amount."
},
{
name: "Pune to Mumbai taxi charges",
description: "Pune to Mumbai taxi charges refer to the applicable cost of private taxi travel between Pune and Mumbai. Customers can choose a vehicle according to passenger count, luggage and journey type."
},
{
name: "Pune to Mumbai cab price",
description: "Pune to Mumbai cab price relates to the cost of private cab transportation from Pune to Mumbai. Pricing can vary according to vehicle category and whether the journey is one-way or round-trip."
},
{
name: "Pune to Mumbai cab fare per km",
description: "Pune to Mumbai cab fare per km is a pricing-related search term for understanding the cost structure of cab travel on the route. The actual payable amount can depend on the selected vehicle and service arrangement."
},
{
name: "Pune to Mumbai taxi cost",
description: "Pune to Mumbai taxi cost relates to the overall expense of private taxi transportation between Pune and Mumbai. Vehicle category and travel requirements can influence the applicable amount."
},
{
name: "Pune Mumbai car hire",
description: "Pune Mumbai car hire provides private vehicle transportation between Pune and Mumbai for business, family, airport and personal travel. Customers can select a vehicle according to their requirements."
},
{
name: "Pune to Mumbai car hire",
description: "Pune to Mumbai car hire provides dedicated transportation from Pune to Mumbai for personal, corporate and airport journeys. Different vehicle categories can support different passenger capacities."
},
{
name: "Car hire from Pune to Mumbai",
description: "Car hire from Pune to Mumbai provides a private vehicle for direct intercity travel. It is suitable for individual travelers, families, corporate passengers and passengers traveling toward Mumbai Airport."
},
{
name: "Pune to Mumbai car Rentals",
description: "Pune to Mumbai car Rentals provide private vehicle options for passengers traveling between Pune and Mumbai. Vehicle selection can be based on passenger count, luggage and journey requirements."
},
{
name: "Pune Mumbai taxi service",
description: "Pune Mumbai taxi service provides direct private transportation between Pune and Mumbai. It can support airport transfers, corporate travel, family journeys and personal trips."
},
{
name: "Cheap Pune to Mumbai taxi fare",
description: "Cheap Pune to Mumbai taxi fare is intended for travelers searching for an economical transportation option between Pune and Mumbai. Customers can select an appropriate vehicle according to their group size."
},
{
name: "Pune Mumbai one way taxi fare",
description: "Pune Mumbai one way taxi fare relates to the cost of a single-direction private taxi journey between Pune and Mumbai. The applicable fare can depend on vehicle category and selected service."
},
{
name: "Best Pune Mumbai car hire service",
description: "Best Pune Mumbai car hire service is intended for travelers searching for organized private car transportation between Pune and Mumbai. It can support airport, corporate, family and personal travel."
},
{
name: "Affordable Pune Mumbai cab fare",
description: "Affordable Pune Mumbai cab fare is intended for travelers looking for a practical transportation cost between Pune and Mumbai. Vehicle selection can be matched with passenger count and luggage requirements."
},
{
name: "Pune to Mumbai taxi booking",
description: "Pune to Mumbai taxi booking allows passengers to reserve private transportation for a planned journey between Pune and Mumbai. Advance booking helps coordinate pickup location, travel date and vehicle preference."
}
],
tableData: [
["pune to mumbai fare by cab"],
["pune to mumbai taxi charges"],
["taxi fare from pune to mumbai airport"],
["pune to mumbai cheap cabs"],
["best cab service pune to mumbai"],
["best cab service from pune to mumbai airport"],
["best mumbai pune cab service"],
["best pune to mumbai cab service"],
["pune to mumbai ertiga cab"],
["Pune to Mumbai Innova Cab"],
["Pune to mumbai fare by cab"],
["Pune to mumbai round trip cab fare"],
["Pune to mumbai shared cab fare"],
["Pune to mumbai taxi charges"],
["Taxi fare from pune to mumbai airport"],
["pune to mumbai innova crysta taxi fare"],
["pune to mumbai airport drop innova taxi fare"],
["pune to mumbai ertiga taxi fare"],
["pune to mumbai cab round trip"],
["pune to mumbai Velocity Cabs taxi fare"],
["Pune to Mumbai taxi fare"],
["Pune to Mumbai taxi charges"],
["Pune to Mumbai cab price"],
["Pune to Mumbai cab fare per km"],
["Pune to Mumbai taxi cost"],
["Pune Mumbai car hire"],
["Pune to Mumbai car hire"],
["Car hire from Pune to Mumbai"],
["Pune to Mumbai car Rentals"],
["Pune Mumbai taxi service"],
["Cheap Pune to Mumbai taxi fare"],
["Pune Mumbai one way taxi fare"],
["Best Pune Mumbai car hire service"],
["Affordable Pune Mumbai cab fare"],
["Pune to Mumbai taxi booking"]
],
whychoose: [
{
WhyChooseheading: "Route-Specific Fare Information",
WhyChoosedescription: "Passengers can enquire about the applicable Pune-Mumbai taxi fare according to their selected vehicle and journey type. This helps travelers understand the expected transportation cost before confirming their cab."
},
{
WhyChooseheading: "Multiple Vehicle Options",
WhyChoosedescription: "Sedan, Ertiga, Innova and Innova Crysta options can accommodate different passenger and luggage requirements. The selected vehicle category can be considered while checking the applicable fare."
},
{
WhyChooseheading: "One-Way and Round-Trip Travel",
WhyChoosedescription: "Travelers can arrange either single-direction or return transportation depending on their itinerary. Fare requirements can be discussed according to the actual type of journey."
},
{
WhyChooseheading: "Mumbai Airport Transfers",
WhyChoosedescription: "Passengers traveling from Pune to Mumbai Airport can arrange private airport transportation according to their flight schedule. Vehicle-specific fare information can be checked before confirming the airport journey."
},
{
WhyChooseheading: "Private Cab Convenience",
WhyChoosedescription: "Private taxi transportation allows passengers to travel directly between Pune and Mumbai without sharing the vehicle with unrelated travelers. This is useful for families, professionals and individual passengers."
},
{
WhyChooseheading: "Family and Group Travel",
WhyChoosedescription: "Families and groups can choose larger vehicle categories when additional seating and luggage capacity are required. Innova and Innova Crysta options are suitable for longer intercity journeys."
},
{
WhyChooseheading: "Corporate Travel Support",
WhyChoosedescription: "Business travelers can arrange private transportation for meetings, conferences and office visits between Pune and Mumbai. The vehicle and journey type can be coordinated according to the planned schedule."
},
{
WhyChooseheading: "Advance Taxi Booking",
WhyChoosedescription: "Travelers can provide their pickup location, travel date, passenger count and preferred vehicle while booking the cab. Advance coordination is useful for airport transfers, business appointments and fixed travel plans."
}
]
};














const faqData = [
{
question: "How can I know the Pune to Mumbai Taxi Fare with Citysky Cabs?",
answer: "The Pune to Mumbai Taxi Fare can depend on factors such as the selected vehicle, pickup location, Mumbai destination, one-way or round-trip requirement, travel date, and trip duration. Travellers can share their complete journey details with Citysky Cabs to understand the applicable cab fare for their requirement."
},
{
question: "Does Pune to Mumbai Taxi Fare vary for one-way and round trips?",
answer: "Yes, the fare arrangement can differ depending on whether the journey is one-way or requires a return trip. A one-way journey and a round-trip itinerary involve different travel requirements, so passengers should mention the complete route and return schedule while enquiring about the taxi fare."
},
{
question: "Does the car type affect Pune to Mumbai Taxi Fare?",
answer: "The selected vehicle can influence the overall taxi fare. Travellers may have different requirements based on passenger count, luggage, comfort, and trip type, so Citysky Cabs can discuss suitable vehicle options before finalizing the transportation arrangement."
},
{
question: "Can I get a Pune to Mumbai Taxi Fare for airport travel?",
answer: "Passengers travelling from Pune to Mumbai Airport can enquire about the applicable cab fare by providing their Pune pickup location, airport terminal, flight timing, passenger count, and luggage requirements. The airport route can then be considered according to the complete journey details."
},
{
question: "Is Pune to Mumbai Taxi Fare suitable for family travel?",
answer: "Families can enquire about the taxi fare based on their group size and travel requirements. Providing the number of passengers, luggage quantity, pickup location, and Mumbai destination helps Citysky Cabs understand whether a particular vehicle category is appropriate for the journey."
},
{
question: "Can corporate travellers enquire about Pune to Mumbai Taxi Fare?",
answer: "Business travellers can request a fare estimate for journeys between Pune and Mumbai for meetings, conferences, office visits, exhibitions, and client appointments. The enquiry can include the required pickup point, destination, travel schedule, passenger count, and whether the trip is one-way or round-trip."
},
{
question: "Does the Mumbai destination affect the Pune to Mumbai Taxi Fare?",
answer: "The final destination can be one of the factors considered when planning the fare because Mumbai includes many different areas and surrounding locations. Passengers should provide the exact destination, such as Andheri, Bandra, BKC, Powai, Thane, or Navi Mumbai, when requesting the taxi fare."
},
{
question: "Can I enquire about Pune to Mumbai Taxi Fare for an early morning trip?",
answer: "Travellers planning an early morning journey can share their preferred departure time along with the pickup and destination details. Citysky Cabs can review the complete travel requirement and discuss the applicable fare arrangement for the requested trip."
},
{
question: "Can I compare different car options for Pune to Mumbai travel?",
answer: "Passengers can discuss available vehicle categories based on their group size, luggage, comfort preferences, and journey requirements. Comparing suitable vehicle options can help travellers select an arrangement that matches their transportation needs before confirming the Pune to Mumbai trip."
},
{
question: "What details should I provide to get a Pune to Mumbai Taxi Fare?",
answer: "Share the Pune pickup location, Mumbai destination, travel date, preferred departure time, number of passengers, luggage requirements, and whether the journey is one-way or round-trip. For airport travel, include the flight timing and terminal information so Citysky Cabs can understand the complete route."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Vivek Shinde",
feedback:
"I needed to travel from Pune to Mumbai for a business appointment and wanted to understand the fare before finalizing the cab. I shared my pickup point, destination, and travel schedule with Citysky Cabs. The clear discussion about the trip requirements helped me plan the transportation within my schedule.",
rating: 5
},
{
id: 2,
name: "Miss. Neelam Pawar",
feedback:
"We were planning a family journey from Pune to Mumbai and had luggage with us, so I wanted to check the suitable cab option and fare beforehand. I contacted Citysky Cabs with our passenger details and destination. The information helped us organize the trip without having to arrange separate vehicles.",
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
  "name": "Pune to Mumbai Taxi Fare",
  "image": "https://www.cityskycab.in/assets/images/pune-to-mumbai-taxi-fare.webp",
  "description": "Pune to Mumbai Taxi Fare from Citysky Cabs provides private intercity cab options for individuals, families, business travellers and groups travelling between Pune and Mumbai. The service covers Pune to Mumbai Fare by Cab, Pune to Mumbai Taxi Charges, Taxi Fare from Pune to Mumbai Airport, Pune to Mumbai Cheap Cabs, Best Cab Service Pune to Mumbai, Best Cab Service from Pune to Mumbai Airport and Mumbai Pune Cab requirements. Travellers can choose sedan, Swift Dzire, Hyundai Aura, Ertiga, Innova or Innova Crysta vehicles according to passenger count, luggage and journey preferences. One-way, round-trip, Mumbai Airport transfer and return taxi bookings can be arranged with pickup locations across Pune and Pimpri Chinchwad. Final fares can vary according to vehicle category, route, trip type, tolls, parking and other applicable travel charges.",
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
    "url": "https://www.cityskycab.in/pune-to-mumbai-taxi-fare"
  }
};







    return (
        <div>

<Helmet>
  <title>
    Pune to Mumbai Taxi Fare | Cab Charges & Airport Taxi | +91 9272112191 
  </title>

  <meta
    name="description"
    content="Pune to Mumbai Taxi Fare with Citysky Cabs for one-way, round-trip and airport travel. Check cab charges and book sedan, Ertiga, Innova or Innova Crysta."
  />

  <meta
    name="keywords"
    content="Pune to Mumbai Taxi Fare, Pune to Mumbai Fare by Cab, Pune to Mumbai Taxi Charges, Taxi Fare from Pune to Mumbai Airport, Pune to Mumbai Cheap Cabs, Best Cab Service Pune to Mumbai, Best Cab Service from Pune to Mumbai Airport, Best Mumbai Pune Cab, Pune to Mumbai cab fare, Pune Mumbai taxi fare, Pune Mumbai cab fare, Pune to Mumbai taxi price, Pune to Mumbai cab price, Pune Mumbai taxi charges, Pune Mumbai cab charges, Pune to Mumbai cab cost, Pune to Mumbai taxi cost, Pune Mumbai cab rate, Pune Mumbai taxi rate, Pune to Mumbai fare by taxi, Pune Mumbai fare by cab, Pune to Mumbai car fare, Pune to Mumbai car rental fare, Pune to Mumbai taxi fare per km, Pune to Mumbai cab fare per km, Pune to Mumbai cab rate per km, Pune to Mumbai taxi rate per km, Pune to Mumbai one way taxi fare, Pune to Mumbai one way cab fare, Pune Mumbai one way cab charges, Pune Mumbai one way taxi price, Pune to Mumbai round trip taxi fare, Pune to Mumbai round trip cab fare, Pune Mumbai Pune cab fare, Pune Mumbai Pune taxi fare, Pune to Mumbai return cab charges, Pune to Mumbai Airport taxi fare, Pune to Mumbai Airport cab fare, Pune Mumbai Airport taxi fare, Pune Mumbai Airport cab fare, Pune to Mumbai International Airport taxi fare, Pune to Mumbai International Airport cab fare, Pune to Mumbai Domestic Airport taxi fare, Pune to Mumbai Domestic Airport cab fare, Pune to Mumbai Airport taxi charges, Pune to Mumbai Airport cab charges, Pune to Mumbai Airport taxi price, Pune to Mumbai Airport cab price, cheap taxi from Pune to Mumbai, cheapest cab from Pune to Mumbai, affordable Pune to Mumbai cab, affordable Pune to Mumbai taxi, best taxi service Pune to Mumbai, best cab from Pune to Mumbai, reliable Pune to Mumbai cab service, Pune to Mumbai private taxi fare, Pune to Mumbai sedan cab fare, Pune to Mumbai Swift Dzire cab fare, Pune to Mumbai Aura taxi fare, Pune to Mumbai Ertiga cab fare, Pune to Mumbai Ertiga taxi fare, Pune to Mumbai Innova cab fare, Pune to Mumbai Innova taxi fare, Pune to Mumbai Innova Crysta cab fare, Pune to Mumbai Innova Crysta taxi fare, Pune to Mumbai cab booking, Pune to Mumbai taxi booking, Pune Mumbai cab service, Pune Mumbai taxi service, Pune to Mumbai Airport cab booking, Pune to Mumbai Airport taxi booking, Pune Airport to Mumbai taxi fare, Pune Airport to Mumbai cab fare, Pimpri Chinchwad to Mumbai cab fare, PCMC to Mumbai taxi fare, Hinjewadi to Mumbai cab fare, Kharadi to Mumbai taxi fare, Mumbai to Pune taxi fare, Mumbai to Pune cab fare, Mumbai Pune taxi charges, Mumbai Pune cab charges, Mumbai Airport to Pune taxi fare, Mumbai Airport to Pune cab fare"
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
                            <img src='/images/keywords/56.jpg' alt='img' className='img-fluid' />
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

export default Punetomumbaitaxifare;