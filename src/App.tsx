import Filter from "./components/Filter";

const App = () => {
	return (
		<>
			<h1>REACT FILTERS URL BUILDER</h1>
			<Filter>
				<Filter.Item title="Filter Item" onClick={() => console.log("Click")} />
			</Filter>
		</>
	);
};

export default App;
