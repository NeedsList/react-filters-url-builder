import { useState } from "react";
import { Filter } from "@needslist/react-filter-url-builder";
import "./App.css";

const App = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleOnChange = (queryString: string) => {
		console.log(queryString);
	};

	return (
		<>
			<h1
				className="inline cursor-pointer"
				onClick={() => setIsOpen((oldValue) => !oldValue)}>
				REACT FILTERS URL BUILDER
			</h1>
			<Filter isOpen={isOpen} onChange={handleOnChange}>
				<Filter.Item name="keyword" label="Keyword" />
				<Filter.Item name="posted_by" label="Posted by" />
				<Filter.Item name="status" label="Status" />
			</Filter>
		</>
	);
};

export default App;
