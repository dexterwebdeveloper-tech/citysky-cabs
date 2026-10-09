import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Punetogoacab() {


const cardData = {
keyword: "Pune to Goa Cabs",
headingDescription: "Pune to Goa Cabs offer a convenient private road travel option for tourists, families, couples, business travelers, and groups planning a journey from Pune to Goa. A dedicated cab provides direct pickup from Pune and drop at the preferred destination in Goa, making the trip easier when traveling with luggage or multiple passengers. Citysky Cabs can arrange suitable options including Innova, Innova Crysta, sedan, SUV, and other comfortable vehicles according to the group size and travel requirements. One-way, round-trip, rental, and package-based travel arrangements can also be planned according to the itinerary.",
topPlaces: [
{
title: "Panjim",
description: "Panjim is the capital city of Goa and an important destination for travelers visiting the state for holidays, business, and cultural experiences. A private Pune to Goa cab can provide direct transportation to hotels, residences, offices, and tourist areas around Panjim without requiring multiple local transfers."
},
{
title: "Calangute Beach",
description: "Calangute Beach is one of Goa's popular coastal destinations and attracts travelers throughout the year. Visitors traveling from Pune can use a private cab for direct transportation to Calangute, making it convenient to carry luggage and reach hotels or resorts located near the beach."
},
{
title: "Baga Beach",
description: "Baga Beach is a well-known North Goa destination surrounded by hotels, restaurants, cafes, and entertainment areas. A dedicated Pune to Goa taxi can drop passengers directly near their accommodation, making the journey practical for couples, families, and groups visiting Baga."
},
{
title: "Anjuna",
description: "Anjuna is known for its beachside atmosphere, markets, cafes, and popular tourist attractions. Travelers coming from Pune can arrange a private cab to Anjuna according to their holiday schedule, with direct transportation helping avoid the inconvenience of changing vehicles after the long road journey."
},
{
title: "Vagator",
description: "Vagator is a popular coastal destination in North Goa with beaches, viewpoints, resorts, and nearby attractions. A private cab from Pune provides convenient long-distance transportation to the area and can drop passengers at their selected hotel, villa, resort, or other destination."
},
{
title: "Candolim",
description: "Candolim is a popular Goa holiday destination with beaches, resorts, restaurants, and easy access to nearby North Goa attractions. Passengers traveling from Pune can arrange a dedicated cab for direct transportation to Candolim, particularly when traveling with family or substantial holiday luggage."
},
{
title: "Morjim",
description: "Morjim is a quieter coastal destination in North Goa known for its beachside resorts and relaxed surroundings. A private Pune to Goa cab allows travelers to reach Morjim directly from Pune and continue comfortably to their chosen hotel, resort, or vacation property."
},
{
title: "Madgaon",
description: "Madgaon is an important commercial and transportation hub in South Goa and serves as a convenient base for exploring nearby destinations. A private cab from Pune can provide direct transportation to Madgaon for tourists, families, professionals, and travelers connecting to other parts of South Goa."
},
{
title: "Colva Beach",
description: "Colva Beach is one of South Goa's established tourist destinations, surrounded by hotels, restaurants, and holiday accommodations. Travelers from Pune can arrange a direct cab to Colva, making it easier to reach their stay without coordinating additional transportation after arriving in Goa."
},
{
title: "Goa Airport",
description: "Goa Airport is an important arrival and departure point for travelers visiting the state. A Pune to Goa private cab can be useful for passengers who need a direct road journey to the airport as part of a larger travel plan, business trip, or onward flight connection."
}
],
services: [
{
name: "Pune to goa cab service",
description: "Pune to Goa cab service provides direct private transportation for travelers heading from Pune toward Goa. The journey can be arranged for families, couples, tourists, corporate travelers, and groups with suitable pickup and drop locations according to the travel itinerary."
},
{
name: "Pune to goa cab",
description: "Pune to Goa cab provides a convenient road travel option for passengers who prefer a dedicated vehicle for their Goa journey. It is suitable for holiday trips, family vacations, business travel, weekend journeys, and group transportation with luggage."
},
{
name: "Pune to goa car rental",
description: "Pune to Goa car rental offers a private vehicle option for travelers planning an intercity journey toward Goa. Vehicle selection can be based on passenger count, luggage, comfort preferences, travel duration, and whether the requirement is for one-way or return transportation."
},
{
name: "Pune to goa taxi",
description: "Pune to Goa taxi service provides private door-to-door transportation for passengers traveling toward Goa. It can be arranged from residential areas, offices, hotels, airports, or other convenient Pune locations and can continue directly to the preferred Goa destination."
},
{
name: "Pune to goa taxi fare",
description: "Pune to Goa taxi fare depends on factors such as vehicle category, trip type, pickup location, travel date, passenger count, and final destination. Travelers can provide their complete journey details to understand the applicable fare for their planned trip."
},
{
name: "Pune to goa cab package",
description: "Pune to Goa cab package can be planned according to the traveler's itinerary, vehicle requirement, duration, and trip type. Package-based arrangements can be considered for holiday groups, family trips, extended stays, and journeys requiring specific transportation planning."
},
{
name: "Pune to goa cab fare",
description: "Pune to Goa cab fare varies according to vehicle selection, travel arrangement, pickup point, and destination. Passengers can discuss the complete itinerary, number of travelers, and preferred vehicle before finalizing a suitable private cab arrangement."
},
{
name: "Best cab service from pune to goa",
description: "Best cab service from Pune to Goa is a commonly searched phrase by travelers looking for convenient private road transportation. Citysky Cabs supports intercity journeys with suitable vehicle options, planned pickups, direct drops, and arrangements based on passenger and luggage requirements."
},
{
name: "Cab service from pune to goa",
description: "Cab service from Pune to Goa provides direct transportation for travelers beginning their Goa holiday from Pune. The service can accommodate individuals, couples, families, and larger groups with vehicle choices based on the number of passengers and luggage."
},
{
name: "Car hire pune to goa",
description: "Car hire Pune to Goa provides a dedicated vehicle for passengers planning a long-distance journey toward Goa. Travelers can choose a suitable vehicle category according to their group size, comfort needs, luggage, and one-way or return travel requirements."
},
{
name: "car rental pune to goa",
description: "Car rental Pune to Goa allows travelers to organize private transportation for their Goa trip without depending on shared travel options. The arrangement can be customized around the departure schedule, pickup location, vehicle category, and final destination."
},
{
name: "goa pune cab service",
description: "Goa Pune cab service supports transportation between Goa and Pune for travelers who require private intercity connectivity. It can be useful for return journeys, business travel, family visits, airport transfers, and passengers planning flexible road transportation."
},
{
name: "goa to pune car rental",
description: "Goa to Pune car rental provides a private transportation option for passengers traveling back from Goa toward Pune. Travelers can select an appropriate vehicle according to their group size, luggage, comfort requirements, and preferred journey arrangement."
},
{
name: "One way cab from pune to goa",
description: "One way cab from Pune to Goa is suitable for travelers who need direct transportation to Goa without retaining the vehicle for a return journey. It can be useful for holiday trips, relocation, business travel, family visits, and passengers with separate return plans."
},
{
name: "Pune to goa cab rental",
description: "Pune to Goa cab rental offers a private vehicle arrangement for travelers planning a journey to Goa. The rental can be discussed according to travel duration, passenger count, vehicle category, itinerary, and whether the requirement is one way or round trip."
},
{
name: "Pune to goa cab cost",
description: "Pune to Goa cab cost depends on the selected vehicle, travel date, trip type, pickup point, passenger requirements, and destination in Goa. Travelers can share their complete journey details to receive relevant information about the expected transportation cost."
},
{
name: "Pune to goa cab service fare",
description: "Pune to Goa cab service fare is influenced by vehicle type, travel arrangement, passenger count, pickup location, and final Goa destination. Discussing the itinerary in advance helps travelers understand the applicable fare for their selected private transportation."
},
{
name: "pune to goa cab service rates",
description: "Pune to Goa cab service rates can vary according to the vehicle category, trip duration, route requirements, and passenger count. Citysky Cabs can discuss the relevant rate after understanding whether the traveler needs one-way, round-trip, rental, or package-based transportation."
},
{
name: "Pune to goa car booking",
description: "Pune to Goa car booking allows passengers to arrange their private vehicle before the planned journey. Advance booking can be useful for weekend trips, family vacations, group travel, airport connections, and travel dates where passengers prefer an organized transportation plan."
},
{
name: "Pune to goa car hire",
description: "Pune to Goa car hire provides a dedicated vehicle for passengers traveling from Pune toward Goa. The service can be planned according to the preferred pickup point, vehicle category, passenger count, luggage, and overall travel schedule."
},
{
name: "pune to goa car rental price",
description: "Pune to Goa car rental price depends on the vehicle selected, trip type, travel duration, pickup location, and passenger requirements. Travelers can provide their complete itinerary and preferred car category to discuss the relevant rental pricing."
},
{
name: "Pune to goa innova rental",
description: "Pune to Goa Innova rental is suitable for families and groups who want a spacious private vehicle for the long-distance journey. The vehicle provides additional room for passengers and luggage and can be considered for comfortable holiday travel."
},
{
name: "Pune to goa one way cab",
description: "Pune to Goa one way cab provides direct private transportation for passengers traveling to Goa without requiring the same vehicle to remain for the return trip. It is suitable for vacation travel, relocation, business visits, and other one-direction journeys."
},
{
name: "Pune to goa one way taxi",
description: "Pune to Goa one way taxi offers a convenient private travel option for passengers who need direct transportation to Goa. Travelers can arrange pickup from Pune and select their preferred destination in Goa according to their itinerary."
},
{
name: "Pune to goa private cab",
description: "Pune to Goa private cab provides a dedicated vehicle exclusively for the traveling passengers. It is suitable for families, couples, friends, corporate groups, and tourists who prefer direct transportation with their luggage and flexible travel arrangements."
},
{
name: "Pune to goa taxi fare one way",
description: "Pune to Goa taxi fare one way depends on the selected vehicle, pickup location, travel date, and final destination. Passengers can share their complete one-way itinerary and vehicle preference to discuss the applicable private cab fare."
},
{
name: "pune to goa taxi packages",
description: "Pune to Goa taxi packages can be planned for travelers who want transportation arranged around their holiday itinerary. Packages may be considered for one-way journeys, return trips, multi-day travel plans, family vacations, and group requirements depending on the selected arrangement."
},
{
name: "pune to goa taxi service",
description: "Pune to Goa taxi service provides direct road connectivity between Pune and Goa with private vehicle options. It can be arranged for tourists, families, couples, corporate travelers, and groups according to their preferred travel date, pickup location, and destination."
},
{
name: "pune to goa innova crysta Cab",
description: "Pune to Goa Innova Crysta Cab is a spacious private travel option for families and groups seeking additional comfort during the long-distance journey. It provides a practical choice for passengers carrying luggage and traveling together toward their Goa destination."
}
],
tableData: [
["Pune to goa cab service"],
["Pune to goa cab"],
["Pune to goa car rental"],
["Pune to goa taxi"],
["Pune to goa taxi fare"],
["Pune to goa cab package"],
["Pune to goa cab fare"],
["Best cab service from pune to goa"],
["Cab service from pune to goa"],
["Car hire pune to goa"],
["car rental pune to goa"],
["goa pune cab service"],
["goa to pune car rental"],
["One way cab from pune to goa"],
["Pune to goa cab rental"],
["Pune to goa cab cost"],
["Pune to goa cab service fare"],
["pune to goa cab service rates"],
["Pune to goa car booking"],
["Pune to goa car hire"],
["pune to goa car rental price"],
["Pune to goa innova rental"],
["Pune to goa one way cab"],
["Pune to goa one way taxi"],
["Pune to goa private cab"],
["Pune to goa taxi fare one way"],
["pune to goa taxi packages"],
["pune to goa taxi service"],
["pune to goa innova crysta Cab"]
],
whychoose: [
{
WhyChooseheading: "Direct Pune to Goa Travel",
WhyChoosedescription: "A private cab provides direct road transportation from Pune to the preferred destination in Goa without requiring passengers to change vehicles. This makes the journey convenient for tourists, families, couples, and groups carrying holiday luggage."
},
{
WhyChooseheading: "Flexible One-Way Options",
WhyChoosedescription: "One-way cab arrangements are useful for travelers who only need transportation from Pune to Goa and have separate plans for their return journey. This option can suit holiday trips, relocation, business travel, and passengers with fixed onward arrangements."
},
{
WhyChooseheading: "Spacious Vehicles for Families",
WhyChoosedescription: "Families and groups can select vehicles according to their seating and luggage requirements. Options such as Innova and Innova Crysta provide additional space and can be considered when several passengers are traveling together for a Goa vacation."
},
{
WhyChooseheading: "Pickup From Pune Locations",
WhyChoosedescription: "Private cab travel can be planned from convenient Pune locations according to the passenger's requirement. This helps travelers begin the long-distance journey directly from their home, office, hotel, airport, or another suitable pickup point."
},
{
WhyChooseheading: "Multiple Goa Drop Choices",
WhyChoosedescription: "Travelers can plan their final destination around different Goa locations such as Panjim, Calangute, Baga, Anjuna, Vagator, Candolim, Madgaon, Colva, and nearby areas. Direct drop arrangements reduce the need for additional local transfers after reaching Goa."
},
{
WhyChooseheading: "Suitable for Group Holidays",
WhyChoosedescription: "Private transportation is practical for families, friends, and organized groups traveling together. Vehicle selection can be based on the number of passengers, luggage volume, desired seating space, and overall comfort requirements for the journey."
},
{
WhyChooseheading: "Advance Travel Booking",
WhyChoosedescription: "Advance cab booking helps travelers organize their transportation before leaving Pune. This can be especially useful during weekends, holidays, vacation periods, family trips, and other journeys where passengers prefer to have their vehicle planned ahead of time."
},
{
WhyChooseheading: "Customized Travel Arrangements",
WhyChoosedescription: "Different travelers have different transportation requirements, so the cab arrangement can be discussed around trip type, vehicle category, passenger count, pickup location, Goa destination, and return requirements. This provides flexibility for both simple transfers and planned holiday journeys."
}
]
};







const faqData = [
{
question: "How can I arrange Pune to Goa Cabs for a road trip?",
answer: "Travellers planning a road journey from Pune to Goa can enquire about a private cab with Citysky Cabs. Share your Pune pickup point, Goa destination, travel date, passenger count, luggage requirements, and preferred departure time so the transportation can be organized around your holiday plans."
},
{
question: "Can I get a private cab from Pune to Goa for my family?",
answer: "Families travelling to Goa can choose private cab transportation when they prefer a dedicated vehicle for the entire group. This can be convenient for parents travelling with children, families carrying holiday luggage, and travellers who want their journey to follow a planned schedule."
},
{
question: "Is one-way Pune to Goa cab service available?",
answer: "Passengers who need transportation only from Pune to Goa can enquire about a one-way cab. Provide the pickup location, Goa drop-off point, travel date, number of passengers, luggage details, and preferred departure timing when discussing the trip with Citysky Cabs."
},
{
question: "Can I book a return cab from Pune to Goa and back?",
answer: "Travellers planning to return to Pune after their Goa vacation can enquire about round-trip transportation. The booking can be discussed around your complete holiday schedule, including the travel dates, Goa pickup or drop locations, passenger count, luggage, and expected return timing."
},
{
question: "Can friends hire a cab together for a Pune to Goa trip?",
answer: "Groups of friends can consider a private cab for a Goa road trip when they want to travel together and manage their own schedule. A dedicated vehicle can make it easier to coordinate luggage, departure times, planned breaks, and the group's overall travel itinerary."
},
{
question: "Can I book Pune to Goa Cabs for a long weekend holiday?",
answer: "A private cab can be arranged for travellers planning a short or long weekend in Goa. Citysky Cabs can coordinate the transportation based on your selected dates, passenger count, preferred departure time, luggage, and Goa destination."
},
{
question: "Can I travel to Goa from Pune with extra luggage?",
answer: "Travellers carrying suitcases, backpacks, beach gear, or other holiday belongings can mention their luggage requirements while enquiring about the cab. Sharing the passenger count and approximate luggage volume helps in planning a suitable transportation arrangement for the journey."
},
{
question: "Can I include stops along the Pune to Goa route?",
answer: "Passengers who want to make planned stops during the road trip can discuss their proposed itinerary with Citysky Cabs. Any additional destinations, sightseeing breaks, or route requirements should be shared in advance so the journey can be coordinated accordingly."
},
{
question: "Can senior citizens travel from Pune to Goa by private cab?",
answer: "Families travelling with elderly passengers can consider a private cab because the journey can be organized around their preferred departure time and travel needs. The group can also discuss luggage, planned breaks, and the Goa drop-off location while arranging the trip."
},
{
question: "How do I book Pune to Goa Cabs with Citysky Cabs?",
answer: "To enquire about Pune to Goa Cabs, provide your Pune pickup location, Goa destination, travel date, number of passengers, luggage details, preferred departure time, and one-way or round-trip requirement. Citysky Cabs can coordinate the cab service based on your planned road trip."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Vivek Pawar",
feedback:
"Six of us were planning a Goa holiday from Pune and wanted to travel together rather than arrange separate transportation. Citysky Cabs helped us organize a private cab after we shared our travel schedule and luggage details. The road journey was convenient, and keeping the whole group in one vehicle made the trip easier to manage.",
rating: 5
},
{
id: 2,
name: "Miss. Riya Bhosale",
feedback:
"My parents and I planned a Goa vacation and preferred a private cab from Pune because we had luggage and wanted a flexible travel schedule. Citysky Cabs arranged the cab according to the details we provided. The private journey was a convenient option for our family and made the start of the holiday less stressful.",
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
  "name": "Pune to Goa Cabs",
  "image": "https://www.cityskycab.in/assets/images/pune-to-goa-cabs.webp",
  "description": "Pune to Goa Cabs from Citysky Cabs are a convenient private travel option for families, couples, friends, corporate groups and travellers planning a comfortable road journey from Pune to Goa. The service covers Pune to Goa Cab Service, Cab, Car Rental, Taxi, Taxi Fare, Cab Package and Cab Fare requirements, with vehicle options suited to different passenger groups and luggage needs. Travellers can arrange pickup from homes, offices, hotels or other convenient Pune locations and travel directly to Goa. One-way and round-trip journeys can be planned according to the holiday itinerary, making the service suitable for beach vacations, family holidays, weekend trips, corporate travel and extended Goa stays. Spacious AC cars offer comfortable seating for the long-distance route, while private transportation allows passengers to reach Goa hotels, resorts, beaches and preferred destinations without relying on shared travel.",
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
    "url": "https://www.cityskycab.in/pune-to-goa-cabs"
  }
};





    return (
        <div>


<Helmet>
  <title>
    Pune to Goa Cabs | Goa Taxi Fare, Car Rental & Private Travel Service | +91 9272112191 
  </title>

  <meta
    name="description"
    content="Pune to Goa Cabs by Citysky Cabs for private one-way and round-trip travel. Choose comfortable taxis, car rental and cab packages for Goa holidays, family trips, weekend getaways and long-distance journeys."
  />

  <meta
    name="keywords"
    content="Pune to goa cab service, Pune to goa cab, Pune to goa car rental, Pune to goa taxi, Pune to goa taxi fare, Pune to goa cab package, Pune to goa cab fare, Best Pune to Goa cab service, Pune Goa private cab, Pune Goa one way cab, Pune Goa round trip cab, Pune Goa AC taxi, Pune Goa car hire, Pune Goa car rental service, Pune Goa taxi service, Pune Goa cab booking, Pune Goa outstation cab, Pune Goa intercity taxi, Pune Goa family cab, Pune Goa corporate cab, Pune Goa holiday cab, Pune Goa travel service, Pune Goa private taxi, Pune Goa cab price, Pune Goa taxi charges, Pune to Goa return cab, Pune to Goa long distance taxi, Pune Goa tour cab, Pune Goa vacation taxi"
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
                            <img src='/images/keyword/70.jpg' alt='img' className='img-fluid' />
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

export default Punetogoacab;