import React from "react";
import { FaClock, FaBroom, FaFileSignature, FaShieldAlt } from "react-icons/fa";
import './GeneralInfo.css';

const GeneralInfo = () => {
  return (
    <div className="general-info-page">
      <h1>Informations Générales</h1>
      <div className="info-category">
        <FaClock className="info-icon" />
        <div>
          <h2>Horaires d'ouverture</h2>
          <p>Nous sommes ouverts de <strong>8h30 à 19h00</strong>, tous les jours sauf le mercredi.</p>
        </div>
      </div>
      <div className="info-category">
        <FaBroom className="info-icon" />
        <div>
          <h2>Services proposés</h2>
          <ul>
            <li>Entretien de bureaux : pour un espace de travail propre et sain.</li>
            <li>Nettoyage résidentiel : pour un intérieur confortable et impeccable.</li>
            <li>Nettoyage industriel : entretien des zones de production et équipements techniques.</li>
            <li>Nettoyage hôtelier : service irréprochable pour chambres et espaces communs.</li>
          </ul>
        </div>
      </div>
      <div className="info-category">
        <FaFileSignature className="info-icon" />
        <div>
          <h2>Matricule d'agréé</h2>
          <p>Certification officielle <strong>en attente</strong>.</p>
        </div>
      </div>
      <div className="info-category">
        <FaShieldAlt className="info-icon" />
        <div>
          <h2>Politique de confidentialité</h2>
          <p>
            Nous nous engageons à protéger vos informations personnelles. Vos données ne seront utilisées que pour fournir nos services, conformément aux réglementations en vigueur. Consultez notre <a href="#">politique complète</a> pour plus d’informations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;
