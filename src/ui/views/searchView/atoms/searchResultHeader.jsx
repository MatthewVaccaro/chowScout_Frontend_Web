function SearchResultHeader({ restaurantName, status = "unknown" }) {
	status === "unknown" ? (status = "bg-gray") : status === true ? (status = "bg-green") : (status = "bg-red");
	return (
		<div className="flex items-center justify-center py-2 rounded-t-lg bg-black">
			<div className={`${status} rounded-full mr-2 w-3 h-3`} />
			<h5 className="text-white font-bold"> {restaurantName} </h5>
		</div>
	);
}

export default SearchResultHeader;
