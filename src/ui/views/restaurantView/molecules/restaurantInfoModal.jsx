import { useContext } from "react";
import { restaurantContext } from "../../../../data/context/restaurantContext";

function RestaurantInfoModal({restaurantInfo}) {
	const [{ methods }] = useContext(restaurantContext);
	const hoursInfo = methods.restaurantHoursInfo(restaurantInfo);
		return (
			<div className="shadow-lg py-2 bg-white">
				{hoursInfo.slice(2).map(dayAndTime => (
					<p key={dayAndTime[0]}>{dayAndTime}</p>
				))}
			</div>
		);
}

export default RestaurantInfoModal;
