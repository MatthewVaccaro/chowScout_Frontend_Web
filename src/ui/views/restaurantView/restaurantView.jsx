import { useContext, useEffect } from "react";
import { restaurantContext } from "../../../data/context/restaurantContext";
import { GET_singleRestaurant } from "../../../logic/requestHandler";
import RestaurantHeader from "./organisms/restaurantHeader";

function RestaurantView() {
	const [{ methods }] = useContext(restaurantContext);

	useEffect(() => {
		GET_singleRestaurant(50)
			.then((res) => {
				methods.updateRestaurantData(res.data);
				methods.createSectionState(res.data.menu);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="bg-white">
			<RestaurantHeader />
		</div>
	);
}

export default RestaurantView;
