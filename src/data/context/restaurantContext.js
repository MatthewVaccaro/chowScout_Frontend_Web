import { createContext, useState } from "react";
export const restaurantContext = createContext();

export function RestaurantProvider(props) {
	const [restaurant, setRestaurant] = useState({
		results: null,
		sections: [],
		methods: {
			updateRestaurantData: updateRestaurantData,
			createSectionState: createSectionState,
			toggleSection: toggleSection,
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

	return <restaurantContext.Provider value={[restaurant]}>{props.children}</restaurantContext.Provider>;
}

export default RestaurantProvider;
