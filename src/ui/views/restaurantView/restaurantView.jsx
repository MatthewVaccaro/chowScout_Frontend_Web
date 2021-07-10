import axios from "axios";
import { useContext, useEffect } from "react";
import { menuDimensionsContext } from "../../../data/context/menuDimentionsContext";
import { restaurantContext } from "../../../data/context/restaurantContext";
import { GET_singleRestaurant } from "../../../logic/requestHandler";
import RestaurantMenuTabBar from "./molecules/restaurantMenuTabBar";

function RestaurantView() {
	const [{ results, sections, methods }] = useContext(restaurantContext);

	useEffect(() => {
		GET_singleRestaurant(43)
			.then((res) => {
				methods.updateRestaurantData(res.data);
				methods.createSectionState(res.data.menu);
			})
			.catch((err) => console.log(err));
	}, []);

	return <div>{sections ? <RestaurantMenuTabBar sections={sections} /> : ""}</div>;
}

export default RestaurantView;
