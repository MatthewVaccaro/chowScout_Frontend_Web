import { iconsDark } from "../../../assets/icons";

function ClearButton({ visibility }) {
	return <div>{visibility ? <img className="cursor-pointer ml-4" src={iconsDark.closeIcon} alt="clear search icon" /> : ""}</div>;
}

export default ClearButton;
