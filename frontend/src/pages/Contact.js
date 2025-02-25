import React from "react";
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";
import "./Contact.css"; // Assure-toi d'avoir ce fichier CSS

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contactez-nous</h2>
      <p>Vous avez une question ou besoin d'informations ? N'hésitez pas à nous contacter :</p>

      <li><a href="123 Rue Exemple, Paris, France">123 Rue Exemple, Paris, France</a></li>
      
      <p>📧 Email : <a href="kitokoservice05@gmail.com">kitokoservice05@gmail.com</a></p>

      <p>📞 Téléphones :</p>
      <ul className="phone-list">
        <li><a href="tel:+242 06 469 51 55">+242 06 469 51 55</a></li>
        <li><a href="tel:+242 06 942 61 93">+242 06 942 61 93</a></li>
        <li><a href="tel:+242 06 979 81 90">+242 06 979 81 90</a></li>
      </ul>

      <div className="social-icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={60} color="#E4405F" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={60} color="#1877F2" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaXTwitter size={60} color="#000000" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
