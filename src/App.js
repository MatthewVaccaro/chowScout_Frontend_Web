import React from "react";
import "./ui/styles/main.css";
import { Route } from "react-router-dom";
import LandingPage from "./ui/views/landingPage/landingPage";
import GoogleAnalytics from "react-ga";
import SearchView from "./ui/views/searchView/searchView";
import { SearchProvider } from "./data/context/searchContext";
import RestaurantView from "./ui/views/restaurantView/restaurantView";
import RestaurantProvider from "./data/context/restaurantContext";
import MenuDimensionsProvider from "./data/context/menuDimentionsContext";

function App() {
	GoogleAnalytics.initialize("UA-193650779-1");

	const tracker = ({ location }) => {
		GoogleAnalytics.set({ page: location.pathname });
		GoogleAnalytics.pageview(location.pathname);
		return null;
	};

	return (
		<div className="sm:mx-auto">
			<RestaurantProvider>
				<MenuDimensionsProvider>
					<SearchProvider>
						<Route render={tracker} />
						<Route exact path="/" component={LandingPage} />
						<Route exact path="/testing" component={RestaurantView} />
					</SearchProvider>
				</MenuDimensionsProvider>
			</RestaurantProvider>
		</div>
	);
}

export default App;
