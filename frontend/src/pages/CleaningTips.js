import React from 'react';
import './CleaningTips.css';

const CleaningTips = () => {
  return (
    <div className="cleaning-tips-page">
      <h1>Conseils de Nettoyage</h1>
      <div className="cleaning-category">
        <h2>Nettoyage de bureaux</h2>
        <ul>
          <li>Planifiez un calendrier régulier : Organisez un planning de nettoyage quotidien, hebdomadaire et mensuel.</li>
          <li>Désinfectez les surfaces fréquemment touchées : poignées, claviers, souris, téléphones, interrupteurs.</li>
          <li>Nettoyez les équipements informatiques avec des lingettes adaptées pour éviter les dommages.</li>
          <li>Aspirez et lavez les sols pour éviter l'accumulation de poussière.</li>
          <li>Gérez efficacement les déchets avec des poubelles stratégiquement placées.</li>
          <li>Assainissez l’air avec des filtres propres ou des purificateurs d'air.</li>
        </ul>
      </div>
      <div className="cleaning-category">
        <h2>Nettoyage résidentiel</h2>
        <ul>
          <li>Utilisez des produits ménagers non toxiques pour protéger la famille et les animaux.</li>
          <li>Nettoyez pièce par pièce pour éviter les oublis.</li>
          <li>Dépoussiérez régulièrement, y compris les zones élevées comme les meubles et plafonniers.</li>
          <li>Adaptez le produit au type de sol pour éviter les dommages (bois, carrelage, moquette).</li>
          <li>Entretenez les appareils électroménagers pour éviter les dysfonctionnements.</li>
          <li>Désinfectez les zones humides pour prévenir les moisissures.</li>
        </ul>
      </div>
      <div className="cleaning-category">
        <h2>Nettoyage industriel</h2>
        <ul>
          <li>Respectez les protocoles de sécurité et portez des équipements de protection.</li>
          <li>Adaptez les produits aux matériaux pour éviter d'endommager les machines.</li>
          <li>Nettoyez les machines régulièrement pour prolonger leur durée de vie.</li>
          <li>Gérez les déchets industriels selon les normes locales.</li>
          <li>Concentrez vos efforts sur les zones critiques comme les entrepôts et zones de production.</li>
        </ul>
      </div>
      <div className="cleaning-category">
        <h2>Nettoyage hôtelier</h2>
        <ul>
          <li>Assurez un nettoyage approfondi des chambres entre chaque client.</li>
          <li>Lavez le linge à haute température pour éliminer bactéries et taches.</li>
          <li>Désinfectez les points de contact comme les interrupteurs, poignées et télécommandes.</li>
          <li>Nettoyez régulièrement les espaces communs comme les halls et ascenseurs.</li>
          <li>Utilisez des désodorisants pour garantir une atmosphère agréable.</li>
        </ul>
      </div>
    </div>
  );
};

export default CleaningTips;
