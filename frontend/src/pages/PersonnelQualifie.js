// src/pages/PersonnelQualifie.js

import React from 'react';
import './PersonnelQualifie.css';

const PersonnelQualifie = ({ image1, image2 }) => {
  return (
    <div className="personnel-container">
      <div className="personnel-text">
        <h1 className="personnel-title">Notre Personnel Qualifié</h1>
        <p className="personnel-description">
          Chez KITOKO-SERVICE, nous garantissons un personnel qualifié et formé selon des standards rigoureux.
        </p>
        <p>
          Chaque membre est soigneusement sélectionné pour ses compétences et son professionnalisme.
        </p>
        <p>Nous respectons strictement les normes de sécurité et d'hygiène.</p>
        <p>Nous adoptons les meilleures pratiques pour assurer un service de qualité.</p>
        <p>Notre équipe est fiable, professionnelle et attentive aux détails.</p>
        <p>Nous formons nos employés sur les dernières technologies de nettoyage.</p>
      </div>

      <div className="personnel-image-container">
        <img src={image1} alt="Personnel qualifié" className="personnel-image" />
        <img src={image2} alt="Deuxième image du personnel" className="personnel-image" />
      </div>
    </div>
  );
};

export default PersonnelQualifie;
