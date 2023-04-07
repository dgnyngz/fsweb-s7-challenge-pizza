import React from "react";
import { Link } from "react-router-dom";
export default function Anasayfa() {
  return (
    <div className="anasayfa">
      <h2>Teknolojik Yemekler</h2>
      <p>KOD ACIKTIRIR</p>
      <p>PİZZA DOYURUR</p>
      <Link to="/pizza" className="anasayfabuton">
        ACIKTIM
      </Link>
    </div>
  );
}
