import { createContext, useState, useEffect } from "react";
import { useMotionValue, useTransform, useSpring } from "framer-motion";
export const menuDimensionsContext = createContext();

export function MenuDimensionsProvider(props) {
	const x = useSpring(0, { mass: 1, tension: 500, friction: 500 });
	const [dimensions, setDimensions] = useState({
		xScrollWidth: 12,
		viewportWidth: window.outerWidth,
		methods: {
			addWidth: addWidth,
			updateScrollX: updateScrollX,
		},
	});
	// useEffect ensures the state updates when the window is resized
	useEffect(() => {
		window.addEventListener("resize", () => {
			setDimensions((prev) => {
				return { ...prev, viewportWidth: window.outerWidth };
			});
		});
		return () =>
			window.removeEventListener("resize", () => {
				setDimensions((prev) => {
					return { ...prev, viewportWidth: window.outerWidth };
				});
			});
	}, []);

	function addWidth(num) {
		setDimensions((prev) => {
			return { ...prev, xScrollWidth: prev.xScrollWidth + num + 12 };
			// Why + 12: 12 = px || gap between elements (0.75rem / gap-3)
		});
	}

	function updateScrollX(distanceLeft, elementWidth) {
		if (distanceLeft < 0) {
			x.set(x.get() + Math.abs(distanceLeft) + 12);
		}

		if (distanceLeft + elementWidth > dimensions.viewportWidth) {
			var positionMovement = distanceLeft + elementWidth - dimensions.viewportWidth;
			x.set(x.get() - positionMovement - 12);
		}
	}

	return <menuDimensionsContext.Provider value={[dimensions, { x }]}>{props.children}</menuDimensionsContext.Provider>;
}

export default MenuDimensionsProvider;
