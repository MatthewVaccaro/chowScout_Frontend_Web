import { useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../../../primitives/Button";

//atoms
import SearchInput from "../atoms/searchInput";
import SearchIcon from "../atoms/searchIcon";
import { iconsDark, iconsLight } from "../../../assets/icons";
import { searchContext } from "../../../../data/context/searchContext";

function SearchBar({ state, setState }) {
	const [{ makeRequest }] = useContext(searchContext);
	const [focus, setFocus] = useState(false);

	return (
		<div className="flex mt-3 shadow-md rounded-md">
			<form className="flex w-full">
				<motion.div
					className={`rounded-l-md p-4 w-full flex items-center justify-between transition-all duration-300 bg-white border-2 border-solid ${
						focus ? "border-blue" : "border-white"
					}`}>
					<div className="flex w-full items-center">
						<SearchIcon color={focus ? "#1789FC" : "#999"} />

						<div onClick={() => setFocus(true)} onBlur={() => setFocus(false)} className="w-full">
							<SearchInput state={state} setState={setState} />
						</div>
					</div>
					<AnimatePresence>
						{state.search ? (
							<motion.img
								initial={{ marginTop: "7px", opacity: "0%" }}
								animate={{ marginTop: "0px", opacity: "100%" }}
								exit={{ marginTop: "7px", opacity: "0%" }}
								className="cursor-pointer ml-4"
								src={iconsDark.closeIcon}
								alt="clear search icon"
								onClick={() => setState({ search: "" })}
							/>
						) : (
							""
						)}
					</AnimatePresence>
				</motion.div>
				<Button
					background={state.search.length > 1 ? "green" : "black10"}
					icon={iconsLight.arrowIcon}
					disabled={state.search.length > 1 ? false : true}
					radius="rounded-r-md"
					onClick={(e) => {
						e.preventDefault();
						makeRequest();
					}}
				/>
			</form>
		</div>
	);
}

export default SearchBar;
