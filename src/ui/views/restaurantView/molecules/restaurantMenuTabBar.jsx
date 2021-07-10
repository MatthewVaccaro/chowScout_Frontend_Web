import { motion } from "framer-motion";
import { useContext } from "react";
import { menuDimensionsContext } from "../../../../data/context/menuDimentionsContext";
import RestaurantMenuTab from "../atoms/restaurantMenuTab";

function RestaurantMenuTabBar({ sections }) {
	const [{ xScrollWidth, viewportWidth }, { x }] = useContext(menuDimensionsContext);

	if (sections) {
		return (
			<div className="bg-white shadow-lg">
				<motion.div
					style={{ x }}
					drag={viewportWidth < xScrollWidth ? "x" : ""}
					dragConstraints={{ left: -xScrollWidth + viewportWidth, right: 0 }}
					dragElastic={0.2}
					dragMomentum={false}
					className=" flex gap-3 md:px-12 lg:px-16 px-3">
					{sections.map((obj) => {
						return <RestaurantMenuTab key={obj.groupTitle} text={obj.groupTitle} active={obj.active} id={obj.id} />;
					})}
				</motion.div>
			</div>
		);
	}
}

export default RestaurantMenuTabBar;
