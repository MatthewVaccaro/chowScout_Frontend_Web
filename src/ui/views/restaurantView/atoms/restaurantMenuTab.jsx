import { useContext, useRef, useEffect } from "react";
import { menuDimensionsContext } from "../../../../data/context/menuDimentionsContext";
import { restaurantContext } from "../../../../data/context/restaurantContext";

function RestaurantMenuTab({ active, text, id }) {
	const [{ sections, methods }] = useContext(restaurantContext);
	const [dimensions] = useContext(menuDimensionsContext);
	var textState = active ? "text-green" : "text-black70";
	var bgState = active ? "bg-green10" : "";
	var tabRef = useRef(null);

	useEffect(() => {
		var width = tabRef.current.clientWidth;
		dimensions.methods.addWidth(width);
	}, []);

	return (
		<div
			ref={tabRef}
			className={`${bgState} px-1 py-2 rounded-md transition-all duration-300`}
			onClick={() => {
				const { left, width } = tabRef.current.getBoundingClientRect();
				methods.toggleSection(sections, id);
				dimensions.methods.updateScrollX(left, width);
			}}>
			<p className={`${textState} font-medium whitespace-nowrap transition-all duration-300`}> {text} </p>
		</div>
	);
}

export default RestaurantMenuTab;
