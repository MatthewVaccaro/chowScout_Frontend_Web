import { useContext, useEffect } from "react";
import { restaurantContext } from "../../../data/context/restaurantContext";
import { GET_singleRestaurant } from "../../../logic/requestHandler";
import RestaurantHeader from "./organisms/restaurantHeader";
import RestaurantInfoModal from "./molecules/restaurantInfoModal"

function RestaurantView() {
	const [{ results, methods }] = useContext(restaurantContext);

	useEffect(() => {
        GET_singleRestaurant(50)
			.then((res) => {
                console.log(res.data)
				methods.updateRestaurantData(res.data);
                methods.createSectionState(res.data.menu);
                methods.restaurantTimeData(res.data.hours);
                methods.restaurantHoursInfo(res.data.hours);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="bg-white">
			<RestaurantHeader />
			{results ? <RestaurantInfoModal restaurantInfo={results.hours}/> : "Loading..."}
		</div>
	);
}

export default RestaurantView;
