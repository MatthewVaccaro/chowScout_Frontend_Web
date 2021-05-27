import { changeHandler } from "../../../../logic/helperFunctions";

function SearchInput({ state, setState }) {
	return (
		<div className="w-full">
			<input
				name="search"
				className="text-2xl w-full ml-4"
				style={{ outline: "none" }}
				placeholder="Enter Search Here"
				onChange={(e) => {
					changeHandler(e, state, setState);
				}}
				value={state.search}
			/>
		</div>
	);
}

export default SearchInput;
