import React from "react";
import './GeneralInfo.css';

const GeneralInfo = () => {
  return (
    <div className="general-info-page">
      <h1>Informations Générales</h1>

      <h2>Présentation</h2>
      <p><strong>Nom de l'entreprise :</strong> KITOKO-SERVICE</p>
      <p><strong>Description :</strong> Spécialisée dans le nettoyage et l'entretien de locaux professionnels et résidentiels.</p>

      <h2>Coordonnées</h2>
      <ul>
        <li><strong>Adresse :</strong> 123 Rue Exemple, Paris, France</li>
        <li><strong>Téléphone :</strong> 06 779 72 87 - 06 942 61 93 - 06 469 51 55</li>
        <li><strong>E-mail :</strong> kitokoservice05@gmail.com</li>
        <li><strong>Site web :</strong> www.kitoko-service.fr</li>
      </ul>

      <h2>Équipe</h2>
      <ul>
	<li>Loîc Kitoko, Chef d'entreprise</li>
        <li>Demora Ngandaloki, Directrice (DG)</li>
	<li>Esther Elenga, Coordinatrice</li>
        <li>Rove Mabiala, Responsable de l'entretien</li>
      </ul>

      <h2>Services Offerts</h2>
      <ul>
        <li>Nettoyage de bureaux</li>
        <li>Entretien de locaux résidentiels</li>
        <li>Services de désinfection</li>
	<li>Et bien d'autres...</li>
      </ul>

      <h2>Informations Financières</h2>
      <ul>
        <li><strong>Année de création :</strong> 2025</li>
        <li><strong>Statut juridique :</strong> SARL</li>
      </ul>

      <h2>Clientèle Cible</h2>
      <ul>
        <li>Petites et moyennes entreprises</li>
        <li>Particuliers</li>
	<li>Et bien d'autres...</li>
      </ul>

      <h2>Informations Complémentaires</h2>
      <ul>
        <li>Certification : En attente...</li>
        <li>Partenaire : Aucun</li>
      </ul>

      <h2>Contact et Réseaux Sociaux</h2>
      <ul>
        <li><strong>Facebook :</strong> facebook.com/kitokoservice</li>
        <li><strong>LinkedIn :</strong> linkedin.com/company/kitokoservice</li>
      </ul>

      <h2>Horaires de Travail</h2>
      <ul>
        <li>Lundi - Vendredi : 9h00 - 18h00</li>
        <li>Samedi : 10h00 - 14h00</li>
        <li>Dimanche : Fermé</li>
      </ul>
    </div>
  );
};

export default GeneralInfo;
