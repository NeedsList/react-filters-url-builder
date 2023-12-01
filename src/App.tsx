import Filter from "./components/Filter";

const App = () => {
  const handleOnChange = (queryString: string) => {
    console.log(queryString);
    // replace(queryString)
  };

  return (
    <>
      <h1>REACT FILTERS URL BUILDER</h1>
      <Filter onChange={handleOnChange}>
        <Filter.Item name="keyword" label="Keyword" />
        <Filter.Item name="posted_by" label="Posted by" />
        <Filter.Item name="status" label="Status" />
      </Filter>
    </>
  );
};

export default App;
