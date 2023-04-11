import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";

import { useHistory } from "react-router-dom";

const options = [
  "Pepperoni",
  "Sosis",
  "Kanada Jambonu",
  "Tavuk Izgara",
  "Soğan",
  "Domates",
  "Mısır",
  "Sucuk",
  "Jalepeno",
  "Sarımsak",
  "Biber",
  "Ananas",
  "Kabak",
];

export default function SiparisFormu() {
  //const [boyut, setBoyut] = useState();
  const [secilenMalzemeler, setSecilenMalzemeler] = useState([]);
  const [hamur, setHamur] = useState();
  const [siparisNotu, setSiparisNotu] = useState("");
  const [count, setCount] = useState(1);
  const [boyut, setBoyut] = useState("");
  const [adres, setAdres] = useState("");
  const [fiyat, setFiyat] = useState(0);
  const [error, setError] = useState("");
  const [formDatası, setFormDatası] = useState({
    Malzemeler: [" "],
    Not: "",
    Hamur: "",
    Boyut: "",
    Adres: "",
    Fiyat: 0,
    count: 1,
  });

  function adetarttır() {
    setCount(count + 1);
  }
  useEffect(() => {
    setFormDatası({
      Malzemeler: secilenMalzemeler,
      Not: siparisNotu,
      Hamur: hamur,
      Boyut: boyut,
      Adres: adres,
      Fiyat: fiyat * count + 85.5 * count,
      Count: count,
    });
  }, [secilenMalzemeler, siparisNotu, hamur, boyut, adres, fiyat, count]);

  function adetazalt() {
    if (count > 1) {
      setCount(count - 1);
    }
  }
  function fiyatAyarla() {
    setFiyat(secilenMalzemeler.length * 5 * count);
  }
  useEffect(() => {
    fiyatAyarla();
  }, [secilenMalzemeler, count]);
  function handleSiparisNotu(e) {
    setSiparisNotu(e.target.value);
  }
  //console.log(siparisNotu);
  function handleAdres(e) {
    setAdres(e.target.value);
  }
  function handleChangeHamur(e) {
    setHamur(e.target.value);
    //console.log("seçilen hamur", hamur);
  }

  function handleChange(e) {
    const { value } = e.target;
    setBoyut(value);
  }
  function handleMalzemeChange(e) {
    const { value } = e.target;
    const yeniSecilenMalzemeler = [...secilenMalzemeler];
    if (e.target.checked) {
      yeniSecilenMalzemeler.push(value);
    } else if (!e.target.checked) {
      if (yeniSecilenMalzemeler.includes(value)) {
        yeniSecilenMalzemeler.splice(yeniSecilenMalzemeler.indexOf(value), 1);
      }
    }

    setSecilenMalzemeler(yeniSecilenMalzemeler);
    //console.log(yeniSecilenMalzemeler);
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    const formSchema = Yup.object().shape({
      Malzemeler: Yup.array()
        .min(1, "En az bir malzeme seçiniz")
        .max(10, "En fazla 10 malzeme seçebilirsiniz"),

      Not: Yup.string(),
      Hamur: Yup.string().required("Hamur tipi seçiniz"),
      Boyut: Yup.string().required("Pizza boyutu seçiniz"),
      Adres: Yup.string().required("Adres alanı boş bırakılamaz"),
    });
    formSchema
      .validate(formDatası)
      .then(() => {
        axios
          .post("https://reqres.in/api/orders", {
            Malzemeler: secilenMalzemeler,
            Not: siparisNotu,
            Hamur: hamur,
            Boyut: boyut,
            Adres: adres,
            Fiyat: (fiyat + 85.5) * count,
          })
          .then(function(response) {
            console.log(response.data);
            history.push("/basarili", { formDatası: formDatası });
          })
          .catch(function(error) {
            console.log(error);
          });
      })
      .catch((err) => {
        setError(err.errors);
      });
  };

  const history = useHistory();
  return (
    <div className="siparis">
      <div className="icerik">
        <header>
          <h2>Teknolojik Yemekler</h2>
          <div>
            <Link to="/" className="anasayfa-link">
              Anasayfa
            </Link>
            -Sipariş Oluştur
          </div>
        </header>

        <div className="body">
          <div className="tanıtım">
            <h3>Position Absolute Acı Pizza</h3>
            <h2>85.50&#8378;</h2>
            <p>
              Frontend Dev olarak hala position:absolute kullanıyorsan bu çok
              acı pizza tam sana göre.Pizza,domates,peynir ve genellikle çeşitli
              diğer malzemelerle kaplanmış,daha sonra geleneksel olarak odun
              ateşinde bir fırında yüksek sıcaklıkta pişirilen,genellikle
              yuvarlak,düzleştirilmiş mayalı buğday bazlı hamurdan oluşan
              İtalyan kökenli lezzetli bir yemektir.Küçük bir pizzaya bazen
              pizzetta denir.
            </p>
          </div>

          <div className="radio">
            <div className="radioButtons">
              <h3>Boyut Seç *</h3>
              <form>
                <label>
                  <div>
                    <input
                      type="radio"
                      name="boyut"
                      value="Küçük"
                      onChange={handleChange}
                    />
                    Küçük
                  </div>
                </label>
                <label>
                  <div>
                    <input
                      type="radio"
                      name="boyut"
                      value="Orta"
                      onChange={handleChange}
                    />
                    Orta
                  </div>
                </label>
                <label>
                  <div>
                    <input
                      type="radio"
                      name="boyut"
                      value="Büyük"
                      onChange={handleChange}
                    />
                    Büyük
                  </div>
                </label>
              </form>
            </div>

            <div className="dropdown">
              <div>
                <label>
                  <h2>Hamur Seç*</h2>
                  <select
                    name="hamur"
                    id="size-dropdown"
                    onChange={handleChangeHamur}
                  >
                    <option value="">Hamur Kalınlığı</option>
                    <option value="İnce">İnce</option>
                    <option value="Normal">Normal</option>
                    <option value="Kalın">Kalın</option>
                  </select>
                </label>
              </div>
            </div>
          </div>
          <div className="checkbox">
            <div className="parentkutucuklar">
              <form>
                <h3>Ek Malzemeler</h3>
                <p>En Fazla 10 malzeme seçebilirsiniz. 5&#8378;</p>
                <div className="kutucuklar">
                  {options.map((option) => (
                    <label key={option}>
                      <input
                        type="checkbox"
                        name="malzemeler"
                        value={option}
                        onChange={handleMalzemeChange}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </form>
            </div>
          </div>
          {error && <section>{error}</section>}
          <div className="not">
            <label>
              <h3>Sipariş Notu</h3>
              <input type="text" name="not" onChange={handleSiparisNotu} />
            </label>
          </div>
          <div className="not">
            <label>
              <h3>Adres</h3>
              <input type="text" name="adres" onChange={handleAdres} />
            </label>
          </div>
          <div className="alt">
            <div className="adet">
              <button className="test" onClick={adetazalt}>
                -
              </button>
              <p>{count}</p>
              <button onClick={adetarttır}>+</button>
            </div>

            <div className="fiyat">
              <h3>Sipariş Toplamı</h3>
              <p>
                <div className="fiyatlar">
                  <div>
                    <div>Seçimler</div>{" "}
                    <div>
                      {" "}
                      {fiyat}
                      &#8378;
                    </div>
                  </div>
                </div>
              </p>
              <p>
                <div className="fiyatlar">
                  <div>
                    <div>Toplam</div>{" "}
                    <div>
                      {(85.5 + fiyat) * count}
                      &#8378;
                    </div>
                  </div>
                </div>
              </p>

              <button id="order-button" type="submit" onClick={handleSubmit}>
                Sipariş Ver
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
