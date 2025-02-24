// src/pages/SansEngagement.js

import React from 'react';
import './SansEngagement.css';

const SansEngagement = ({ image1, image2 }) => {
  return (
    <div className="sans-engagement-container">
      <h1>Travailler sans Engagement</h1>
      <p>
        Chez KITOKO-SERVICE, nous savons que chaque client a des besoins différents. Nous offrons des services sans engagement.
      </p>
      <p>
        Testez nos services sans engagement prolongé. Vous pouvez décider à tout moment de poursuivre ou de modifier notre collaboration.
      </p>
      <p>
        Nous voulons établir une relation de confiance basée sur la transparence et la satisfaction, sans pression.
      </p>

      <div className="sans-engagement-image-container">
        <img src={image1} alt="Travailler sans engagement" className="sans-engagement-image" />
        <img src={image2} alt="Deuxième image" className="sans-engagement-image" />
      </div>
    </div>
  );
};

export default SansEngagement;
