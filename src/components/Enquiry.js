

// import React, { useState } from "react";
// import "./Enquiry.css";

// const Enquiry = () => {
//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState("");

//   /* =========================================================
//      FULL ENQUIRY FORM
//   ========================================================= */

//   const [formData, setFormData] = useState({
//     fullname: "",
//     email: "",
//     phone: "",
//     vehicle: "",
//     pickup: "",
//     drop: "",
//     triptype: "Outstation Trip",
//     date: "",
//     time: "",
//     passengers: "1-4",
//     message: "",
//   });

//   /* =========================================================
//      QUICK ENQUIRY FORM
//   ========================================================= */

//   const [quickLoading, setQuickLoading] = useState(false);
//   const [quickStatus, setQuickStatus] = useState("");

//   const [quickForm, setQuickForm] = useState({
//     fullname: "",
//     phone: "",
//     pickup: "",
//     drop: "",
//   });

//   /* =========================================================
//      FULL FORM CHANGE
//   ========================================================= */

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   /* =========================================================
//      QUICK FORM CHANGE
//   ========================================================= */

//   const handleQuickChange = (e) => {
//     setQuickForm({
//       ...quickForm,
//       [e.target.name]: e.target.value,
//     });
//   };

//   /* =========================================================
//      FULL FORM SUBMIT
//   ========================================================= */

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setLoading(true);
//     setStatus("");

//     const data = new FormData();

//     data.append(
//       "access_key",
//       "9752018f-9d16-424a-b577-bf1ff3c564af"
//     );

//     data.append(
//       "subject",
//       "New CitySky Cabs Travel Enquiry"
//     );

//     data.append(
//       "from_name",
//       "CitySky Cabs Website"
//     );

//     Object.keys(formData).forEach((key) => {
//       data.append(key, formData[key]);
//     });

//     try {
//       const response = await fetch(
//         "https://api.web3forms.com/submit",
//         {
//           method: "POST",
//           body: data,
//         }
//       );

//       const result = await response.json();

//       console.log(result);

//       if (result.success) {
//         setStatus("success");

//         setFormData({
//           fullname: "",
//           email: "",
//           phone: "",
//           vehicle: "",
//           pickup: "",
//           drop: "",
//           triptype: "Outstation Trip",
//           date: "",
//           time: "",
//           passengers: "1-4",
//           message: "",
//         });
//       } else {
//         console.log(result);
//         setStatus("error");
//       }
//     } catch (err) {
//       console.error(err);
//       setStatus("error");
//     }

//     setLoading(false);
//   };

//   /* =========================================================
//      QUICK FORM SUBMIT
//   ========================================================= */

//   const handleQuickSubmit = async (e) => {
//     e.preventDefault();

//     setQuickLoading(true);
//     setQuickStatus("");

//     const data = new FormData();

//     data.append(
//       "access_key",
//       "9752018f-9d16-424a-b577-bf1ff3c564af"
//     );

//     data.append(
//       "subject",
//       "New Quick Enquiry - CitySky Cabs"
//     );

//     data.append(
//       "from_name",
//       "CitySky Cabs Website"
//     );

//     data.append("fullname", quickForm.fullname);
//     data.append("phone", quickForm.phone);
//     data.append("pickup", quickForm.pickup);
//     data.append("drop", quickForm.drop);

//     try {
//       const response = await fetch(
//         "https://api.web3forms.com/submit",
//         {
//           method: "POST",
//           body: data,
//         }
//       );

//       const result = await response.json();

//       if (result.success) {
//         setQuickStatus("success");

//         setQuickForm({
//           fullname: "",
//           phone: "",
//           pickup: "",
//           drop: "",
//         });
//       } else {
//         setQuickStatus("error");
//       }
//     } catch (error) {
//       console.error(error);
//       setQuickStatus("error");
//     }

//     setQuickLoading(false);
//   };






//   /* =========================================================
//    CORPORATE ENQUIRY FORM
// ========================================================= */

// const [corporateForm, setCorporateForm] = useState({
//   companyName: "",
//   contactPerson: "",
//   phone: "",
//   email: "",
//   requirement: "",
//   location: "",
//   message: "",
// });

// const handleCorporateChange = (e) => {
//   setCorporateForm({
//     ...corporateForm,
//     [e.target.name]: e.target.value,
//   });
// };

// const handleCorporateSubmit = (e) => {
//   e.preventDefault();

//   const whatsappNumber = "918459883515";

//   const whatsappMessage = `
// *CITYSKY CABS - CORPORATE ENQUIRY*

// *Company Name:* ${corporateForm.companyName}
// *Contact Person:* ${corporateForm.contactPerson}
// *Mobile Number:* ${corporateForm.phone}
// *Email:* ${corporateForm.email || "Not Provided"}
// *Corporate Requirement:* ${corporateForm.requirement}
// *Location:* ${corporateForm.location}
// *Additional Requirement:* ${corporateForm.message || "Not Provided"}

// Hello CitySky Cabs,

// We would like to enquire about your corporate transportation services. Please share the suitable service options and further details.

// Thank you.
//   `;

//   window.open(
//     `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
//       whatsappMessage
//     )}`,
//     "_blank"
//   );
// };
//   return (
//     <>
//       {/* =================================
//           PAGE BANNER
//       ================================== */}

//       <div className="sisf-banner sis-br-radius mt-3 position-relative">
//         <div className="banner-img">
       
//         </div>

//         <div className="sisf-page-title sisf-m sisf-title--standard sisf-alignment--center">
//           <div className="sisf-m-inner container">
//             <div className="sisf-m-content sisf-content-grid">
//               <h1 className="sisf-m-title text-white sis-text-anime-style-3 entry-title">
//                 Enquiry
//               </h1>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* =================================
//           ENQUIRY SECTION
//       ================================== */}

//       <section className="enquiry-section py-5">
//         <div className="container">

//           {/* =================================================
//               QUICK ENQUIRY
//           ================================================== */}

          
// {/* =================================================
//     CORPORATE ENQUIRY FORM
// ================================================== */}

// <div
//   className="citysky-corporate-enquiry"
//   data-aos="fade-up"
// >
//   <div className="row align-items-stretch">

//     {/* LEFT SIDE */}

//     <div className="col-lg-4">
//       <div className="citysky-corporate-info">

//         <div className="citysky-corporate-logo-box">
//           <img
//             src="/images/logo.jpg"
//             alt="CitySky Cabs"
//             className="citysky-corporate-logo"
//           />
//         </div>

//         <span className="citysky-corporate-small-title">
//           CORPORATE TRAVEL
//         </span>

//         <h2>
//           Corporate Cab
//           <br />
//           Enquiry
//         </h2>

//         <p>
//           Looking for professional transportation for your
//           company? Send us your requirement and our team will
//           assist you with a suitable corporate travel solution.
//         </p>

//         <div className="citysky-corporate-feature">
//           <i className="fa-solid fa-building"></i>

//           <div>
//             <strong>Corporate Transportation</strong>
//             <span>For companies & business travel</span>
//           </div>
//         </div>

//         <div className="citysky-corporate-feature">
//           <i className="fa-solid fa-car"></i>

//           <div>
//             <strong>Multiple Vehicle Options</strong>
//             <span>Cars, SUVs, Travellers & Buses</span>
//           </div>
//         </div>

//         <div className="citysky-corporate-feature">
//           <i className="fa-solid fa-user-tie"></i>

//           <div>
//             <strong>Business Travel Support</strong>
//             <span>Employee & official transportation</span>
//           </div>
//         </div>

//       </div>
//     </div>


//     {/* RIGHT SIDE FORM */}

//     <div className="col-lg-8">
//       <div className="citysky-corporate-form-box">

//         <div className="citysky-corporate-form-heading">
//           <span>BUSINESS ENQUIRY</span>

//           <h3>Tell Us Your Corporate Requirement</h3>

//           <p>
//             Complete the form and send your requirement directly
//             to CitySky Cabs on WhatsApp.
//           </p>
//         </div>


//         <form onSubmit={handleCorporateSubmit}>

//           <div className="row">

//             {/* COMPANY */}

//             <div className="col-md-6 mb-3">
//               <div className="citysky-corporate-field">

//                 <i className="fa-solid fa-building"></i>

//                 <input
//                   type="text"
//                   name="companyName"
//                   value={corporateForm.companyName}
//                   onChange={handleCorporateChange}
//                   placeholder="Company Name"
//                   required
//                 />

//               </div>
//             </div>


//             {/* CONTACT PERSON */}

//             <div className="col-md-6 mb-3">
//               <div className="citysky-corporate-field">

//                 <i className="fa-solid fa-user-tie"></i>

//                 <input
//                   type="text"
//                   name="contactPerson"
//                   value={corporateForm.contactPerson}
//                   onChange={handleCorporateChange}
//                   placeholder="Contact Person"
//                   required
//                 />

//               </div>
//             </div>


//             {/* MOBILE */}

//             <div className="col-md-6 mb-3">
//               <div className="citysky-corporate-field">

//                 <i className="fa-solid fa-phone"></i>

//                 <input
//                   type="tel"
//                   name="phone"
//                   value={corporateForm.phone}
//                   onChange={handleCorporateChange}
//                   placeholder="Mobile Number"
//                   required
//                 />

//               </div>
//             </div>


//             {/* EMAIL */}

//             <div className="col-md-6 mb-3">
//               <div className="citysky-corporate-field">

//                 <i className="fa-solid fa-envelope"></i>

//                 <input
//                   type="email"
//                   name="email"
//                   value={corporateForm.email}
//                   onChange={handleCorporateChange}
//                   placeholder="Official Email"
//                 />

//               </div>
//             </div>


//             {/* REQUIREMENT */}

//             <div className="col-md-6 mb-3">

//               <div className="citysky-corporate-field">

//                 <i className="fa-solid fa-briefcase"></i>

//                 <select
//                   name="requirement"
//                   value={corporateForm.requirement}
//                   onChange={handleCorporateChange}
//                   required
//                 >
//                   <option value="">
//                     Select Requirement
//                   </option>

//                   <option value="Employee Pickup & Drop">
//                     Employee Pickup & Drop
//                   </option>

//                   <option value="Corporate Cab Service">
//                     Corporate Cab Service
//                   </option>

//                   <option value="Airport Transfer">
//                     Corporate Airport Transfer
//                   </option>

//                   <option value="Executive Travel">
//                     Executive Travel
//                   </option>

//                   <option value="Corporate Event Transportation">
//                     Corporate Event Transportation
//                   </option>

//                   <option value="Staff Transportation">
//                     Staff Transportation
//                   </option>

//                   <option value="Monthly Cab Contract">
//                     Monthly Cab Requirement
//                   </option>

//                   <option value="Business Outstation Travel">
//                     Business Outstation Travel
//                   </option>

//                   <option value="Other">
//                     Other Requirement
//                   </option>
//                 </select>

//               </div>

//             </div>


//             {/* LOCATION */}

//             <div className="col-md-6 mb-3">

//               <div className="citysky-corporate-field">

//                 <i className="fa-solid fa-location-dot"></i>

//                 <input
//                   type="text"
//                   name="location"
//                   value={corporateForm.location}
//                   onChange={handleCorporateChange}
//                   placeholder="Company / Pickup Location"
//                   required
//                 />

//               </div>

//             </div>


//             {/* MESSAGE */}

//             <div className="col-12 mb-3">

//               <div className="citysky-corporate-field citysky-corporate-textarea">

//                 <i className="fa-solid fa-message"></i>

//                 <textarea
//                   name="message"
//                   value={corporateForm.message}
//                   onChange={handleCorporateChange}
//                   rows="3"
//                   placeholder="Tell us about number of employees, routes, shifts, vehicles or other requirements"
//                 ></textarea>

//               </div>

//             </div>


//             {/* BUTTON */}

//             <div className="col-12">

//               <button
//                 type="submit"
//                 className="citysky-corporate-submit"
//               >
//                 <i className="fa-brands fa-whatsapp"></i>

//                 Send Corporate Enquiry

//                 <i className="fa-solid fa-arrow-right"></i>
//               </button>

//             </div>

//           </div>

//         </form>

//       </div>
//     </div>

//   </div>
// </div>
//           {/* =================================================
//               EXISTING FULL ENQUIRY FORM
//           ================================================== */}

//           <div className="enquiry-box">

//             {/* HEADER */}

//             <div className="text-center mb-5">

//               <span className="small-title text-white">
//                 CITYSKY CABS
//               </span>

//               <h2 className="text-white">
//                 Get Your Best Cab Rental Quote
//               </h2>

//               <p className="text-white">
//                 Planning an airport transfer, local journey,
//                 outstation trip, corporate travel, family tour,
//                 wedding transportation or group journey? Share
//                 your travel details with CitySky Cabs and our
//                 team will help you choose the right vehicle and
//                 travel option for your requirements.
//               </p>

//             </div>

//             {/* FORM */}

//             <form onSubmit={handleSubmit}>
//               <div className="row">

//                 {/* FULL NAME */}

//                 <div className="col-lg-6 mb-4">
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Full Name"
//                     name="fullname"
//                     value={formData.fullname}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 {/* EMAIL */}

//                 <div className="col-lg-6 mb-4">
//                   <input
//                     type="email"
//                     className="form-control"
//                     placeholder="Email Address"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 {/* PHONE */}

//                 <div className="col-lg-6 mb-4">
//                   <input
//                     type="tel"
//                     className="form-control"
//                     placeholder="Mobile Number"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 {/* VEHICLE */}

//                 <div className="col-lg-6 mb-4">
//                   <select
//                     className="form-select"
//                     name="vehicle"
//                     value={formData.vehicle}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="">
//                       Select Vehicle
//                     </option>

//                     <optgroup label="Sedan Cars">
//                       <option value="Sedan">
//                         Sedan
//                       </option>

//                       <option value="Dzire">
//                         Dzire
//                       </option>

//                       <option value="Etios">
//                         Etios
//                       </option>
//                     </optgroup>

//                     <optgroup label="SUV Cars">
//                       <option value="SUV">
//                         SUV
//                       </option>

//                       <option value="Ertiga">
//                         Ertiga
//                       </option>

//                       <option value="Innova">
//                         Innova
//                       </option>

//                       <option value="Innova Crysta">
//                         Innova Crysta
//                       </option>
//                     </optgroup>

//                     <optgroup label="Premium Vehicles">
//                       <option value="Premium Sedan">
//                         Premium Sedan
//                       </option>

//                       <option value="Premium SUV">
//                         Premium SUV
//                       </option>

//                       <option value="Luxury Car">
//                         Luxury Car
//                       </option>
//                     </optgroup>

//                     <optgroup label="Traveller & Group Vehicles">
//                       <option value="Tempo Traveller">
//                         Tempo Traveller
//                       </option>

//                       <option value="Urbania">
//                         Force Urbania
//                       </option>

//                       <option value="Mini Bus">
//                         Mini Bus
//                       </option>

//                       <option value="Bus">
//                         Bus
//                       </option>
//                     </optgroup>

//                   </select>
//                 </div>

//                 {/* PICKUP */}

//                 <div className="col-lg-6 mb-4">
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Pickup Location"
//                     name="pickup"
//                     value={formData.pickup}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 {/* DROP */}

//                 <div className="col-lg-6 mb-4">
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Destination / Drop Location"
//                     name="drop"
//                     value={formData.drop}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 {/* TRIP TYPE */}

//                 <div className="col-lg-6 mb-4">
//                   <select
//                     className="form-select"
//                     name="triptype"
//                     value={formData.triptype}
//                     onChange={handleChange}
//                   >
//                     <option value="Outstation Trip">
//                       Outstation Trip
//                     </option>

//                     <option value="One Way Trip">
//                       One Way Trip
//                     </option>

//                     <option value="Round Trip">
//                       Round Trip
//                     </option>

//                     <option value="Local Cab">
//                       Local Cab
//                     </option>

//                     <option value="Airport Transfer">
//                       Airport Transfer
//                     </option>

//                     <option value="Family Tour">
//                       Family Tour
//                     </option>

//                     <option value="Group Tour">
//                       Group Tour
//                     </option>

//                     <option value="Corporate Travel">
//                       Corporate Travel
//                     </option>

//                     <option value="Wedding Travel">
//                       Wedding Travel
//                     </option>

//                     <option value="Railway Station Transfer">
//                       Railway Station Transfer
//                     </option>

//                     <option value="Hotel Transfer">
//                       Hotel Transfer
//                     </option>

//                     <option value="School / College Trip">
//                       School / College Trip
//                     </option>

//                     <option value="Picnic">
//                       Picnic
//                     </option>

//                     <option value="Pilgrimage / Darshan">
//                       Pilgrimage / Darshan
//                     </option>

//                   </select>
//                 </div>

//                 {/* PASSENGERS */}

//                 <div className="col-lg-6 mb-4">
//                   <select
//                     className="form-select"
//                     name="passengers"
//                     value={formData.passengers}
//                     onChange={handleChange}
//                   >
//                     <option value="1-4">
//                       1 - 4 Passengers
//                     </option>

//                     <option value="5-6">
//                       5 - 6 Passengers
//                     </option>

//                     <option value="7-9">
//                       7 - 9 Passengers
//                     </option>

//                     <option value="10-13">
//                       10 - 13 Passengers
//                     </option>

//                     <option value="14-17">
//                       14 - 17 Passengers
//                     </option>

//                     <option value="18-20">
//                       18 - 20 Passengers
//                     </option>

//                     <option value="21-25">
//                       21 - 25 Passengers
//                     </option>

//                     <option value="26-30">
//                       26 - 30 Passengers
//                     </option>

//                     <option value="31-35">
//                       31 - 35 Passengers
//                     </option>

//                     <option value="36-40">
//                       36 - 40 Passengers
//                     </option>

//                     <option value="41-50">
//                       41 - 50 Passengers
//                     </option>

//                     <option value="50+">
//                       50+ Passengers
//                     </option>

//                   </select>
//                 </div>

//                 {/* DATE */}

//                 <div className="col-lg-6 mb-4">
//                   <input
//                     type="date"
//                     className="form-control"
//                     name="date"
//                     value={formData.date}
//                     onChange={handleChange}
//                     min={new Date()
//                       .toISOString()
//                       .split("T")[0]}
//                     required
//                   />
//                 </div>

//                 {/* TIME */}

//                 <div className="col-lg-6 mb-4">
//                   <input
//                     type="time"
//                     className="form-control"
//                     name="time"
//                     value={formData.time}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 {/* MESSAGE */}

//                 <div className="col-12 mb-4">
//                   <textarea
//                     rows="5"
//                     className="form-control"
//                     placeholder="Tell us about your trip, destination, number of days, group size, vehicle requirement or any special travel requirements"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                   ></textarea>
//                 </div>

//                 {/* SUBMIT */}

//                 <div className="col-12 text-center">
//                   <button
//                     type="submit"
//                     className="btn btn-danger px-5 py-3 rounded-pill fw-bold"
//                     disabled={loading}
//                   >
//                     {loading ? (
//                       <>
//                         <span className="spinner-border spinner-border-sm me-2"></span>
//                         Sending Enquiry...
//                       </>
//                     ) : (
//                       <>
//                         <i className="fas fa-paper-plane me-2"></i>
//                         Get Best Cab Quote
//                       </>
//                     )}
//                   </button>
//                 </div>

//                 {/* STATUS */}

//                 <div className="col-12 mt-4 text-center">

//                   {status === "success" && (
//                     <div className="alert alert-success rounded-4">
//                       <i className="fas fa-check-circle me-2"></i>

//                       Thank you! Your CitySky Cabs enquiry has
//                       been submitted successfully. Our team will
//                       contact you shortly with the suitable vehicle
//                       option and travel quote.
//                     </div>
//                   )}

//                   {status === "error" && (
//                     <div className="alert alert-danger rounded-4">
//                       <i className="fas fa-times-circle me-2"></i>

//                       Something went wrong while submitting your
//                       enquiry. Please try again or contact CitySky
//                       Cabs directly.
//                     </div>
//                   )}

//                 </div>

//               </div>
//             </form>

//           </div>

//         </div>
//       </section>
//     </>
//   );
// };

// export default Enquiry;

import React, { useState } from "react";
import "./Enquiry.css";

const Enquiry = () => {
  /* =========================================================
     WEB3FORMS ACCESS KEY
  ========================================================= */

  const WEB3FORMS_ACCESS_KEY =
    "e1f3118b-0177-42de-86fa-f691eeee1b71";

  /* =========================================================
     FULL ENQUIRY FORM
  ========================================================= */

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    vehicle: "",
    pickup: "",
    drop: "",
    triptype: "Outstation Trip",
    date: "",
    time: "",
    passengers: "1-4",
    message: "",
  });

  /* =========================================================
     CORPORATE ENQUIRY FORM
  ========================================================= */

  const [corporateLoading, setCorporateLoading] = useState(false);
  const [corporateStatus, setCorporateStatus] = useState("");

  const [corporateForm, setCorporateForm] = useState({
    companyName: "",
    contactPerson: "",
    phone: "",
    email: "",
    requirement: "",
    location: "",
    message: "",
  });

  /* =========================================================
     FULL FORM CHANGE
  ========================================================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* =========================================================
     CORPORATE FORM CHANGE
  ========================================================= */

  const handleCorporateChange = (e) => {
    const { name, value } = e.target;

    setCorporateForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* =========================================================
     FULL FORM SUBMIT - WEB3FORMS
  ========================================================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setStatus("");

    try {
      const data = new FormData();

      data.append("access_key", WEB3FORMS_ACCESS_KEY);

      data.append(
        "subject",
        `New CitySky Cabs Travel Enquiry - ${formData.fullname}`
      );

      data.append("from_name", "CitySky Cabs Website");

      data.append("Form Type", "Travel / Cab Enquiry");
      data.append("Full Name", formData.fullname);
      data.append("Email Address", formData.email);
      data.append("Mobile Number", formData.phone);
      data.append("Vehicle", formData.vehicle);
      data.append("Pickup Location", formData.pickup);
      data.append("Destination / Drop Location", formData.drop);
      data.append("Trip Type", formData.triptype);
      data.append("Travel Date", formData.date);
      data.append("Travel Time", formData.time || "Not Provided");
      data.append("Passengers", formData.passengers);
      data.append("Message", formData.message || "Not Provided");

      /* Makes reply button reply to customer */
      data.append("replyto", formData.email);

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");

        setFormData({
          fullname: "",
          email: "",
          phone: "",
          vehicle: "",
          pickup: "",
          drop: "",
          triptype: "Outstation Trip",
          date: "",
          time: "",
          passengers: "1-4",
          message: "",
        });
      } else {
        console.error("Web3Forms Error:", result);
        setStatus("error");
      }
    } catch (error) {
      console.error("Form Submission Error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  /* =========================================================
     CORPORATE FORM SUBMIT - WEB3FORMS
  ========================================================= */

  const handleCorporateSubmit = async (e) => {
    e.preventDefault();

    if (corporateLoading) return;

    setCorporateLoading(true);
    setCorporateStatus("");

    try {
      const data = new FormData();

      data.append("access_key", WEB3FORMS_ACCESS_KEY);

      data.append(
        "subject",
        `New Corporate Enquiry - ${corporateForm.companyName}`
      );

      data.append("from_name", "CitySky Cabs Website");

      data.append("Form Type", "Corporate Cab Enquiry");
      data.append("Company Name", corporateForm.companyName);
      data.append("Contact Person", corporateForm.contactPerson);
      data.append("Mobile Number", corporateForm.phone);

      data.append(
        "Email Address",
        corporateForm.email || "Not Provided"
      );

      data.append(
        "Corporate Requirement",
        corporateForm.requirement
      );

      data.append(
        "Company / Pickup Location",
        corporateForm.location
      );

      data.append(
        "Additional Requirement",
        corporateForm.message || "Not Provided"
      );

      if (corporateForm.email) {
        data.append("replyto", corporateForm.email);
      }

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        setCorporateStatus("success");

        setCorporateForm({
          companyName: "",
          contactPerson: "",
          phone: "",
          email: "",
          requirement: "",
          location: "",
          message: "",
        });
      } else {
        console.error("Web3Forms Corporate Error:", result);
        setCorporateStatus("error");
      }
    } catch (error) {
      console.error("Corporate Submission Error:", error);
      setCorporateStatus("error");
    } finally {
      setCorporateLoading(false);
    }
  };

  return (
    <>
      {/* =====================================================
          PAGE BANNER
      ===================================================== */}

      <div className="sisf-banner sis-br-radius mt-3 position-relative">
        <div className="banner-img"></div>

        <div className="sisf-page-title sisf-m sisf-title--standard sisf-alignment--center">
          <div className="sisf-m-inner container">
            <div className="sisf-m-content sisf-content-grid">
              <h1 className="sisf-m-title text-white sis-text-anime-style-3 entry-title">
                Enquiry
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          ENQUIRY SECTION
      ===================================================== */}

      <section className="enquiry-section py-5">
        <div className="container">

          {/* =================================================
              CORPORATE ENQUIRY FORM
          ================================================= */}

          <div
            className="citysky-corporate-enquiry"
            data-aos="fade-up"
          >
            <div className="row align-items-stretch">

              {/* ================= LEFT SIDE ================= */}

              <div className="col-lg-4">
                <div className="citysky-corporate-info">

                  <div className="citysky-corporate-logo-box">
                    <img
                      src="/images/logo.jpg"
                      alt="CitySky Cabs"
                      className="citysky-corporate-logo"
                    />
                  </div>

                  <span className="citysky-corporate-small-title">
                    CORPORATE TRAVEL
                  </span>

                  <h2>
                    Corporate Cab
                    <br />
                    Enquiry
                  </h2>

                  <p>
                    Looking for professional transportation for your
                    company? Send us your requirement and our team will
                    assist you with a suitable corporate travel solution.
                  </p>

                  <div className="citysky-corporate-feature">
                    <i className="fa-solid fa-building"></i>

                    <div>
                      <strong>Corporate Transportation</strong>
                      <span>For companies & business travel</span>
                    </div>
                  </div>

                  <div className="citysky-corporate-feature">
                    <i className="fa-solid fa-car"></i>

                    <div>
                      <strong>Multiple Vehicle Options</strong>
                      <span>Cars, SUVs, Travellers & Buses</span>
                    </div>
                  </div>

                  <div className="citysky-corporate-feature">
                    <i className="fa-solid fa-user-tie"></i>

                    <div>
                      <strong>Business Travel Support</strong>
                      <span>Employee & official transportation</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* ================= RIGHT SIDE ================= */}

              <div className="col-lg-8">
                <div className="citysky-corporate-form-box">

                  <div className="citysky-corporate-form-heading">
                    <span>BUSINESS ENQUIRY</span>

                    <h3>
                      Tell Us Your Corporate Requirement
                    </h3>

                    <p>
                      Complete the form and send your corporate
                      transportation requirement to CitySky Cabs.
                      Our team will contact you with suitable options.
                    </p>
                  </div>

                  <form onSubmit={handleCorporateSubmit}>
                    <div className="row">

                      {/* COMPANY NAME */}

                      <div className="col-md-6 mb-3">
                        <div className="citysky-corporate-field">
                          <i className="fa-solid fa-building"></i>

                          <input
                            type="text"
                            name="companyName"
                            value={corporateForm.companyName}
                            onChange={handleCorporateChange}
                            placeholder="Company Name"
                            required
                          />
                        </div>
                      </div>

                      {/* CONTACT PERSON */}

                      <div className="col-md-6 mb-3">
                        <div className="citysky-corporate-field">
                          <i className="fa-solid fa-user-tie"></i>

                          <input
                            type="text"
                            name="contactPerson"
                            value={corporateForm.contactPerson}
                            onChange={handleCorporateChange}
                            placeholder="Contact Person"
                            required
                          />
                        </div>
                      </div>

                      {/* MOBILE */}

                      <div className="col-md-6 mb-3">
                        <div className="citysky-corporate-field">
                          <i className="fa-solid fa-phone"></i>

                          <input
                            type="tel"
                            name="phone"
                            value={corporateForm.phone}
                            onChange={handleCorporateChange}
                            placeholder="Mobile Number"
                            required
                          />
                        </div>
                      </div>

                      {/* EMAIL */}

                      <div className="col-md-6 mb-3">
                        <div className="citysky-corporate-field">
                          <i className="fa-solid fa-envelope"></i>

                          <input
                            type="email"
                            name="email"
                            value={corporateForm.email}
                            onChange={handleCorporateChange}
                            placeholder="Official Email"
                          />
                        </div>
                      </div>

                      {/* REQUIREMENT */}

                      <div className="col-md-6 mb-3">
                        <div className="citysky-corporate-field">
                          <i className="fa-solid fa-briefcase"></i>

                          <select
                            name="requirement"
                            value={corporateForm.requirement}
                            onChange={handleCorporateChange}
                            required
                          >
                            <option value="">
                              Select Requirement
                            </option>

                            <option value="Employee Pickup & Drop">
                              Employee Pickup & Drop
                            </option>

                            <option value="Corporate Cab Service">
                              Corporate Cab Service
                            </option>

                            <option value="Airport Transfer">
                              Corporate Airport Transfer
                            </option>

                            <option value="Executive Travel">
                              Executive Travel
                            </option>

                            <option value="Corporate Event Transportation">
                              Corporate Event Transportation
                            </option>

                            <option value="Staff Transportation">
                              Staff Transportation
                            </option>

                            <option value="Monthly Cab Contract">
                              Monthly Cab Requirement
                            </option>

                            <option value="Business Outstation Travel">
                              Business Outstation Travel
                            </option>

                            <option value="Other">
                              Other Requirement
                            </option>
                          </select>
                        </div>
                      </div>

                      {/* LOCATION */}

                      <div className="col-md-6 mb-3">
                        <div className="citysky-corporate-field">
                          <i className="fa-solid fa-location-dot"></i>

                          <input
                            type="text"
                            name="location"
                            value={corporateForm.location}
                            onChange={handleCorporateChange}
                            placeholder="Company / Pickup Location"
                            required
                          />
                        </div>
                      </div>

                      {/* MESSAGE */}

                      <div className="col-12 mb-3">
                        <div className="citysky-corporate-field citysky-corporate-textarea">
                          <i className="fa-solid fa-message"></i>

                          <textarea
                            name="message"
                            value={corporateForm.message}
                            onChange={handleCorporateChange}
                            rows="3"
                            placeholder="Tell us about number of employees, routes, shifts, vehicles or other requirements"
                          ></textarea>
                        </div>
                      </div>

                      {/* SUBMIT BUTTON */}

                      <div className="col-12">
                        <button
                          type="submit"
                          className="citysky-corporate-submit"
                          disabled={corporateLoading}
                        >
                          {corporateLoading ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2"></span>
                              Sending Enquiry...
                            </>
                          ) : (
                            <>
                              <i className="fa-solid fa-paper-plane"></i>

                              Send Corporate Enquiry

                              <i className="fa-solid fa-arrow-right"></i>
                            </>
                          )}
                        </button>
                      </div>

                      {/* STATUS */}

                      <div className="col-12 mt-3">
                        {corporateStatus === "success" && (
                          <div className="alert alert-success rounded-4 mb-0">
                            <i className="fa-solid fa-circle-check me-2"></i>

                            Thank you! Your corporate enquiry has
                            been submitted successfully. Our team
                            will contact you shortly.
                          </div>
                        )}

                        {corporateStatus === "error" && (
                          <div className="alert alert-danger rounded-4 mb-0">
                            <i className="fa-solid fa-circle-exclamation me-2"></i>

                            Something went wrong while sending your
                            corporate enquiry. Please try again.
                          </div>
                        )}
                      </div>

                    </div>
                  </form>

                </div>
              </div>

            </div>
          </div>

          {/* =================================================
              MAIN / FULL ENQUIRY FORM
          ================================================= */}

          <div className="enquiry-box">

            {/* HEADER */}

            <div className="text-center mb-5">

              <span className="small-title text-white">
                CITYSKY CABS
              </span>

              <h2 className="text-white">
                Get Your Best Cab Rental Quote
              </h2>

              <p className="text-white">
                Planning an airport transfer, local journey,
                outstation trip, corporate travel, family tour,
                wedding transportation or group journey? Share
                your travel details with CitySky Cabs and our
                team will help you choose the right vehicle and
                travel option for your requirements.
              </p>

            </div>

            {/* FORM */}

            <form onSubmit={handleSubmit}>
              <div className="row">

                {/* FULL NAME */}

                <div className="col-lg-6 mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* EMAIL */}

                <div className="col-lg-6 mb-4">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* PHONE */}

                <div className="col-lg-6 mb-4">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Mobile Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* VEHICLE */}

                <div className="col-lg-6 mb-4">
                  <select
                    className="form-select"
                    name="vehicle"
                    value={formData.vehicle}
                    onChange={handleChange}
                    required
                  >
                    <option value="">
                      Select Vehicle
                    </option>

                    <optgroup label="Sedan Cars">
                      <option value="Sedan">
                        Sedan
                      </option>

                      <option value="Dzire">
                        Dzire
                      </option>

                      <option value="Etios">
                        Etios
                      </option>
                    </optgroup>

                    <optgroup label="SUV Cars">
                      <option value="SUV">
                        SUV
                      </option>

                      <option value="Ertiga">
                        Ertiga
                      </option>

                      <option value="Innova">
                        Innova
                      </option>

                      <option value="Innova Crysta">
                        Innova Crysta
                      </option>
                    </optgroup>

                    <optgroup label="Premium Vehicles">
                      <option value="Premium Sedan">
                        Premium Sedan
                      </option>

                      <option value="Premium SUV">
                        Premium SUV
                      </option>

                      <option value="Luxury Car">
                        Luxury Car
                      </option>
                    </optgroup>

                    <optgroup label="Traveller & Group Vehicles">
                      <option value="Tempo Traveller">
                        Tempo Traveller
                      </option>

                      <option value="Urbania">
                        Force Urbania
                      </option>

                      <option value="Mini Bus">
                        Mini Bus
                      </option>

                      <option value="Bus">
                        Bus
                      </option>
                    </optgroup>
                  </select>
                </div>

                {/* PICKUP */}

                <div className="col-lg-6 mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Pickup Location"
                    name="pickup"
                    value={formData.pickup}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* DROP */}

                <div className="col-lg-6 mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Destination / Drop Location"
                    name="drop"
                    value={formData.drop}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* TRIP TYPE */}

                <div className="col-lg-6 mb-4">
                  <select
                    className="form-select"
                    name="triptype"
                    value={formData.triptype}
                    onChange={handleChange}
                  >
                    <option value="Outstation Trip">
                      Outstation Trip
                    </option>

                    <option value="One Way Trip">
                      One Way Trip
                    </option>

                    <option value="Round Trip">
                      Round Trip
                    </option>

                    <option value="Local Cab">
                      Local Cab
                    </option>

                    <option value="Airport Transfer">
                      Airport Transfer
                    </option>

                    <option value="Family Tour">
                      Family Tour
                    </option>

                    <option value="Group Tour">
                      Group Tour
                    </option>

                    <option value="Corporate Travel">
                      Corporate Travel
                    </option>

                    <option value="Wedding Travel">
                      Wedding Travel
                    </option>

                    <option value="Railway Station Transfer">
                      Railway Station Transfer
                    </option>

                    <option value="Hotel Transfer">
                      Hotel Transfer
                    </option>

                    <option value="School / College Trip">
                      School / College Trip
                    </option>

                    <option value="Picnic">
                      Picnic
                    </option>

                    <option value="Pilgrimage / Darshan">
                      Pilgrimage / Darshan
                    </option>
                  </select>
                </div>

                {/* PASSENGERS */}

                <div className="col-lg-6 mb-4">
                  <select
                    className="form-select"
                    name="passengers"
                    value={formData.passengers}
                    onChange={handleChange}
                  >
                    <option value="1-4">
                      1 - 4 Passengers
                    </option>

                    <option value="5-6">
                      5 - 6 Passengers
                    </option>

                    <option value="7-9">
                      7 - 9 Passengers
                    </option>

                    <option value="10-13">
                      10 - 13 Passengers
                    </option>

                    <option value="14-17">
                      14 - 17 Passengers
                    </option>

                    <option value="18-20">
                      18 - 20 Passengers
                    </option>

                    <option value="21-25">
                      21 - 25 Passengers
                    </option>

                    <option value="26-30">
                      26 - 30 Passengers
                    </option>

                    <option value="31-35">
                      31 - 35 Passengers
                    </option>

                    <option value="36-40">
                      36 - 40 Passengers
                    </option>

                    <option value="41-50">
                      41 - 50 Passengers
                    </option>

                    <option value="50+">
                      50+ Passengers
                    </option>
                  </select>
                </div>

                {/* DATE */}

                <div className="col-lg-6 mb-4">
                  <input
                    type="date"
                    className="form-control"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date()
                      .toISOString()
                      .split("T")[0]}
                    required
                  />
                </div>

                {/* TIME */}

                <div className="col-lg-6 mb-4">
                  <input
                    type="time"
                    className="form-control"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                  />
                </div>

                {/* MESSAGE */}

                <div className="col-12 mb-4">
                  <textarea
                    rows="5"
                    className="form-control"
                    placeholder="Tell us about your trip, destination, number of days, group size, vehicle requirement or any special travel requirements"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {/* SUBMIT */}

                <div className="col-12 text-center">
                  <button
                    type="submit"
                    className="btn btn-danger px-5 py-3 rounded-pill fw-bold"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2"></span>
                        Sending Enquiry...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane me-2"></i>
                        Get Best Cab Quote
                      </>
                    )}
                  </button>
                </div>

                {/* STATUS */}

                <div className="col-12 mt-4 text-center">

                  {status === "success" && (
                    <div className="alert alert-success rounded-4">
                      <i className="fas fa-check-circle me-2"></i>

                      Thank you! Your CitySky Cabs enquiry has
                      been submitted successfully. Our team will
                      contact you shortly with the suitable
                      vehicle option and travel quote.
                    </div>
                  )}

                  {status === "error" && (
                    <div className="alert alert-danger rounded-4">
                      <i className="fas fa-times-circle me-2"></i>

                      Something went wrong while submitting your
                      enquiry. Please try again or contact
                      CitySky Cabs directly.
                    </div>
                  )}

                </div>

              </div>
            </form>

          </div>

        </div>
      </section>
    </>
  );
};

export default Enquiry;