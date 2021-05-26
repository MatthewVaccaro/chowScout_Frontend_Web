import { iconsDark } from "../../../assets/icons";

function DistanceMarker({ miles }) {
	return (
		<div className="flex items-center">
			<img src={iconsDark.pinIconRed} alt="Red pin icon" />
			<h5 className="font-medium text-black70">
				Less than <span className="font-bold text-black">{miles}</span> {miles > 1 ? "miles" : "mile"} away
			</h5>
		</div>
	);
}

export default DistanceMarker;
