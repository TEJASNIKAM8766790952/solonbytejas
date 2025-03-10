import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="Div3">
      <div className="page">
        <h1 className="TRENDSETTING"><b>TRENDING SERVICES</b></h1>
      </div>
      <div className="page2">
        <p className="TRENDSETTING1">Our runway experts have curated some of the most popular services at Hair Envy Studio, just for you.</p>
      </div>
      <div className="TRENDSETTING2">
        <p>Take your pick and head to your nearest salon and get started on your makeover!</p>
      </div>
      <div className="ModelImage1">
        {/* Hair Cutting Style Card */}
        <div className="card">
          <img src="./image/ModelStyle1.jpg" width="350px" height="250px" alt="Model Style 1"/>
          <div className="Image-Title">
            <h4>
              <b>
                <a href="/videos/HairCuttingStyle.mp4" target="_blank" rel="noopener noreferrer">
                  Hair Cutting Style
                </a>
              </b>
            </h4>
          </div>
        </div>

        {/* Hair Washing Style Card */}
        <div className="card2">
          <img src="./image/washing-hair.jpg" width="350px" height="250px" alt="Hair Washing"/>
          <div className="Image-Title2">
            <h4>
              <b>
                <a href="/videos/HairWashingStyle.mp4" target="_blank" rel="noopener noreferrer">
                  Hair Washing Style
                </a>
              </b>
            </h4>
          </div>
        </div>

        {/* Hair Massage Style Card */}
        <div className="card3">
          <img src="./image/massage.jpg" width="350px" height="250px" alt="Hair Massage"/>
          <div className="Image-Title3">
            <h4>
              <b>
                <a href="/videos/HairMassageStyle.mp4" target="_blank" rel="noopener noreferrer">
                  Hair Massage Style
                </a>
              </b>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
