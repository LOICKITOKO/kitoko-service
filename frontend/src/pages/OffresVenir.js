import React from 'react';
import './OffresVenir.css';

const UpcomingOffers = () => {
  return (
    <div className="upcoming-offers-page">
      <h1>Offres à Venir</h1>
      
      {/* Section : Promotions sur les Produits de Nettoyage */}
      <div className="offer-category">
        <h2>Promotions sur les Produits de Nettoyage</h2>
        <ul>
          <li>Réductions sur les détergents et désinfectants professionnels.</li>
          <li>Packs éco-responsables à prix réduit.</li>
          <li>Offres spéciales sur les aspirateurs et équipements de nettoyage.</li>
        </ul>
      </div>
      
      {/* Section : Services de Nettoyage en Promotion */}
      <div className="offer-category">
        <h2>Services de Nettoyage en Promotion</h2>
        <ul>
          <li>Offre spéciale pour les nouveaux clients : -20% sur la première prestation.</li>
          <li>Réduction sur les abonnements mensuels de nettoyage régulier.</li>
          <li>Nettoyage gratuit d’une zone spécifique pour tester nos services.</li>
        </ul>
      </div>
      
      {/* Section : Programme de Fidélité */}
      <div className="offer-category">
        <h2>Programme de Fidélité</h2>
        <ul>
          <li>Gagnez des points à chaque prestation et échangez-les contre des réductions.</li>
          <li>Offres exclusives pour les clients réguliers.</li>
          <li>Bonus et cadeaux pour les membres VIP.</li>
        </ul>
      </div>
    </div>
  );
};

export default UpcomingOffers;
