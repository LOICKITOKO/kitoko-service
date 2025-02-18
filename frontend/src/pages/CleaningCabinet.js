import React from 'react';
import './CleaningCabinet.css';

const CleaningCabinet = ({ image }) => {
  return (
    <div className="cleaning-container">
      <div className="cleaning-text">
        <h1 className="cleaning-title">Conseils de Nettoyage des Cabinets Médicaux</h1>
        <p className="cleaning-description">
          🏥 Un cabinet médical propre assure la sécurité des patients et du personnel.
        </p>

        <p>Désinfectez les surfaces de travail après chaque consultation.</p>
        <p>Nettoyez et stérilisez les équipements médicaux régulièrement.</p>
        <p>Assurez-vous que les sols sont exempts de poussière et de bactéries.</p>
        <p>Désinfectez les poignées de porte, interrupteurs et sièges d’attente.</p>
        <p>Éliminez correctement les déchets médicaux selon les protocoles en vigueur.</p>
        <p>Aérez les salles de consultation pour renouveler l’air.</p>
        <p>Utilisez des produits de nettoyage adaptés aux environnements médicaux.</p>
        <p>Vérifiez régulièrement les stocks de matériel de désinfection.</p>
        <p>Encouragez le lavage des mains et mettez à disposition du gel hydroalcoolique.</p>
        <p>Formez le personnel aux normes d’hygiène strictes pour prévenir les infections.</p>
      </div>

      <div className="cleaning-image-container">
        <img src={image} alt="Nettoyage cabinet médical" className="cleaning-image" />
      </div>
    </div>
  );
};

export default CleaningCabinet;
