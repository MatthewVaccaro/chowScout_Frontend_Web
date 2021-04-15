import React from 'react'
import './ui/styles/main.css';
import {Route} from "react-router-dom";
import LandingPage from "./ui/views/landingPage/landingPage"
import GoogleAnalytics from "react-ga";
import ClearButton from './ui/views/searchView/atoms/clearButton';
import SearchBar from './ui/views/searchView/molecules/searchBar';

function App() {
  GoogleAnalytics.initialize("UA-193650779-1");

  const tracker = ({ location }) => {
    GoogleAnalytics.set({ page: location.pathname });
    GoogleAnalytics.pageview(location.pathname);
    return null;
  };

  return (
  <div className="mainContainer sm:mx-auto px-4 md:px-12 lg:px-16" >
     <Route render={tracker} />
     <Route exact path="/" component={LandingPage} />
     <Route exact path="/testing" component={SearchBar} />
  </div>
  );
}

export default App;
