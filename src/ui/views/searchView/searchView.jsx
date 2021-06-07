import { useState, useEffect, useContext } from "react";
import DistanceMarker from "./atoms/distanceMarker";
import RestaurantSearchResult from "./organisms/restaurantSearchResult";
import SearchBar from "./molecules/searchBar";
import { searchContext } from "../../../data/context/searchContext";
import { POST_dishSearch } from "../../../logic/requestHandler";

function SearchView() {
	const [search] = useContext(searchContext);
	const [inputField, setInputField] = useState({ search: "" });
	const miles = search.results === 0 ? [] : Object.keys(search.results);
	const coords = {
		latitude: 36.1254902176224,
		longitude: -86.78860731230652,
	};

	console.log(search);

	useEffect(() => {
		if (search.requesting) {
			POST_dishSearch(inputField.search, coords)
				.then((res) => {
					search.updateData(res.data);
				})
				.catch((err) => search.error(err));
		}
	}, [search.requesting]);

	return (
		<div>
			<button onClick={() => console.log(search)}> Search </button>
			<button onClick={() => search.getCoords()}> | Get Coords </button>
			<SearchBar state={inputField} setState={setInputField} />
			{search.results.length === 0
				? ""
				: miles.map((mile) => {
						return (
							<>
								<DistanceMarker miles={mile} />
								{search.results[mile].map((value) => {
									return <RestaurantSearchResult result={value} />;
								})}
							</>
						);
				  })}
		</div>
	);
}

export default SearchView;
