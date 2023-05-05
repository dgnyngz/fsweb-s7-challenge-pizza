import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Anasayfa from "./comps/Anasayfa";
import SiparisFormu from "./comps/Siparisformu";
import "./App.css";
import Basarili from "./comps/Basarili";
//route bileşenleriyle siparişformu anasayfa ve basarili bileşenleri render edilir
//<BrowserRouter> komponenti, tarayıcı adres çubuğundaki URL'leri kullanarak hangi bileşenin render edileceğini belirler.
//<Switch> bileşeni, URL'yi kontrol eder ve belirtilen URL yoluna uygun bir Route bileşeni render eder.

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/pizza">
            <SiparisFormu />
          </Route>
          <Route exact path="/">
            <Anasayfa />
          </Route>
          <Route path="/basarili">
            <Basarili />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
//npx cypress open