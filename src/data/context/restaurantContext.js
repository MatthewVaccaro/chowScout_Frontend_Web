import { createContext, useState } from "react";
import { isOpen, setupTimes } from "../../logic/timeHelpers";
import { mapTimeToDay } from "../../logic/restaurantInfoHelper"
export const restaurantContext = createContext();

export function RestaurantProvider(props) {
	const [restaurant, setRestaurant] = useState({
		results: null,
		sections: [],
		methods: {
			updateRestaurantData: updateRestaurantData,
			createSectionState: createSectionState,
			toggleSection: toggleSection,
			restaurantTimeData: restaurantTimeData,
			restaurantHoursInfo: restaurantHoursInfo,
		},
	});

	function updateRestaurantData(data) {
		setRestaurant({ ...restaurant, results: data });
	}

	function createSectionState(data) {
		var menuSection = [];
		data.map((obj, index) => {
			var section = { id: obj.sectionId, groupTitle: obj.groupTitle, active: index === 0 ? true : false };
			menuSection.push(section);
		});
		setRestaurant((prev) => {
			return { ...prev, sections: menuSection };
		});
	}

	function toggleSection(state, id) {
		var newState = state.map((value) => {
			if (value.id === id) {
				return { ...value, active: true };
			} else {
				return { ...value, active: false };
			}
		});

		setRestaurant((prev) => {
			return { ...prev, sections: newState };
		});
	}
	function restaurantTimeData (restaurantHours) {
		setupTimes(restaurantHours)
		return isOpen()
	}
	function restaurantHoursInfo (restaurantInfo){
		return mapTimeToDay(restaurantInfo)
	}

	return <restaurantContext.Provider value={[restaurant]}>{props.children}</restaurantContext.Provider>;
}

export default RestaurantProvider;
