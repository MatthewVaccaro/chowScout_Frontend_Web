function DishContents({ title, price, description, divider = false }) {
	return (
		<div>
			<div className="flex justify-between mb-1 ">
				<p className="font-semibold"> {title} </p>
				<p> {price ? "$" + price : "--"} </p>
			</div>
			<h5 className="text-black70"> {description} </h5>
			{divider ? <div className="w-full h-px bg-black my-3 opacity-10 " /> : ""}
		</div>
	);
}

export default DishContents;
