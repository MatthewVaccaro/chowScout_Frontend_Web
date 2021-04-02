import React from 'react'
import './styles/main.css';
import {Route} from "react-router-dom";
import LandingPage from "./views/landingPage/landingPage"
import Input from './utility/components/Input';
import GoogleAnalytics from "react-ga";

function App() {
  GoogleAnalytics.initialize("UA-193650779-1");

  const tracker = ({ location }) => {
    GoogleAnalytics.set({ page: location.pathname });
    GoogleAnalytics.pageview(location.pathname);
    return null;
  };

  console.log(tracker)

  return (
  <div className="mainContainer sm:mx-auto px-4 md:px-12 lg:px-16" >
     <Route render={tracker} />
     <Route exact path="/" component={LandingPage} />
     <Route exact path="/testing" component={Input} />
  </div>
  );
}

export default App;
