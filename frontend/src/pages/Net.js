import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Net.css";

// Importation des images
import net1 from "../videos/net1.png";
import net2 from "../videos/net2.png";
import net3 from "../videos/net3.png";
import net4 from "../videos/net4.png";

const images = [net1, net2, net3, net4];

const Net = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // Change la direction pour passer à l'image précédente
    }, 3000); // Change toutes les 3 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="net-container">
      <motion.div
        className="net-image-container"
      >
        <motion.img
          key={index}
          src={images[index]}
          alt="Image Net"
          className="net-image"
          initial={{ opacity: 0, x: 100 }} // Position initiale à droite
          animate={{ opacity: 1, x: 0 }} // Déplace vers la gauche
          exit={{ opacity: 0, x: -100 }} // Sortie vers la gauche
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
};

export default Net;
