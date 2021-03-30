import React from 'react'
import './styles/main.css';
import {Route} from "react-router-dom";
import LandingPage from "./views/landingPage/landingPage"
import Input from './utility/components/Input';

function App() {
  return (
  <div className="mainContainer sm:mx-auto px-4 md:px-12 lg:px-16" >
     <Route exact path="/" component={LandingPage} />
     <Route exact path="/testing" component={Input} />
  </div>
  );
}

export default App;
