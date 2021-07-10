import React from "react";
import { iconsDark } from "../assets/icons";
import { useHistory } from "react-router-dom";

function Button({ preset, content, startIcon, endIcon, color = "white", background, onClick, radius = "rounded-md", disabled = false }) {
	let history = useHistory();

	if (preset === "back") {
		return (
			<button className="flex items-center justify-center py-3 px-4" onClick={() => history.goBack()}>
				<img src={iconsDark.backIcon} alt="back button" />
				<p className="text-black font-medium mr-4"> Back </p>
			</button>
		);
	}

	if (preset === "main") {
		return (
			<button
				onClick={onClick}
				disabled={disabled}
				className="bg-green flex items-center justify-center py-3 px-5 gap-2 rounded-md hover:bg-green50 transition-all duration-300">
				{startIcon ? <img src={startIcon} alt="icon" /> : ""}
				{content ? <p className={`text-white font-medium mr-4`}> {content} </p> : ""}
				{endIcon ? <img src={endIcon} alt="icon" /> : ""}
			</button>
		);
	}

	if (preset === "secondary") {
		return (
			<button
				onClick={onClick}
				disabled={disabled}
				className="flex items-center justify-center py-3 px-5 gap-2 rounded-md border-black70 border-2 hover:bg-green50 transition-all duration-300">
				{content ? <p className={`text-black70 font-medium mr-4`}> {content} </p> : ""}
			</button>
		);
	}

	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={`bg-${background} flex items-center justify-center py-3 px-5 gap-2 ${radius} hover:bg-${background}50 transition-all duration-300`}>
			{startIcon ? <img src={startIcon} alt="icon" /> : ""}
			{content ? <p className={`text-${color} font-medium mr-4`}> {content} </p> : ""}
			{endIcon ? <img src={endIcon} alt="icon" /> : ""}
		</button>
	);
}

export default Button;
