import { createContext, useState } from "react";

export const searchContext = createContext();

export function SearchProvider(props) {
	const [search, setSearch] = useState({
		requesting: false,
		results: [],
		updateData: updateResults,
		makeRequest: makeRequest,
		error: resultError,
	});
	function updateResults(data) {
		console.log("Data Updated");
		setSearch({ ...search, requesting: false, results: data });
	}
	function makeRequest() {
		console.log("Request Made");
		setSearch({ ...search, requesting: true });
	}

	function resultError(err) {
		console.log(err);
		setSearch({ ...search, requesting: false });
	}

	return <searchContext.Provider value={[search]}>{props.children}</searchContext.Provider>;
}

export default SearchProvider;
