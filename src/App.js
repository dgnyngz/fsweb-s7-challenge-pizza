import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Anasayfa from "./comps/Anasayfa";
import SiparisFormu from "./comps/Siparisformu";
import "./App.css";
import Basarili from "./comps/Basarili";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Router>
          <Switch>
            <Route path="/pizza">
              <SiparisFormu />
            </Route>
            <Route path="/anasayfa">
              <Anasayfa />
            </Route>
            <Route path="/basarili">
              <Basarili />
            </Route>
          </Switch>
        </Router>
      </BrowserRouter>
    </>
  );
};
export default App;
