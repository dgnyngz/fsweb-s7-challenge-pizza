import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
export default function Basarili() {
  const location = useLocation();
  const formDatası = location.state.formDatası;
  //300 lira üzerine %15 indirim uygulamak için yeni bir state tanımlandı.
  const [newFiyat, setNewFiyat] = useState(formDatası.Fiyat);
  // location.state kullanılarak formdatanın bu  sayfasıya taşınması sağlanmıştır.

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
                {" "}
                {/*seçillen malzemeleri mapleyerek hepsini tek tek ekrana yazdırır indek malzemeler listesinin uzunluğuna eşit değilse aralarına 
                virgül koyar . son malzemeden sonra virgül koymaması için kod eklendi */}
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
          {/* fiyat 300 tlden fazlaysa ekrana kupon butonu çıkarır */}
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
