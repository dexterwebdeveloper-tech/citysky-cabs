import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Punerailwaystation() {


const cardData = {
keyword: "Pune Railway Station Cab Service",
headingDescription: "Pune Railway Station Cab Service provides convenient private transportation for passengers arriving at or departing from Pune Junction. Citysky Cabs offers station pickup and drop services, local transfers, airport connections and outstation journeys with Sedan, SUV and other suitable vehicle options. The service is useful for individuals, families, business travelers and groups who need direct transportation from Pune Railway Station to Pune city areas or destinations such as Mumbai and other outstation locations, with flexible arrangements for scheduled and urgent travel requirements.",
topPlaces: [
{
title: "Pune Railway Station",
description: "Pune Railway Station is a major railhead serving passengers traveling to and from Pune. A dedicated cab provides convenient pickup or drop transportation directly from the station, helping passengers continue their journey without arranging multiple local connections, especially when carrying luggage or traveling with family."
},
{
title: "Shivajinagar",
description: "Shivajinagar is a centrally located part of Pune with commercial areas, offices, educational institutions and transport connections. Passengers arriving at Pune Railway Station can use a private cab for a direct transfer to Shivajinagar, making it useful for business travelers, students and local visitors."
},
{
title: "Pune Airport",
description: "Pune Airport is an important destination for passengers connecting their railway journey with air travel. A private station-to-airport cab can provide direct transportation from Pune Railway Station while allowing travelers to manage luggage and schedule the transfer around their flight timing."
},
{
title: "Koregaon Park",
description: "Koregaon Park is a popular Pune locality with hotels, restaurants, offices and residential properties. Travelers arriving by train can arrange a direct cab from Pune Railway Station to the area, offering a practical transfer option for tourists, business visitors and families."
},
{
title: "Viman Nagar",
description: "Viman Nagar is a prominent residential and commercial locality located close to Pune Airport. A station cab can provide direct transportation from Pune Railway Station to Viman Nagar for passengers visiting hotels, offices, residences or nearby airport-related destinations."
},
{
title: "Hinjewadi",
description: "Hinjewadi is one of Pune's major technology and business hubs and receives regular visitors from other cities. Passengers arriving at Pune Railway Station can arrange a dedicated cab to Hinjewadi, making the transfer convenient for corporate travelers carrying work equipment or luggage."
},
{
title: "Kharadi",
description: "Kharadi is a major IT and commercial area in eastern Pune and is home to numerous offices and business establishments. A private cab from Pune Railway Station provides direct transportation for employees, corporate visitors, families and travelers staying in hotels around the area."
},
{
title: "Mumbai",
description: "Mumbai is a major outstation destination from Pune and can be reached directly by cab from Pune Railway Station. Travelers arriving at Pune Junction can continue their journey by private car instead of arranging separate local transportation, making the option useful for families, business travelers and groups."
},
{
title: "Lonavala",
description: "Lonavala is a popular nearby hill destination and a practical outstation choice for passengers arriving in Pune by train. A private cab from Pune Railway Station can provide direct transportation to Lonavala for weekend trips, family holidays and sightseeing plans."
},
{
title: "Mahabaleshwar",
description: "Mahabaleshwar is a popular hill station that can be reached by private cab after arriving at Pune Railway Station. Travelers planning a holiday can arrange direct station pickup and continue toward Mahabaleshwar with luggage and family members in a dedicated vehicle."
}
],
services: [
{
name: "Pune railway station cab",
description: "Pune railway station cab provides direct transportation for passengers arriving at or departing from Pune Junction. The service can be used for station pickup, drop, hotel transfers, airport connections and onward travel to different parts of Pune."
},
{
name: "cab near pune railway station",
description: "cab near pune railway station provides a convenient private transportation option for passengers looking for a vehicle around Pune Junction. It is suitable for local transfers, hotel journeys, business travel and connecting trips after arriving by train."
},
{
name: "taxi at pune station",
description: "taxi at pune station offers private transportation for passengers who need to continue their journey after arriving at Pune Railway Station. Travelers can arrange direct transfers to localities, hotels, offices, airports or outstation destinations according to their requirements."
},
{
name: "railway pickup drop pune",
description: "railway pickup drop pune provides scheduled transportation for passengers traveling to or from Pune Railway Station. A private cab can be arranged around train timings, making the service useful for individuals, families, senior travelers and passengers carrying luggage."
},
{
name: "cab from pune railway station",
description: "cab from pune railway station provides direct onward transportation from Pune Junction to destinations across the city and beyond. Travelers can select a suitable vehicle according to passenger count, luggage and whether the journey is local or outstation."
},
{
name: "pune station taxi service",
description: "pune station taxi service offers private transportation for passengers arriving at Pune Railway Station. The cab can be used for residential transfers, hotel drop-offs, office travel, airport connections and longer journeys to destinations outside Pune."
},
{
name: "affordable station cab pune",
description: "affordable station cab pune provides a practical transportation option for passengers looking for a private vehicle after reaching Pune Junction. The trip can be arranged according to the destination, vehicle category and specific travel requirements."
},
{
name: "24 hour station cab pune",
description: "24 hour station cab pune supports passengers who require transportation around different train arrival and departure schedules. This can be useful for early morning and late-night station transfers, subject to vehicle availability and advance arrangements."
},
{
name: "local cab near station pune",
description: "local cab near station pune provides convenient transportation from Pune Railway Station to nearby and city destinations. Passengers can use the service for hotels, offices, residential areas, shopping locations and other local transfers after completing their train journey."
},
{
name: "station transfer taxi pune",
description: "station transfer taxi pune provides dedicated transportation between Pune Railway Station and the passenger's desired destination. The service is suitable for direct hotel, office, airport and residential transfers while offering convenient luggage handling."
},
{
name: "best cab pune railway station",
description: "best cab pune railway station provides private transportation for passengers who need reliable station transfers. The service can accommodate different travel requirements, from short local journeys to longer airport and outstation trips starting from Pune Junction."
},
{
name: "budget station taxi pune",
description: "budget station taxi pune provides a practical private transfer option for travelers arriving at Pune Railway Station. Passengers can choose an appropriate vehicle and arrange transportation based on their destination, passenger count and luggage requirements."
},
{
name: "instant cab railway station pune",
description: "instant cab railway station pune is useful for passengers who need onward transportation soon after arriving at Pune Junction. Subject to availability, a suitable vehicle can be arranged for local transfers, airport travel, hotel drop-offs or outstation journeys."
},
{
name: "sedan cab station pune",
description: "sedan cab station pune is suitable for individuals, couples and small families traveling from Pune Railway Station. A sedan offers a practical private travel arrangement for station transfers, airport connections, business travel and selected outstation destinations."
},
{
name: "suv cab pune station",
description: "suv cab pune station provides a more spacious private vehicle option for families and small groups arriving at Pune Junction. The larger cabin and luggage capacity make an SUV useful for airport transfers, city travel and longer outstation journeys."
},
{
name: "Pune Railway Station Cab for Outstation",
description: "Pune Railway Station Cab for Outstation provides direct transportation from Pune Junction to destinations outside the city. Travelers arriving by train can continue directly toward Mumbai, Lonavala, Mahabaleshwar and other destinations without arranging a separate local transfer."
},
{
name: "Outstation Cab from Pune Railway Station",
description: "Outstation Cab from Pune Railway Station offers private road transportation for passengers who want to begin an outstation journey immediately after arriving by train. Vehicle selection can be based on the number of passengers, luggage and travel distance."
},
{
name: "Pune Station Taxi Service for Outstation",
description: "Pune Station Taxi Service for Outstation provides direct transportation from Pune Junction to destinations across Maharashtra and nearby regions. It is suitable for family trips, business travel, weekend journeys and travelers continuing to another city after arriving by railway."
},
{
name: "Railway Station Outstation Cab Pune",
description: "Railway Station Outstation Cab Pune provides a convenient connection between train travel and long-distance road travel. Passengers can arrange a private vehicle from Pune Railway Station for one-way or return journeys depending on their destination and itinerary."
},
{
name: "Pune Junction Outstation Cab Booking",
description: "Pune Junction Outstation Cab Booking allows passengers to reserve their private vehicle in advance for travel starting from Pune Railway Station. Advance arrangements can help coordinate pickup timing, vehicle requirements, passenger count and the final outstation destination."
},
{
name: "Pune Railway Station Taxi Booking",
description: "Pune Railway Station Taxi Booking enables travelers to arrange station transportation before their train arrival or departure. The cab can be planned for local transfers, airport journeys, hotel transportation or outstation travel according to the passenger's itinerary."
},
{
name: "Best Outstation Cab from Pune Station",
description: "Best Outstation Cab from Pune Station provides private transportation for passengers continuing to another city after arriving at Pune Junction. The journey can be arranged as one-way or round trip with vehicle selection based on the group size and luggage requirements."
},
{
name: "24x7 Pune Railway Station Cab",
description: "24x7 Pune Railway Station Cab supports travelers with different train schedules and transfer requirements. Private station transportation can be arranged for early morning, daytime or late-night arrivals and departures, subject to vehicle availability."
},
{
name: "Cheap Outstation Cab Pune Railway Station",
description: "Cheap Outstation Cab Pune Railway Station provides a practical option for passengers looking for private transportation from Pune Junction to another city. The final fare can vary according to the destination, vehicle, journey type and additional travel requirements."
},
{
name: "Pune Station to Mumbai Cab Service",
description: "Pune Station to Mumbai Cab Service provides direct road transportation for passengers arriving at Pune Railway Station and continuing toward Mumbai. A private cab eliminates the need for additional local transfers and can be selected according to passenger and luggage requirements."
},
{
name: "best outstation",
description: "best outstation provides a private travel option for passengers starting an outstation journey from Pune Railway Station. The destination, vehicle category and trip type can be selected according to the traveler's schedule and passenger requirements."
},
{
name: "cab near Pune railway station",
description: "cab near Pune railway station offers convenient transportation for passengers looking for a private vehicle close to Pune Junction. It can be used for local destinations, hotels, offices, airport transfers and onward outstation journeys."
},
{
name: "cheap taxi from Pune station",
description: "cheap taxi from Pune station provides a practical private transfer option for passengers arriving at Pune Junction. Travelers can choose a suitable vehicle based on their destination, passenger count and luggage while planning either local or outstation travel."
},
{
name: "book outstation cab from Pune railway station",
description: "book outstation cab from Pune railway station allows travelers to arrange their long-distance vehicle before reaching Pune Junction. Advance booking helps coordinate train arrival time, destination, vehicle category and passenger requirements for a smoother onward journey."
},
{
name: "Safe cab service Pune station",
description: "Safe cab service Pune station provides private transportation for passengers who want a dedicated vehicle after arriving at Pune Railway Station. The service can be arranged for families, individuals, business travelers and groups traveling to local or outstation destinations."
},
{
name: "Railway station pickup cab Pune",
description: "Railway station pickup cab Pune provides direct pickup transportation from Pune Junction to the passenger's chosen destination. The arrangement can be coordinated around train timings and is useful for travelers carrying luggage or arriving with family members."
},
{
name: "Cab from Pune junction to Mumbai",
description: "Cab from Pune junction to Mumbai provides direct private road transportation from Pune Railway Station toward Mumbai. The service is suitable for passengers arriving by train who want to continue their journey without arranging an additional transfer within Pune."
},
{
name: "Family outstation taxi Pune station",
description: "Family outstation taxi Pune station provides private transportation for families starting an outstation journey after arriving at Pune Junction. Vehicle selection can take into account family size, luggage and the distance of the planned destination."
},
{
name: "24 hour taxi near Pune station",
description: "24 hour taxi near Pune station supports passengers who need private transportation around different train schedules. The service can be useful for late-night arrivals, early departures, local transfers and outstation travel, subject to vehicle availability."
}
],
tableData: [
["Pune railway station cab"],
["cab near pune railway station"],
["taxi at pune station"],
["railway pickup drop pune"],
["cab from pune railway station"],
["pune station taxi service"],
["affordable station cab pune"],
["24 hour station cab pune"],
["local cab near station pune"],
["station transfer taxi pune"],
["best cab pune railway station"],
["budget station taxi pune"],
["instant cab railway station pune"],
["sedan cab station pune"],
["suv cab pune station"],
["Pune Railway Station Cab for Outstation"],
["Outstation Cab from Pune Railway Station"],
["Pune Station Taxi Service for Outstation"],
["Railway Station Outstation Cab Pune"],
["Pune Junction Outstation Cab Booking"],
["Pune Railway Station Taxi Booking"],
["Best Outstation Cab from Pune Station"],
["24x7 Pune Railway Station Cab"],
["Cheap Outstation Cab Pune Railway Station"],
["Pune Station to Mumbai Cab Service"],
["best outstation"],
["cab near Pune railway station"],
["cheap taxi from Pune station"],
["book outstation cab from Pune railway station"],
["Safe cab service Pune station"],
["Railway station pickup cab Pune"],
["Cab from Pune junction to Mumbai"],
["Family outstation taxi Pune station"],
["24 hour taxi near Pune station"]
],
whychoose: [
{
WhyChooseheading: "Convenient Railway Station Transfers",
WhyChoosedescription: "Citysky Cabs provides direct transportation for passengers arriving at or departing from Pune Railway Station. The service can connect travelers with homes, hotels, offices, airports and other destinations without requiring them to arrange multiple local transport options."
},
{
WhyChooseheading: "Local and Outstation Travel",
WhyChoosedescription: "The same station transfer service can support both short local journeys and longer outstation trips. Passengers can travel from Pune Junction toward destinations within Pune or continue directly to cities such as Mumbai, Lonavala and Mahabaleshwar."
},
{
WhyChooseheading: "Pickup Around Train Schedules",
WhyChoosedescription: "Railway journeys often involve early morning, daytime or late-night arrival times. Cab arrangements can be planned around the expected train schedule so passengers have a dedicated vehicle ready for their onward transfer, subject to availability."
},
{
WhyChooseheading: "Suitable Vehicle Choices",
WhyChoosedescription: "Sedan and SUV options can accommodate different passenger groups and luggage requirements. Smaller groups can choose a practical car, while families and passengers carrying more luggage can consider a more spacious vehicle for the station transfer or outstation journey."
},
{
WhyChooseheading: "Direct Mumbai Connectivity",
WhyChoosedescription: "Passengers arriving at Pune Junction can continue directly toward Mumbai by private cab without arranging an additional city transfer. This is useful for business travelers, families and visitors whose final destination is in Mumbai or its surrounding areas."
},
{
WhyChooseheading: "Family-Friendly Station Service",
WhyChoosedescription: "Families arriving at Pune Railway Station can use a dedicated cab to keep everyone and their luggage together. Private transportation can be particularly convenient when traveling with children, elderly family members or multiple bags after a long train journey."
},
{
WhyChooseheading: "Airport and Hotel Transfers",
WhyChoosedescription: "A station cab can connect Pune Railway Station with Pune Airport, hotels, offices and residential areas across the city. Direct transportation makes it easier for travelers to continue their itinerary immediately after completing their railway journey."
},
{
WhyChooseheading: "Flexible Outstation Arrangements",
WhyChoosedescription: "Travelers can begin an outstation road journey directly from Pune Junction instead of first traveling to another pickup point. One-way and return arrangements can be planned according to the final destination, passenger count, luggage and overall trip requirements."
}
]
};












const faqData = [
{
question: "How can I book a Pune Railway Station Cab Service with Citysky Cabs?",
answer: "Passengers can arrange a cab to or from Pune Railway Station by sharing their pickup or drop location, travel date, train timing, passenger count, and luggage details. Citysky Cabs can coordinate the journey according to the train schedule and the traveller's transportation requirement."
},
{
question: "Can I get a cab from Pune Railway Station to my home or hotel?",
answer: "Travellers arriving at Pune Railway Station can enquire about a private cab to their home, hotel, office, or another destination in and around Pune. Providing the exact drop location and train arrival details helps coordinate the transfer according to the planned journey."
},
{
question: "Can Citysky Cabs provide a pickup from Pune Railway Station?",
answer: "Passengers expecting to arrive by train can request a station pickup by sharing their train details, expected arrival time, passenger count, and destination. The transportation arrangement can be planned according to the information provided during the booking enquiry."
},
{
question: "Is Pune Railway Station Cab Service available for early morning or late-night trains?",
answer: "Travellers with trains scheduled during early morning or late-night hours can enquire about cab availability for their station transfer. Share the expected train arrival or departure time along with the pickup or drop location so the requirement can be coordinated accordingly."
},
{
question: "Can families book a cab from Pune Railway Station?",
answer: "Families arriving or departing from Pune Railway Station can consider a private cab when travelling with children, senior citizens, and multiple bags. A dedicated vehicle allows the entire group to travel together between the station and their selected destination."
},
{
question: "Can I book a cab to Pune Railway Station for an upcoming train?",
answer: "Passengers travelling from Pune to another city can arrange a station drop by sharing their pickup address, train departure time, passenger count, and luggage details. Planning the transfer around the train schedule can help the journey stay organized."
},
{
question: "Can I book a cab from Pune Railway Station for an outstation destination?",
answer: "Travellers arriving at Pune Railway Station and continuing to another city can enquire about direct cab transportation from the station. Share the destination, train arrival details, number of passengers, and luggage requirements so the onward journey can be planned accordingly."
},
{
question: "Can corporate travellers use Pune Railway Station Cab Service?",
answer: "Business travellers can arrange station transfers to offices, hotels, industrial areas, meetings, or other professional destinations in Pune. Providing the train schedule and exact pickup or drop location helps coordinate the cab around the business itinerary."
},
{
question: "Can I use the service for Pune Railway Station to Pune Airport transfer?",
answer: "Passengers connecting from Pune Railway Station to Pune Airport can enquire about a direct cab transfer. It is useful to provide the train arrival time, flight schedule, number of passengers, and luggage details so the transfer can be planned around both journeys."
},
{
question: "What details are required to arrange a Pune Railway Station Cab?",
answer: "When making a booking enquiry, provide the pickup or drop location, train name or number if available, expected arrival or departure time, travel date, passenger count, and luggage details. For onward travel, also mention the final destination so Citysky Cabs can coordinate the transportation requirement."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Harish Tiwari",
feedback:
"I was arriving at Pune Railway Station late in the evening and needed a cab to my hotel. I shared my train timing and destination with Citysky Cabs, and the transfer was arranged around my arrival. It was convenient not having to look for separate transport after getting off the train.",
rating: 5
},
{
id: 2,
name: "Miss. Ritu Malhotra",
feedback:
"Our family was travelling by train with several bags and needed a cab from Pune Railway Station to our destination. Citysky Cabs arranged the pickup after we provided the train details and passenger information. Having a private vehicle made the station transfer much easier, especially with the children and luggage.",
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
  "name": "Pune Railway Station Cab Service",
  "image": "https://www.cityskycab.in/assets/images/pune-railway-station-cab-service.webp",
  "description": "Pune Railway Station Cab Service from Citysky Cabs provides private pickup and drop travel for passengers arriving at or departing from Pune Railway Station. The service covers Pune Railway Station Cab, Cab Near Pune Railway Station, Taxi at Pune Station, Railway Pickup Drop Pune, Cab from Pune Railway Station and Pune Station Taxi Service requirements. Travellers can book a suitable sedan, Ertiga or Innova Crysta depending on passenger count, luggage and destination. Cab services can be arranged for local Pune travel, hotel transfers, home drops, business travel, airport transfers and outstation journeys. Citysky Cabs provides flexible railway station pickup and drop options for individuals, families and groups travelling between Pune Railway Station and destinations across Pune, Pimpri Chinchwad and nearby areas.",
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
    "url": "https://www.cityskycab.in/pune-railway-station-cab-service"
  }
};



    return (
        <div>

<Helmet>
  <title>
    Pune Railway Station Cab Service | Pickup & Drop Taxi | +91 8554819191
  </title>

  <meta
    name="description"
    content="Pune Railway Station Cab Service by Citysky Cabs for convenient pickup and drop. Book sedan, Ertiga or Innova Crysta for local, airport and outstation travel."
  />

  <meta
    name="keywords"
    content="Pune Railway Station Cab Service, Pune railway station cab, cab near Pune railway station, taxi at Pune station, railway pickup drop Pune, cab from Pune railway station, Pune station taxi service, affordable station cab Pune, 24 hour station cab Pune, local cab near station Pune, Pune railway station taxi, Pune railway station taxi service, Pune railway station cab booking, Pune station cab booking, cab at Pune railway station, taxi near Pune railway station, Pune station pickup cab, Pune station drop cab, Pune railway station pickup service, Pune railway station drop service, Pune railway station car rental, Pune railway station private cab, Pune railway station local cab, Pune railway station outstation cab, Pune railway station Innova Crysta cab, Pune railway station Ertiga cab, Pune railway station sedan cab, Pune station to Pune Airport cab, Pune railway station to airport taxi, Pune station hotel transfer cab, railway station transfer Pune, Pune railway station family cab, Pune railway station AC cab, Pune railway station to Pimpri Chinchwad cab, Pimpri Chinchwad to Pune railway station cab"
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
                            <img src='/images/keywords/120.jpg' alt='img' className='img-fluid' />
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

export default Punerailwaystation;