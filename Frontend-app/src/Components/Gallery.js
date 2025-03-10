import React, { useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [modalContent, setModalContent] = useState(null);

  const handleImageClick = (src) => {
    setModalContent(<img src={src} className="modal-img" alt="modal-content" />);
  };

  const handleCloseModal = () => {
    setModalContent(null);
  };

  const images = [
    "./image/ModelStyle2.jpg", 
    "./image/GalleryImage1.jpg", 
    "./image/GalleryImage2.jpg",
    "./image/GalleryImage3.jpg",
    "./image/GalleryImage4.jpg",
    "./image/GalleryImage5.jpg",
    "./image/GalleryImage6.jpg",
    "./image/GalleryImage7.jpg",
    "./image/GalleryImage8.jpg",
    "./image/GalleryImage2.jpg",
    "./image/massage.jpg",
    "./image/Salon3jpg.jpg",
    "./image/Salon4jpg.jpg",
    "./image/Salon5jpg.jpg",
    "./image/Salon6.jpg",
    "./image/salon7.jpg",
    "./image/salon8.jpg",
    "./image/salon9.jpg",
    "./image/salon11.png",
    "./image/washing-hair.jpg",
    "./image/GalleryImage9.jpg",
    "./image/GalleryImage10.jpg",
    "./image/GalleryImage11.jpg",
    "./image/GalleryImage12.jpg",
    "./image/GalleryImage7.jpg",
    "./image/GalleryImage8.jpg",
    "./image/GalleryImage2.jpg",
    "./image/massage.jpg",
    "./image/Salon3jpg.jpg"
  ];

  return (
    <div>
      <h1>Gallery</h1>
      <hr />
      <div id="gallery" className="container-fluid">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            className="img-responsive"
            alt={`Gallery Item ${index + 1}`}
            onClick={() => handleImageClick(src)}
          />
        ))}
      </div>

      {modalContent && (
        <div id="myModal" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">{modalContent}</div>
              <button className="close-modal" onClick={handleCloseModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
