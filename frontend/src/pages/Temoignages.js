import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Temoignages.css";

// Importation des images
import client1 from "../videos/client1.png";
import client2 from "../videos/client2.png";
import client3 from "../videos/client3.png";
import client4 from "../videos/client4.png";

const images = [client1, client2, client3, client4];

const Temoignages = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change toutes les 3 secondes

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="temoignages-container">
      {/* Image avec effet de défilement et zoom */}
      <motion.div
        className="temoignages-image-container"
        initial={{ scale: 0.9, opacity: 0.7 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <motion.img
          key={index}
          src={images[index]}
          alt="Témoignage client"
          className="temoignages-image"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
};

export default Temoignages;
