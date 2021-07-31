import Button from "../../../primitives/Button";
import RestaurantHoursDisplay from "../molecules/restaurantHours";
import RestaurantHeaderContent from "../atoms/restaurantHeaderContent";
import RestaurantMenuTabBar from "../molecules/restaurantMenuTabBar";
import { useContext } from "react";
import { restaurantContext } from "../../../../data/context/restaurantContext";
import { iconsLight } from "../../../assets/icons";
import {toggleModal} from "../../../../logic/modalToggler";

function RestaurantHeader() {
	const [{ results, sections }] = useContext(restaurantContext);
	return (
		<>
			<div className="mx-3">
				<Button preset="back" />
				{results ? (
					<>
						<RestaurantHoursDisplay restaurantHours={results.hours}/>
						<RestaurantHeaderContent restauarntName={results.business.businessName} cuisine={results.business.cuisine} miles="4.56 Miles" />
					</>
				) : (
					""
				)}
				<div className="flex w-full justify-between mb-6 sm:justify-center sm:gap-5">
					<div className="w-7/12 sm:w-auto">
						<Button preset="main" content="Get Directions" endIcon={iconsLight.directionsIcon} />
					</div>
					<div className="w-4/12 sm:w-auto">
						<Button preset="secondary" content="More Info" onClick={toggleModal} className="modal-open"/>
					</div>
				</div>
			</div>
			{sections ? <RestaurantMenuTabBar sections={sections} /> : ""}
		</>
	);
}

export default RestaurantHeader;
