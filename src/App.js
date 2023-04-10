import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Anasayfa from "./comps/Anasayfa";
import SiparisFormu from "./comps/Siparisformu";
import "./App.css";
import Basarili from "./comps/Basarili";

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
