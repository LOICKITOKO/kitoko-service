import React from 'react';
import './CleaningRestaurant.css';

const CleaningRestaurant = ({ image }) => {
  return (
    <div className="cleaning-container">
      <div className="cleaning-text">
        <h1 className="cleaning-title">Conseils de Nettoyage des Restaurants</h1>
        <p className="cleaning-description">
          🍽️ Un restaurant propre garantit une expérience client agréable et conforme aux normes sanitaires.
        </p>

        <p>Nettoyez et désinfectez les tables après chaque service.</p>
        <p>Assurez-vous que la cuisine est toujours propre et bien rangée.</p>
        <p>Désinfectez régulièrement les poignées de porte, menus et terminaux de paiement.</p>
        <p>Passez la serpillière plusieurs fois par jour dans les zones de préparation.</p>
        <p>Vérifiez et nettoyez les hottes et systèmes de ventilation.</p>
        <p>Maintenez une propreté irréprochable dans les sanitaires du restaurant.</p>
        <p>Éliminez les déchets alimentaires conformément aux réglementations.</p>
        <p>Stockez les aliments dans des conditions d’hygiène optimales.</p>
        <p>Encouragez le lavage des mains pour tout le personnel.</p>
        <p>Formez les employés aux bonnes pratiques de nettoyage et d’hygiène.</p>
      </div>

      <div className="cleaning-image-container">
        <img src={image} alt="Nettoyage restaurant" className="cleaning-image" />
      </div>
    </div>
  );
};

export default CleaningRestaurant;
