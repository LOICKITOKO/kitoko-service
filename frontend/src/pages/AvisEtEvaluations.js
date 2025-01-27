// src/pages/AvisEtEvaluations.js
import React, { useState } from 'react';
import './AvisEtEvaluations.css';

const AvisEtEvaluations = () => {
  const [rating, setRating] = useState(0); // Pour gérer les étoiles sélectionnées
  const [comment, setComment] = useState(''); // Pour gérer le commentaire

  // Fonction pour gérer la sélection des étoiles
  const handleRating = (rate) => {
    setRating(rate);
  };

  // Fonction pour soumettre l'avis
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici tu peux envoyer les données à ton API ou autre
    console.log("Évaluation :", rating);
    console.log("Commentaire :", comment);
    alert('Merci pour votre évaluation!');
  };

  return (
    <div className="avis-evaluations">
      <h1>Avis et évaluations</h1>
      
      {/* Affichage des étoiles */}
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={star <= rating ? 'star filled' : 'star'}
            onClick={() => handleRating(star)}
          >
            ★
          </span>
        ))}
      </div>
      
      {/* Formulaire de commentaire avec bouton envoyer */}
      <div className="form-group">
        <textarea
          placeholder="Laissez un commentaire..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={handleSubmit}>Envoyer</button>
      </div>
    </div>
  );
};

export default AvisEtEvaluations;
