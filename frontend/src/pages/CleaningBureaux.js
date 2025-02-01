import React from 'react';
import './CleaningBureaux.css';

const CleaningBureaux = ({ image }) => {
  return (
    <div className="cleaning-container">
      <div className="cleaning-text">
        <h1 className="cleaning-title">Conseils de Nettoyage de Bureaux</h1>
        <p className="cleaning-description">
          📌 Un bureau propre améliore la productivité et la santé des employés.
        </p>

        <p>Assurez-vous de dépoussiérer régulièrement les meubles, les écrans d'ordinateur et les claviers.</p>
        <p>Utilisez des désinfectants adaptés pour nettoyer les surfaces fréquemment touchées.</p>
        <p>Passez l’aspirateur et lavez les sols chaque jour pour éliminer les bactéries et la poussière.</p>
        <p>Videz les poubelles quotidiennement pour éviter les mauvaises odeurs et la prolifération de microbes.</p>
        <p>Aérez les bureaux au moins 10 minutes par jour pour renouveler l’air et éviter l’accumulation de polluants.</p>
        <p>Nettoyez les stores et rideaux au moins une fois par mois pour éliminer les allergènes.</p>
        <p>Désinfectez les espaces communs (cafétéria, salle de réunion) pour assurer une hygiène optimale.</p>
        <p>Utilisez des produits écologiques pour protéger l’environnement et la santé des employés.</p>
        <p>Mettez à disposition du gel hydroalcoolique et des lingettes désinfectantes sur chaque bureau.</p>
        <p>Assurez un bon entretien des systèmes de ventilation et de climatisation pour éviter les allergies.</p>
      </div>

      <div className="cleaning-image-container">
        <img src={image} alt="Nettoyage de bureaux" className="cleaning-image" />
      </div>
    </div>
  );
};

export default CleaningBureaux;
