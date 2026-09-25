import React, { useState } from "react";
import "./Enquiry.css";

const Enquiry = () => {
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    const data = new FormData();

    data.append(
      "access_key",
      "9752018f-9d16-424a-b577-bf1ff3c564af"
    );

    data.append(
      "subject",
      "New CitySky Cabs Travel Enquiry"
    );

    data.append(
      "from_name",
      "CitySky Cabs Website"
    );

    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.json();

      console.log(result);

      if (result.success) {
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
        console.log(result);
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <>
      {/* =================================
          PAGE BANNER
      ================================== */}

      <div className="sisf-banner sis-br-radius mt-3 position-relative">
        <div className="banner-img">
          {/* <figure>
            <img
              src="/images/page-banner.jpg"
              alt="CitySky Cabs Car Rental and Cab Services"
            />
          </figure> */}
        </div>

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

      {/* =================================
          ENQUIRY SECTION
      ================================== */}

      <section className="enquiry-section py-5">
        <div className="container">
          <div className="enquiry-box">

            {/* =================================
                HEADER
            ================================== */}

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

            {/* =================================
                FORM
            ================================== */}

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
                      contact you shortly with the suitable vehicle
                      option and travel quote.
                    </div>
                  )}

                  {status === "error" && (
                    <div className="alert alert-danger rounded-4">
                      <i className="fas fa-times-circle me-2"></i>

                      Something went wrong while submitting your
                      enquiry. Please try again or contact CitySky
                      Cabs directly.
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