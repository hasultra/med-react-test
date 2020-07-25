import React from 'react';
import './style/App.scss';
import ActionComponent from './components/ActionComponent';
import OutputComponent from './components/OutputComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MedTwoComponent from './components/MedTwoComponent';
import MedFourComponent from './components/MedFourComponent';

function App() {
  return (

    <Router>
      <div className="app">
        <div>


          <Switch>
            <Route exact path="/">
              <nav style={{
                "display": "flex",
                "align-items": "left",
                "justify-content": "left",
                "font-size": "30px", "fontWeight": "bold"
              }}>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/MedTwoComponent">La premiere interface</Link>
                  </li>
                  <li>
                    <Link to="/MedFourComponent">La deuxieme interface</Link>
                  </li>
                </ul>
              </nav>
              <ActionComponent />
              <OutputComponent />
            </Route>
            <Route path="/MedTwoComponent">
              <MedTwoComponent />
            </Route>
            <Route path="/MedFourComponent">
              <MedFourComponent />
            </Route>
          </Switch>
        </div> </div></Router>

  );
}

export default App;
