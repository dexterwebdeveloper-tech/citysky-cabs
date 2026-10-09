import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Sedancabservice() {


const cardData = {
keyword: "Sedan Cab Service",
headingDescription: "Citysky Cabs provides reliable Sedan Cab Service in Pune for local transportation, airport transfers, corporate travel, family journeys, sightseeing and outstation trips. Sedans are a practical choice for individuals, couples, small families and business travelers who prefer comfortable seating with an economical private travel option. Customers can arrange sedan cabs for one-way and round-trip journeys, airport pickup and drop, corporate transportation and longer routes from Pune to popular destinations. The service covers major Pune areas including Hinjewadi, Kharadi, Hadapsar, Baner, Wakad, Pimpri Chinchwad, Viman Nagar, Kothrud, Magarpatta and Wagholi. With options for air-conditioned travel, online booking and private point-to-point transportation, Citysky Cabs can accommodate different travel schedules and route requirements.",
topPlaces: [
{
title: "Pune Airport",
description: "Pune Airport is a major transportation hub for business travelers, families and tourists arriving in or departing from Pune. Sedan cab service provides a convenient airport transfer option for passengers carrying regular luggage and looking for direct private transportation."
},
{
title: "Hinjewadi",
description: "Hinjewadi is a major IT and corporate destination in Pune with frequent employee and business travel requirements. Sedan cabs are suitable for office commutes, client visits, airport transfers and scheduled transportation between Hinjewadi and other Pune areas."
},
{
title: "Kharadi",
description: "Kharadi is an important eastern Pune business and residential area with several corporate offices and technology parks. Sedan transportation can be arranged for office travel, airport connectivity, business meetings and local or outstation journeys."
},
{
title: "Hadapsar",
description: "Hadapsar is a busy residential and commercial locality with strong connectivity toward eastern Pune and the airport corridor. Sedan cabs provide a comfortable option for daily travel, corporate movement, family transportation and outstation trips."
},
{
title: "Baner",
description: "Baner is a prominent residential, hospitality and business destination in western Pune. Private sedan cabs can be arranged for local travel, corporate meetings, airport transfers, family outings and longer-distance journeys from Baner."
},
{
title: "Wakad",
description: "Wakad provides important road connectivity between western Pune, Hinjewadi and Mumbai. Sedan cab services are useful for office employees, families and visitors traveling locally or planning airport and outstation transportation from this area."
},
{
title: "Viman Nagar",
description: "Viman Nagar is located close to Pune Airport and is home to residential communities, hotels, restaurants and commercial establishments. Sedan cabs are suitable for airport transfers, hotel transportation, corporate travel and local point-to-point journeys."
},
{
title: "Kothrud",
description: "Kothrud is one of Pune's established residential and commercial areas with convenient access to central and western parts of the city. Sedan transportation can support daily commuting, family travel, railway station transfers, airport trips and outstation journeys."
},
{
title: "Magarpatta City",
description: "Magarpatta City is a major residential and corporate destination in eastern Pune. Sedan cabs provide practical transportation for employees, business visitors and residents traveling to Pune Airport, railway stations, nearby localities and outstation destinations."
},
{
title: "Wagholi",
description: "Wagholi is a growing residential and commercial locality in eastern Pune. Sedan cab service can connect Wagholi with Kharadi, Viman Nagar, Pune Airport and other city areas while also supporting longer journeys for business and personal travel."
}
],
services: [
{
name: "sedan cab service in Pune",
description: "sedan cab service in Pune provides comfortable private transportation for local trips, airport transfers, business travel, family journeys and outstation routes. It is suitable for individuals and small groups looking for a practical four-door vehicle."
},
{
name: "Sedan Cab Service in Pune",
description: "Sedan Cab Service in Pune offers private point-to-point transportation across the city and for longer journeys. Customers can arrange sedans for airport transfers, corporate travel, local movement, sightseeing and outstation trips."
},
{
name: "Sedan Taxi Service Pune",
description: "Sedan Taxi Service Pune provides a convenient transportation option for daily travel, airport rides, office commutes, family journeys and longer-distance routes. Sedan vehicles are suitable for passengers seeking comfortable seating and practical luggage space."
},
{
name: "Sedan Cab Booking Pune",
description: "Sedan Cab Booking Pune allows passengers to arrange a private vehicle according to their pickup location, destination and travel schedule. It can be used for local rides, airport transportation, corporate travel and outstation journeys."
},
{
name: "Sedan Cab Hire Pune",
description: "Sedan Cab Hire Pune provides a private vehicle for customers who need comfortable transportation for personal or business requirements. The service can be planned for local travel, airport transfers, events, sightseeing and outstation routes."
},
{
name: "Sedan Taxi Booking Pun",
description: "Sedan Taxi Booking Pun provides a convenient private travel option for passengers requiring sedan transportation in Pune. Customers can arrange the vehicle for local travel, airport transfers, business trips and longer road journeys."
},
{
name: "Sedan Outstation Cab Pune",
description: "Sedan Outstation Cab Pune is suitable for passengers traveling from Pune to destinations outside the city. The sedan category works well for individuals, couples and small families planning one-way or round-trip journeys."
},
{
name: "Sedan Airport Cab Pune",
description: "Sedan Airport Cab Pune provides direct transportation between Pune Airport and different parts of the city. It is suitable for passengers with regular luggage who prefer a comfortable private vehicle for pickup or drop travel."
},
{
name: "Sedan One Way Cab Pune",
description: "Sedan One Way Cab Pune is designed for travelers who require private transportation to a destination without needing the same vehicle for the return journey. It can be arranged for airport, local and outstation routes."
},
{
name: "Sedan Round Trip Cab Pune",
description: "Sedan Round Trip Cab Pune provides transportation for both onward and return journeys. It is useful for family trips, business visits, sightseeing plans and outstation travel where passengers want a coordinated private vehicle."
},
{
name: "AC Sedan Cab Pune",
description: "AC Sedan Cab Pune provides air-conditioned private transportation for passengers who prefer a comfortable cabin during local and long-distance journeys. It can be used for airport transfers, office travel, family trips and outstation routes."
},
{
name: "Online Sedan Cab Booking Pune",
description: "Online Sedan Cab Booking Pune provides a convenient way to arrange private sedan transportation according to the travel schedule. Customers can share pickup details, destination, passenger requirements and preferred journey type before confirming their ride."
},
{
name: "Corporate Sedan Cab Pune",
description: "Corporate Sedan Cab Pune supports business transportation for employees, clients, executives and visitors. Sedans can be used for airport pickups, meetings, office transfers, conferences, site visits and scheduled corporate travel."
},
{
name: "Affordable Sedan Cab Pune",
description: "Affordable Sedan Cab Pune provides a practical private transportation option for customers who want comfortable travel without requiring a larger vehicle. Sedans can be suitable for individuals and small groups on local and outstation routes."
},
{
name: "Luxury Sedan Cab Pune",
description: "Luxury Sedan Cab Pune is suitable for passengers looking for a more premium private travel experience. It can be arranged for corporate guests, special occasions, airport transfers, weddings and other journeys where additional comfort is preferred."
},
{
name: "Sedan Tourist Cab Pune",
description: "Sedan Tourist Cab Pune provides private transportation for sightseeing and leisure travel. Customers can use a sedan for Pune sightseeing, nearby destinations, weekend trips and outstation tours with a vehicle dedicated to their group."
},
{
name: "Private Sedan Taxi Pune",
description: "Private Sedan Taxi Pune provides direct point-to-point transportation without shared passengers. It is suitable for families, couples, business travelers and individuals who want a dedicated vehicle for local, airport or outstation travel."
},
{
name: "Sedan Cab Service in Pune",
description: "Sedan Cab Service in Pune supports local and outstation travel with comfortable private transportation. Customers can arrange sedan cabs for airport transfers, corporate movement, family trips, sightseeing and scheduled journeys outside Pune."
},
{
name: "Sedan Taxi Service Pune",
description: "Sedan Taxi Service Pune provides flexible transportation for daily city travel and longer journeys. It can be arranged for office commutes, railway station transfers, airport rides, family travel and outstation destinations."
},
{
name: "Sedan Cab Booking Pune",
description: "Sedan Cab Booking Pune helps passengers arrange a suitable sedan for their required route and travel time. The service can support local transportation, airport transfers, business visits and one-way or return outstation trips."
},
{
name: "Sedan Outstation Cab Pune",
description: "Sedan Outstation Cab Pune provides direct private transportation for journeys beyond Pune. It is a suitable vehicle category for smaller groups traveling to nearby cities and popular destinations with normal luggage requirements."
},
{
name: "Sedan Airport Cab Pune",
description: "Sedan Airport Cab Pune offers convenient airport pickup and drop transportation between Pune Airport and different residential or commercial areas. The sedan format is suitable for passengers traveling individually or in small groups."
},
{
name: "Online Sedan Cab Booking Pune",
description: "Online Sedan Cab Booking Pune allows customers to plan their private transportation in advance. Pickup point, destination, date, time and vehicle requirements can be discussed before arranging the sedan for local or outstation travel."
},
{
name: "Corporate Sedan Cab Pune",
description: "Corporate Sedan Cab Pune provides dedicated transportation for business meetings, airport transfers, employee movement and client visits. It offers a practical private travel option for companies requiring scheduled transportation."
},
{
name: "Local Sedan Cab Service Pune",
description: "Local Sedan Cab Service Pune is useful for everyday transportation across the city. Passengers can arrange sedans for shopping, appointments, office travel, railway station transfers, airport connectivity and other point-to-point journeys."
},
{
name: "Sedan Cab Service in Hinjewadi Pune",
description: "Sedan Cab Service in Hinjewadi Pune supports IT professionals, corporate visitors, residents and families traveling from Hinjewadi. The service can be used for office commutes, airport transfers, meetings, local travel and outstation journeys."
},
{
name: "Sedan Cab Service in Kharadi Pune",
description: "Sedan Cab Service in Kharadi Pune provides private transportation for corporate employees, residents and visitors. It can connect Kharadi with Pune Airport, railway stations, business locations, nearby localities and outstation destinations."
},
{
name: "Sedan Cab Service in Hadapsar Pune",
description: "Sedan Cab Service in Hadapsar Pune offers convenient private travel for office employees, families and residents. Sedans can be arranged for local transportation, airport transfers, corporate trips, sightseeing and outstation routes."
},
{
name: "Sedan Cab Service in Baner Pune",
description: "Sedan Cab Service in Baner Pune provides comfortable transportation for residential, corporate and personal travel. Customers can arrange sedans for airport transfers, business meetings, family outings and longer road journeys."
},
{
name: "Sedan Cab Service in Wakad Pune",
description: "Sedan Cab Service in Wakad Pune supports local travel, airport transportation, corporate movement and outstation journeys. It is suitable for residents and visitors traveling toward Hinjewadi, Mumbai and other Pune destinations."
},
{
name: "Sedan Cab Service in Pimpri Chinchwad",
description: "Sedan Cab Service in Pimpri Chinchwad provides private transportation throughout the PCMC region. Customers can use the service for local trips, airport transfers, office travel, family journeys and outstation routes."
},
{
name: "Sedan Cab Service in Viman Nagar Pune",
description: "Sedan Cab Service in Viman Nagar Pune provides convenient transportation close to Pune Airport and major commercial areas. It is useful for airport transfers, hotel travel, business meetings, local movement and outstation journeys."
},
{
name: "Sedan Cab Service in Kothrud Pune",
description: "Sedan Cab Service in Kothrud Pune supports local residents, families, students and business travelers requiring private transportation. Sedans can be arranged for city travel, airport transfers, railway station trips and outstation routes."
},
{
name: "Sedan Cab Service in Magarpatta Pune",
description: "Sedan Cab Service in Magarpatta Pune provides private transportation for employees, residents and business visitors. It can be used for corporate travel, airport transfers, local journeys and outstation transportation from the eastern Pune corridor."
},
{
name: "Sedan Cab Service in Wagholi Pune",
description: "Sedan Cab Service in Wagholi Pune offers convenient transportation for residents and businesses in Wagholi. Customers can arrange sedans for Kharadi, Viman Nagar, Pune Airport, local Pune destinations and longer outstation journeys."
}
],
tableData: [
["sedan cab service in Pune"],
["Sedan Cab Service in Pune"],
["Sedan Taxi Service Pune"],
["Sedan Cab Booking Pune"],
["Sedan Cab Hire Pune"],
["Sedan Taxi Booking Pun"],
["Sedan Outstation Cab Pune"],
["Sedan Airport Cab Pune"],
["Sedan One Way Cab Pune"],
["Sedan Round Trip Cab Pune"],
["AC Sedan Cab Pune"],
["Online Sedan Cab Booking Pune"],
["Corporate Sedan Cab Pune"],
["Affordable Sedan Cab Pune"],
["Luxury Sedan Cab Pune"],
["Sedan Tourist Cab Pune"],
["Private Sedan Taxi Pune"],
["Sedan Cab Service in Pune"],
["Sedan Taxi Service Pune"],
["Sedan Cab Booking Pune"],
["Sedan Outstation Cab Pune"],
["Sedan Airport Cab Pune"],
["Online Sedan Cab Booking Pune"],
["Corporate Sedan Cab Pune"],
["Local Sedan Cab Service Pune"],
["Sedan Cab Service in Hinjewadi Pune"],
["Sedan Cab Service in Kharadi Pune"],
["Sedan Cab Service in Hadapsar Pune"],
["Sedan Cab Service in Baner Pune"],
["Sedan Cab Service in Wakad Pune"],
["Sedan Cab Service in Pimpri Chinchwad"],
["Sedan Cab Service in Viman Nagar Pune"],
["Sedan Cab Service in Kothrud Pune"],
["Sedan Cab Service in Magarpatta Pune"],
["Sedan Cab Service in Wagholi Pune"]
],
whychoose: [
{
WhyChooseheading: "Comfortable Sedan Travel",
WhyChoosedescription: "Sedan cabs provide a practical balance of comfort, seating and luggage space for individuals, couples and small families. They are suitable for both everyday Pune transportation and longer road journeys."
},
{
WhyChooseheading: "Local and Outstation Options",
WhyChoosedescription: "Passengers can use sedan transportation for local Pune travel as well as outstation journeys. One-way and round-trip arrangements make it easier to select a travel format according to the planned itinerary."
},
{
WhyChooseheading: "Convenient Airport Transfers",
WhyChoosedescription: "Sedans are suitable for airport pickup and drop requirements when passengers have normal luggage and prefer direct private transportation. Service can be arranged between Pune Airport and residential or commercial areas across Pune."
},
{
WhyChooseheading: "Corporate Travel Support",
WhyChoosedescription: "Business travelers can use sedan cabs for meetings, airport transfers, client visits, office transportation and scheduled corporate movement. The private format allows passengers to travel directly between selected locations."
},
{
WhyChooseheading: "Coverage Across Pune",
WhyChoosedescription: "Sedan cab service is available for important Pune areas such as Hinjewadi, Kharadi, Hadapsar, Baner, Wakad, Pimpri Chinchwad, Viman Nagar, Kothrud, Magarpatta and Wagholi."
},
{
WhyChooseheading: "Private Point-to-Point Rides",
WhyChoosedescription: "A private sedan allows passengers to travel directly from their selected pickup location to the destination without sharing the vehicle with unrelated travelers. This is useful for families, couples and business passengers."
},
{
WhyChooseheading: "Suitable for Small Groups",
WhyChoosedescription: "Sedans are a practical option for individuals and smaller groups who do not require a large SUV or tempo traveller. The vehicle category works well for airport trips, city travel, sightseeing and moderate-distance outstation journeys."
},
{
WhyChooseheading: "Flexible Booking Requirements",
WhyChoosedescription: "Customers can arrange sedan transportation according to their route, travel date, passenger count and journey type. Local, airport, one-way, round-trip and outstation requirements can be planned around the customer's itinerary."
}
]
};







const faqData = [
{
question: "What is a Sedan Cab Service suitable for?",
answer: "A Sedan Cab Service can be used for daily transportation, airport transfers, railway station travel, business appointments, family outings, local sightseeing, weddings, and outstation journeys. Citysky Cabs can help arrange a sedan according to the passenger count, destination, travel schedule, and type of trip."
},
{
question: "Why choose Citysky Cabs for Sedan Cab Service?",
answer: "Citysky Cabs provides sedan cab arrangements for passengers who prefer a private car for individual or small-group travel. Sedan transportation can be a practical choice for city journeys, airport transfers, corporate travel, family visits, and intercity trips where a larger vehicle is not required."
},
{
question: "Can I book a sedan cab for Pune Airport?",
answer: "Passengers can arrange a sedan for pickup from or drop-off at Pune Airport. Sharing the flight schedule, pickup address, passenger count, and preferred reporting time can help coordinate the airport journey according to the travel plan."
},
{
question: "Can I use a sedan cab for outstation travel from Pune?",
answer: "A sedan can be arranged for outstation journeys from Pune to destinations such as Mumbai, Lonavala, Mahabaleshwar, Nashik, Shirdi, Kolhapur, Goa, and other cities. The trip can be discussed according to the route, number of passengers, luggage, travel date, and one-way or return requirement."
},
{
question: "Is a Sedan Cab Service suitable for corporate travel?",
answer: "Business professionals can use a sedan for client meetings, office visits, conferences, airport transfers, hotel transportation, and other work-related journeys. A private sedan can provide direct transportation between the required locations without depending on multiple local rides."
},
{
question: "Can families book a sedan cab for local travel?",
answer: "Small families can choose a sedan for shopping, appointments, family functions, railway station transfers, airport travel, and other local journeys. Vehicle selection can be based on the number of passengers and the amount of luggage being carried during the trip."
},
{
question: "Can I hire a sedan for Pune sightseeing?",
answer: "Visitors can arrange a private sedan for sightseeing across Pune and nearby attractions. The itinerary can include selected temples, historical landmarks, forts, museums, shopping areas, and other places depending on the group's available time and preferred sightseeing route."
},
{
question: "Can I book a one-way Sedan Cab Service?",
answer: "Passengers travelling from Pune to another destination without requiring a return vehicle can enquire about a one-way sedan cab. The journey arrangement can depend on the destination, travel distance, vehicle availability, passenger requirements, and selected travel date."
},
{
question: "Is a sedan suitable for railway station transfers?",
answer: "A sedan can be useful for transportation to and from Pune Railway Station and other nearby railway stations. It is particularly convenient for individuals or small groups travelling with moderate luggage who prefer a direct pickup and drop-off service."
},
{
question: "What information is needed to book a Sedan Cab Service?",
answer: "To arrange a sedan cab, provide the pickup location, destination, travel date, preferred departure time, number of passengers, luggage details, and type of journey. Mentioning whether the requirement is local, airport, one-way, or round-trip helps Citysky Cabs understand the transportation needed."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Prakash Jagtap",
feedback:
"I needed a private car for a few business meetings across Pune and did not want to depend on different local rides throughout the day. I arranged a sedan through Citysky Cabs and used the same cab for the scheduled stops. It made the day's transportation much easier to coordinate.",
rating: 5
},
{
id: 2,
name: "Miss. Kavita Desai",
feedback:
"My mother and I needed a cab for an airport transfer with our luggage. I chose a sedan from Citysky Cabs because we only needed a small vehicle. The direct pickup and drop arrangement was convenient, and travelling together made the airport journey less stressful.",
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
  "name": "Sedan Cab Service in Pune",
  "image": "https://www.cityskycab.in/assets/images/sedan-cab-service-in-pune.webp",
  "description": "Sedan Cab Service in Pune from Citysky Cabs provides private car transportation for individuals, couples, families and business travellers. The service covers Sedan Taxi Service Pune, Sedan Cab Booking Pune, Sedan Cab Hire Pune, Sedan Taxi Booking Pune, Sedan Outstation Cab Pune and Sedan Airport Cab Pune requirements. Travellers can book sedan cars such as Swift Dzire, Hyundai Aura and similar vehicles for local travel, Pune Airport pickup and drop, corporate journeys and intercity trips. One-way, round-trip and multi-day sedan cab bookings can be arranged from Pune and Pimpri Chinchwad to Mumbai, Shirdi, Nashik, Mahabaleshwar, Lonavala and other destinations. Citysky Cabs offers flexible sedan cab options according to route and travel requirements.",
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
    "url": "https://www.cityskycab.in/sedan-cab-service-in-pune"
  }
};





    return (
        <div>


<Helmet>
  <title>
    Sedan Cab Service in Pune | Airport & Outstation Taxi | +91 9272112191 
  </title>

  <meta
    name="description"
    content="Sedan Cab Service in Pune by Citysky Cabs for local, airport and outstation travel. Book Swift Dzire, Aura or similar sedan taxis for one-way and round trips."
  />

  <meta
    name="keywords"
    content="Sedan Cab Service in Pune, sedan cab service in Pune, Sedan Taxi Service Pune, Sedan Cab Booking Pune, Sedan Cab Hire Pune, Sedan Taxi Booking Pune, Sedan Outstation Cab Pune, Sedan Airport Cab Pune, Sedan One Way Cab Pune, Sedan Round Trip Cab Pune, sedan cab Pune, sedan taxi Pune, sedan car rental Pune, sedan car hire Pune, sedan rental Pune, sedan taxi service in Pune, sedan cab booking in Pune, book sedan cab Pune, online sedan cab booking Pune, affordable sedan cab Pune, cheap sedan cab Pune, best sedan cab service Pune, reliable sedan taxi Pune, private sedan cab Pune, sedan cab with driver Pune, sedan rental with driver Pune, sedan taxi with driver Pune, sedan cab fare Pune, sedan taxi fare Pune, sedan cab rate per km Pune, sedan rental price Pune, sedan rental charges Pune, sedan hire charges Pune, local sedan cab Pune, Pune local sedan taxi, sedan cab for Pune Darshan, sedan cab for Pune sightseeing, sedan outstation taxi Pune, sedan intercity cab Pune, sedan one way taxi Pune, sedan round trip taxi Pune, Pune Airport sedan cab, Pune Airport sedan taxi, sedan airport pickup Pune, sedan airport drop Pune, Swift Dzire cab Pune, Swift Dzire taxi Pune, Swift Dzire on rent Pune, Hyundai Aura cab Pune, Hyundai Aura taxi Pune, Aura on rent Pune, AC sedan cab Pune, 4 seater cab Pune, sedan cab for family Pune, sedan corporate cab Pune, sedan office cab Pune, Pune to Mumbai sedan cab, Pune to Mumbai Airport sedan cab, Pune to Shirdi sedan cab, Pune to Nashik sedan cab, Pune to Mahabaleshwar sedan cab, Pune to Lonavala sedan cab, Pune to Alibaug sedan cab, Pimpri Chinchwad sedan cab, PCMC sedan taxi service"
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
                            <img src='/images/keywords/46.jpg' alt='img' className='img-fluid' />
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

export default Sedancabservice;