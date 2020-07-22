import React from 'react';
import './App.scss';
import ActionComponent from './components/ActionComponent';
import OutputComponent from './components/OutputComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MedComponent from './components/MedComponent';


function App() {
  return (

    <Router>
      <div className="app">
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/MedComponent">La premiere interface</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/">

              <ActionComponent />
              <OutputComponent />
            </Route>
            <Route path="/MedComponent">
              <MedComponent />
            </Route>
          </Switch>
        </div> </div></Router>

  );
}

export default App;
