import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
export default function Basarili() {
  const location = useLocation();
  const formDatası = location.state.formDatası;
  const [newFiyat, setNewFiyat] = useState(formDatası.Fiyat);

  function fiyatdegistir() {
    setNewFiyat(formDatası.Fiyat * 0.85);
  }

  return (
    <div className="basarili1">
      <div className="basarili">
        <div>
          <h2>Teknolojik Yemekler</h2>
          <p className="lezzet">lezzetin yolda</p>
          <p>SİPARİŞİNİZ BAŞARIYLA ALINDI!</p>
          <hr></hr>
          <p>Boyut : {formDatası.Boyut}</p>
          <p>
            Malzemeler:{" "}
            {formDatası.Malzemeler.map((malz, index) => (
              <span>
                {malz}
                {index !== formDatası.Malzemeler.length - 1 && ", "}
              </span>
            ))}
          </p>
          <p>Not: {formDatası.Not}</p>

          <p> Hamur: {formDatası.Hamur}</p>
          <p>Adres: {formDatası.Adres}</p>
          <p>Fiyat: {newFiyat} &#8378;</p>
          <div className="kupon">
            {formDatası.Fiyat >= 500 && (
              <button onClick={fiyatdegistir}>
                %15 İndirim Kuponu Kazandın <div>Kullanmak İçin Tıklayın!</div>
              </button>
            )}
          </div>
        </div>
        <div>
          <Link to="/" className="geridön">
            Anasayfa
          </Link>
        </div>
      </div>
    </div>
  );
}
