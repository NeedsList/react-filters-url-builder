import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type FilterContextType = [string, (name: string, value: string) => void];

const FilterContext = createContext<FilterContextType>(["", () => {}]);

type FilterProviderProps = {
  children: ReactNode;
  onChange: (queryString: string) => void;
};

const FilterProvider = ({ children, onChange }: FilterProviderProps) => {
  const [qsValues, setQSValues] = useState({});
  const [queryString, setQueryString] = useState("");

  const updateQueryString = () => {
    const newQS = Object.keys(qsValues)
      .map((key) => `${key}=${encodeURIComponent(qsValues[key])}`)
      .join("&");
    setQueryString(newQS)
  };

  const addFilter = (name: string, value: string) => {
    if (Object.keys(qsValues)) {
      if (qsValues[name]) {
        setQSValues((oldValues) => ({...oldValues, qsValues[name]: value}))
        updateQueryString()
        return
      }
      setQSValues({...qsValues, [name]: value})
      setQueryString((oldQS) => `${oldQS}&${name}=${encodeURIComponent(value)}`);
      return
    }
    setQSValues({[name]: value})
    setQueryString(`${name}=${encodeURIComponent(value)}`)
  };

  useEffect(() => {
    onChange(queryString);
  }, [queryString]);

  return (
    <FilterContext.Provider value={[queryString, addFilter]}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilterStore = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error("`useFilterStore` must be used within a `FilterContext`.");
  }
  return context;
};

export { FilterContext, FilterProvider, useFilterStore };
