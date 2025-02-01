import React from 'react';
import './CleaningMagasin.css';

const CleaningMagasin = ({ image }) => {
  return (
    <div className="cleaning-container">
      <div className="cleaning-text">
        <h1 className="cleaning-title">Conseils de Nettoyage de Magasin</h1>
        <p className="cleaning-description">
          🛍 Un magasin propre attire plus de clients et donne une image professionnelle.
        </p>

        <p>Nettoyez quotidiennement les vitrines.</p>
        <p>Aspirez et lavez les sols régulièrement.</p>
        <p>Désinfectez les caisses et terminaux de paiement.</p>
        <p>Nettoyez les étagères et présentoirs.</p>
        <p>Aérez le magasin pour renouveler l’air.</p>
        <p>Utilisez des désodorisants légers pour une ambiance agréable.</p>
        <p>Nettoyez les cabines d’essayage et les miroirs plusieurs fois par jour.</p>
      </div>

      <div className="cleaning-image-container">
        <img src={image} alt="Nettoyage de magasin" className="cleaning-image" />
      </div>
    </div>
  );
};

export default CleaningMagasin;
