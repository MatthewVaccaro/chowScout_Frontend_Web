function RestaurantHeaderContent({ restauarntName, cuisine, miles }) {
	cuisine ? (cuisine = cuisine.split(" ")[0]) : (cuisine = "");
	return (
		<div className="py-5 sm:flex sm:items-center sm:flex-col">
			<h2 className="text-black mb-2">{restauarntName} </h2>
			<h5 className="text-black70 capitalize">
				{cuisine} • {miles}
			</h5>
		</div>
	);
}

export default RestaurantHeaderContent;
