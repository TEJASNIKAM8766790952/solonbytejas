import React, { useState } from 'react';
import './TrendingSection.css';

const TrendingSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleReadMoreClick = () => {
        setIsModalOpen(!isModalOpen); // Toggle modal visibility
    };

    return (
        <div className="py-5 trending-section">
            <div className="container px-5">
                <div className="row gx-5 column-reverse-addclass">
                    <div className="col-lg-5">
                        <div className="p-1">
                            <h2>What’s Trending?</h2><br />
                            <p>
                                Introducing the <b>Hair Envy Studio Stylish Haircuts Collection-</b> At Hair Envy Studio, we believe that grooms deserve to look their best too. Our exclusive male grooming services are designed to give you the perfect look for your big day. From precision haircuts to flawless skin treatments, we offer a range of services tailored to meet the unique needs of men.
                            </p>
                            <p>
                                <i>Slay every look. Every Occasion&nbsp; Go Bling. Go OTT with Hair Envy Studio</i><br /><br />
                                Check out our complete Stylish Haircuts Collection.
                            </p>
                        </div>
                        <div>
                            <button className="button-secondary" onClick={handleReadMoreClick}>
                                {isModalOpen ? 'Close' : 'Read more'}
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="py-5">
                            <img alt="Trending Style" className="img-fluid" src="./image/ModelStyle2.jpg" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Section */}
            {isModalOpen && (
                <div className="trending-modal">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <video className="img-fluid" autoPlay loop controls muted>
                                    <source src="/videos/Trending.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="col-lg-6">
                                <div className="trending-tips">
                                    <h3>Current Trends</h3>
                                    <ul className="trending-tips2">
                                        <li><strong>Shag Haircut:</strong> A layered look that adds volume and movement, perfect for long hair.</li>
                                        <li><strong>Curtain Bangs:</strong> Soft bangs that frame the face, for many hair lengths and types.</li>
                                        <li><strong>Textured Bob:</strong> A chic, versatile cut that works well with various hair types.</li>
                                        <li><strong>Pixie Cut:</strong> A bold, low-maintenance haircut that’s perfect for a fresh look.</li>
                                        <li><strong>Long Layers:</strong> Adds dimension and movement, great for long hair.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <button className="close" onClick={handleReadMoreClick}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TrendingSection;
