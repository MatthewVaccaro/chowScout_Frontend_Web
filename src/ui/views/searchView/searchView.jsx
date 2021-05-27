import axios from "axios";
import { useState, useEffect } from "react";
import DistanceMarker from "./atoms/distanceMarker";
import SearchInput from "./atoms/searchInput";
import RestaurantSearchResult from "./organisms/restaurantSearchResult";
import SearchBar from "./molecules/searchBar";

function SearchView() {
	const [data, setData] = useState();

	useEffect(() => {
		axios
			.post("http://localhost:4000/api/client/chicken", {
				latitude: 36.1254902176224,
				longitude: -86.78860731230652,
			})
			.then((res) => {
				setData(res.data["1"]);
				console.log(res.data["1"]);
			});
	}, []);

	return (
		<div>
			<SearchBar />
			<DistanceMarker miles={"69"} />
			{data
				? data.map((cv) => {
						return <RestaurantSearchResult result={cv} />;
				  })
				: ""}
		</div>
	);
}

export default SearchView;
