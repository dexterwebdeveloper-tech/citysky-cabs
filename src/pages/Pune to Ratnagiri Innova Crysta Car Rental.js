import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Punetoratnagiriinnova() {



const cardData = {
keyword: "Pune to Ratnagiri Innova Crysta Car Rental",
headingDescription: "Pune to Ratnagiri Innova Crysta Car Rental is a comfortable private travel option for families, groups, tourists, and business travelers planning a long-distance journey to the Konkan coast. Citysky Cabs provides spacious Innova Crysta vehicles with air conditioning, comfortable seating, ample luggage space, and professional driver support for one-way, round-trip, sightseeing, beach trips, weekend travel, and family tours from Pune to Ratnagiri.",


topPlaces: [
    {
        title: "Ratnagiri",
        description: "Ratnagiri is a scenic Konkan destination known for its coastline, historic attractions, local culture, and natural surroundings. A private Innova Crysta makes it convenient for travelers arriving from Pune to reach their hotel, explore the city, and continue toward nearby beaches and sightseeing locations."
    },
    {
        title: "Ganpatipule",
        description: "Ganpatipule is a popular coastal destination near Ratnagiri, known for its beautiful beach and renowned Ganpatipule Temple. Families and tourist groups can comfortably include this destination in their Konkan itinerary while traveling in a spacious Innova Crysta with luggage."
    },
    {
        title: "Ganpatipule Beach",
        description: "Ganpatipule Beach offers a relaxing seaside experience and is one of the prominent attractions around Ratnagiri. A private cab provides convenient access for families and groups carrying beach essentials while allowing travelers to combine the beach with nearby temples and sightseeing spots."
    },
    {
        title: "Ratnagiri Fort",
        description: "Ratnagiri Fort is an important historical attraction overlooking the Arabian Sea and offers scenic surroundings along with a glimpse into the region's history. Travelers can conveniently visit the fort as part of a Ratnagiri sightseeing itinerary using a comfortable private Innova Crysta."
    },
    {
        title: "Thibaw Palace",
        description: "Thibaw Palace is a notable historical landmark in Ratnagiri with architectural and cultural significance. Visitors traveling from Pune can include the palace in their local sightseeing plans and conveniently continue to other attractions, markets, beaches, and accommodation areas."
    },
    {
        title: "Bhatye Beach",
        description: "Bhatye Beach is a scenic Ratnagiri coastline destination suitable for travelers looking for a peaceful beach experience. Families and groups can reach the beach comfortably in a private Innova Crysta and carry their travel bags and personal belongings without depending on shared transportation."
    },
    {
        title: "Jaigad Fort",
        description: "Jaigad Fort is a historic coastal fortification located near Ratnagiri and offers views of the surrounding landscape and sea. It can be included in a longer Konkan sightseeing itinerary, with private cab transportation providing flexibility for travelers visiting multiple destinations."
    },
    {
        title: "Aare Ware Beach",
        description: "Aare Ware Beach is known for its scenic coastal setting and winding Konkan roads. The destination is suitable for travelers who want to explore Ratnagiri's natural beauty, and a private Innova Crysta provides comfortable transportation for families and groups visiting the area."
    },
    {
        title: "Pawas",
        description: "Pawas is a peaceful destination near Ratnagiri known for the Swami Swaroopanand Ashram and its serene surroundings. Travelers can conveniently include Pawas in a family or spiritual tour while using a private vehicle for transfers between Ratnagiri and other Konkan attractions."
    },
    {
        title: "Guhagar",
        description: "Guhagar is a scenic Konkan coastal destination known for its long beach, peaceful surroundings, and traditional coastal atmosphere. Travelers planning an extended Ratnagiri-region trip can use an Innova Crysta for comfortable transportation while carrying luggage and visiting multiple destinations."
    }
],

services: [
    {
        name: "Pune to Ratnagiri Innova Crysta Cab",
        description: "Pune to Ratnagiri Innova Crysta Cab provides a spacious private vehicle for the long-distance journey toward the Konkan coast. Comfortable seating, air conditioning, luggage space, and professional driver support make the service suitable for families, groups, tourists, and business travelers."
    },
    {
        name: "Pune to Ratnagiri Innova Crysta Taxi",
        description: "Pune to Ratnagiri Innova Crysta Taxi offers dedicated transportation for passengers traveling from Pune to Ratnagiri. The comfortable seven-seater vehicle is suitable for extended road journeys and provides convenient space for passengers, luggage, and personal travel belongings."
    },
    {
        name: "Pune Ratnagiri Innova Crysta Booking",
        description: "Pune Ratnagiri Innova Crysta Booking allows travelers to arrange a spacious private cab according to their travel schedule. The service is suitable for family holidays, beach trips, weekend journeys, sightseeing plans, group travel, and business visits to Ratnagiri."
    },
    {
        name: "Pune Ratnagiri Innova Crysta Rental",
        description: "Pune Ratnagiri Innova Crysta Rental provides a comfortable chauffeur-driven vehicle for travelers planning a Ratnagiri journey. Its spacious cabin and luggage capacity make it convenient for families and groups traveling with bags for longer Konkan vacations."
    },
    {
        name: "Pune to Ratnagiri Innova Crysta on Rent",
        description: "Pune to Ratnagiri Innova Crysta on Rent gives passengers access to a private and spacious vehicle for the complete road journey. Travelers can sit comfortably together while the professional driver handles the driving, allowing passengers to focus on their trip."
    },
    {
        name: "Pune to Ratnagiri Innova Crysta Hire",
        description: "Pune to Ratnagiri Innova Crysta Hire is suitable for travelers looking for a dedicated vehicle with driver assistance. The Innova Crysta offers comfortable seating, air conditioning, and useful luggage capacity for family tours, beach holidays, and group journeys."
    },
    {
        name: "Pune Ratnagiri AC Innova Crysta Cab",
        description: "Pune Ratnagiri AC Innova Crysta Cab provides a climate-controlled cabin for the long road journey between Pune and Ratnagiri. Comfortable seating and air conditioning create a convenient travel environment for passengers spending several hours on the Konkan route."
    },
    {
        name: "Pune Ratnagiri Luxury Innova Crysta Cab",
        description: "Pune Ratnagiri Luxury Innova Crysta Cab offers a spacious and premium-feel private travel experience for the journey to Ratnagiri. The comfortable cabin, air conditioning, generous seating space, and chauffeur-driven arrangement are useful for families, corporate travelers, and special trips."
    },
    {
        name: "Pune to Ratnagiri 7 Seater Innova Crysta",
        description: "Pune to Ratnagiri 7 Seater Innova Crysta is a practical option for families and small groups who want to travel together in one vehicle. The seven-seater configuration provides comfortable passenger space along with room for luggage required for a Konkan holiday."
    },
    {
        name: "Pune Ratnagiri One Way Innova Crysta Cab",
        description: "Pune Ratnagiri One Way Innova Crysta Cab is convenient for travelers who only require transportation from Pune to Ratnagiri. It can suit passengers with independent return arrangements, relocation requirements, family visits, business travel, and one-direction holiday plans."
    },
    {
        name: "Pune Ratnagiri Round Trip Innova Crysta Cab",
        description: "Pune Ratnagiri Round Trip Innova Crysta Cab is suitable for travelers planning to return to Pune after completing their Ratnagiri vacation or sightseeing itinerary. A private vehicle provides convenient transportation for beach trips, family tours, weekend journeys, and extended Konkan stays."
    },
    {
        name: "Pune Ratnagiri Outstation Innova Crysta",
        description: "Pune Ratnagiri Outstation Innova Crysta provides spacious private transportation for the long-distance Pune to Ratnagiri route. The vehicle is suitable for families, tourist groups, friends, and corporate passengers who require comfortable seating and sufficient luggage capacity."
    },
    {
        name: "Pune Ratnagiri Family Trip Cab",
        description: "Pune Ratnagiri Family Trip Cab offers convenient private transportation for families planning a Konkan vacation. The Innova Crysta allows family members to travel together with luggage while enjoying a spacious cabin and professional driver support throughout the journey."
    },
    {
        name: "Pune Ratnagiri Group Travel Cab",
        description: "Pune Ratnagiri Group Travel Cab is designed for friends, relatives, colleagues, and small groups traveling together. A spacious Innova Crysta keeps passengers together in one vehicle and provides useful luggage capacity for longer family, beach, or sightseeing trips."
    },
    {
        name: "Affordable Pune Ratnagiri Innova Crysta Cab",
        description: "Affordable Pune Ratnagiri Innova Crysta Cab provides a practical private travel option for passengers planning a comfortable journey to Ratnagiri. Families and groups can travel together in a spacious vehicle while receiving chauffeur-driven transportation for the long-distance route."
    },
    {
        name: "Pune Ratnagiri Beach Trip Innova Crysta",
        description: "Pune Ratnagiri Beach Trip Innova Crysta is suitable for travelers planning to explore beaches around Ratnagiri and the Konkan coast. The spacious vehicle provides comfortable seating and room for beach essentials, travel bags, and personal belongings during the journey."
    },
    {
        name: "Pune Ratnagiri Sightseeing Cab",
        description: "Pune Ratnagiri Sightseeing Cab provides private transportation for travelers visiting beaches, forts, temples, palaces, viewpoints, and other attractions around Ratnagiri. Passengers can organize multiple sightseeing stops while using one comfortable vehicle for their local travel."
    },
    {
        name: "Pune Ratnagiri Tourist Cab",
        description: "Pune Ratnagiri Tourist Cab is a convenient transportation option for visitors exploring the Konkan region. Families, couples, friends, and tourist groups can use a private Innova Crysta to travel between Ratnagiri hotels, beaches, historical attractions, temples, and nearby destinations."
    },
    {
        name: "Pune Ratnagiri Innova Crysta Taxi Service",
        description: "Pune Ratnagiri Innova Crysta Taxi Service provides private chauffeur-driven transportation for travelers heading toward Ratnagiri. It can support family vacations, beach trips, sightseeing plans, weekend travel, group journeys, and professional visits requiring a comfortable long-distance vehicle."
    },
    {
        name: "Pune Ratnagiri Innova Crysta Cab Near Me",
        description: "Pune Ratnagiri Innova Crysta Cab Near Me helps travelers looking for a convenient private vehicle for their Ratnagiri journey. A pre-arranged Innova Crysta can be selected according to the travel date, pickup location, passenger requirements, luggage, and preferred journey type."
    },
    {
        name: "Pune Ratnagiri Private Cab",
        description: "Pune Ratnagiri Private Cab provides dedicated transportation without unrelated passengers sharing the vehicle. This arrangement is useful for families, friends, corporate travelers, and tourists who prefer privacy, flexible travel planning, and comfortable long-distance transportation."
    },
    {
        name: "Pune Ratnagiri Innova Crysta Cab Hire",
        description: "Pune Ratnagiri Innova Crysta Cab Hire provides a spacious vehicle with professional driver support for travelers planning a Ratnagiri trip. The service can accommodate family holidays, beach visits, sightseeing itineraries, weekend travel, and group transportation."
    },
    {
        name: "Pune Ratnagiri Rental Car with Driver",
        description: "Pune Ratnagiri Rental Car with Driver offers a chauffeur-driven transportation solution for passengers who prefer not to manage the long-distance drive themselves. The spacious Innova Crysta is suitable for families, tourists, groups, and professionals carrying luggage."
    },
    {
        name: "Pune Ratnagiri Family Tour Cab",
        description: "Pune Ratnagiri Family Tour Cab provides comfortable transportation for families planning to explore Ratnagiri and nearby Konkan attractions. Passengers can travel together in a spacious Innova Crysta while carrying luggage and visiting beaches, temples, forts, and other destinations."
    },
    {
        name: "Pune Ratnagiri Weekend Trip Innova Crysta",
        description: "Pune Ratnagiri Weekend Trip Innova Crysta is suitable for travelers planning a short Konkan getaway from Pune. The spacious vehicle provides comfortable seating and luggage capacity for a weekend itinerary covering Ratnagiri beaches, attractions, temples, and nearby coastal destinations."
    }
],

tableData: [
    ["Pune to Ratnagiri Innova Crysta Cab"],
    ["Pune to Ratnagiri Innova Crysta Taxi"],
    ["Pune Ratnagiri Innova Crysta Booking"],
    ["Pune Ratnagiri Innova Crysta Rental"],
    ["Pune to Ratnagiri Innova Crysta on Rent"],
    ["Pune to Ratnagiri Innova Crysta Hire"],
    ["Pune Ratnagiri AC Innova Crysta Cab"],
    ["Pune Ratnagiri Luxury Innova Crysta Cab"],
    ["Pune to Ratnagiri 7 Seater Innova Crysta"],
    ["Pune Ratnagiri One Way Innova Crysta Cab"],
    ["Pune Ratnagiri Round Trip Innova Crysta Cab"],
    ["Pune Ratnagiri Outstation Innova Crysta"],
    ["Pune Ratnagiri Family Trip Cab"],
    ["Pune Ratnagiri Group Travel Cab"],
    ["Affordable Pune Ratnagiri Innova Crysta Cab"],
    ["Pune Ratnagiri Beach Trip Innova Crysta"],
    ["Pune Ratnagiri Sightseeing Cab"],
    ["Pune Ratnagiri Tourist Cab"],
    ["Pune Ratnagiri Innova Crysta Taxi Service"],
    ["Pune Ratnagiri Innova Crysta Cab Near Me"],
    ["Pune Ratnagiri Private Cab"],
    ["Pune Ratnagiri Innova Crysta Cab Hire"],
    ["Pune Ratnagiri Rental Car with Driver"],
    ["Pune Ratnagiri Family Tour Cab"],
    ["Pune Ratnagiri Weekend Trip Innova Crysta"]
],

whychoose: [
    {
        WhyChooseheading: "Spacious Travel for the Konkan Route",
        WhyChoosedescription: "The Innova Crysta provides a comfortable cabin for the extended Pune to Ratnagiri road journey. Passengers get useful seating space, air conditioning, and luggage capacity, making the vehicle suitable for families and groups traveling toward the Konkan coast."
    },
    {
        WhyChooseheading: "Convenient Family Transportation",
        WhyChoosedescription: "Families can stay together in one private vehicle while carrying holiday luggage and personal belongings. The seven-seater configuration is especially useful for family tours where comfortable seating and convenient door-to-door transportation are important."
    },
    {
        WhyChooseheading: "Ideal for Beach Holidays",
        WhyChoosedescription: "Ratnagiri and nearby Konkan destinations offer several beaches and coastal attractions that can be included in a holiday itinerary. A private cab gives travelers convenient transportation for reaching different beach locations without depending on shared travel arrangements."
    },
    {
        WhyChooseheading: "Professional Driver Assistance",
        WhyChoosedescription: "With chauffeur-driven transportation, passengers can relax during the long journey instead of managing the drive themselves. This is convenient for families, tourist groups, senior travelers, and professionals who want to focus on their trip."
    },
    {
        WhyChooseheading: "Flexible Journey Options",
        WhyChoosedescription: "Travel plans can differ depending on the purpose of the trip, so one-way and round-trip options provide useful flexibility. These arrangements can accommodate weekend getaways, family vacations, sightseeing tours, business visits, and longer Konkan stays."
    },
    {
        WhyChooseheading: "Comfortable Group Travel",
        WhyChoosedescription: "Friends, relatives, colleagues, and small tourist groups can travel together in one spacious Innova Crysta. Keeping the group in one vehicle makes it easier to coordinate luggage, departure schedules, sightseeing plans, and arrival at the selected Ratnagiri destination."
    },
    {
        WhyChooseheading: "Useful for Ratnagiri Sightseeing",
        WhyChoosedescription: "A private vehicle makes it convenient to combine Ratnagiri beaches, forts, temples, historical landmarks, and nearby coastal attractions in one itinerary. Travelers can plan multiple stops while retaining the comfort of a dedicated vehicle and driver."
    },
    {
        WhyChooseheading: "Suitable for Weekend and Long Trips",
        WhyChoosedescription: "Whether the plan is a quick weekend escape or a longer family holiday, the Innova Crysta provides a practical travel setup for the Pune to Ratnagiri route. Spacious seating and luggage capacity support both short and extended Konkan itineraries."
    }
]


};




















const faqData = [
{
question: "Can I rent an Innova Crysta from Pune to Ratnagiri?",
answer: "An Innova Crysta can be arranged for a road journey from Pune to Ratnagiri for families, friends, business travellers, and small groups. Citysky Cabs can coordinate the rental according to your Pune pickup point, Ratnagiri destination, travel date, passenger count, luggage requirements, and preferred departure time."
},
{
question: "Is Innova Crysta a suitable car for travelling from Pune to Ratnagiri?",
answer: "The Innova Crysta can be a practical option for the longer journey between Pune and Ratnagiri, particularly when several passengers want to travel together. Its spacious seating arrangement can also be useful for groups carrying luggage for a family visit, holiday, or multi-day trip."
},
{
question: "Can I rent an Innova Crysta one-way from Pune to Ratnagiri?",
answer: "One-way Innova Crysta rental can be discussed for travellers who only require transportation from Pune to Ratnagiri. While making the enquiry, provide the exact pickup location, destination, travel date, passenger count, luggage details, and preferred departure timing."
},
{
question: "Is round-trip Innova Crysta rental available from Pune to Ratnagiri?",
answer: "Passengers planning to return to Pune can enquire about a round-trip Innova Crysta arrangement. This can be useful for family visits, Konkan holidays, religious travel, functions, or personal trips where the return date and itinerary are known in advance."
},
{
question: "Can families hire an Innova Crysta for a Ratnagiri trip?",
answer: "Families can rent an Innova Crysta for holidays, visiting relatives, family occasions, and sightseeing around Ratnagiri. Travelling together in one vehicle can simplify group coordination and provide a convenient option when passengers are carrying suitcases and other travel belongings."
},
{
question: "Can I use an Innova Crysta for Ratnagiri sightseeing?",
answer: "Travellers can discuss sightseeing requirements while planning their Pune to Ratnagiri car rental. Depending on the itinerary, places such as Ratnadurg Fort, Ganpatipule, Thiba Palace, beaches, temples, and other nearby destinations can be included in the group's planned travel schedule."
},
{
question: "Can I book an Innova Crysta from Pune to Ratnagiri for a family function?",
answer: "An Innova Crysta can be arranged for weddings, religious functions, family gatherings, and other occasions in Ratnagiri. A dedicated vehicle can help relatives travel together from Pune while keeping the transportation schedule connected with the event timing."
},
{
question: "Can corporate travellers rent an Innova Crysta from Pune to Ratnagiri?",
answer: "Business travellers can enquire about an Innova Crysta for meetings, site visits, professional appointments, conferences, and other work-related journeys in Ratnagiri. The pickup and travel schedule can be coordinated according to the passenger's work commitments and destination requirements."
},
{
question: "Can I travel with luggage in an Innova Crysta from Pune to Ratnagiri?",
answer: "Travellers can share their approximate luggage details when requesting the car rental. This is especially helpful for families and groups travelling for several days, carrying multiple suitcases, or combining the Ratnagiri journey with nearby sightseeing and other planned stops."
},
{
question: "How can I book Pune to Ratnagiri Innova Crysta Car Rental with Citysky Cabs?",
answer: "To arrange the Innova Crysta rental, provide your Pune pickup location, Ratnagiri destination, journey date, passenger count, luggage details, preferred departure time, and whether you require one-way or round-trip travel. Citysky Cabs can coordinate the vehicle arrangement around your complete itinerary."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Vijay Sawant",
feedback:
"We were travelling from Pune to Ratnagiri with family for a few days and needed enough room for passengers and luggage. An Innova Crysta was a suitable option for our group. Citysky Cabs took the trip details in advance and the rental arrangement was convenient for the journey we had planned.",
rating: 5
},
{
id: 2,
name: "Miss. Manasi Kamat",
feedback:
"I arranged an Innova Crysta from Pune to Ratnagiri for a family visit and planned to cover a few nearby places during the trip. Having one vehicle throughout the journey made the itinerary easier to manage. Citysky Cabs handled the booking communication clearly and helped us organize the transportation around our schedule.",
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
  "name": "Pune to Ratnagiri Innova Crysta Car Rental",
  "image": "https://www.cityskycab.in/assets/images/pune-to-ratnagiri-innova-crysta-car-rental.webp",
  "description": "Pune to Ratnagiri Innova Crysta Car Rental from Citysky Cabs is a practical private travel option for families, groups and business travellers planning a comfortable journey from Pune to Ratnagiri. The service includes Pune to Ratnagiri Innova Crysta Cab, taxi, booking, rental, on-rent and hire options, with AC seating and generous luggage space for a longer road trip. The spacious Innova Crysta is suitable for family visits, coastal holidays, business travel, events and personal journeys where passengers prefer a dedicated vehicle instead of shared transportation. Customers can arrange one-way or return travel according to their itinerary, with vehicle selection and pickup details planned around the required travel schedule.",
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
    "url": "https://www.cityskycab.in/pune-to-ratnagiri-innova-crysta-car-rental"
  }
};







    return (
        <div>


<Helmet>
  <title>
    Pune to Ratnagiri Innova Crysta Car Rental | Pune Ratnagiri AC Crysta Cab for Coastal Trips | +91 8554819191
  </title>

  <meta
    name="description"
    content="Hire an Innova Crysta from Pune to Ratnagiri with Citysky Cabs. Enjoy spacious AC seating, luggage space and private travel options for family trips, holidays, business visits and return journeys."
  />

  <meta
    name="keywords"
    content="Pune to Ratnagiri Innova Crysta Cab, Pune to Ratnagiri Innova Crysta Taxi, Pune Ratnagiri Innova Crysta Booking, Pune Ratnagiri Innova Crysta Rental, Pune to Ratnagiri Innova Crysta on Rent, Pune to Ratnagiri Innova Crysta Hire, Pune Ratnagiri AC Innova Crysta Cab, Pune Ratnagiri Luxury Innova Crysta Cab, Pune to Ratnagiri 7 Seater Innova Crysta, Pune Ratnagiri One Way Innova Crysta Cab, Pune Ratnagiri Round Trip Innova Crysta Cab, Pune to Ratnagiri Innova Crysta Car Rental, Pune Ratnagiri Innova Crysta Cab Service, Pune Ratnagiri Innova Crysta Taxi Service, Pune Ratnagiri Outstation Cab, Pune Ratnagiri Family Taxi, Pune Ratnagiri Holiday Cab, Pune Ratnagiri Premium AC Cab, Pune Ratnagiri Long Distance Innova Crysta"
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
                            <img src='/images/keyword/43.jpg' alt='img' className='img-fluid' />
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

export default Punetoratnagiriinnova;