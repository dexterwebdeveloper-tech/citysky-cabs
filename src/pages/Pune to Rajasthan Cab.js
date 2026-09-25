import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Punetorajsthancab() {


const cardData = {
keyword: "Pune to Rajasthan cab",
headingDescription: "Citysky Cabs offers private cab services from Pune to Rajasthan for long-distance road trips, family holidays, pilgrimage journeys, desert tours, sightseeing, and city-to-city travel. Travelers can choose suitable vehicles such as sedans, Ertiga, Innova, Innova Crysta, SUVs, luxury cars, and other spacious options depending on the group size and luggage. Cab arrangements are available for destinations including Jaipur, Jodhpur, Udaipur, Jaisalmer, Bikaner, Ajmer, Pushkar, Khatu Shyam, Kota, Bhilwara, and other Rajasthan locations, with one-way and round-trip travel options for different itineraries.",
topPlaces: [
{
title: "Jaipur",
description: "Jaipur, the Pink City, is a major Rajasthan destination known for Amber Fort, City Palace, Hawa Mahal, Jantar Mantar, and its historic markets. A private cab from Pune makes the long-distance journey convenient for families, couples, groups, and travelers planning a Rajasthan sightseeing itinerary."
},
{
title: "Jodhpur",
description: "Jodhpur is famous for Mehrangarh Fort, blue-painted old-city neighborhoods, Jaswant Thada, and the vibrant culture of Marwar. Travelers from Pune can choose a dedicated cab for a comfortable road journey and combine Jodhpur with other Rajasthan destinations during a multi-city tour."
},
{
title: "Udaipur",
description: "Udaipur is known for its lakes, palaces, heritage architecture, and scenic surroundings. A Pune to Udaipur cab is useful for travelers planning a private Rajasthan holiday, allowing families and groups to carry luggage comfortably and follow an itinerary that includes nearby sightseeing attractions."
},
{
title: "Jaisalmer",
description: "Jaisalmer is a popular desert destination known for Jaisalmer Fort, sandstone architecture, Sam Sand Dunes, desert camps, and cultural experiences. Private cab travel from Pune can be arranged for travelers planning three-day, four-day, or extended Rajasthan tour itineraries."
},
{
title: "Bikaner",
description: "Bikaner offers a distinctive desert-region experience with Junagarh Fort, Karni Mata Temple at Deshnok, traditional markets, and Rajasthani cuisine. A dedicated Pune to Bikaner cab provides direct road transportation for families, groups, and travelers exploring the northern part of Rajasthan."
},
{
title: "Ajmer",
description: "Ajmer is an important pilgrimage and heritage destination, particularly known for Ajmer Sharif Dargah and its connection with nearby Pushkar. A private cab from Pune allows travelers to plan a direct journey and conveniently include Ajmer in a wider Rajasthan pilgrimage or sightseeing itinerary."
},
{
title: "Pushkar",
description: "Pushkar is renowned for the Brahma Temple, Pushkar Lake, ghats, and its distinctive spiritual and cultural atmosphere. Travelers can arrange a private Pune to Pushkar cab or taxi for direct transportation and combine Pushkar with Ajmer and other Rajasthan destinations."
},
{
title: "Khatu Shyam",
description: "Khatu Shyam is a prominent pilgrimage destination in Rajasthan visited by devotees throughout the year. A Pune to Khatu Shyam cab provides a private road travel option for families and groups, with the flexibility to plan the journey around darshan timings and additional religious destinations."
},
{
title: "Kota",
description: "Kota is an important city in southeastern Rajasthan, known for education, business activity, the Chambal River, and attractions such as Kota Garh and Seven Wonders Park. A private cab from Pune can support students, families, professionals, and travelers visiting the city for different purposes."
},
{
title: "Bhilwara",
description: "Bhilwara is a significant textile and industrial city in Rajasthan and also provides access to several regional heritage and religious destinations. Pune to Bhilwara cab services are useful for business travelers, families, and tourists who prefer direct private road transportation."
}
],
services: [
{
name: "pune to Jodhpur cab",
description: "Pune to Jodhpur cab provides private long-distance transportation to the Blue City of Rajasthan. The service is suitable for families, couples, groups, business travelers, and tourists planning to visit Mehrangarh Fort and other Jodhpur attractions as part of a Rajasthan road trip."
},
{
name: "pune to jaipur cab",
description: "Pune to Jaipur cab offers direct road transportation between Pune and Rajasthan's capital city. Travelers can use the service for family holidays, sightseeing, business travel, relocation, and multi-city Rajasthan tours while selecting a vehicle suited to their passenger count."
},
{
name: "pune to udaipur cab",
description: "Pune to Udaipur cab is suitable for travelers planning a private road journey to the City of Lakes. The service can accommodate family trips, couple holidays, sightseeing tours, and multi-day Rajasthan itineraries with suitable vehicle options for passengers and luggage."
},
{
name: "pune to jaisalmer tour package",
description: "Pune to Jaisalmer tour package is designed around a long-distance Rajasthan journey that can include Jaisalmer Fort, local heritage attractions, desert dunes, cultural experiences, and desert camps. A private cab provides flexibility for travelers planning a customized sightseeing schedule."
},
{
name: "jaisalmer tour package for 3 days",
description: "Jaisalmer tour package for 3 days can be planned around the city's major heritage attractions and a desert experience. Travelers can organize a private itinerary covering Jaisalmer Fort, local sightseeing, Sam Sand Dunes, sunset views, and cultural activities within the available travel period."
},
{
name: "2 night 3 days jaisalmer itinerary",
description: "2 night 3 days jaisalmer itinerary can combine city sightseeing with a desert excursion and overnight stay. A private cab helps travelers move between the fort area, local attractions, desert locations, and accommodation while keeping the schedule convenient for a short Rajasthan holiday."
},
{
name: "jaisalmer tour package for 4 days",
description: "Jaisalmer tour package for 4 days gives travelers additional time for heritage sightseeing, desert activities, local markets, cultural experiences, and nearby attractions. Private cab transportation can be planned around the preferred sightseeing sequence and accommodation arrangements."
},
{
name: "pune to khatu shyam tour package",
description: "Pune to Khatu Shyam tour package provides private transportation for devotees traveling from Pune to the Khatu Shyam temple. The itinerary can be organized around temple darshan and may include other important religious destinations in Rajasthan according to the travel schedule."
},
{
name: "pune to khatu shyam cab booking",
description: "Pune to Khatu Shyam cab booking allows devotees and families to arrange dedicated road transportation for their pilgrimage. A private vehicle provides useful flexibility for departure timing, luggage, family members, and additional temple visits during the Rajasthan journey."
},
{
name: "pune to bikaner cab booking",
description: "Pune to Bikaner cab booking provides a dedicated vehicle for travelers heading toward Bikaner. It is suitable for family trips, tourism, business travel, and Rajasthan road tours, with vehicle choices based on group size and luggage requirements."
},
{
name: "pune to bikaner tour package",
description: "Pune to Bikaner tour package can include Bikaner's forts, temples, heritage areas, markets, and nearby attractions. Private cab transportation gives travelers flexibility to organize sightseeing according to their available days and combine Bikaner with other Rajasthan destinations."
},
{
name: "pune to rajasthan cab booking",
description: "Pune to Rajasthan cab booking helps travelers arrange private transportation in advance for long-distance Rajasthan journeys. It can be used for city tours, family holidays, pilgrimage trips, desert excursions, corporate travel, and multi-destination road trips."
},
{
name: "pune to rajasthan taxi booking online",
description: "Pune to Rajasthan taxi booking online provides a convenient way to plan private transportation before a long-distance journey. Travelers can consider their destination, travel dates, passenger count, luggage, vehicle category, and one-way or round-trip requirement when arranging the cab."
},
{
name: "pune to rajasthan cab fare",
description: "Pune to Rajasthan cab fare depends on factors such as the selected vehicle, destination, travel plan, distance, trip duration, and whether the journey is one-way or round-trip. Travelers can select a vehicle category that matches their itinerary and group requirements."
},
{
name: "pune to rajasthan taxi fare",
description: "Pune to Rajasthan taxi fare varies according to the destination city, vehicle type, journey arrangement, and overall travel distance. A private taxi can be planned for individual city transfers or longer Rajasthan tours depending on the traveler's requirements."
},
{
name: "pune to rajasthan cab price",
description: "Pune to Rajasthan cab price is influenced by route distance, vehicle category, trip duration, and one-way or return travel requirements. Travelers can compare suitable vehicle options according to passenger capacity, luggage space, and the nature of their Rajasthan itinerary."
},
{
name: "pune to rajasthan taxi charges",
description: "Pune to Rajasthan taxi charges depend on the selected route and travel arrangement. For a long-distance road journey, travelers can choose a suitable private vehicle and plan the trip according to their destination, number of passengers, luggage, and required sightseeing stops."
},
{
name: "best pune to rajasthan cab service",
description: "Best Pune to Rajasthan cab service is a commonly searched requirement for travelers planning long-distance private road transportation. Citysky Cabs supports different travel purposes with multiple vehicle categories and route options for Rajasthan city tours and extended road trips."
},
{
name: "cheap pune to rajasthan cab",
description: "Cheap Pune to Rajasthan cab provides a budget-conscious private travel option for passengers planning a long-distance Rajasthan journey. Travelers can select a practical vehicle category and choose a one-way or round-trip arrangement based on their itinerary and travel requirements."
},
{
name: "pune to rajasthan one way cab",
description: "Pune to Rajasthan one way cab is suitable for travelers who need direct transportation to Rajasthan without booking the same vehicle for the return journey. It can be useful for relocation, one-way family travel, business visits, and travelers continuing their journey from Rajasthan."
},
{
name: "pune to rajasthan round trip taxi",
description: "Pune to Rajasthan round trip taxi is convenient for travelers planning a complete return journey by private vehicle. Families and groups can use a round-trip arrangement for multi-day holidays, sightseeing tours, pilgrimage journeys, and Rajasthan road-trip itineraries."
},
{
name: "pune to rajasthan innova cab",
description: "Pune to Rajasthan Innova cab is suitable for families and medium-sized groups traveling over a long distance. The spacious vehicle can accommodate passengers and luggage comfortably and is useful for extended Rajasthan holidays and multi-city road trips."
},
{
name: "pune to rajasthan innova crysta cab",
description: "Pune to Rajasthan Innova Crysta cab offers a spacious option for families, corporate travelers, and groups planning a long road journey. It can be selected when passengers need additional cabin comfort, seating space, and luggage capacity for an extended itinerary."
},
{
name: "pune to rajasthan ertiga cab",
description: "Pune to Rajasthan Ertiga cab provides a practical option for families and medium-sized groups. The vehicle can be used for long-distance road travel, Rajasthan sightseeing, pilgrimage routes, and multi-day trips where passengers want to stay together in one private car."
},
{
name: "pune to rajasthan sedan cab",
description: "Pune to Rajasthan sedan cab is suitable for couples, small families, and business travelers who prefer a private car for the journey. It can be used for one-way travel, return trips, and customized Rajasthan itineraries with moderate passenger and luggage requirements."
},
{
name: "pune to rajasthan suv taxi",
description: "Pune to Rajasthan SUV taxi provides additional seating and luggage flexibility for families and groups planning a long-distance road trip. It can be useful for travelers carrying more luggage or combining several Rajasthan destinations within one itinerary."
},
{
name: "pune to rajasthan ac cab",
description: "Pune to Rajasthan AC cab provides an air-conditioned private travel option for the extended road journey. It is suitable for families, couples, corporate travelers, and groups who prefer a private vehicle while traveling between Pune and Rajasthan."
},
{
name: "pune to rajasthan luxury cab",
description: "Pune to Rajasthan luxury cab is intended for travelers seeking a more premium private transportation experience during a long-distance journey. It can be considered for corporate travel, special occasions, family holidays, and customized Rajasthan road trips."
},
{
name: "pune to pushkar cab",
description: "Pune to Pushkar cab offers direct private road transportation to one of Rajasthan's well-known spiritual and cultural destinations. Travelers can use the service for temple visits, Pushkar Lake sightseeing, family trips, and itineraries that also include nearby Ajmer."
},
{
name: "pune to pushkar taxi",
description: "Pune to Pushkar taxi provides private transportation for travelers visiting Pushkar for pilgrimage, sightseeing, cultural exploration, or personal travel. A dedicated vehicle also makes it convenient to include Ajmer and other nearby destinations in the same trip."
},
{
name: "pune to rajasthan tour cab",
description: "Pune to Rajasthan tour cab is suitable for travelers planning multi-city Rajasthan holidays covering destinations such as Jaipur, Jodhpur, Udaipur, Jaisalmer, Bikaner, Ajmer, and Pushkar. Private transportation allows the itinerary to be arranged around the group's sightseeing priorities."
},
{
name: "pune to rajasthan family trip cab",
description: "Pune to Rajasthan family trip cab provides private transportation for families traveling together over a long distance. Spacious vehicle options can help accommodate family members and luggage while supporting multi-day sightseeing, hotel transfers, and intercity travel."
},
{
name: "pune to rajasthan sightseeing taxi",
description: "Pune to Rajasthan sightseeing taxi supports travelers who want to explore multiple Rajasthan cities and attractions using private transportation. The service can be planned around forts, palaces, temples, markets, lakes, desert attractions, and other destinations on the itinerary."
},
{
name: "pune to rajasthan desert safari cab",
description: "Pune to Rajasthan desert safari cab provides transportation for travelers planning a Rajasthan desert experience. A private cab can support journeys toward Jaisalmer and desert locations such as Sam Sand Dunes while allowing travelers to combine the safari experience with city sightseeing."
},
{
name: "pune to rajasthan pilgrimage cab",
description: "Pune to Rajasthan pilgrimage cab is useful for devotees visiting destinations such as Khatu Shyam, Ajmer Sharif, Pushkar, and other religious locations. Private transportation gives families and groups greater flexibility when planning multiple temple and pilgrimage stops."
},
{
name: "pune to ajmer sharif cab",
description: "Pune to Ajmer Sharif cab provides private road transportation for devotees and travelers visiting Ajmer Sharif Dargah. The journey can be planned as part of a broader Rajasthan pilgrimage route that may also include Pushkar and other nearby destinations."
},
{
name: "Pune to Rajasthan cab fare per km",
description: "Pune to Rajasthan cab fare per km is one factor travelers may consider when planning a long-distance road journey. The overall trip cost can also depend on vehicle category, destination, travel duration, one-way or round-trip arrangement, and the selected itinerary."
},
{
name: "One-way vs round-trip Rajasthan taxi cost",
description: "One-way vs round-trip Rajasthan taxi cost depends on the travel arrangement and route requirements. One-way travel suits passengers who only need transportation to Rajasthan, while round-trip travel can be useful for travelers planning a complete return journey by private vehicle."
},
{
name: "Best car for Pune to Rajasthan road trip",
description: "Best car for Pune to Rajasthan road trip depends on the number of passengers, luggage, trip duration, and preferred level of space. Sedan, Ertiga, Innova, Innova Crysta, SUV, and other suitable vehicle categories can be considered for different travel groups."
},
{
name: "pune to Ajmer Cabs",
description: "Pune to Ajmer Cabs provide direct private transportation for travelers visiting Ajmer for pilgrimage, heritage sightseeing, or onward travel toward Pushkar and other Rajasthan destinations. Vehicle selection can be based on passenger count and luggage requirements."
},
{
name: "pune to kota cab",
description: "Pune to Kota cab provides private road transportation to southeastern Rajasthan. The service can be useful for students, families, professionals, and tourists traveling to Kota for education, business, personal visits, or sightseeing."
},
{
name: "pune to Bhilwara cabs",
description: "Pune to Bhilwara cabs provide private long-distance transportation to the textile and industrial city of Bhilwara. The service is suitable for business travelers, families, and tourists who prefer direct road travel and may want to combine Bhilwara with nearby Rajasthan destinations."
}
],
tableData: [
["pune to Jodhpur cab"],
["pune to jaipur cab"],
["pune to udaipur cab"],
["pune to jaisalmer tour package"],
["jaisalmer tour package for 3 days"],
["2 night 3 days jaisalmer itinerary"],
["jaisalmer tour package for 4 days"],
["pune to khatu shyam tour package"],
["pune to khatu shyam cab booking"],
["pune to bikaner cab booking"],
["pune to bikaner tour package"],
["pune to rajasthan cab booking"],
["pune to rajasthan taxi booking online"],
["pune to rajasthan cab fare"],
["pune to rajasthan taxi fare"],
["pune to rajasthan cab price"],
["pune to rajasthan taxi charges"],
["best pune to rajasthan cab service"],
["cheap pune to rajasthan cab"],
["pune to rajasthan one way cab"],
["pune to rajasthan round trip taxi"],
["pune to rajasthan innova cab"],
["pune to rajasthan innova crysta cab"],
["pune to rajasthan ertiga cab"],
["pune to rajasthan sedan cab"],
["pune to rajasthan suv taxi"],
["pune to rajasthan ac cab"],
["pune to rajasthan luxury cab"],
["pune to pushkar cab"],
["pune to pushkar taxi"],
["pune to rajasthan tour cab"],
["pune to rajasthan family trip cab"],
["pune to rajasthan sightseeing taxi"],
["pune to rajasthan desert safari cab"],
["pune to rajasthan pilgrimage cab"],
["pune to ajmer sharif cab"],
["Pune to Rajasthan cab fare per km"],
["One-way vs round-trip Rajasthan taxi cost"],
["Best car for Pune to Rajasthan road trip"],
["pune to Ajmer Cabs"],
["pune to kota cab"],
["pune to Bhilwara cabs"]
],
whychoose: [
{
WhyChooseheading: "Complete Rajasthan Route Coverage",
WhyChoosedescription: "Citysky Cabs supports private road travel from Pune to major Rajasthan destinations including Jaipur, Jodhpur, Udaipur, Jaisalmer, Bikaner, Ajmer, Pushkar, Khatu Shyam, Kota, and Bhilwara. This makes it possible to plan individual city transfers as well as broader multi-destination Rajasthan journeys."
},
{
WhyChooseheading: "Flexible One-Way Travel",
WhyChoosedescription: "Travelers who do not require the same vehicle for their return journey can choose a one-way cab arrangement. This is useful for relocation, onward travel, business visits, family transfers, and travelers who have a separate return plan from Rajasthan."
},
{
WhyChooseheading: "Round-Trip Road Trip Options",
WhyChoosedescription: "A round-trip cab is suitable for families and groups planning to travel from Pune to Rajasthan and return by road. It can simplify multi-day holidays by keeping private transportation available throughout the itinerary and supporting multiple city and sightseeing stops."
},
{
WhyChooseheading: "Vehicles for Different Group Sizes",
WhyChoosedescription: "Different vehicle categories can accommodate different passenger requirements, from small groups preferring sedans to families and larger groups requiring Ertiga, Innova, Innova Crysta, SUVs, or larger vehicles. Vehicle selection can be based on seating, luggage, and journey duration."
},
{
WhyChooseheading: "Suitable for Rajasthan Tours",
WhyChoosedescription: "Private cab travel works well for Rajasthan itineraries covering several cities and attractions. Travelers can plan routes through Jaipur, Jodhpur, Udaipur, Jaisalmer, Bikaner, Ajmer, Pushkar, and other destinations without having to coordinate separate public transportation for every leg."
},
{
WhyChooseheading: "Pilgrimage Travel Support",
WhyChoosedescription: "Rajasthan has several important pilgrimage destinations, including Khatu Shyam and Ajmer Sharif, along with religious attractions around Pushkar. Dedicated cabs provide families and groups with a practical option for arranging direct transportation and combining multiple religious stops."
},
{
WhyChooseheading: "Family and Group-Friendly Journey",
WhyChoosedescription: "Long Rajasthan road trips often involve multiple passengers and substantial luggage. Private vehicles allow families and groups to travel together, select an appropriate cabin size, and maintain greater flexibility when planning sightseeing, hotel transfers, and rest stops."
},
{
WhyChooseheading: "Long-Distance Travel Convenience",
WhyChoosedescription: "The Pune to Rajasthan journey covers a substantial road distance, making vehicle selection and itinerary planning important. Citysky Cabs provides different private travel options so passengers can choose a vehicle suited to the length of the trip, passenger count, luggage, and planned destinations."
}
]
};











const faqData = [
{
question: "How can I arrange a Pune to Rajasthan Cab with Citysky Cabs?",
answer: "Travellers planning a road journey from Pune to Rajasthan can enquire by providing their pickup location, exact Rajasthan destination, travel date, passenger count, preferred departure time, luggage details, and one-way or return requirement. Citysky Cabs can coordinate the cab according to the planned itinerary."
},
{
question: "Can I hire a private cab from Pune to cities in Rajasthan?",
answer: "Private cab travel can be discussed for Rajasthan destinations such as Jaipur, Udaipur, Jodhpur, Ajmer, Pushkar, Kota, Bikaner, or other locations depending on the traveller's itinerary. The exact pickup and drop points can be shared while making the transportation enquiry."
},
{
question: "Is one-way Pune to Rajasthan Cab service available?",
answer: "Passengers who need transportation from Pune to Rajasthan without a return journey can enquire about a one-way cab arrangement. The destination city, Pune pickup point, travel date, passenger count, luggage details, and preferred departure time should be provided for planning the trip."
},
{
question: "Can I book a round-trip cab from Pune to Rajasthan?",
answer: "Travellers planning to return to Pune after completing their Rajasthan trip can enquire about round-trip transportation. This can be useful for family holidays, weddings, business travel, religious visits, and multi-day tours where the onward and return itinerary is known."
},
{
question: "Is a private cab suitable for a Pune to Rajasthan family trip?",
answer: "Families travelling a long distance may prefer a dedicated cab when they want to remain together throughout the journey. Private road travel can make it easier to manage children, senior passengers, luggage, meal breaks, rest stops, and sightseeing plans during the trip."
},
{
question: "Can I plan a Rajasthan sightseeing tour from Pune by cab?",
answer: "Travellers interested in visiting multiple Rajasthan destinations can discuss their complete itinerary with Citysky Cabs. Jaipur, Udaipur, Jodhpur, Pushkar, Ajmer, and other locations can be included according to the planned route, travel duration, sightseeing requirements, and return schedule."
},
{
question: "Can I use a Pune to Rajasthan Cab for a wedding or family function?",
answer: "A private cab can be considered when travelling from Pune to Rajasthan for weddings, receptions, family gatherings, or other special events. Passengers can share the function venue, travel dates, group size, luggage requirements, and return plans while arranging the journey."
},
{
question: "Can corporate travellers travel from Pune to Rajasthan by cab?",
answer: "Business travellers can enquire about private transportation for meetings, conferences, client visits, industrial work, exhibitions, training programs, or corporate events in Rajasthan. The cab requirement can be coordinated according to the traveller's professional schedule and destination."
},
{
question: "Can I travel from Pune to Rajasthan with multiple bags?",
answer: "Passengers travelling for an extended holiday, relocation, or family function can mention their luggage quantity during the booking enquiry. Providing the passenger count and approximate number of bags helps in discussing a suitable vehicle arrangement for the long-distance journey."
},
{
question: "What details are required to book a Pune to Rajasthan Cab?",
answer: "For a cab booking enquiry, provide the Pune pickup address, Rajasthan destination, travel date, passenger count, luggage details, preferred departure time, and one-way or round-trip requirement. If multiple cities, sightseeing stops, or additional destinations are planned, those details should also be shared."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Rajesh Rathod",
feedback:
"We travelled from Pune to Jaipur for a family wedding and wanted to make the complete journey by private cab. I shared our travel dates, passenger details, and venue information with Citysky Cabs. Having one vehicle for the group was convenient because we had several bags and needed to coordinate our travel around the wedding schedule.",
rating: 5
},
{
id: 2,
name: "Miss. Ankita Mehta",
feedback:
"I planned a Rajasthan trip from Pune with my friends and wanted a cab for the longer road journey. Citysky Cabs arranged the transportation based on our itinerary. The private vehicle gave us the flexibility to travel together with our luggage and plan our stops during the multi-day trip.",
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
  "name": "Pune to Rajasthan Cab",
  "image": "https://www.cityskycab.in/assets/images/pune-to-rajasthan-cab.webp",
  "description": "Pune to Rajasthan Cab from Citysky Cabs is a private long-distance travel option for families, couples, devotees and groups planning customized Rajasthan tours from Pune. The service covers Pune to Jodhpur Cab, Pune to Jaipur Cab, Pune to Udaipur Cab, Pune to Jaisalmer Tour Package and Pune to Khatu Shyam Tour Package requirements. Travellers can choose sedan, Ertiga or Innova Crysta vehicles according to passenger count, luggage and itinerary. Customized Jaisalmer tour options can include 2 Night 3 Days, 3 Days and 4 Days itineraries along with sightseeing and desert destinations. Rajasthan road trips can also be planned for Jaipur, Jodhpur, Udaipur, Jaisalmer, Khatu Shyam and other destinations. Citysky Cabs supports flexible pickup from Pune and Pimpri Chinchwad for family holidays, pilgrimage tours and customized round-trip journeys.",
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
    "url": "https://www.cityskycab.in/pune-to-rajasthan-cab"
  }
};





    return (
        <div>

<Helmet>
  <title>
    Pune to Rajasthan Cab | Jaipur, Jaisalmer & Khatu Shyam | +91 8554819191
  </title>

  <meta
    name="description"
    content="Pune to Rajasthan Cab by Citysky Cabs for Jaipur, Jodhpur, Udaipur, Jaisalmer and Khatu Shyam tours. Book private sedan, Ertiga or Innova Crysta from Pune."
  />

  <meta
    name="keywords"
    content="Pune to Rajasthan Cab, Pune to Jodhpur cab, Pune to Jaipur cab, Pune to Udaipur cab, Pune to Jaisalmer tour package, Jaisalmer tour package for 3 days, 2 night 3 days Jaisalmer itinerary, Jaisalmer tour package for 4 days, Pune to Khatu Shyam tour package, Pune to Khatu Shyam cab, Pune to Rajasthan cab service, Pune to Rajasthan taxi service, Pune Rajasthan cab booking, Pune to Rajasthan car rental, Pune to Rajasthan private cab, Pune to Rajasthan tour package, Pune Rajasthan road trip, Pune to Rajasthan round trip cab, Pune to Rajasthan Innova Crysta cab, Pune to Rajasthan Innova cab, Pune to Rajasthan Ertiga cab, Pune to Rajasthan sedan cab, Pune to Jaipur taxi, Pune to Jaipur car rental, Pune to Jodhpur taxi, Pune to Jodhpur car rental, Pune to Udaipur taxi, Pune to Udaipur car rental, Pune to Jaisalmer cab, Pune to Jaisalmer taxi, Pune to Jaisalmer car rental, Pune Jaisalmer 3 days tour package, Pune Jaisalmer 4 days tour package, Pune to Khatu Shyam taxi, Pune to Khatu Shyam Temple cab, Pune Khatu Shyam Darshan package, Rajasthan family tour from Pune, Rajasthan sightseeing cab from Pune, Pimpri Chinchwad to Rajasthan cab, PCMC to Rajasthan taxi"
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
                            <img src='/images/keywords/7.jpg' alt='img' className='img-fluid' />
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

export default Punetorajsthancab;