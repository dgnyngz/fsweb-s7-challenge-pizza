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
          <div className="lezzet">lezzetin yolda</div>
          <p>SİPARİŞİNİZ BAŞARIYLA ALINDI!</p>
          <hr></hr>
          <h2>Position Absolute Acı Pizza</h2>
          <div className="malzemeler">
            <p>
              Boyut : <b>{formDatası.Boyut}</b>
            </p>
            <p>
              Malzemeler:{" "}
              <b>
                {formDatası.Malzemeler.map((malz, index) => (
                  <span>
                    {malz}
                    {index !== formDatası.Malzemeler.length - 1 && ", "}
                  </span>
                ))}
              </b>
            </p>
            <p>
              Not: <b>{formDatası.Not}</b>
            </p>

            <p>
              {" "}
              Hamur: <b>{formDatası.Hamur}</b>
            </p>
            <p>
              Adres: <b>{formDatası.Adres}</b>
            </p>
          </div>
          <div className="toplam">
            <div>
              <h2>Sipariş Toplamı</h2>
              <p>
                Seçimler: {formDatası.Malzemeler.length * 5 * formDatası.Count}{" "}
                &#8378;{" "}
              </p>
              <p>
                Toplam: <b>{newFiyat} &#8378;</b>
              </p>
            </div>
          </div>
          <div className="kupon">
            {formDatası.Fiyat >= 300 && (
              <button onClick={fiyatdegistir}>
                %15 İndirim Kuponu Kazandın <div>Kullanmak İçin Tıkla!</div>
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
