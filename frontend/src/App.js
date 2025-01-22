import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import videoD from './videos/videoD.mp4'; // Vidéo d'arrière-plan
import videoA from './videos/videoA.mp4';
import videoB from './videos/videoB.mp4';
import videoC from './videos/videoC.mp4';
import videoE from './videos/videoE.mp4'; // Vidéo ajoutée pour nettoyage hôtelier

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // Gestion des changements dans le formulaire
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Gestion de l'envoi du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Demande envoyée !');
  };

  return (
    <Router>
      <div className="app-container">
        {/* Navbar */}
        <nav className="navbar">
          <div className="navbar-links">
            <Link to="/" className="navbar-link">Accueil</Link>
            <Link to="/contact" className="navbar-link">Contact</Link>
            <Link to="/a-propos" className="navbar-link">À propos</Link>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          {/* Page d'Accueil */}
          <Route path="/" element={
            <div className="home">
              <header className="header">
                {/* Vidéo d'arrière-plan */}
                <video className="background-video" autoPlay loop muted>
                  <source src={videoD} type="video/mp4" />
                  Votre navigateur ne supporte pas les vidéos HTML5.
                </video>
                {/* Contenu au-dessus de la vidéo */}
                <div className="header-content">
                  <h1>Bienvenue sur KITOKO-SERVICE</h1>
                  <p>Des solutions de nettoyage adaptées à vos besoins.</p>
                  <Link to="/demander-devis" className="cta-button">Demander un devis gratuit maintenant</Link>
                </div>
              </header>

              {/* Section des services */}
              <section className="services-overview">
                <h2>Aperçu de nos services</h2>
                <div className="services-icons">
                  <div className="service">
                    <p>Nettoyage de bureaux</p>
                    <video controls className="service-video">
                      <source src={videoA} type="video/mp4" />
                      Votre navigateur ne prend pas en charge les vidéos HTML5.
                    </video>
                  </div>
                  <div className="service">
                    <p>Entretien ménager</p>
                    <video controls className="service-video">
                      <source src={videoB} type="video/mp4" />
                      Votre navigateur ne prend pas en charge les vidéos HTML5.
                    </video>
                  </div>
                  <div className="service">
                    <p>Nettoyage industriel</p>
                    <video controls className="service-video">
                      <source src={videoC} type="video/mp4" />
                      Votre navigateur ne prend pas en charge les vidéos HTML5.
                    </video>
                  </div>
                  {/* Nouvelle vidéo ajoutée */}
                  <div className="service">
                    <h3>Nettoyage hôtelier</h3>
                    <video controls className="service-video">
                      <source src={videoE} type="video/mp4" />
                      Votre navigateur ne prend pas en charge les vidéos HTML5.
                    </video>
                  </div>
                </div>
              </section>
            </div>
          } />

          {/* Page Demander un devis */}
          <Route path="/demander-devis" element={
            <div className="quote-request">
              <h1>Demandez un devis gratuit</h1>
              <p>Nous vous contacterons dans les plus brefs délais pour discuter de vos besoins de nettoyage.</p>

              <form onSubmit={handleSubmit} className="quote-form">
                <input
                  type="text"
                  name="name"
                  placeholder="Nom"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
		  <input
		  type="tel"
		  name="phone"
		  placeholder="Téléphone"
		  value={formData.phone}
		  onChange={handleChange}
		  required
		  />
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <button type="submit">Envoyer la demande</button>
              </form>
            </div>
          } />

          {/* Page Contact */}
          <Route path="/contact" element={
            <div className="contact-page">
              <h1>Contactez-nous</h1>
              <p>Nous sommes à votre disposition pour toute question ou demande.</p>
              <p>Email: kitokoservice@gmail.com</p>
              <p>Téléphone: 06 04 12 36 61</p>
            </div>
          } />

          {/* Page À propos */}
          <Route path="/a-propos" element={
            <div className="about-page">
              <h1>À propos de KITOKO-SERVICE</h1>
              <p>Nous sommes une entreprise spécialisée dans le nettoyage et l'entretien de locaux professionnels et résidentiels.</p>
              <p>Avec des années d'expérience, nous proposons des solutions sur-mesure pour répondre à vos besoins spécifiques.</p>
              <p>Nous nous engageons à fournir un service de nettoyage fiable, efficace et respectueux de l'environnement pour garantir la satisfaction de nos clients.</p>
              <p>Notre équipe professionnelle utilise des équipements modernes et des produits de qualité pour assurer un nettoyage impeccable à chaque intervention.</p>
            </div>
          } />
        </Routes>

        {/* Footer */}
        <footer className="footer-second">
          <div className="footer-content">
            {/* Blog ou actualités */}
            <div className="footer-section">
              <h3>Blog ou Actualités</h3>
              <ul>
                <li>
                  <button onClick={() => alert('Offres à venir')} className="link-button">Offres à venir</button>
                </li>
                <li>
                  <button onClick={() => alert('Conseils de nettoyage à venir')} className="link-button">Conseils de nettoyage</button>
                </li>
              </ul>
            </div>

            {/* Témoignages Clients */}
            <div className="footer-section">
              <h3>Témoignages Clients</h3>
              <ul>
                <li>
                  <button onClick={() => alert('Ce que disent nos clients')} className="link-button">Ce que disent nos clients</button>
                </li>
                <li>
                  <button onClick={() => alert('Avis et évaluations')} className="link-button">Avis et évaluations</button>
                </li>
              </ul>
            </div>

            {/* FAQ */}
            <div className="footer-section">
              <h3>FAQ</h3>
              <ul>
                <li>
                  <button onClick={() => alert('Questions Fréquentes')} className="link-button">Questions Fréquentes</button>
                </li>
                <li>
                  <button onClick={() => alert('Informations Générales')} className="link-button">Informations Générales</button>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2025 KITOKO-SERVICE - Tous droits réservés.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
