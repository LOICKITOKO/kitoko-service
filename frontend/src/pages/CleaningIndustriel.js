import React from 'react';
import './CleaningIndustriel.css';

const CleaningIndustriel = ({ image }) => {
  return (
    <div className="cleaning-container">
      <div className="cleaning-text">
        <h1 className="cleaning-title">Conseils de Nettoyage Industriel</h1>
        <p className="cleaning-description">
          🏭 Un environnement industriel propre garantit la sécurité et l’efficacité des travailleurs.
        </p>

        <p>Utilisez des équipements de protection individuelle.</p>
        <p>Nettoyez les machines et les équipements régulièrement.</p>
        <p>Assurez-vous que les sols soient toujours propres et secs.</p>
        <p>Dépoussiérez les conduits d’aération.</p>
        <p>Désinfectez les vestiaires et les sanitaires plusieurs fois par jour.</p>
        <p>Utilisez des produits de nettoyage adaptés aux normes industrielles.</p>
        <p>Effectuez des contrôles réguliers pour détecter les zones de contamination.</p>
        <p>Formez les employés aux bonnes pratiques de nettoyage et de désinfection.</p>
        <p>Éliminez correctement les déchets industriels en suivant les réglementations.</p>
        <p>Planifiez un nettoyage en profondeur au moins une fois par trimestre.</p>
      </div>

      <div className="cleaning-image-container">
        <img src={image} alt="Nettoyage industriel" className="cleaning-image" />
      </div>
    </div>
  );
};

export default CleaningIndustriel;
