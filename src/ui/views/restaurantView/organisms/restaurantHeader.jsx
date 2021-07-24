import Button from "../../../primitives/Button";
import RestaurantHeaderContent from "../atoms/restaurantHeaderContent";
import RestaurantMenuTabBar from "../molecules/restaurantMenuTabBar";
import { useContext } from "react";
import { restaurantContext } from "../../../../data/context/restaurantContext";
import { iconsLight } from "../../../assets/icons";

function RestaurantHeader() {
	const [{ results, sections }] = useContext(restaurantContext);
	return (
		<>
			<div className="mx-3">
				<Button preset="back" />
				{results ? (
					<RestaurantHeaderContent restauarntName={results.business.businessName} cuisine={results.business.cuisine} miles="4.56 Miles" />
				) : (
					""
				)}
				<div className="flex w-full justify-between mb-6 sm:justify-center sm:gap-5">
					<div className="w-7/12 sm:w-auto">
						<Button preset="main" content="Get Directions" endIcon={iconsLight.directionsIcon} />
					</div>
					<div className="w-4/12 sm:w-auto">
						<Button preset="secondary" content="More Info" />
					</div>
				</div>
			</div>
			{sections ? <RestaurantMenuTabBar sections={sections} /> : ""}
		</>
	);
}

export default RestaurantHeader;
