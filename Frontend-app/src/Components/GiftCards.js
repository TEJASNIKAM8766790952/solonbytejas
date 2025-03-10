import React, { useState } from 'react';
import './GiftCards.css'; // Ensure this CSS file is correctly linked

const GiftCards = () => {
    const [showTerms, setShowTerms] = useState(false);
    const [showOfferDetails, setShowOfferDetails] = useState(false);

    const toggleTerms = () => {
        setShowTerms(prev => !prev);
    };

    const toggleOfferDetails = () => {
        setShowOfferDetails(prev => !prev);
    };

    return (
        <div className="container5">
            <div className="Div5">
                <div className="container px-5">
                    <div className="align-items-center column-reverse-addclass gx-5 row">
                        <div className="col-lg-6 order-lg-2">
                            <div className="py-5">
                                <h2><br />GIFT CARDS FOR YOUR LOVED ONES</h2>
                                <p>Hair Envy Studio offers a wide range of services designed to help your loved ones look and feel their best. Whether it's a rejuvenating facial, a relaxing massage, or a stylish new haircut, a gift card from Hair Envy Studio is sure to bring joy and relaxation.</p>
                                <div>
                                    <button className="button-secondary" onClick={toggleOfferDetails} title="Buy Gift Cards">
                                        BUY NOW
                                    </button>
                                </div>
                                <p>
                                    <em>
                                        <button className='apply' onClick={toggleTerms}>*Terms & Conditions apply</button>
                                    </em>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <div className="py-5">
                                <img alt="Gift Cards" className="img-fluid" src="/image/giftcards.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Conditional Rendering for Offer Details in Modal */}
            {showOfferDetails && (
                <div className="offer-modal">
                    <div className="offer-content">
                        <h3>Special Offer with Gift Cards</h3>
                        <p>Get exclusive discounts on services when you purchase a gift card.</p>
                        <div className="offer-images">
                            <img src="/image/Card1.jpg" alt="Offer 1" className="offer-image" />
                            <img src="/image/Card5.jpg" alt="Offer 2" className="offer-image" />
                            <img src="/image/Card2.jpg" alt="Offer 3" className="offer-image" />
                            <img src="/image/Card6.jpg" alt="Offer 4" className="offer-image" />
                        </div>
                        <button className="close" onClick={toggleOfferDetails}>Close</button>
                    </div>
                </div>
            )}

            {/* Conditional Rendering for Terms and Conditions */}
            {showTerms && (
                <div className="terms-modal">
                    <div className="terms-content">
                        <h2>Terms and Conditions</h2>
                        <ul>
                            <li>This E-Gift Card can be redeemed only once and must be used in full.</li>
                            <li>It is valid for redemption against services and products at all Hair Envy Studio locations.</li>
                            <li>The E-Gift Card holder will not receive cash or cheque in exchange for any part of the card.</li>
                            <li>If your purchase exceeds the value of the gift card, you may pay difference using any accepted payment method.</li>
                            <li>This gift card will not be accepted or redeemed after the expiration date or if it has already been used.</li>
                            <li>Hair Envy Studio is not responsible for replacing or compensating for any lost or mishandled E-Gift Cards.</li>
                            <li>Only valid E-Gift Cards, at the sole discretion of Hair Envy Studio, will be accepted for redemption.</li>
                            <li>Please note that no returns or refunds will be provided for E-Gift Cards once issued.</li>
                        </ul>
                        <button className="close" onClick={toggleTerms}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GiftCards;



