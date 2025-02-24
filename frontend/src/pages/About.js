// src/pages/About.js
import React from 'react';
import propo1 from '../videos/propo1.png';
import propo2 from '../videos/propo2.png';
import propo3 from '../videos/propo3.png';
import logoSimplicite from '../videos/logo_simplicite.png';
import logoEfficacite from '../videos/logo_efficacite.png';
import logoQualite from '../videos/logo_qualite.png';
import logoSatisfaction from '../videos/logo_satisfaction.png';
import './About.css'; // Assure-toi d'importer le fichier CSS

const About = () => {
  return (
    <div className="about-page">
      {/* Première section : description + images */}
      <div className="about-intro">
        <div className="about-description">
          <h1>À propos de KITOKO-SERVICE</h1>
          <p>
            Nous sommes une entreprise spécialisée dans le nettoyage et l'entretien de locaux professionnels et résidentiels.
            Avec des années d'expérience, nous proposons des solutions sur-mesure pour répondre à vos besoins spécifiques.
          </p>
        </div>
        <div className="about-images">
          <img src={propo1} alt="Proposition 1" className="about-image image-left" />
          <img src={propo2} alt="Proposition 2" className="about-image image-center" />
          <img src={propo3} alt="Proposition 3" className="about-image image-right" />
        </div>
      </div>

      {/* Deuxième section : Équipe */}
      <div className="responsables">
        <h2>Notre Équipe</h2>
        <div className="responsable-list">
          <div className="responsable">
            <img src="https://via.placeholder.com/150" alt="Responsable 1" />
            <p><strong>Loîc Kitoko</strong><br />Chef d'entreprise</p>
          </div>
          <div className="responsable">
            <img src="https://via.placeholder.com/150" alt="Responsable 2" />
            <p><strong>Demora Ngandaloki</strong><br />Directrice(DG)</p>
          </div>
          <div className="responsable">
            <img src="https://via.placeholder.com/150" alt="Responsable 3" />
            <p><strong>Esther Elenga</strong><br />Coordinatrice</p>
          </div>
	  <div className="responsable">
            <img src="https://via.placeholder.com/150" alt="Responsable 3" />
            <p><strong>Rove Mabiala</strong><br />Responsable de l'entretien</p>
          </div>
        </div>
      </div>

      {/* Troisième section : Valeurs */}
      <div className="about-values">
        <h2>Nos Valeurs</h2>
        <div className="value-blocks">
          <div className="value-block">
            <img src={logoSimplicite} alt="Simplicité" />
            <h3>Simplicité</h3>
            <p>Nous simplifions votre expérience de nettoyage avec des solutions adaptées.</p>
          </div>
          <div className="value-block">
            <img src={logoEfficacite} alt="Efficacité" />
            <h3>Efficacité</h3>
            <p>Nous garantissons un nettoyage efficace et rapide.</p>
          </div>
          <div className="value-block">
            <img src={logoQualite} alt="Qualité" />
            <h3>Qualité</h3>
            <p>Notre objectif est d'assurer une qualité irréprochable à chaque intervention.</p>
          </div>
          <div className="value-block">
            <img src={logoSatisfaction} alt="Satisfaction" />
            <h3>Votre Satisfaction</h3>
            <p>Votre satisfaction est notre priorité, nous écoutons vos retours.</p>
          </div>
        </div>
      </div>

      {/* Quatrième section : Horaires */}
      <div className="about-hours">
        <h2>Horaires de l'agence</h2>
        <p>Lundi - Vendredi : 9h00 - 18h00</p>
        <p>Samedi : 10h00 - 14h00</p>
        <p>Dimanche : Fermé</p>
      </div>
    </div>
  );
};

export default About;
