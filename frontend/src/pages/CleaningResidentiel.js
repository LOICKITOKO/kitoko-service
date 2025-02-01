import React from 'react';
import './CleaningResidentiel.css';

const CleaningResidentiel = ({ image }) => {
  return (
    <div className="cleaning-container">
      <div className="cleaning-text">
        <h1 className="cleaning-title">Conseils de Nettoyage Résidentiel</h1>
        <p className="cleaning-description">
          🏡 Un intérieur propre contribue au bien-être et à une meilleure qualité de vie.
        </p>

        <p>Faites un ménage quotidien des pièces principales.</p>
        <p>Aspirez et lavez les sols au moins une fois par semaine.</p>
        <p>Nettoyez et désinfectez les poignées de porte, interrupteurs et télécommandes.</p>
        <p>Aérez les pièces plusieurs fois par jour.</p>
        <p>Dépoussiérez les meubles et les objets décoratifs.</p>
        <p>Nettoyez la cuisine en profondeur pour éviter les accumulations de graisse.</p>
        <p>Utilisez des produits naturels comme le vinaigre blanc et le bicarbonate de soude.</p>
        <p>Lavez régulièrement les rideaux et tapis pour éliminer les acariens.</p>
        <p>Changez les draps et housses de coussin toutes les semaines.</p>
        <p>Désinfectez les salles de bains pour éviter les moisissures et les germes.</p>
      </div>

      <div className="cleaning-image-container">
        <img src={image} alt="Nettoyage résidentiel" className="cleaning-image" />
      </div>
    </div>
  );
};

export default CleaningResidentiel;
