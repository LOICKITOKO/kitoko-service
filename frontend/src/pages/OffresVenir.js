import React from 'react';
import { Link } from 'react-router-dom'; // Assurez-vous d'importer Link
import './OffresVenir.css'; // Si vous avez un fichier CSS spécifique pour cette page

const OffresVenir = () => {
  return (
    <div className="offres-venir">
      <h1>Offres à Venir</h1>
      
      {/* Section : Promotions sur les Produits de Nettoyage */}
      <div className="offer-category">
        <h2>Promotions sur les Produits de Nettoyage</h2>
        <ul>
          <li><Link to="/Offres1">Réductions sur les détergents et désinfectants professionnels.</Link></li>
          <li><Link to="/Offres2">Packs éco-responsables à prix réduit.</Link></li>
          <li><Link to="/Offres3">Offres spéciales sur les aspirateurs et équipements de nettoyage.</Link></li>
        </ul>
      </div>
      
      {/* Section : Services de Nettoyage en Promotion */}
      <div className="offer-category">
        <h2>Services de Nettoyage en Promotion</h2>
        <ul>
          <li><Link to="/Offres4">Offre spéciale pour les nouveaux clients : -20% sur la première prestation.</Link></li>
          <li><Link to="/Offres5">Réduction sur les abonnements mensuels de nettoyage régulier.</Link></li>
          <li><Link to="/Offres6">Nettoyage gratuit d’une zone spécifique pour tester nos services.</Link></li>
        </ul>
      </div>
      
      {/* Section : Programme de Fidélité */}
      <div className="offer-category">
        <h2>Programme de Fidélité</h2>
        <ul>
          <li><Link to="/Offres7">Gagnez des points à chaque prestation et échangez-les contre des réductions.</Link></li>
          <li><Link to="/Offres8">Offres exclusives pour les clients réguliers.</Link></li>
          <li><Link to="/Offres9">Bonus et cadeaux pour les membres VIP.</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default OffresVenir;
