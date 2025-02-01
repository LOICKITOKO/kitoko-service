import React from 'react';
import './CleaningHotelier.css';

const CleaningHotelier = ({ image }) => {
  return (
    <div className="cleaning-container">
      <div className="cleaning-text">
        <h1 className="cleaning-title">Conseils de Nettoyage Hôtelier</h1>
        <p className="cleaning-description">
          🏨 Un hôtel propre garantit une expérience client irréprochable.
        </p>

        <p>Changez les draps et les serviettes quotidiennement.</p>
        <p>Nettoyez et désinfectez les salles de bain après chaque client.</p>
        <p>Passez l’aspirateur dans les chambres et les couloirs.</p>
        <p>Désinfectez les télécommandes, interrupteurs et téléphones.</p>
        <p>Aérez chaque chambre après le départ des clients.</p>
        <p>Utilisez des produits non allergènes pour éviter les réactions des clients.</p>
        <p>Vérifiez régulièrement l’état des meubles et remplacez ceux abîmés.</p>
        <p>Nettoyez les espaces communs plusieurs fois par jour.</p>
        <p>Assurez un bon entretien des restaurants et cuisines d’hôtel.</p>
        <p>Formez le personnel aux protocoles stricts de nettoyage et d’hygiène.</p>
      </div>

      <div className="cleaning-image-container">
        <img src={image} alt="Nettoyage hôtelier" className="cleaning-image" />
      </div>
    </div>
  );
};

export default CleaningHotelier;
