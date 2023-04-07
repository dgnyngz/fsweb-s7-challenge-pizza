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

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Router>
          <div>
            <Switch>
              <Route path="/pizza">
                <SiparisFormu />
              </Route>
              <Route path="/">
                <Anasayfa />
              </Route>
            </Switch>
          </div>
        </Router>
      </BrowserRouter>
    </>
  );
};
export default App;
