import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Punetopanchganicab() {


const cardData = {
keyword: "Pune to Panchgani Cabs",
headingDescription: "Citysky Cabs provides reliable Pune to Panchgani Cabs for travellers planning weekend getaways, family holidays, couple trips and scenic hill-station journeys. Private cab travel makes the route convenient for passengers who want direct pickup from Pune and comfortable drop-off in Panchgani without changing vehicles. Customers can choose suitable options such as sedan, Ertiga, SUV and Innova Crysta according to passenger count, luggage and travel preferences. The service is suitable for one-way travel as well as return journeys, with flexible arrangements for travellers starting from Pune Airport, residential areas, offices and other convenient pickup points. Panchgani sightseeing can also be combined with nearby attractions such as Table Land, Parsi Point, Sydney Point, Mapro Garden, Wai and Mahabaleshwar for a more complete hill-station itinerary.",
topPlaces: [
{
title: "Panchgani",
description: "Panchgani is a popular hill station known for its pleasant climate, mountain scenery, valleys and colonial-era surroundings. A private cab from Pune provides convenient direct transportation for families, couples and groups planning a relaxed getaway."
},
{
title: "Table Land",
description: "Table Land is one of Panchgani's well-known attractions and offers expansive views across the surrounding hills and valleys. Travellers can include this location in a Panchgani sightseeing itinerary after arriving by private cab from Pune."
},
{
title: "Parsi Point",
description: "Parsi Point is a scenic viewpoint offering attractive views of the Krishna Valley and surrounding landscapes. It is a convenient stop for visitors exploring Panchgani and can be included in a customized private cab sightseeing route."
},
{
title: "Sydney Point",
description: "Sydney Point is a picturesque Panchgani viewpoint appreciated for its views of nearby hills, valleys and the Dhom Dam region. Private transportation makes it easy for families and groups to include the viewpoint during their local sightseeing."
},
{
title: "Mapro Garden",
description: "Mapro Garden is a popular stop on the Panchgani-Mahabaleshwar route, known for its food products, garden areas and family-friendly atmosphere. It can be combined with Panchgani sightseeing as part of a private cab itinerary."
},
{
title: "Mahabaleshwar",
description: "Mahabaleshwar is located close to Panchgani and offers numerous viewpoints, waterfalls, lakes and leisure attractions. Travellers can conveniently combine both hill stations in one private cab trip from Pune."
},
{
title: "Venna Lake",
description: "Venna Lake is a well-known Mahabaleshwar attraction surrounded by green hills and popular with families and holiday travellers. It can be included in a combined Panchgani-Mahabaleshwar sightseeing plan."
},
{
title: "Wai",
description: "Wai is a historic town situated on the route toward Panchgani and is known for temples, ghats and the Krishna River. Travellers can include Wai as an additional stop during a customized Pune to Panchgani road trip."
},
{
title: "Lingmala Waterfall",
description: "Lingmala Waterfall is a popular seasonal attraction in the Mahabaleshwar region and can be added to a Panchgani and Mahabaleshwar sightseeing itinerary. Private cab travel provides flexibility to visit the waterfall along with other nearby attractions."
},
{
title: "Pratapgad Fort",
description: "Pratapgad Fort is an important historical attraction in the Mahabaleshwar region and is suitable for travellers interested in heritage and scenic mountain landscapes. It can be covered as part of a longer Panchgani-Mahabaleshwar private cab itinerary."
}
],
services: [
{
name: "Pune to panchgani cab",
description: "Pune to Panchgani cab provides direct private transportation for travellers heading to the hill station. It is suitable for families, couples and groups planning weekend trips, holidays and sightseeing journeys."
},
{
name: "Panchgani to pune cab",
description: "Panchgani to Pune cab provides convenient return transportation for travellers completing their hill-station visit. The private cab can be scheduled around the group's preferred departure time and destination in Pune."
},
{
name: "Panchgani to pune taxi",
description: "Panchgani to Pune taxi offers direct road travel from the hill station to Pune for families, couples and individual travellers. It is useful for return journeys after holidays, sightseeing trips and personal visits."
},
{
name: "pune airport to panchgani taxi fare",
description: "Pune Airport to Panchgani taxi fare is an important consideration for passengers travelling directly from the airport to the hill station. The overall fare can vary according to vehicle type, trip requirements and applicable route charges."
},
{
name: "pune to panchgani ertiga cab booking",
description: "Pune to Panchgani Ertiga cab booking provides a practical spacious vehicle option for families and small groups. The vehicle can accommodate passengers and luggage comfortably for the hill-station journey."
},
{
name: "pune to panchgani cab fare",
description: "Pune to Panchgani cab fare depends on factors such as vehicle category, trip type, travel distance and itinerary requirements. Travellers can select a suitable private cab according to their planned journey."
},
{
name: "pune to panchgani distance by taxi fare",
description: "Pune to Panchgani distance by taxi fare helps travellers understand the relationship between the route, vehicle selection and overall journey cost. Private cab arrangements can be planned according to one-way or return travel requirements."
},
{
name: "pune to panchgani taxi",
description: "Pune to Panchgani taxi provides private transportation for travellers visiting the hill station for holidays, weekend breaks and sightseeing. Direct pickup and drop-off make the journey convenient for different passenger groups."
},
{
name: "pune to panchgani taxi distance",
description: "Pune to Panchgani taxi distance is useful when planning the expected travel time and overall itinerary. A private taxi allows passengers to travel directly while accommodating convenient stops when required."
},
{
name: "pune to panchgani taxi fare",
description: "Pune to Panchgani taxi fare can vary based on the selected vehicle, trip type and travel requirements. Customers can choose a vehicle category that suits their group size and planned itinerary."
},
{
name: "pune to panchgani innova crysta cab booking",
description: "Pune to Panchgani Innova Crysta cab booking is suitable for families and groups seeking a spacious vehicle for the hill-station journey. It provides additional seating and luggage capacity for comfortable travel."
},
{
name: "Pune to Panchgani Cab",
description: "Pune to Panchgani Cab provides direct private travel from Pune to one of Maharashtra's popular hill stations. It is suitable for weekend holidays, family vacations, couple trips and customized sightseeing plans."
},
{
name: "Pune to Panchgani Taxi",
description: "Pune to Panchgani Taxi offers convenient intercity transportation with flexible pickup and drop-off arrangements. Travellers can plan one-way or return journeys according to their holiday schedule."
},
{
name: "Pune to Panchgani Cab Service",
description: "Pune to Panchgani Cab Service supports private transportation for individuals, families and groups travelling to Panchgani. Vehicle selection can be based on passenger count, luggage and journey requirements."
},
{
name: "Pune to Panchgani One Way Cab",
description: "Pune to Panchgani One Way Cab is suitable for travellers who require direct transportation to Panchgani without booking a return trip. It can be useful for holidays, personal visits and planned one-direction journeys."
},
{
name: "Pune to Panchgani Taxi Fare",
description: "Pune to Panchgani Taxi Fare depends on the selected vehicle category and specific travel arrangement. Travellers can plan the journey according to their preferred vehicle, passenger requirements and one-way or return itinerary."
},
{
name: "Pune to Panchgani Cab Booking",
description: "Pune to Panchgani Cab Booking allows travellers to arrange their private vehicle before starting the hill-station journey. Advance planning is useful for weekends, holidays, family trips and peak travel periods."
},
{
name: "Pune Airport to Panchgani Cab",
description: "Pune Airport to Panchgani Cab provides direct transportation for passengers arriving at Pune Airport and travelling onward to Panchgani. It is convenient for travellers who want to continue their journey without changing vehicles."
},
{
name: "Cheapest Cab from Pune to Panchgani",
description: "Cheapest Cab from Pune to Panchgani is a search option for travellers comparing economical private transportation for the hill-station route. Vehicle selection and trip type can be considered when planning the overall travel budget."
},
{
name: "SUV Cab Pune to Panchgani",
description: "SUV Cab Pune to Panchgani provides a spacious travel option for families and groups carrying luggage for a hill-station holiday. The larger vehicle format is suitable for longer journeys and group travel."
},
{
name: "Innova Crysta Pune to Panchgani Cab",
description: "Innova Crysta Pune to Panchgani Cab provides spacious private transportation for families and groups travelling to Panchgani. The vehicle is suitable for passengers who prefer additional cabin space and comfortable seating."
}
],
tableData: [
["Pune to panchgani cab"],
["Panchgani to pune cab"],
["Panchgani to pune taxi"],
["pune airport to panchgani taxi fare"],
["pune to panchgani ertiga cab booking"],
["pune to panchgani cab fare"],
["pune to panchgani distance by taxi fare"],
["pune to panchgani taxi"],
["pune to panchgani taxi distance"],
["pune to panchgani taxi fare"],
["pune to panchgani innova crysta cab booking"],
["Pune to Panchgani Cab"],
["Pune to Panchgani Taxi"],
["Pune to Panchgani Cab Service"],
["Pune to Panchgani One Way Cab"],
["Pune to Panchgani Taxi Fare"],
["Pune to Panchgani Cab Booking"],
["Pune Airport to Panchgani Cab"],
["Cheapest Cab from Pune to Panchgani"],
["SUV Cab Pune to Panchgani"],
["Innova Crysta Pune to Panchgani Cab"]
],
whychoose: [
{
WhyChooseheading: "Direct Hill-Station Transportation",
WhyChoosedescription: "Citysky Cabs provides direct Pune to Panchgani travel without requiring passengers to change vehicles during the journey. This makes the route convenient for families, couples and groups carrying luggage."
},
{
WhyChooseheading: "Flexible One-Way Travel",
WhyChoosedescription: "Travellers who only need transportation to Panchgani can choose a one-way cab arrangement according to their itinerary. This option is useful for holidays, personal visits and onward travel plans."
},
{
WhyChooseheading: "Multiple Vehicle Choices",
WhyChoosedescription: "Sedan, Ertiga, SUV and Innova Crysta options allow travellers to select transportation according to group size and luggage requirements. Larger vehicles can be particularly useful for family and group holidays."
},
{
WhyChooseheading: "Airport to Panchgani Transfers",
WhyChoosedescription: "Passengers arriving at Pune Airport can arrange direct transportation toward Panchgani without making a separate local transfer. This provides a practical option for travellers continuing directly to the hill station."
},
{
WhyChooseheading: "Suitable for Weekend Getaways",
WhyChoosedescription: "Panchgani is well suited to short holidays and weekend breaks, and private cab travel makes it easier to plan departure and return schedules around the available vacation time."
},
{
WhyChooseheading: "Panchgani and Mahabaleshwar Combination",
WhyChoosedescription: "A private vehicle can be used to combine Panchgani with nearby destinations such as Mahabaleshwar, Mapro Garden, Venna Lake and other attractions, creating a broader hill-station sightseeing itinerary."
},
{
WhyChooseheading: "Comfortable Family Travel",
WhyChoosedescription: "Private cab transportation gives families the convenience of travelling together with their luggage and planning stops according to their requirements. Vehicle choices can accommodate different passenger groups."
},
{
WhyChooseheading: "Convenient Return Journey",
WhyChoosedescription: "Travellers can also arrange Panchgani to Pune return transportation after completing their holiday. A planned return cab helps maintain a convenient schedule for families, couples and groups."
}
]
};







const faqData = [
{
question: "How can I book a Pune to Panchgani Cab with Citysky Cabs?",
answer: "Travellers can enquire about a Pune to Panchgani cab by providing their pickup location, travel date, preferred departure time, passenger count, and journey type. Citysky Cabs can arrange transportation for one-way travel, return journeys, weekend visits, or customized sightseeing plans around Panchgani."
},
{
question: "Can I hire a private cab from Pune to Panchgani for a weekend trip?",
answer: "A private cab can be a convenient option for travellers planning a weekend getaway to Panchgani. The journey can be arranged around your preferred departure and return timings, allowing the group to travel directly from Pune and plan sightseeing according to the available time."
},
{
question: "Is Pune to Panchgani cab service available for a round trip?",
answer: "Travellers who want to visit Panchgani and return to Pune can enquire about a round-trip cab. The expected sightseeing duration, waiting time, return schedule, and any additional stops can be discussed while arranging the complete itinerary with Citysky Cabs."
},
{
question: "Can families travel from Pune to Panchgani by cab?",
answer: "Families can choose a private cab for a Panchgani trip when they want everyone to travel together. It can be useful for managing children, elderly passengers, luggage, meal breaks, and sightseeing stops while travelling between Pune and the hill station."
},
{
question: "What places can I visit in Panchgani during a cab trip from Pune?",
answer: "A Panchgani sightseeing itinerary may include popular attractions such as Table Land, Parsi Point, Sydney Point, Mapro Garden, and nearby scenic locations. Travellers can mention their preferred places in advance so the cab schedule can be planned around their sightseeing requirements."
},
{
question: "Can I combine Panchgani and Mahabaleshwar in one cab trip from Pune?",
answer: "Travellers can discuss a combined Pune, Panchgani, and Mahabaleshwar itinerary when they want to explore both hill destinations during the same trip. The route can be planned according to the number of days, sightseeing preferences, overnight requirements, and desired return schedule."
},
{
question: "Is Pune to Panchgani Cab suitable for senior citizens?",
answer: "Families travelling with senior citizens can discuss a private cab arrangement with suitable departure timings and rest breaks. Direct transportation can reduce the need for vehicle changes, while the sightseeing schedule can be kept flexible according to the comfort and requirements of the travelling group."
},
{
question: "Can a group of friends hire a cab from Pune to Panchgani?",
answer: "Groups of friends can enquire about a private cab for a Panchgani road trip, particularly when they want to explore viewpoints, local attractions, and nearby destinations together. Vehicle selection can be discussed based on the number of passengers, luggage, and planned travel duration."
},
{
question: "Can I take luggage in a Pune to Panchgani cab?",
answer: "Passengers can carry regular travel luggage during the Pune to Panchgani journey. For larger groups or longer stays where several bags are involved, it is useful to share the approximate luggage quantity along with the passenger count so Citysky Cabs can discuss an appropriate vehicle."
},
{
question: "What information is required for Pune to Panchgani Cabs?",
answer: "To enquire about a Pune to Panchgani cab, provide your Pune pickup point, travel date, preferred departure time, number of passengers, luggage details, and whether you need one-way or return transportation. Any sightseeing stops, additional destinations, or special travel requirements should also be mentioned."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Kunal More",
feedback:
"A few of us were planning a weekend trip from Pune to Panchgani and wanted to cover several viewpoints without worrying about local transportation. Citysky Cabs arranged the cab around our travel schedule. Having the vehicle with us during the trip made it convenient to manage our sightseeing and luggage.",
rating: 5
},
{
id: 2,
name: "Miss. Aarti Joshi",
feedback:
"We planned a family outing covering Panchgani and Mahabaleshwar, with my parents travelling along with us. I shared our preferred route and dates with Citysky Cabs, and the cab arrangement suited our itinerary. The flexibility to travel together and take breaks during the journey was helpful for our group.",
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
  "name": "Pune to Panchgani Cabs",
  "image": "https://www.cityskycab.in/assets/images/pune-to-panchgani-cabs.webp",
  "description": "Pune to Panchgani Cabs from Citysky Cabs provide private hill-station travel for families, couples, friends and groups planning a trip from Pune to Panchgani. The service covers Pune to Panchgani Cab, Panchgani to Pune Cab, Panchgani to Pune Taxi, Pune Airport to Panchgani Taxi, Pune to Panchgani Ertiga Cab Booking and Pune to Panchgani Cab Fare requirements. Travellers can choose sedan, Ertiga or Innova Crysta vehicles according to passenger count, luggage and trip preferences. One-way drops, round trips and customized sightseeing journeys can be arranged with flexible pickup locations across Pune and Pimpri Chinchwad. Citysky Cabs is suitable for weekend getaways, family holidays, Panchgani sightseeing and combined Panchgani-Mahabaleshwar tours, with return cab options also available from Panchgani to Pune.",
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
    "url": "https://www.cityskycab.in/pune-to-panchgani-cabs"
  }
};



    return (
        <div>


<Helmet>
  <title>
    Pune to Panchgani Cabs | Taxi Fare & Round Trip Booking | +91 9272112191 
  </title>

  <meta
    name="description"
    content="Pune to Panchgani Cabs by Citysky Cabs for one-way, round-trip and sightseeing travel. Book sedan, Ertiga or Innova Crysta from Pune or Pune Airport."
  />

  <meta
    name="keywords"
    content="Pune to Panchgani Cabs, Pune to Panchgani cab, Panchgani to Pune cab, Panchgani to Pune taxi, Pune Airport to Panchgani taxi fare, Pune to Panchgani Ertiga cab booking, Pune to Panchgani cab fare, Pune to Panchgani distance by taxi fare, Pune to Panchgani taxi, Pune to Panchgani cab service, Pune to Panchgani taxi service, cab from Pune to Panchgani, taxi from Pune to Panchgani, Pune to Panchgani cab booking, Pune to Panchgani taxi booking, Pune Panchgani cab service, Pune Panchgani taxi service, Pune to Panchgani one way cab, Pune to Panchgani one way taxi, Pune to Panchgani round trip cab, Pune to Panchgani round trip taxi, Pune to Panchgani taxi fare, Pune to Panchgani cab price, Pune to Panchgani taxi price, Pune to Panchgani cab charges, cheap Pune to Panchgani cab, affordable Pune to Panchgani taxi, best Pune to Panchgani cab, Pune to Panchgani private cab, Pune to Panchgani car rental, Pune to Panchgani car booking, Pune to Panchgani online cab booking, Pune to Panchgani sedan cab, Pune to Panchgani Ertiga cab, Pune to Panchgani Innova cab, Pune to Panchgani Innova Crysta cab, Pune to Panchgani AC cab, Pune to Panchgani family cab, Pune to Panchgani sightseeing cab, Pune to Panchgani tour package, Pune Panchgani Mahabaleshwar cab, Pune to Panchgani Mahabaleshwar tour package, Pune to Panchgani weekend trip cab, Pune Airport to Panchgani cab, Pune Airport to Panchgani taxi, Pune Airport to Panchgani cab fare, Pimpri Chinchwad to Panchgani cab, PCMC to Panchgani taxi, Panchgani to Pune one way cab, Panchgani to Pune cab service, Panchgani to Pune taxi service"
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
                            <img src='/images/keywords/31.jpg' alt='img' className='img-fluid' />
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

export default Punetopanchganicab;