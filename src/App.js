import React from 'react'
import './styles/main.css';
import {Route} from "react-router-dom";
import LandingPage from "./views/landingPage"

function App() {
  return (
  <div>
     <Route exact path="/" component={LandingPage} />
  </div>
  );
}

export default App;
