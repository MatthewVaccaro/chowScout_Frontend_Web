import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { POST_dishSearch } from "../../../../logic/requestHandler";

//atoms
import ClearButton from "../atoms/clearButton";
import SearchInput from "../atoms/searchInput";
import SearchIcon from "../atoms/searchIcon";
import { iconsDark } from "../../../assets/icons";

function SearchBar() {
	const [focus, setFocus] = useState(false);
	const [searchValue, setSearch] = useState({ search: "" });

	//TODO: This needs to be grabbed by using the google sensors
	const coords = {
		latitude: 36.1254902176224,
		longitude: -86.78860731230652,
	};
	// TODO: This will need to leverage react Query
	useEffect(() => {
		if (searchValue.search.length > 0) {
			POST_dishSearch(searchValue.search, coords)
				.then((res) => {
					console.log(res);
					console.log(searchValue);
				})
				.catch((err) => console.log(err));
		}
	}, [searchValue.search]);

	return (
		<motion.div
			className={`rounded-lg p-4 w-full mt-3 flex items-center justify-between transition-all duration-300 bg-white border-2 border-solid ${
				focus ? "border-blue" : "border-white"
			}`}>
			<div className="flex w-full items-center">
				<SearchIcon color={focus ? "#1789FC" : "#999"} />

				<div onClick={() => setFocus(true)} onBlur={() => setFocus(false)} className="w-full">
					<SearchInput state={searchValue} setState={setSearch} />
				</div>
			</div>
			<AnimatePresence>
				{searchValue.search ? (
					<motion.img
						initial={{ marginTop: "7px", opacity: "0%" }}
						animate={{ marginTop: "0px", opacity: "100%" }}
						exit={{ marginTop: "7px", opacity: "0%" }}
						className="cursor-pointer ml-4"
						src={iconsDark.closeIcon}
						alt="clear search icon"
						onClick={() => setSearch({ search: "" })}
					/>
				) : (
					""
				)}
			</AnimatePresence>
		</motion.div>
	);
}

export default SearchBar;
