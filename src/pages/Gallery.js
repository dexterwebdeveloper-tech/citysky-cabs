import React, { useState } from "react";

const galleryData = [
  
  {
  id: 1,
  image: "/images/gallery/1.jpeg",
},
{
  id: 2,
  image: "/images/gallery/2.jpeg",
},
{
  id: 3,
  image: "/images/gallery/3.jpeg",
},
{
  id: 4,
  image: "/images/gallery/4.jpeg",
},
{
  id: 5,
  image: "/images/gallery/5.jpeg",
},
// {
//   id: 6,
//   image: "/images/gallery/6.jpeg",
// },
{
  id: 9,
  image: "/images/gallery/9.jpeg",
},
{
  id: 7,
  image: "/images/gallery/7.jpeg",
},
{
  id: 8,
  image: "/images/gallery/8.jpeg",
},

{
  id: 10,
  image: "/images/gallery/10.jpeg",
},
{
  id: 11,
  image: "/images/gallery/11.jpeg",
},
{
  id: 12,
  image: "/images/gallery/12.jpeg",
},
{
  id: 13,
  image: "/images/gallery/13.jpeg",
},
{
  id: 14,
  image: "/images/gallery/14.jpeg",
},
{
  id: 15,
  image: "/images/gallery/15.jpeg",
},
{
  id: 16,
  image: "/images/gallery/16.jpeg",
},
 
  {
    id: 1,
    image: "/images/gallery/1.jpeg",
    title: "Swift Dzire",
    category: "Sedan",
  },
  {
    id: 1,
    image: "/images/fleet/Swift-Dzire.jpg",
    title: "Swift Dzire",
    category: "Sedan",
  },
  {
    id: 2,
    image: "/images/fleet/Maruti-Ertiga.jpg",
    title: "Maruti Ertiga",
    category: "MPV",
  },
  {
    id: 3,
    image: "/images/fleet/Toyota-Rumion.jpg",
    title: "Toyota Rumion",
    category: "MPV",
  },
  {
    id: 4,
    image: "/images/fleet/Kia-Carens.jpg",
    title: "Kia Carens",
    category: "MPV",
  },
  {
    id: 5,
    image: "/images/fleet/Innova-Cab.jpg",
    title: "Toyota Innova",
    category: "MUV",
  },
  {
    id: 6,
    image: "/images/fleet/Innova-Crysta.jpg",
    title: "Toyota Innova Crysta",
    category: "Premium MUV",
  },
  {
    id: 7,
    image: "/images/fleet/Tempo-Traveller.jpg",
    title: "Tempo Traveller",
    category: "Tempo Traveller",
  },
  {
    id: 8,
    image: "/images/fleet/Urbania-Bus.jpg",
    title: "Force Urbania",
    category: "Urbania",
  },
  {
    id: 9,
    image: "/images/fleet/Mini-Bus.jpg",
    title: "Mini Bus",
    category: "Mini Bus",
  },
];


const Gallery = () => {
const [selectedImage, setSelectedImage] = useState(null);

const openLightbox = (index) => {
setSelectedImage(index);
};

const closeLightbox = () => {
setSelectedImage(null);
};

const nextImage = () => {
setSelectedImage((prev) =>
prev === galleryData.length - 1 ? 0 : prev + 1
);
};

const previousImage = () => {
setSelectedImage((prev) =>
prev === 0 ? galleryData.length - 1 : prev - 1
);
};

return (
<>

 <div className="sisf-banner sis-br-radius mt-3 position-relative">
      <div className="sisf-page-title sisf-m sisf-title--standard sisf-alignment--center">
        <div className="sisf-m-inner container">
          <div className="sisf-m-content sisf-content-grid">
            <h1 className="sisf-m-title text-white sis-text-anime-style-3 entry-title">
              Gallery
            </h1>
          </div>
        </div>
      </div>
    </div>
{/* Gallery Section */} <section className="luxury-gallery-section py-5"> <div className="container">


      {/* Section Heading */}
      <div className="row justify-content-center mb-5">
        <div className="col-lg-8 text-center">
          <span className="gallery-subtitle">
            OUR GALLERY
          </span>

          <h2 className="gallery-title">
            Explore Our Luxury Travel Experience
          </h2>

          <p className="gallery-description">
            Take a closer look at our premium vehicles, professional
            chauffeur services, corporate travel solutions, airport
            transfers, and special event transportation.
          </p>
        </div>
      </div>

      {/* Gallery */}
      <div className="row g-4">
        {galleryData.map((item, index) => (
          <div
            className="col-lg-4 col-md-4 col-sm-6"
            key={item.id}
          >
            <div
              className={`gallery-card gallery-card-${(index % 2) + 1}`}
              onClick={() => openLightbox(index)}
            >
              <div className="gallery-image-wrapper">

                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-image"
                />

                <div className="gallery-overlay">
                  <div className="gallery-view-icon">
                    <i className="fa-solid fa-expand"></i>
                  </div>

                  <div className="gallery-overlay-content">
                    <span>{item.category}</span>
                    <h3>{item.title}</h3>
                  </div>
                </div>

              </div>

              <div className="gallery-card-bottom">
                <span className="gallery-number">
                  0{item.id}
                </span>

                <div>
                  <h4>{item.title}</h4>
                  <p>{item.category}</p>
                </div>

                <div className="gallery-arrow">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>

  {/* Lightbox */}
  {selectedImage !== null && (
    <div
      className="gallery-lightbox"
      onClick={closeLightbox}
    >

      {/* Close */}
      <button
        className="gallery-close"
        onClick={closeLightbox}
        aria-label="Close Gallery"
      >
        <i className="fa-solid fa-xmark"></i>
      </button>

      {/* Previous */}
      <button
        className="gallery-navigation gallery-prev"
        onClick={(e) => {
          e.stopPropagation();
          previousImage();
        }}
        aria-label="Previous Image"
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      {/* Image Content */}
      <div
        className="gallery-lightbox-content"
        onClick={(e) => e.stopPropagation()}
      >

        <img
          src={galleryData[selectedImage].image}
          alt={galleryData[selectedImage].title}
          className="gallery-lightbox-image"
        />

        <div className="gallery-lightbox-info">
          <div>
            <span>
              {galleryData[selectedImage].category}
            </span>

            <h3>
              {galleryData[selectedImage].title}
            </h3>
          </div>

          <div className="gallery-counter">
            {selectedImage + 1} / {galleryData.length}
          </div>
        </div>

      </div>

      {/* Next */}
      <button
        className="gallery-navigation gallery-next"
        onClick={(e) => {
          e.stopPropagation();
          nextImage();
        }}
        aria-label="Next Image"
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>

    </div>
  )}
</>


);
};

export default Gallery;
