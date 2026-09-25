
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from './components/Header';
import HeroSection from './components/HeroSlider';
import Footer from './components/Footer';
import AboutUs from './components/AboutSection';
import Gallery from './pages/Gallery';
import Career from './components/Career';
import Enquiry from './components/Enquiry';
import Booking from './pages/Booking';
import OutNetwork from './pages/OutNetwork';
import Packages from './pages/Packages';
import OurFleet from './pages/OurFleet';
import Services from './pages/Services';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import Innovacrystacabinpune from './pages/Innova Crysta Cab in Pune';
import Innovacrystaonrentinpune from './pages/Innova Crysta On Rent in Pune';
import Innovacrystacabstaxibooking from './pages/Innova Crysta Cabs  Taxi Booking in Pune';
import Punetomahabaelshwarinnovacrysta from './pages/Pune to Mahabaleshwar Innova Crysta Cab';
import Bookinnovacrystaforoutsttaion from './pages/Book Innova Crysta for Outstation From Pune';
import Innovacrystacabsforpuneairport from './pages/Innova Crysta Cabs for Pune Airport';
import ScrollToTop from './components/ScrollToTop';
import Punetomumbaiairportinnova from './pages/Pune to Mumbai Airport Innova Crysta';
import Innovacrystacabforcorporate from './pages/Innova Crysta Cab for Corporate Office';
import Mumbaiairporttopuneinnnova from './pages/Mumbai Airport to Pune Innova Crysta Cabs';
import Punetoshirdiinnovacrysta from './pages/Pune to Shirdi Innova Crysta';
import Punetoaurangabad from './pages/Pune Aurangabad Innova Crysta Cab Service';
import Punetogoainnovacrysta from './pages/Pune to Goa Innova Crysta Cab';
import Punetobangloreinnovacrysta from './pages/Pune to Bangalore Innova Crysta Cab';
import Punetohyderabad from './pages/Pune to Hyderabad Innova Crysta Rental Cab';
import Punetolavasainnova from './pages/Pune to Lavasa Innova Crysta Cab Booking';
import Punetonashikinnovacrysta from './pages/Pune Darshan Innova Crysta Cabs';
import Innovacrystacabspune from './pages/Innova Crysta Cabs in Pune';
import Innovacarrentalinpune from './pages/Innova Car Rental In Pune';
import Innovataxiservicee from './pages/Innova Taxi Service in Pune';
import Bookinnovaforoutsttaion from './pages/Book Innova for Outstation Pune';
import Punetomahabaleshwarpanchgani from './pages/Pune to Mahabaleshwar Panchgani Innova Crysta Cabs';
import Puneoutsttaioninnovacrysta from './pages/Pune to Outstation Innova Crysta Booking';
import Punetomumbaiairportinnovacar from './pages/Pune to Mumbai Airport Innova Crysta Car Rental';
import Punetodapoliinnova from './pages/Pune to Dapoli Innova Crysta Cab Service';
import Punetoshirdiinnovacrystacab from './pages/Pune to Shirdi Innova Crysta Cabs';
import Punetopandharpurcrysta from './pages/Pune to Pandharpur Crysta Cabs Service';
import Punetonashikinnovacrystataxi from './pages/Pune to Nashik Innova Crysta Taxi Service';
import Innovacrystapuneairporttaxi from './pages/Innova Crysta Pune Airport Taxi';
import Innovacrystacabforcorporatee from './pages/Innova Crysta Cab for Corporate.';
import Luxurycabsbookingpune from './pages/Luxury Cabs Boosking Pune';
import Punetohyderabadinnovacrysta from './pages/Pune to Hyderabad Innova Crysta Taxi Fare';
import Punetosuratinnovacab from './pages/Pune to Surat Innova Cabs Booking';
import Punetoinnovacrystacabbooking from './pages/Pune to Indore Innova Crysta Cabs Booking';
import Punelocalinnovacrysta from './pages/Pune Local Innova Crysta Car Rental';
import Punetolonavalainnovacrystsa from './pages/Pune to Lonavala Innova Crysta Cabs Taxi';
import Punetokolhapurinnovacrysta from './pages/Pune to Kolhapur Innova Crysta Cab Service';
import Punetogoainnovacrystacab from './pages/Pune to Goa Innova Crysta Cab Service';
import Punetoratnagiriinnova from './pages/Pune to Ratnagiri Innova Crysta Car Rental';
import Innoavacrystacarhire from './pages/Innova Crysta Car Hire for Events Pune';
import Innovacrystacarrentalinviman from './pages/Innova Crysta Car Rental in Viman Nagar';
import Punetoalibauginnovacrysta from './pages/Pune to Alibag Innova Crysta Cab Service';
import Punetorajsthaninnnova from './pages/Pune to Rajasthan Innova Crysta Rental';
import Punetonagpurinnova from './pages/Pune to Nagpur Innova Crysta Car Rental';
import Punedarshaninnovacrysta from './pages/Pune Darshan Innova Crysta Booking ';
import Punebhimashankarinnovacrysta from './pages/Pune to Bhimashankar Innova Crysta Taxi Service';
import Punetoashtavinyakadarshan from './pages/Pune to Ashtavinayak Darshan Innova Crysta Booking';
import Punetojyotilingayatrainnovacrysta from './pages/Pune to Jyotirlinga Yatra Innova Crysta Cab';
import Punetotrimbkeshwarinnova from './pages/Pune to Trimbakeshwar Innova Crysta Cab';
import Punetoadlabasimagicainnova from './pages/Pune to Adlabs Imagica Innova Crysta Cab';
import Punetokonkandarshan from './pages/Pune to Konkan Darshan Innova Crysta Cab';
import Punetoshegaoninnovacrysta from './pages/Pune to Shegaon Innova Crysta Cab Service';
import Punetomatheraninnova from './pages/Pune to Matheran Innova Crysta Cab Booking';
import Punetomumbaiinnovacrysta from './pages/Pune to Mumbai Innova Crysta Cab';
import Punetoouttstaioncabs from './pages/Pune to Outstations Cabs';
import Punetomahabaleshwarcab from './pages/Pune to Mahabaleshwar Cab';
import Punetolonavalacab from './pages/Pune to Lonavala Cab';
import Punetomatherancab from './pages/Pune to Matheran Cabs';
import Punetofivejyotilinga from './pages/Pune to 5 Jyotirlinga Darshan Cab';
import Punetobhimashankarcab from './pages/Pune to Bhimashankar Cab';
import Punetoaurangabadcabservice from './pages/Pune to Aurangabad Cab Service';
import Punetonashikcabservice from './pages/Pune to Nashik Cab Service';
import Punetokolhapurcab from './pages/Pune to Kolhapur Cab Service';
import Punetoalibaugcab from './pages/Pune to Alibaug Cab';
import Punetogoacabservice from './pages/Pune to Goa Cab Service';
import Goatopunecab from './pages/Goa to Pune Cabs';
import Punetoashtavinayakcab from './pages/Pune to Ashtavinayak Cabs';
import Punetogoacab from './pages/Pune to Goa Cabs';
import Punetojyotilingadarshan from './pages/Pune to Jyotirlinga Darshan Package';
import Punetoakkalkotcabs from './pages/Pune to Akkalkot Cabs';
import Punetopandharpurcab from './pages/Pune to Pandharpur Cab';
import Punetogrishneshwarjyotilinga from './pages/Pune to Grishneshwar Jyotirlinga Cab';
import Punetoalibagcab from './pages/Pune to Alibag Cab';
import Punetoashtavinayakcabb from './pages/Pune to Ashtavinayak Cab';
import Punetoshrivardhancab from './pages/Pune to Shrivardhan Cab';
import Punetojyotibacab from './pages/Pune to Jyotiba Cab';
import Punetoshirdicab from './pages/Pune to Shirdi Cab';
import Punetoayodhyatour from './pages/Pune to Ayodhya Tour Package';
import Punetomahabaleshwarsedan from './pages/Pune to Mahabaleshwar Sedan Cab';
import Punetovidharbhcab from './pages/Pune to Vidarbha Cab Service';
import Punetohyderabadcab from './pages/Pune to Hyderabad Cab';
import Punetoujjaincab from './pages/Pune to Ujjain Cab';
import Punerailwaystation from './pages/Pune Railway Station Cab Service';
import Cheapcabserviceinpune from './pages/Cheap Cab Service in Pune';
import Onlinecabbookingpune from './pages/Online Cab Booking Pune';
import Punetobanglorecab from './pages/Pune to Bangalore Cab';
import Punetogujrajcabservice from './pages/Pune to Gujarat Cab Service';
import Punetonagpurcab from './pages/Pune to Nagpur Cab';
import Punetoahmednagar from './pages/Pune to Ahmednagar Cab';
import Puneolaturcab from './pages/Pune to Latur Cab';
import Punetosataracab from './pages/Pune to Satara Cab';
import Punetosanglicab from './pages/Pune to Sangli Cab';
import Punetosolapurcab from './pages/Pune to Solapur Cab';
import Puneairportcab from './pages/Pune Airport Cab';
import Punetooutstationcab from './pages/Pune to Outstation Cabs';
import Punetorajsthancab from './pages/Pune to Rajasthan Cab';
import Punetosambhajinagarcab from './pages/Pune to Sambhajinagar Cab';
import Punetoshukecab from './pages/Pune to Dhule Cab';
import Punetojalnacab from './pages/Pune to Jalna Cab';
import Punetotelnganacab from './pages/Pune to Telangana Cab';
import Punetoindorecab from './pages/Pune to Indore Cab';
import Punetaxiservice from './pages/Pune Taxi Service';
import Bestcabserviceinpune from './pages/Best Cab Service in Pune';
import Puneonewaycabservice from './pages/Pune One Way Cab Service';
import Punelocalandoutstation from './pages/Pune Local and Outstation Cab';
import Punetojalgaoncab from './pages/Pune to Jalgaon Cab Service';
import Punetothanecab from './pages/Pune to Thane Cab';
import Punetopanvelcab from './pages/Pune to Panvel Cabs';
import Punetonandedcab from './pages/Pune to Nanded Cab Service';
import Punetosurat from './pages/Pune to Surat Cab';
import Punetoahmedabadcab from './pages/Pune to Ahmedabad Cab';
import Punetomahabaleshwartaxi from './pages/Pune to Mahabaleshwar Taxi';
import Punetolagatpuri from './pages/Pune to Igatpuri Taxi';
import Punetotamhinighat from './pages/Pune to Tamhini Ghat Cab';
import Punetotrimbkeshwarcabservice from './pages/Pune to Trimbakeshwar Cab Service';
import Punetoashtavinayakdarshan from './pages/Pune to Ashtavinayak Darshan Cab';
import Punetojejuricab from './pages/Pune to Jejuri Cab Service';
import Punetoaundhnagnathcab from './pages/Pune to Aundha Nagnath Cab';
import Punetokonkandarshancab from './pages/Pune to Konkan Darshan Cab';
import Bestoutstationcabservice from './pages/Best Outstation Cab Service in Pune';
import Punetopanchganicab from './pages/Pune to Panchgani Cabs';
import Hinjewadicabservice from './pages/Hinjewadi Cab Service';
import Cabserviceinkharadi from './pages/Cab Service in Kharadi';
import Cabserviceinwagholi from './pages/Cab Service in Wagholi';
import Cabserviceinmudhwa from './pages/Cab Service in Mundhwa';
import Cabserviceinkalyaninagar from './pages/Cab Service in Kalyani Nagar';
import Cabserviceinkothrud from './pages/Cab Service in Kothrud';
import Punetokhatushyamtour from './pages/Pune to Khatu Shyam Tour Package';
import Punetojaisalmertour from './pages/Pune to Jaisalmer Tour Package';
import Puesightseeingcab from './pages/Pune Sightseeing Cab';
import Puneairportcabservice from './pages/Pune Airport Cab Service';
import Cabserviceinlegegaon from './pages/Cab Service in Lohegaon';
import Ertigaonrentinpune from './pages/Ertiga On Rent in Pune';
import Ertigahireinpune from './pages/Ertiga Hire in Pune';
import Sedancabservice from './pages/Sedan Cab Service';
import Hyndaixcent from './pages/Hyundai Xcent Cabs in Pune';
import Swiftdzireonrent from './pages/Swift Dzire On Rent in Pune';
import Auracabservice from './pages/Aura Cab Service in Pune';
import Punedarshansedan from './pages/Pune Darshan Sedan Cab Booking';
import Punetomumbaicabs from './pages/Pune to Mumbai Cabs';
import Punetomumbaiairportcab from './pages/Pune to Mumbai Airport Cab';
import Punetomumbaiinternatinal from './pages/Pune to Mumbai International Airport Cab';
import Punetomumbaioneway from './pages/Pune to Mumbai One Way Cab';
import Punemumbaicarhire from './pages/Pune Mumbai Car Hire';
import Punetomumbaitaxifare from './pages/Pune to Mumbai Taxi Fare';
import Punetomumbaionlinecabbooking from './pages/Pune to Mumbai Online Cab Booking';
import Pimprichichwadtomumbai from './pages/Pimpri Chinchwad to Mumbai Cab';
import Banertomumbaicabs from './pages/Baner to Mumbai Cabs';
import Hinjewaditomumbaicabs from './pages/Hinjewadi to Mumbai Cabs';
import Pimplesaudagar from './pages/Pimple Saudagar to Mumbai Cab Service';
import Wakadtomumbaicabs from './pages/Wakad to Mumbai Cabs';
import Hadapsartomumbaicabs from './pages/Hadapsar to Mumbai Cabs';
import Kalyaninagartomumbaicab from './pages/Kalyani Nagar to Mumbai Taxi';
import Koregaonparktomumbai from './pages/Koregaon Park to Mumbai Cabs';
import Kothrudtomumbaicabs from './pages/Kothrud to Mumbai Cabs';
import Kharaditomumbaicabs from './pages/Kharadi to Mumbai Cabs';
import Shivajinagartomumbaicab from './pages/Shivajinagar to Mumbai Cabs';
import Punetomumbaiertigacab from './pages/Pune to Mumbai Ertiga Cab';
import Punetomumbauinnovacrysta from './pages/Pune to Mumbai Innova Crysta Cabs';
import Punetomumbaisedancab from './pages/Pune to Mumbai Sedan Cab';
import Kondhwatomumbacabs from './pages/Kondhwa to Mumbai Cabs';
import Vimannagartomumbaicabs from './pages/Viman Nagar to Mumbai Cabs';
import Katrajtommbaicabservice from './pages/Katraj to Mumbai Cab Service';
import Punestationtomumbaicab from './pages/Pune Station to Mumbai Cabs Service';
import Boatclubroadtomumbaicabs from './pages/Boat Club Road to Mumbai Cabs';
import Vishrantwaditomumbaicabs from './pages/Vishrantwadi to Mumbai Cabs';
import Alanditomumbaicabs from './pages/Alandi to Mumbai Cabs Service';
import Wagholitomumbaicabs from './pages/Wagholi to Mumbai Cabs';
import Cabserviceinpimprichochwad from './pages/Cab Service in Pimpri Chinchwad';
import Cheapestcabserviceinpune from './pages/Cheapest Cab Service in Pune';
import Punetomumbairoundtripcab from './pages/Pune to Mumbai Round Trip Cab Fare';
import Punetomumbaicabbooking from './pages/Pune to Mumbai Cab Booking';
import Bookcabfrompunetomumbai from './pages/Book Cab from Pune to Mumbai';
import Punetonavimumbaiairport from './pages/Pune to Navi Mumbai Airport Cab';
import Punetonavimumbaicab from './pages/Pune to Navi Mumbai Cab';
import Punetonavimumbaiinnova from './pages/Pune to Navi Mumbai Innova Crysta';
import Punetomumbaiairportdrop from './pages/Pune to Mumbai Airport Drop Innova';
import Punemulundcabservice from './pages/Pune Mulund Cab Service';
import Punetomumbaidarshancab from './pages/Pune to Mumbai Darshan Cab';
import Punetomumbaidarshanpackage from './pages/Pune to Mumbai Darshan Package';
import Punetodadarcab from './pages/Pune to Dadar Cab';
import Punetobadracab from './pages/Pune to Bandra Cab';
import Punetovasaicab from './pages/Pune to Vasai & Virar Cab';
import Punetopowaicab from './pages/Pune to Powai Cab';
import Punemumbaitaxiservice from './pages/Pune Mumbai Taxi Service';
import Onewaycabpunetomumbai from './pages/One Way Cab Pune to Mumbai';
import Punetomiraroadcab from './pages/Pune to Mira Road Cab';
import Punetomumbaiairportreturn from './pages/Pune to Mumbai Airport Return Cab';
import Punetoborivalicab from './pages/Pune to Borivali Cab';
import Punetokalyancab from './pages/Pune to Kalyan Cab';
import Taxifrompune from './pages/Taxi From Pune to Mumbai Airport';
import Punetomumbaiertigacabb from './pages/Pune to Mumbai Ertiga Cab';
import Bestcabservicepunetomumbai from './pages/Best Cab Service Pune to Mumbai';
import Puneairporttomumbaicab from './pages/Pune Airport to Mumbai Airport Cab';
import Corporatecabserviceinpune from './pages/Corporate Cab Services in Pune';
import Monthlycabservieinpune from './pages/Monthly Cab Services in Pune';
import Corporatecarrentalinpune from './pages/Corporate Car Rental in Pune';
import Corporatecarrentalserviceinpune from './pages/Corporate Car Rentals Services in Pune';
import Corporatecabserviceforpuneoutstaion from './pages/Corporate Cab Services for Pune Outstation';
import Corporatecabserviceinkharadi from './pages/Corporate Cab Service in Kharadi';
import Corporatecabserviceinhadapsar from './pages/Corporate Cab Service in Hadapsar';
import Corporatecabserviceinvimannagar from './pages/Corporate Cab Service in Viman Nagar';
import Monthlypickanddropservice from './pages/Monthly Pick and Drop Service Pune';
import Corporateserviceinhinjewadi from './pages/Corporate Cab Services in Hinjewadi';
import Corporatecabserviceintelnganamidc from './pages/Corporate Cab Service in Talegaon MIDC';
import Corporatecabserviceinchakanmidc from './pages/Corporate Cab Services in Chakan MIDC';
import Corporatecabserviceintalawademidc from './pages/Corporate Cab Services in Talawade MIDC';
import Cabsserviceforitcompany from './pages/Cab Service for IT Company in Pune';
import Corporatecabserviceinbhosarimidc from './pages/Corporate Cab Services in Bhosari MIDC';
import Officepickupanddropservice from './pages/Office Pickup and Drop Service in Pune';
import Corporatecabservice from './pages/Corporate Cabs Services in Sanaswadi';
import Corporatecabserviceranjangaon from './pages/Corporate Cab Services in Ranjangaon MIDC';
import Corporatecabserviceinkoregaon from './pages/Corporate Cab Services in Karegaon MIDC';
import Corporatecabserviceinshirwalmidc from './pages/Corporate Cab Services in Shirwal MIDC';
import Corporatecabserviceinshikrapur from './pages/Corporate Cab Services in Shikrapur MIDC';
import Cabserviceinjejuri from './pages/Cab Service in Jejuri MIDC';
import Bestcabserviceforcorporate from './pages/Best Cab Service for Corporate Employees Pune';
import Corporatetravelcompanies from './pages/Corporate Travel Companies in Pune';
import Innovacrystahireforcorporate from './pages/Innova Crysta Hire for Corporate Events in Pune';
import Puneairportcorporatecab from './pages/Pune Airport Corporate Cab Service';
import Cabserviceinkurkumbh from './pages/Cab Service in Kurkumbh Daund MIDC';
import Cabserviceinsupamidc from './pages/Cab Service in Supa Midc';
import Corporatecabserviceinkhed from './pages/Corporate Cab Services in Khed MIDC';
import Corporatecabservicemagarpatta from './pages/Corporate Cab Services in Magarpatta City';
import Cabserviceinmarkal from './pages/Cab Service in Markal MIDC Pune';
import Corporatemobility from './pages/Corporate Mobility Solutions in Pune';
import Monthlytransportation from './pages/Monthly Transportation Services in Pune';
import Topcarrentalcompany from './pages/Top Car Rental Company in Pune';
import Corporatecarrentalserviceprovider from './pages/Corporate Car Rental Service Provider in Pune';
import Luxurucarrental from './pages/Luxury Car Rentals in Pune';
import Sedancabserviceforcorporate from './pages/Sedan Cab Service for Corporate Employees Pune';
import Ertigahirefor from './pages/Ertiga Hire for Corporate in Pune';
import Kiacarenceonrent from './pages/Kia Carens On Rent for Corporate in Pune';
import Swiftdzireonrentforcorporate from './pages/Swift Dzire on Rent in Pune for Corporate';
import Innovacrystahireforcorporatepcmc from './pages/Innova Crysta Hire for Corporate Events in PCMC';
import ContactUs from './pages/ContactUs';
import ContactButtons from './components/ContactButtons';

function App() {
  return (
    <Router>
     <Header/>
      <ContactButtons />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/career" element={<Career />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/our-network" element={<OutNetwork />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/our-fleet" element={<OurFleet />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services" element={<PrivacyPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/term-condition" element={<TermsConditions />} />
        <Route path="/innova-crysta-cab-in-pune" element={<Innovacrystacabinpune />} />


        <Route path="/innova-crysta-on-rent-in-pune" element={<Innovacrystaonrentinpune />} />
        <Route path="/innova-crysta-cabs-taxi-booking-in-pune" element={<Innovacrystacabstaxibooking />} />
        <Route path="/pune-to-mahabaleshwar-innova-crysta-cab" element={<Punetomahabaelshwarinnovacrysta />} />
        <Route path="/book-innova-crysta-for-outstation-from-pune" element={<Bookinnovacrystaforoutsttaion />} />
        <Route path="/innova-crysta-cabs-for-pune-airport" element={<Innovacrystacabsforpuneairport />} />
        <Route path="/pune-to-mumbai-airport-innova-crysta" element={<Punetomumbaiairportinnova />} />
        <Route path="/innova-crysta-cab-for-corporate-office" element={<Innovacrystacabforcorporate />} />
        <Route path="/mumbai-airport-to-pune-innova-crysta-cabs" element={<Mumbaiairporttopuneinnnova />} />
        <Route path="/pune-to-shirdi-innova-crysta" element={<Punetoshirdiinnovacrysta />} />
        <Route path="/pune-aurangabad-innova-crysta-cab-service" element={<Punetoaurangabad />} />
        <Route path="/pune-to-goa-innova-crysta-cab" element={<Punetogoainnovacrysta />} />
        <Route path="/pune-to-bangalore-innova-crysta-cab" element={<Punetobangloreinnovacrysta />} />
        <Route path="/pune-to-hyderabad-innova-crysta-rental-cab" element={<Punetohyderabad />} />
        <Route path="/pune-to-lavasa-innova-crysta-cab-booking" element={<Punetolavasainnova />} />
        <Route path="/pune-darshan-innova-crysta-cabs" element={<Punetonashikinnovacrysta />} />
        <Route path="/innova-crysta-cabs-in-pune" element={<Innovacrystacabspune />} />
        <Route path="/innova-car-rental-in-pune" element={<Innovacarrentalinpune />} />
        <Route path="/innova-taxi-service-in-pune" element={<Innovataxiservicee />} />
        <Route path="/book-innova-for-outstation-pune" element={<Bookinnovaforoutsttaion />} />
        <Route path="/pune-to-mahabaleshwar-panchgani-innova-crysta-cabs" element={<Punetomahabaleshwarpanchgani />} />
        <Route path="/pune-to-outstation-innova-crysta-booking" element={<Puneoutsttaioninnovacrysta />} />
        <Route path="/pune-to-mumbai-airport-innova-crysta-car-rental" element={<Punetomumbaiairportinnovacar />} />
        <Route path="/pune-to-dapoli-innova-crysta-cab-service" element={<Punetodapoliinnova />} />
        <Route path="/pune-to-shirdi-innova-crysta-cabs" element={<Punetoshirdiinnovacrystacab />} />
        <Route path="/pune-to-pandharpur-crysta-cabs-service" element={<Punetopandharpurcrysta />} />
        <Route path="/pune-to-nashik-innova-crysta-taxi-service" element={<Punetonashikinnovacrystataxi />} />
        <Route path="/innova-crysta-pune-airport-taxi" element={<Innovacrystapuneairporttaxi />} />
        <Route path="/innova-crysta-cab-for-corporate" element={<Innovacrystacabforcorporatee />} />
        <Route path="/luxury-cabs-booking-pune" element={<Luxurycabsbookingpune />} />
        <Route path="/pune-to-hyderabad-innova-crysta-taxi-fare" element={<Punetohyderabadinnovacrysta />} />
        <Route path="/pune-to-surat-innova-cabs-booking" element={<Punetosuratinnovacab />} />
        <Route path="/pune-to-indore-innova-crysta-cabs-booking" element={<Punetoinnovacrystacabbooking />} />
        <Route path="/pune-local-innova-crysta-car-rental" element={<Punelocalinnovacrysta />} />
        <Route path="/pune-to-lonavala-innova-crysta-cabs-taxi" element={<Punetolonavalainnovacrystsa />} />
        <Route path="/pune-to-kolhapur-innova-crysta-cab-service" element={<Punetokolhapurinnovacrysta />} />
        <Route path="/pune-to-goa-innova-crysta-cab-service" element={<Punetogoainnovacrystacab />} />
        <Route path="/pune-to-ratnagiri-innova-crysta-car-rental" element={<Punetoratnagiriinnova />} />
        <Route path="/innova-crysta-car-hire-for-events-pune" element={<Innoavacrystacarhire />} />
        <Route path="/innova-crysta-car-rental-in-viman-nagar" element={<Innovacrystacarrentalinviman />} />
        <Route path="/pune-to-alibag-innova-crysta-cab-service" element={<Punetoalibauginnovacrysta />} />
        <Route path="/pune-to-rajasthan-innova-crysta-rental" element={<Punetorajsthaninnnova />} />
        <Route path="/pune-to-nagpur-innova-crysta-car-rental" element={<Punetonagpurinnova />} />
        <Route path="/pune-darshan-innova-crysta-booking" element={<Punedarshaninnovacrysta />} />
        <Route path="/pune-to-bhimashankar-innova-crysta-taxi-service" element={<Punebhimashankarinnovacrysta />} />
        <Route path="/pune-to-ashtavinayak-darshan-innova-crysta-booking" element={<Punetoashtavinyakadarshan />} />
        <Route path="/pune-to-jyotirlinga-yatra-innova-crysta-cab" element={<Punetojyotilingayatrainnovacrysta />} />
        <Route path="/pune-to-trimbakeshwar-innova-crysta-cab" element={<Punetotrimbkeshwarinnova />} />
        <Route path="/pune-to-adlabs-imagica-innova-crysta-cab" element={<Punetoadlabasimagicainnova />} />
        <Route path="/pune-to-konkan-darshan-innova-crysta-cab" element={<Punetokonkandarshan />} />
        <Route path="/pune-to-shegaon-innova-crysta-cab-service" element={<Punetoshegaoninnovacrysta />} />
        <Route path="/pune-to-matheran-innova-crysta-cab-booking" element={<Punetomatheraninnova />} />
        <Route path="/pune-to-mumbai-innova-crysta-cab" element={<Punetomumbaiinnovacrysta />} />
        <Route path="/pune-to-outstations-cabs" element={<Punetoouttstaioncabs />} />
        <Route path="/pune-to-mahabaleshwar-cab" element={<Punetomahabaleshwarcab />} />
        <Route path="/pune-to-lonavala-cab" element={<Punetolonavalacab />} />
        <Route path="/pune-to-matheran-cabs" element={<Punetomatherancab />} />
        <Route path="/pune-to-5-jyotirlinga-darshan-cab" element={<Punetofivejyotilinga />} />
        <Route path="/pune-to-bhimashankar-cab" element={<Punetobhimashankarcab />} />
        <Route path="/pune-to-aurangabad-cab-service" element={<Punetoaurangabadcabservice />} />
        <Route path="/pune-to-nashik-cab-service" element={<Punetonashikcabservice />} />
        <Route path="/pune-to-kolhapur-cab-service" element={<Punetokolhapurcab />} />
        <Route path="/pune-to-alibaug-cab" element={<Punetoalibaugcab />} />
        <Route path="/pune-to-goa-cab-service" element={<Punetogoacabservice />} />
        <Route path="/goa-to-pune-cabs" element={<Goatopunecab />} />
        <Route path="/pune-to-ashtavinayak-cabs" element={<Punetoashtavinayakcab />} />
        <Route path="/pune-to-goa-cabs" element={<Punetogoacab />} />
        <Route path="/pune-to-jyotirlinga-darshan-package" element={<Punetojyotilingadarshan />} />
        <Route path="/pune-to-akkalkot-cabs" element={<Punetoakkalkotcabs />} />
        <Route path="/pune-to-pandharpur-cab" element={<Punetopandharpurcab />} />
        <Route path="/pune-to-grishneshwar-jyotirlinga-cab" element={<Punetogrishneshwarjyotilinga />} />
        <Route path="/pune-to-alibag-cab" element={<Punetoalibagcab />} />
        <Route path="/pune-to-ashtavinayak-cab" element={<Punetoashtavinayakcabb />} />
        <Route path="/pune-to-shrivardhan-cab" element={<Punetoshrivardhancab />} />
        <Route path="/pune-to-jyotiba-cab" element={<Punetojyotibacab />} />
        <Route path="/pune-to-shirdi-cab" element={<Punetoshirdicab />} />

                <Route path="/pune-to-ayodhya-tour-package" element={<Punetoayodhyatour />} />
        <Route path="/pune-to-mahabaleshwar-sedan-cab" element={<Punetomahabaleshwarsedan />} />
        <Route path="/pune-to-vidarbha-cab-service" element={<Punetovidharbhcab />} />
        <Route path="/pune-to-hyderabad-cab" element={<Punetohyderabadcab />} />
        <Route path="/pune-to-ujjain-cab" element={<Punetoujjaincab />} />
        <Route path="/pune-railway-station-cab-service" element={<Punerailwaystation />} />
        <Route path="/cheap-cab-service-in-pune" element={<Cheapcabserviceinpune />} />
        <Route path="/online-cab-booking-pune" element={<Onlinecabbookingpune />} />
        <Route path="/pune-to-bangalore-cab" element={<Punetobanglorecab />} />
        <Route path="/pune-to-gujarat-cab-service" element={<Punetogujrajcabservice />} />
        <Route path="/pune-to-nagpur-cab" element={<Punetonagpurcab />} />
        <Route path="/pune-to-ahmednagar-cab" element={<Punetoahmednagar />} />
        <Route path="/pune-to-latur-cab" element={<Puneolaturcab />} />
        <Route path="/pune-to-satara-cab" element={<Punetosataracab />} />
        <Route path="/pune-to-sangli-cab" element={<Punetosanglicab />} />
        <Route path="/pune-to-solapur-cab" element={<Punetosolapurcab />} />
        <Route path="/pune-airport-cab" element={<Puneairportcab />} />
        <Route path="/pune-to-outstation-cabs" element={<Punetooutstationcab />} />
        <Route path="/pune-to-rajasthan-cab" element={<Punetorajsthancab />} />
        <Route path="/pune-to-sambhajinagar-cab" element={<Punetosambhajinagarcab />} />
        <Route path="/pune-to-dhule-cab" element={<Punetoshukecab />} />
        <Route path="/pune-to-jalna-cab" element={<Punetojalnacab />} />
        <Route path="/pune-to-telangana-cab" element={<Punetotelnganacab />} />
        <Route path="/pune-to-indore-cab" element={<Punetoindorecab />} />
        <Route path="/pune-taxi-service" element={<Punetaxiservice />} />
        <Route path="/best-cab-service-in-pune" element={<Bestcabserviceinpune />} />
        <Route path="/pune-one-way-cab-service" element={<Puneonewaycabservice />} />
        <Route path="/pune-local-and-outstation-cab" element={<Punelocalandoutstation />} />
        <Route path="/pune-to-jalgaon-cab-service" element={<Punetojalgaoncab />} />
        <Route path="/pune-to-thane-cab" element={<Punetothanecab />} />
        <Route path="/pune-to-panvel-cabs" element={<Punetopanvelcab />} />
        <Route path="/pune-to-nanded-cab-service" element={<Punetonandedcab />} />
        <Route path="/pune-to-surat-cab" element={<Punetosurat />} />
        <Route path="/pune-to-ahmedabad-cab" element={<Punetoahmedabadcab />} />
        <Route path="/pune-to-mahabaleshwar-taxi" element={<Punetomahabaleshwartaxi />} />
        <Route path="/pune-to-igatpuri-taxi" element={<Punetolagatpuri />} />
        <Route path="/pune-to-tamhini-ghat-cab" element={<Punetotamhinighat />} />
        <Route path="/pune-to-trimbakeshwar-cab-service" element={<Punetotrimbkeshwarcabservice />} />
        <Route path="/pune-to-ashtavinayak-darshan-cab" element={<Punetoashtavinayakdarshan />} />
        <Route path="/pune-to-jejuri-cab-service" element={<Punetojejuricab />} />
        <Route path="/pune-to-aundha-nagnath-cab" element={<Punetoaundhnagnathcab />} />
        <Route path="/pune-to-konkan-darshan-cab" element={<Punetokonkandarshancab  />} />
        <Route path="/best-outstation-cab-service-in-pune" element={<Bestoutstationcabservice />} />
        <Route path="/pune-to-panchgani-cabs" element={<Punetopanchganicab />} />
        <Route path="/hinjewadi-cab-service" element={<Hinjewadicabservice />} />
        <Route path="/cab-service-in-kharadi" element={<Cabserviceinkharadi />} />
        <Route path="/cab-service-in-wagholi" element={<Cabserviceinwagholi />} />
        <Route path="/cab-service-in-mundhwa" element={<Cabserviceinmudhwa />} />
        <Route path="/cab-service-in-kalyani-nagar" element={<Cabserviceinkalyaninagar />} />
        <Route path="/cab-service-in-kothrud" element={<Cabserviceinkothrud />} />
        <Route path="/pune-to-khatu-shyam-tour-package" element={<Punetokhatushyamtour />} />
        <Route path="/pune-to-jaisalmer-tour-package" element={<Punetojaisalmertour />} />
        <Route path="/pune-sightseeing-cab" element={<Puesightseeingcab />} />
        <Route path="/pune-airport-cab-service" element={<Puneairportcabservice />} />
        <Route path="/cab-service-in-lohegaon" element={<Cabserviceinlegegaon />} />
        <Route path="/ertiga-on-rent-in-pune" element={<Ertigaonrentinpune />} />
        <Route path="/ertiga-hire-in-pune" element={<Ertigahireinpune />} />
        <Route path="/sedan-cab-service" element={<Sedancabservice />} />
        <Route path="/hyundai-xcent-cabs-in-pune" element={<Hyndaixcent />} />
        <Route path="/swift-dzire-on-rent-in-pune" element={<Swiftdzireonrent />} />
        <Route path="/aura-cab-service-in-pune" element={<Auracabservice />} />
        <Route path="/pune-darshan-sedan-cab-booking" element={<Punedarshansedan />} />
        <Route path="/pune-to-mumbai-cabs" element={<Punetomumbaicabs />} />
        <Route path="/pune-to-mumbai-airport-cab" element={<Punetomumbaiairportcab />} />
        <Route path="/pune-to-mumbai-international-airport-cab" element={<Punetomumbaiinternatinal />} />
        <Route path="/pune-to-mumbai-one-way-cab" element={<Punetomumbaioneway />} />
        <Route path="/pune-mumbai-car-hire" element={<Punemumbaicarhire />} />
        <Route path="/pune-to-mumbai-taxi-fare" element={<Punetomumbaitaxifare />} />
        <Route path="/pune-to-mumbai-online-cab-booking" element={<Punetomumbaionlinecabbooking />} />
        <Route path="/pimpri-chinchwad-to-mumbai-cab" element={<Pimprichichwadtomumbai />} />
        <Route path="/baner-to-mumbai-cabs" element={<Banertomumbaicabs />} />
        <Route path="/hinjewadi-to-mumbai-cabs" element={<Hinjewaditomumbaicabs />} />
        <Route path="/pimple-saudagar-to-mumbai-cab-service" element={<Pimplesaudagar />} />
        <Route path="/wakad-to-mumbai-cabs" element={<Wakadtomumbaicabs />} />
        <Route path="/hadapsar-to-mumbai-cabs" element={<Hadapsartomumbaicabs />} />
        <Route path="/kalyani-nagar-to-mumbai-taxi" element={<Kalyaninagartomumbaicab />} />
        <Route path="/koregaon-park-to-mumbai-cabs" element={<Koregaonparktomumbai />} />
        <Route path="/kothrud-to-mumbai-cabs" element={<Kothrudtomumbaicabs />} />
        <Route path="/kharadi-to-mumbai-cabs" element={<Kharaditomumbaicabs />} />
        <Route path="/shivajinagar-to-mumbai-cabs" element={<Shivajinagartomumbaicab />} />


                <Route path="/pune-to-mumbai-ertiga-cab" element={<Punetomumbaiertigacab />} />
        <Route path="/pune-to-mumbai-innova-crysta-cabs" element={<Punetomumbauinnovacrysta />} />
        <Route path="/pune-to-mumbai-sedan-cab" element={<Punetomumbaisedancab />} />
        <Route path="/kondhwa-to-mumbai-cabs" element={<Kondhwatomumbacabs />} />
        <Route path="/viman-nagar-to-mumbai-cabs" element={<Vimannagartomumbaicabs />} />
        <Route path="/katraj-to-mumbai-cab-service" element={<Katrajtommbaicabservice />} />
        <Route path="/pune-station-to-mumbai-cabs-service" element={<Punestationtomumbaicab />} />
        <Route path="/boat-club-road-to-mumbai-cabs" element={<Boatclubroadtomumbaicabs />} />
        <Route path="/vishrantwadi-to-mumbai-cabs" element={<Vishrantwaditomumbaicabs />} />
        <Route path="/alandi-to-mumbai-cabs-service" element={<Alanditomumbaicabs />} />
        <Route path="/wagholi-to-mumbai-cabs" element={<Wagholitomumbaicabs />} />
        <Route path="/cab-service-in-pimpri-chinchwad" element={<Cabserviceinpimprichochwad />} />
        <Route path="/cheapest-cab-service-in-pune" element={<Cheapestcabserviceinpune />} />
        <Route path="/pune-to-mumbai-round-trip-cab-fare" element={<Punetomumbairoundtripcab />} />
        <Route path="/pune-to-mumbai-cab-booking" element={<Punetomumbaicabbooking />} />
        <Route path="/book-cab-from-pune-to-mumbai" element={<Bookcabfrompunetomumbai />} />
        <Route path="/pune-to-navi-mumbai-airport-cab" element={<Punetonavimumbaiairport />} />
        <Route path="/pune-to-navi-mumbai-cab" element={<Punetonavimumbaicab />} />
        <Route path="/pune-to-navi-mumbai-innova-crysta" element={<Punetonavimumbaiinnova />} />
        <Route path="/pune-to-mumbai-airport-drop-innova" element={<Punetomumbaiairportdrop />} />
        <Route path="/pune-mulund-cab-service" element={<Punemulundcabservice />} />
        <Route path="/pune-to-mumbai-darshan-cab" element={<Punetomumbaidarshancab />} />
        <Route path="/pune-to-mumbai-darshan-package" element={<Punetomumbaidarshanpackage />} />
        <Route path="/pune-to-dadar-cab" element={<Punetodadarcab />} />
        <Route path="/pune-to-bandra-cab" element={<Punetobadracab />} />
        <Route path="/pune-to-vasai-virar-cab" element={<Punetovasaicab />} />
        <Route path="/pune-to-powai-cab" element={<Punetopowaicab />} />
        <Route path="/pune-mumbai-taxi-service" element={<Punemumbaitaxiservice />} />
        <Route path="/one-way-cab-pune-to-mumbai" element={<Onewaycabpunetomumbai />} />
        <Route path="/pune-to-mira-road-cab" element={<Punetomiraroadcab />} />
        <Route path="/pune-to-mumbai-airport-return-cab" element={<Punetomumbaiairportreturn />} />
        <Route path="/pune-to-borivali-cab" element={<Punetoborivalicab />} />
        <Route path="/pune-to-kalyan-cab" element={<Punetokalyancab />} />
        <Route path="/taxi-from-pune-to-mumbai-airport" element={<Taxifrompune />} />
        <Route path="/pune-to-mumbai-airport-ertiga-cab" element={<Punetomumbaiertigacabb />} />
        <Route path="/best-cab-service-pune-to-mumbai" element={<Bestcabservicepunetomumbai />} />
        <Route path="/pune-airport-to-mumbai-airport-cab" element={<Puneairporttomumbaicab />} />

        <Route path="/corporate-cab-services-in-pune" element={<Corporatecabserviceinpune />} />
        <Route path="/monthly-cab-services-in-pune" element={<Monthlycabservieinpune />} />
        <Route path="/corporate-car-rental-in-pune" element={<Corporatecarrentalinpune />} />
        <Route path="/corporate-car-rentals-services-in-pune" element={<Corporatecarrentalserviceinpune />} />
        <Route path="/corporate-cab-services-for-pune-outstation" element={<Corporatecabserviceforpuneoutstaion />} />
        <Route path="/corporate-cab-service-in-kharadi" element={<Corporatecabserviceinkharadi />} />
        <Route path="/corporate-cab-service-in-hadapsar" element={<Corporatecabserviceinhadapsar />} />
        <Route path="/corporate-cab-service-in-viman-nagar" element={<Corporatecabserviceinvimannagar />} />
        <Route path="/monthly-pick-and-drop-service-pune" element={<Monthlypickanddropservice />} />
        <Route path="/corporate-cab-services-in-hinjewadi" element={<Corporateserviceinhinjewadi />} />
        <Route path="/corporate-cab-service-in-talegaon-midc" element={<Corporatecabserviceintelnganamidc />} />
        <Route path="/corporate-cab-services-in-chakan-midc" element={<Corporatecabserviceinchakanmidc />} />
        <Route path="/corporate-cab-services-in-talawade-midc" element={<Corporatecabserviceintalawademidc />} />
        <Route path="/cab-service-for-it-company-in-pune" element={<Cabsserviceforitcompany />} />
        <Route path="/corporate-cab-services-in-bhosari-midc" element={<Corporatecabserviceinbhosarimidc />} />
        <Route path="/office-pickup-and-drop-service-in-pune" element={<Officepickupanddropservice />} />
        <Route path="/corporate-cabs-services-in-sanaswadi" element={<Corporatecabservice />} />
        <Route path="/corporate-cab-services-in-ranjangaon-midc" element={<Corporatecabserviceranjangaon />} />
        <Route path="/corporate-cab-services-in-karegaon-midc" element={<Corporatecabserviceinkoregaon />} />
        <Route path="/corporate-cab-services-in-shirwal-midc" element={<Corporatecabserviceinshirwalmidc />} />
        <Route path="/corporate-cab-services-in-shikrapur-midc" element={<Corporatecabserviceinshikrapur />} />
        <Route path="/cab-service-in-jejuri-midc" element={<Cabserviceinjejuri />} />
        <Route path="/best-cab-service-for-corporate-employees-pune" element={<Bestcabserviceforcorporate />} />
        <Route path="/corporate-travel-companies-in-pune" element={<Corporatetravelcompanies />} />
        <Route path="/innova-crysta-hire-for-corporate-events-in-pune" element={<Innovacrystahireforcorporate />} />
        <Route path="/pune-airport-corporate-cab-service" element={<Puneairportcorporatecab />} />
        <Route path="/cab-service-in-kurkumbh-daund-midc" element={<Cabserviceinkurkumbh />} />
        <Route path="/cab-service-in-supa-midc" element={<Cabserviceinsupamidc />} />
        <Route path="/corporate-cab-services-in-khed-midc" element={<Corporatecabserviceinkhed />} />
        <Route path="/corporate-cab-services-in-magarpatta-city" element={<Corporatecabservicemagarpatta />} />
        <Route path="/cab-service-in-markal-midc-pune" element={<Cabserviceinmarkal />} />
        <Route path="/corporate-mobility-solutions-in-pune" element={<Corporatemobility />} />
        <Route path="/monthly-transportation-services-in-pune" element={<Monthlytransportation />} />
        <Route path="/top-car-rental-company-in-pune" element={<Topcarrentalcompany />} />
        <Route path="/corporate-car-rental-service-provider-in-pune" element={<Corporatecarrentalserviceprovider />} />
        <Route path="/luxury-car-rentals-in-pune" element={<Luxurucarrental />} />
        <Route path="/sedan-cab-service-for-corporate-employees-pune" element={<Sedancabserviceforcorporate />} />
        <Route path="/ertiga-hire-for-corporate-in-pune" element={<Ertigahirefor />} />
        <Route path="/kia-carens-on-rent-for-corporate-in-pune" element={<Kiacarenceonrent />} />
        <Route path="/swift-dzire-on-rent-in-pune-for-corporate" element={<Swiftdzireonrentforcorporate />} />
        <Route path="/innova-crysta-hire-for-corporate-events-in-pcmc" element={<Innovacrystahireforcorporatepcmc />} />
      </Routes>



      <Footer />
    </Router>
  );
}

export default App;
