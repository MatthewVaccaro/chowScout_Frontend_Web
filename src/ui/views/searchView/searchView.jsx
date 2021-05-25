import axios from "axios";
import { useState, useEffect } from "react";
import RestaurantSearchResult from "./organisms/restaurantSearchResult";

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
			{data
				? data.map((cv) => {
						return <RestaurantSearchResult result={cv} />;
				  })
				: ""}
		</div>
	);
}

export default SearchView;
