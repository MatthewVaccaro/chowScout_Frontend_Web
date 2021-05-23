function SearchResultHeader({ restaurantName, status = "unknown" }) {
	status === "unknown" ? (status = "bg-gray") : status === true ? (status = "bg-green") : (status = "bg-red");
	return (
		<div className="flex items-center justify-center py-1 rounded-t-md bg-black">
			<div className={`${status} rounded-full mr-2 w-2 h-2`} />
			<h6 className="text-white font-semibold"> {restaurantName} </h6>
		</div>
	);
}

export default SearchResultHeader;
