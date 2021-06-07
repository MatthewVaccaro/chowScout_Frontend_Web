import React from "react";

function Button({ content, icon, color = "white", background, onClick, radius = "rounded-md", disabled = false }) {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={`bg-${background} flex items-center justify-center py-4 px-6 ${radius} hover:bg-${background}50 transition-all duration-300`}>
			{content ? <p className={`text-${color} font-medium mr-4`}> {content} </p> : ""}
			<img src={icon} alt="icon" />
		</button>
	);
}

export default Button;
