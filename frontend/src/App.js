import React, { useState } from 'react';
import './App.css';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import OffresVenir from './pages/OffresVenir';
import CleaningTips from './pages/CleaningTips';
import GeneralInfo from './pages/GeneralInfo';
import Testimonials from './pages/Testimonials';
import AvisEtEvaluations from './pages/AvisEtEvaluations';
import FAQ from './pages/FAQ';
import PersonnelQualifie from './pages/PersonnelQualifie';
import SansEngagement from './pages/SansEngagement';
import DemandeEmploye from './pages/DemandeEmploye';
import image1 from './videos/image1.png';
import image2 from './videos/image2.png';
import image3 from './videos/image3.png';
import image4 from './videos/image4.png';
import image5 from './videos/image5.png';
import image6 from './videos/image6.png';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    address: '',
    companyOrIndividual: '',
    companyOrIndividualName: '',
    gender: '',
    desiredDate: '',
  });

const csrftoken = Cookies.get('csrftoken');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/devis/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Demande envoyée avec succès !');
        setFormData({ name: '', email: '', phone: '', message: '', address: '', companyOrIndividual: '', companyOrIndividualName: '', gender: '', desiredDate: '' });
      } else {
        const errorData = await response.json();
        alert(`Erreur : ${errorData.error}`);
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi de la demande :', error);
      alert('Impossible d\'envoyer votre demande pour le moment.');
    }
  };

  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <div className="navbar-links">
            <Link to="/" className="navbar-link">Accueil</Link>
            <Link to="/contact" className="navbar-link">Contact</Link>
            <Link to="/a-propos" className="navbar-link">À propos</Link>
            <Link to="/nos-tarifs" className="navbar-link">Nos Tarifs</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={
            <div className="home">
              <header className="header">
                <div className="header-content">
                  <p>KITOKO-SERVICE Des Solutions De Nettoyage Adaptées à Vos Besoins.</p>
                  <Link to="/demander-devis" className="cta-button">Demander un devis gratuit maintenant</Link>
                </div>
              </header>

		  <section className="cleaning-services">

  {/* Section nettoyage de bureaux */}
  <section className="office-cleaning-services">
    <div className="service-container">
      <div className="service-image">
        <img src={image1} alt="Nettoyage de bureaux" />
      </div>
      <div className="service-content">
        <h2>Pourquoi choisir notre service de nettoyage pour bureaux ?</h2>
        <div className="cleaning-arguments">
          <div className="argument">
            <h3>Amélioration de la productivité :</h3>
            <p>Un bureau propre booste la concentration des employés et crée un environnement de travail sain, propice à une meilleure efficacité.</p>
          </div>
          <div className="argument">
            <h3>Première impression professionnelle :</h3>
            <p>Un bureau bien entretenu reflète une image soignée et professionnelle de votre entreprise, laissant une excellente impression sur vos clients et partenaires.</p>
          </div>
        </div>
        <h2>Nos services incluent :</h2>
        <ul className="services-list">
          <li>Nettoyage des surfaces de bureau (tables, chaises, comptoirs)</li>
          <li>Désinfection des claviers et téléphones</li>
          <li>Entretien des moquettes et tapis de bureaux</li>
          <li>Nettoyage des vitres et miroirs</li>
          <li>Purification de l’air avec des désodorisants naturels</li>
        </ul>
      </div>
    </div>
  </section>

  {/* Section nettoyage résidentiel */}
  <section className="residential-cleaning-services">
    <div className="service-container">
      <div className="service-image">
        <img src={image2} alt="Nettoyage résidentiel" />
      </div>
      <div className="service-content">
        <h2>Pourquoi choisir notre service de nettoyage résidentiel ?</h2>
        <div className="cleaning-arguments">
          <div className="argument">
            <h3>Confort et bien-être :</h3>
            <p>Un environnement propre et organisé favorise la relaxation et le bien-être à la maison, créant un espace plus agréable pour vous et votre famille.</p>
          </div>
          <div className="argument">
            <h3>Gain de temps :</h3>
            <p>Confiez-nous le nettoyage de votre maison pour gagner du temps et profiter d'un espace parfaitement propre sans effort.</p>
          </div>
        </div>
        <h2>Nos services incluent :</h2>
        <ul className="services-list">
          <li>Nettoyage des sols (parquet, moquette, carrelage)</li>
          <li>Nettoyage des cuisines et salles de bain</li>
          <li>Dépoussiérage des meubles et objets</li>
          <li>Nettoyage des fenêtres et miroirs</li>
          <li>Changement de literie et rangement</li>
        </ul>
      </div>
    </div>
  </section>

  {/* Section nettoyage industriel */}
  <section className="industrial-cleaning-services">
    <div className="service-container">
      <div className="service-image">
        <img src={image3} alt="Nettoyage industriel" />
      </div>
      <div className="service-content">
        <h2>Pourquoi choisir notre service de nettoyage industriel ?</h2>
        <div className="cleaning-arguments">
          <div className="argument">
            <h3>Normes de sécurité respectées :</h3>
            <p>Nos services assurent un environnement de travail propre et sécurisé, respectant les normes de sécurité et d'hygiène de votre industrie.</p>
          </div>
          <div className="argument">
            <h3>Durabilité des équipements :</h3>
            <p>Un nettoyage régulier prolonge la durée de vie de vos machines et équipements, réduisant ainsi les coûts d'entretien à long terme.</p>
          </div>
        </div>
        <h2>Nos services incluent :</h2>
        <ul className="services-list">
          <li>Nettoyage des ateliers de production et des machines</li>
          <li>Entretien des sols industriels</li>
          <li>Désinfection des surfaces de travail</li>
          <li>Élimination des déchets et nettoyage des espaces de stockage</li>
          <li>Vider les poubelles et gérer les déchets dangereux</li>
        </ul>
      </div>
    </div>
  </section>

  {/* Section nettoyage hôtelier */}
  <section className="hotel-cleaning-services">
    <div className="service-container">
      <div className="service-image">
        <img src={image4} alt="Nettoyage hôtelier" />
      </div>
      <div className="service-content">
        <h2>Pourquoi choisir notre service de nettoyage hôtelier ?</h2>
        <div className="cleaning-arguments">
          <div className="argument">
            <h3>Confort des clients :</h3>
            <p>Un hôtel propre crée une expérience agréable et mémorable pour vos clients, augmentant la satisfaction et les avis positifs.</p>
          </div>
          <div className="argument">
            <h3>Conformité aux normes sanitaires :</h3>
            <p>Nous respectons les normes d'hygiène strictes pour garantir la sécurité et la santé de vos clients et employés.</p>
          </div>
        </div>
        <h2>Nos services incluent :</h2>
        <ul className="services-list">
          <li>Nettoyage des chambres et des suites</li>
          <li>Entretien des espaces publics (hall, couloirs, ascenseurs)</li>
          <li>Changement de literie et de serviettes</li>
          <li>Nettoyage des sanitaires et des cuisines</li>
          <li>Entretien des espaces extérieurs (terrasses, jardins)</li>
        </ul>
      </div>
    </div>
  </section>

  {/* Section nettoyage de magasins */}
  <section className="store-cleaning-services">
    <div className="service-container">
      <div className="service-image">
        <img src={image5} alt="Nettoyage magasin" />
      </div>
      <div className="service-content">
        <h2>Pourquoi choisir notre service de nettoyage pour magasin et super-marché ?</h2>
        <div className="cleaning-arguments">
          <div className="argument">
            <h3>Attractivité accrue :</h3>
            <p>Un magasin propre et bien entretenu attire davantage de clients, leur offrant une expérience de shopping agréable et confortable.</p>
          </div>
          <div className="argument">
            <h3>Conformité aux normes d'hygiène :</h3>
            <p>Nous garantissons que votre magasin respecte les normes de propreté et d’hygiène, essentiel pour assurer la sécurité des clients et du personnel.</p>
          </div>
        </div>
        <h2>Nos services incluent :</h2>
        <ul className="services-list">
          <li>Nettoyage des surfaces de vente (étagères, comptoirs, caisses)</li>
          <li>Entretien des vitrines et portes d'entrée</li>
          <li>Nettoyage des sols (carrelage, moquette, parquet)</li>
          <li>Désinfection des zones fréquemment touchées (poignées de porte, interrupteurs)</li>
          <li>Vider les poubelles et gérer les déchets</li>
          <li>Entretien des zones de stockage et des espaces de préparation</li>
        </ul>
      </div>
    </div>
  </section>
</section>

		  {/* Section vente de produits de nettoyage */}
<section className="store-cleaning-services">
  <div className="service-container">
    <div className="service-image">
      <img src={image6} alt="Produits de nettoyage" />
    </div>
    <div className="service-content">
      <h2>Vente des produits de Nettoyage, Pourquoi chez nous ?</h2>
      <div className="cleaning-arguments">
        <div className="argument">
          <h3>Qualité et efficacité :</h3>
              <p>Nous offrons une large gamme de solutions de nettoyage adaptées aux particuliers et aux professionnels, alliant performance et respect de l’environnement.</p>
        </div>
        <div className="argument">
          <h3>Solutions adaptées à tous les besoins :</h3>
          <p>Que ce soit pour des bureaux, commerces ou domiciles, nous avons les solutions idéales pour chaque situation.</p>
        </div>
      </div>
      <h2>Ce que nous proposons :</h2>
      <ul className="services-list">
        <li>Une sélection variée de produits de nettoyage</li>
        <li>Des solutions adaptées aux surfaces professionnelles et domestiques</li>
        <li>Des produits sûrs et performants pour un entretien efficace</li>
        <li>Des conseils personnalisés pour vous aider à choisir le bon produit</li>
      </ul>
    </div>
  </div>
</section>
		  </div>
          } />

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
                <input
                  type="text"
                  name="address"
                  placeholder="Adresse"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
                <select
                  name="companyOrIndividual"
                  value={formData.companyOrIndividual}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choisissez Entreprise ou Particulier</option>
                  <option value="Entreprise">Entreprise</option>
                  <option value="Particulier">Particulier</option>
                </select>
                <input
                  type="text"
                  name="companyOrIndividualName"
                  placeholder="Nom de l'entreprise ou du particulier"
                  value={formData.companyOrIndividualName}
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

          <Route path="/contact" element={
            <div className="contact-page">
              <h1>Contactez-nous</h1>
              <p>Nous sommes à votre disposition pour toute question ou demande.</p>
              <p>Email: kitokoservice@gmail.com</p>
              <p>Téléphone: 06 04 12 36 61</p>
            </div>
          } />

          <Route path="/a-propos" element={
            <div className="about-page">
              <h1>À propos de KITOKO-SERVICE</h1>
              <p>Nous sommes une entreprise spécialisée dans le nettoyage et l'entretien de locaux professionnels et résidentiels.</p>
              <p>Avec des années d'expérience, nous proposons des solutions sur-mesure pour répondre à vos besoins spécifiques.</p>
              <p>Nous nous engageons à fournir un service de nettoyage fiable, efficace et respectueux de l'environnement pour garantir la satisfaction de nos clients.</p>
              <p>Notre équipe professionnelle utilise des équipements modernes et des produits de qualité pour assurer un nettoyage impeccable à chaque intervention.</p>
            </div>
          } />

          {/* Page nos tarifs */}
          <Route path="/nos-tarifs" element={
            <div className="pricing-page">
              <h1>Nos Tarifs</h1>
              <div className="pricing">
                <ul>
                  <li>Nettoyage de bureaux : Mensuel / Sur devis , 25€ / Passage</li>
                  <li>Entretien ménager : 50€ / visite</li>
                  <li>Nettoyage industriel : Mensuel / Sur devis , 150€ / Intervention</li>
                  <li>Nettoyage hôtelier : Sur devis</li>
		  <li>Nettoyage magasin, super-marché : Sur devis</li>
                </ul>
                <p>Contactez-nous pour un devis personnalisé adapté à vos besoins !</p>
              </div>
            </div>
          } />

	  {/* Page Conseils de nettoyage */}
          <Route path="/conseils-de-nettoyage" element={<CleaningTips />} />
	  <Route path="/informations-generales" element={<GeneralInfo />} />
	  <Route path="/avis-et-evaluations" element={<AvisEtEvaluations />} />
	  <Route path="/faq" element={<FAQ />} />
	  <Route path="/personnel-qualifie" element={<PersonnelQualifie />} />
          <Route path="/sans-engagement" element={<SansEngagement />} />
          <Route path="/demande-employe" element={<DemandeEmploye />} />
	  <Route path="/offres-venir" element={<OffresVenir />} />
	  <Route path="/Testimonials" element={<Testimonials />} />
        </Routes>

	  {/* Nouveau Footer avant l'existant */}
<div className="footer-second-alt">
  <div className="footer-second-alt-content">
    {/* Cercle avec salutation des mains */}
    <div className="footer-second-alt-circle">
      <span role="img" aria-label="salutation">✅</span>
    </div>
    <Link to="/personnel-qualifie" className="footer-link">
      <p>Personnel qualifié</p>
    </Link>

    {/* Cercle avec X */}
    <div className="footer-second-alt-circle">
      <span role="img" aria-label="X">❌</span>
    </div>
    <Link to="/sans-engagement" className="footer-link">
      <p>Sans engagement</p>
    </Link>

    {/* Cercle avec Yes */}
    <div className="footer-second-alt-circle">
      <span role="img" aria-label="Yes">📋</span>
    </div>
    <Link to="/demande-employe" className="footer-link">
      <p>Demandez un(e) employé(e)</p>
    </Link>
  </div>
</div>

        {/* Footer */}
        <footer className="footer-second">
          <div className="footer-content">
            {/* Blog ou actualités */}
            <div className="footer-section">
              <h3>Blog ou Actualités</h3>
              <ul>
                <li>
                  <Link to="/offres-venir" className="link-button">Offres à venir</Link>
                </li>
	           <li>
                   <Link to="/conseils-de-nettoyage" className="link-button">Conseils de nettoyage</Link>
                   </li>
                 </ul>
            </div>

            {/* Témoignages Clients */}
            <div className="footer-section">
              <h3>Témoignages Clients</h3>
              <ul>
                <li>
                   <Link to="/Testimonials" className="link-button">Testimonials</Link>
                </li>
	           <li>
                   <Link to="/avis-et-evaluations" className="link-button">Avis et évaluations</Link>
                   </li>
                 </ul>
            </div>

            {/* FAQ */}
            <div className="footer-section">
              <h3>FAQ</h3>
              <ul>
                <li>
                  <Link to="/faq" className="link-button">Questions Fréquentes</Link>
                </li>
	           <li>
                   <Link to="/informations-generales" className="link-button">Informations Générales</Link>
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
