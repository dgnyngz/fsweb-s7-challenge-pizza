import React from "react";
import { Link } from "react-router-dom";
export default function Basarili() {
  return (
    <div>
      <div className="basarili">
        <div>
          <h2>Teknolojik Yemekler</h2>
          <p>TEBRİKLER!</p>
          <p>SİPARİŞİNİZ BAŞARIYLA ALINDI!</p>
        </div>
        <div>
          <Link to="/anasayfa" className="geridön">
            Anasayfa
          </Link>
        </div>
      </div>
    </div>
  );
}
